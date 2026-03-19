import bcrypt from 'bcryptjs';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const body = await readBody(event);
    console.log({ message: 'Starting account changes', username: user.username });

    let verified: any;
    try {
        verified = await verifyPassword(user.username, String(body.currentPassword ?? ''));
    } catch {
        setResponseStatus(event, 400);
        return { errors: [{ field: 'currentPassword', message: 'Your current password is incorrect.' }] };
    }

    if (body.newPassword) {
        const newPassword = String(body.newPassword);
        if (newPassword.length < 5 || newPassword.length > 60) {
            setResponseStatus(event, 400);
            return { errors: [{ field: 'newPassword', message: 'Please enter a password between 5 and 60 characters.' }] };
        }
        const salt = await bcrypt.genSalt(10);
        const updates: any = { password: await bcrypt.hash(newPassword, salt) };
        if (body.newEmail) updates.email = String(body.newEmail);
        await updateUser(verified.id, updates);
        return { message: 'success' };
    }

    if (body.newEmail) {
        await updateUser(verified.id, { email: String(body.newEmail) });
        return { message: 'success' };
    }

    setResponseStatus(event, 400);
    return { errors: [{ message: 'No changes requested.' }] };
});
