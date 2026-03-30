import { describe, it, expect, beforeEach } from 'vitest';
import { initDb, getDb } from '../../server/db.js';
import * as schema from '../../server/schema.js';

describe('initNewUserLibrary', () => {
    let db: ReturnType<typeof getDb>;

    beforeEach(async () => {
        db = initDb(':memory:');

        db.insert(schema.user)
            .values({
                id: 'user-1',
                email: 'test@test.com',
                emailVerified: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .run();
    });

    it('creates settings, list, default, category, and item for a new user', async () => {
        const { initNewUserLibrary } = await import('../../server/utils/library.js');
        await initNewUserLibrary('user-1');

        const settings = db.select().from(schema.library_settings).all();
        expect(settings).toHaveLength(1);
        expect(settings[0].user_id).toBe('user-1');

        const lists = db.select().from(schema.lists).all();
        expect(lists).toHaveLength(1);
        expect(lists[0].user_id).toBe('user-1');

        // Default list should be set
        expect(settings[0].default_list_id).toBe(lists[0].id);

        const categories = db.select().from(schema.categories).all();
        expect(categories).toHaveLength(1);
        expect(categories[0].list_id).toBe(lists[0].id);

        const items = db.select().from(schema.category_items).all();
        expect(items).toHaveLength(1);
        expect(items[0].category_id).toBe(categories[0].id);
    });

    it('generates a 6-character external ID for the initial list', async () => {
        const { initNewUserLibrary } = await import('../../server/utils/library.js');
        await initNewUserLibrary('user-1');

        const lists = db.select().from(schema.lists).all();
        expect(lists[0].external_id).toMatch(/^[a-z0-9]{6}$/);
    });
});
