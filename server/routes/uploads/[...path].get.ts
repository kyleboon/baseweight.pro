import { createReadStream, existsSync } from 'node:fs';
import { resolve, join, normalize } from 'node:path';
import config from 'config';

export default defineEventHandler(async (event) => {
    const rawPath = getRouterParam(event, 'path') ?? '';

    const uploadsBase = resolve(process.cwd(), config.get('uploadsPath') as string);
    const normalized = normalize(rawPath).replace(/^(\.\.(\/|\\|$))+/, '');
    const filePath = join(uploadsBase, normalized);

    if (!filePath.startsWith(uploadsBase + '/') && filePath !== uploadsBase) {
        throw createError({ statusCode: 400, message: 'Invalid path.' });
    }

    if (!existsSync(filePath)) {
        throw createError({ statusCode: 404, message: 'Not found.' });
    }

    setHeader(event, 'Content-Type', 'image/webp');
    setHeader(event, 'Cache-Control', 'public, max-age=31536000, immutable');

    return sendStream(event, createReadStream(filePath));
});
