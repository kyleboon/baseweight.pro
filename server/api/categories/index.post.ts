import { and, eq } from 'drizzle-orm';
import * as schema from '../../schema.js';
import { getDb } from '../../db.js';
import { readValidatedBody, createCategorySchema } from '../../utils/validation.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        throw createError({ statusCode: 401, message: 'Please log in.' });
    }

    const body = await readValidatedBody(event, createCategorySchema);

    const db = getDb();

    let lists;
    try {
        lists = await db
            .select({ id: schema.lists.id })
            .from(schema.lists)
            .where(and(eq(schema.lists.id, body.list_id), eq(schema.lists.user_id, user.id)));
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to verify list ownership.' });
    }

    if (!lists.length) {
        throw createError({ statusCode: 404, message: 'List not found.' });
    }

    try {
        const existing = await db
            .select({ sort_order: schema.categories.sort_order })
            .from(schema.categories)
            .where(eq(schema.categories.list_id, body.list_id))
            .orderBy(schema.categories.sort_order);

        const maxSort = existing.length ? Math.max(...existing.map((c) => c.sort_order ?? 0)) : -1;

        const [category] = await db
            .insert(schema.categories)
            .values({
                user_id: user.id,
                list_id: body.list_id,
                name: body.name,
                sort_order: maxSort + 1,
            })
            .returning();

        return category;
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to create category.' });
    }
});
