import { createRateLimiter } from '../utils/rateLimiter.js';

const magicLinkLimiter = createRateLimiter({ maxRequests: 5, windowMs: 15 * 60 * 1000 });
const imageUploadLimiter = createRateLimiter({ maxRequests: 10, windowMs: 60 * 1000 });

function getClientIp(event: any): string {
    const forwarded = getRequestHeader(event, 'x-forwarded-for');
    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }
    return event.node.req.socket.remoteAddress || 'unknown';
}

function sendRateLimitResponse(event: any, retryAfter: number) {
    setResponseHeader(event, 'Retry-After', String(retryAfter));
    throw createError({
        statusCode: 429,
        message: 'Too many requests. Please try again later.',
        data: { retryAfter },
    });
}

export default defineEventHandler((event) => {
    if (useRuntimeConfig().disableRateLimiting) {
        return;
    }

    const url = getRequestURL(event);
    const path = url.pathname;

    if (path === '/api/auth/sign-in/magic-link') {
        const ip = getClientIp(event);
        const result = magicLinkLimiter.check(ip);
        if (!result.allowed) {
            return sendRateLimitResponse(event, result.retryAfter);
        }
    }

    if (path === '/api/image-upload') {
        const user = event.context.user;
        if (!user) return;
        const result = imageUploadLimiter.check(user.id);
        if (!result.allowed) {
            return sendRateLimitResponse(event, result.retryAfter);
        }
    }
});
