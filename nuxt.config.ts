// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    routeRules: {
        // All routes should be ISR
        '/api/foo/*/test': {
            isr: {
              allowQuery: ["name"],
              passQuery: true,
            },
        },
      //   '/api/bar': {
      //     isr: {
      //       passQuery: true,
      //     },
      // }
    },
    prerender: {
        autoSubfolderIndex: true,
        crawlLinks: true
    },
    // preset: 'vercel'
  },
})
