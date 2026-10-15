<template>
  <div class="flex flex-col gap-16">
    <section aria-labelledby="home-projects" class="flex flex-col gap-8">
      <h2 id="home-projects" class="text-sm">projects</h2>
      <ul class="flex flex-col gap-12">
        <li v-for="(project, index) in projects" :key="project.id" :class="`anim-${Math.min(index + 3, 6)}`">
          <ProjectCard :project="project" />
        </li>
      </ul>
      <NuxtLink v-if="hasMoreProjects" to="/projects" class="text-sm text-green w-fit">view all projects →</NuxtLink>
    </section>

    <section aria-labelledby="home-pixel-art" class="flex flex-col gap-8">
      <h2 id="home-pixel-art" class="text-sm">pixel art</h2>
      <ul class="flex flex-col gap-12">
        <li v-for="piece in pieces" :key="piece.id" class="flex flex-col gap-3">
          <div class="bg-surface">
            <img :src="piece.file" :alt="piece.title" loading="lazy" class="w-full h-auto [image-rendering:pixelated]">
          </div>
          <h3 class="text-sm">{{ piece.title.toLowerCase() }}</h3>
        </li>
      </ul>
      <NuxtLink v-if="hasMorePieces" to="/pixel-art" class="text-sm text-green w-fit">view all pixel art →</NuxtLink>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ART_PIECES, HOME_PREVIEW_COUNT, PROJECTS } from '~/constants'

const withImages = PROJECTS.filter((project) => project.image || project.images?.length)

const projects = withImages.slice(0, HOME_PREVIEW_COUNT)
const hasMoreProjects = withImages.length > HOME_PREVIEW_COUNT

const pieces = ART_PIECES.slice(0, HOME_PREVIEW_COUNT)
const hasMorePieces = ART_PIECES.length > HOME_PREVIEW_COUNT
</script>
