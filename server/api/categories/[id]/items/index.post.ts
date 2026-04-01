import { and, eq } from 'drizzle-orm';
import * as schema from '../../../../schema.js';
import { getDb } from '../../../../db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        throw createError({ statusCode: 401, message: 'Please log in.' });
    }

    const categoryId = Number(getRouterParam(event, 'id'));
    if (!categoryId) {
        throw createError({ statusCode: 400, message: 'Invalid category id.' });
    }

    const db = getDb();

    let cats;
    try {
        cats = await db
            .select({ id: schema.categories.id })
            .from(schema.categories)
            .where(and(eq(schema.categories.id, categoryId), eq(schema.categories.user_id, user.id)));
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to verify category ownership.' });
    }

    if (!cats.length) {
        throw createError({ statusCode: 404, message: 'Category not found.' });
    }

    const body = await readBody(event);

    try {
        const existing = await db
            .select({ sort_order: schema.category_items.sort_order })
            .from(schema.category_items)
            .where(eq(schema.category_items.category_id, categoryId))
            .orderBy(schema.category_items.sort_order);

        const maxSort = existing.length ? Math.max(...existing.map((i) => i.sort_order ?? 0)) : -1;

        const [item] = await db
            .insert(schema.category_items)
            .values({
                category_id: categoryId,
                user_id: user.id,
                global_item_id: body.global_item_id ? Number(body.global_item_id) : null,
                name: String(body.name ?? ''),
                description: String(body.description ?? ''),
                weight: Number(body.weight ?? 0),
                author_unit: String(body.author_unit ?? 'oz'),
                price: Number(body.price ?? 0),
                url: String(body.url ?? ''),
                qty: Number(body.qty ?? 1),
                worn: body.worn ? 1 : 0,
                consumable: body.consumable ? 1 : 0,
                star: Number(body.star ?? 0),
                sort_order: maxSort + 1,
            })
            .returning();

        return item;
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to create item.' });
    }
});
