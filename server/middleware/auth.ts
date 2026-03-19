import { findUserByToken } from '../utils/db.js';

// Nitro server middleware: runs on every request.
// Populates event.context.user from the `lp` session cookie when valid.
// Individual API routes that require auth check event.context.user themselves.
export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'lp');
    if (!token) return;

    try {
        const user = await findUserByToken(token);
        if (user) {
            event.context.user = user;
        }
    } catch {
        // DB error — continue unauthenticated
    }
});
