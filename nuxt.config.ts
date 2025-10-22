// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Using PostCSS + @tailwindcss/postcss instead of the @nuxtjs/tailwindcss module
  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      'postcss-import': {},
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },

  modules: ['@nuxtjs/tailwindcss']
})