<template>
  <section id="projects" class="flex flex-col lg:flex-row gap-10 lg:gap-30 pt-20 px-6 pb-6 sm:pt-24 sm:px-10 sm:pb-10 md:pt-28 md:px-16 md:pb-16 lg:p-24 2xl:p-50">
    <div class="flex flex-col gap-10">
      <div class="anim-1 prompt-line pl-0 sm:pl-6 lg:pl-25">
        <span class="prompt-prefix">&gt;</span>
        <span>ls ~/projects</span>
      </div>
      <ul class="flex flex-col gap-10">
        <li
          v-for="(project, index) in PROJECTS"
          :key="project.id"
          :class="`anim-${Math.min(index + 2, 6)} pl-0 sm:pl-6 lg:pl-25 cursor-pointer`"
          @mouseenter="currentProject = project as Project"
          @click="currentProject = project as Project"
        >
          <p>
            <span class="text-green">{{ project.name }}</span>
            <span>: {{ project.overview }}</span>
          </p>
        </li>
      </ul>
    </div>
    <div
      v-if="currentProject"
      class="flex flex-col gap-6 w-full lg:max-w-1/3"
    >
      <div class="prompt-line">
        <span class="prompt-prefix">&gt;</span>
        <span>cat ~/{{ currentProject.id }}/README.md</span>
      </div>

      <p class="text-body">{{ currentProject.description }}</p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in currentProject.technologies"
          :key="tech"
          class="tag-pill"
        >
          {{ tech }}
        </span>
      </div>

      <p class="text-label">
        <span>status:</span>
        <span :class="currentProject.status === 'in_development' ? 'text-green' : ''">
          {{ currentProject.status === 'in_development' ? ' in_development' : ' deployed' }}
        </span>
        <span v-if="currentProject.kind === 'client'" class="text-green"> · client_work</span>
      </p>

      <div class="flex gap-3" v-if="currentProject.github || currentProject.live">
        <NuxtLink
          v-if="currentProject.github"
          :to="currentProject.github"
          target="_blank"
          external
          class="contact-link"
        >
          [github]
        </NuxtLink>
        <NuxtLink
          v-if="currentProject.live"
          :to="currentProject.live"
          target="_blank"
          external
          class="contact-link"
        >
          [live]
        </NuxtLink>
      </div>

      <div class="terminal-card w-full max-w-150">
        <div class="terminal-card-header">
          <span>{{ currentProject.image ? currentProject.image.split('/').pop() : 'no_preview.png' }}</span>
        </div>
        <div class="terminal-card-body flex items-center justify-center aspect-video">
          <NuxtImg
            v-if="currentProject.image"
            :src="currentProject.image"
            :alt="currentProject.name"
            width="600"
            class="max-w-full max-h-full"
          />
          <p v-else class="text-body-muted text-label">[ no preview available ]</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { PROJECTS, TABS, type Project } from '~/constants';

const currentProject = ref<Project | null>(PROJECTS[0] as Project)

usePageStructuredData(TABS.projects.stucturedData)
</script>
