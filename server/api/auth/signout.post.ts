export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'lp');
    if (token) {
        try {
            const user = await findUserByToken(token);
            if (user) {
                await updateUser(user.id, { token: null });
            }
        } catch {
            // Best-effort token invalidation
        }
    }
    deleteCookie(event, 'lp', { path: '/', httpOnly: true, sameSite: 'lax' });
    return { ok: true };
});
