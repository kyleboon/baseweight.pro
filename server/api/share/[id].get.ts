import { eq } from 'drizzle-orm';
import * as schema from '../../schema.js';
import { getDb } from '../../db.js';
import { buildLibraryBlob } from '../../utils/library.js';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');

    if (!id) {
        throw createError({ statusCode: 400, message: 'No list specified' });
    }

    const db = getDb();

    let lists;
    try {
        lists = await db.select().from(schema.lists).where(eq(schema.lists.external_id, id));
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to look up list.' });
    }

    if (!lists.length) {
        throw createError({ statusCode: 404, message: 'List not found' });
    }

    const list = lists[0]!;

    let libraryBlob;
    try {
        libraryBlob = await buildLibraryBlob(list.user_id);
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to load library data.' });
    }

    libraryBlob.defaultListId = list.id;

    return {
        library: libraryBlob,
        externalId: id,
    };
});
