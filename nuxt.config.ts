// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxthub/core',
    'shadcn-nuxt',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    classSuffix: '',
  },

  routeRules: {
    '/': {
      prerender: true,
    },
    '/dashboard/**': {
      ssr: false,
    },
    '/dashboard': {
      redirect: '/dashboard/links',
    },
  },

  hub: {
    ai: true,
    analytics: true,
    blob: false,
    cache: false,
    database: false,
    kv: true,
  },

  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },

  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHub
      openAPI: true,
    },
  },

  runtimeConfig: {
    siteToken: 'SinkCool',
    redirectStatusCode: '301',
    linkCacheTtl: 60,
    redirectWithQuery: false,
    homeURL: '',
    cfAccountId: '',
    cfApiToken: '',
    dataset: 'sink',
    public: {
      previewMode: '',
      slugDefaultLength: '6',
    },
  },

  compatibilityDate: '2024-07-08',
})
