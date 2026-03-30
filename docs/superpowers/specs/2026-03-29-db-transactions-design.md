# Wrap Multi-Step DB Operations in Transactions

## Problem

Three operations perform multiple sequential writes without transaction wrapping. If a failure occurs mid-operation, the database is left in an inconsistent state (e.g., a list is deleted but the default isn't reset, or a copied list exists without its categories/items).

## Decisions

- Use Drizzle's `db.transaction((tx) => { ... })` to wrap multi-write operations
- Keep existing error handling unchanged — transactions add atomicity, not new error messages
- Read-only validation/auth checks stay outside the transaction
- No new utility files — just wrap existing code in transaction callbacks

## Operations to Wrap

### 1. List deletion (`server/api/lists/[id].delete.ts`)

**Currently:** Lines 29-48 perform: delete list → check if default → find next list → update default. Four separate DB calls.

**Change:** Wrap lines 29-48 in `db.transaction((tx) => { ... })`, replacing `db` with `tx` inside. The ownership check (lines 19-27) stays outside since it's read-only validation.

### 2. List copying (`server/api/library/copy-list.post.ts`)

**Currently:** Lines 37-89 perform: insert new list → select source categories → loop inserting categories → loop inserting items. Variable number of DB calls depending on list size.

**Change:** Wrap lines 36-89 in `db.transaction((tx) => { ... })`, replacing `db` with `tx` inside. The `generateUniqueExternalId()` call moves inside the transaction (reads work fine in transactions). The source list lookup and auth check (lines 22-31) stay outside.

### 3. New user initialization (`server/utils/library.ts`)

**Currently:** `initNewUserLibrary` (lines 32-60) performs: insert settings → generate external ID → insert list → update default → insert category → insert item. Six DB calls.

**Change:** Wrap the entire function body (lines 33-59) in `db.transaction((tx) => { ... })`, replacing `db` with `tx` inside. `generateUniqueExternalId` needs to accept an optional transaction parameter so it queries within the same transaction.

## Testing

### `test/server/list-delete.spec.ts`

- Verify list deletion + default reset happens atomically (delete a default list, check that default is updated)
- Verify deleting a non-default list doesn't affect the default

### `test/server/copy-list.spec.ts`

- Verify copied list includes all categories and items
- Verify no partial data exists if an error occurs mid-copy

### `test/server/init-user-library.spec.ts`

- Verify new user gets settings, list, default, category, and item all created
- Verify no partial data exists if an error occurs mid-init

## Files to Modify

| File                                    | Change                                                                            |
| --------------------------------------- | --------------------------------------------------------------------------------- |
| `server/api/lists/[id].delete.ts`       | Wrap delete + default reset in transaction                                        |
| `server/api/library/copy-list.post.ts`  | Wrap list + category + item inserts in transaction                                |
| `server/utils/library.ts`               | Wrap initNewUserLibrary in transaction, update generateUniqueExternalId signature |
| `test/server/list-delete.spec.ts`       | Create — test atomic list deletion                                                |
| `test/server/copy-list.spec.ts`         | Create — test atomic list copying                                                 |
| `test/server/init-user-library.spec.ts` | Create — test atomic user initialization                                          |
