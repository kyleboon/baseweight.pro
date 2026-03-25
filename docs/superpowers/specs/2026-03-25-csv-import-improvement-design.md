# CSV Import Improvement Design

## Problem

The CSV export produces 10 columns (`Item Name, Category, desc, qty, weight, unit, url, price, worn, consumable`) but the import only reads the first 6 by positional index, silently dropping `url`, `price`, `worn`, and `consumable`. Round-tripping a list through export → import loses data.

## Goals

- Import all fields that export produces (url, price, worn, consumable)
- Switch from fragile index-based parsing to header-aware parsing
- Maintain backward compatibility with legacy 6-column CSVs (including headerless ones)
- Always create a new list (no deduplication against existing items)

## Design

### 1. Header-Aware CSV Parsing

Extract the parsing logic from `import-csv.vue` into a standalone function in `app/utils/csvParser.js` so it can be unit-tested independently. Replace the index-based `validateImport` with header-aware parsing:

1. Read the first row as headers, normalize to lowercase and trimmed
2. **Header detection:** If the first row contains at least 3 recognized header aliases (e.g., `"item name"`, `"weight"`, `"unit"`), treat it as a header row. Otherwise, fall back to legacy index-based parsing (columns 0-5 map to name, category, description, qty, weight, unit) so that headerless CSVs from older exports still work.
3. Map headers to internal field names using an alias table:
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
4. For each data row, build an object by header key rather than index
5. Required fields: `name`, `qty`, `weight`, `unit`. Rows missing any of these are skipped.
6. Optional fields get defaults: `category` → `""`, `description` → `""`, `url` → `""`, `price` → `0`, `worn` → `0`, `consumable` → `false`
7. **Unit normalization:** The `unit` field must pass through the existing `fullUnitToUnit` map. Rows with unrecognized units are skipped (matching current behavior).
8. **Worn/consumable parsing:** Parsed as truthy if the value is `"worn"`/`"consumable"`, `"true"`, `"yes"`, or `"1"` (case-insensitive). `worn` is stored as `1` or `0` (numeric, matching the existing data model), not boolean. `consumable` is stored as `true`/`false` (boolean, matching the existing data model).
9. **Price parsing:** Parsed with `parseFloat()`. Non-numeric values (including currency symbols like `$`) are stripped of leading non-digit characters before parsing. If the result is `NaN`, defaults to `0`.

The existing `CSVToArray` function and `fullUnitToUnit` map stay as-is (moved to or imported by the new utility). Header detection replaces the current `row[0].toLowerCase() === 'item name'` skip logic.

### 2. Data Flow: Store and API

**`import-csv.vue` → store:** The `importData.data` array passes objects to `store.importCSV()`. Each row object now includes: `url`, `price`, `worn`, `consumable` in addition to the existing fields.

**Store `importCSV` — logged-in path:** Add `url`, `price`, `worn`, `consumable` to the `POST /api/categories/${category.id}/items` request body. The API endpoint already accepts all of these fields — no backend changes needed. Weight values are converted from the user-facing unit to milligrams via `weightUtils.WeightToMg()` (preserving existing behavior).

**Store `importCSV` — logged-out path:** Set `item.url`, `item.price`, `categoryItem.worn` (as `0` or `1`), and `categoryItem.consumable` from the row data. Weight is also converted to milligrams via `weightUtils.WeightToMg()` (preserving existing behavior). Note: `worn` and `consumable` live on `categoryItem`, not `item`, matching the existing data model.

**Empty category handling:** When category is an empty string, all items without a category are grouped into a single unnamed category. This is intentional — it matches the existing behavior for the logged-out path.

### 3. Confirmation Modal

The preview table currently shows: Item Name, Category, Description, Qty, Weight, Unit.

Add three conditional columns: **Price**, **Worn**, **Consumable**. Each column only appears if at least one row in the import data has a non-default value for that field.

- Worn and consumable display as a checkmark character or empty cell
- URL is omitted from the preview — long strings would make the table unwieldy
- The modal width (currently 650px) may need to increase slightly to accommodate the extra columns

### 4. Testing

**Unit tests** for the extracted parsing function in `app/utils/csvParser.js`:

- Standard 10-column lighterpack CSV (current export format)
- Legacy 6-column CSV with headers (name, category, desc, qty, weight, unit) — backward compatibility
- Legacy headerless CSV — falls back to index-based parsing
- Columns in a different order
- Missing optional columns get defaults
- Worn/consumable truthy value parsing (`"Worn"`, `"true"`, `"1"`, etc.)
- Rows with missing required fields are skipped
- Price parsing with currency symbols stripped
- Unit normalization through fullUnitToUnit

**E2E test:** Import a CSV with all 10 columns and verify the new fields (url, price, worn, consumable) are set correctly on the created items.

## Files to Modify

- `app/utils/csvParser.js` — new file: extracted CSV parsing logic (CSVToArray, validateImport, fullUnitToUnit)
- `app/components/import-csv.vue` — import parsing from utility, updated modal template
- `app/store/store.js` — pass new fields in `importCSV` action (both logged-in and logged-out paths)
- `test/unit/csvParser.test.js` — new unit tests for CSV parsing
- `test/e2e/` — new E2E test for full-field import

## Out of Scope

- Deduplication against existing library items
- Changing the export format
- Importing images
- The `star` field (not part of CSV round-trip)
