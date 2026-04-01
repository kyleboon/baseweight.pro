import { sql } from 'drizzle-orm';
import { getDb } from '../db.js';

export default defineEventHandler(() => {
    try {
        const db = getDb();
        db.run(sql`SELECT 1`);
        return { status: 'ok' };
    } catch {
        throw createError({ statusCode: 503, message: 'Database unavailable' });
    }
});
