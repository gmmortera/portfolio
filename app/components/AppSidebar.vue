<template>
  <aside class="flex flex-col gap-10 px-6 py-8 sm:px-10 lg:px-7 lg:py-7 text-sm">
    <NuxtLink to="/" aria-label="Gianfranco Mortera — home" class="anim-1 flex items-center gap-3 w-fit">
      <!-- static 3x3 version of the home logomark; center cell left empty, top-right cell cut diagonally -->
      <svg class="size-8" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="0" y="0" width="30" height="30" fill="currentColor" />
        <rect x="35" y="0" width="30" height="30" fill="currentColor" />
        <polygon points="70,0 100,0 70,30" fill="currentColor" />
        <rect x="0" y="35" width="30" height="30" fill="currentColor" />
        <rect x="70" y="35" width="30" height="30" fill="currentColor" />
        <rect x="0" y="70" width="30" height="30" fill="currentColor" />
        <rect x="35" y="70" width="30" height="30" fill="currentColor" />
        <rect x="70" y="70" width="30" height="30" fill="currentColor" />
      </svg>
    </NuxtLink>

    <p class="anim-2 leading-7 max-w-[34ch]">
      frontend engineer by day, <span class="text-green">pixel artist</span> by night.
      crafting clean, interactive experiences from cebu, ph.
    </p>

    <div class="anim-3 flex flex-col gap-10">
      <div class="flex flex-col gap-3">
        <h2 class="text-label uppercase text-muted">projects</h2>
        <ul class="flex flex-col gap-2">
          <li v-for="project in PROJECTS" :key="project.id">
            <NuxtLink
              v-if="project.link"
              :to="project.link"
              target="_blank"
              external
              :class="linkClass"
            >
              {{ project.name.toLowerCase() }}<span class="sr-only"> (opens in new tab)</span>
            </NuxtLink>
            <span v-else>{{ project.name.toLowerCase() }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="anim-4 flex flex-col gap-3 lg:mt-auto">
      <h2 class="text-label uppercase text-muted">social</h2>
      <ul class="flex flex-col gap-2">
        <li>
          <NuxtLink to="mailto:gfmmortera@gmail.com" :class="linkClass">gfmmortera@gmail.com</NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://github.com/gmmortera" target="_blank" external :class="linkClass">
            github.com/gmmortera<span class="sr-only"> (opens in new tab)</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://www.linkedin.com/in/gianfranco-mortera-93a494282" target="_blank" external :class="linkClass">
            linkedin<span class="sr-only"> (opens in new tab)</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { PROJECTS } from '~/constants'

const linkClass = 'w-fit underline decoration-dim underline-offset-4 transition-colors hover:text-green hover:decoration-green'
</script>
