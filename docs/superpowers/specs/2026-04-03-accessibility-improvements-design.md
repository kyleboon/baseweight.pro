# Accessibility Improvements Design

**Date**: 2026-04-03
**Target**: WCAG 2.1 Level AA
**Approach**: By accessibility category (top-down) — build foundations first, apply patterns consistently

## 1. Semantic Structure & Skip Link

### Landmarks

- Wrap the main content area in `<main id="main-content">` in the default layout
- The sidebar already uses `<aside aria-label="Navigation sidebar">` — no changes needed
- Add `<nav>` wrapper around sidebar navigation links if not present

### Skip Link

- Add a visually-hidden-until-focused anchor as the first element in the layout: `<a href="#main-content" class="skip-link">Skip to main content</a>`
- CSS: absolutely positioned off-screen, slides into view on `:focus-visible`
- Appears above everything when tabbed to, disappears when focus moves on

## 2. ARIA Attributes

### Modals (`modal.vue`)

- Add `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing to the modal title element
- Add unique IDs to modal titles for the `aria-labelledby` reference

### Popovers (`popover.vue`)

- Already has `role="dialog"` — add `aria-modal="true"` and `aria-labelledby`
- Add `aria-controls` on trigger buttons pointing to the popover ID
- Add `aria-expanded` on trigger buttons (true when open, false when closed)

### Icon-Only Buttons (across components)

- Replace `title`-only patterns with `aria-label` on: camera button, link button, worn/consumable/star toggles, gallery delete buttons, prev/next image navigation, drag handles
- Keep `title` alongside `aria-label` for sighted mouse users (tooltip)

### Quantity Adjusters (`item.vue`)

- Change `<span>` elements to `<button>` elements with `aria-label="Increase quantity"` / `aria-label="Decrease quantity"`

### Expandable Sections

- Add `aria-expanded` to any toggle buttons that show/hide content (e.g., category collapse)

### Live Regions

- Already have `role="status"` on alerts and `role="alert"` on errors — no changes needed

## 3. Focus Management

### `useFocusTrap` Composable

- New file: `app/composables/useFocusTrap.ts`
- Accepts a template ref to the container element
- On activate: query all focusable elements (`a[href], button:not(:disabled), input, select, textarea, [tabindex]:not([tabindex="-1"])`), move focus to the first one
- Tab on last element cycles to first; Shift+Tab on first cycles to last
- On deactivate: restore focus to the element that was focused before the trap activated
- Returns `{ activate, deactivate }` methods

### Modal Integration (`modal.vue`)

- Call `activate()` when modal opens (after transition completes)
- Call `deactivate()` when modal closes (restores focus to trigger button)

### Popover Integration (`popover.vue`)

- Same pattern — trap focus when popover opens, restore on close
- ESC key already closes — focus restoration handles the rest

No external dependencies. The composable handles tab-cycling and focus-save/restore. Edge cases like dynamically added focusable elements are not a concern since modal/popover content is static once open.

## 4. Image Alt Text & Form Labels

### Images

- `item.vue` / `category.vue` / `list.vue` thumbnails: add `alt` bound to the item/category/list name (e.g., `:alt="item.name + ' thumbnail'"` or `alt=""` for purely decorative thumbnails)
- `item-image.vue` gallery thumbnails: `:alt="'Image ' + (i + 1) + ' of ' + item.name"`
- `item-view-image.vue` main image: `:alt="item.name"`, thumbnails same as gallery
- Decorative images (if any) get `alt=""`

### Form Labels

- `signin-form.vue` email input: add `<label for="email">` (visually hidden if the placeholder design should stay)
- `item.vue` text/number inputs: add visually-hidden `<label>` elements associated via `for`/`id` for item name, description, weight, price fields
- Keep existing properly-labeled inputs (checkboxes in account/list-settings, currency, image URL) as-is

### Visually Hidden Utility

- Add a `.visually-hidden` CSS class (standard `clip-rect` pattern) in the global CSS
- Reused by skip link (when unfocused) and form labels

## 5. Keyboard Reorder Buttons

### Move Up/Down Buttons

- Add a pair of buttons (up arrow, down arrow) next to each drag handle in `library-items.vue`, `library-lists.vue`, and `item-image.vue`
- `aria-label="Move [item name] up"` / `aria-label="Move [item name] down"`
- First item hides/disables "move up", last item hides/disables "move down"
- On click: call the store's reorder logic (swap positions in the array, persist)

### Visibility

- Buttons use `.visually-hidden` by default, become visible on `:focus-visible`
- Small, compact arrow buttons that sit inline with the drag handle

### Live Announcements

- Add an `aria-live="polite"` region (shared, one per page) to announce reorder results: "Moved [item name] to position 3 of 7"
- New composable `useAnnounce.ts` — exposes an `announce(message)` function that sets text on the live region, clears after a short delay

### Existing Drag-and-Drop

- No changes to SortableJS — continues to work for mouse/touch users
- Move buttons are a parallel keyboard-accessible path

## Files to Create

| File                              | Purpose                                       |
| --------------------------------- | --------------------------------------------- |
| `app/composables/useFocusTrap.ts` | Focus trapping composable for modals/popovers |
| `app/composables/useAnnounce.ts`  | Live region announcement composable           |

## Files to Modify

| File                                    | Changes                                                                                             |
| --------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `app/assets/css/` (global CSS)          | `.visually-hidden`, `.skip-link` classes                                                            |
| `app/layouts/default.vue` or equivalent | `<main>` landmark, skip link                                                                        |
| `app/components/modal.vue`              | `role="dialog"`, `aria-modal`, `aria-labelledby`, focus trap                                        |
| `app/components/popover.vue`            | `aria-modal`, `aria-labelledby`, focus trap, `aria-expanded`/`aria-controls` on triggers            |
| `app/components/item.vue`               | `alt` on images, `aria-label` on icon buttons, `<button>` for qty adjusters, visually-hidden labels |
| `app/components/item-image.vue`         | `alt` on thumbnails, `aria-label` on delete buttons, move up/down buttons                           |
| `app/components/item-view-image.vue`    | `alt` on images, `aria-label` on prev/next buttons                                                  |
| `app/components/category.vue`           | `alt` on thumbnails, `aria-expanded` on collapse toggle                                             |
| `app/components/list.vue`               | `alt` on images                                                                                     |
| `app/components/library-items.vue`      | Move up/down buttons, live announcements                                                            |
| `app/components/library-lists.vue`      | Move up/down buttons, live announcements                                                            |
| `app/components/signin-form.vue`        | Visually-hidden label for email input                                                               |
