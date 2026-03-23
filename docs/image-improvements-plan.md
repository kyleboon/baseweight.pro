# Plan: Self-Hosted Image Storage with Multi-Image Support

## Overview

Replace Imgur with self-hosted file storage on VPS disk. Add support for multiple images per item, and add image support to categories and lists. Images are resized server-side with `sharp` to WebP at max 1200px wide before saving.

---

## Step 1: Install dependencies

```bash
npm install sharp
npm install --save-dev @types/sharp
```

`sharp` handles resize + WebP conversion server-side. `formidable` is already in use.

---

## Step 2: Database — new `images` table

Add a polymorphic `images` table to `server/schema.ts`. This replaces the single `image`/`image_url` fields on `category_items` and extends naturally to categories and lists.

```ts
export const images = sqliteTable('images', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    user_id: text('user_id')
        .notNull()
        .references(() => user.id, { onDelete: 'cascade' }),
    entity_type: text('entity_type').notNull(), // 'item' | 'category' | 'list'
    entity_id: integer('entity_id').notNull(),
    filename: text('filename').notNull(), // stored filename on disk
    sort_order: integer('sort_order').default(0),
    created_at: integer('created_at'),
});
```

Keep the existing `image` and `image_url` columns on `category_items` for now — they'll be read-only during a migration step and removed in a later cleanup.

Write a Drizzle migration (`server/migrations/`) to create the table and copy existing item images into it:

- For each `category_items` row with a non-empty `image` (Imgur ID): insert an `images` row with `entity_type = 'item'`, `entity_id = id`, `filename = 'imgur:' + image` (mark as legacy)
- For each row with a non-empty `image_url`: insert an `images` row with the URL stored in filename as `url:` + image_url

---

## Step 3: Server — upload endpoint

Replace `server/api/image-upload.post.ts` entirely.

**New behavior:**

1. Authenticate — require `event.context.user` (401 if missing)
2. Parse multipart with formidable
3. Validate: max 10 MB server-side (generous, sharp handles downscaling), type must be image/\*
4. Use `sharp` to resize to max 1200px wide (preserve aspect ratio), convert to WebP, quality 82
5. Save to `data/uploads/{userId}/{uuid}.webp`
6. Insert row into `images` table with `entity_type`, `entity_id`, `sort_order` from request body
7. Return `{ id, url: '/uploads/{userId}/{uuid}.webp' }`

Directory creation: `fs.mkdirSync(dir, { recursive: true })` before writing.

---

## Step 4: Server — file serving

Add `server/routes/uploads/[...path].get.ts`:

```ts
export default defineEventHandler(async (event) => {
    const filePath = getRouterParam(event, 'path');
    // resolve against data/uploads/, validate no path traversal
    // set Content-Type: image/webp
    // stream file with sendStream or return as buffer
});
```

This serves `GET /uploads/{userId}/{uuid}.webp` securely without exposing the full `data/` directory as static.

---

## Step 5: Server — image management endpoints

Add `server/api/images/[id].delete.ts`:

- Verify image belongs to `event.context.user`
- Delete file from disk
- Delete row from `images` table

Add `server/api/images/reorder.post.ts`:

- Accept `[{ id, sort_order }]` array
- Verify ownership, bulk-update `sort_order`

---

## Step 6: Server — update library/item API responses

In the existing `server/api/library.get.ts` (and wherever items/categories/lists are serialized), join the `images` table and include an `images: [{ id, url, sort_order }]` array on each item, category, and list.

---

## Step 7: Shared data models

Update `shared/dataTypes.js`:

**`Item` class**: replace `image`/`imageUrl` string fields with `images: []` array (each entry: `{ id, url, sort_order }`). Keep backward-compat loading from old format.

**`Category` class**: add `images: []`.

**`List` class**: add `images: []`.

Update `save()` and `load()` on each class accordingly.

---

## Step 8: Store — Pinia actions

Add to `app/store/store.js`:

- `uploadImage({ file, entityType, entityId })` — POST to `/api/image-upload`, append returned image to the entity's `images` array
- `deleteImage({ id, entityType, entityId })` — DELETE `/api/images/{id}`, remove from entity's `images` array
- `reorderImages({ entityType, entityId, images })` — POST to `/api/images/reorder`
- `updateItemImageUrl({ imageUrl, item })` — keep for URL-only workflow (creates an `images` entry with a remote URL)

Remove the old `updateItemImage` and `removeItemImage` actions.

---

## Step 9: Frontend — rewrite `item-image.vue`

Replace the current two-panel modal with a proper image management UI:

- **Image gallery strip**: thumbnails of existing images with drag-to-reorder (use SortableJS, already a dependency) and a delete (×) button per image
- **Add section**: two input methods side by side
    - File drop zone (drag-and-drop + click to browse) — calls `store.uploadImage()`
    - URL input field — calls `store.updateItemImageUrl()`
- Fix the GIF validation bug (line 91: `!type != 'image/gif'` → `type != 'image/gif'`)
- Show upload progress indicator
- Max 10 images per item (enforce client-side with a clear message)

---

## Step 10: Frontend — `item-view-image.vue`

Update to render a multi-image gallery (horizontal scroll or grid of thumbnails with a lightbox on click). Handle both self-hosted URLs (`/uploads/...`) and legacy Imgur IDs (`https://i.imgur.com/{id}.jpg`).

---

## Step 11: Frontend — category images

Add an image button to the category header in `app/components/category.vue`. On click, open a simplified version of the image modal scoped to `entityType = 'category'`. Display the first image as a small thumbnail next to the category name.

---

## Step 12: Frontend — list images

Add an image button to the list header in `app/components/list.vue` (next to the title/share button). On click, open the image modal scoped to `entityType = 'list'`. Display the first image as a banner or thumbnail above the list summary.

---

## Step 13: Share page (`/r/[id].vue`)

Update the share page to render images wherever they exist (item rows, category headers, list header) — read-only, no upload UI.

---

## Step 14: Config

Add to `config/default.json`:

```json
"uploadsPath": "./data/uploads",
"maxImageSizeMb": 10,
"imageMaxWidthPx": 1200
```

Remove `imgurClientID` from default config (keep in a migration note).

---

## Step 15: Cleanup

Once everything is working:

- Remove `image` and `image_url` columns from `category_items` schema (write a migration)
- Remove Imgur-related code
- Remove the old `image`/`imageUrl` fields from the `Item` class

---

## Execution order

| Phase                  | Steps         | Notes                                         |
| ---------------------- | ------------- | --------------------------------------------- |
| 1 — Backend foundation | 1, 2, 3, 4, 5 | No frontend changes yet; upload/serve working |
| 2 — Data layer         | 6, 7, 8       | API returns images array; store updated       |
| 3 — Item UI            | 9, 10         | Multi-image items working end-to-end          |
| 4 — Category & List UI | 11, 12, 13    | New entity types                              |
| 5 — Cleanup            | 14, 15        | Remove legacy fields and Imgur                |
