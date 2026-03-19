import { or, like } from 'drizzle-orm';
import * as schema from '../../schema.js';
import { getDb } from '../../db.js';
import { isModerator } from '../../utils/auth.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }
    if (!isModerator(user.username)) {
        setResponseStatus(event, 403);
        return { message: 'Denied.' };
    }

    const q = String(getQuery(event).q ?? '').toLowerCase().trim();
    const db = getDb();

    const rows = await db
        .select({
            username: schema.users.username,
            email: schema.users.email,
        })
        .from(schema.users)
        .where(
            or(
                like(schema.users.username, `${q}%`),
                like(schema.users.email, `${q}%`),
            ),
        );

    return { results: rows };
});
