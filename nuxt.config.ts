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
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", type: "image/x-icon", href: "/favicon-light.svg", media: "(prefers-color-scheme: light)" },
        { rel: "icon", type: "image/x-icon", href: "/favicon-dark.svg", media: "(prefers-color-scheme: dark)" },

        { rel: "manifest", href: "/site.webmanifest" }
      ],
      script: [
        { src: 'https://actionnetwork.org/widgets/v6/petition/reject-pax-silica-and-us-israeli-expansion-in-the-philippines?format=js&source=widget' }
      ]
    }
  },

  robots: {
    sitemap: `${SITE_URL}/sitemap.xml`,
  },

  css: [
    "~/assets/css/main.css",
    "animate.css"
  ],

  fonts: {
    families: [
      { name: 'Roboto', weights: [400, 500, 700, 900] },
      { name: 'Inter', weights: [300, 400, 500] }
    ]
  },

  image: {
    domains: [process.env.NUXT_PUBLIC_STRAPI_URL?.replace(/^https?:\/\//, "") || ""]
  },

  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/robots"
  ],

  router: {
    options: {
      scrollBehaviorType: "smooth"
    }
  },

  runtimeConfig: {
    public: {
      strapiUrl: "https://outgoing-gift-55fe021e6b.strapiapp.com"
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },
})