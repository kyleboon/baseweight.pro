import bcrypt from 'bcryptjs';
import { randomBytes } from 'node:crypto';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const username = String(body.username ?? '').toLowerCase().trim();
    const password = String(body.password ?? '');
    let email = String(body.email ?? '').trim();

    const errors: any[] = [];

    if (!username) errors.push({ field: 'username', message: 'Please enter a username.' });
    if (username && (username.length < 3 || username.length > 32))
        errors.push({ field: 'username', message: 'Please enter a username between 3 and 32 characters.' });
    if (!email) errors.push({ field: 'email', message: 'Please enter an email.' });
    if (!password) errors.push({ field: 'password', message: 'Please enter a password.' });
    if (password && (password.length < 5 || password.length > 60))
        errors.push({ field: 'password', message: 'Please enter a password between 5 and 60 characters.' });

    if (errors.length) {
        setResponseStatus(event, 400);
        return { errors };
    }

    console.log({ message: 'Attempting to register', username });

    const existingByUsername = await findUserByUsername(username);
    if (existingByUsername) {
        setResponseStatus(event, 400);
        return { errors: [{ field: 'username', message: 'That username already exists, please pick a different username.' }] };
    }

    const existingByEmail = await findUserByEmail(email);
    if (existingByEmail) {
        setResponseStatus(event, 400);
        return { errors: [{ field: 'email', message: 'A user with that email already exists.' }] };
    }

    const saltRounds = process.env.NODE_ENV === 'test' ? 1 : 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    const token = randomBytes(48).toString('hex');

    console.log({ message: 'Saving new user', username });
    const newUser = await createUser({ username, email, password: hash, token });

    // Initialize library data for new user
    await initNewUserLibrary(newUser.id);

    setCookie(event, 'lp', token, {
        path: '/',
        maxAge: 365 * 24 * 60 * 1000,
        httpOnly: true,
        sameSite: 'lax',
    });

    const libraryBlob = await buildLibraryBlob(newUser.id);
    return { username, library: JSON.stringify(libraryBlob) };
});
