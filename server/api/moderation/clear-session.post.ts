import { findUserByUsername, updateUser } from '../../utils/db.js';
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

    const body = await readBody(event);
    const username = String(body.username ?? '').toLowerCase().trim();
    console.log({ message: 'MODERATION Clear session start', username });

    const target = await findUserByUsername(username);
    if (!target) {
        setResponseStatus(event, 500);
        return { message: 'An error occurred.' };
    }

    await updateUser(target.id, { token: '' });
    console.log({ message: 'MODERATION Clear session succeeded', username });
    return { message: 'success' };
});
