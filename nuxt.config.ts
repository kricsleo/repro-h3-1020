// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    routeRules: {
        // All routes should be ISR
        '/**': {
            isr: {
              passQuery: true,
            },
        }
    },
    prerender: {
        autoSubfolderIndex: true,
        crawlLinks: true
    }
  },
})
