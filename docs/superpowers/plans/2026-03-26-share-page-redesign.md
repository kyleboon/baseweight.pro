# Share Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the monolithic share page with a composition of existing index components in readonly mode, add auth/copy-list features, and ensure SSR compatibility.

**Architecture:** Add a `readonly` prop to `item.vue`, `category.vue`, `list-summary.vue`, and `list.vue`. Rewrite the share page to compose these components. Add a `loadShareData` store action for SSR hydration. Add a `POST /api/library/copy-list` endpoint. Add a `callbackURL` prop to `SigninForm`.

**Tech Stack:** Vue 3, Pinia, Nuxt 3 (SSR), Drizzle ORM, Playwright (E2E), Vitest (unit)

**Spec:** `docs/superpowers/specs/2026-03-26-share-page-redesign-design.md`

---

## File Structure

| File                                        | Action  | Responsibility                                              |
| ------------------------------------------- | ------- | ----------------------------------------------------------- |
| `app/components/item.vue`                   | Modify  | Add `readonly` prop; swap inputs for static text            |
| `app/components/category.vue`               | Modify  | Add `readonly` prop; swap input for h2; hide edit controls  |
| `app/components/list-summary.vue`           | Modify  | Add `readonly` prop; static swatch + static unit            |
| `app/components/list.vue`                   | Modify  | Add `readonly` prop; dynamic Sortable import; markdown desc |
| `app/components/signin-form.vue`            | Modify  | Add `callbackURL` prop                                      |
| `app/store/store.js`                        | Modify  | Add `loadShareData(libraryBlob, externalId)` action         |
| `app/pages/r/[id].vue`                      | Rewrite | Compose components with readonly, top bar, copy button      |
| `server/api/library/copy-list.post.ts`      | Create  | Duplicate shared list into authenticated user's library     |
| `app/assets/css/_share.scss`                | Delete  | After migrating needed responsive styles                    |
| `test/unit/components/item.spec.js`         | Modify  | Add readonly tests                                          |
| `test/unit/components/category.spec.js`     | Modify  | Add readonly tests                                          |
| `test/unit/components/list-summary.spec.js` | Modify  | Add readonly tests                                          |
| `test/unit/components/list.spec.js`         | Modify  | Add readonly tests                                          |
| `test/unit/components/signin-form.spec.js`  | Modify  | Add callbackURL prop test                                   |
| `test/e2e/share.spec.ts`                    | Modify  | Update selectors, add copy-list and auth tests              |

---

### Task 1: Add `readonly` prop to `item.vue`

**Files:**

- Modify: `app/components/item.vue`
- Modify: `test/unit/components/item.spec.js`

- [ ] **Step 1: Write failing unit tests for readonly mode**

Add to `test/unit/components/item.spec.js`:

```js
describe('readonly mode', () => {
    it('renders item name as static text instead of input', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(Item, {
            props: { ...makeProps({ name: 'Tent' }), readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('input.lpName').exists()).toBe(false);
        expect(wrapper.find('span.lpName').text()).toBe('Tent');
    });

    it('renders item name as a link when url is set', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(Item, {
            props: { ...makeProps({ name: 'Tent', url: 'https://example.com' }), readonly: true },
            global: { stubs },
        });
        const link = wrapper.find('a.lpHref');
        expect(link.exists()).toBe(true);
        expect(link.text()).toBe('Tent');
        expect(link.attributes('href')).toBe('https://example.com');
    });

    it('renders description as static text instead of input', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(Item, {
            props: { ...makeProps({ description: 'A great tent' }), readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('input.lpDescription').exists()).toBe(false);
        expect(wrapper.find('span.lpDescription').text()).toBe('A great tent');
    });

    it('hides drag handle in readonly mode', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(Item, {
            props: { ...makeProps(), readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('.lpHandleCell').exists()).toBe(false);
    });

    it('hides action buttons in readonly mode', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(Item, {
            props: { ...makeProps(), readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('.lpCamera').exists()).toBe(false);
        expect(wrapper.find('.lpLink').exists()).toBe(false);
        expect(wrapper.find('.lpRemoveItem').exists()).toBe(false);
    });

    it('hides remove button in readonly mode', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(Item, {
            props: { ...makeProps(), readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('.lpRemoveCell').exists()).toBe(false);
    });

    it('shows static weight and unit instead of input', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(Item, {
            props: { ...makeProps({ weight: 28349, authorUnit: 'oz' }), readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('input.lpWeight').exists()).toBe(false);
        expect(wrapper.find('.lpWeightCell').text()).toContain('oz');
    });

    it('shows static qty instead of input', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(Item, {
            props: { ...makeProps(), readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('input.lpQty').exists()).toBe(false);
        expect(wrapper.find('.lpQtyCell').text()).toContain('1');
    });

    it('shows static worn icon when worn is active', () => {
        const store = useBaseweightStore();
        // Note: makeLibrary() must be updated to accept optionalFields overrides:
        // function makeLibrary(overrides = {}) {
        //     return { optionalFields: { images: false, worn: false, consumable: false, price: false, ...overrides } };
        // }
        store.library = makeLibrary({ worn: true });
        const wrapper = mount(Item, {
            props: { ...makeProps({}, { worn: true }), readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('.lpWorn.lpActive').exists()).toBe(true);
        // Should be a static icon, not a button
        expect(wrapper.find('button.lpWorn').exists()).toBe(false);
    });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm run test:unit -- --reporter=verbose test/unit/components/item.spec.js`
Expected: FAIL — `readonly` prop not yet implemented

- [ ] **Step 3: Implement `readonly` prop in `item.vue`**

In `app/components/item.vue`:

1. Add `readonly` to props:

```js
const props = defineProps({
    category: { type: Object, default: null },
    itemContainer: { type: Object, default: null },
    readonly: { type: Boolean, default: false },
});
```

2. In the template, add conditional rendering. Replace the name input block (lines 22-29) with:

```html
<template v-if="readonly">
    <span class="lpName">
        <a v-if="item.url" :href="item.url" class="lpHref">{{ item.name }}</a>
        <template v-else>{{ item.name }}</template>
    </span>
    <span class="lpDescription">{{ item.description }}</span>
</template>
<template v-else>
    <input v-model="item.name" ... />
    <input v-model="item.description" ... />
</template>
```

3. Hide edit-only elements with `v-if="!readonly"`:
    - `.lpHandleCell` (drag handle, line 3-5)
    - `.lpActionsCell` buttons block (lines 37-134) — replace with static readonly icons:

```html
<span v-if="readonly" class="lpActionsCell">
    <i v-if="library.optionalFields['worn']" class="lpSprite lpWorn" :class="{ lpActive: categoryItem.worn }" />
    <i
        v-if="library.optionalFields['consumable']"
        class="lpSprite lpConsumable"
        :class="{ lpActive: categoryItem.consumable }"
    />
    <i v-if="categoryItem.star" class="lpSprite lpStar" :class="'lpStar' + categoryItem.star" />
</span>
```

- Price input (lines 135-146) — replace with static display:

```html
<span v-if="readonly && library.optionalFields['price']" class="lpPriceCell lpNumber">
    {{ library.currencySymbol }}{{ item.price ? item.price.toFixed(2) : '0.00' }}
</span>
```

- Weight input + unit select (lines 147-158) — replace with static display:

```html
<span v-if="readonly" class="lpWeightCell lpNumber">
    <span class="lpWeight">{{ weightUtils.MgToWeight(item.weight, item.authorUnit) }}</span>
    <span class="lpDisplay">{{ item.authorUnit }}</span>
</span>
```

- Qty input + arrows (lines 159-196) — replace with static display:

```html
<span v-if="readonly" class="lpQtyCell lpNumber">{{ categoryItem.qty }}</span>
```

- `.lpRemoveCell` (lines 197-212)

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm run test:unit -- --reporter=verbose test/unit/components/item.spec.js`
Expected: ALL PASS

- [ ] **Step 5: Commit**

```bash
git add app/components/item.vue test/unit/components/item.spec.js
git commit -m "feat: add readonly prop to item component"
```

---

### Task 2: Add `readonly` prop to `category.vue`

**Files:**

- Modify: `app/components/category.vue`
- Modify: `test/unit/components/category.spec.js`

- [ ] **Step 1: Write failing unit tests for readonly mode**

Add to `test/unit/components/category.spec.js`:

```js
describe('readonly mode', () => {
    it('renders category name as h2 instead of input', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(Category, {
            props: { category: makeCategory({ name: 'Shelter' }), readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('input.lpCategoryName').exists()).toBe(false);
        expect(wrapper.find('h2.lpCategoryName').text()).toBe('Shelter');
    });

    it('hides drag handle in readonly mode', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(Category, {
            props: { category: makeCategory(), readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('.lpCategoryHandle').exists()).toBe(false);
    });

    it('hides remove button in readonly mode', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(Category, {
            props: { category: makeCategory(), readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('.lpRemoveCategory').exists()).toBe(false);
    });

    it('hides add item link in readonly mode', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(Category, {
            props: { category: makeCategory(), readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('.lpAddItem').exists()).toBe(false);
    });

    it('passes readonly prop to child item components', () => {
        const store = useBaseweightStore();
        const lib = makeLibrary();
        lib.getItemById = () => ({ id: 'i1', name: 'Tent', weight: 0, authorUnit: 'oz' });
        store.library = lib;
        const cat = makeCategory({
            categoryItems: [{ itemId: 'i1', qty: 1, worn: false, consumable: false, star: 0 }],
        });
        const wrapper = mount(Category, {
            props: { category: cat, readonly: true },
            global: { stubs: { item: true } },
        });
        const itemStub = wrapper.findComponent({ name: 'Item' });
        expect(itemStub.props('readonly')).toBe(true);
    });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm run test:unit -- --reporter=verbose test/unit/components/category.spec.js`
Expected: FAIL

- [ ] **Step 3: Implement `readonly` prop in `category.vue`**

In `app/components/category.vue`:

1. Add `readonly` to props:

```js
const props = defineProps({
    category: { type: Object, default: null },
    readonly: { type: Boolean, default: false },
});
```

2. Template changes:
    - Replace the category name input (lines 8-15) with conditional:

```html
<h2 v-if="readonly" class="lpCategoryName">{{ category.name }}</h2>
<input v-else ... />
```

- Hide with `v-if="!readonly"`: `.lpHandleCell` (line 6-7), `.lpRemoveCell` (lines 40-53), camera button (lines 17-36)
- Replace the footer "Add new item" link (lines 79-96) with a simpler footer for readonly:

```html
<li class="lpFooter lpItemsFooter">
    <template v-if="!readonly">
        <span class="lpAddItemCell">...</span>
    </template>
    <!-- price/weight/qty subtotals remain for both modes -->
</li>
```

- Pass `readonly` to child `item` components (line 73-78):

```html
<item ... :readonly="readonly" />
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm run test:unit -- --reporter=verbose test/unit/components/category.spec.js`
Expected: ALL PASS

- [ ] **Step 5: Commit**

```bash
git add app/components/category.vue test/unit/components/category.spec.js
git commit -m "feat: add readonly prop to category component"
```

---

### Task 3: Add `readonly` prop to `list-summary.vue`

**Files:**

- Modify: `app/components/list-summary.vue`
- Modify: `test/unit/components/list-summary.spec.js`

- [ ] **Step 1: Write failing unit tests for readonly mode**

Add to `test/unit/components/list-summary.spec.js`:

```js
describe('readonly mode', () => {
    it('renders a static color swatch instead of colorPicker when readonly', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(ListSummary, {
            props: { list: makeList(), readonly: true },
            global: { stubs },
        });
        expect(wrapper.findComponent({ name: 'colorPicker' }).exists()).toBe(false);
        expect(wrapper.find('.lp-s-dot .lpLegend').exists()).toBe(true);
    });

    it('renders static unit text instead of unitSelect when readonly', () => {
        const store = useBaseweightStore();
        store.library = makeLibrary();
        const wrapper = mount(ListSummary, {
            props: { list: makeList(), readonly: true },
            global: { stubs },
        });
        expect(wrapper.findComponent({ name: 'unitSelect' }).exists()).toBe(false);
        expect(wrapper.find('.lp-s-unit').text()).toContain('oz');
    });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm run test:unit -- --reporter=verbose test/unit/components/list-summary.spec.js`
Expected: FAIL

- [ ] **Step 3: Implement `readonly` prop in `list-summary.vue`**

In `app/components/list-summary.vue`:

1. Add `readonly` to props:

```js
const props = defineProps({
    list: { type: Object, default: null },
    readonly: { type: Boolean, default: false },
});
```

2. Template changes:
    - Replace color picker (lines 28-33) with conditional:

```html
<span class="lp-s-dot lp-s-dot--picker">
    <colorPicker v-if="!readonly && category.displayColor" ... />
    <span v-else-if="category.displayColor" class="lpLegend" :style="{ backgroundColor: category.displayColor }" />
</span>
```

- Replace unit select in total row (lines 59-61) with conditional:

```html
<span class="lp-s-unit">
    <unitSelect v-if="!readonly" :unit="library.totalUnit" :on-change="setTotalUnit" />
    <template v-else>{{ library.totalUnit }}</template>
</span>
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm run test:unit -- --reporter=verbose test/unit/components/list-summary.spec.js`
Expected: ALL PASS

- [ ] **Step 5: Commit**

```bash
git add app/components/list-summary.vue test/unit/components/list-summary.spec.js
git commit -m "feat: add readonly prop to list-summary component"
```

---

### Task 4: Add `readonly` prop to `list.vue` with dynamic Sortable import

**Files:**

- Modify: `app/components/list.vue`
- Modify: `test/unit/components/list.spec.js`

- [ ] **Step 1: Write failing unit tests for readonly mode**

Note: the existing test file mocks `sortablejs` and `useItemDrag` at `client/composables/useItemDrag.js` (wrong path — it should be `app/composables/useItemDrag.js`). Since Task 4 converts these to dynamic imports inside `onMounted`, the static mock path needs updating. Update the existing mock at the top of the file:

```js
// Fix the mock path from client/ to app/
vi.mock('../../../app/composables/useItemDrag.js', () => ({
    useItemDrag: () => ({ setup: vi.fn(), destroy: vi.fn() }),
}));
```

Note: `vi.mock` with dynamic `import()` — Vitest intercepts dynamic imports the same way as static ones when the mock path matches. Since `onMounted` is not called during SSR or in readonly mode, the readonly tests work without the mock. But non-readonly tests need the updated mock path.

Also note: `list.vue` currently has NO `defineProps()` call — this will be a new addition, not a modification. Add it alongside the existing `defineOptions`.

Add readonly tests:

```js
describe('readonly mode', () => {
    it('renders list name as h1 instead of input', () => {
        const store = useBaseweightStore();
        const list = makeList({ name: 'Summer Pack' });
        store.library = makeLibrary(list);
        const wrapper = mount(List, {
            props: { readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('input.lp-list-title').exists()).toBe(false);
        expect(wrapper.find('h1.lp-list-title').text()).toBe('Summer Pack');
    });

    it('hides header actions in readonly mode', () => {
        const store = useBaseweightStore();
        const list = makeList();
        store.library = makeLibrary(list);
        const wrapper = mount(List, {
            props: { readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('.lp-list-header-actions').exists()).toBe(false);
    });

    it('hides add category link in readonly mode', () => {
        const store = useBaseweightStore();
        const list = makeList();
        store.library = makeLibrary(list);
        const wrapper = mount(List, {
            props: { readonly: true },
            global: { stubs },
        });
        expect(wrapper.find('.addCategory').exists()).toBe(false);
    });

    it('passes readonly to list-summary', () => {
        const store = useBaseweightStore();
        const list = makeList({ totalWeight: 100 });
        store.library = makeLibrary(list);
        const wrapper = mount(List, {
            props: { readonly: true },
            global: { stubs: { ...stubs, listSummary: false } },
        });
        // listSummary receives readonly prop
        const summary = wrapper.findComponent({ name: 'ListSummary' });
        if (summary.exists()) {
            expect(summary.props('readonly')).toBe(true);
        }
    });

    it('passes readonly to category components', () => {
        const store = useBaseweightStore();
        const cat = makeCategory('cat1');
        const list = makeList({ categoryIds: ['cat1'] });
        store.library = makeLibrary(list, [cat]);
        const wrapper = mount(List, {
            props: { readonly: true },
            global: { stubs: { ...stubs, category: false } },
        });
        const categoryComp = wrapper.findComponent({ name: 'Category' });
        if (categoryComp.exists()) {
            expect(categoryComp.props('readonly')).toBe(true);
        }
    });

    it('renders markdown description in readonly mode when description exists', () => {
        const store = useBaseweightStore();
        const list = makeList({ description: '**Bold text**' });
        const lib = makeLibrary(list);
        lib.optionalFields = { listDescription: true };
        store.library = lib;
        const wrapper = mount(List, {
            props: { readonly: true },
            global: { stubs },
        });
        const desc = wrapper.find('#lpListDescription');
        expect(desc.exists()).toBe(true);
        expect(desc.html()).toContain('<strong>');
    });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm run test:unit -- --reporter=verbose test/unit/components/list.spec.js`
Expected: FAIL

- [ ] **Step 3: Implement `readonly` prop in `list.vue`**

In `app/components/list.vue`:

1. Add `readonly` prop:

```js
const props = defineProps({
    readonly: { type: Boolean, default: false },
});
```

2. Convert Sortable and useItemDrag to dynamic imports. Remove the top-level imports:

```js
// REMOVE these lines:
// import Sortable from 'sortablejs';
// import { useItemDrag } from '../composables/useItemDrag.js';
```

Replace `onMounted` block with:

```js
let categorySortable = null;
let itemDrag = null;

onMounted(async () => {
    if (props.readonly) return;
    const [{ default: Sortable }, { useItemDrag }] = await Promise.all([
        import('sortablejs'),
        import('../composables/useItemDrag.js'),
    ]);
    itemDrag = useItemDrag();
    categorySortable = handleCategoryReorder(Sortable);
    itemDrag.setup(list);
});

onUnmounted(() => {
    if (itemDrag) itemDrag.destroy();
    if (categorySortable) categorySortable.destroy();
});
```

Update `handleCategoryReorder` to accept Sortable as parameter:

```js
function handleCategoryReorder(Sortable) { ... }
```

Update the `watch(categories, ...)` to guard against null itemDrag:

```js
watch(categories, () => {
    if (!itemDrag) return;
    nextTick(() => {
        itemDrag.setup(list);
    });
});
```

3. Add `marked` and DOMPurify imports for sanitized markdown rendering:

```js
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

const renderedDescription = computed(() => {
    if (!props.readonly || !list.value?.description) return '';
    return DOMPurify.sanitize(marked(list.value.description));
});
```

Note: Install `isomorphic-dompurify` first (`npm install isomorphic-dompurify`) — it works in both SSR and client contexts unlike the browser-only `dompurify`.

4. Template changes:
    - List title: wrap in conditional

```html
<h1 v-if="readonly" class="lp-list-title">{{ list.name }}</h1>
<input v-else class="lp-list-title" ... />
```

- Hide with `v-if="!readonly"`: `.lp-list-header-actions`, `#getStarted`, `#listDescriptionContainer` (the textarea version), `.addCategory`, the `<hr />`
- Add readonly markdown description:

```html
<!-- eslint-disable-next-line vue/no-v-html -->
<div v-if="readonly && renderedDescription" id="lpListDescription" v-html="renderedDescription" />
```

- Pass `readonly` to `list-summary`:

```html
<list-summary v-if="!isListNew" :list="list" :readonly="readonly" />
```

- Pass `readonly` to `category`:

```html
<category v-for="cat in categories" :key="cat.id" :category="cat" :readonly="readonly" />
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm run test:unit -- --reporter=verbose test/unit/components/list.spec.js`
Expected: ALL PASS

- [ ] **Step 5: Run full unit test suite to catch regressions**

Run: `npm run test:unit`
Expected: ALL PASS (295+ tests)

- [ ] **Step 6: Commit**

```bash
git add app/components/list.vue test/unit/components/list.spec.js
git commit -m "feat: add readonly prop to list component with dynamic Sortable import"
```

---

### Task 5: Add `callbackURL` prop to `SigninForm`

**Files:**

- Modify: `app/components/signin-form.vue`
- Modify: `test/unit/components/signin-form.spec.js`

- [ ] **Step 1: Write failing unit test**

Add to `test/unit/components/signin-form.spec.js`:

```js
it('uses callbackURL prop in magic link request', async () => {
    const fetchSpy = vi.fn().mockResolvedValue({});
    vi.stubGlobal('$fetch', fetchSpy);

    const wrapper = mount(SigninForm, {
        props: { callbackURL: '/r/abc123' },
        global: { stubs },
    });
    await wrapper.find('input[name="email"]').setValue('test@example.com');
    await wrapper.find('form').trigger('submit');

    expect(fetchSpy).toHaveBeenCalledWith(
        '/api/auth/sign-in/magic-link',
        expect.objectContaining({
            body: expect.objectContaining({ callbackURL: '/r/abc123' }),
        }),
    );

    vi.unstubAllGlobals();
});

it('defaults callbackURL to / when not provided', async () => {
    const fetchSpy = vi.fn().mockResolvedValue({});
    vi.stubGlobal('$fetch', fetchSpy);

    const wrapper = mount(SigninForm, {
        global: { stubs },
    });
    await wrapper.find('input[name="email"]').setValue('test@example.com');
    await wrapper.find('form').trigger('submit');

    expect(fetchSpy).toHaveBeenCalledWith(
        '/api/auth/sign-in/magic-link',
        expect.objectContaining({
            body: expect.objectContaining({ callbackURL: '/' }),
        }),
    );

    vi.unstubAllGlobals();
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm run test:unit -- --reporter=verbose test/unit/components/signin-form.spec.js`
Expected: FAIL

- [ ] **Step 3: Implement `callbackURL` prop in `signin-form.vue`**

In `app/components/signin-form.vue`:

1. Add props:

```js
const props = defineProps({
    callbackURL: { type: String, default: '/' },
});
```

2. Update `sendMagicLink` function (line 57):

```js
body: { email: email.value, callbackURL: props.callbackURL },
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm run test:unit -- --reporter=verbose test/unit/components/signin-form.spec.js`
Expected: ALL PASS

- [ ] **Step 5: Commit**

```bash
git add app/components/signin-form.vue test/unit/components/signin-form.spec.js
git commit -m "feat: add callbackURL prop to SigninForm"
```

---

### Task 6: Add `loadShareData` action to Pinia store

**Files:**

- Modify: `app/store/store.js`

- [ ] **Step 1: Implement `loadShareData` action**

Add to the `actions` block in `app/store/store.js`, after `loadLibraryData`:

```js
loadShareData(libraryData, externalId) {
    const library = new Library();
    try {
        const parsed = typeof libraryData === 'string' ? JSON.parse(libraryData) : libraryData;
        library.load(parsed);
        // Find the list matching the shared externalId and set it as active
        for (const l of library.lists) {
            if (l.externalId && l.externalId === externalId) {
                library.defaultListId = l.id;
                break;
            }
        }
        // Pre-calculate subtotals for all categories
        for (const cat of library.categories) {
            cat.calculateSubtotal();
        }
        this.library = library;
    } catch (_err) {
        this.globalAlerts.push({ message: 'An error occurred while loading the shared list.' });
    }
},
```

- [ ] **Step 2: Write a unit test for `loadShareData`**

Create `test/unit/store/store.spec.js` (or add to an existing store test file if one exists):

```js
import { describe, it, expect, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useBaseweightStore } from '../../../app/store/store.js';

describe('loadShareData', () => {
    beforeEach(() => setActivePinia(createPinia()));

    it('populates library from blob and sets defaultListId by externalId', () => {
        const store = useBaseweightStore();
        const blob = {
            totalUnit: 'oz',
            itemUnit: 'oz',
            currencySymbol: '$',
            optionalFields: {},
            lists: [
                { id: 1, name: 'List A', externalId: 'abc123', categoryIds: [], description: '' },
                { id: 2, name: 'List B', externalId: 'def456', categoryIds: [], description: '' },
            ],
            categories: [],
            items: [],
        };
        store.loadShareData(blob, 'def456');
        expect(store.library).toBeTruthy();
        expect(store.library.defaultListId).toBe(2);
    });

    it('sets library even if externalId is not found', () => {
        const store = useBaseweightStore();
        const blob = {
            totalUnit: 'oz',
            itemUnit: 'oz',
            currencySymbol: '$',
            optionalFields: {},
            lists: [{ id: 1, name: 'List A', externalId: 'abc123', categoryIds: [], description: '' }],
            categories: [],
            items: [],
        };
        store.loadShareData(blob, 'nonexistent');
        expect(store.library).toBeTruthy();
    });
});
```

- [ ] **Step 3: Run tests**

Run: `npm run test:unit`
Expected: ALL PASS

- [ ] **Step 4: Commit**

```bash
git add app/store/store.js test/unit/store/
git commit -m "feat: add loadShareData action to Pinia store"
```

---

### Task 7: Create `POST /api/library/copy-list` endpoint

**Files:**

- Create: `server/api/library/copy-list.post.ts`

- [ ] **Step 1: Implement the copy-list endpoint**

Create `server/api/library/copy-list.post.ts`:

```ts
import { eq } from 'drizzle-orm';
import * as schema from '../../schema.js';
import { getDb } from '../../db.js';
import { buildLibraryBlob, generateUniqueExternalId } from '../../utils/library.js';

export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user) {
        throw createError({ statusCode: 401, message: 'Authentication required' });
    }

    const body = await readBody(event);
    const { externalId } = body;

    if (!externalId) {
        throw createError({ statusCode: 400, message: 'externalId is required' });
    }

    const db = getDb();

    // Find the source list
    const sourceLists = await db.select().from(schema.lists).where(eq(schema.lists.external_id, externalId));
    if (!sourceLists.length) {
        throw createError({ statusCode: 404, message: 'List not found' });
    }
    const sourceList = sourceLists[0]!;

    // Build the source library blob to get full data
    const sourceBlob = await buildLibraryBlob(sourceList.user_id);

    // Find the list data in the blob
    const sourceListData = sourceBlob.lists.find((l: any) => l.external_id === externalId);
    if (!sourceListData) {
        throw createError({ statusCode: 404, message: 'List not found in library' });
    }

    const now = Math.floor(Date.now() / 1000);

    // Create new list for the authenticated user
    const newExternalId = await generateUniqueExternalId();
    const [newList] = await db
        .insert(schema.lists)
        .values({
            user_id: user.id,
            name: sourceListData.name || '',
            description: sourceListData.description || '',
            external_id: newExternalId,
            sort_order: 0,
            created_at: now,
        })
        .returning();

    // Copy categories and their items
    const sourceCategories = await db
        .select()
        .from(schema.categories)
        .where(eq(schema.categories.list_id, sourceList.id));

    for (const sourceCat of sourceCategories) {
        const [newCat] = await db
            .insert(schema.categories)
            .values({
                user_id: user.id,
                list_id: newList.id,
                name: sourceCat.name || '',
                sort_order: sourceCat.sort_order ?? 0,
            })
            .returning();

        // Copy items in this category
        const sourceItems = await db
            .select()
            .from(schema.category_items)
            .where(eq(schema.category_items.category_id, sourceCat.id));

        for (const sourceItem of sourceItems) {
            await db.insert(schema.category_items).values({
                category_id: newCat.id,
                user_id: user.id,
                name: sourceItem.name || '',
                description: sourceItem.description || '',
                weight: sourceItem.weight ?? 0,
                author_unit: sourceItem.author_unit || 'oz',
                price: sourceItem.price ?? 0,
                url: sourceItem.url || '',
                qty: sourceItem.qty ?? 1,
                worn: sourceItem.worn ?? 0,
                consumable: sourceItem.consumable ?? 0,
                star: sourceItem.star ?? 0,
                sort_order: sourceItem.sort_order ?? 0,
            });
        }
    }

    return { listId: newList.id };
});
```

- [ ] **Step 2: Run lint**

Run: `npm run lint:js`
Expected: PASS (no errors)

- [ ] **Step 3: Commit**

```bash
git add server/api/library/copy-list.post.ts
git commit -m "feat: add POST /api/library/copy-list endpoint"
```

---

### Task 8: Rewrite the share page `r/[id].vue`

**Files:**

- Modify: `app/pages/r/[id].vue`

- [ ] **Step 1: Rewrite the share page**

Replace the entire content of `app/pages/r/[id].vue` with:

```vue
<template>
    <div v-if="library && list" class="lp-share-page">
        <!-- ── Top bar ──────────────────────────────────── -->
        <header class="lp-share-topbar">
            <span class="lp-wordmark">BaseWeight</span>
            <div class="lp-share-topbar-right">
                <template v-if="loggedIn">
                    <button class="lp-copy-btn" @click="showCopyConfirm = true">Copy to my account</button>
                </template>
                <template v-else>
                    <SigninForm :callback-u-r-l="`/r/${route.params.id}`" />
                </template>
            </div>
        </header>

        <!-- ── List content (readonly) ──────────────────── -->
        <div class="lpList">
            <list :readonly="true" />
        </div>

        <!-- ── Copy confirmation modal ──────────────────── -->
        <div v-if="showCopyConfirm" class="lp-copy-overlay" @click.self="showCopyConfirm = false">
            <div class="lp-copy-dialog">
                <p>
                    Copy <strong>{{ list.name || 'this list' }}</strong> to your account?
                </p>
                <p class="lp-copy-detail">This will add {{ totalItems }} items to your library.</p>
                <div class="lp-copy-actions">
                    <button class="lp-copy-cancel" @click="showCopyConfirm = false">Cancel</button>
                    <button class="lp-copy-confirm" :disabled="copying" @click="copyList">
                        {{ copying ? 'Copying...' : 'Copy list' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="error" class="lp-share-page lp-share-error">
        <p>{{ error.message || 'List not found.' }}</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useBaseweightStore } from '~/store/store.js';
import ListComponent from '~/components/list.vue';
import SigninForm from '~/components/signin-form.vue';

// Register the component with the template name 'list'
const components = { list: ListComponent };

const route = useRoute();
const router = useRouter();
const store = useBaseweightStore();

useHead({
    link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Figtree:wght@400;500;600&display=swap',
        },
    ],
});

// SSR data fetch
const { data: shareData, error } = await useAsyncData('share', () => $fetch(`/api/share/${route.params.id}`));

// Hydrate the store with share data
if (shareData.value) {
    store.loadShareData(shareData.value.library, shareData.value.externalId);
}

const library = computed(() => store.library || null);
const list = computed(() => store.activeList);
const loggedIn = computed(() => store.loggedIn);

// SEO meta tags — must be after library/list computed declarations
useSeoMeta({
    title: computed(() => list.value?.name || 'Shared List'),
    ogTitle: computed(() => list.value?.name || 'Shared List'),
    description: 'A gear list shared on BaseWeight',
    ogDescription: 'A gear list shared on BaseWeight',
});

const showCopyConfirm = ref(false);
const copying = ref(false);

const totalItems = computed(() => {
    if (!list_.value) return 0;
    const cats = list_.value.categoryIds.map((id) => library.value.getCategoryById(id)).filter(Boolean);
    return cats.reduce((sum, c) => sum + (c.categoryItems?.length || 0), 0);
});

async function copyList() {
    copying.value = true;
    try {
        const result = await $fetch('/api/library/copy-list', {
            method: 'POST',
            body: { externalId: route.params.id },
        });
        // Reload the user's library and navigate to the main app
        await store._reloadLibrary();
        router.push('/');
    } catch (err) {
        store.globalAlerts.push({ message: err?.data?.message || 'Failed to copy list.' });
    } finally {
        copying.value = false;
        showCopyConfirm.value = false;
    }
}
</script>

<style lang="scss">
@use '../../assets/css/globals' as *;

.lp-share-page {
    --charcoal-950: #1e1e1c;
    --charcoal-300: #8a8880;
    --amber-400: #e8a220;
    --amber-600: #c07a0a;
    --stone-50: #fafaf7;
    --stone-100: #f3f2ee;
    --stone-200: #e8e7e2;
    --font-display: 'DM Serif Display', georgia, serif;
    --font-ui: 'Figtree', system-ui, sans-serif;

    background: var(--stone-50);
    color: var(--charcoal-950);
    font-family: var(--font-ui);
    min-height: 100vh;
}

.lp-share-topbar {
    align-items: center;
    border-bottom: 1px solid var(--stone-200);
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
}

.lp-share-topbar .lp-wordmark {
    color: var(--charcoal-950);
    font-family: var(--font-display);
    font-size: 19px;
    font-weight: 400;
    letter-spacing: -0.01em;
}

.lp-share-topbar-right {
    align-items: center;
    display: flex;
    gap: 12px;

    .signin {
        flex-direction: row;
        gap: 8px;

        .lpFields {
            margin: 0;
        }

        input[type='email'] {
            font-size: 13px;
            padding: 6px 10px;
            width: 200px;
        }

        .lpButtons {
            margin: 0;
        }

        .lpButton {
            font-size: 13px;
            padding: 6px 14px;
        }
    }
}

.lp-share-page .lpList {
    margin: 0 auto;
    max-width: 960px;
    padding: 20px;
}

.lp-copy-btn {
    background: var(--amber-400);
    border: none;
    border-radius: 6px;
    color: var(--charcoal-950);
    cursor: pointer;
    font-family: var(--font-ui);
    font-size: 13px;
    font-weight: 600;
    padding: 8px 16px;
    transition: background-color 120ms ease;

    &:hover {
        background: var(--amber-600);
        color: #fff;
    }
}

.lp-copy-overlay {
    align-items: center;
    background: rgb(0 0 0 / 40%);
    display: flex;
    inset: 0;
    justify-content: center;
    position: fixed;
    z-index: 100;
}

.lp-copy-dialog {
    background: var(--stone-50);
    border: 1px solid var(--stone-200);
    border-radius: 10px;
    max-width: 400px;
    padding: 24px;
    width: 90%;

    p {
        margin: 0 0 8px;
    }
}

.lp-copy-detail {
    color: var(--charcoal-300);
    font-size: 13px;
}

.lp-copy-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-top: 16px;
}

.lp-copy-cancel {
    background: none;
    border: 1px solid var(--stone-200);
    border-radius: 6px;
    cursor: pointer;
    font-family: var(--font-ui);
    font-size: 13px;
    padding: 6px 14px;
}

.lp-copy-confirm {
    background: var(--amber-400);
    border: none;
    border-radius: 6px;
    color: var(--charcoal-950);
    cursor: pointer;
    font-family: var(--font-ui);
    font-size: 13px;
    font-weight: 600;
    padding: 6px 14px;
    transition: background-color 120ms ease;

    &:hover:not(:disabled) {
        background: var(--amber-600);
        color: #fff;
    }

    &:disabled {
        opacity: 0.6;
    }
}

.lp-share-error {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 50vh;
}
</style>
```

- [ ] **Step 2: Run lint**

Run: `npm run lint:js`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add app/pages/r/[id].vue
git commit -m "feat: rewrite share page to compose readonly index components"
```

---

### Task 9: Audit and migrate `_share.scss` responsive styles

**Depends on:** Task 8 (share page rewrite must be done first, otherwise deleting `_share.scss` breaks the old share page's `@use` import)

**Files:**

- Modify: `app/assets/css/_share.scss`
- Possibly modify: `app/assets/css/_common.scss` or component `<style>` blocks

- [ ] **Step 1: Audit `_share.scss` for styles needed outside the share page**

Review `app/assets/css/_share.scss`. Categorize each block:

- Lines 1-6 (`transition: none !important`) — share-only, DELETE
- Lines 8-31 (`.lpShare` overrides) — share-only, DELETE
- Lines 33-99 (`.lpUnitSelect`) — used by both pages. Check if `unit-select.vue` has its own styles or if this is the only definition. If needed, move to `_common.scss` or the component's `<style>` block. Note: these styles reference SCSS variables `$border1`, `$blue1`, `$aboveSidebar` from `_globals` — ensure the destination file also imports globals.
- Lines 101-174 (`.lpDialog`, `.lpModalOverlay`) — used by modal components. Check if these are defined elsewhere. If not, move to `_common.scss`.
- Lines 176-300 (responsive media queries) — used by both pages. Move to `_common.scss`.

- [ ] **Step 2: Migrate needed styles**

Move responsive media queries (720px and 480px breakpoints) and any shared styles (`.lpUnitSelect`, `.lpDialog`, `.lpModalOverlay`) to `app/assets/css/_common.scss` or their respective component `<style>` blocks. Ensure SCSS variable dependencies (`$border1`, `$blue1`, `$aboveSidebar`) are available at the destination.

- [ ] **Step 3: Delete `_share.scss`**

Remove the file. The rewritten share page (Task 8) no longer imports it.

- [ ] **Step 4: Run full test suite**

Run: `npm run test:unit`
Expected: ALL PASS

- [ ] **Step 5: Commit**

```bash
git add app/assets/css/ app/components/
git commit -m "refactor: migrate shared styles from _share.scss to _common.scss and delete _share.scss"
```

---

### Task 10: Update E2E tests for the new share page

**Files:**

- Modify: `test/e2e/share.spec.ts`

- [ ] **Step 1: Update existing tests for new selectors**

The share page no longer uses `.lpShare` or `.lpListName` — it uses the same classes as the index page. Update selectors:

```ts
test.describe('Share page', () => {
    test('should be accessible without login and show the list name', async ({ page }) => {
        const shareUrl = await setupSharedList(page);
        await page.context().clearCookies();
        await page.goto(shareUrl);

        // Now uses h1.lp-list-title instead of .lpListName
        await expect(page.locator('h1.lp-list-title')).toContainText('Summer Pack');
    });

    test('should show category and item names on the share page', async ({ page }) => {
        const shareUrl = await setupSharedList(page);
        await page.context().clearCookies();
        await page.goto(shareUrl);

        // Uses the same .lpCategory and .lpItem classes as index
        await expect(page.locator('.lpCategory')).toContainText('Shelter');
        await expect(page.locator('.lpItem')).toContainText('Tent');
    });

    test('should render a donut chart SVG on the share page', async ({ page }) => {
        const shareUrl = await setupSharedList(page);
        await page.context().clearCookies();
        await page.goto(shareUrl);

        await expect(page.locator('.lpChartContainer svg')).toBeVisible();
    });

    test('should show total weight in the share page summary', async ({ page }) => {
        const shareUrl = await setupSharedList(page);
        await page.context().clearCookies();
        await page.goto(shareUrl);

        await expect(page.locator('.lpTotalsContainer')).toContainText('800');
    });

    test('should not show edit controls on the share page', async ({ page }) => {
        const shareUrl = await setupSharedList(page);
        await page.context().clearCookies();
        await page.goto(shareUrl);

        // No editable inputs, no add buttons, no drag handles
        await expect(page.locator('input.lpName')).toHaveCount(0);
        await expect(page.locator('.addCategory')).toHaveCount(0);
        await expect(page.locator('.lpHandle')).toHaveCount(0);
    });

    test('should show sign-in form when not authenticated', async ({ page }) => {
        const shareUrl = await setupSharedList(page);
        await page.context().clearCookies();
        await page.goto(shareUrl);

        await expect(page.locator('form.signin')).toBeVisible();
    });

    test('should show copy button when authenticated', async ({ page }) => {
        const shareUrl = await setupSharedList(page);
        // Navigate to share page while still logged in
        await page.goto(shareUrl);

        await expect(page.locator('.lp-copy-btn')).toBeVisible();
    });
});
```

- [ ] **Step 2: Run E2E tests**

Run: `npx playwright test test/e2e/share.spec.ts --project=chromium`
Expected: ALL PASS

- [ ] **Step 3: Commit**

```bash
git add test/e2e/share.spec.ts
git commit -m "test: update E2E share tests for readonly component redesign"
```

---

### Task 11: Run full test suite and fix remaining issues

- [ ] **Step 1: Run full unit test suite**

Run: `npm run test:unit`
Expected: ALL PASS

- [ ] **Step 2: Run full E2E test suite**

Run: `npx playwright test --project=chromium`
Expected: ALL PASS

- [ ] **Step 3: Run lint**

Run: `npm run lint:js && npm run lint:css`
Expected: PASS

- [ ] **Step 4: Fix any failures discovered**

Address any test failures or lint issues.

- [ ] **Step 5: Final commit if fixes were needed**

```bash
git add -A
git commit -m "fix: address test and lint issues from share page redesign"
```
