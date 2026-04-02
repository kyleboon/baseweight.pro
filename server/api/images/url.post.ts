import { and, count, eq, max } from 'drizzle-orm';
import { getDb } from '../../db.js';
import * as schema from '../../schema.js';
import { readValidatedBody, addImageUrlSchema } from '../../utils/validation.js';

const MAX_IMAGES_PER_ENTITY = 4;

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) throw createError({ statusCode: 401, message: 'Please log in.' });

    const body = await readValidatedBody(event, addImageUrlSchema);
    const { entityType, entityId, url } = body;

    const db = getDb();

    let total: number;
    try {
        const [result] = await db
            .select({ total: count() })
            .from(schema.images)
            .where(
                and(
                    eq(schema.images.entity_type, entityType),
                    eq(schema.images.entity_id, entityId),
                    eq(schema.images.user_id, user.id),
                ),
            );
        total = result.total;
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to check image count.' });
    }

    if (total >= MAX_IMAGES_PER_ENTITY) {
        throw createError({ statusCode: 400, message: `Maximum of ${MAX_IMAGES_PER_ENTITY} images per item.` });
    }

    let sortOrder: number;
    try {
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
        sortOrder = (result[0]?.maxOrder ?? -1) + 1;
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to determine sort order.' });
    }

    try {
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
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to save image record.' });
    }
});
