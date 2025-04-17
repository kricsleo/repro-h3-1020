// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    routeRules: {
        // All routes should be ISR
        '/**': {
            // isr: {
            //   allowQuery: ["name", "url"],
            //   passQuery: true,
            // },
            isr: {
              expiration: 60,
              // passQuery: true,
              // allowQuery: ['name', 'url'],
            }
        },
      //   '/api/bar': {
      //     isr: {
      //       passQuery: true,
      //     },
      // }
    },
    // prerender: {
    //     autoSubfolderIndex: true,
    //     crawlLinks: true
    // },
    // preset: 'vercel'
  },
})
