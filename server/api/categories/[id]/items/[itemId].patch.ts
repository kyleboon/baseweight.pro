import { and, eq } from 'drizzle-orm';
import * as schema from '../../../../schema.js';
import { getDb } from '../../../../db.js';

const ITEM_FIELDS = [
    'name',
    'description',
    'weight',
    'author_unit',
    'price',
    'url',
    'qty',
    'worn',
    'consumable',
    'star',
    'sort_order',
] as const;

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

    const body = await readBody(event);
    const updates: Partial<typeof schema.category_items.$inferInsert> = {};

    for (const field of ITEM_FIELDS) {
        if (body[field] === undefined) continue;
        if (field === 'weight' || field === 'price') {
            (updates as any)[field] = Number(body[field]);
        } else if (field === 'worn' || field === 'consumable') {
            (updates as any)[field] = body[field] ? 1 : 0;
        } else if (field === 'qty' || field === 'star' || field === 'sort_order') {
            (updates as any)[field] = Number(body[field]);
        } else {
            (updates as any)[field] = String(body[field]);
        }
    }

    if (!Object.keys(updates).length) {
        throw createError({ statusCode: 400, message: 'No changes requested.' });
    }

    const db = getDb();
    let updated;
    try {
        [updated] = await db
            .update(schema.category_items)
            .set(updates)
            .where(
                and(
                    eq(schema.category_items.id, itemId),
                    eq(schema.category_items.category_id, categoryId),
                    eq(schema.category_items.user_id, user.id),
                ),
            )
            .returning();
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to update item.' });
    }

    if (!updated) {
        throw createError({ statusCode: 404, message: 'Item not found.' });
    }

    return updated;
});
