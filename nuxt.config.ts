export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  app: { head: { htmlAttrs: { lang: 'en' }, link: [{ rel: 'preconnect', href: 'https://images.unsplash.com' }] } },
  routeRules: { '/**': { prerender: true } },
  nitro: { prerender: { routes: ['/', '/locations', '/beliefs', '/leadership', '/visit-church'] } },
  fonts: { families: [
    { name: 'Manrope', provider: 'google', weights: [400, 600, 700, 800] },
    { name: 'DM Sans', provider: 'google', weights: [400, 500, 600, 700] }
  ] }
})
