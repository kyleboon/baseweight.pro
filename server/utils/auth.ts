import bcrypt from 'bcryptjs';
import config from 'config';
import { findUserByUsername } from './db.js';

/** Look up a user by username and verify their bcrypt password. Throws on failure. */
export async function verifyPassword(username: string, password: string) {
    const user = await findUserByUsername(username);

    if (!user) {
        throw { code: 404, message: 'Invalid username and/or password.' };
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        throw { code: 404, message: 'Invalid username and/or password.' };
    }
    return user;
}

export function isModerator(username: string): boolean {
    const moderatorList: string[] = config.get('moderators') || [];
    return moderatorList.includes(username);
}
