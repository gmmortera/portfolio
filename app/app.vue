<template>
  <div class="portfolio-root">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage class="page"/>
    </NuxtLayout>
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
