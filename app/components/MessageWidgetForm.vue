<template>
  <div class="pt-12 px-6 pb-12 sm:pt-16 sm:px-10 lg:pt-50 lg:pr-50 lg:pl-0 lg:pb-0">
    <div class="flex flex-wrap gap-2 items-center">
      <h2 class="anim-1">leave a message.</h2>
      <p class="anim-2 text-xs text-green-dim">(add "@[username]" in the beginning of your message)</p>
    </div>
    <form
      class="flex flex-col mt-10 gap-3 anim-3"
      @submit.prevent="sendMessage"
    >
      <textarea
        v-model="message"
        v-focus
        class="border resize-none outline-0 p-2 min-h-36"
        type="text"
        @keydown.enter.exact.prevent="sendMessage"
      />
      <div class="flex items-center justify-between">
        <p v-if="errorMessage" class="text-red-500 mb-2">{{ errorMessage }}</p>
        <button class="hover:cursor-pointer max-w-full sm:max-w-1/4 ml-auto" type="submit">send</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const message = ref("")
const errorMessage = ref("")

const emit = defineEmits(["message-sent"])

const vFocus = {
  mounted: (el: HTMLElement) => el.focus()
}

const sendMessage = async () => {
  if (message.value.trim() === "") return
  if (message.value.length > 500) {
    errorMessage.value = `message cannot exceed 500 characters.`
    return
  }

  const [username, ...rest] = message.value.split(" ")

  if (username?.startsWith("@") && username.length > 24) {
    errorMessage.value = "username cannot exceed 24 characters."
    return
  }

  try {
    await $fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, message: rest.join(" ") }),
    })

    message.value = ""
    errorMessage.value = ""
    emit("message-sent")
  } catch (error) {
    console.error("Error sending message:", error)
    errorMessage.value = "Failed to send message. Please try again later."
  }
}
</script>
