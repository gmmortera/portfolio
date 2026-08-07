<template>
  <section id="projects" class="pt-20 px-6 pb-6 sm:pt-24 sm:px-10 sm:pb-10 md:pt-28 md:px-16 md:pb-16 lg:p-24 2xl:p-50">
    <div class="flex flex-col gap-10">
      <h1 class="anim-1 prompt-line pl-0 sm:pl-6 lg:pl-25">
        <span class="prompt-prefix" aria-hidden="true">&gt;</span>
        <span>ls ~/projects</span>
      </h1>
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
              {{ project.name }}<span class="sr-only"> (opens in new tab)</span>
            </NuxtLink>
            <p v-else class="text-green">{{ project.name }}</p>

            <p class="text-body">{{ project.description }}</p>
          </div>

          <button
            v-if="project.image"
            type="button"
            class="w-full sm:w-44 h-28 sm:h-28 shrink-0 cursor-zoom-in"
            :aria-label="`Preview image for ${project.name}`"
            @click="openPreview(project, $event)"
          >
            <NuxtImg
              :src="project.image"
              alt=""
              width="200"
              class="w-full h-full object-cover"
            />
          </button>
        </li>
      </ul>
    </div>

    <Teleport to="body">
      <dialog
        ref="previewDialog"
        class="image-preview-overlay m-0 max-w-none max-h-none border-0"
        :aria-label="previewProject ? `Preview: ${previewProject.name}` : 'Image preview'"
        @click="closePreview"
        @close="handleDialogClose"
      >
        <button
          type="button"
          class="image-preview-close"
          aria-label="Close preview"
          @click="closePreview"
        >
          ✕
        </button>
        <NuxtImg
          v-if="previewProject"
          :src="previewProject.image"
          :alt="previewProject.name"
          width="1200"
          class="image-preview-img"
          @click.stop
        />
      </dialog>
    </Teleport>
  </section>
</template>

<script lang="ts" setup>
import { PROJECTS, TABS, type Project } from '~/constants';

usePageStructuredData(TABS.projects.stucturedData)

const previewProject = ref<Project | null>(null)
const previewDialog = ref<HTMLDialogElement | null>(null)
let previewTrigger: HTMLElement | null = null

function openPreview(project: Project, event: MouseEvent) {
  previewTrigger = event.currentTarget as HTMLElement
  previewProject.value = project
  previewDialog.value?.showModal()
}

function closePreview() {
  previewDialog.value?.close()
}

// Fires on close(), Escape, or native cancel — keeps state in sync either way.
function handleDialogClose() {
  previewProject.value = null
  previewTrigger?.focus()
}
</script>
