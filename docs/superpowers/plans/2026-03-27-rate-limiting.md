# Rate Limiting Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add in-memory rate limiting to the magic link auth endpoint (5 req/15 min per IP) and image upload endpoint (10 req/min per user), disabled during E2E tests.

**Architecture:** A `createRateLimiter` factory function creates independent fixed-window rate limiters backed by a `Map`. A Nitro server middleware checks incoming requests against the appropriate limiter and returns 429 when exceeded. A runtime config flag disables all rate limiting during E2E tests.

**Tech Stack:** TypeScript, Nitro server middleware, h3 event utilities, Vitest

---

## File Structure

| File                                      | Responsibility                                                   |
| ----------------------------------------- | ---------------------------------------------------------------- |
| `server/utils/rateLimiter.ts`             | Factory function creating independent fixed-window rate limiters |
| `server/middleware/rateLimit.ts`          | Nitro middleware applying rate limits to specific routes         |
| `nuxt.config.ts`                          | Add `disableRateLimiting` runtime config flag                    |
| `playwright.config.ts`                    | Add `DISABLE_RATE_LIMITING=true` to test server command          |
| `config/default.json`                     | Remove unused `authRateLimit`                                    |
| `config/test.json`                        | Remove unused `authRateLimit`                                    |
| `test/server/rateLimiter.spec.ts`         | Unit tests for the rate limiter utility                          |
| `test/server/rateLimitMiddleware.spec.ts` | Integration tests for the middleware                             |

---

### Task 1: Create rate limiter utility with tests

**Files:**

- Create: `server/utils/rateLimiter.ts`
- Create: `test/server/rateLimiter.spec.ts`

- [ ] **Step 1: Write failing tests for the rate limiter**

Create `test/server/rateLimiter.spec.ts`:

```typescript
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
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm run test:server`
Expected: FAIL — `Cannot find module '../../server/utils/rateLimiter.js'`

- [ ] **Step 3: Implement the rate limiter**

Create `server/utils/rateLimiter.ts`:

```typescript
interface RateLimiterOptions {
    maxRequests: number;
    windowMs: number;
    cleanupThreshold?: number;
}

interface RateLimitResult {
    allowed: boolean;
    retryAfter: number;
}

interface RateLimitEntry {
    count: number;
    resetAt: number;
}

export function createRateLimiter(options: RateLimiterOptions) {
    const { maxRequests, windowMs, cleanupThreshold = 1000 } = options;
    const store = new Map<string, RateLimitEntry>();

    function cleanup() {
        if (store.size <= cleanupThreshold) return;
        const now = Date.now();
        for (const [key, entry] of store) {
            if (now >= entry.resetAt) {
                store.delete(key);
            }
        }
    }

    function check(key: string): RateLimitResult {
        cleanup();
        const now = Date.now();
        const entry = store.get(key);

        if (!entry || now >= entry.resetAt) {
            store.set(key, { count: 1, resetAt: now + windowMs });
            return { allowed: true, retryAfter: 0 };
        }

        entry.count += 1;
        if (entry.count <= maxRequests) {
            return { allowed: true, retryAfter: 0 };
        }

        const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
        return { allowed: false, retryAfter };
    }

    return { check };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm run test:server`
Expected: All tests PASS

- [ ] **Step 5: Commit**

```bash
git add server/utils/rateLimiter.ts test/server/rateLimiter.spec.ts
git commit -m "feat: add in-memory fixed-window rate limiter utility"
```

---

### Task 2: Create rate limit middleware with tests

**Files:**

- Create: `server/middleware/rateLimit.ts`
- Create: `test/server/rateLimitMiddleware.spec.ts`

- [ ] **Step 1: Write failing tests for the middleware**

Create `test/server/rateLimitMiddleware.spec.ts`:

```typescript
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Stub Nitro auto-imports before importing the middleware
(globalThis as any).defineEventHandler = (fn: Function) => fn;
(globalThis as any).createError = (opts: { statusCode: number; statusMessage: string }) => {
    const err = new Error(opts.statusMessage) as Error & { statusCode: number; statusMessage: string };
    err.statusCode = opts.statusCode;
    err.statusMessage = opts.statusMessage;
    return err;
};
(globalThis as any).useRuntimeConfig = () => ({ disableRateLimiting: false });
(globalThis as any).getRequestURL = (event: any) => new URL(event._url);
(globalThis as any).getRequestHeader = (event: any, name: string) => event._headers?.[name];
(globalThis as any).setResponseHeader = (event: any, name: string, value: string) => {
    event._responseHeaders = event._responseHeaders || {};
    event._responseHeaders[name] = value;
};
(globalThis as any).setResponseStatus = (event: any, code: number) => {
    event._statusCode = code;
};

function createMockEvent(path: string, options: { ip?: string; forwardedFor?: string; userId?: string | null } = {}) {
    return {
        _url: `http://localhost:3000${path}`,
        _headers: options.forwardedFor ? { 'x-forwarded-for': options.forwardedFor } : {},
        _responseHeaders: {} as Record<string, string>,
        _statusCode: 200,
        context: { user: options.userId ? { id: options.userId } : null },
        node: { req: { socket: { remoteAddress: options.ip || '127.0.0.1' } } },
    };
}

describe('rate limit middleware', () => {
    let handler: Function;

    beforeEach(async () => {
        vi.useFakeTimers();
        // Re-import to get fresh limiter instances each test
        vi.resetModules();
        const mod = await import('../../server/middleware/rateLimit.js');
        handler = mod.default;
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('allows magic link requests up to the limit', async () => {
        const path = '/api/auth/sign-in/magic-link';
        for (let i = 0; i < 5; i++) {
            const event = createMockEvent(path, { ip: '1.2.3.4' });
            const result = await handler(event);
            expect(result).toBeUndefined();
        }
    });

    it('returns 429 for magic link requests exceeding the limit', async () => {
        const path = '/api/auth/sign-in/magic-link';
        for (let i = 0; i < 5; i++) {
            await handler(createMockEvent(path, { ip: '1.2.3.4' }));
        }
        const event = createMockEvent(path, { ip: '1.2.3.4' });
        const result = await handler(event);
        expect(event._statusCode).toBe(429);
        expect(event._responseHeaders['Retry-After']).toBeDefined();
        expect(result).toHaveProperty('message', 'Too many requests. Please try again later.');
        expect(result).toHaveProperty('retryAfter');
    });

    it('uses X-Forwarded-For for IP detection', async () => {
        const path = '/api/auth/sign-in/magic-link';
        // Exhaust limit for forwarded IP
        for (let i = 0; i < 5; i++) {
            await handler(createMockEvent(path, { ip: '127.0.0.1', forwardedFor: '5.6.7.8' }));
        }
        // Same remoteAddress but different forwarded IP — should be allowed
        const event = createMockEvent(path, { ip: '127.0.0.1', forwardedFor: '9.10.11.12' });
        const result = await handler(event);
        expect(result).toBeUndefined();
    });

    it('allows image upload requests up to the limit', async () => {
        const path = '/api/image-upload';
        for (let i = 0; i < 10; i++) {
            const event = createMockEvent(path, { userId: 'user-1' });
            const result = await handler(event);
            expect(result).toBeUndefined();
        }
    });

    it('returns 429 for image upload requests exceeding the limit', async () => {
        const path = '/api/image-upload';
        for (let i = 0; i < 10; i++) {
            await handler(createMockEvent(path, { userId: 'user-1' }));
        }
        const event = createMockEvent(path, { userId: 'user-1' });
        const result = await handler(event);
        expect(event._statusCode).toBe(429);
        expect(event._responseHeaders['Retry-After']).toBeDefined();
        expect(result).toHaveProperty('message');
    });

    it('tracks different users independently for image uploads', async () => {
        const path = '/api/image-upload';
        for (let i = 0; i < 10; i++) {
            await handler(createMockEvent(path, { userId: 'user-1' }));
        }
        // Different user — should be allowed
        const event = createMockEvent(path, { userId: 'user-2' });
        const result = await handler(event);
        expect(result).toBeUndefined();
    });

    it('skips rate limiting for unauthenticated image upload requests', async () => {
        const path = '/api/image-upload';
        const event = createMockEvent(path, { userId: null });
        const result = await handler(event);
        expect(result).toBeUndefined();
    });

    it('skips all rate limiting when disableRateLimiting is true', async () => {
        (globalThis as any).useRuntimeConfig = () => ({ disableRateLimiting: true });
        vi.resetModules();
        const mod = await import('../../server/middleware/rateLimit.js');
        const disabledHandler = mod.default;

        const path = '/api/auth/sign-in/magic-link';
        // Send more than the limit
        for (let i = 0; i < 10; i++) {
            const event = createMockEvent(path, { ip: '1.2.3.4' });
            const result = await disabledHandler(event);
            expect(result).toBeUndefined();
        }
    });

    it('does not rate limit unrelated paths', async () => {
        for (let i = 0; i < 20; i++) {
            const event = createMockEvent('/api/library', { ip: '1.2.3.4' });
            const result = await handler(event);
            expect(result).toBeUndefined();
        }
    });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm run test:server`
Expected: FAIL — `Cannot find module '../../server/middleware/rateLimit.js'`

- [ ] **Step 3: Implement the middleware**

Create `server/middleware/rateLimit.ts`:

```typescript
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
    setResponseStatus(event, 429);
    setResponseHeader(event, 'Retry-After', String(retryAfter));
    return { message: 'Too many requests. Please try again later.', retryAfter };
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm run test:server`
Expected: All tests PASS

- [ ] **Step 5: Commit**

```bash
git add server/middleware/rateLimit.ts test/server/rateLimitMiddleware.spec.ts
git commit -m "feat: add rate limit middleware for magic link and image upload"
```

---

### Task 3: Wire up config and clean up unused values

**Files:**

- Modify: `nuxt.config.ts:7-9`
- Modify: `playwright.config.ts:75`
- Modify: `config/default.json:16`
- Modify: `config/test.json:2`

- [ ] **Step 1: Add `disableRateLimiting` to runtime config**

In `nuxt.config.ts`, add `disableRateLimiting` to the `runtimeConfig` object:

```typescript
runtimeConfig: {
    enableTestEndpoints: process.env.ENABLE_TEST_ENDPOINTS === 'true',
    disableRateLimiting: process.env.DISABLE_RATE_LIMITING === 'true',
},
```

- [ ] **Step 2: Add `DISABLE_RATE_LIMITING=true` to the Playwright start command**

In `playwright.config.ts`, change the webServer command from:

```
DATABASE_PATH=./data/test.db ENABLE_TEST_ENDPOINTS=true npm run start
```

to:

```
DATABASE_PATH=./data/test.db ENABLE_TEST_ENDPOINTS=true DISABLE_RATE_LIMITING=true npm run start
```

- [ ] **Step 3: Remove unused `authRateLimit` from config files**

In `config/default.json`, remove the line:

```json
"authRateLimit": 20,
```

Delete `config/test.json` entirely — `authRateLimit` is its only value.

- [ ] **Step 4: Run all unit and server tests**

Run: `npm run test:unit && npm run test:server`
Expected: All tests PASS

- [ ] **Step 5: Commit**

```bash
git rm config/test.json
git add nuxt.config.ts playwright.config.ts config/default.json
git commit -m "chore: wire rate limiting config flag and remove unused authRateLimit"
```

---

### Task 4: Run full verification

- [ ] **Step 1: Run the TypeScript type checker**

Run: `npm run typecheck`
Expected: No type errors (the existing vue-router warning is pre-existing and unrelated)

- [ ] **Step 2: Run ESLint**

Run: `npm run lint:js`
Expected: No errors

- [ ] **Step 3: Run all server tests**

Run: `npm run test:server`
Expected: All tests PASS

- [ ] **Step 4: Run all unit tests**

Run: `npm run test:unit`
Expected: All tests PASS
