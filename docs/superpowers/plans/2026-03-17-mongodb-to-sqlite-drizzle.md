# MongoDB → SQLite + Drizzle ORM Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace MongoDB with SQLite (via `better-sqlite3`) and Drizzle ORM, with a fully normalized schema and granular REST endpoints.

**Architecture:** Each store action calls a dedicated REST endpoint; the in-memory `Library` object is updated from the server response. `Library.load()` is fed a "synthetic library JSON" assembled from normalized DB rows. Auto-save is removed entirely.

**Tech Stack:** `drizzle-orm`, `better-sqlite3`, `drizzle-kit`, Nitro server routes, Pinia store

---

## Corrections to Spec

- The `categories` table is missing a `color` column. The existing UI has a color picker per category. Add `color TEXT default ''`.
- The `item_tags` table needs a composite primary key on `(item_id, tag_id)` to prevent duplicate tags per item.
- The `body.library` import path in `register.post.ts` (for importing a pre-existing local library on registration) is intentionally dropped — it was a legacy local-save feature that is no longer supported in the new architecture.

---

## File Map

**Create:**

- `server/schema.ts` — Drizzle table definitions (single source of truth)
- `server/db.ts` — better-sqlite3 connection + Drizzle client + WAL pragmas
- `drizzle.config.ts` — Drizzle Kit config
- `drizzle/migrations/` — auto-generated SQL (committed to repo)
- `server/plugins/sqlite.ts` — runs pending migrations on startup
- `server/api/library/index.get.ts` — GET /api/library (initial load)
- `server/api/library/index.patch.ts` — PATCH /api/library (settings)
- `server/api/items/index.get.ts` — GET /api/items
- `server/api/items/index.post.ts` — POST /api/items
- `server/api/items/[id].patch.ts` — PATCH /api/items/:id
- `server/api/items/[id].delete.ts` — DELETE /api/items/:id
- `server/api/lists/index.post.ts` — POST /api/lists
- `server/api/lists/[id].patch.ts` — PATCH /api/lists/:id
- `server/api/lists/[id].delete.ts` — DELETE /api/lists/:id
- `server/api/categories/index.post.ts` — POST /api/categories
- `server/api/categories/[id].patch.ts` — PATCH /api/categories/:id
- `server/api/categories/[id].delete.ts` — DELETE /api/categories/:id
- `server/api/categories/[id]/items/index.post.ts` — add item to category
- `server/api/categories/[id]/items/[itemId].patch.ts` — update category item
- `server/api/categories/[id]/items/[itemId].delete.ts` — remove item from category
- `server/api/tags/index.get.ts` — GET /api/tags
- `server/api/tags/index.post.ts` — POST /api/tags
- `server/api/tags/[id].delete.ts` — DELETE /api/tags/:id
- `server/api/items/[id]/tags/index.post.ts` — POST /api/items/:id/tags
- `server/api/items/[id]/tags/[tagId].delete.ts` — DELETE /api/items/:id/tags/:tagId
- `test/e2e/global-setup.ts` — deletes test.db before each test run

**Modify:**

- `server/utils/db.ts` — replace re-export stub with fine-grained query helpers
- `server/middleware/auth.ts` — use `findUserByToken` from new helpers
- `server/utils/auth.ts` — use `findUserByUsername` from new helpers
- `server/api/auth/register.post.ts` — create user + normalized default data
- `server/api/auth/signin.post.ts` — return synthetic library JSON
- `server/api/auth/signout.post.ts` — clear token via `updateUser`
- `server/api/auth/forgot-password.post.ts` — use query helpers
- `server/api/auth/forgot-username.post.ts` — use query helpers
- `server/api/account/index.post.ts` — use `updateUser`
- `server/api/account/delete.post.ts` — use `deleteUser`
- `server/api/moderation/search.get.ts` — use Drizzle `like()` query
- `server/api/moderation/clear-session.post.ts` — use `findUserByUsername`, `updateUser`
- `server/api/moderation/reset-password.post.ts` — use `findUserByUsername`, `updateUser`
- `server/api/share/[id].get.ts` — query normalized tables
- `server/routes/csv/[id].get.ts` — query normalized tables
- `app/plugins/session.client.ts` — call GET /api/library instead of POST /api/auth/signin
- `app/store/store.js` — remove auto-save state, wire all mutation actions to API
- `playwright.config.ts` — add DATABASE_PATH + globalSetup
- `test/e2e/list.spec.ts` — remove 30s timing workaround
- `package.json` — add drizzle deps, remove mongodb
- `.gitignore` — add `data/`
- `docker-compose.yml` — remove MongoDB service
- `README.md` — update prerequisites and scripts

**Delete:**

- `server/db.js` — replaced by `server/db.ts`
- `server/plugins/mongodb.ts` — replaced by `server/plugins/sqlite.ts`
- `server/api/library/save.post.ts` — replaced by granular endpoints
- `server/api/external-id.post.ts` — logic moved into list creation
- `app/plugins/auto-save.client.ts` — removed entirely

---

## Key Data Formats

### `GET /api/library` response

The endpoint returns `{ username, library }` where `library` is a **synthetic library JSON** — the same format that `Library.load()` in `shared/dataTypes.js` expects:

```json
{
    "username": "alice",
    "library": {
        "version": "0.3",
        "totalUnit": "oz",
        "itemUnit": "oz",
        "defaultListId": 1,
        "sequence": 200,
        "showSidebar": true,
        "currencySymbol": "$",
        "optionalFields": {
            "images": false,
            "price": false,
            "worn": true,
            "consumable": true,
            "listDescription": false
        },
        "items": [
            {
                "id": 3,
                "name": "Tent",
                "weight": 1500,
                "authorUnit": "oz",
                "price": 0,
                "description": "",
                "image": "",
                "imageUrl": "",
                "url": ""
            }
        ],
        "categories": [
            {
                "id": 2,
                "name": "Shelter",
                "color": "#ff0000",
                "categoryItems": [{ "itemId": 3, "qty": 1, "worn": 0, "consumable": 0, "star": 0 }]
            }
        ],
        "lists": [{ "id": 1, "name": "My List", "description": "", "externalId": "abc123", "categoryIds": [2] }]
    }
}
```

`sequence` is set to `max(all IDs across items, categories, lists) + 100` so client-side `nextSequence()` doesn't collide with existing server IDs.

### Store `loadLibraryData()` stays unchanged

`session.client.ts` calls `store.loadLibraryData(JSON.stringify(data.library))`, which already calls `Library.load(parsed)`. No store signature change needed.

### Store actions: creates vs updates

- **Creates (item/category/list):** Call API first → get server ID → add to library with server ID using `new Item({id: serverItem.id})` etc.
- **Updates/deletes:** Optimistic update → call API → rollback on error + show alert.

---

## Task 1: Install dependencies, write schema, generate migration

**Files:**

- Create: `server/schema.ts`
- Create: `drizzle.config.ts`
- Modify: `package.json`
- Modify: `.gitignore`
- Create: `drizzle/migrations/` (auto-generated)

- [ ] **Step 1: Install Drizzle packages**

```bash
npm install drizzle-orm better-sqlite3
npm install --save-dev @types/better-sqlite3 drizzle-kit
npm uninstall mongodb
```

- [ ] **Step 2: Write `server/schema.ts`**

```ts
import { sqliteTable, integer, text, real, primaryKey } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    username: text('username').unique().notNull(),
    email: text('email').unique().notNull(),
    password: text('password').notNull(),
    token: text('token').unique(),
    created_at: integer('created_at'),
});

export const library_settings = sqliteTable('library_settings', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    user_id: integer('user_id')
        .unique()
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    total_unit: text('total_unit').default('oz'),
    item_unit: text('item_unit').default('oz'),
    show_sidebar: integer('show_sidebar').default(0),
    currency_symbol: text('currency_symbol').default('$'),
    default_list_id: integer('default_list_id'),
    opt_images: integer('opt_images').default(0),
    opt_price: integer('opt_price').default(0),
    opt_worn: integer('opt_worn').default(1),
    opt_consumable: integer('opt_consumable').default(1),
    opt_list_description: integer('opt_list_description').default(0),
});

export const items = sqliteTable('items', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    user_id: integer('user_id')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    name: text('name').default(''),
    description: text('description').default(''),
    weight: real('weight').default(0),
    author_unit: text('author_unit').default('oz'),
    price: real('price').default(0),
    image: text('image').default(''),
    image_url: text('image_url').default(''),
    url: text('url').default(''),
    is_public: integer('is_public').default(0),
    created_at: integer('created_at'),
});

export const lists = sqliteTable('lists', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    user_id: integer('user_id')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    name: text('name').default(''),
    description: text('description').default(''),
    external_id: text('external_id').unique().notNull(),
    sort_order: integer('sort_order').default(0),
    created_at: integer('created_at'),
});

export const categories = sqliteTable('categories', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    user_id: integer('user_id')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    list_id: integer('list_id')
        .notNull()
        .references(() => lists.id, { onDelete: 'cascade' }),
    name: text('name').default(''),
    color: text('color').default(''),
    sort_order: integer('sort_order').default(0),
});

export const category_items = sqliteTable('category_items', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    category_id: integer('category_id')
        .notNull()
        .references(() => categories.id, { onDelete: 'cascade' }),
    item_id: integer('item_id')
        .notNull()
        .references(() => items.id, { onDelete: 'cascade' }),
    qty: integer('qty').default(1),
    worn: integer('worn').default(0),
    consumable: integer('consumable').default(0),
    star: integer('star').default(0),
    sort_order: integer('sort_order').default(0),
});

export const tags = sqliteTable('tags', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    user_id: integer('user_id')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    name: text('name').notNull(),
});

export const item_tags = sqliteTable(
    'item_tags',
    {
        item_id: integer('item_id')
            .notNull()
            .references(() => items.id, { onDelete: 'cascade' }),
        tag_id: integer('tag_id')
            .notNull()
            .references(() => tags.id, { onDelete: 'cascade' }),
    },
    (t) => ({ pk: primaryKey({ columns: [t.item_id, t.tag_id] }) }),
);
```

- [ ] **Step 3: Write `drizzle.config.ts`**

```ts
import type { Config } from 'drizzle-kit';

export default {
    schema: './server/schema.ts',
    out: './drizzle/migrations',
    dialect: 'sqlite',
    dbCredentials: {
        url: process.env.DATABASE_PATH ?? './data/lighterpack.db',
    },
} satisfies Config;
```

- [ ] **Step 4: Add `data/` to `.gitignore`**

Add `data/` on its own line.

- [ ] **Step 5: Generate initial migration**

```bash
mkdir -p data
npx drizzle-kit generate
```

Expected: `drizzle/migrations/0000_*.sql` created.

- [ ] **Step 6: Commit**

```bash
git add server/schema.ts drizzle.config.ts drizzle/migrations/ .gitignore package.json package-lock.json
git commit -m "feat: add Drizzle ORM schema and initial SQLite migration"
```

---

## Task 2: DB connection and startup plugin

**Files:**

- Create: `server/db.ts`
- Create: `server/plugins/sqlite.ts`
- Delete: `server/db.js`, `server/plugins/mongodb.ts`

- [ ] **Step 1: Write `server/db.ts`**

```ts
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema.js';

const dbPath = process.env.DATABASE_PATH ?? './data/lighterpack.db';

const sqlite = new Database(dbPath);

sqlite.pragma('journal_mode = WAL');
sqlite.pragma('synchronous = NORMAL');
sqlite.pragma('foreign_keys = ON');
sqlite.pragma('busy_timeout = 5000');
sqlite.pragma('cache_size = -20000');
sqlite.pragma('temp_store = MEMORY');

export const db = drizzle(sqlite, { schema });
export { sqlite };
```

- [ ] **Step 2: Write `server/plugins/sqlite.ts`**

```ts
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { db } from '../db.js';

export default defineNitroPlugin(() => {
    migrate(db, { migrationsFolder: './drizzle/migrations' });
    console.log('SQLite migrations applied');
});
```

- [ ] **Step 3: Delete old files**

```bash
rm server/db.js server/plugins/mongodb.ts
```

- [ ] **Step 4: Commit**

```bash
git add server/db.ts server/plugins/sqlite.ts
git rm server/db.js server/plugins/mongodb.ts
git commit -m "feat: replace MongoDB connection with better-sqlite3 + Drizzle"
```

---

## Task 3: DB query helpers

**Files:**

- Modify: `server/utils/db.ts`

Replace the current re-export stub with helpers used by all server routes. These are the only place that imports `db` from `../db.js`.

- [ ] **Step 1: Write `server/utils/db.ts`**

```ts
import { eq } from 'drizzle-orm';
import { db } from '../db.js';
import { users, library_settings, items, lists, categories, category_items } from '../schema.js';

export { db };
export { users, library_settings, items, lists, categories, category_items };

// ─── Users ───────────────────────────────────────────────────────────────────

export function findUserByToken(token: string) {
    return db.select().from(users).where(eq(users.token, token)).get();
}

export function findUserByUsername(username: string) {
    return db.select().from(users).where(eq(users.username, username)).get();
}

export function findUserByEmail(email: string) {
    return db.select().from(users).where(eq(users.email, email)).get();
}

export function createUser(data: typeof users.$inferInsert) {
    return db.insert(users).values(data).returning().get();
}

export function updateUser(id: number, data: Partial<typeof users.$inferInsert>) {
    return db.update(users).set(data).where(eq(users.id, id)).returning().get();
}

export function deleteUser(id: number) {
    return db.delete(users).where(eq(users.id, id)).run();
}

// ─── Library Settings ────────────────────────────────────────────────────────

export function getOrCreateLibrarySettings(userId: number) {
    const existing = db.select().from(library_settings).where(eq(library_settings.user_id, userId)).get();
    if (existing) return existing;
    return db.insert(library_settings).values({ user_id: userId }).returning().get();
}

export function updateLibrarySettings(userId: number, data: Partial<typeof library_settings.$inferInsert>) {
    return db.update(library_settings).set(data).where(eq(library_settings.user_id, userId)).returning().get();
}

// ─── Library Serialization ───────────────────────────────────────────────────

/**
 * Assembles a synthetic library JSON (format that Library.load() in dataTypes.js expects)
 * for the given user. Used by GET /api/library and POST /api/auth/signin.
 */
export function buildLibraryJson(userId: number) {
    const settings = getOrCreateLibrarySettings(userId);

    const userItems = db.select().from(items).where(eq(items.user_id, userId)).all();
    const userLists = db.select().from(lists).where(eq(lists.user_id, userId)).orderBy(lists.sort_order).all();
    const userCategories = db
        .select()
        .from(categories)
        .where(eq(categories.user_id, userId))
        .orderBy(categories.sort_order)
        .all();
    const allCategoryItems = userCategories.length
        ? db
              .select()
              .from(category_items)
              .where(
                  // category_id IN (userCategories.map(c => c.id))
                  // Drizzle inArray helper:
                  inArray(
                      category_items.category_id,
                      userCategories.map((c) => c.id),
                  ),
              )
              .orderBy(category_items.sort_order)
              .all()
        : [];

    // Map category_id → array of category_items
    const ciByCategory: Record<number, typeof allCategoryItems> = {};
    for (const ci of allCategoryItems) {
        if (!ciByCategory[ci.category_id]) ciByCategory[ci.category_id] = [];
        ciByCategory[ci.category_id].push(ci);
    }

    // Map list_id → ordered category ids
    const catsByList: Record<number, number[]> = {};
    for (const cat of userCategories) {
        if (!catsByList[cat.list_id]) catsByList[cat.list_id] = [];
        catsByList[cat.list_id].push(cat.id);
    }

    // Compute sequence = max of all IDs + 100
    const allIds = [...userItems.map((i) => i.id), ...userCategories.map((c) => c.id), ...userLists.map((l) => l.id)];
    const sequence = allIds.length ? Math.max(...allIds) + 100 : 100;

    return {
        version: '0.3',
        totalUnit: settings.total_unit ?? 'oz',
        itemUnit: settings.item_unit ?? 'oz',
        defaultListId: settings.default_list_id ?? userLists[0]?.id ?? 1,
        sequence,
        showSidebar: !!settings.show_sidebar,
        currencySymbol: settings.currency_symbol ?? '$',
        optionalFields: {
            images: !!settings.opt_images,
            price: !!settings.opt_price,
            worn: !!settings.opt_worn,
            consumable: !!settings.opt_consumable,
            listDescription: !!settings.opt_list_description,
        },
        items: userItems.map((item) => ({
            id: item.id,
            name: item.name ?? '',
            description: item.description ?? '',
            weight: item.weight ?? 0,
            authorUnit: item.author_unit ?? 'oz',
            price: item.price ?? 0,
            image: item.image ?? '',
            imageUrl: item.image_url ?? '',
            url: item.url ?? '',
        })),
        categories: userCategories.map((cat) => ({
            id: cat.id,
            name: cat.name ?? '',
            color: cat.color ?? '',
            categoryItems: (ciByCategory[cat.id] ?? []).map((ci) => ({
                itemId: ci.item_id,
                qty: ci.qty ?? 1,
                worn: ci.worn ?? 0,
                consumable: ci.consumable ?? 0,
                star: ci.star ?? 0,
            })),
        })),
        lists: userLists.map((list) => ({
            id: list.id,
            name: list.name ?? '',
            description: list.description ?? '',
            externalId: list.external_id,
            categoryIds: catsByList[list.id] ?? [],
        })),
    };
}
```

Note: add `import { inArray } from 'drizzle-orm';` at the top alongside `eq`.

- [ ] **Step 2: Commit**

```bash
git add server/utils/db.ts
git commit -m "feat: replace MongoDB query helpers with Drizzle query helpers"
```

---

## Task 4: Auth middleware and utils

**Files:**

- Modify: `server/middleware/auth.ts`
- Modify: `server/utils/auth.ts`

- [ ] **Step 1: Update `server/middleware/auth.ts`**

```ts
import { findUserByToken } from '../utils/db.js';

export default defineEventHandler((event) => {
    const token = getCookie(event, 'lp');
    if (!token) return;

    try {
        const user = findUserByToken(token);
        if (user) event.context.user = user;
    } catch {
        // DB error — continue unauthenticated
    }
});
```

- [ ] **Step 2: Update `server/utils/auth.ts`**

```ts
import { createRequire } from 'module';
const _require = createRequire(import.meta.url);
const bcrypt = _require('bcryptjs');
const config = _require('config');
import { findUserByUsername } from './db.js';

export async function verifyPassword(username: string, password: string) {
    const user = findUserByUsername(username);
    if (!user) throw { code: 404, message: 'Invalid username and/or password.' };

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) throw { code: 404, message: 'Invalid username and/or password.' };
    return user;
}

export function isModerator(username: string): boolean {
    const moderatorList: string[] = config.get('moderators') || [];
    return moderatorList.includes(username);
}
```

- [ ] **Step 3: Commit**

```bash
git add server/middleware/auth.ts server/utils/auth.ts
git commit -m "feat: update auth middleware and utils to use SQLite query helpers"
```

---

## Task 5: Auth routes

**Files:**

- Modify: `server/api/auth/register.post.ts`
- Modify: `server/api/auth/signin.post.ts`
- Modify: `server/api/auth/signout.post.ts`
- Modify: `server/api/auth/forgot-password.post.ts`
- Modify: `server/api/auth/forgot-username.post.ts`

### `register.post.ts`

- [ ] **Step 1: Rewrite `server/api/auth/register.post.ts`**

```ts
import { createRequire } from 'module';
const _require = createRequire(import.meta.url);
const bcrypt = _require('bcryptjs');
const crypto = _require('crypto');
import { nanoid } from 'nanoid';
import {
    db,
    users,
    lists,
    categories,
    items,
    category_items,
    findUserByUsername,
    findUserByEmail,
    createUser,
    getOrCreateLibrarySettings,
    buildLibraryJson,
} from '../../utils/db.js';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const username = String(body.username ?? '')
        .toLowerCase()
        .trim();
    const password = String(body.password ?? '');
    const email = String(body.email ?? '').trim();

    const errors: any[] = [];
    if (!username) errors.push({ field: 'username', message: 'Please enter a username.' });
    if (username && (username.length < 3 || username.length > 32))
        errors.push({ field: 'username', message: 'Please enter a username between 3 and 32 characters.' });
    if (!email) errors.push({ field: 'email', message: 'Please enter an email.' });
    if (!password) errors.push({ field: 'password', message: 'Please enter a password.' });
    if (password && (password.length < 5 || password.length > 60))
        errors.push({ field: 'password', message: 'Please enter a password between 5 and 60 characters.' });
    if (errors.length) {
        setResponseStatus(event, 400);
        return { errors };
    }

    if (findUserByUsername(username)) {
        setResponseStatus(event, 400);
        return {
            errors: [{ field: 'username', message: 'That username already exists, please pick a different username.' }],
        };
    }
    if (findUserByEmail(email)) {
        setResponseStatus(event, 400);
        return { errors: [{ field: 'email', message: 'A user with that email already exists.' }] };
    }

    const saltRounds = process.env.NODE_ENV === 'test' ? 1 : 10;
    const hash = await bcrypt.hash(password, saltRounds);
    const token = crypto.randomBytes(48).toString('hex');

    // Create user + seed default list/category/item in a transaction
    const user = db.transaction(() => {
        const newUser = createUser({
            username,
            email,
            password: hash,
            token,
            created_at: Math.floor(Date.now() / 1000),
        });

        getOrCreateLibrarySettings(newUser.id);

        // Default list
        const list = db
            .insert(lists)
            .values({
                user_id: newUser.id,
                name: '',
                description: '',
                external_id: nanoid(6),
                sort_order: 0,
                created_at: Math.floor(Date.now() / 1000),
            })
            .returning()
            .get();

        // Default category
        const category = db
            .insert(categories)
            .values({
                user_id: newUser.id,
                list_id: list.id,
                name: '',
                color: '',
                sort_order: 0,
            })
            .returning()
            .get();

        // Default item
        const item = db
            .insert(items)
            .values({
                user_id: newUser.id,
                created_at: Math.floor(Date.now() / 1000),
            })
            .returning()
            .get();

        db.insert(category_items)
            .values({
                category_id: category.id,
                item_id: item.id,
            })
            .run();

        return newUser;
    })();

    setCookie(event, 'lp', token, {
        path: '/',
        maxAge: 365 * 24 * 60 * 1000,
        httpOnly: true,
        sameSite: 'lax',
    });

    return { username, library: JSON.stringify(buildLibraryJson(user.id)) };
});
```

### `signin.post.ts`

- [ ] **Step 2: Rewrite `server/api/auth/signin.post.ts`**

```ts
import { createRequire } from 'module';
const _require = createRequire(import.meta.url);
const crypto = _require('crypto');
import { updateUser, buildLibraryJson } from '../../utils/db.js';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    let user = event.context.user;

    if (!user) {
        if (!body.username || !body.password) {
            setResponseStatus(event, 401);
            return { message: 'Please log in.' };
        }
        try {
            user = await verifyPassword(String(body.username).toLowerCase().trim(), String(body.password));
        } catch (err: any) {
            setResponseStatus(event, err.code ?? 401);
            return { message: err.message ?? 'Please log in.' };
        }
        const token = crypto.randomBytes(48).toString('hex');
        updateUser(user.id, { token });
        user = { ...user, token };
        setCookie(event, 'lp', token, {
            path: '/',
            maxAge: 365 * 24 * 60 * 1000,
            httpOnly: true,
            sameSite: 'lax',
        });
    }

    return { username: user.username, library: JSON.stringify(buildLibraryJson(user.id)) };
});
```

### `signout.post.ts`

- [ ] **Step 3: Rewrite `server/api/auth/signout.post.ts`**

```ts
import { findUserByToken, updateUser } from '../../utils/db.js';

export default defineEventHandler((event) => {
    const token = getCookie(event, 'lp');
    if (token) {
        try {
            const user = findUserByToken(token);
            if (user) updateUser(user.id, { token: null });
        } catch {
            // best-effort
        }
    }
    deleteCookie(event, 'lp', { path: '/', httpOnly: true, sameSite: 'lax' });
    return { ok: true };
});
```

### `forgot-password.post.ts`

- [ ] **Step 4: Update `server/api/auth/forgot-password.post.ts`**

Replace `getDb().collection('users').find(...)` with `findUserByUsername(username)` and `await upsertUser(user)` with `updateUser(user.id, { password: ... })`. Keep Mailgun logic unchanged.

### `forgot-username.post.ts`

- [ ] **Step 5: Update `server/api/auth/forgot-username.post.ts`**

Replace `getDb().collection('users').find({ email })` with `findUserByEmail(email)`. Keep Mailgun logic unchanged.

- [ ] **Step 6: Commit**

```bash
git add server/api/auth/
git commit -m "feat: rewrite auth routes to use SQLite"
```

---

## Task 6: Account routes

**Files:**

- Modify: `server/api/account/index.post.ts`
- Modify: `server/api/account/delete.post.ts`

- [ ] **Step 1: Update `server/api/account/index.post.ts`**

Replace `upsertUser(verified)` with `updateUser(verified.id, { password: ..., email: ... })`.

- [ ] **Step 2: Update `server/api/account/delete.post.ts`**

Replace `getDb().collection('users').deleteOne(...)` with `deleteUser(verified.id)`. SQLite cascade delete handles library_settings, items, lists, categories, category_items, tags.

- [ ] **Step 3: Commit**

```bash
git add server/api/account/
git commit -m "feat: update account routes to use SQLite"
```

---

## Task 6.5: Moderation routes

**Files:**

- Modify: `server/api/moderation/search.get.ts`
- Modify: `server/api/moderation/clear-session.post.ts`
- Modify: `server/api/moderation/reset-password.post.ts`

These three files all call `getDb()` and `upsertUser()`. After `server/db.js` is deleted in Task 2, they will crash at runtime. Fix them now before Task 7 introduces the new helpers they need.

- [ ] **Step 1: Update `server/api/moderation/search.get.ts`**

Replace `getDb().collection('users').find({ username: { $regex: ... } })` with a Drizzle `like()` query:

```ts
import { like, or } from 'drizzle-orm';
import { db, users } from '../../utils/db.js';

// inside the handler:
const results = db
    .select({ username: users.username, email: users.email })
    .from(users)
    .where(or(like(users.username, `%${query}%`), like(users.email, `%${query}%`)))
    .all();
```

- [ ] **Step 2: Update `server/api/moderation/clear-session.post.ts`**

Replace MongoDB lookups with `findUserByUsername(target)` and `updateUser(user.id, { token: null })`.

- [ ] **Step 3: Update `server/api/moderation/reset-password.post.ts`**

Replace MongoDB lookups with `findUserByUsername(target)` and `updateUser(user.id, { password: hash })`.

- [ ] **Step 4: Commit**

```bash
git add server/api/moderation/
git commit -m "feat: update moderation routes to use SQLite"
```

---

## Task 7: GET /api/library

**Files:**

- Create: `server/api/library/index.get.ts`

- [ ] **Step 1: Write `server/api/library/index.get.ts`**

```ts
import { buildLibraryJson } from '../../utils/db.js';

export default defineEventHandler((event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }
    return { username: user.username, library: JSON.stringify(buildLibraryJson(user.id)) };
});
```

- [ ] **Step 2: Commit**

```bash
git add server/api/library/index.get.ts
git commit -m "feat: add GET /api/library endpoint"
```

---

## Task 8: PATCH /api/library

**Files:**

- Create: `server/api/library/index.patch.ts`

- [ ] **Step 1: Write `server/api/library/index.patch.ts`**

```ts
import { updateLibrarySettings } from '../../utils/db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const body = await readBody(event);
    const allowed = [
        'total_unit',
        'item_unit',
        'show_sidebar',
        'currency_symbol',
        'default_list_id',
        'opt_images',
        'opt_price',
        'opt_worn',
        'opt_consumable',
        'opt_list_description',
    ] as const;

    const update: Record<string, any> = {};
    for (const key of allowed) {
        if (key in body) update[key] = body[key];
    }

    if (!Object.keys(update).length) {
        setResponseStatus(event, 400);
        return { message: 'No fields to update.' };
    }

    updateLibrarySettings(user.id, update);
    return { ok: true };
});
```

- [ ] **Step 2: Commit**

```bash
git add server/api/library/index.patch.ts
git commit -m "feat: add PATCH /api/library endpoint"
```

---

## Task 9: Items CRUD

**Files:**

- Create: `server/api/items/index.get.ts`
- Create: `server/api/items/index.post.ts`
- Create: `server/api/items/[id].patch.ts`
- Create: `server/api/items/[id].delete.ts`

- [ ] **Step 1: Write `server/api/items/index.get.ts`**

```ts
import { eq } from 'drizzle-orm';
import { db, items } from '../../utils/db.js';

export default defineEventHandler((event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const userItems = db.select().from(items).where(eq(items.user_id, user.id)).all();
    return userItems.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        weight: item.weight,
        authorUnit: item.author_unit,
        price: item.price,
        image: item.image,
        imageUrl: item.image_url,
        url: item.url,
    }));
});
```

- [ ] **Step 3: Write `server/api/items/index.post.ts`**

```ts
import { db, items } from '../../utils/db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const body = await readBody(event);
    const item = db
        .insert(items)
        .values({
            user_id: user.id,
            name: body.name ?? '',
            description: body.description ?? '',
            weight: body.weight ?? 0,
            author_unit: body.authorUnit ?? body.author_unit ?? 'oz',
            price: body.price ?? 0,
            image: body.image ?? '',
            image_url: body.imageUrl ?? body.image_url ?? '',
            url: body.url ?? '',
            created_at: Math.floor(Date.now() / 1000),
        })
        .returning()
        .get();

    return {
        id: item.id,
        name: item.name,
        description: item.description,
        weight: item.weight,
        authorUnit: item.author_unit,
        price: item.price,
        image: item.image,
        imageUrl: item.image_url,
        url: item.url,
    };
});
```

- [ ] **Step 4: Write `server/api/items/[id].patch.ts`**

```ts
import { eq } from 'drizzle-orm';
import { db, items } from '../../utils/db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const id = parseInt(getRouterParam(event, 'id') ?? '');
    if (!id) {
        setResponseStatus(event, 400);
        return { message: 'Invalid id.' };
    }

    const existing = db.select().from(items).where(eq(items.id, id)).get();
    if (!existing || existing.user_id !== user.id) {
        setResponseStatus(event, 404);
        return { message: 'Item not found.' };
    }

    const body = await readBody(event);
    const allowed: Record<string, any> = {};
    const fieldMap: Record<string, string> = {
        name: 'name',
        description: 'description',
        weight: 'weight',
        authorUnit: 'author_unit',
        price: 'price',
        image: 'image',
        imageUrl: 'image_url',
        url: 'url',
    };
    for (const [clientKey, dbKey] of Object.entries(fieldMap)) {
        if (clientKey in body) allowed[dbKey] = body[clientKey];
        if (dbKey in body) allowed[dbKey] = body[dbKey];
    }

    if (!Object.keys(allowed).length) {
        setResponseStatus(event, 400);
        return { message: 'No fields to update.' };
    }

    const updated = db.update(items).set(allowed).where(eq(items.id, id)).returning().get();
    return {
        id: updated.id,
        name: updated.name,
        description: updated.description,
        weight: updated.weight,
        authorUnit: updated.author_unit,
        price: updated.price,
        image: updated.image,
        imageUrl: updated.image_url,
        url: updated.url,
    };
});
```

- [ ] **Step 5: Write `server/api/items/[id].delete.ts`**

```ts
import { eq } from 'drizzle-orm';
import { db, items } from '../../utils/db.js';

export default defineEventHandler((event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const id = parseInt(getRouterParam(event, 'id') ?? '');
    if (!id) {
        setResponseStatus(event, 400);
        return { message: 'Invalid id.' };
    }

    const existing = db.select().from(items).where(eq(items.id, id)).get();
    if (!existing || existing.user_id !== user.id) {
        setResponseStatus(event, 404);
        return { message: 'Item not found.' };
    }

    // Cascade delete removes category_items automatically
    db.delete(items).where(eq(items.id, id)).run();
    return { ok: true };
});
```

- [ ] **Step 4: Commit**

```bash
git add server/api/items/
git commit -m "feat: add items CRUD endpoints"

> **Note on Task 9 step numbering:** Steps in this task are 1 (GET), 3 (POST), 4 (PATCH), 5 (DELETE), 6 (commit).
```

---

## Task 10: Lists CRUD

**Files:**

- Create: `server/api/lists/index.post.ts`
- Create: `server/api/lists/[id].patch.ts`
- Create: `server/api/lists/[id].delete.ts`

- [ ] **Step 1: Write `server/api/lists/index.post.ts`**

```ts
import { nanoid } from 'nanoid';
import { db, lists } from '../../utils/db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const body = await readBody(event);
    const list = db
        .insert(lists)
        .values({
            user_id: user.id,
            name: body.name ?? '',
            description: body.description ?? '',
            external_id: nanoid(6),
            sort_order: body.sort_order ?? 0,
            created_at: Math.floor(Date.now() / 1000),
        })
        .returning()
        .get();

    return {
        id: list.id,
        name: list.name,
        description: list.description,
        externalId: list.external_id,
        sortOrder: list.sort_order,
    };
});
```

- [ ] **Step 2: Write `server/api/lists/[id].patch.ts`**

Follow the same pattern as items `[id].patch.ts`: check ownership (`list.user_id !== user.id`), update allowed fields (`name`, `description`, `sort_order`), return updated list.

- [ ] **Step 3: Write `server/api/lists/[id].delete.ts`**

Follow the same pattern as items `[id].delete.ts`: check ownership, delete list (cascade removes categories + category_items). If the deleted list was `library_settings.default_list_id`, update that setting to the first remaining list.

- [ ] **Step 4: Commit**

```bash
git add server/api/lists/
git commit -m "feat: add lists CRUD endpoints"
```

---

## Task 11: Categories CRUD

**Files:**

- Create: `server/api/categories/index.post.ts`
- Create: `server/api/categories/[id].patch.ts`
- Create: `server/api/categories/[id].delete.ts`

- [ ] **Step 1: Write `server/api/categories/index.post.ts`**

```ts
import { eq } from 'drizzle-orm';
import { db, lists, categories } from '../../utils/db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const body = await readBody(event);
    const listId = parseInt(body.listId ?? body.list_id ?? '');
    if (!listId) {
        setResponseStatus(event, 400);
        return { message: 'listId required.' };
    }

    const list = db.select().from(lists).where(eq(lists.id, listId)).get();
    if (!list || list.user_id !== user.id) {
        setResponseStatus(event, 404);
        return { message: 'List not found.' };
    }

    const category = db
        .insert(categories)
        .values({
            user_id: user.id,
            list_id: listId,
            name: body.name ?? '',
            color: body.color ?? '',
            sort_order: body.sort_order ?? 0,
        })
        .returning()
        .get();

    return {
        id: category.id,
        name: category.name,
        color: category.color,
        listId: category.list_id,
        sortOrder: category.sort_order,
    };
});
```

- [ ] **Step 2: Write `server/api/categories/[id].patch.ts`**

Follow items patch pattern. Allowed fields: `name`, `color`, `sort_order`. Verify `category.user_id === user.id`.

- [ ] **Step 3: Write `server/api/categories/[id].delete.ts`**

Check `category.user_id === user.id`. Delete category (cascade removes category_items). Return `{ ok: true }`.

- [ ] **Step 4: Commit**

```bash
git add server/api/categories/
git commit -m "feat: add categories CRUD endpoints"
```

---

## Task 12: Category items CRUD

**Files:**

- Create: `server/api/categories/[id]/items/index.post.ts`
- Create: `server/api/categories/[id]/items/[itemId].patch.ts`
- Create: `server/api/categories/[id]/items/[itemId].delete.ts`

- [ ] **Step 1: Write `server/api/categories/[id]/items/index.post.ts`**

```ts
import { and, eq } from 'drizzle-orm';
import { db, categories, items, category_items } from '../../../utils/db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const catId = parseInt(getRouterParam(event, 'id') ?? '');
    const body = await readBody(event);
    const itemId = parseInt(body.itemId ?? body.item_id ?? '');

    if (!catId || !itemId) {
        setResponseStatus(event, 400);
        return { message: 'categoryId and itemId required.' };
    }

    const category = db.select().from(categories).where(eq(categories.id, catId)).get();
    if (!category || category.user_id !== user.id) {
        setResponseStatus(event, 404);
        return { message: 'Category not found.' };
    }

    const item = db.select().from(items).where(eq(items.id, itemId)).get();
    if (!item || item.user_id !== user.id) {
        setResponseStatus(event, 404);
        return { message: 'Item not found.' };
    }

    const ci = db
        .insert(category_items)
        .values({
            category_id: catId,
            item_id: itemId,
            qty: body.qty ?? 1,
            worn: body.worn ?? 0,
            consumable: body.consumable ?? 0,
            star: body.star ?? 0,
            sort_order: body.sort_order ?? 0,
        })
        .returning()
        .get();

    return {
        categoryId: ci.category_id,
        itemId: ci.item_id,
        qty: ci.qty,
        worn: ci.worn,
        consumable: ci.consumable,
        star: ci.star,
    };
});
```

- [ ] **Step 2: Write `server/api/categories/[id]/items/[itemId].patch.ts`**

Find `category_items` row by `category_id = :id AND item_id = :itemId`. Verify category ownership via `category.user_id === user.id`. Update allowed fields: `qty`, `worn`, `consumable`, `star`, `sort_order`. Return updated row.

- [ ] **Step 3: Write `server/api/categories/[id]/items/[itemId].delete.ts`**

Find category, verify ownership, delete `category_items` row matching `category_id = :id AND item_id = :itemId`. Return `{ ok: true }`.

- [ ] **Step 4: Commit**

```bash
git add server/api/categories/
git commit -m "feat: add category items CRUD endpoints"
```

---

## Task 12.5: Tags endpoints

**Files:**

- Create: `server/api/tags/index.get.ts`
- Create: `server/api/tags/index.post.ts`
- Create: `server/api/tags/[id].delete.ts`
- Create: `server/api/items/[id]/tags/index.post.ts`
- Create: `server/api/items/[id]/tags/[tagId].delete.ts`

- [ ] **Step 1: Write `server/api/tags/index.get.ts`**

```ts
import { eq } from 'drizzle-orm';
import { db, tags } from '../../utils/db.js';

export default defineEventHandler((event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }
    return db.select().from(tags).where(eq(tags.user_id, user.id)).all();
});
```

- [ ] **Step 2: Write `server/api/tags/index.post.ts`**

```ts
import { db, tags } from '../../utils/db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }
    const body = await readBody(event);
    if (!body.name) {
        setResponseStatus(event, 400);
        return { message: 'name required.' };
    }
    return db
        .insert(tags)
        .values({ user_id: user.id, name: String(body.name) })
        .returning()
        .get();
});
```

- [ ] **Step 3: Write `server/api/tags/[id].delete.ts`**

Look up tag by id, verify `tag.user_id === user.id`, delete (cascade removes `item_tags` rows). Return `{ ok: true }`.

- [ ] **Step 4: Write `server/api/items/[id]/tags/index.post.ts`**

```ts
import { and, eq } from 'drizzle-orm';
import { db, items, tags, item_tags } from '../../../utils/db.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        setResponseStatus(event, 401);
        return { message: 'Please log in.' };
    }

    const itemId = parseInt(getRouterParam(event, 'id') ?? '');
    const body = await readBody(event);
    const tagId = parseInt(body.tagId ?? '');

    const item = db.select().from(items).where(eq(items.id, itemId)).get();
    if (!item || item.user_id !== user.id) {
        setResponseStatus(event, 404);
        return { message: 'Item not found.' };
    }

    const tag = db
        .select()
        .from(tags)
        .where(and(eq(tags.id, tagId), eq(tags.user_id, user.id)))
        .get();
    if (!tag) {
        setResponseStatus(event, 404);
        return { message: 'Tag not found.' };
    }

    // Composite PK prevents duplicates
    db.insert(item_tags).values({ item_id: itemId, tag_id: tagId }).onConflictDoNothing().run();
    return { ok: true };
});
```

- [ ] **Step 5: Write `server/api/items/[id]/tags/[tagId].delete.ts`**

Verify item ownership, then delete from `item_tags` where `item_id = :id AND tag_id = :tagId`. Return `{ ok: true }`.

- [ ] **Step 6: Commit**

```bash
git add server/api/tags/ server/api/items/
git commit -m "feat: add tags endpoints"
```

---

## Task 13: Share and CSV routes

**Files:**

- Modify: `server/api/share/[id].get.ts`
- Modify: `server/routes/csv/[id].get.ts`

Both routes currently query MongoDB for `library.lists.externalId`. Replace with a `lists` table query.

- [ ] **Step 1: Rewrite `server/api/share/[id].get.ts`**

```ts
import { eq } from 'drizzle-orm';
import { db, lists, buildLibraryJson } from '../../utils/db.js';

export default defineEventHandler((event) => {
    const externalId = getRouterParam(event, 'id');
    if (!externalId) throw createError({ statusCode: 400, message: 'No list specified' });

    const list = db.select().from(lists).where(eq(lists.external_id, externalId)).get();
    if (!list) throw createError({ statusCode: 404, message: 'List not found' });

    const libraryJson = buildLibraryJson(list.user_id);
    // Set defaultListId so share page displays the correct list
    libraryJson.defaultListId = list.id;

    return { library: JSON.stringify(libraryJson), externalId };
});
```

- [ ] **Step 2: Rewrite `server/routes/csv/[id].get.ts`**

Follow the same pattern: look up by `external_id`, get `buildLibraryJson`, find the list, then generate CSV using the same loop as before (iterating `categoryIds`, looking up categories and items from the library JSON).

- [ ] **Step 3: Run share and CSV E2E tests**

```bash
npx playwright test test/e2e/share.spec.ts test/e2e/export-import.spec.ts --project=chromium
```

Expected: all pass.

- [ ] **Step 4: Commit**

```bash
git add server/api/share/[id].get.ts server/routes/csv/[id].get.ts
git commit -m "feat: update share and CSV routes to use SQLite"
```

---

## Task 14: Store refactor

**Files:**

- Modify: `app/store/store.js`

Remove auto-save state fields and wire all library-mutation actions to API calls.

- [ ] **Step 1: Remove auto-save state from `app/store/store.js`**

Remove from `state()`:

- `isSaving`, `syncToken`, `saveType`, `lastSaveData`

Remove actions:

- `setSaveType`, `setSyncToken`, `setLastSaveData`, `setIsSaving`
- `loadRemote()`, `init()`

- [ ] **Step 2: Add import for `Item`, `Category`, `List`**

At the top of `store.js`, add:

```js
import { Item, Category, List } from '#shared/dataTypes.js';
```

- [ ] **Step 3: Add `$apiError` helper**

Inside the `actions` block, add a private-style helper (as a local function outside the store, or inline):

```js
// Helper used by actions to show errors
function handleApiError(store, err, rollback) {
    rollback?.();
    store.globalAlerts.push({
        message: err?.data?.message ?? err?.message ?? 'An error occurred. Please try again.',
    });
}
```

- [ ] **Step 4: Wire settings actions to PATCH /api/library**

For each of `toggleSidebar`, `setDefaultList`, `setTotalUnit`, `toggleOptionalField`, `updateCurrencySymbol`, `updateItemUnit`, apply the optimistic update then call the API:

```js
async toggleSidebar() {
    const prev = this.library.showSidebar;
    this.library.showSidebar = !prev;
    try {
        await $fetch('/api/library', { method: 'PATCH', body: { show_sidebar: this.library.showSidebar ? 1 : 0 } });
    } catch (err) {
        this.library.showSidebar = prev;
        handleApiError(this, err);
    }
},
```

Follow the same pattern for each settings action (update the appropriate `snake_case` field in the PATCH body).

- [ ] **Step 5: Wire newItem to POST /api/items + POST /api/categories/:id/items**

```js
async newItem({ category, _isNew }) {
    try {
        const serverItem = await $fetch('/api/items', {
            method: 'POST',
            body: { authorUnit: this.library.itemUnit },
        });
        const item = new Item({ id: serverItem.id, unit: this.library.itemUnit });
        Object.assign(item, { name: serverItem.name, description: serverItem.description,
            weight: serverItem.weight, price: serverItem.price, image: serverItem.image,
            imageUrl: serverItem.imageUrl, url: serverItem.url });
        this.library.items.push(item);
        this.library.idMap[item.id] = item;

        if (category) {
            const ci = await $fetch(`/api/categories/${category.id}/items`, {
                method: 'POST', body: { itemId: item.id },
            });
            category.addItem({ itemId: item.id, qty: ci.qty, worn: ci.worn,
                consumable: !!ci.consumable, star: ci.star, _isNew });
        }
        this.library.getListById(this.library.defaultListId).calculateTotals();
    } catch (err) {
        handleApiError(this, err);
    }
},
```

- [ ] **Step 6: Wire newCategory**

```js
async newCategory(list) {
    try {
        const serverCat = await $fetch('/api/categories', {
            method: 'POST', body: { listId: list.id },
        });
        const category = new Category({ id: serverCat.id, library: this.library });
        this.library.categories.push(category);
        this.library.idMap[category.id] = category;
        list.addCategory(category.id);

        await this.newItem({ category });
        this.library.getListById(this.library.defaultListId).calculateTotals();
    } catch (err) {
        handleApiError(this, err);
    }
},
```

- [ ] **Step 7: Wire newList**

```js
async newList() {
    try {
        const serverList = await $fetch('/api/lists', { method: 'POST', body: {} });
        const list = new List({ id: serverList.id, library: this.library });
        list.name = serverList.name ?? '';
        list.description = serverList.description ?? '';
        list.externalId = serverList.externalId;
        this.library.lists.push(list);
        this.library.idMap[list.id] = list;

        await this.newCategory(list);
        list.calculateTotals();
        this.library.defaultListId = list.id;
    } catch (err) {
        handleApiError(this, err);
    }
},
```

- [ ] **Step 8: Wire item mutation actions (optimistic)**

`updateItem`, `updateItemLink`, `updateItemImageUrl`, `updateItemImage`, `removeItemImage`: apply optimistic update, call `PATCH /api/items/:id` with changed field(s), rollback on error.

Example for `updateItem`:

```js
async updateItem(item) {
    const old = this.library.getItemById(item.id);
    const snapshot = { ...old };
    this.library.updateItem(item);
    this.library.getListById(this.library.defaultListId).calculateTotals();
    try {
        await $fetch(`/api/items/${item.id}`, { method: 'PATCH', body: item });
    } catch (err) {
        this.library.updateItem(snapshot);
        this.library.getListById(this.library.defaultListId).calculateTotals();
        handleApiError(this, err);
    }
},
```

- [ ] **Step 9: Wire removeItem, removeCategory, removeList (optimistic)**

`removeItem`: optimistic remove from library → `DELETE /api/items/:id` → on error, restore from snapshot.

`removeCategory` and `removeList`: same pattern.

Example for `removeItem`:

```js
async removeItem(item) {
    const snapshot = JSON.parse(JSON.stringify(this.library.save()));
    this.library.removeItem(item.id);
    this.library.getListById(this.library.defaultListId).calculateTotals();
    try {
        await $fetch(`/api/items/${item.id}`, { method: 'DELETE' });
    } catch (err) {
        // Restore from snapshot — this works because Library.save() emits the same
        // camelCase format that Library.load() reads (version '0.3' format).
        const lib = new Library();
        lib.load(snapshot);
        this.library = lib;
        handleApiError(this, err);
    }
},
```

> **Note:** `Library.save()` emits version `0.3` format (camelCase fields: `totalUnit`, `itemUnit`, `categoryIds`, etc.) and `Library.load()` reads the same format. The snapshot rollback relies on this internal round-trip compatibility — do not change `Library.save()` output format without updating this rollback pattern.

- [ ] **Step 10: Wire list and category name/description updates (optimistic)**

`updateListName`, `updateListDescription` → `PATCH /api/lists/:id`
`updateCategoryName`, `updateCategoryColor` → `PATCH /api/categories/:id`

- [ ] **Step 11: Wire reorder actions (optimistic)**

`reorderList` → `PATCH /api/lists/:id` with `{ sort_order: newIndex }` for each affected list.
`reorderCategory` → `PATCH /api/categories/:id` with `{ sort_order: newIndex }`.
`reorderItem` → may move across categories: `DELETE /api/categories/:oldCatId/items/:itemId` + `POST /api/categories/:newCatId/items`, then `PATCH` for sort_order.

- [ ] **Step 12: Wire updateCategoryItem and removeItemFromCategory**

`updateCategoryItem` → `PATCH /api/categories/:catId/items/:itemId`
`removeItemFromCategory` → `DELETE /api/categories/:catId/items/:itemId`

- [ ] **Step 13: Wire addItemToCategory**

`addItemToCategory` → `POST /api/categories/:catId/items` with `{ itemId }`.

- [ ] **Step 14: Wire copyList**

`copyList` needs to POST the new list, then POST each category + category_items:

```js
async copyList(listId) {
    const oldList = this.library.getListById(listId);
    if (!oldList) return;
    try {
        const serverList = await $fetch('/api/lists', {
            method: 'POST', body: { name: `${oldList.name} (copy)`, description: oldList.description },
        });
        const newList = new List({ id: serverList.id, library: this.library });
        newList.name = serverList.name;
        newList.externalId = serverList.externalId;
        this.library.lists.push(newList);
        this.library.idMap[newList.id] = newList;

        for (const catId of oldList.categoryIds) {
            const oldCat = this.library.getCategoryById(catId);
            const serverCat = await $fetch('/api/categories', {
                method: 'POST', body: { listId: newList.id, name: oldCat.name, color: oldCat.color },
            });
            const newCat = new Category({ id: serverCat.id, library: this.library });
            newCat.name = oldCat.name;
            newCat.color = oldCat.color;
            this.library.categories.push(newCat);
            this.library.idMap[newCat.id] = newCat;
            newList.addCategory(newCat.id);

            for (const ci of oldCat.categoryItems) {
                const serverCi = await $fetch(`/api/categories/${newCat.id}/items`, {
                    method: 'POST', body: { itemId: ci.itemId, qty: ci.qty, worn: ci.worn, consumable: ci.consumable },
                });
                newCat.addItem({ itemId: ci.itemId, qty: serverCi.qty, worn: serverCi.worn, consumable: !!serverCi.consumable });
            }
        }

        newList.calculateTotals();
        this.library.defaultListId = newList.id;
    } catch (err) {
        handleApiError(this, err);
    }
},
```

- [ ] **Step 15: Wire importCSV**

```js
async importCSV(importData) {
    try {
        const serverList = await $fetch('/api/lists', {
            method: 'POST', body: { name: importData.name },
        });
        const list = new List({ id: serverList.id, library: this.library });
        list.name = serverList.name;
        list.externalId = serverList.externalId;
        this.library.lists.push(list);
        this.library.idMap[list.id] = list;

        const categoryMap: Record<string, any> = {};
        for (const row of importData.data) {
            if (!categoryMap[row.category]) {
                const serverCat = await $fetch('/api/categories', {
                    method: 'POST', body: { listId: list.id, name: row.category },
                });
                const cat = new Category({ id: serverCat.id, library: this.library });
                cat.name = row.category;
                this.library.categories.push(cat);
                this.library.idMap[cat.id] = cat;
                list.addCategory(cat.id);
                categoryMap[row.category] = cat;
            }
            const cat = categoryMap[row.category];

            const serverItem = await $fetch('/api/items', {
                method: 'POST',
                body: {
                    name: row.name, description: row.description,
                    weight: weightUtils.WeightToMg(parseFloat(row.weight), row.unit),
                    authorUnit: row.unit,
                },
            });
            const item = new Item({ id: serverItem.id, unit: serverItem.authorUnit });
            Object.assign(item, serverItem);
            this.library.items.push(item);
            this.library.idMap[item.id] = item;

            const ci = await $fetch(`/api/categories/${cat.id}/items`, {
                method: 'POST', body: { itemId: item.id, qty: parseFloat(row.qty) || 1 },
            });
            cat.addItem({ itemId: item.id, qty: ci.qty });
        }

        list.calculateTotals();
        this.library.defaultListId = list.id;
    } catch (err) {
        handleApiError(this, err);
    }
},
```

- [ ] **Step 16: Remove `setExternalId` action**

`setExternalId` is no longer needed — `external_id` is auto-generated on list creation and never changes. Remove it from the store. Verify no components call it.

- [ ] **Step 17: Commit**

```bash
git add app/store/store.js
git commit -m "feat: wire store actions to granular API endpoints, remove auto-save state"
```

---

## Task 15: Session plugin and cleanup

**Files:**

- Modify: `app/plugins/session.client.ts`
- Delete: `app/plugins/auto-save.client.ts`
- Modify: `docker-compose.yml`
- Modify: `README.md`
- Delete: `server/api/library/save.post.ts`
- Delete: `server/api/external-id.post.ts`

- [ ] **Step 1: Update `app/plugins/session.client.ts`**

```ts
import { useLighterpackStore } from '~/store/store.js';

export default defineNuxtPlugin(async () => {
    const store = useLighterpackStore();
    if (store.loggedIn) return;

    try {
        const data = await $fetch('/api/library', { credentials: 'include' });
        if (data && (data as any).username) {
            store.setLoggedIn((data as any).username);
            store.loadLibraryData((data as any).library);
        }
    } catch {
        // 401 = no valid session, stay unauthenticated
    }
});
```

- [ ] **Step 2: Delete auto-save plugin**

```bash
rm app/plugins/auto-save.client.ts
```

- [ ] **Step 3: Delete obsolete server files**

```bash
rm server/api/library/save.post.ts
rm server/api/external-id.post.ts
```

- [ ] **Step 4: Update `docker-compose.yml`**

Remove the MongoDB service entirely. The file can either be deleted or replaced with a stub:

```yaml
# No external services required — uses SQLite on disk
```

- [ ] **Step 5: Update `README.md`**

- Remove MongoDB from Prerequisites and Tech Stack
- Remove "Start MongoDB via Docker Compose" step from Getting Started
- Add `npm run db:migrate` script to Available Scripts
- Add `DATABASE_PATH` env var description

- [ ] **Step 6: Add `db:migrate` script to `package.json`**

```json
"db:migrate": "drizzle-kit migrate"
```

- [ ] **Step 7: Commit**

```bash
git add app/plugins/session.client.ts docker-compose.yml README.md package.json
git rm app/plugins/auto-save.client.ts server/api/library/save.post.ts server/api/external-id.post.ts
git commit -m "feat: update session plugin for SQLite, remove auto-save plugin and obsolete endpoints"
```

---

## Task 16: E2E test updates

**Files:**

- Create: `test/e2e/global-setup.ts`
- Modify: `playwright.config.ts`
- Modify: `test/e2e/list.spec.ts`

- [ ] **Step 1: Write `test/e2e/global-setup.ts`**

```ts
import { rm } from 'fs/promises';

export default async function globalSetup() {
    try {
        await rm('./data/test.db', { force: true });
        await rm('./data/test.db-shm', { force: true });
        await rm('./data/test.db-wal', { force: true });
    } catch {
        // Fine if files don't exist
    }
}
```

- [ ] **Step 2: Update `playwright.config.ts`**

Add `globalSetup` and `DATABASE_PATH` to webServer command:

```ts
globalSetup: './test/e2e/global-setup.ts',

webServer: {
    command: 'DATABASE_PATH=./data/test.db NODE_ENV=test npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
},
```

- [ ] **Step 3: Simplify `test/e2e/list.spec.ts`**

The `should save list name` test currently polls for 30 seconds waiting for auto-save. With immediate API saves, replace the polling loop with a direct assertion:

```ts
test('should save list name', async ({ page }) => {
    // ... register user, get shareUrl ...

    await page.getByPlaceholder('List Name').fill(listName);
    await page.getByPlaceholder('List Name').blur();

    // Save is immediate — no polling needed
    await page.goto(shareUrl);
    await expect(page.getByRole('heading').filter({ hasText: listName })).toBeVisible();
});
```

- [ ] **Step 4: Run the full E2E suite**

```bash
DATABASE_PATH=./data/test.db npx playwright test --project=chromium
```

Expected: all 56 Chromium tests pass.

- [ ] **Step 5: Run Firefox too**

```bash
DATABASE_PATH=./data/test.db npx playwright test --project=firefox
```

Expected: all 56 Firefox tests pass.

- [ ] **Step 6: Commit**

```bash
git add test/e2e/global-setup.ts test/e2e/list.spec.ts playwright.config.ts
git commit -m "feat: update E2E tests for SQLite — remove timing workarounds, add global setup"
```

---

## Verification Checklist

After all tasks complete, verify:

- [ ] `npm run test:unit` — 43 Vitest unit tests pass (unchanged)
- [ ] `npx playwright test` — 112 E2E tests pass (56 Chromium + 56 Firefox)
- [ ] `npm run build` — production build succeeds with no TypeScript errors
- [ ] Manual smoke test: register → add item → add category → share URL shows correct data → CSV download works → logout → login → data persists
- [ ] `data/` directory is in `.gitignore` and not tracked by git
- [ ] No references to `getDb()`, `upsertUser()`, or `mongodb` remain in server code
