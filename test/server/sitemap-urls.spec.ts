import { describe, it, expect, beforeEach } from 'vitest';
import { initDb, getDb } from '../../server/db.js';
import * as schema from '../../server/schema.js';

describe('sitemap URL source', () => {
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

    async function callHandler() {
        const mod = await import('../../server/api/__sitemap__/urls.js');
        return mod.default();
    }

    it('returns /welcome as the first entry with monthly changefreq', async () => {
        const urls = await callHandler();

        expect(urls[0]).toEqual({
            loc: '/welcome',
            changefreq: 'monthly',
            priority: 1.0,
        });
    });

    it('returns an entry for each shared list', async () => {
        db.insert(schema.lists)
            .values([
                { user_id: 'user-1', name: 'Summer Sierra', external_id: 'abc123', sort_order: 0 },
                { user_id: 'user-1', name: 'PCT Section J', external_id: 'def456', sort_order: 1 },
            ])
            .run();

        const urls = await callHandler();

        expect(urls).toHaveLength(3); // welcome + 2 lists
        expect(urls[1]).toEqual({ loc: '/r/abc123', changefreq: 'weekly' });
        expect(urls[2]).toEqual({ loc: '/r/def456', changefreq: 'weekly' });
    });

    it('returns only /welcome when no lists exist', async () => {
        const urls = await callHandler();

        expect(urls).toHaveLength(1);
        expect(urls[0].loc).toBe('/welcome');
    });

    it('includes lists from multiple users', async () => {
        db.insert(schema.user)
            .values({
                id: 'user-2',
                email: 'b@test.com',
                emailVerified: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .run();

        db.insert(schema.lists)
            .values([
                { user_id: 'user-1', name: 'List A', external_id: 'aaa111', sort_order: 0 },
                { user_id: 'user-2', name: 'List B', external_id: 'bbb222', sort_order: 0 },
            ])
            .run();

        const urls = await callHandler();

        expect(urls).toHaveLength(3);
        const locs = urls.map((u: any) => u.loc);
        expect(locs).toContain('/r/aaa111');
        expect(locs).toContain('/r/bbb222');
    });
});
