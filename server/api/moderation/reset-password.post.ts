import bcrypt from 'bcryptjs';
import { randomBytes } from 'node:crypto';

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
    console.log({ message: 'MODERATION Reset password start', username });

    const target = await findUserByUsername(username);
    if (!target) {
        setResponseStatus(event, 500);
        return { message: 'An error occurred.' };
    }

    const newPassword = randomBytes(12).toString('hex');
    const salt = await bcrypt.genSalt(10);
    const newHash = await bcrypt.hash(newPassword, salt);
    await updateUser(target.id, { password: newHash });
    console.log({ message: 'MODERATION password changed', username });
    return { newPassword };
});
