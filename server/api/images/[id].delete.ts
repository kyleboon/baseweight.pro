import { unlinkSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import config from 'config';
import { eq, and } from 'drizzle-orm';
import { getDb } from '../../db.js';
import * as schema from '../../schema.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const id = parseInt(getRouterParam(event, 'id') ?? '', 10);
    if (isNaN(id)) {
        setResponseStatus(event, 400);
        return { message: 'Invalid image id.' };
    }

    const db = getDb();
    const rows = await db
        .select()
        .from(schema.images)
        .where(and(eq(schema.images.id, id), eq(schema.images.user_id, user.id)));

    if (!rows.length) {
        setResponseStatus(event, 404);
        return { message: 'Image not found.' };
    }

    const image = rows[0];

    if (image.is_local) {
        const uploadsBase = resolve(process.cwd(), config.get('uploadsPath') as string);
        const filePath = join(uploadsBase, image.filename);
        if (existsSync(filePath)) {
            unlinkSync(filePath);
        }
    }

    await db.delete(schema.images).where(eq(schema.images.id, id));

    return { ok: true };
});
