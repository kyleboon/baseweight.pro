import { and, count, eq, max } from 'drizzle-orm';
import { getDb } from '../../db.js';
import * as schema from '../../schema.js';

const MAX_IMAGES_PER_ENTITY = 4;

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) throw createError({ statusCode: 401, message: 'Please log in.' });

    const body = await readBody(event);
    const { entityType, entityId, url } = body;

    if (!url || typeof url !== 'string' || !url.trim()) {
        throw createError({ statusCode: 400, message: 'URL is required.' });
    }
    if (!['item', 'category', 'list'].includes(entityType)) {
        throw createError({ statusCode: 400, message: 'Invalid entityType.' });
    }
    if (!Number.isInteger(entityId)) {
        throw createError({ statusCode: 400, message: 'Invalid entityId.' });
    }

    const db = getDb();

    const [{ total }] = await db
        .select({ total: count() })
        .from(schema.images)
        .where(
            and(
                eq(schema.images.entity_type, entityType),
                eq(schema.images.entity_id, entityId),
                eq(schema.images.user_id, user.id),
            ),
        );
    if (total >= MAX_IMAGES_PER_ENTITY) {
        throw createError({ statusCode: 400, message: `Maximum of ${MAX_IMAGES_PER_ENTITY} images per item.` });
    }

    const result = await db
        .select({ maxOrder: max(schema.images.sort_order) })
        .from(schema.images)
        .where(
            and(
                eq(schema.images.entity_type, entityType),
                eq(schema.images.entity_id, entityId),
                eq(schema.images.user_id, user.id),
            ),
        );
    const sortOrder = (result[0]?.maxOrder ?? -1) + 1;

    const [inserted] = await db
        .insert(schema.images)
        .values({
            user_id: user.id,
            entity_type: entityType,
            entity_id: entityId,
            filename: url.trim(),
            is_local: false,
            sort_order: sortOrder,
            created_at: Math.floor(Date.now() / 1000),
        })
        .returning();

    return { id: inserted.id, url: url.trim(), sort_order: inserted.sort_order };
});
