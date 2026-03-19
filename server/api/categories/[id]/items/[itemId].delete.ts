import { and, eq } from 'drizzle-orm';
import * as schema from '../../../../schema.js';
import { getDb } from '../../../../db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const categoryId = Number(getRouterParam(event, 'id'));
    const itemId = Number(getRouterParam(event, 'itemId'));
    if (!categoryId || !itemId) {
        setResponseStatus(event, 400);
        return { errors: [{ message: 'Invalid id.' }] };
    }

    const db = getDb();
    const existing = await db
        .select({ id: schema.category_items.id })
        .from(schema.category_items)
        .where(
            and(
                eq(schema.category_items.id, itemId),
                eq(schema.category_items.category_id, categoryId),
                eq(schema.category_items.user_id, user.id),
            ),
        );

    if (!existing.length) {
        setResponseStatus(event, 404);
        return { errors: [{ message: 'Item not found.' }] };
    }

    await db.delete(schema.category_items).where(eq(schema.category_items.id, itemId));
    return { ok: true };
});
