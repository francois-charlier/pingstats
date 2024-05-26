export default defineNuxtConfig({
  modules:['@vite-pwa/nuxt'],
  pwa:{
    manifest: {
      name: "PingStats",
      short_name: "PingStats",
      description: "Test beping fattb",
      theme_color: "white",
      icons: [
        {
          src: 'icons/icon_x48.png',
          sizes: '48x48',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: 'icons/icon_x72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: 'icons/icon_x96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: 'icons/icon_x128.png',
          sizes: '128x128',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: 'icons/icon_x144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icons/icon_x144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: 'icons/icon_x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: 'icons/icon_x384.png',
          sizes: '384x384',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: 'icons/icon_x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: "module",
    }
  },
});
