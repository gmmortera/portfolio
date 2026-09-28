import tailwindcss from "@tailwindcss/vite"

const SITE_URL = "https://www.gmmortera.com"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  site: {
    url: SITE_URL,
    name: "Gianfranco Mortera | Full-stack Engineer",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { href: 'https://actionnetwork.org/css/style-embed-v3.css', rel: 'stylesheet', type: 'text/css' },
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" }
      ],
      script: [
        { src: 'https://actionnetwork.org/widgets/v6/petition/reject-pax-silica-and-us-israeli-expansion-in-the-philippines?format=js&source=widget' }
      ]
    }
  },

  // the site used to have separate pages; send old links and search results to the one-page home
  routeRules: {
    '/experience': { redirect: { to: '/', statusCode: 301 } },
    '/projects': { redirect: { to: '/', statusCode: 301 } },
  },

  robots: {
    sitemap: `${SITE_URL}/sitemap.xml`,
  },

  css: ["~/assets/css/main.css"],

  fonts: {
    families: [
      { name: 'IBM Plex Mono', weights: [400] }
    ]
  },

  modules: [
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/robots"
  ],

  vite: {
    plugins: [tailwindcss()]
  },
})
