<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out"
    :class="hideHeader ? '-translate-y-full' : 'translate-y-0'"
  >
    <nav class="flex items-center justify-end p-6">
      <NuxtLink
        v-if="currentTab !== TABS.home"
        :to="TABS.home.path"
        class="hover:text-green hover:cursor-pointer mr-auto"
      >
        ..
      </NuxtLink>
      <ul class="flex gap-6">
        <li v-for="tab in TABS" :key="tab.title">
          <NuxtLink
            :to="tab.path"
            active-class="text-green"
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

const route = useRoute()
const currentTab = computed(() => {
  return Object.values(TABS).find((tab) => tab.path === route.path) ?? TABS.home
})

usePageStructuredData({ ...currentTab.value.stucturedData })

const hideHeader = shallowRef(false)
let lastScrollY = 0

function handleScroll() {
  const currentScrollY = window.scrollY
  hideHeader.value = currentScrollY > lastScrollY && currentScrollY > 80
  lastScrollY = currentScrollY
}

onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener("scroll", handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>