<template>
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:bg-surface focus:text-green focus:border focus:border-green focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:no-underline"
  >
    Skip to content
  </a>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out"
    :class="hideHeader ? '-translate-y-full' : 'translate-y-0'"
    @focusin="navFocused = true"
    @focusout="navFocused = false"
  >
    <nav
      aria-label="Primary"
      class="flex items-center justify-end gap-3 p-4 text-xs sm:gap-6 sm:p-6 sm:text-sm"
    >
      <NuxtLink
        v-if="currentTab !== TABS.home"
        :to="TABS.home.path"
        aria-label="Back to home"
        class="hover:text-green hover:cursor-pointer mr-auto"
      >
        ..
      </NuxtLink>
      <ul class="flex flex-wrap justify-end gap-3 sm:gap-6">
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
  <main id="main-content" tabindex="-1">
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
const navFocused = shallowRef(false)
let lastScrollY = 0

watch(navFocused, (focused) => {
  if (focused) hideHeader.value = false
})

function handleScroll() {
  if (navFocused.value) return
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