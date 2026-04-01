import { and, eq } from 'drizzle-orm';
import * as schema from '../../schema.js';
import { getDb } from '../../db.js';

export default defineEventHandler((event) => {
    const user = event.context.user;
    if (!user) {
        throw createError({ statusCode: 401, message: 'Please log in.' });
    }

    const id = Number(getRouterParam(event, 'id'));
    if (!id) {
        throw createError({ statusCode: 400, message: 'Invalid list id.' });
    }

    const db = getDb();

    let existing;
    try {
        existing = db
            .select({ id: schema.lists.id })
            .from(schema.lists)
            .where(and(eq(schema.lists.id, id), eq(schema.lists.user_id, user.id)))
            .all();
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to look up list.' });
    }

    if (!existing.length) {
        throw createError({ statusCode: 404, message: 'List not found.' });
    }

    try {
        db.transaction((tx) => {
            tx.delete(schema.lists).where(eq(schema.lists.id, id)).run();

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
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to delete list.' });
    }

    return { ok: true };
});
