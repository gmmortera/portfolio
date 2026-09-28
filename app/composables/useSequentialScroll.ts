/**
 * Chains wheel scrolling across side-by-side scroll columns, as if they were one long strip.
 * Wheeling over column N scrolls N until it bottoms out, then N+1, N+2, …
 * Wheeling up unwinds the same chain from the far end back to N, so a column
 * never moves anything to its left.
 *
 * Columns are the elements matching `selector`, in DOM order. Only active while `media` matches
 * (below it the columns stack and the page scrolls normally).
 */
export const useSequentialScroll = (
  container: Ref<HTMLElement | null>,
  selector = '[data-scroll-column]',
  media = '(min-width: 64rem)',
) => {
  const isActive = useMediaQuery(media)

  function toPixels(e: WheelEvent) {
    if (e.deltaMode === WheelEvent.DOM_DELTA_LINE) return e.deltaY * 16
    if (e.deltaMode === WheelEvent.DOM_DELTA_PAGE) return e.deltaY * window.innerHeight
    return e.deltaY
  }

  function onWheel(e: WheelEvent) {
    // leave pinch-zoom and horizontal swipes to the browser
    if (!isActive.value || !container.value || e.ctrlKey) return
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return

    const columns = Array.from(container.value.querySelectorAll<HTMLElement>(selector))
    const start = columns.findIndex((column) => column.contains(e.target as Node))
    if (start === -1) return

    e.preventDefault()

    let delta = toPixels(e)
    const chain = columns.slice(start)
    if (delta < 0) chain.reverse()

    for (const column of chain) {
      if (delta === 0) break
      const max = column.scrollHeight - column.clientHeight
      const from = column.scrollTop
      const to = Math.min(max, Math.max(0, from + delta))
      column.scrollTop = to
      delta -= to - from
    }
  }

  useEventListener(container, 'wheel', onWheel, { passive: false })
}
