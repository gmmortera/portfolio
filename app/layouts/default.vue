<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="flex items-center justify-end p-6">
      <NuxtLink
        v-if="currentTab !== TABS.home"
        :to="TABS.home.path"
        class="hover:text-green hover:cursor-pointer mr-auto"
        @click="currentTab = TABS.home"
      >
        ..
      </NuxtLink>
      <ul class="flex gap-6">
        <li v-for="tab in TABS" :key="tab.title">
          <NuxtLink
            :to="tab.path"
            active-class="text-green"
            @click="currentTab = tab"
          >
            {{ tab.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
import { TABS } from "~/constants"

const currentTab = shallowRef(TABS.home)

usePageStructuredData({ ...currentTab.value.stucturedData })
</script>