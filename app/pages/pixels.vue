<template>
  <section id="pixels" class="p-50">
    <div class="flex flex-col gap-10 pl-25">
      <div class="anim-1 flex flex-col gap-3">
        <div class="prompt-line">
          <span class="prompt-prefix">&gt;</span>
          <span>ls ~/pixels</span>
        </div>
        <p class="text-body-muted">
          Frontend by day, pixels by night. Everything here renders at native or integer scale —
          no blurry upscaling on this display.
        </p>
      </div>

      <div v-if="ART_PIECES.length" class="flex flex-col gap-12">
        <div
          v-for="group in groupedArt"
          :key="group.key"
          :class="`anim-${group.animIndex} flex flex-col gap-4`"
        >
          <div class="prompt-line">
            <span class="prompt-prefix">&gt;</span>
            <span>ls ~/pixels/{{ group.label }}</span>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <figure
              v-for="piece in group.pieces"
              :key="piece.id"
              class="terminal-card"
            >
              <div class="terminal-card-header">
                <span>{{ piece.file.split('/').pop() }}</span>
                <span class="ml-auto">{{ piece.size }}</span>
              </div>
              <div class="terminal-card-body flex items-center justify-center aspect-square">
                <img
                  :src="piece.file"
                  :alt="piece.title"
                  class="pixel-img max-w-full max-h-full"
                >
              </div>
              <figcaption class="px-4 pb-3 flex justify-between">
                <span class="text-label">{{ piece.title }}</span>
                <span class="text-dim text-label">{{ piece.year }}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <!-- empty state: a terminal that hasn't been drawn on yet -->
      <div v-else class="anim-2 terminal-card max-w-2/3">
        <div class="terminal-card-header">
          <span>~/pixels</span>
        </div>
        <div class="terminal-card-body flex flex-col gap-2">
          <p class="text-terminal">&gt; ls</p>
          <p class="text-body-muted">total 0 — first sprites are being pixeled.</p>
          <p class="text-body-muted">
            drop files in <span class="text-green">/public/pixels</span> and register them in
            <span class="text-green">ART_PIECES</span> to hang them here.
          </p>
          <p class="text-terminal cursor">&gt;</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ART_PIECES, ART_CATEGORIES, TABS } from '~/constants'

const groupedArt = ART_CATEGORIES.map(({ key, label }, index) => ({
  key,
  label,
  animIndex: Math.min(index + 2, 10),
  pieces: ART_PIECES.filter((piece) => piece.category === key),
})).filter((group) => group.pieces.length)

usePageStructuredData(TABS.pixels.stucturedData)
</script>

<style scoped>
.pixel-img {
  image-rendering: pixelated;
}
</style>
