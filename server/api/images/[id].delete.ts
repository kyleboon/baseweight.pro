import { unlinkSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import config from 'config';
import { eq, and } from 'drizzle-orm';
import { getDb } from '../../db.js';
import * as schema from '../../schema.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        throw createError({ statusCode: 401, message: 'Please log in.' });
    }

    const id = parseInt(getRouterParam(event, 'id') ?? '', 10);
    if (isNaN(id)) {
        throw createError({ statusCode: 400, message: 'Invalid image id.' });
    }

    const db = getDb();

    let rows;
    try {
        rows = await db
            .select()
            .from(schema.images)
            .where(and(eq(schema.images.id, id), eq(schema.images.user_id, user.id)));
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to look up image.' });
    }

    if (!rows.length) {
        throw createError({ statusCode: 404, message: 'Image not found.' });
    }

    const image = rows[0];

    if (image.is_local) {
        const uploadsBase = resolve(process.cwd(), config.get('uploadsPath') as string);
        const filePath = join(uploadsBase, image.filename);
        try {
            if (existsSync(filePath)) {
                unlinkSync(filePath);
            }
        } catch (err) {
            // Log but don't fail — the DB record should still be deleted
            event.context.logger?.warn({ err, filePath }, 'Failed to delete image file from disk');
        }
    }

    try {
        await db.delete(schema.images).where(eq(schema.images.id, id));
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to delete image record.' });
    }

    return { ok: true };
});
