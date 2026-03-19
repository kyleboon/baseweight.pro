# Design: Replace MongoDB with SQLite + Drizzle ORM

**Date:** 2026-03-17
**Status:** Approved

## Overview

Replace the MongoDB database and blob-save API with SQLite (via `better-sqlite3`) and Drizzle ORM, with a fully normalized schema and granular REST endpoints. This is a clean-slate switch — no data migration from existing MongoDB data is required.

The change enables future features including item tagging, cross-user item search, and a public item catalog, none of which are feasible with the current blob-save architecture.

### Item model

Items are **deep-copied into each category** at the time they are added. Editing a `category_item`'s fields (name, weight, etc.) never modifies a shared record — each category carries its own independent copy. A `global_item_id` FK records the catalog entry the copy originated from (nullable; set to NULL if the source global item is later deleted).

The `global_items` catalog table and its management UI are **Phase 2** — deferred to a follow-on plan. Phase 1 only implements per-category item data embedded in `category_items`.

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

### `global_items` _(Phase 2 — deferred)_

Per-user gear catalog. Managed in a future plan; not required for Phase 1.

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

Each row is a **deep copy** of item data scoped to one category. Editing these fields never touches `global_items`. `global_item_id` is a soft reference — it is set to NULL if the source global item is deleted, but the category item is preserved.

| Column           | Type                     | Notes                                             |
| ---------------- | ------------------------ | ------------------------------------------------- |
| `id`             | INTEGER PK autoincrement |                                                   |
| `category_id`    | INTEGER → categories     | cascade delete                                    |
| `user_id`        | INTEGER → users          | for auth checks without join                      |
| `global_item_id` | INTEGER → global_items   | nullable; SET NULL on delete; Phase 2 FK          |
| `name`           | TEXT                     | default `''`; copied from global item at add time |
| `description`    | TEXT                     | default `''`                                      |
| `weight`         | REAL                     | default 0                                         |
| `author_unit`    | TEXT                     | default `'oz'`                                    |
| `price`          | REAL                     | default 0                                         |
| `image`          | TEXT                     | default `''`                                      |
| `image_url`      | TEXT                     | default `''`                                      |
| `url`            | TEXT                     | default `''`                                      |
| `qty`            | INTEGER                  | default 1                                         |
| `worn`           | INTEGER                  | default 0                                         |
| `consumable`     | INTEGER                  | boolean, default 0                                |
| `star`           | INTEGER                  | default 0                                         |
| `sort_order`     | INTEGER                  | default 0                                         |

### `tags` and `item_tags` _(Phase 2 — deferred)_

Tags attach to `global_items` entries. Deferred with the rest of the global item catalog.

```
tags:       id, user_id (→ users), name
item_tags:  global_item_id (→ global_items), tag_id (→ tags)  [composite PK]
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

### Global items _(Phase 2 — deferred)_

```
GET    /api/global-items           → user's catalog (?search=, ?tag=, ?public=true)
POST   /api/global-items           → create catalog entry → returns { id, ...item }
PATCH  /api/global-items/:id       → update catalog entry (does NOT propagate to category_items)
DELETE /api/global-items/:id       → delete; sets global_item_id = NULL on referencing category_items
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
POST   /api/categories/:id/items             → create item in category; body contains all item fields
                                               (name, description, weight, author_unit, price,
                                                image, image_url, url) + qty, worn, consumable,
                                                star, sort_order; optionally global_item_id
                                               → returns { id, ...category_item }
PATCH  /api/categories/:id/items/:itemId     → update any item fields or qty/worn/consumable/star/sort_order;
                                               never propagates to global_items
DELETE /api/categories/:id/items/:itemId     → remove item from category
```

### Tags _(Phase 2 — deferred)_

```
GET    /api/tags                                  → user's tags
POST   /api/tags                                  → create tag
DELETE /api/tags/:id                              → delete + remove from all global items
POST   /api/global-items/:id/tags                 → add tag to global item
DELETE /api/global-items/:id/tags/:tagId          → remove tag from global item
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

- `addItem()` → `POST /api/categories/:id/items` with all item fields → await `{ id }` → add to category in `library`
- `updateItem()` → optimistic update → `PATCH /api/categories/:id/items/:itemId` → rollback on error
- `deleteItem()` → `DELETE /api/categories/:id/items/:itemId` → remove from category on success
- `addList()` → `POST /api/lists` → await `{ id, external_id }` → add to `library.lists`

`library.items` is derived on load from the union of all `category_items` across all lists (the API hydration response provides this). There is no separate item catalog in Phase 1.

### Page load hydration

`app/plugins/session.client.ts` changes from calling `POST /api/auth/signin` to `GET /api/library`. The response contains library settings plus all lists with nested categories and items (item fields embedded per category_item). The store reconstructs the `Library` object from this normalized response using the existing `dataTypes.js` `load()` method (fed a synthetic library JSON).

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

### Phase 1 (this plan)

1. Add Drizzle dependencies, write `server/schema.ts` (no `global_items` table yet), generate initial migration
2. Replace `server/db.js` with `server/db.ts`, update `server/plugins/sqlite.ts`
3. Rewrite auth routes (`register`, `signin`, `signout`, `forgot-*`) against new schema
4. Rewrite `server/middleware/auth.ts` and `server/utils/auth.ts`
5. Add new API routes (lists, categories, category_items with embedded item fields)
6. Update `GET /api/library` for initial page load hydration (embed item fields per category_item)
7. Update `GET /api/share/:id` and `GET /csv/:id` to query normalized tables
8. Remove auto-save plugin; wire store actions to granular API calls
9. Update `session.client.ts` to call `GET /api/library`
10. Delete `POST /api/library/save` and `POST /api/external-id`
11. Update E2E tests (remove timing workarounds, add rollback tests)
12. Update `docker-compose.yml` to remove MongoDB service; add `data/` to `.gitignore`

### Phase 2 (future plan — global item catalog)

- Add `global_items` table to schema; generate migration
- Add `tags` and `item_tags` tables
- Implement `GET/POST/PATCH/DELETE /api/global-items` endpoints
- Implement tag endpoints (`/api/tags`, `/api/global-items/:id/tags`)
- Add "copy from catalog" action: `POST /api/categories/:id/items` with `{ global_item_id }` copies fields + sets FK
- UI for browsing and managing the gear catalog
