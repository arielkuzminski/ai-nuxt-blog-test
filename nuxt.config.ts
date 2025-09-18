// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
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
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui' // Handles Tailwind v4 automatically
  ],
  css: ['~/main.css'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  runtimeConfig: {
    public: {
      appName: 'Nuxt Blog',
    },
  },
  ui: {
    prefix: 'Nuxt',
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


