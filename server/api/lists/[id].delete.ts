import { and, eq } from 'drizzle-orm';
import * as schema from '../../schema.js';
import { getDb } from '../../db.js';

export default defineEventHandler((event) => {
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

    const db = getDb();
    const existing = db
        .select({ id: schema.lists.id })
        .from(schema.lists)
        .where(and(eq(schema.lists.id, id), eq(schema.lists.user_id, user.id)))
        .all();

    if (!existing.length) {
        setResponseStatus(event, 404);
        return { errors: [{ message: 'List not found.' }] };
    }

    db.transaction((tx) => {
        tx.delete(schema.lists).where(eq(schema.lists.id, id)).run();

        // If the deleted list was the default, reset to the first remaining list
        const settings = tx
            .select({ default_list_id: schema.library_settings.default_list_id })
            .from(schema.library_settings)
            .where(eq(schema.library_settings.user_id, user.id))
            .all();

        if (settings.length && settings[0].default_list_id === id) {
            const remaining = tx
                .select({ id: schema.lists.id })
                .from(schema.lists)
                .where(eq(schema.lists.user_id, user.id))
                .orderBy(schema.lists.sort_order)
                .limit(1)
                .all();

            tx.update(schema.library_settings)
                .set({ default_list_id: remaining.length ? remaining[0].id : null })
                .where(eq(schema.library_settings.user_id, user.id))
                .run();
        }
    });

    return { ok: true };
});
