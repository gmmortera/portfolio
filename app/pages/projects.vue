<template>
  <main id="main-content" tabindex="-1" class="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-8 sm:px-10">
    <header class="flex flex-col gap-4">
      <NuxtLink to="/" class="text-sm text-green w-fit">← back home</NuxtLink>
      <h1 class="text-sm">projects</h1>
    </header>

    <ul class="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      <li v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </li>
    </ul>
  </main>
</template>

<script lang="ts" setup>
import { PROJECTS } from '~/constants'

usePageStructuredData({
  type: 'CollectionPage',
  id: 'https://www.gmmortera.com/projects#page',
  url: 'https://www.gmmortera.com/projects',
  name: 'Projects | Gianfranco Mortera',
  description: 'Client and personal projects by Gianfranco Mortera, full-stack engineer based in Cebu, PH.',
  isPartOf: 'https://www.gmmortera.com/#website',
  publisher: 'https://www.gmmortera.com/#person',
})

const projects = PROJECTS.filter((project) => project.image || project.images?.length)
</script>
