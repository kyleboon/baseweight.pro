
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


export const AccountDelete: typeof import("../app/components/account-delete.vue")['default']
export const AccountDropdown: typeof import("../app/components/account-dropdown.vue")['default']
export const Account: typeof import("../app/components/account.vue")['default']
export const BlackoutFooter: typeof import("../app/components/blackout-footer.vue")['default']
export const Category: typeof import("../app/components/category.vue")['default']
export const Colorpicker: typeof import("../app/components/colorpicker.vue")['default']
export const CopyList: typeof import("../app/components/copy-list.vue")['default']
export const DonutChart: typeof import("../app/components/donut-chart.vue")['default']
export const Errors: typeof import("../app/components/errors.vue")['default']
export const GlobalAlerts: typeof import("../app/components/global-alerts.vue")['default']
export const Help: typeof import("../app/components/help.vue")['default']
export const ImportCsv: typeof import("../app/components/import-csv.vue")['default']
export const ItemImage: typeof import("../app/components/item-image.vue")['default']
export const ItemLink: typeof import("../app/components/item-link.vue")['default']
export const ItemViewImage: typeof import("../app/components/item-view-image.vue")['default']
export const Item: typeof import("../app/components/item.vue")['default']
export const LibraryItems: typeof import("../app/components/library-items.vue")['default']
export const LibraryLists: typeof import("../app/components/library-lists.vue")['default']
export const ListSettings: typeof import("../app/components/list-settings.vue")['default']
export const ListSummary: typeof import("../app/components/list-summary.vue")['default']
export const List: typeof import("../app/components/list.vue")['default']
export const Modal: typeof import("../app/components/modal.vue")['default']
export const PopoverHover: typeof import("../app/components/popover-hover.vue")['default']
export const Popover: typeof import("../app/components/popover.vue")['default']
export const RegisterForm: typeof import("../app/components/register-form.vue")['default']
export const Share: typeof import("../app/components/share.vue")['default']
export const Sidebar: typeof import("../app/components/sidebar.vue")['default']
export const SigninForm: typeof import("../app/components/signin-form.vue")['default']
export const Speedbump: typeof import("../app/components/speedbump.vue")['default']
export const Spinner: typeof import("../app/components/spinner.vue")['default']
export const UnitSelect: typeof import("../app/components/unit-select.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAccountDelete: LazyComponent<typeof import("../app/components/account-delete.vue")['default']>
export const LazyAccountDropdown: LazyComponent<typeof import("../app/components/account-dropdown.vue")['default']>
export const LazyAccount: LazyComponent<typeof import("../app/components/account.vue")['default']>
export const LazyBlackoutFooter: LazyComponent<typeof import("../app/components/blackout-footer.vue")['default']>
export const LazyCategory: LazyComponent<typeof import("../app/components/category.vue")['default']>
export const LazyColorpicker: LazyComponent<typeof import("../app/components/colorpicker.vue")['default']>
export const LazyCopyList: LazyComponent<typeof import("../app/components/copy-list.vue")['default']>
export const LazyDonutChart: LazyComponent<typeof import("../app/components/donut-chart.vue")['default']>
export const LazyErrors: LazyComponent<typeof import("../app/components/errors.vue")['default']>
export const LazyGlobalAlerts: LazyComponent<typeof import("../app/components/global-alerts.vue")['default']>
export const LazyHelp: LazyComponent<typeof import("../app/components/help.vue")['default']>
export const LazyImportCsv: LazyComponent<typeof import("../app/components/import-csv.vue")['default']>
export const LazyItemImage: LazyComponent<typeof import("../app/components/item-image.vue")['default']>
export const LazyItemLink: LazyComponent<typeof import("../app/components/item-link.vue")['default']>
export const LazyItemViewImage: LazyComponent<typeof import("../app/components/item-view-image.vue")['default']>
export const LazyItem: LazyComponent<typeof import("../app/components/item.vue")['default']>
export const LazyLibraryItems: LazyComponent<typeof import("../app/components/library-items.vue")['default']>
export const LazyLibraryLists: LazyComponent<typeof import("../app/components/library-lists.vue")['default']>
export const LazyListSettings: LazyComponent<typeof import("../app/components/list-settings.vue")['default']>
export const LazyListSummary: LazyComponent<typeof import("../app/components/list-summary.vue")['default']>
export const LazyList: LazyComponent<typeof import("../app/components/list.vue")['default']>
export const LazyModal: LazyComponent<typeof import("../app/components/modal.vue")['default']>
export const LazyPopoverHover: LazyComponent<typeof import("../app/components/popover-hover.vue")['default']>
export const LazyPopover: LazyComponent<typeof import("../app/components/popover.vue")['default']>
export const LazyRegisterForm: LazyComponent<typeof import("../app/components/register-form.vue")['default']>
export const LazyShare: LazyComponent<typeof import("../app/components/share.vue")['default']>
export const LazySidebar: LazyComponent<typeof import("../app/components/sidebar.vue")['default']>
export const LazySigninForm: LazyComponent<typeof import("../app/components/signin-form.vue")['default']>
export const LazySpeedbump: LazyComponent<typeof import("../app/components/speedbump.vue")['default']>
export const LazySpinner: LazyComponent<typeof import("../app/components/spinner.vue")['default']>
export const LazyUnitSelect: LazyComponent<typeof import("../app/components/unit-select.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
