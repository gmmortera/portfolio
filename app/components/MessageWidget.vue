<template>
  <div class="relative overflow-hidden">
      <div class="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] z-0">
        <ul class="flex flex-col space-y-6 px-10 animate-scroll-up blur-[1px] opacity-20">
          <li v-for="value in sortedMessages" :key="'a-' + value.timestamp">
            <p><span class="text-green">[{{ value.username }}]</span> {{ value.message }}</p>
            <small class="text-dim">{{ value.timestamp }}</small>
          </li>

          <li v-for="value in sortedMessages" :key="'b-' + value.timestamp">
            <p><span class="text-green">[{{ value.username }}]</span> {{ value.message }}</p>
            <small class="text-dim">{{ value.timestamp }}</small>
          </li>
        </ul>
      </div>

      <MessageWidgetForm class="relative z-10" @message-sent="refresh" />
    </div>
</template>

<script lang="ts" setup>
let pollMessages: ReturnType<typeof setInterval>
const { data: guestMessages, refresh } = useFetch("/api/messages")

const sortedMessages = computed(() => {
  if (!guestMessages.value || !guestMessages.value.ok)  return []

  return guestMessages.value.messages
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 30)
})

onMounted(() => {
  pollMessages = setInterval(() => {
    refresh()
  }, 30000)
})

onUnmounted(() => {
  clearInterval(pollMessages)
})
</script>
