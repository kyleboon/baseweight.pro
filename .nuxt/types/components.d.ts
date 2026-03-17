
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AccountDelete: typeof import("../../app/components/account-delete.vue")['default']
  AccountDropdown: typeof import("../../app/components/account-dropdown.vue")['default']
  Account: typeof import("../../app/components/account.vue")['default']
  BlackoutFooter: typeof import("../../app/components/blackout-footer.vue")['default']
  Category: typeof import("../../app/components/category.vue")['default']
  Colorpicker: typeof import("../../app/components/colorpicker.vue")['default']
  CopyList: typeof import("../../app/components/copy-list.vue")['default']
  DonutChart: typeof import("../../app/components/donut-chart.vue")['default']
  Errors: typeof import("../../app/components/errors.vue")['default']
  GlobalAlerts: typeof import("../../app/components/global-alerts.vue")['default']
  Help: typeof import("../../app/components/help.vue")['default']
  ImportCsv: typeof import("../../app/components/import-csv.vue")['default']
  ItemImage: typeof import("../../app/components/item-image.vue")['default']
  ItemLink: typeof import("../../app/components/item-link.vue")['default']
  ItemViewImage: typeof import("../../app/components/item-view-image.vue")['default']
  Item: typeof import("../../app/components/item.vue")['default']
  LibraryItems: typeof import("../../app/components/library-items.vue")['default']
  LibraryLists: typeof import("../../app/components/library-lists.vue")['default']
  ListSettings: typeof import("../../app/components/list-settings.vue")['default']
  ListSummary: typeof import("../../app/components/list-summary.vue")['default']
  List: typeof import("../../app/components/list.vue")['default']
  Modal: typeof import("../../app/components/modal.vue")['default']
  PopoverHover: typeof import("../../app/components/popover-hover.vue")['default']
  Popover: typeof import("../../app/components/popover.vue")['default']
  RegisterForm: typeof import("../../app/components/register-form.vue")['default']
  Share: typeof import("../../app/components/share.vue")['default']
  Sidebar: typeof import("../../app/components/sidebar.vue")['default']
  SigninForm: typeof import("../../app/components/signin-form.vue")['default']
  Speedbump: typeof import("../../app/components/speedbump.vue")['default']
  Spinner: typeof import("../../app/components/spinner.vue")['default']
  UnitSelect: typeof import("../../app/components/unit-select.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAccountDelete: LazyComponent<typeof import("../../app/components/account-delete.vue")['default']>
  LazyAccountDropdown: LazyComponent<typeof import("../../app/components/account-dropdown.vue")['default']>
  LazyAccount: LazyComponent<typeof import("../../app/components/account.vue")['default']>
  LazyBlackoutFooter: LazyComponent<typeof import("../../app/components/blackout-footer.vue")['default']>
  LazyCategory: LazyComponent<typeof import("../../app/components/category.vue")['default']>
  LazyColorpicker: LazyComponent<typeof import("../../app/components/colorpicker.vue")['default']>
  LazyCopyList: LazyComponent<typeof import("../../app/components/copy-list.vue")['default']>
  LazyDonutChart: LazyComponent<typeof import("../../app/components/donut-chart.vue")['default']>
  LazyErrors: LazyComponent<typeof import("../../app/components/errors.vue")['default']>
  LazyGlobalAlerts: LazyComponent<typeof import("../../app/components/global-alerts.vue")['default']>
  LazyHelp: LazyComponent<typeof import("../../app/components/help.vue")['default']>
  LazyImportCsv: LazyComponent<typeof import("../../app/components/import-csv.vue")['default']>
  LazyItemImage: LazyComponent<typeof import("../../app/components/item-image.vue")['default']>
  LazyItemLink: LazyComponent<typeof import("../../app/components/item-link.vue")['default']>
  LazyItemViewImage: LazyComponent<typeof import("../../app/components/item-view-image.vue")['default']>
  LazyItem: LazyComponent<typeof import("../../app/components/item.vue")['default']>
  LazyLibraryItems: LazyComponent<typeof import("../../app/components/library-items.vue")['default']>
  LazyLibraryLists: LazyComponent<typeof import("../../app/components/library-lists.vue")['default']>
  LazyListSettings: LazyComponent<typeof import("../../app/components/list-settings.vue")['default']>
  LazyListSummary: LazyComponent<typeof import("../../app/components/list-summary.vue")['default']>
  LazyList: LazyComponent<typeof import("../../app/components/list.vue")['default']>
  LazyModal: LazyComponent<typeof import("../../app/components/modal.vue")['default']>
  LazyPopoverHover: LazyComponent<typeof import("../../app/components/popover-hover.vue")['default']>
  LazyPopover: LazyComponent<typeof import("../../app/components/popover.vue")['default']>
  LazyRegisterForm: LazyComponent<typeof import("../../app/components/register-form.vue")['default']>
  LazyShare: LazyComponent<typeof import("../../app/components/share.vue")['default']>
  LazySidebar: LazyComponent<typeof import("../../app/components/sidebar.vue")['default']>
  LazySigninForm: LazyComponent<typeof import("../../app/components/signin-form.vue")['default']>
  LazySpeedbump: LazyComponent<typeof import("../../app/components/speedbump.vue")['default']>
  LazySpinner: LazyComponent<typeof import("../../app/components/spinner.vue")['default']>
  LazyUnitSelect: LazyComponent<typeof import("../../app/components/unit-select.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
