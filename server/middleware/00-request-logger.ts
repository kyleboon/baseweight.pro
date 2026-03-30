import { logger } from '../utils/logger.js';
import type { Logger } from 'pino';

declare module 'h3' {
    interface H3EventContext {
        requestId: string;
        logger: Logger;
    }
}

export default defineEventHandler((event) => {
    const requestId = getRequestHeader(event, 'x-request-id') || crypto.randomUUID();
    const method = event.node.req.method || 'UNKNOWN';
    const url = getRequestURL(event);
    const path = url.pathname;

    event.context.requestId = requestId;

    const childLogger = logger.child({ requestId, method, path });
    event.context.logger = childLogger;

    setResponseHeader(event, 'X-Request-Id', requestId);

    childLogger.info('request start');

    const start = performance.now();
    event.node.res.on('finish', () => {
        const durationMs = Math.round(performance.now() - start);
        childLogger.info({ statusCode: event.node.res.statusCode, durationMs }, 'request complete');
    });
});
