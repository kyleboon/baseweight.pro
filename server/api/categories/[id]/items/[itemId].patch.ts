import { and, eq } from 'drizzle-orm';
import * as schema from '../../../../schema.js';
import { getDb } from '../../../../db.js';
import { readValidatedBody, updateItemSchema } from '../../../../utils/validation.js';

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

    const body = await readValidatedBody(event, updateItemSchema);

    // Build updates from only the fields that were provided
    const updates: Partial<typeof schema.category_items.$inferInsert> = {};
    if (body.name !== undefined) updates.name = body.name;
    if (body.description !== undefined) updates.description = body.description;
    if (body.weight !== undefined) updates.weight = body.weight;
    if (body.author_unit !== undefined) updates.author_unit = body.author_unit;
    if (body.price !== undefined) updates.price = body.price;
    if (body.url !== undefined) updates.url = body.url;
    if (body.qty !== undefined) updates.qty = body.qty;
    if (body.worn !== undefined) (updates as any).worn = body.worn;
    if (body.consumable !== undefined) (updates as any).consumable = body.consumable;
    if (body.star !== undefined) updates.star = body.star;
    if (body.sort_order !== undefined) updates.sort_order = body.sort_order;

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
