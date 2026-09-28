<template>
  <div class="relative min-h-dvh overflow-hidden">
    <NuxtRouteAnnouncer />
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:bg-surface focus:text-green focus:border focus:border-green focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:no-underline"
    >
      Skip to content
    </a>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useSiteStructuredData()

useSeoMeta({
  ogType: "website",
  ogSiteName: "Gianfranco Mortera",
  twitterCard: "summary_large_image",
})
</script>
