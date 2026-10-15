<template>
  <main id="main-content" tabindex="-1" class="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-8 sm:px-10">
    <header class="flex flex-col gap-4">
      <NuxtLink to="/" class="text-sm text-green w-fit">← back home</NuxtLink>
      <h1 class="text-sm">pixel art</h1>
    </header>

    <!--
      bento via justified rows: inside a row every tile gets flex-grow = its aspect ratio, so all tiles
      share one height and the row fills the width exactly. Tiles are sized to the art, never cropped or letterboxed.
    -->
    <div class="flex flex-col gap-4">
      <ul v-for="(row, i) in rows" :key="i" class="flex flex-col gap-4 md:flex-row">
        <li
          v-for="piece in row"
          :key="piece.id"
          class="group relative min-w-0 overflow-hidden bg-surface"
          :style="{ flexGrow: piece.width / piece.height, flexBasis: 0, aspectRatio: `${piece.width} / ${piece.height}` }"
        >
          <img
            :src="piece.file"
            :alt="piece.title"
            loading="lazy"
            class="block size-full [image-rendering:pixelated]"
          >
          <span class="absolute inset-x-0 bottom-0 bg-bg/80 px-3 py-2 text-xs text-fg opacity-0 transition-opacity group-hover:opacity-100 max-md:opacity-100">
            {{ piece.title.toLowerCase() }}
          </span>
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ART_PIECES, type ArtPiece } from '~/constants'

usePageStructuredData({
  type: 'CollectionPage',
  id: 'https://www.gmmortera.com/pixel-art#page',
  url: 'https://www.gmmortera.com/pixel-art',
  name: 'Pixel Art | Gianfranco Mortera',
  description: 'Pixel art by Gianfranco Mortera: character designs, in-game assets and concepts.',
  isPartOf: 'https://www.gmmortera.com/#website',
  publisher: 'https://www.gmmortera.com/#person',
})

// start a new row once its combined aspect ratio reaches this (≈ 3 average tiles side by side)
const ROW_ASPECT_TARGET = 3
// a trailing row thinner than this is folded into the previous one rather than left as one oversized tile
const MIN_LAST_ROW_ASPECT = 2

const rows = computed(() => {
  const aspect = (piece: ArtPiece) => piece.width / piece.height
  const sum = (row: ArtPiece[]) => row.reduce((total, piece) => total + aspect(piece), 0)

  const result: ArtPiece[][] = []
  let current: ArtPiece[] = []
  for (const piece of ART_PIECES) {
    current.push(piece)
    if (sum(current) >= ROW_ASPECT_TARGET) {
      result.push(current)
      current = []
    }
  }
  if (current.length) {
    if (result.length && sum(current) < MIN_LAST_ROW_ASPECT) result[result.length - 1].push(...current)
    else result.push(current)
  }
  return result
})
</script>
