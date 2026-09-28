<template>
  <!-- three columns on desktop, each scrolling on its own; wheel scrolling chains left → right (useSequentialScroll) -->
  <div ref="columnsRef" class="lg:grid lg:grid-cols-[minmax(16rem,1fr)_3fr] lg:h-dvh lg:overflow-hidden">
    <AppSidebar data-scroll-column class="lg:h-dvh lg:overflow-y-auto lg:overscroll-contain scrollbar-none border-b border-border lg:border-b-0 lg:border-r" />

    <main id="main-content" tabindex="-1" class="min-w-0 lg:grid lg:grid-cols-[1fr_2fr] lg:h-dvh lg:overflow-hidden">
      <h1 class="sr-only">Gianfranco Mortera — frontend engineer and pixel artist</h1>

      <ExperienceFeed data-scroll-column class="lg:h-dvh lg:overflow-y-auto lg:overscroll-contain scrollbar-none border-b border-border lg:border-b-0 lg:border-r" />

      <div data-scroll-column class="lg:h-dvh lg:overflow-y-auto lg:overscroll-contain scrollbar-none flex flex-col gap-12 px-6 py-8 sm:px-10 lg:px-7 lg:py-7">
        <figure class="anim-2 flex flex-col gap-3">
          <div class="grid place-items-center overflow-hidden bg-surface aspect-4/3">
            <!-- 3x3 pixel-grid logomark (same motif as the /public favicon); center cell left empty -->
            <div ref="logoMarkRef" class="grid grid-cols-3 grid-rows-3 gap-5 w-[clamp(180px,20vw,320px)] aspect-square" aria-hidden="true">
              <template v-for="(cell, i) in LOGO_CELLS" :key="i">
                <span v-if="!cell" />
                <!-- outer layer drifts via CSS; inner layer is pushed by JS so the two transforms never fight -->
                <span
                  v-else
                  class="block size-full animate-drift"
                  :style="{ animationDuration: cell.duration, animationDelay: cell.delay, animationDirection: cell.reverse ? 'reverse' : undefined }"
                >
                  <span data-push class="block size-full">
                    <!-- clip-path would clip the glow too, so the cut cell is SVG geometry with a drop-shadow that follows its silhouette -->
                    <svg v-if="cell.cut" class="block size-full animate-mark-glow-cut" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polygon class="fill-white" points="0,0 100,0 0,100" />
                    </svg>
                    <span v-else class="block size-full bg-white animate-mark-glow" />
                  </span>
                </span>
              </template>
            </div>
          </div>
          <figcaption class="text-sm">logomark — drifts in zero gravity, dodges your cursor</figcaption>
        </figure>

        <WorkGallery />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { HOME_STRUCTURED_DATA } from '~/constants'

usePageStructuredData(HOME_STRUCTURED_DATA)

const columnsRef = ref<HTMLElement | null>(null)
useSequentialScroll(columnsRef)

const logoMarkRef = ref<HTMLElement | null>(null)

// each cell drifts on its own cycle so the mark reads as loose debris rather than one rigid shape
const LOGO_CELLS = [
  { duration: '8s', delay: '-1s' },
  { duration: '10.5s', delay: '-3s', reverse: true },
  { duration: '7.5s', delay: '-5s', cut: true },
  { duration: '11s', delay: '-2s', reverse: true },
  null,
  { duration: '9.5s', delay: '-4.5s' },
  { duration: '12s', delay: '-6s', reverse: true },
  { duration: '8.5s', delay: '-2.5s' },
  { duration: '10s', delay: '-1.5s', reverse: true },
]

const PUSH_RADIUS = 130
const PUSH_STRENGTH = 34
const PUSH_EASE = 0.08

let pushEls: HTMLElement[] = []
let pushState: { x: number, y: number }[] = []
let pointerX = -Infinity
let pointerY = -Infinity
let rafId = 0

function onPointerMove(e: PointerEvent) {
  pointerX = e.clientX
  pointerY = e.clientY
}

function onPointerGone() {
  pointerX = -Infinity
  pointerY = -Infinity
}

function tick() {
  for (let i = 0; i < pushEls.length; i++) {
    const el = pushEls[i]
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = cx - pointerX
    const dy = cy - pointerY
    const dist = Math.hypot(dx, dy)

    let targetX = 0
    let targetY = 0
    if (dist < PUSH_RADIUS && dist > 0.01) {
      const force = (1 - dist / PUSH_RADIUS) * PUSH_STRENGTH
      targetX = (dx / dist) * force
      targetY = (dy / dist) * force
    }

    const state = pushState[i]
    state.x += (targetX - state.x) * PUSH_EASE
    state.y += (targetY - state.y) * PUSH_EASE
    el.style.transform = `translate(${state.x.toFixed(2)}px, ${state.y.toFixed(2)}px)`
  }
  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!logoMarkRef.value) return

  pushEls = Array.from(logoMarkRef.value.querySelectorAll<HTMLElement>('[data-push]'))
  pushState = pushEls.map(() => ({ x: 0, y: 0 }))

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('pointerleave', onPointerGone)
  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerleave', onPointerGone)
})
</script>
