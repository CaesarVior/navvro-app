import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],
  nitro: {
      prerender: {
        failOnError: false, // Build tidak akan berhenti meski ada halaman yang error
      }
    },
  modules: [
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/scripts'
  ],

  postcss: {
    plugins: {
      'postcss-import': {},
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      script: []
    }
  },

  vite: {
    plugins: [
    ],
    optimizeDeps: {
      include: ['flowbite']
    }
  },
})
