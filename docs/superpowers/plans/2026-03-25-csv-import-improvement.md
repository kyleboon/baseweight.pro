# CSV Import Improvement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make CSV import read all 10 columns that export produces (url, price, worn, consumable) using header-aware parsing, with backward compatibility for legacy CSVs.

**Architecture:** Extract CSV parsing from the Vue component into a standalone utility (`app/utils/csvParser.js`) for testability. The utility handles header detection, field mapping, and value normalization. The component and store are updated to pass the new fields through to the API.

**Tech Stack:** Vue 3, Pinia, Vitest, Playwright

**Spec:** `docs/superpowers/specs/2026-03-25-csv-import-improvement-design.md`

---

## File Structure

| File                                      | Action | Responsibility                                                                             |
| ----------------------------------------- | ------ | ------------------------------------------------------------------------------------------ |
| `app/utils/csvParser.js`                  | Create | CSV-to-array parsing, header detection, field mapping, value normalization                 |
| `app/components/import-csv.vue`           | Modify | Import parsing from utility, add conditional Price/Worn/Consumable columns to modal        |
| `app/store/store.js`                      | Modify | Pass url/price/worn/consumable in `importCSV` action (both logged-in and logged-out paths) |
| `test/unit/utils/csvParser.spec.js`       | Create | Unit tests for the extracted parsing logic                                                 |
| `test/unit/components/import-csv.spec.js` | Modify | Update existing component tests to work with extracted parsing                             |
| `test/e2e/import-csv.spec.ts`             | Modify | Add E2E test for importing CSV with all 10 columns                                         |

---

### Task 1: Create `csvParser.js` — CSVToArray and fullUnitToUnit

**Files:**

- Create: `app/utils/csvParser.js`
- Test: `test/unit/utils/csvParser.spec.js`

- [ ] **Step 1: Write the failing test for CSVToArray**

```js
// test/unit/utils/csvParser.spec.js
import { describe, it, expect } from 'vitest';
import { CSVToArray, fullUnitToUnit } from '../../../app/utils/csvParser.js';

describe('CSVToArray', () => {
    it('parses a simple CSV string into a 2D array', () => {
        const result = CSVToArray('a,b,c\n1,2,3');
        expect(result).toEqual([
            ['a', 'b', 'c'],
            ['1', '2', '3'],
        ]);
    });

    it('handles quoted fields containing commas', () => {
        const result = CSVToArray('a,"b,c",d');
        expect(result).toEqual([['a', 'b,c', 'd']]);
    });

    it('handles escaped double quotes inside quoted fields', () => {
        const result = CSVToArray('a,"b""c",d');
        expect(result).toEqual([['a', 'b"c', 'd']]);
    });
});

describe('fullUnitToUnit', () => {
    it('maps full unit names to abbreviations', () => {
        expect(fullUnitToUnit.ounce).toBe('oz');
        expect(fullUnitToUnit.pound).toBe('lb');
        expect(fullUnitToUnit.gram).toBe('g');
        expect(fullUnitToUnit.kilogram).toBe('kg');
    });

    it('maps abbreviation aliases', () => {
        expect(fullUnitToUnit.oz).toBe('oz');
        expect(fullUnitToUnit.lbs).toBe('lb');
        expect(fullUnitToUnit.kgs).toBe('kg');
    });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:unit -- --reporter verbose test/unit/utils/csvParser.spec.js`
Expected: FAIL — module not found

- [ ] **Step 3: Write minimal implementation**

```js
// app/utils/csvParser.js

export const fullUnitToUnit = {
    ounce: 'oz',
    ounces: 'oz',
    oz: 'oz',
    pound: 'lb',
    pounds: 'lb',
    lb: 'lb',
    lbs: 'lb',
    gram: 'g',
    grams: 'g',
    g: 'g',
    kilogram: 'kg',
    kilograms: 'kg',
    kg: 'kg',
    kgs: 'kg',
};

export function CSVToArray(strData) {
    const strDelimiter = ',';
    const arrData = [[]];
    let arrMatches = null;

    const objPattern = new RegExp(
        `(\\${strDelimiter}|\\r?\\n|\\r|^)` + '(?:"([^"]*(?:""[^"]*)*)"|' + `([^"\\${strDelimiter}\\r\\n]*))`,
        'gi',
    );

    while ((arrMatches = objPattern.exec(strData))) {
        const strMatchedDelimiter = arrMatches[1];
        if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
            arrData.push([]);
        }

        let strMatchedValue;
        if (arrMatches[2]) {
            strMatchedValue = arrMatches[2].replace(new RegExp('""', 'g'), '"');
        } else {
            strMatchedValue = arrMatches[3];
        }

        arrData[arrData.length - 1].push(strMatchedValue);
    }

    return arrData;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test:unit -- --reporter verbose test/unit/utils/csvParser.spec.js`
Expected: PASS

- [ ] **Step 5: Commit**

```
git add app/utils/csvParser.js test/unit/utils/csvParser.spec.js
git commit -m "feat: extract CSVToArray and fullUnitToUnit into csvParser utility"
```

---

### Task 2: Add `parseCSV` with header-aware parsing

**Files:**

- Modify: `app/utils/csvParser.js`
- Test: `test/unit/utils/csvParser.spec.js`

- [ ] **Step 1: Write failing tests for parseCSV with header row**

Add to `test/unit/utils/csvParser.spec.js`:

```js
import { CSVToArray, fullUnitToUnit, parseCSV } from '../../../app/utils/csvParser.js';

describe('parseCSV', () => {
    it('parses a standard 10-column baseweight CSV', () => {
        const csv = [
            'Item Name,Category,desc,qty,weight,unit,url,price,worn,consumable',
            'Tent,Shelter,3-season,1,32,ounce,https://example.com,350,Worn,',
        ].join('\n');
        const result = parseCSV(csv);
        expect(result).toEqual([
            {
                name: 'Tent',
                category: 'Shelter',
                description: '3-season',
                qty: 1,
                weight: 32,
                unit: 'oz',
                url: 'https://example.com',
                price: 350,
                worn: 1,
                consumable: false,
            },
        ]);
    });

    it('parses a legacy 6-column CSV with headers', () => {
        const csv = ['Item Name,Category,Description,Qty,Weight,Unit', 'Tent,Shelter,My tent,1,500,g'].join('\n');
        const result = parseCSV(csv);
        expect(result).toEqual([
            {
                name: 'Tent',
                category: 'Shelter',
                description: 'My tent',
                qty: 1,
                weight: 500,
                unit: 'g',
                url: '',
                price: 0,
                worn: 0,
                consumable: false,
            },
        ]);
    });

    it('handles columns in a different order', () => {
        const csv = ['unit,weight,qty,Item Name,Category,desc', 'kg,5,2,Pack,Packs,Big pack'].join('\n');
        const result = parseCSV(csv);
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Pack');
        expect(result[0].weight).toBe(5);
        expect(result[0].unit).toBe('kg');
    });

    it('falls back to index-based parsing for headerless CSVs', () => {
        const csv = 'Tent,Shelter,3-season tent,1,32,ounce';
        const result = parseCSV(csv);
        expect(result).toEqual([
            {
                name: 'Tent',
                category: 'Shelter',
                description: '3-season tent',
                qty: 1,
                weight: 32,
                unit: 'oz',
                url: '',
                price: 0,
                worn: 0,
                consumable: false,
            },
        ]);
    });

    it('skips rows missing required fields', () => {
        const csv = [
            'Item Name,Category,desc,qty,weight,unit',
            'Tent,Shelter,desc,,32,oz',
            'Stove,Kitchen,desc,1,,oz',
        ].join('\n');
        const result = parseCSV(csv);
        expect(result).toHaveLength(0);
    });

    it('skips rows with unrecognized units', () => {
        const csv = ['Item Name,Category,desc,qty,weight,unit', 'Tent,Shelter,desc,1,32,stone'].join('\n');
        const result = parseCSV(csv);
        expect(result).toHaveLength(0);
    });

    it('defaults optional fields when columns are missing', () => {
        const csv = ['Item Name,qty,weight,unit', 'Tent,1,32,oz'].join('\n');
        const result = parseCSV(csv);
        expect(result[0].category).toBe('');
        expect(result[0].description).toBe('');
        expect(result[0].url).toBe('');
        expect(result[0].price).toBe(0);
        expect(result[0].worn).toBe(0);
        expect(result[0].consumable).toBe(false);
    });

    it('parses worn/consumable truthy values', () => {
        const csv = [
            'Item Name,Category,desc,qty,weight,unit,url,price,worn,consumable',
            'A,Cat,d,1,10,oz,,,Worn,Consumable',
            'B,Cat,d,1,10,oz,,,true,true',
            'C,Cat,d,1,10,oz,,,yes,yes',
            'D,Cat,d,1,10,oz,,,1,1',
            'E,Cat,d,1,10,oz,,,false,false',
            'F,Cat,d,1,10,oz,,,,',
        ].join('\n');
        const result = parseCSV(csv);
        expect(result[0].worn).toBe(1);
        expect(result[0].consumable).toBe(true);
        expect(result[1].worn).toBe(1);
        expect(result[1].consumable).toBe(true);
        expect(result[2].worn).toBe(1);
        expect(result[2].consumable).toBe(true);
        expect(result[3].worn).toBe(1);
        expect(result[3].consumable).toBe(true);
        expect(result[4].worn).toBe(0);
        expect(result[4].consumable).toBe(false);
        expect(result[5].worn).toBe(0);
        expect(result[5].consumable).toBe(false);
    });

    it('parses price and strips currency symbols', () => {
        const csv = [
            'Item Name,Category,desc,qty,weight,unit,url,price,worn,consumable',
            'Tent,Shelter,d,1,32,oz,,$350,,',
            'Stove,Kitchen,d,1,10,oz,,29.99,,',
            'Bag,Shelter,d,1,24,oz,,invalid,,',
        ].join('\n');
        const result = parseCSV(csv);
        expect(result[0].price).toBe(350);
        expect(result[1].price).toBe(29.99);
        expect(result[2].price).toBe(0);
    });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test:unit -- --reporter verbose test/unit/utils/csvParser.spec.js`
Expected: FAIL — `parseCSV` is not exported

- [ ] **Step 3: Implement parseCSV**

Add to `app/utils/csvParser.js`:

```js
const headerAliases = {
    'item name': 'name',
    category: 'category',
    desc: 'description',
    description: 'description',
    qty: 'qty',
    quantity: 'qty',
    weight: 'weight',
    unit: 'unit',
    url: 'url',
    price: 'price',
    worn: 'worn',
    consumable: 'consumable',
};

const TRUTHY_VALUES = new Set(['worn', 'consumable', 'true', 'yes', '1']);

function parseTruthy(value) {
    return TRUTHY_VALUES.has((value || '').trim().toLowerCase());
}

function parsePrice(value) {
    if (!value) return 0;
    const stripped = String(value).replace(/^[^0-9.-]+/, '');
    const parsed = parseFloat(stripped);
    return isNaN(parsed) ? 0 : parsed;
}

function isHeaderRow(row) {
    let matches = 0;
    for (const cell of row) {
        if (headerAliases[cell.trim().toLowerCase()] !== undefined) {
            matches++;
        }
    }
    return matches >= 3;
}

function buildRowFromHeaders(row, columnMap) {
    const obj = {};
    for (const [index, field] of columnMap.entries()) {
        if (field) {
            obj[field] = row[index] ?? '';
        }
    }
    return obj;
}

function buildRowFromIndex(row) {
    return {
        name: row[0] ?? '',
        category: row[1] ?? '',
        description: row[2] ?? '',
        qty: row[3] ?? '',
        weight: row[4] ?? '',
        unit: row[5] ?? '',
    };
}

function normalizeRow(raw) {
    const unit = fullUnitToUnit[(raw.unit || '').trim().toLowerCase()];
    if (!unit) return null;

    const qty = parseFloat(raw.qty);
    const weight = parseFloat(raw.weight);
    if (isNaN(qty) || isNaN(weight)) return null;

    const name = (raw.name || '').trim();
    if (!name) return null;

    return {
        name,
        category: (raw.category || '').trim(),
        description: (raw.description || '').trim(),
        qty,
        weight,
        unit,
        url: (raw.url || '').trim(),
        price: parsePrice(raw.price),
        worn: parseTruthy(raw.worn) ? 1 : 0,
        consumable: parseTruthy(raw.consumable),
    };
}

export function parseCSV(input) {
    const rows = CSVToArray(input);
    const result = [];

    if (!rows.length) return result;

    let startIndex = 0;
    let columnMap = null;

    if (isHeaderRow(rows[0])) {
        columnMap = rows[0].map((cell) => headerAliases[cell.trim().toLowerCase()] || null);
        startIndex = 1;
    }

    for (let i = startIndex; i < rows.length; i++) {
        const row = rows[i];
        if (row.length < 4) continue;

        const raw = columnMap ? buildRowFromHeaders(row, columnMap) : buildRowFromIndex(row);
        const normalized = normalizeRow(raw);
        if (normalized) {
            result.push(normalized);
        }
    }

    return result;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test:unit -- --reporter verbose test/unit/utils/csvParser.spec.js`
Expected: PASS (all tests)

- [ ] **Step 5: Commit**

```
git add app/utils/csvParser.js test/unit/utils/csvParser.spec.js
git commit -m "feat: add header-aware parseCSV with field mapping and normalization"
```

---

### Task 3: Update `import-csv.vue` to use extracted parser

**Files:**

- Modify: `app/components/import-csv.vue`
- Modify: `test/unit/components/import-csv.spec.js`

- [ ] **Step 1: Update the component to import from csvParser**

Replace the `<script setup>` section in `app/components/import-csv.vue`. Remove the inline `fullUnitToUnit`, `CSVToArray`, and `validateImport` functions. Import `parseCSV` from the utility instead:

```vue
<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useBaseweightStore } from '../store/store.js';
import { parseCSV } from '../utils/csvParser.js';
import modal from './modal.vue';

defineOptions({ name: 'ImportCsv' });

const store = useBaseweightStore();

const csvInput = ref(null);
const shown = ref(false);
const importData = ref({});

const library = computed(() => store.library);

watch(
    () => store.importCSVTrigger,
    () => {
        csvInput.value.click();
    },
);

onMounted(() => {
    csvInput.value.onchange = importCSV;
});

function importCSV(evt) {
    const file = evt.target.files[0];
    const name = file.name;

    if (file.name.length < 1) {
        return;
    }
    if (file.size > 1000000) {
        alert('File is too big');
        return;
    }
    if (name.substring(name.length - 4).toLowerCase() !== '.csv') {
        alert('Please select a CSV.');
        return;
    }
    const reader = new FileReader();

    reader.onload = (theFile) => {
        validateImport(theFile.target.result, file.name.substring(0, file.name.length - 4).replace(/_/g, ' '));
    };

    reader.readAsText(file);
}

function validateImport(input, name) {
    const data = parseCSV(input);
    importData.value = { data, name };

    if (!data.length) {
        alert('Unable to load spreadsheet - please verify the format.');
    } else {
        shown.value = true;
    }
}

function importList() {
    store.importCSV(importData.value);
    shown.value = false;
}
</script>
```

- [ ] **Step 2: Run existing component unit tests to verify they still pass**

Run: `npm run test:unit -- --reporter verbose test/unit/components/import-csv.spec.js`
Expected: PASS — `validateImport` still exists on the component, just delegates to `parseCSV`

- [ ] **Step 3: Run full unit test suite**

Run: `npm run test:unit`
Expected: All tests pass

- [ ] **Step 4: Commit**

```
git add app/components/import-csv.vue
git commit -m "refactor: use extracted csvParser in import-csv component"
```

---

### Task 4: Update store `importCSV` to pass new fields

**Files:**

- Modify: `app/store/store.js` — the `importCSV` action (~line 653)

- [ ] **Step 1: Update the logged-out path**

In `app/store/store.js`, inside the `importCSV` action's `if (!this.loggedIn)` block (around line 667-675), add the new fields after the existing assignments:

```js
// After existing lines:
//   item.name = row.name;
//   item.description = row.description;
//   categoryItem.qty = parseFloat(row.qty);
//   item.weight = weightUtils.WeightToMg(parseFloat(row.weight), row.unit);
//   item.authorUnit = row.unit;
//   category.name = row.category;

// Add these lines:
item.url = row.url || '';
item.price = row.price || 0;
categoryItem.worn = row.worn || 0;
categoryItem.consumable = row.consumable || false;
```

- [ ] **Step 2: Update the logged-in path**

In the same action's `try` block (around line 697-703), add the new fields to the API request body:

```js
const serverItem = await this._api('POST', `/api/categories/${category.id}/items`, {
    name: row.name,
    description: row.description,
    weight,
    author_unit: row.unit,
    qty: parseFloat(row.qty),
    url: row.url || '',
    price: row.price || 0,
    worn: row.worn || 0,
    consumable: row.consumable || false,
});
```

- [ ] **Step 3: Run unit tests**

Run: `npm run test:unit`
Expected: All tests pass

- [ ] **Step 4: Commit**

```
git add app/store/store.js
git commit -m "feat: pass url, price, worn, consumable through importCSV store action"
```

---

### Task 5: Add conditional columns to confirmation modal

**Files:**

- Modify: `app/components/import-csv.vue` — template and script sections

- [ ] **Step 1: Add computed properties for conditional column visibility**

Add these computed properties in the `<script setup>` section of `import-csv.vue`:

```js
const hasPrice = computed(() => importData.value.data?.some((row) => row.price > 0));
const hasWorn = computed(() => importData.value.data?.some((row) => row.worn));
const hasConsumable = computed(() => importData.value.data?.some((row) => row.consumable));
```

- [ ] **Step 2: Update the template to show conditional columns**

Replace the `<ul>` in the template:

```vue
<ul class="lpTable lpDataTable">
    <li class="lpRow lpHeader">
        <span class="lpCell">Item Name</span>
        <span class="lpCell">Category</span>
        <span class="lpCell">Description</span>
        <span class="lpCell">Qty</span>
        <span class="lpCell">Weight</span>
        <span class="lpCell">Unit</span>
        <span v-if="hasPrice" class="lpCell">Price</span>
        <span v-if="hasWorn" class="lpCell">Worn</span>
        <span v-if="hasConsumable" class="lpCell">Consumable</span>
    </li>
    <li v-for="(row, index) in importData.data" :key="index" class="lpRow">
        <span class="lpCell">{{ row.name }}</span>
        <span class="lpCell">{{ row.category }}</span>
        <span class="lpCell">{{ row.description }}</span>
        <span class="lpCell">{{ row.qty }}</span>
        <span class="lpCell">{{ row.weight }}</span>
        <span class="lpCell">{{ row.unit }}</span>
        <span v-if="hasPrice" class="lpCell">{{ row.price || '' }}</span>
        <span v-if="hasWorn" class="lpCell">{{ row.worn ? '✓' : '' }}</span>
        <span v-if="hasConsumable" class="lpCell">{{ row.consumable ? '✓' : '' }}</span>
    </li>
</ul>
```

- [ ] **Step 3: Increase modal width to accommodate extra columns**

In the `<style>` section, increase the modal width from 650px to 780px:

```scss
#importValidate {
    max-height: 80vh;
    overflow-y: auto;
    width: 780px;
}
```

- [ ] **Step 4: Run unit tests**

Run: `npm run test:unit`
Expected: All tests pass

- [ ] **Step 5: Commit**

```
git add app/components/import-csv.vue
git commit -m "feat: show price, worn, consumable columns in import preview modal"
```

---

### Task 6: Add E2E test for full-field CSV import

**Files:**

- Modify: `test/e2e/import-csv.spec.ts`

- [ ] **Step 1: Add a test for importing a 10-column CSV**

Add a new `FULL_CSV` constant and test to the existing `test.describe('CSV import')` block in `test/e2e/import-csv.spec.ts`:

```ts
/** A full 10-column CSV matching the BaseWeight export format. */
const FULL_CSV = [
    'Item Name,Category,desc,qty,weight,unit,url,price,worn,consumable',
    'Tent,Shelter,3-season tent,1,32,ounce,https://example.com/tent,350,Worn,',
    'Water Filter,Consumables,Squeeze filter,1,3,ounce,https://example.com/filter,35,,Consumable',
    'Rain Jacket,Clothing,Lightweight shell,1,8,ounce,,200,Worn,',
].join('\n');

test('should import all fields from a full 10-column CSV', async ({ page }) => {
    await freshUser(page);

    await page.locator('#csv').setInputFiles(
        {
            name: 'full_gear.csv',
            mimeType: 'text/csv',
            buffer: Buffer.from(FULL_CSV),
        },
        { force: true },
    );

    // The validation modal should appear with all three items
    await expect(page.locator('#importValidate')).toBeVisible();
    await expect(page.locator('#importData .lpRow:not(.lpHeader)')).toHaveCount(3);

    // Price, Worn, and Consumable columns should be visible in the header
    const header = page.locator('#importData .lpHeader');
    await expect(header).toContainText('Price');
    await expect(header).toContainText('Worn');
    await expect(header).toContainText('Consumable');

    // Confirm the import
    await page.locator('#importConfirm').click();
    await expect(page.locator('#importValidate')).toBeHidden();

    // All three items should be in the list
    await expect(page.locator('.lpItem')).toHaveCount(3);

    // Verify the imported data via the store
    const storeData = await page.evaluate(() => {
        const app = (document.getElementById('lp') as any).__vue_app__;
        const store = app.config.globalProperties.$store;
        const lib = store.library;
        const list = lib.getListById(lib.defaultListId);
        const items = [];
        for (const catId of list.categoryIds) {
            const cat = lib.getCategoryById(catId);
            for (const ci of cat.categoryItems) {
                const item = lib.getItemById(ci.itemId);
                items.push({
                    name: item.name,
                    url: item.url,
                    price: item.price,
                    worn: ci.worn,
                    consumable: ci.consumable,
                });
            }
        }
        return items;
    });

    // Tent: url set, price 350, worn, not consumable
    const tent = storeData.find((i: any) => i.name === 'Tent');
    expect(tent.url).toBe('https://example.com/tent');
    expect(tent.price).toBe(350);
    expect(tent.worn).toBeTruthy();
    expect(tent.consumable).toBeFalsy();

    // Water Filter: url set, price 35, not worn, consumable
    const filter = storeData.find((i: any) => i.name === 'Water Filter');
    expect(filter.url).toBe('https://example.com/filter');
    expect(filter.price).toBe(35);
    expect(filter.worn).toBeFalsy();
    expect(filter.consumable).toBeTruthy();

    // Rain Jacket: no url, price 200, worn, not consumable
    const jacket = storeData.find((i: any) => i.name === 'Rain Jacket');
    expect(jacket.url).toBe('');
    expect(jacket.price).toBe(200);
    expect(jacket.worn).toBeTruthy();
    expect(jacket.consumable).toBeFalsy();
});
```

- [ ] **Step 2: Run the E2E test**

Run: `npx playwright test test/e2e/import-csv.spec.ts --project=chromium`
Expected: All tests pass (including existing ones)

- [ ] **Step 3: Commit**

```
git add test/e2e/import-csv.spec.ts
git commit -m "test: add E2E test for full 10-column CSV import with all fields"
```

---

### Task 7: Run full test suite and verify

- [ ] **Step 1: Run all unit tests**

Run: `npm run test:unit`
Expected: All tests pass

- [ ] **Step 2: Run all E2E tests**

Run: `npx playwright test --project=chromium`
Expected: All tests pass

- [ ] **Step 3: Run linting**

Run: `npm run lint:js`
Expected: No errors

- [ ] **Step 4: Final commit if any lint fixes were needed**

```
git add -A
git commit -m "style: fix lint issues from CSV import changes"
```
