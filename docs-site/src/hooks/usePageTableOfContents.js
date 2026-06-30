import { useCallback, useEffect, useRef, useState } from 'react'
import { extractContentHeadings, flattenPageHeadings } from '../utils/pageHeadings'

const SCROLL_MARKER_OFFSET = 168

function getRelativeTop(element, scrollContainer) {
  const elementRect = element.getBoundingClientRect()
  const containerRect = scrollContainer.getBoundingClientRect()
  return elementRect.top - containerRect.top
}

export default function usePageTableOfContents({
  scrollContainerRef,
  contentRef,
  pathname,
}) {
  const [activeHeadingId, setActiveHeadingId] = useState(null)
  const [tocItems, setTocItems] = useState([])
  const activeHeadingIdRef = useRef(activeHeadingId)

  const refreshHeadings = useCallback(() => {
    const items = extractContentHeadings(contentRef.current)
    setTocItems(items)
    const headingIds = flattenPageHeadings(items)
    const nextHeadingId = headingIds[0] ?? null
    activeHeadingIdRef.current = nextHeadingId
    setActiveHeadingId(nextHeadingId)
  }, [contentRef])

  const updateActiveFromScroll = useCallback(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const headingIds = flattenPageHeadings(tocItems)
    if (!headingIds.length) return

    let nextHeadingId = headingIds[0]

    for (const headingId of headingIds) {
      const element = document.getElementById(headingId)
      if (!element) continue

      if (getRelativeTop(element, scrollContainer) <= SCROLL_MARKER_OFFSET) {
        nextHeadingId = headingId
      }
    }

    if (nextHeadingId !== activeHeadingIdRef.current) {
      activeHeadingIdRef.current = nextHeadingId
      setActiveHeadingId(nextHeadingId)
    }
  }, [scrollContainerRef, tocItems])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      refreshHeadings()
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname, refreshHeadings])

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return undefined

    let frame = null
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        updateActiveFromScroll()
        frame = null
      })
    }

    const resizeObserver = new ResizeObserver(() => {
      refreshHeadings()
      updateActiveFromScroll()
    })

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current)
    }

    updateActiveFromScroll()
    scrollContainer.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateActiveFromScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      scrollContainer.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateActiveFromScroll)
    }
  }, [contentRef, scrollContainerRef, pathname, refreshHeadings, updateActiveFromScroll])

  return {
    activeHeadingId,
    tocItems,
    updateActiveFromScroll,
  }
}
