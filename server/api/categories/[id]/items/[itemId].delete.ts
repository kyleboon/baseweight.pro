import { and, eq } from 'drizzle-orm';
import * as schema from '../../../../schema.js';
import { getDb } from '../../../../db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        throw createError({ statusCode: 401, message: 'Please log in.' });
    }

    const categoryId = Number(getRouterParam(event, 'id'));
    const itemId = Number(getRouterParam(event, 'itemId'));
    if (!categoryId || !itemId) {
        throw createError({ statusCode: 400, message: 'Invalid id.' });
    }

    const db = getDb();

    let existing;
    try {
        existing = await db
            .select({ id: schema.category_items.id })
            .from(schema.category_items)
            .where(
                and(
                    eq(schema.category_items.id, itemId),
                    eq(schema.category_items.category_id, categoryId),
                    eq(schema.category_items.user_id, user.id),
                ),
            );
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to look up item.' });
    }

    if (!existing.length) {
        throw createError({ statusCode: 404, message: 'Item not found.' });
    }

    try {
        await db.delete(schema.category_items).where(eq(schema.category_items.id, itemId));
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to delete item.' });
    }

    return { ok: true };
});
