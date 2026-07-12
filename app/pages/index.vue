<template>
  <section id="home" class="grid grid-cols-1 lg:grid-cols-2 relative">
    <!-- <div id='can-petition-area-reject-pax-silica-and-us-israeli-expansion-in-the-philippines' style='width: 100%; height: 25%;'></div> -->
    <div class="pt-24 px-6 pb-12 sm:pt-28 sm:px-10 lg:pt-50 lg:pl-50 lg:pr-16 lg:pb-0 flex flex-col gap-5">
      <p class="anim-1 text-eyebrow">available for collaboration</p>
      <h1 class="anim-2">I <span class="text-green">build</span> things<br>for the web.</h1>
      <h2 class="anim-3 text-body-muted max-w-full sm:max-w-4/5">Hey, I am <span class="text-green">Gianfranco Mortera</span> — frontend engineer by day, <span class="text-green">pixel artist</span> by night. Crafting clean, interactive experiences from Cebu, PH, and currently grinding XP in game dev.</h2>
      <div class="anim-4 flex flex-wrap gap-4">
        <button class="hover:text-green hover:cursor-pointer">
         <NuxtLink to="/projects" >see my work</NuxtLink>
        </button>
        *
        <button class="hover:text-green hover:cursor-pointer">
          <NuxtLink to="/experience" >about me</NuxtLink>
        </button>
        *
        <button class="hover:text-green hover:cursor-pointer">
          <NuxtLink to="/pixels" >my pixels</NuxtLink>
        </button>
      </div>
      <div class="flex flex-col mt-12 lg:mt-20 anim-6">
        <p>
          <NuxtLink
            to="https://github.com/gmmortera"
            target="_blank"
            external
          >
           <span class="hover:text-green">github</span>
          </NuxtLink>
        </p>
        <p class="cursor">
          <NuxtLink
            to="https://www.linkedin.com/in/gianfranco-mortera-93a494282"
            target="_blank"
            external
          >
            <span class="hover:text-green">linkedin</span>
          </NuxtLink>
        </p>
      </div>
    </div>
    
    <MessageWidget />
  </section>
</template>

<script lang="ts" setup>
import { TABS } from '~/constants'

usePageStructuredData(TABS.home.stucturedData)
</script>
