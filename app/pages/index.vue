<template>
  <section id="home" class="grid grid-cols-1 lg:grid-cols-2 relative">
    <!-- <div id='can-petition-area-reject-pax-silica-and-us-israeli-expansion-in-the-philippines' style='width: 100%; height: 25%;'></div> -->
    <div class="pt-24 px-6 pb-12 sm:pt-28 sm:px-10 lg:pt-50 lg:pl-50 lg:pr-16 lg:pb-0 flex flex-col gap-5">
      <p class="anim-1 text-eyebrow">available for collaboration</p>
      <h1 class="anim-2">I <span class="text-green">build</span> things<br>for the web.</h1>
      <h2 class="anim-3 text-body-muted max-w-full sm:max-w-4/5">Hey, I am <span class="text-green">Gianfranco Mortera</span> frontend engineer by day, <span class="text-green">pixel artist</span> by night. Crafting clean, interactive experiences from Cebu, PH.</h2>
      <div class="anim-4 flex flex-wrap gap-4">
        <NuxtLink to="/projects" class="hover:text-green hover:cursor-pointer">see my work</NuxtLink>
        <span aria-hidden="true">*</span>
        <NuxtLink to="/experience" class="hover:text-green hover:cursor-pointer">about me</NuxtLink>
      </div>
      <div class="flex flex-col mt-12 lg:mt-20 anim-6">
        <p>
          <NuxtLink
            to="mailto:gfmmortera@gmail.com"
          >
           <span class="hover:text-green">gfmmortera@gmail.com</span>
          </NuxtLink>
        </p>
        <p>
          <NuxtLink
            to="https://github.com/gmmortera"
            target="_blank"
            external
          >
           <span class="hover:text-green">github<span class="sr-only"> (opens in new tab)</span></span>
          </NuxtLink>
        </p>
        <p class="cursor">
          <NuxtLink
            to="https://www.linkedin.com/in/gianfranco-mortera-93a494282"
            target="_blank"
            external
          >
            <span class="hover:text-green">linkedin<span class="sr-only"> (opens in new tab)</span></span>
          </NuxtLink>
        </p>
      </div>
    </div>
    <div class="hidden lg:grid place-items-center anim-5">
      <div class="logo-mark gap-5" aria-hidden="true">
        <span class="logo-mark-cell" />
        <span class="logo-mark-cell" />
        <span class="logo-mark-cell logo-mark-cell-cut" />
        <span class="logo-mark-cell" />
        <span />
        <span class="logo-mark-cell" />
        <span class="logo-mark-cell" />
        <span class="logo-mark-cell" />
        <span class="logo-mark-cell" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { TABS } from '~/constants'

usePageStructuredData(TABS.home.stucturedData)
</script>
