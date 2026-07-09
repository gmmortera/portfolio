<template>
  <section id="experience" class="p-50">
    <div class="flex flex-col gap-10">
      <div class="anim-1 prompt-line pl-25">
        <span class="prompt-prefix">&gt;</span>
        <span>ls ~/experience</span>
      </div>
      <ul class="flex flex-col gap-10">
        <li
          v-for="(experience, index) in WORK_EXPERIENCES"
          :key="experience.company"
          :class="`anim-${index + 2} pl-25`"
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
import { WORK_EXPERIENCES } from '~/constants';
</script>