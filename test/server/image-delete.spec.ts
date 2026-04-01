import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initDb, getDb } from '../../server/db.js';
import * as schema from '../../server/schema.js';

(globalThis as any).defineEventHandler = (fn: Function) => fn;
(globalThis as any).createError = (opts: { statusCode: number; message: string }) => {
    const err = new Error(opts.message) as Error & { statusCode: number };
    err.statusCode = opts.statusCode;
    return err;
};
(globalThis as any).getRouterParam = (_event: any, key: string) => _event._params?.[key];
(globalThis as any).setResponseStatus = vi.fn();

describe('image delete', () => {
    let db: ReturnType<typeof getDb>;

    beforeEach(() => {
        db = initDb(':memory:');
        db.insert(schema.user)
            .values({
                id: 'user-1',
                email: 'a@test.com',
                emailVerified: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .run();
    });

    it('throws 401 when not authenticated', async () => {
        const mod = await import('../../server/api/images/[id].delete.js');
        const handler = mod.default;
        const event = { context: { user: null }, _params: { id: '1' } };

        await expect(handler(event)).rejects.toMatchObject({ statusCode: 401 });
    });

    it('throws 400 for invalid id', async () => {
        const mod = await import('../../server/api/images/[id].delete.js');
        const handler = mod.default;
        const event = { context: { user: { id: 'user-1' } }, _params: { id: 'abc' } };

        await expect(handler(event)).rejects.toMatchObject({ statusCode: 400 });
    });
});
