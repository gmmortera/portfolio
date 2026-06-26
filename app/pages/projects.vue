<template>
  <section id="projects" class="flex gap-30 p-50">
    <div>
      <ul class="flex flex-col gap-10">
        <li
          v-for="(project, index) in PROJECTS"
          :key="project.id"
          :class="`anim-${index + 1} pl-25`"
          @mouseenter="currentProject = project"
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
      class="flex flex-col gap-10 max-w-1/3"
    >
      <p>{{ currentProject.description }}</p>
      <NuxtImg
        :src="currentProject.image"
        :alt="currentProject.name"
        width="600"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { PROJECTS, type Project } from '~/constants';

const currentProject = ref<Project | null>(null)
</script>
