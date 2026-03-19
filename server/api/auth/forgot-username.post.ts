import { createRequire } from 'module';
import config from 'config';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const email = String(body.email ?? '').toLowerCase().trim();

    if (!email || email.length < 1) {
        setResponseStatus(event, 400);
        return { errors: [{ message: 'Please enter a valid email.' }] };
    }

    const user = await findUserByEmail(email);
    if (!user) {
        setResponseStatus(event, 400);
        return { message: 'An error occurred' };
    }

    const { username } = user;
    const message = `Hello ${username},\n Apparently you forgot your username. Here it is: \n\n Username: ${username}\n\n If you continue to have problems, please reply to this email with details.\n\n Thanks!`;

    const mailgunKey = config.get<string>('mailgunAPIKey');
    if (mailgunKey) {
        const _require = createRequire(import.meta.url);
        const FormData = _require('form-data');
        const Mailgun = _require('mailgun.js');
        const mg = new Mailgun(FormData).client({ username: 'api', key: mailgunKey });
        const response = await mg.messages.create(config.get('mailgunDomain'), {
            from: 'LighterPack <info@mg.lighterpack.com>',
            to: email,
            'h:Reply-To': 'LighterPack <info@lighterpack.com>',
            subject: 'Your LighterPack username',
            text: message,
        });
        console.log({ message: 'Message sent', response: response.message });
    } else {
        console.log({ message: 'Mailgun not configured, skipping email', email, username });
    }

    return { email };
});
