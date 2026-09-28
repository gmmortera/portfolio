<template>
  <div class="px-6 pb-8 sm:px-10 lg:px-7 lg:pb-7 text-sm">
    <!-- TODO: audio player strip ("PLAY ░░░░░░ 00:07") from the reference layout — sticky above the feed -->
    <h2 class="anim-1 text-label uppercase text-muted sticky top-0 z-10 bg-bg pt-8 pb-6 lg:pt-7">experience</h2>
    <ol class="flex flex-col gap-14">
      <li
        v-for="(experience, index) in WORK_EXPERIENCES"
        :key="experience.company"
        :class="`anim-${Math.min(index + 2, 6)}`"
      >
        <p class="text-xs text-muted tracking-wide">{{ experience.period }} · {{ experience.company }}</p>
        <h3 class="mt-5 text-green">{{ experience.title }}</h3>
        <ul class="mt-4 flex flex-col gap-4 leading-7">
          <li v-for="achievement in experience.achievements" :key="achievement">
            {{ achievement }}
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import { WORK_EXPERIENCES } from '~/constants'
</script>
