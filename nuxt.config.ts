// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  ssr: true,
  nitro: {
    preset: 'node-server',
    prerender: {
      crawlLinks: true,
    },
  },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/css/tailwind.css'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  runtimeConfig: {
    public: {
      appName: 'Nuxt Blog',
    },
  },
  app: {
    head: {
      title: 'Nuxt Blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Simple blog in Nuxt 4' },
      ],
    },
  },
  vite: {
    optimizeDeps: {
      include: ['dayjs'],
    },
  },
});


