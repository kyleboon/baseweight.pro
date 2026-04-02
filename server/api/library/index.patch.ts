import { readValidatedBody, updateLibrarySettingsSchema } from '../../utils/validation.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        throw createError({ statusCode: 401, message: 'Please log in.' });
    }

    const body = await readValidatedBody(event, updateLibrarySettingsSchema);

    // Build updates from only the fields that were provided
    const updates: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(body)) {
        if (value !== undefined) {
            updates[key] = value;
        }
    }

    let result;
    try {
        result = await updateLibrarySettings(user.id, updates as any);
    } catch (err) {
        throw createError({ statusCode: 500, message: 'Failed to update library settings.' });
    }

    return { settings: result };
});
