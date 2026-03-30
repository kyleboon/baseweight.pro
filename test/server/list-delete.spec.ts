import { describe, it, expect, beforeEach } from 'vitest';
import { initDb, getDb } from '../../server/db.js';
import * as schema from '../../server/schema.js';
import { eq } from 'drizzle-orm';

// Stub Nitro auto-imports
(globalThis as any).defineEventHandler = (fn: Function) => fn;
(globalThis as any).createError = (opts: { statusCode: number; message: string }) => {
    const err = new Error(opts.message) as Error & { statusCode: number };
    err.statusCode = opts.statusCode;
    return err;
};
(globalThis as any).getRouterParam = (event: any, _name: string) => event._routerParams?.id;
(globalThis as any).setResponseStatus = (event: any, code: number) => {
    event._statusCode = code;
};

describe('list deletion with transaction', () => {
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

        // Create two lists
        db.insert(schema.lists)
            .values([
                { id: 1, user_id: 'user-1', name: 'List A', external_id: 'aaa111', sort_order: 0, created_at: 0 },
                { id: 2, user_id: 'user-1', name: 'List B', external_id: 'bbb222', sort_order: 1, created_at: 0 },
            ])
            .run();

        // Set list 1 as the default
        db.insert(schema.library_settings).values({ user_id: 'user-1', default_list_id: 1 }).run();
    });

    async function callHandler(userId: string | null, listId: number) {
        const mod = await import('../../server/api/lists/[id].delete.js');
        const handler = mod.default;
        const event = {
            context: { user: userId ? { id: userId } : null },
            _routerParams: { id: String(listId) },
            _statusCode: 200,
        };
        return handler(event);
    }

    it('deletes a list and resets default to the next remaining list', async () => {
        await callHandler('user-1', 1);

        const remaining = db.select().from(schema.lists).all();
        expect(remaining).toHaveLength(1);
        expect(remaining[0].id).toBe(2);

        const settings = db
            .select()
            .from(schema.library_settings)
            .where(eq(schema.library_settings.user_id, 'user-1'))
            .all();
        expect(settings[0].default_list_id).toBe(2);
    });

    it('deletes a non-default list without changing the default', async () => {
        await callHandler('user-1', 2);

        const remaining = db.select().from(schema.lists).all();
        expect(remaining).toHaveLength(1);
        expect(remaining[0].id).toBe(1);

        const settings = db
            .select()
            .from(schema.library_settings)
            .where(eq(schema.library_settings.user_id, 'user-1'))
            .all();
        expect(settings[0].default_list_id).toBe(1);
    });

    it('sets default to null when the last list is deleted', async () => {
        await callHandler('user-1', 1);
        await callHandler('user-1', 2);

        const remaining = db.select().from(schema.lists).all();
        expect(remaining).toHaveLength(0);

        const settings = db
            .select()
            .from(schema.library_settings)
            .where(eq(schema.library_settings.user_id, 'user-1'))
            .all();
        expect(settings[0].default_list_id).toBeNull();
    });
});
