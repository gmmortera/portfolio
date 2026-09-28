<template>
  <div>
    <h2 class="sr-only">{{ ART_PIECES.length ? 'Pixel art' : 'Project screenshots' }}</h2>
    <ul class="flex flex-col gap-12">
      <li
        v-for="(item, index) in items"
        :key="item.id"
        :class="`anim-${Math.min(index + 3, 6)} flex flex-col gap-3`"
      >
        <component
          :is="item.link ? 'a' : 'div'"
          :href="item.link"
          :target="item.link ? '_blank' : undefined"
          :rel="item.link ? 'noopener' : undefined"
          class="block bg-surface"
        >
          <img
            v-if="item.pixelated"
            :src="currentImage(item)"
            :alt="item.caption"
            class="w-full h-auto [image-rendering:pixelated]"
          >
          <NuxtImg
            v-else
            :src="currentImage(item)"
            :alt="item.caption"
            width="1400"
            sizes="100vw lg:66vw"
            class="w-full h-auto"
          />
          <span v-if="item.link" class="sr-only"> (opens in new tab)</span>
        </component>

        <div class="flex items-start justify-between gap-4 text-sm">
          <div class="flex flex-col gap-2">
            <h3>{{ item.caption }}</h3>
            <p v-if="item.description" class="leading-7 text-muted">{{ item.description }}</p>
          </div>
          <div v-if="item.images.length > 1" class="flex shrink-0 items-center gap-2 text-muted">
            <button type="button" class="hover:text-green" :aria-label="`Previous image of ${item.caption}`" @click="step(item, -1)">◀</button>
            <span aria-live="polite">{{ (active[item.id] ?? 0) + 1 }}/{{ item.images.length }}</span>
            <button type="button" class="hover:text-green" :aria-label="`Next image of ${item.caption}`" @click="step(item, 1)">▶</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ART_PIECES, PROJECTS } from '~/constants'

interface GalleryItem {
  id: string
  caption: string
  images: string[]
  description?: string
  link?: string
  pixelated?: boolean
}

const items = computed<GalleryItem[]>(() => {
  if (ART_PIECES.length) {
    return ART_PIECES.map((piece) => ({
      id: piece.id,
      caption: `${piece.title} — ${piece.size}, ${piece.year}`,
      images: [piece.file],
      pixelated: true,
    }))
  }

  return PROJECTS
    .filter((project) => project.image || project.images?.length)
    .map((project) => ({
      id: project.id,
      caption: project.name.toLowerCase(),
      images: [project.image, ...(project.images ?? [])].filter((src): src is string => !!src),
      description: project.description,
      link: project.link,
    }))
})

const active = reactive<Record<string, number>>({})

function currentImage(item: GalleryItem) {
  return item.images[active[item.id] ?? 0]
}

function step(item: GalleryItem, direction: 1 | -1) {
  const count = item.images.length
  active[item.id] = ((active[item.id] ?? 0) + direction + count) % count
}
</script>
