import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createRateLimiter } from '../../server/utils/rateLimiter.js';

describe('createRateLimiter', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('allows requests up to the limit', () => {
        const limiter = createRateLimiter({ maxRequests: 3, windowMs: 60_000 });
        expect(limiter.check('key').allowed).toBe(true);
        expect(limiter.check('key').allowed).toBe(true);
        expect(limiter.check('key').allowed).toBe(true);
    });

    it('blocks requests after the limit is reached', () => {
        const limiter = createRateLimiter({ maxRequests: 2, windowMs: 60_000 });
        limiter.check('key');
        limiter.check('key');
        const result = limiter.check('key');
        expect(result.allowed).toBe(false);
        expect(result.retryAfter).toBeGreaterThan(0);
    });

    it('returns retryAfter as seconds until window resets', () => {
        const limiter = createRateLimiter({ maxRequests: 1, windowMs: 60_000 });
        limiter.check('key');
        vi.advanceTimersByTime(20_000);
        const result = limiter.check('key');
        expect(result.allowed).toBe(false);
        expect(result.retryAfter).toBe(40);
    });

    it('resets after the window expires', () => {
        const limiter = createRateLimiter({ maxRequests: 1, windowMs: 60_000 });
        limiter.check('key');
        expect(limiter.check('key').allowed).toBe(false);
        vi.advanceTimersByTime(60_001);
        expect(limiter.check('key').allowed).toBe(true);
    });

    it('tracks different keys independently', () => {
        const limiter = createRateLimiter({ maxRequests: 1, windowMs: 60_000 });
        expect(limiter.check('a').allowed).toBe(true);
        expect(limiter.check('b').allowed).toBe(true);
        expect(limiter.check('a').allowed).toBe(false);
        expect(limiter.check('b').allowed).toBe(false);
    });

    it('prunes stale entries when map exceeds cleanup threshold', () => {
        const limiter = createRateLimiter({ maxRequests: 1, windowMs: 1_000, cleanupThreshold: 3 });
        limiter.check('a');
        limiter.check('b');
        limiter.check('c');
        // Advance past the window so all entries are stale
        vi.advanceTimersByTime(1_001);
        // This 4th key triggers cleanup because size (4) > threshold (3)
        limiter.check('d');
        // 'a' was pruned — should be allowed again without waiting
        expect(limiter.check('a').allowed).toBe(true);
    });
});
