import { createRequire } from 'module';
import bcrypt from 'bcryptjs';
import { randomBytes } from 'node:crypto';
import config from 'config';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const username = String(body.username ?? '').toLowerCase().trim();

    if (!username || username.length < 1 || username.length > 32) {
        setResponseStatus(event, 400);
        return { errors: [{ message: 'Please enter a username.' }] };
    }

    const user = await findUserByUsername(username);
    if (!user) {
        setResponseStatus(event, 500);
        return { message: 'An error occurred.' };
    }

    const newPassword = randomBytes(12).toString('hex');
    const salt = await bcrypt.genSalt(10);
    const newHash = await bcrypt.hash(newPassword, salt);
    await updateUser(user.id, { password: newHash });

    const message = `Hello ${username},\n Apparently you forgot your password. Here's your new one: \n\n Username: ${username}\n Password: ${newPassword}\n\n If you continue to have problems, please reply to this email with details.\n\n Thanks!`;

    const mailgunKey = config.get<string>('mailgunAPIKey');
    if (mailgunKey) {
        const _require = createRequire(import.meta.url);
        const FormData = _require('form-data');
        const Mailgun = _require('mailgun.js');
        const mg = new Mailgun(FormData).client({ username: 'api', key: mailgunKey });
        const response = await mg.messages.create(config.get('mailgunDomain'), {
            from: 'LighterPack <info@mg.lighterpack.com>',
            to: user.email,
            'h:Reply-To': 'LighterPack <info@lighterpack.com>',
            subject: 'Your new LighterPack password',
            text: message,
        });
        console.log({ message: 'Message sent', response: response.message });
    } else {
        console.log({ message: 'Mailgun not configured, skipping email', username });
    }

    console.log({ message: 'password changed for user', username });
    return { username };
});
