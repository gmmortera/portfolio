import messages from "~~/data/guest-messages.json"

interface MessageResponse {
  ok: boolean
  messages: {
    username: string
    message: string
    timestamp: string
  }[]
}

export default defineEventHandler((): MessageResponse => {
  return { ok: true, messages }
})
