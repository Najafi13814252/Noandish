// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxt/fonts'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl'
      },
    }
  },
  fonts: {
    families: [
      {
        name: 'Dana',
        src: [
          // Regular
          { path: '/fonts/dana-regular.woff2', weight: 400, format: 'woff2' },
          { path: '/fonts/dana-regular.woff', weight: 400, format: 'woff' },

          // Medium
          { path: '/fonts/dana-medium.woff2', weight: 500, format: 'woff2' },
          { path: '/fonts/dana-medium.woff', weight: 500, format: 'woff' },

          // Bold
          { path: '/fonts/dana-bold.woff2', weight: 700, format: 'woff2' },
          { path: '/fonts/dana-bold.woff', weight: 700, format: 'woff' },

          // ExtraBold
          { path: '/fonts/dana-extrabold.woff2', weight: 800, format: 'woff2' },
          { path: '/fonts/dana-extrabold.woff', weight: 800, format: 'woff' },
        ]
      },
      {
        name: 'Lalezar',
        src: [
          {path: '/fonts/Lalezar-Regular.woff2', format: 'woff2'},
          {path: '/fonts/Lalezar-Regular.woff', format: 'woff'}
        ]
      }
    ],
    defaults: {
      display: 'swap',
      preload: true,
    }
  } as any
})
