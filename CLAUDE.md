# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LighterPack is a full-stack web application for tracking gear for adventures. Vue 3 SPA frontend with Node.js/Express backend and MongoDB database.

## Common Commands

```bash
npm run dev          # Start server in dev mode (with webpack dev server on :8080)
npm run start        # Production webpack build + start server
npm run build        # Webpack production build only
npm run lint:js      # ESLint with auto-fix (.js and .vue files)
npm run lint:css     # Stylelint with auto-fix (.scss and .vue files)
npm run test:unit    # Run Vitest unit tests (once)
npm run test:unit:watch  # Run Vitest unit tests in watch mode
npx playwright test  # Run all E2E tests (auto-starts server via webServer config)
npx playwright test test/e2e/auth.spec.ts  # Run a single test file
npx playwright test --project=chromium     # Run tests in one browser only
```

## Architecture

### Frontend (`client/`)

- **Vue 3.5** SPA with **Pinia** store (`client/store/store.js`, exported as `useLighterpackStore()`) and **Vue Router** (`client/routes.js`)
- Entry point: `client/lighterpack.js`
- Components in `client/components/` (~30 `.vue` files), page views in `client/views/`
- Data models (Item, Category, List, Library) defined in `client/dataTypes.js` — shared structure with backend
- Auto-save with 10-second debounce interval
- SCSS styles in `client/css/`

#### Composition API migration (in progress)

10 of 31 components have been converted to `<script setup>` Composition API:

- **Done**: spinner, blackout-footer, errors, global-alerts, modal, popover, popover-hover, colorpicker, unit-select, donut-chart
- **Remaining** (still Options API): item, category, library-items, list-summary (these also use `utils-mixin.js` which must be removed as a prerequisite), plus sidebar, list, copy-list, account, register-form, signin-form, speedbump, help, library-lists, list-settings, account-dropdown, account-delete, import-csv, share, item-link, item-image, item-view-image

When converting components, use `useLighterpackStore()` directly (not `this.$store`). Use `defineExpose()` to expose reactive state for unit tests — Vue 3's component proxy auto-unwraps exposed refs, so test assertions should use `wrapper.vm.shown` not `wrapper.vm.shown.value`.

### Backend (`server/`)

- **Express.js** app configured in `app.js`
- Routes split across: `server/endpoints.js` (API), `server/views.js` (SSR share pages), `server/moderation-endpoints.js` (admin)
- **MongoDB** via mongojs — collections: `users`, `libraries`
- Session-based auth (`server/auth.js`) using bcrypt with legacy SHA3 migration path
- JSON logging via Winston (`server/log.js`)
- Share pages rendered server-side with Mustache templates (`templates/`)

### Configuration

- Uses the `config` npm package. Defaults in `config/default.json`, local overrides in `config/local.json` (gitignored)
- Dev server port: 8080 (webpack dev server proxies to Express on port 3000)

### Build System

- **Webpack 5** with separate configs: `webpack.config.js` (production) and `webpack.development.config.js` (dev)
- Two entry points: `app` (main SPA) and `share` (share page)
- Output to `public/dist/` — a custom `AssetJsonPlugin` generates `assets.json` for server-side template references

## Code Style

- **4-space indentation** (both JS and SCSS)
- ESLint extends `airbnb-base` + `plugin:vue/recommended`
- Stylelint with alphabetically ordered CSS properties
- Several ESLint rules disabled (see `.eslintrc.js` TODOs): `no-param-reassign`, `no-shadow`, `max-len`, etc.

## Testing

### Unit tests (Vitest)

- **Vitest** unit tests in `test/unit/` — components, utils, and data types
- 43 tests across 14 files covering: components (spinner, blackout-footer, errors, global-alerts, modal, popover, popover-hover, colorpicker, unit-select, donut-chart), utils (weight, color), dataTypes (item, category)
- Pattern: `mount()` from `@vue/test-utils`; use `createPinia()`/`setActivePinia()` for components that access the store; use `vi.useFakeTimers()` for timer-dependent behavior
- Run with `npm run test:unit`

### E2E tests (Playwright)

- Playwright tests in `test/e2e/` — runs against Chromium and Firefox (WebKit disabled)
- Test helpers in `test/e2e/auth-utils.ts` (register/login/logout helpers)
- Playwright auto-starts the app via `npm run start` (`reuseExistingServer: !process.env.CI` in `playwright.config.ts` — kill stale servers on port 3000 before re-running locally)
- Load testing with Locust (Python) in `test/load-testing/`

## Key Technical Notes

- Future planned migration from MongoDB to PostgreSQL document store
- The webpack dev server (port 8080) proxies all non-static requests to Express (port 3000)
- Requires MongoDB running locally for development
- The sidebar has `z-index: 20` (below `.lpList` at `z-index: 30`) — flyout popovers inside the sidebar are visually trapped behind the main list area. Use `page.evaluate` with `__vue_app__.config.globalProperties.$store` to trigger store actions in E2E tests instead of clicking sidebar flyout buttons.
