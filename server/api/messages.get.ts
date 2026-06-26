import { readFile } from "node:fs/promises"

interface MessageResponse {
  ok: boolean
  messages: {
    username: string
    message: string
    timestamp: string
  }[]
}

export default defineEventHandler(async (event): Promise<MessageResponse> => {
  try {
    const data = await readFile("data/guest-messages.json", "utf-8")
    const messages = JSON.parse(data)

    return { ok: true, messages }
  } catch (error) {
    console.error("Error reading guest messages:", error)

    return { ok: false, messages: [] }
  }
})
