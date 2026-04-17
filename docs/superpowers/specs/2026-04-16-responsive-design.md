# Responsive Design Spec

## Goal

Make LighterPack work well on mobile and tablet screens. The share page should render beautifully on mobile. The main app should support full editing on small screens, with power-user features (gear library, CSV import/export) restricted to desktop.

## Approach

CSS-only responsive layout. All breakpoint behavior lives in media queries. The only new JS is a hamburger button toggle and backdrop click handler for the sidebar drawer.

## Breakpoints

| Name    | Width     | Behavior                                                     |
| ------- | --------- | ------------------------------------------------------------ |
| Desktop | >= 900px  | Full two-zone layout (sidebar + content side by side)        |
| Tablet  | 600–899px | Sidebar becomes hamburger drawer overlay, gear table reflows |
| Mobile  | < 600px   | Same drawer, chart stacks vertically, tighter padding        |

Desktop-first: base styles are desktop, media queries adapt downward.

### Migration

The existing media queries at 720px (`_common.css`) and 480px (`_common.css`) are removed. Their relevant rules migrate into the new 900px and 600px breakpoints.

## Section 1: Sidebar Drawer (< 900px)

### Top bar

A sticky top bar appears at viewports below 900px. Hidden on desktop via `display: none`.

Contents:

- Hamburger icon button (left)
- "LighterPack" wordmark (left of center)

CSS class: `.lp-mobile-topbar`

### Drawer behavior

- Tapping hamburger toggles `.lpSidebarOpen` class on `#main`
- `.lpSidebarOpen` slides the sidebar in from the left (reuses existing `translateX(0)` animation)
- Sidebar gets `z-index: 40` (above content's `z-index: 30`) at < 900px
- A semi-transparent backdrop (`.lp-sidebar-backdrop`) covers the content area when open
- Closing: tap backdrop, tap hamburger again, or tap a list link

### Sidebar content on mobile

- Gear library (`<libraryItems>`) is hidden via `display: none` below 900px
- List navigation and footer (account settings, sign out) remain visible

### Content area

- `.lpList` removes `margin-left: 280px` at < 900px — content is full-width
- `.lpHasSidebar` class no longer affects content margin at < 900px

### JS changes (index.vue only)

- Add a `<button>` hamburger element (visible only < 900px via CSS)
- Toggle `.lpSidebarOpen` class on `#main` when clicked
- Add a `.lp-sidebar-backdrop` div that closes the sidebar on click
- Close sidebar when a list link is tapped: `library-lists.vue` `setDefaultList()` already updates the store; `index.vue` watches the store's `defaultListId` and removes `.lpSidebarOpen` when it changes (only at < 900px)

## Section 2: Gear Table Reflow (< 900px)

### Column headers

Weight, price, and qty column headers are hidden. The values are self-evident in context.

### Item row layout

Each item row wraps via `flex-flow: row wrap` and reorders columns:

1. **First line**: Qty (if > 1, shown as "2 x") → Name (flex: 1)
2. **Second line**: Weight and Price, right-aligned

### Actions cell

- Hidden by default at < 900px
- Shown on row hover/focus
- Active icons (worn, consumable that are toggled on) remain visible always

### Other changes

- Remove button: hidden unless row is focused/hovered
- Drag handles (`.lpHandle`): hidden below 900px — drag reordering is desktop-only
- Touch targets: weight, price, and qty inputs get `min-height: 44px`
- Item images: positioned absolutely at left of row (same pattern as existing 720px breakpoint, cleaned up)

### What stays the same

- Category headers with editable name
- Subtotal rows
- Footer with "Add new item" link
- The flex-based layout structure

## Section 3: Chart and Summary (< 600px)

- `.lpListSummary` switches to `flex-direction: column`
- Donut chart centers above stats table, capped at `max-width: 200px`
- Stats table goes full width below the chart

### Content padding (< 600px)

- `.lpList` padding reduces from `0 20px` to `0 12px`
- Category `margin-bottom` reduces from `20px` to `12px`
- Content `max-width` constraint removed (full viewport width)

### Other mobile refinements (< 600px)

- List name input gets slightly smaller font size for long names
- List action buttons become icon-only if they have text labels
- Modals: capped at `width: calc(100vw - 24px)` and `max-height: 80vh` with overflow scroll

## Section 4: Share Page

No structural changes needed. The share page renders the same `<list>` component in readonly mode, so gear table responsive CSS applies automatically.

### Share-specific adjustments

- **At < 900px**: gear table reflows (inherited)
- **At < 600px**: `.lp-share-topbar` wraps with `flex-wrap: wrap` if sign-in form overflows. Chart stacks vertically (inherited). Content padding tightens (inherited). Copy confirmation modal respects mobile modal sizing.

## Section 5: Features Hidden on Mobile (< 900px)

Hidden via `display: none`:

- Gear library (`<libraryItems>` in sidebar) — entire component
- "Import CSV" button in `library-lists.vue` (`.lp-lists-actions` second button) — inside the sidebar list section which remains visible
- CSV export is inside the `list-actions` popover menu — leave it visible (the popover works fine on mobile)
- Drag handles (`.lpHandle`) — throughout the app (sidebar lists, categories, items)

Everything else remains functional: creating/renaming/deleting lists, adding/editing/removing items and categories, toggling worn/consumable, changing weight/price/qty, sharing, account settings.

Additional features may be hidden after manual testing on real devices.

## Section 6: File Changes

### CSS changes

| File                    | Changes                                                                                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `_common.css`           | Remove 720px and 480px media queries. Add 900px and 600px breakpoints. Add `.lp-mobile-topbar`, `.lp-sidebar-backdrop`. Mobile modal sizing. |
| `_list.css`             | Add 900px breakpoint for gear table reflow (item wrap, column reorder, touch targets, hidden drag handles).                                  |
| `sidebar.vue` `<style>` | Add 900px breakpoint: `z-index: 40`, drawer keyed off `.lpSidebarOpen`. Hide gear library.                                                   |

### JS changes

| File        | Changes                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------ |
| `index.vue` | Add hamburger button (CSS-hidden on desktop). `.lpSidebarOpen` class toggle. Backdrop div. |

### No changes needed

- Component templates (aside from hamburger button in `index.vue`)
- Store logic
- API routes
- Share page template (inherits CSS automatically)
- Print styles (already handle sidebar hiding)

## Section 7: E2E Tests

New test file: `test/e2e/responsive.spec.ts`

### Mobile viewport tests (375x667)

- Hamburger button is visible
- Sidebar opens and closes via hamburger
- Sidebar backdrop dismisses the sidebar
- Gear library is not visible in the sidebar
- Gear table items are readable and editable
- Chart stacks vertically
- Share page renders properly at mobile width

### Tablet viewport tests (768x1024)

- Same sidebar drawer behavior as mobile
- Gear table reflows correctly

Tests use `page.setViewportSize()` to set dimensions. Existing E2E tests at default viewport widths should pass unchanged.
