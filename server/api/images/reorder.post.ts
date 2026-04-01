import { eq, and, inArray } from 'drizzle-orm';
import { getDb } from '../../db.js';
import * as schema from '../../schema.js';

interface ReorderEntry {
    id: number;
    sort_order: number;
}

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        throw createError({ statusCode: 401, message: 'Please log in.' });
    }

    const body = (await readBody(event)) as ReorderEntry[];

    if (!Array.isArray(body) || body.some((e) => typeof e.id !== 'number' || typeof e.sort_order !== 'number')) {
        throw createError({ statusCode: 400, message: 'Body must be an array of { id, sort_order }.' });
    }

    const ids = body.map((e) => e.id);
    const db = getDb();

    let owned;
    try {
        owned = await db
            .select({ id: schema.images.id })
            .from(schema.images)
            .where(and(inArray(schema.images.id, ids), eq(schema.images.user_id, user.id)));
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to verify image ownership.' });
    }

    if (owned.length !== ids.length) {
        throw createError({ statusCode: 403, message: 'One or more images not found.' });
    }

    try {
        for (const entry of body) {
            await db.update(schema.images).set({ sort_order: entry.sort_order }).where(eq(schema.images.id, entry.id));
        }
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to reorder images.' });
    }

    return { ok: true };
});
