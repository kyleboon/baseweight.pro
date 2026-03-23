import { createRequire } from 'module';
import { randomUUID } from 'node:crypto';
import { mkdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import config from 'config';
import { and, count, eq } from 'drizzle-orm';
import { getDb } from '../db.js';
import * as schema from '../schema.js';

const MAX_IMAGES_PER_ENTITY = 4;

const ALLOWED_TYPES = new Set(['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp']);
const MAX_SIZE_BYTES = (config.get('maxImageSizeMb') as number) * 1024 * 1024;

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const _require = createRequire(process.argv[1]);
    const formidable = _require('formidable');
    const sharp = _require('sharp');

    const uploadsBase = resolve(process.cwd(), config.get('uploadsPath') as string);
    const userDir = join(uploadsBase, user.id);
    mkdirSync(userDir, { recursive: true });

    const form = new formidable.IncomingForm({ maxFileSize: MAX_SIZE_BYTES });
    const { fields, files } = await new Promise<any>((resolve, reject) => {
        form.parse(event.node.req, (err: any, parsedFields: any, parsedFiles: any) => {
            if (err) reject(err);
            else resolve({ fields: parsedFields, files: parsedFiles });
        });
    });

    if (!files?.image?.[0]) {
        setResponseStatus(event, 400);
        return { message: 'No image file provided.' };
    }

    const file = files.image[0];

    if (!ALLOWED_TYPES.has(file.mimetype)) {
        setResponseStatus(event, 400);
        return { message: 'File must be an image (PNG, JPG, GIF, or WebP).' };
    }

    const entityType = fields?.entityType?.[0];
    const entityId = parseInt(fields?.entityId?.[0], 10);
    const sortOrder = parseInt(fields?.sortOrder?.[0] ?? '0', 10);

    if (!entityType || !['item', 'category', 'list'].includes(entityType) || isNaN(entityId)) {
        setResponseStatus(event, 400);
        return { message: 'Invalid entityType or entityId.' };
    }

    const db = getDb();
    const [{ total }] = await db
        .select({ total: count() })
        .from(schema.images)
        .where(
            and(
                eq(schema.images.entity_type, entityType),
                eq(schema.images.entity_id, entityId),
                eq(schema.images.user_id, user.id),
            ),
        );
    if (total >= MAX_IMAGES_PER_ENTITY) {
        setResponseStatus(event, 400);
        return { message: `Maximum of ${MAX_IMAGES_PER_ENTITY} images per item.` };
    }

    const maxWidth = config.get('imageMaxWidthPx') as number;
    const filename = `${user.id}/${randomUUID()}.webp`;
    const outputPath = join(uploadsBase, filename);

    await sharp(file.filepath)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(outputPath);

    const [inserted] = await db
        .insert(schema.images)
        .values({
            user_id: user.id,
            entity_type: entityType,
            entity_id: entityId,
            filename,
            is_local: true,
            sort_order: sortOrder,
            created_at: Math.floor(Date.now() / 1000),
        })
        .returning();

    return {
        id: inserted.id,
        url: `/uploads/${filename}`,
    };
});
