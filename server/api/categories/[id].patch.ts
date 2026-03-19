import { and, eq } from 'drizzle-orm';
import * as schema from '../../schema.js';
import { getDb } from '../../db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const id = Number(getRouterParam(event, 'id'));
    if (!id) {
        setResponseStatus(event, 400);
        return { errors: [{ message: 'Invalid category id.' }] };
    }

    const body = await readBody(event);
    const updates: Partial<typeof schema.categories.$inferInsert> = {};
    if (body.name !== undefined) updates.name = String(body.name);
    if (body.sort_order !== undefined) updates.sort_order = Number(body.sort_order);

    if (!Object.keys(updates).length) {
        setResponseStatus(event, 400);
        return { errors: [{ message: 'No changes requested.' }] };
    }

    const db = getDb();
    const [updated] = await db
        .update(schema.categories)
        .set(updates)
        .where(and(eq(schema.categories.id, id), eq(schema.categories.user_id, user.id)))
        .returning();

    if (!updated) {
        setResponseStatus(event, 404);
        return { errors: [{ message: 'Category not found.' }] };
    }

    return updated;
});
