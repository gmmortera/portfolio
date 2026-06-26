import { readFile, writeFile } from "node:fs/promises"

const writeLock = { busy: false, queue: [] as (() => void)[] }

const acquireLock = () => new Promise<void>(resolve => {
  if (!writeLock.busy) { writeLock.busy = true; resolve() }
  else writeLock.queue.push(resolve)
})

const releaseLock = () => {
  const next = writeLock.queue.shift()
  if (next) next()
  else writeLock.busy = false
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  await acquireLock()

  try {
    const raw = await readFile("data/guest-messages.json", "utf-8")
    const messages = JSON.parse(raw)
    const date = new Date()

    messages.push({
      username: body.username,
      message: body.message,
      timestamp: 
        `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} at ${date.getHours()}:${date.getMinutes()}`
    })
    await writeFile('data/guest-messages.json', JSON.stringify(messages, null, 2))
  } finally {
    releaseLock()
  }

  return { ok: true }
})
