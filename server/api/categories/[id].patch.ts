import { and, eq } from 'drizzle-orm';
import * as schema from '../../schema.js';
import { getDb } from '../../db.js';
import { readValidatedBody, updateCategorySchema } from '../../utils/validation.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        throw createError({ statusCode: 401, message: 'Please log in.' });
    }

    const id = Number(getRouterParam(event, 'id'));
    if (!id) {
        throw createError({ statusCode: 400, message: 'Invalid category id.' });
    }

    const body = await readValidatedBody(event, updateCategorySchema);
    const updates: Partial<typeof schema.categories.$inferInsert> = {};
    if (body.name !== undefined) updates.name = body.name;
    if (body.sort_order !== undefined) updates.sort_order = body.sort_order;

    const db = getDb();
    let updated;
    try {
        [updated] = await db
            .update(schema.categories)
            .set(updates)
            .where(and(eq(schema.categories.id, id), eq(schema.categories.user_id, user.id)))
            .returning();
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to update category.' });
    }

    if (!updated) {
        throw createError({ statusCode: 404, message: 'Category not found.' });
    }

    return updated;
});
