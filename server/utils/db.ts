import { getDb } from '../db.js';
export { getDb };

import { eq } from 'drizzle-orm';
import * as schema from '../schema.js';

// ---------------------------------------------------------------------------
// User helpers
// ---------------------------------------------------------------------------

export async function findUserByToken(token: string) {
    const db = getDb();
    const rows = await db.select().from(schema.users).where(eq(schema.users.token, token));
    return rows[0] ?? null;
}

export async function findUserByUsername(username: string) {
    const db = getDb();
    const rows = await db.select().from(schema.users).where(eq(schema.users.username, username));
    return rows[0] ?? null;
}

export async function findUserByEmail(email: string) {
    const db = getDb();
    const rows = await db.select().from(schema.users).where(eq(schema.users.email, email));
    return rows[0] ?? null;
}

export async function createUser(data: {
    username: string;
    email: string;
    password: string;
    token: string;
}) {
    const db = getDb();
    const now = Math.floor(Date.now() / 1000);
    const result = await db
        .insert(schema.users)
        .values({ ...data, created_at: now })
        .returning();
    return result[0]!;
}

export async function updateUser(id: number, data: Partial<typeof schema.users.$inferInsert>) {
    const db = getDb();
    const result = await db
        .update(schema.users)
        .set(data)
        .where(eq(schema.users.id, id))
        .returning();
    return result[0] ?? null;
}

export async function deleteUser(id: number) {
    const db = getDb();
    await db.delete(schema.users).where(eq(schema.users.id, id));
}

// ---------------------------------------------------------------------------
// Library settings helpers
// ---------------------------------------------------------------------------

export async function getLibrarySettings(userId: number) {
    const db = getDb();
    const rows = await db
        .select()
        .from(schema.library_settings)
        .where(eq(schema.library_settings.user_id, userId));
    return rows[0] ?? null;
}

export async function createLibrarySettings(userId: number) {
    const db = getDb();
    const result = await db
        .insert(schema.library_settings)
        .values({ user_id: userId })
        .returning();
    return result[0]!;
}

export async function updateLibrarySettings(
    userId: number,
    data: Partial<typeof schema.library_settings.$inferInsert>,
) {
    const db = getDb();
    const result = await db
        .update(schema.library_settings)
        .set(data)
        .where(eq(schema.library_settings.user_id, userId))
        .returning();
    return result[0] ?? null;
}
