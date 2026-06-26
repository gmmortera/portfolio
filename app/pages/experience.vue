<template>
  <section id="experience" class="p-50"> 
    <ul class="flex flex-col gap-10">
      <li
        v-for="(experience, index) in WORK_EXPERIENCES"
        :key="experience.company"
        :class="`anim-${index + 1} pl-25`"
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
  </section>
</template>

<script lang="ts" setup>
import { WORK_EXPERIENCES } from '~/constants';
</script>