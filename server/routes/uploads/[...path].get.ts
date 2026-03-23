import { createReadStream, existsSync } from 'node:fs';
import { resolve, join, normalize } from 'node:path';
import config from 'config';

export default defineEventHandler(async (event) => {
    const rawPath = getRouterParam(event, 'path') ?? '';

    // Prevent path traversal: normalize and verify it stays within uploadsBase
    const uploadsBase = resolve(process.cwd(), config.get('uploadsPath') as string);
    const normalized = normalize(rawPath).replace(/^(\.\.(\/|\\|$))+/, '');
    const filePath = join(uploadsBase, normalized);

    if (!filePath.startsWith(uploadsBase + '/') && filePath !== uploadsBase) {
        setResponseStatus(event, 400);
        return { message: 'Invalid path.' };
    }

    if (!existsSync(filePath)) {
        setResponseStatus(event, 404);
        return { message: 'Not found.' };
    }

    // All self-hosted images are stored as WebP
    setHeader(event, 'Content-Type', 'image/webp');
    setHeader(event, 'Cache-Control', 'public, max-age=31536000, immutable');

    return sendStream(event, createReadStream(filePath));
});
