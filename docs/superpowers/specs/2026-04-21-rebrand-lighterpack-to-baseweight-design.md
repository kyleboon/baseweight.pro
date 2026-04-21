# Rebrand: LighterPack → BaseWeight

**Goal:** Rename the application from "LighterPack" / lighterpack.com to "BaseWeight" / baseweight.pro across the entire codebase — config, server, frontend, tests, and docs.

**Architecture:** No structural changes. This is a pure rename executed bottom-up (config → server → frontend → tests → docs) so each layer is internally consistent before the next one changes. One branch, atomic commits per layer.

**Tech Stack:** No changes. Nuxt 4, Vue 3, Nitro, SQLite/Drizzle, Better Auth — all unchanged.

---

## Naming Conventions

| Context            | Old                       | New                            |
| ------------------ | ------------------------- | ------------------------------ |
| Display name       | LighterPack               | BaseWeight ("Base" + "Weight") |
| Domain             | lighterpack.com           | baseweight.pro                 |
| CSS prefix         | `lp-`                     | `bw-`                          |
| Store export       | `useLighterpackStore`     | `useBaseweightStore`           |
| Store ID           | `'lighterpack'`           | `'baseweight'`                 |
| DB filename        | `lighterpack.db`          | `baseweight.db`                |
| Main CSS file      | `lighterpack.css`         | `baseweight.css`               |
| Package name       | `lighterpack`             | `baseweight`                   |
| Email sender       | `info@mg.lighterpack.com` | `noreply@mg.baseweight.pro`    |
| Email reply-to     | `info@lighterpack.com`    | `info@baseweight.pro`          |
| Error page contact | `info@lighterpack.com`    | `info@baseweight.pro`          |
| Test emails        | `*@lighterpack.com`       | `*@baseweight.pro`             |
| Wordmark CSS       | `.lp-wordmark`            | `.bw-wordmark`                 |

The display name uses a two-tone split per the brand mark spec (`docs/styleguide/11-brand-mark.md`): "Base" in amber, "Weight" in the primary text color.

---

## Scope Layers

Each layer gets its own commit for clean review and bisectability.

### Layer 1: Config & metadata

**Files:**

- `package.json` — name, description, repository URL
- `config/default.json` — `databasePath` value
- `drizzle.config.ts` — fallback DB path
- `nuxt.config.ts` — site name, page title, CSS import path

**Changes:**

- `"name": "lighterpack"` → `"name": "baseweight"`
- `"description"` updated to reference BaseWeight
- Repository URL updated if applicable
- `"databasePath": "./data/lighterpack.db"` → `"./data/baseweight.db"`
- `url: './data/lighterpack.db'` → `'./data/baseweight.db'` in drizzle config
- `name: 'LighterPack'` → `name: 'BaseWeight'` in nuxt site config
- `title: 'LighterPack'` → `title: 'BaseWeight'` in nuxt head config
- `css: ['~/assets/css/lighterpack.css']` → `css: ['~/assets/css/baseweight.css']`

### Layer 2: CSS rename

**Files:**

- Rename `app/assets/css/lighterpack.css` → `app/assets/css/baseweight.css`
- All `.css` files in `app/assets/css/`
- All `.vue` files in `app/components/` and `app/pages/`

**Changes:**

- Rename the main CSS file
- Find-and-replace all `lp-` prefixed CSS classes to `bw-` in both CSS definitions and Vue template usage
- This includes class names like `lp-wordmark`, `lp-mobile-wordmark`, `lpList`, `lpFooter`, `lpRow`, `lpCell`, etc.
- Naming pattern: `lp-foo` → `bw-foo`, `lpFoo` → `bwFoo`

### Layer 3: Store rename

**Files:**

- `app/store/store.ts` — definition
- All files that import `useLighterpackStore` (~30 components)

**Changes:**

- `export const useLighterpackStore = defineStore('lighterpack', {` → `export const useBaseweightStore = defineStore('baseweight', {`
- Update all imports across components: `import { useLighterpackStore }` → `import { useBaseweightStore }`
- Update all call sites: `useLighterpackStore()` → `useBaseweightStore()`

### Layer 4: Server

**Files:**

- `server/utils/auth.ts` — email from, reply-to, subject, body
- `server/plugins/sqlite.ts` — fallback DB path
- `public/dist/error.html` — contact email
- `public/dist/503.html` — contact email

**Changes:**

- `from: 'LighterPack <info@mg.lighterpack.com>'` → `from: 'BaseWeight <noreply@mg.baseweight.pro>'`
- `'h:Reply-To': 'LighterPack <info@lighterpack.com>'` → `'h:Reply-To': 'BaseWeight <info@baseweight.pro>'`
- `subject: 'Sign in to LighterPack'` → `subject: 'Sign in to BaseWeight'`
- Email body text updated
- SQLite plugin fallback path updated
- Error page email addresses updated

### Layer 5: Frontend

**Files:**

- `app/pages/welcome.vue` — page title, meta tags, OG tags, hero text
- `app/pages/r/[id].vue` — share page title, meta tags
- `app/pages/index.vue` — mobile wordmark
- `app/components/list.vue` — welcome message
- `app/components/OgImage/OgImageDefault.satori.vue` — OG image branding

**Changes:**

- All user-facing instances of "LighterPack" → "BaseWeight"
- Meta titles, OG titles, Twitter card titles
- Welcome page hero text and descriptions
- Share page branding
- SEO descriptions referencing the app name
- Wordmark markup updated to use the two-tone brand mark pattern from `docs/styleguide/11-brand-mark.md`

### Layer 6: Tests

**Files:**

- `test/e2e/auth.spec.ts` — title assertion, welcome text, email
- `test/e2e/list.spec.ts` — test emails
- `test/e2e/drag.spec.ts` — test email
- `test/e2e/import-csv.spec.ts` — test email, CSV comment
- `test/e2e/export-import.spec.ts` — test email
- `test/e2e/items.spec.ts` — test emails
- `test/e2e/auth-utils.ts` — shared test email
- `test/e2e/share.spec.ts` — test email
- `test/e2e/list-management.spec.ts` — test email
- `test/e2e/list-settings.spec.ts` — test email
- `test/unit/utils/csvParser.spec.ts` — comment text

**Changes:**

- `@lighterpack.com` → `@baseweight.pro` in all test email addresses
- `@test.lighterpack.com` → `@test.baseweight.pro`
- Title regex `/LighterPack/` → `/BaseWeight/`
- `'Welcome to LighterPack!'` → `'Welcome to BaseWeight!'`
- CSV parser comment updated

### Layer 7: Docs

**Files:**

- `README.md`
- `CLAUDE.md`
- `docs/styleguide/01-brand.md` and other styleguide files
- `docs/passwordless-auth-plan.md`
- `docs/phase-5-ssr-plan.md`
- `docs/superpowers/plans/*` — plan files
- `docs/superpowers/specs/*` — spec files

**Changes:**

- All references to "LighterPack" → "BaseWeight"
- All references to "lighterpack.com" → "baseweight.pro"
- Repository URLs and clone commands updated
- Store export name references in CLAUDE.md updated

### Layer 8: Cleanup

**Actions:**

- Delete `public/dist/` directory (stale built assets with old names)
- Run `npm install` to regenerate `package-lock.json` with new package name
- Run `npm run lint:js` and `npm run lint:css` to catch any issues
- Run `npm run test:unit` and `npm run test:server` to verify
- Grep entire codebase for any remaining `lighterpack` references (case-insensitive)

---

## Out of Scope

- Renaming the local directory (`/Users/kyleboon/code/lighterpack`) or GitHub repo — user handles separately
- DNS and Mailgun configuration for baseweight.pro
- Generating favicon/app icon files from the brand mark SVGs in `docs/styleguide/11-brand-mark.md`
- Any visual/design changes beyond the text rename

## Risk

Low. No logic changes — purely a rename. Main risk is a missed reference causing a runtime error. Mitigated by:

1. Running full test suites after rename
2. Grepping for remaining "lighterpack" references
3. Atomic commits per layer for easy bisection
