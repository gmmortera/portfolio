<template>
  <section id="experience" class="pt-20 px-6 pb-6 sm:pt-24 sm:px-10 sm:pb-10 md:pt-28 md:px-16 md:pb-16 lg:p-24 2xl:p-50">
    <div class="flex flex-col gap-10">
      <h1 class="anim-1 prompt-line pl-0 sm:pl-6 lg:pl-25">
        <span class="prompt-prefix" aria-hidden="true">&gt;</span>
        <span>ls ~/experience</span>
      </h1>
      <ul class="flex flex-col gap-10">
        <li
          v-for="(experience, index) in WORK_EXPERIENCES"
          :key="experience.company"
          :class="`anim-${index + 2} pl-0 sm:pl-6 lg:pl-25`"
        >
          <p class="text-green">{{ experience.company }}</p>
          <p>
            <span>[{{ experience.period }}]</span> <span>{{ experience.title }}</span>
          </p>
          <ul class="list-disc pl-6 pt-3">
            <li
              v-for="achievement in experience.achievements"
              :key="achievement"
            >
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { WORK_EXPERIENCES, TABS } from '~/constants';

usePageStructuredData(TABS.about.stucturedData)
</script>