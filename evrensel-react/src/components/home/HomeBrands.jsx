import { useEffect, useMemo, useRef, useState } from "react"
import homeReferencesData from "../../data/homeReferencesData.json"

const { brandTickerTitle, brandLogos } = homeReferencesData
const brandImages = import.meta.glob("../../assets/images/brands/*", {
  eager: true,
  import: "default",
})

export default function HomeBrands() {
  const tickerRef = useRef(null)
  const isInteractingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartScrollRef = useRef(0)
  const blockWidthRef = useRef(0)
  const autoTimerRef = useRef(null)
  const stepAnimationRef = useRef(null)
  const isStepAnimatingRef = useRef(false)
  const [isDragging, setIsDragging] = useState(false)

  const resolvedBrands = useMemo(
    () =>
      brandLogos.map((brand) => ({
        ...brand,
        imageSrc: brand.imagePath ? brandImages[`../../assets/images/${brand.imagePath}`] : null,
      })),
    []
  )

  const loopedBrands = useMemo(
    () => [...resolvedBrands, ...resolvedBrands, ...resolvedBrands],
    [resolvedBrands]
  )

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker || !resolvedBrands.length) return

    const updateBlockWidth = () => {
      blockWidthRef.current = ticker.scrollWidth / 3
      return blockWidthRef.current
    }

    const wrapAtEdges = () => {
      const blockWidth = blockWidthRef.current || updateBlockWidth()
      if (!blockWidth) return

      const maxScroll = ticker.scrollWidth - ticker.clientWidth
      if (maxScroll <= 0) return

      if (ticker.scrollLeft <= 2) {
        ticker.scrollLeft += blockWidth
      } else if (ticker.scrollLeft >= maxScroll - 2) {
        ticker.scrollLeft -= blockWidth
      }
    }

    const blockWidth = updateBlockWidth()
    if (blockWidth) ticker.scrollLeft = blockWidth + 1

    const runAutoStep = () => {
      if (isInteractingRef.current || isStepAnimatingRef.current) return

      const start = ticker.scrollLeft
      const distance = 150
      const durationMs = 900
      let startTime = 0
      isStepAnimatingRef.current = true

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / durationMs, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        ticker.scrollLeft = start + distance * eased
        wrapAtEdges()

        if (progress < 1) {
          stepAnimationRef.current = window.requestAnimationFrame(step)
          return
        }

        isStepAnimatingRef.current = false
        stepAnimationRef.current = null
      }

      stepAnimationRef.current = window.requestAnimationFrame(step)
    }

    const onScroll = () => wrapAtEdges()
    const onResize = () => {
      const prevBlock = blockWidthRef.current || 1
      const localPosition = ticker.scrollLeft - prevBlock
      const nextBlock = updateBlockWidth()
      const nextLocal = ((localPosition % nextBlock) + nextBlock) % nextBlock
      const maxScroll = ticker.scrollWidth - ticker.clientWidth
      ticker.scrollLeft = Math.min(maxScroll - 1, nextBlock + nextLocal)
      wrapAtEdges()
    }
    ticker.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    autoTimerRef.current = window.setInterval(runAutoStep, 3000)

    return () => {
      ticker.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      if (autoTimerRef.current) window.clearInterval(autoTimerRef.current)
      if (stepAnimationRef.current) window.cancelAnimationFrame(stepAnimationRef.current)
      isStepAnimatingRef.current = false
    }
  }, [resolvedBrands.length])

  const startDrag = (pageX) => {
    const ticker = tickerRef.current
    if (!ticker) return
    if (stepAnimationRef.current) {
      window.cancelAnimationFrame(stepAnimationRef.current)
      stepAnimationRef.current = null
      isStepAnimatingRef.current = false
    }
    setIsDragging(true)
    isInteractingRef.current = true
    dragStartXRef.current = pageX
    dragStartScrollRef.current = ticker.scrollLeft
  }

  const moveDrag = (pageX) => {
    const ticker = tickerRef.current
    if (!ticker || !isDragging) return
    const deltaX = pageX - dragStartXRef.current
    ticker.scrollLeft = dragStartScrollRef.current - deltaX
    const blockWidth = blockWidthRef.current || 0
    if (blockWidth > 0) {
      const maxScroll = ticker.scrollWidth - ticker.clientWidth
      if (ticker.scrollLeft <= 2) ticker.scrollLeft += blockWidth
      else if (ticker.scrollLeft >= maxScroll - 2) ticker.scrollLeft -= blockWidth
    }
  }

  const stopDrag = () => {
    if (!isDragging) return
    setIsDragging(false)
    window.setTimeout(() => {
      isInteractingRef.current = false
    }, 900)
  }

  return (
    <section className="home-brands section reveal-on-scroll reveal-left">
      <div className="container">
        <div className="references__ticker-block">
          <p className="references__ticker-title">{brandTickerTitle}</p>

          <div
            className={`references__ticker ${isDragging ? "is-dragging" : ""}`.trim()}
            ref={tickerRef}
            aria-label={brandTickerTitle}
            onMouseDown={(event) => startDrag(event.pageX)}
            onMouseMove={(event) => moveDrag(event.pageX)}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onTouchStart={(event) => startDrag(event.touches[0].pageX)}
            onTouchMove={(event) => moveDrag(event.touches[0].pageX)}
            onTouchEnd={stopDrag}
          >
            {loopedBrands.map((brand, index) => (
              <article
                key={`${brand.name}-${index}`}
                className="references__brand"
                style={{ "--brand-bg": brand.bgColor, "--brand-color": brand.textColor }}
                aria-label={brand.name}
              >
                <span className="references__brand-logo">
                  {brand.imageSrc ? (
                    <img
                      src={brand.imageSrc}
                      alt={`${brand.name} logosu`}
                      className="references__brand-logo-image"
                    />
                  ) : (
                    brand.logo
                  )}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
