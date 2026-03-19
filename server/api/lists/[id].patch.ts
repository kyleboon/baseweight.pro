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
        return { errors: [{ message: 'Invalid list id.' }] };
    }

    const body = await readBody(event);
    const db = getDb();

    const updates: Partial<typeof schema.lists.$inferInsert> = {};
    if (body.name !== undefined) updates.name = String(body.name);
    if (body.description !== undefined) updates.description = String(body.description);
    if (body.sort_order !== undefined) updates.sort_order = Number(body.sort_order);

    if (!Object.keys(updates).length) {
        setResponseStatus(event, 400);
        return { errors: [{ message: 'No changes requested.' }] };
    }

    const [updated] = await db
        .update(schema.lists)
        .set(updates)
        .where(and(eq(schema.lists.id, id), eq(schema.lists.user_id, user.id)))
        .returning();

    if (!updated) {
        setResponseStatus(event, 404);
        return { errors: [{ message: 'List not found.' }] };
    }

    return updated;
});
