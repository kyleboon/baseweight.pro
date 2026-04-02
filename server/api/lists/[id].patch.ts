import { and, eq } from 'drizzle-orm';
import * as schema from '../../schema.js';
import { getDb } from '../../db.js';
import { readValidatedBody, updateListSchema } from '../../utils/validation.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        throw createError({ statusCode: 401, message: 'Please log in.' });
    }

    const id = Number(getRouterParam(event, 'id'));
    if (!id) {
        throw createError({ statusCode: 400, message: 'Invalid list id.' });
    }

    const body = await readValidatedBody(event, updateListSchema);
    const db = getDb();

    const updates: Partial<typeof schema.lists.$inferInsert> = {};
    if (body.name !== undefined) updates.name = body.name;
    if (body.description !== undefined) updates.description = body.description;
    if (body.sort_order !== undefined) updates.sort_order = body.sort_order;

    let updated;
    try {
        [updated] = await db
            .update(schema.lists)
            .set(updates)
            .where(and(eq(schema.lists.id, id), eq(schema.lists.user_id, user.id)))
            .returning();
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to update list.' });
    }

    if (!updated) {
        throw createError({ statusCode: 404, message: 'List not found.' });
    }

    return updated;
});
