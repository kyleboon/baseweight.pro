# CSV Import Improvement Design

## Problem

The CSV export produces 10 columns (`Item Name, Category, desc, qty, weight, unit, url, price, worn, consumable`) but the import only reads the first 6 by positional index, silently dropping `url`, `price`, `worn`, and `consumable`. Round-tripping a list through export → import loses data.

## Goals

- Import all fields that export produces (url, price, worn, consumable)
- Switch from fragile index-based parsing to header-aware parsing
- Maintain backward compatibility with legacy 6-column CSVs
- Always create a new list (no deduplication against existing items)

## Design

### 1. Header-Aware CSV Parsing

Replace the index-based `validateImport` in `app/components/import-csv.vue` with header-aware parsing:

1. Read the first row as headers, normalize to lowercase and trimmed
2. Map headers to internal field names using an alias table:
    - `"item name"` → `name`
    - `"category"` → `category`
    - `"desc"` / `"description"` → `description`
    - `"qty"` / `"quantity"` → `qty`
    - `"weight"` → `weight`
    - `"unit"` → `unit`
    - `"url"` → `url`
    - `"price"` → `price`
    - `"worn"` → `worn`
    - `"consumable"` → `consumable`
3. For each data row, build an object by header key rather than index
4. Required fields: `name`, `qty`, `weight`, `unit`. Rows missing any of these are skipped.
5. Optional fields get defaults: `category` → `""`, `description` → `""`, `url` → `""`, `price` → `0`, `worn` → `false`, `consumable` → `false`
6. `worn` is parsed as truthy if the value is `"worn"`, `"true"`, `"yes"`, or `"1"` (case-insensitive). Same pattern for `consumable` (`"consumable"`, `"true"`, `"yes"`, `"1"`).

The existing `CSVToArray` function and `fullUnitToUnit` map stay as-is. Header detection replaces the current `row[0].toLowerCase() === 'item name'` skip logic.

### 2. Data Flow: Store and API

**`import-csv.vue` → store:** The `importData.data` array passes objects to `store.importCSV()`. Each row object now includes: `url`, `price`, `worn`, `consumable` in addition to the existing fields.

**Store `importCSV` — logged-in path** (`store.js:697`): Add `url`, `price`, `worn`, `consumable` to the `POST /api/categories/${category.id}/items` request body. The API endpoint already accepts all of these fields — no backend changes needed.

**Store `importCSV` — logged-out path** (`store.js:667-675`): Set `item.url`, `item.price`, `categoryItem.worn`, and `categoryItem.consumable` from the row data. Note: `worn` and `consumable` live on `categoryItem`, not `item`, matching the existing data model.

### 3. Confirmation Modal

The preview table currently shows: Item Name, Category, Description, Qty, Weight, Unit.

Add three conditional columns: **Price**, **Worn**, **Consumable**. Each column only appears if at least one row in the import data has a non-default value for that field.

- Worn and consumable display as a checkmark character or empty cell
- URL is omitted from the preview — long strings would make the table unwieldy

### 4. Testing

**Unit tests** for the header-aware parsing logic:

- Standard 10-column lighterpack CSV (current export format)
- Legacy 6-column CSV (name, category, desc, qty, weight, unit) — backward compatibility
- Columns in a different order
- Missing optional columns get defaults
- Worn/consumable truthy value parsing (`"Worn"`, `"true"`, `"1"`, etc.)
- Rows with missing required fields are skipped

**E2E test:** Import a CSV with all 10 columns and verify the new fields (price, worn, consumable) are set correctly on the created items.

## Files to Modify

- `app/components/import-csv.vue` — header-aware parsing, updated modal template
- `app/store/store.js` — pass new fields in `importCSV` action (both logged-in and logged-out paths)
- `test/unit/` — new unit tests for CSV parsing
- `test/e2e/` — new E2E test for full-field import

## Out of Scope

- Deduplication against existing library items
- Changing the export format
- Importing images
