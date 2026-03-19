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

    const db = getDb();
    const existing = await db
        .select({ id: schema.categories.id })
        .from(schema.categories)
        .where(and(eq(schema.categories.id, id), eq(schema.categories.user_id, user.id)));

    if (!existing.length) {
        setResponseStatus(event, 404);
        return { errors: [{ message: 'Category not found.' }] };
    }

    await db.delete(schema.categories).where(eq(schema.categories.id, id));
    return { ok: true };
});
