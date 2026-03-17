# Design: Replace MongoDB with SQLite + Drizzle ORM

**Date:** 2026-03-17
**Status:** Approved

## Overview

Replace the MongoDB database and blob-save API with SQLite (via `better-sqlite3`) and Drizzle ORM, with a fully normalized schema and granular REST endpoints. This is a clean-slate switch — no data migration from existing MongoDB data is required.

The change enables future features including item tagging, cross-user item search, and a public item catalog, none of which are feasible with the current blob-save architecture.

## Constraints

- Single-server VPS deployment — local SQLite file on disk
- Clean-slate switch — no existing data to migrate
- Frontend components must not change (30+ Vue components reference `library.items`, `library.lists`, etc.)
- `dataTypes.js` stays for client-side weight calculation and chart rendering
- Share page (`/r/:id`) must continue to work without changes

---

## Section 1: Database Schema

Defined in `server/schema.ts` using Drizzle table definitions.

### `users`

| Column       | Type                     | Notes                |
| ------------ | ------------------------ | -------------------- |
| `id`         | INTEGER PK autoincrement |                      |
| `username`   | TEXT unique not null     |                      |
| `email`      | TEXT unique not null     |                      |
| `password`   | TEXT not null            | bcrypt hash          |
| `token`      | TEXT unique              | session cookie value |
| `created_at` | INTEGER                  | unix timestamp       |

### `library_settings`

One row per user. Display and unit preferences.

| Column                 | Type                   | Notes              |
| ---------------------- | ---------------------- | ------------------ |
| `id`                   | INTEGER PK             |                    |
| `user_id`              | INTEGER unique → users | cascade delete     |
| `total_unit`           | TEXT                   | default `'oz'`     |
| `item_unit`            | TEXT                   | default `'oz'`     |
| `show_sidebar`         | INTEGER                | boolean, default 0 |
| `currency_symbol`      | TEXT                   | default `'$'`      |
| `default_list_id`      | INTEGER → lists        | nullable           |
| `opt_images`           | INTEGER                | boolean, default 0 |
| `opt_price`            | INTEGER                | boolean, default 0 |
| `opt_worn`             | INTEGER                | boolean, default 1 |
| `opt_consumable`       | INTEGER                | boolean, default 1 |
| `opt_list_description` | INTEGER                | boolean, default 0 |

### `items`

Per-user gear catalog. An item can appear in multiple categories.

| Column        | Type                     | Notes                                         |
| ------------- | ------------------------ | --------------------------------------------- |
| `id`          | INTEGER PK autoincrement |                                               |
| `user_id`     | INTEGER → users          | cascade delete                                |
| `name`        | TEXT                     | default `''`                                  |
| `description` | TEXT                     | default `''`                                  |
| `weight`      | REAL                     | default 0                                     |
| `author_unit` | TEXT                     | default `'oz'`                                |
| `price`       | REAL                     | default 0                                     |
| `image`       | TEXT                     | default `''`                                  |
| `image_url`   | TEXT                     | default `''`                                  |
| `url`         | TEXT                     | default `''`                                  |
| `is_public`   | INTEGER                  | boolean, default 0; for future public catalog |
| `created_at`  | INTEGER                  | unix timestamp                                |

### `lists`

Packing lists. `external_id` is generated at creation time.

| Column        | Type                     | Notes                                    |
| ------------- | ------------------------ | ---------------------------------------- |
| `id`          | INTEGER PK autoincrement |                                          |
| `user_id`     | INTEGER → users          | cascade delete                           |
| `name`        | TEXT                     | default `''`                             |
| `description` | TEXT                     | default `''`                             |
| `external_id` | TEXT unique not null     | 6-char alphanumeric, generated on create |
| `sort_order`  | INTEGER                  | default 0                                |
| `created_at`  | INTEGER                  | unix timestamp                           |

### `categories`

Groupings within a list.

| Column       | Type                     | Notes                        |
| ------------ | ------------------------ | ---------------------------- |
| `id`         | INTEGER PK autoincrement |                              |
| `user_id`    | INTEGER → users          | for auth checks without join |
| `list_id`    | INTEGER → lists          | cascade delete               |
| `name`       | TEXT                     | default `''`                 |
| `sort_order` | INTEGER                  | default 0                    |

### `category_items`

Junction table: item appears in a category with per-appearance attributes.

| Column        | Type                     | Notes              |
| ------------- | ------------------------ | ------------------ |
| `id`          | INTEGER PK autoincrement |                    |
| `category_id` | INTEGER → categories     | cascade delete     |
| `item_id`     | INTEGER → items          | cascade delete     |
| `qty`         | INTEGER                  | default 1          |
| `worn`        | INTEGER                  | default 0          |
| `consumable`  | INTEGER                  | boolean, default 0 |
| `star`        | INTEGER                  | default 0          |
| `sort_order`  | INTEGER                  | default 0          |

### `tags` and `item_tags`

```
tags:       id, user_id (→ users), name
item_tags:  item_id (→ items), tag_id (→ tags)  [composite PK]
```

### Dropped concepts

- `sequence` counter — replaced by SQLite autoincrement
- `syncToken` on users — replaced by per-operation API calls

---

## Section 2: API Endpoints

All existing auth endpoints are retained unchanged. The blob-save endpoint (`POST /api/library/save`) and the external-id endpoint (`POST /api/external-id`) are deleted.

### Auth (unchanged)

```
POST /api/auth/register
POST /api/auth/signin
POST /api/auth/signout
POST /api/auth/forgot-password
POST /api/auth/forgot-username
```

### Library settings

```
GET    /api/library    → settings + all lists with nested categories and items (initial load)
PATCH  /api/library    → update total_unit, item_unit, show_sidebar, currency_symbol,
                         default_list_id, opt_*
```

### Items

```
GET    /api/items           → user's items (?search=, ?tag=, ?public=true for future)
POST   /api/items           → create → returns { id, ...item }
PATCH  /api/items/:id       → update any item fields
DELETE /api/items/:id       → delete (cascades out of all category_items)
```

### Lists

```
GET    /api/lists           → all user's lists
POST   /api/lists           → create → returns { id, external_id, ...list }
PATCH  /api/lists/:id       → update name, description, sort_order
DELETE /api/lists/:id       → delete + cascade categories
```

`external_id` is generated automatically on list creation — no separate share endpoint needed.

### Categories

```
POST   /api/categories         → create in a list → returns { id, ...category }
PATCH  /api/categories/:id     → update name, sort_order
DELETE /api/categories/:id     → delete + cascade category_items
```

### Category items

```
POST   /api/categories/:id/items             → add item to category
PATCH  /api/categories/:id/items/:itemId     → update qty, worn, consumable, star, sort_order
DELETE /api/categories/:id/items/:itemId     → remove item from category
```

### Tags

```
GET    /api/tags                      → user's tags
POST   /api/tags                      → create tag
DELETE /api/tags/:id                  → delete + remove from all items
POST   /api/items/:id/tags            → add tag to item
DELETE /api/items/:id/tags/:tagId     → remove tag from item
```

### Share and export (unchanged)

```
GET /api/share/:externalId    → public; serializes normalized rows into library JSON for share page
GET /csv/:id                  → public; CSV export
```

---

## Section 3: Frontend Changes

### Auto-save plugin removed

`app/plugins/auto-save.client.ts` is deleted. The following store state fields are removed: `isSaving`, `syncToken`, `saveType`, `lastSaveData`.

### Store actions become two-step: update in-memory + call API

The `Library` object remains the primary client-side state. Components are unchanged. Each store action that mutates data now:

1. Calls the appropriate API endpoint
2. On success: applies the result to the in-memory `Library` (using server-assigned ID for creates)
3. On error: shows a global alert (no optimistic update — wait for server on creates; optimistic update + rollback for updates/deletes)

Examples:

- `addItem()` → `POST /api/items` → await `{ id }` → add to `library.items`
- `updateItem()` → optimistic update → `PATCH /api/items/:id` → rollback on error
- `deleteItem()` → `DELETE /api/items/:id` → remove from library on success
- `addList()` → `POST /api/lists` → await `{ id, external_id }` → add to `library.lists`

### Page load hydration

`app/plugins/session.client.ts` changes from calling `POST /api/auth/signin` to `GET /api/library`. The response contains library settings plus all lists with nested categories and items. The store reconstructs the `Library` object from this normalized response using the existing `dataTypes.js` `load()` method (fed a synthetic library JSON).

### Share page unaffected

`GET /api/share/:externalId` serializes normalized DB rows into the existing library JSON format. `app/pages/r/[id].vue` requires no changes.

---

## Section 4: Server Changes

### Dependencies

- **Add:** `drizzle-orm`, `better-sqlite3`, `@types/better-sqlite3`, `drizzle-kit`
- **Remove:** `mongodb`

### New files

| File                  | Purpose                                                |
| --------------------- | ------------------------------------------------------ |
| `server/schema.ts`    | Drizzle table definitions — single source of truth     |
| `server/db.ts`        | `better-sqlite3` connection + Drizzle client           |
| `drizzle.config.ts`   | Drizzle Kit config (SQLite file path, schema location) |
| `drizzle/migrations/` | Auto-generated migration SQL (committed to repo)       |

### Changed files

| File                               | Change                                                                                                                             |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `server/db.js`                     | Deleted; replaced by `server/db.ts`                                                                                                |
| `server/plugins/mongodb.ts`        | Renamed to `server/plugins/sqlite.ts`; applies pending migrations on startup                                                       |
| `server/utils/db.ts`               | Replaced with fine-grained query helpers (`findUserByToken`, `findUserByUsername`, `createUser`, `updateUser`, `deleteUser`, etc.) |
| `server/middleware/auth.ts`        | `getDb().collection('users').find({ token })` → `findUserByToken(token)`                                                           |
| `server/api/auth/register.post.ts` | MongoDB queries → Drizzle inserts                                                                                                  |
| `server/api/auth/signin.post.ts`   | MongoDB queries → Drizzle queries                                                                                                  |
| `server/api/library/save.post.ts`  | **Deleted**                                                                                                                        |
| `server/api/external-id.post.ts`   | **Deleted** (logic moved into list creation)                                                                                       |
| `server/api/share/[id].get.ts`     | Queries normalized tables; serializes into library JSON for share page                                                             |
| `server/routes/csv/[id].get.ts`    | Same as share: queries normalized tables                                                                                           |

### SQLite pragmas

Set once in `server/plugins/sqlite.ts` at startup:

```js
db.pragma('journal_mode = WAL'); // Concurrent reads during writes
db.pragma('synchronous = NORMAL'); // Safe + faster than FULL
db.pragma('foreign_keys = ON'); // Enforce FK constraints
db.pragma('busy_timeout = 5000'); // Wait instead of erroring on lock
db.pragma('cache_size = -20000'); // 20MB page cache
db.pragma('temp_store = MEMORY'); // Temp tables in RAM
```

### SQLite file location

Configured via `DATABASE_PATH` env var, defaulting to `./data/lighterpack.db`. The `data/` directory is gitignored.

---

## Section 5: Testing Strategy

### E2E tests simplify

The 30-second `toPass` poll in `list.spec.ts` (waiting for auto-save debounce) is replaced with a direct assertion — saves are now immediate. Other timing workarounds in the suite can be removed.

### SQLite test isolation

Tests use a separate database file:

```ts
// playwright.config.ts
webServer: {
    command: 'DATABASE_PATH=./data/test.db NODE_ENV=test npm run start',
    ...
}
```

The test DB file is deleted and recreated before each test run. No MongoDB instance required.

### Unit tests unchanged

The 43 Vitest tests covering `dataTypes.js`, components, and store logic require no changes. The `auto-save.client.ts` plugin is deleted along with any tests for it.

### New test concerns

- **Optimistic rollback:** E2E tests verify that a failed API call restores previous state and shows a global alert
- **Migration smoke test:** `npm run db:migrate` runs in CI before the E2E suite to verify schema integrity

---

## Implementation Order

1. Add Drizzle dependencies, write `server/schema.ts`, generate initial migration
2. Replace `server/db.js` with `server/db.ts`, update `server/plugins/sqlite.ts`
3. Rewrite auth routes (`register`, `signin`, `signout`, `forgot-*`) against new schema
4. Rewrite `server/middleware/auth.ts` and `server/utils/auth.ts`
5. Add new API routes (items, lists, categories, category_items, tags)
6. Update `GET /api/library` for initial page load hydration
7. Update `GET /api/share/:id` and `GET /csv/:id` to query normalized tables
8. Remove auto-save plugin; wire store actions to granular API calls
9. Update `session.client.ts` to call `GET /api/library`
10. Delete `POST /api/library/save` and `POST /api/external-id`
11. Update E2E tests (remove timing workarounds, add rollback tests)
12. Update `docker-compose.yml` to remove MongoDB service; add `data/` to `.gitignore`
