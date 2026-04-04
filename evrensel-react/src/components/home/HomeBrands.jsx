import { useEffect, useMemo, useRef, useState } from "react"
import homeReferencesData from "../../data/homeReferencesData.json"

const { brandTickerTitle, brandLogos } = homeReferencesData

export default function HomeBrands() {
  const tickerRef = useRef(null)
  const isInteractingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartScrollRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

  const loopedBrands = useMemo(() => [...brandLogos, ...brandLogos, ...brandLogos], [brandLogos])

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker || !brandLogos.length) return

    const getBlockWidth = () => ticker.scrollWidth / 3

    const normalizeScroll = () => {
      const blockWidth = getBlockWidth()
      if (!blockWidth) return

      while (ticker.scrollLeft < blockWidth) ticker.scrollLeft += blockWidth
      while (ticker.scrollLeft >= blockWidth * 2) ticker.scrollLeft -= blockWidth
    }

    const blockWidth = getBlockWidth()
    if (blockWidth) ticker.scrollLeft = blockWidth + 1

    const onScroll = () => normalizeScroll()
    ticker.addEventListener("scroll", onScroll, { passive: true })

    const timer = window.setInterval(() => {
      if (isInteractingRef.current) return
      ticker.scrollBy({ left: 150, behavior: "smooth" })
    }, 3000)

    return () => {
      ticker.removeEventListener("scroll", onScroll)
      window.clearInterval(timer)
    }
  }, [])

  const startDrag = (pageX) => {
    const ticker = tickerRef.current
    if (!ticker) return
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
                <span className="references__brand-logo">{brand.logo}</span>
                <small>{brand.name}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
