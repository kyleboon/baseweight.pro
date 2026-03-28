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
