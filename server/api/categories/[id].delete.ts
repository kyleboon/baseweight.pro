import { and, eq } from 'drizzle-orm';
import * as schema from '../../schema.js';
import { getDb } from '../../db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        throw createError({ statusCode: 401, message: 'Please log in.' });
    }

    const id = Number(getRouterParam(event, 'id'));
    if (!id) {
        throw createError({ statusCode: 400, message: 'Invalid category id.' });
    }

    const db = getDb();

    let existing;
    try {
        existing = await db
            .select({ id: schema.categories.id })
            .from(schema.categories)
            .where(and(eq(schema.categories.id, id), eq(schema.categories.user_id, user.id)));
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to look up category.' });
    }

    if (!existing.length) {
        throw createError({ statusCode: 404, message: 'Category not found.' });
    }

    try {
        await db.delete(schema.categories).where(eq(schema.categories.id, id));
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to delete category.' });
    }

    return { ok: true };
});
