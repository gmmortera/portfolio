# portfolio

Personal portfolio site of Gianfranco Mortera, a full-stack engineer: [gmmortera.com](https://www.gmmortera.com).

## Contents

| Route | Description |
| --- | --- |
| `/` | Home: intro, experience feed, and work gallery |
| `/projects` | Project cards |
| `/pixel-art` | Pixel art gallery (images in `public/pixel-arts/`) |

`/experience` permanently redirects to `/`.

## Stack

- [Nuxt 4](https://nuxt.com) / Vue 3
- Tailwind CSS 4
- `@nuxt/image`, `@nuxt/fonts`, `@nuxt/icon`, `@nuxtjs/color-mode`, `@vueuse/nuxt`, `@nuxtjs/robots`
- IBM Plex Mono

## Structure

```
app/
  pages/        index, projects, pixel-art
  components/   AppSidebar, ExperienceFeed, WorkGallery, ProjectCard
  constants.ts  site content (experience, projects)
public/         favicons, sitemap, pixel art, static assets
```

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run generate   # static generation
npm run preview    # preview production build
```
