<template>
  <article class="flex flex-col gap-3">
    <component
      :is="project.link ? 'a' : 'div'"
      :href="project.link"
      :target="project.link ? '_blank' : undefined"
      :rel="project.link ? 'noopener' : undefined"
      class="block bg-surface"
    >
      <NuxtImg
        :src="images[current]"
        :alt="project.name"
        width="1400"
        sizes="100vw lg:33vw"
        class="w-full h-auto"
      />
      <span v-if="project.link" class="sr-only"> (opens in new tab)</span>
    </component>

    <div class="flex items-start justify-between gap-4 text-sm">
      <div class="flex flex-col gap-2">
        <h3>{{ project.name.toLowerCase() }}</h3>
        <p class="leading-7 text-muted">{{ project.description }}</p>
      </div>
      <div v-if="images.length > 1" class="flex shrink-0 items-center gap-2 text-muted">
        <button type="button" class="hover:text-green" :aria-label="`Previous image of ${project.name}`" @click="step(-1)">◀</button>
        <span aria-live="polite">{{ current + 1 }}/{{ images.length }}</span>
        <button type="button" class="hover:text-green" :aria-label="`Next image of ${project.name}`" @click="step(1)">▶</button>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { Project } from '~/constants'

const props = defineProps<{ project: Project }>()

const images = computed(() => [props.project.image, ...(props.project.images ?? [])].filter((src): src is string => !!src))
const current = ref(0)

function step(direction: 1 | -1) {
  current.value = (current.value + direction + images.value.length) % images.value.length
}
</script>
