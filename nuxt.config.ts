// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Using PostCSS + @tailwindcss/postcss instead of the @nuxtjs/tailwindcss module
  css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],

  postcss: {
    plugins: {
      'postcss-import': {},
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      script: [
        { src: 'https://cdn.tailwindcss.com', defer: true }
      ]
    }
  },
  // Removed `@nuxtjs/tailwindcss` to avoid the Nuxt module injecting the old
  // `tailwindcss` PostCSS plugin. Tailwind is configured via the
  // `@tailwindcss/postcss` plugin above.
})