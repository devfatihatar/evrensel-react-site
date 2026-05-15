import { useMemo, useRef, useState } from "react"
import homeReferencesData from "../../data/homeReferencesData.json"
import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"

const { brandTickerTitle, brandLogos } = homeReferencesData
const brandImages = import.meta.glob("../../assets/images/brands/*", {
  eager: true,
  import: "default",
})

export default function HomeBrands() {
  const { lang } = useLanguage()
  const t = (value) => translateText(value, lang)
  const tickerRef = useRef(null)
  const isInteractingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartScrollRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

  const resolvedBrands = useMemo(
    () =>
      brandLogos.map((brand) => ({
        ...brand,
        imageSrc: brand.imagePath ? brandImages[`../../assets/images/${brand.imagePath}`] : null,
      })),
    []
  )

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
    <section key={lang} className="home-brands section reveal-on-scroll reveal-left">
      <div className="container">
        <div className="references__ticker-block">
          <p className="references__ticker-title">{t(brandTickerTitle)}</p>

          <div
            className={`references__ticker ${isDragging ? "is-dragging" : ""}`.trim()}
            ref={tickerRef}
            aria-label={t(brandTickerTitle)}
            onMouseDown={(event) => startDrag(event.pageX)}
            onMouseMove={(event) => moveDrag(event.pageX)}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onTouchStart={(event) => startDrag(event.touches[0].pageX)}
            onTouchMove={(event) => moveDrag(event.touches[0].pageX)}
            onTouchEnd={stopDrag}
          >
            {resolvedBrands.map((brand, index) => (
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
                      alt={`${brand.name} ${t("logosu")}`}
                      className="references__brand-logo-image"
                      loading="lazy"
                      decoding="async"
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
