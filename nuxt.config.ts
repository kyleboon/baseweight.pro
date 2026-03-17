export default defineNuxtConfig({
    modules: ['@pinia/nuxt'],
    ssr: true,
    routeRules: {
        '/r/**': { ssr: true }, // share pages always SSR
        '/**': { ssr: false }, // SPA for authenticated app
    },
    css: ['~/assets/css/app.scss'],
});
