<template>
  <section id="projects" class="pt-20 px-6 pb-6 sm:pt-24 sm:px-10 sm:pb-10 md:pt-28 md:px-16 md:pb-16 lg:p-24 2xl:p-50">
    <div class="flex flex-col gap-10">
      <div class="anim-1 prompt-line pl-0 sm:pl-6 lg:pl-25">
        <span class="prompt-prefix">&gt;</span>
        <span>ls ~/projects</span>
      </div>
      <ul class="flex flex-col gap-12">
        <li
          v-for="(project, index) in PROJECTS"
          :key="project.id"
          :class="`anim-${Math.min(index + 2, 6)} pl-0 sm:pl-6 lg:pl-25 flex flex-col sm:flex-row gap-4 sm:gap-6`"
        >
          <div class="flex flex-col gap-3 flex-1">
            <NuxtLink
              v-if="project.link"
              :to="project.link"
              target="_blank"
              external
              class="project-link"
            >
              {{ project.name }}
            </NuxtLink>
            <p v-else class="text-green">{{ project.name }}</p>

            <p class="text-body">{{ project.description }}</p>
          </div>

          <button
            v-if="project.image"
            type="button"
            class="w-full sm:w-44 h-28 sm:h-28 shrink-0 cursor-zoom-in"
            :aria-label="`Preview image for ${project.name}`"
            @click="previewProject = project"
          >
            <NuxtImg
              :src="project.image"
              :alt="project.name"
              width="200"
              class="w-full h-full object-cover"
            />
          </button>
        </li>
      </ul>
    </div>

    <Teleport to="body">
      <div
        v-if="previewProject"
        class="image-preview-overlay"
        @click="previewProject = null"
      >
        <button
          type="button"
          class="image-preview-close"
          aria-label="Close preview"
          @click="previewProject = null"
        >
          ✕
        </button>
        <NuxtImg
          :src="previewProject.image"
          :alt="previewProject.name"
          width="1200"
          class="image-preview-img"
          @click.stop
        />
      </div>
    </Teleport>
  </section>
</template>

<script lang="ts" setup>
import { PROJECTS, TABS, type Project } from '~/constants';

usePageStructuredData(TABS.projects.stucturedData)

const previewProject = ref<Project | null>(null)
</script>
