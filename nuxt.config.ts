import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: "Home - Gianfranco Mortera | Fullstack Engineer",
      meta: [
        { name: "description", content: "Gianfranco Mortera — frontend engineer by day, pixel artist by night. Building for the web from Cebu, PH, and currently learning game dev." },
        { property: "og:title", content: "Home - Gianfranco Mortera | Fullstack Engineer" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.gmmortera.com/" },
        { property: "og:image", content: "https://www.gmmortera.com/comicsilo-preview.png" },
        { property: "og:image:alt", content: "Home - Gianfranco Mortera | Fullstack Engineer" },
        { property: "og:description", content: "Frontend engineer by day, pixel artist by night. Building for the web from Cebu, PH." },
        { property: "og:site_name", content: "Home - Gianfranco Mortera | Fullstack Engineer" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Home - Gianfranco Mortera | Fullstack Engineer" },
        { name: "twitter:description", content: "Frontend engineer by day, pixel artist by night. Building for the web from Cebu, PH." },
        { name: "twitter:image", content: "" },
      ],
      link: [
        { rel: "canonical", href: "https://www.gmmortera.com/" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", type: "image/x-icon", href: "/favicon-light.svg", media: "(prefers-color-scheme: light)" },
        { rel: "icon", type: "image/x-icon", href: "/favicon-dark.svg", media: "(prefers-color-scheme: dark)" },

        { rel: "manifest", href: "/site.webmanifest" }
      ],
      script: [

      ]
    }
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
    "@vueuse/nuxt"
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