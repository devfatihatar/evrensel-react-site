import { useEffect, useRef, useState } from "react"
import Hero from "../components/home/Hero"
import AboutUs from "../components/home/AboutUs"
import ReferenceShowcase from "../components/home/ReferenceShowcase"
import HomeBrands from "../components/home/HomeBrands"
import PageSeo from "../components/seo/PageSeo"
import seoData from "../data/seoData.json"
import homeSliderData from "../data/homeSliderData.json"
import { resolveImage } from "../utils/imageResolver"

const HOME_SLIDE_DURATION_MS = 6300
const homeSeo = seoData.home
const heroHighlights = homeSliderData.highlights.map((item) => ({
  ...item,
  imageSrc: resolveImage(item.imagePath),
}))

export default function Home() {
  const slides = homeSliderData.slides
  const homeRef = useRef(null)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [isBlueTheme, setIsBlueTheme] = useState(false)
  const [highlightCounts, setHighlightCounts] = useState(() =>
    Object.fromEntries(heroHighlights.map((item) => [item.key, 0]))
  )

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlideIndex((current) => (current + 1) % homeSliderData.slides.length)
    }, HOME_SLIDE_DURATION_MS)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle("home-theme-blue", isBlueTheme)

    return () => {
      document.body.classList.remove("home-theme-blue")
    }
  }, [isBlueTheme])

  useEffect(() => {
    let rafId = 0
    const duration = 2200
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration)
      const eased = 1 - Math.pow(1 - progress, 4)

      setHighlightCounts(
        Object.fromEntries(
          heroHighlights.map((item) => [item.key, Math.round(item.value * eased)])
        )
      )

      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick)
      }
    }

    rafId = window.requestAnimationFrame(tick)

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    const root = homeRef.current
    if (!root) return

    const items = root.querySelectorAll(".reveal-on-scroll")
    const sections = Array.from(root.querySelectorAll(":scope > section"))

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    )

    let rafId = 0

    const applySectionFocus = () => {
      if (!sections.length) return

      const targetY = window.innerHeight * 0.52
      let active = sections[0]
      let minDist = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const centerY = rect.top + rect.height / 2
        const dist = Math.abs(centerY - targetY)
        if (dist < minDist) {
          minDist = dist
          active = section
        }
      })

      root.classList.add("has-section-focus")
      sections.forEach((section) => {
        const isActive = section === active
        section.classList.toggle("is-active-section", isActive)
        section.classList.toggle("is-dim-section", !isActive)
      })
    }

    const onScrollOrResize = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        applySectionFocus()
        rafId = 0
      })
    }

    items.forEach((item) => revealObserver.observe(item))
    applySectionFocus()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)

    return () => {
      revealObserver.disconnect()
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  const previousSlide = slides[(activeSlideIndex - 1 + slides.length) % slides.length]
  const currentSlide = slides[activeSlideIndex]
  const nextSlide = slides[(activeSlideIndex + 1) % slides.length]
  const themeToggle = homeSliderData.themeToggle

  return (
    <>
      <PageSeo title={homeSeo.title} description={homeSeo.description} path={homeSeo.path} />

      <main
        className={`home-page ${isBlueTheme ? "home-page--blue-theme" : ""}`.trim()}
        ref={homeRef}
      >
        <button
          type="button"
          className="home-page__theme-toggle"
          onClick={() => setIsBlueTheme((current) => !current)}
          aria-label={themeToggle.ariaLabel}
        >
          <span className="home-page__theme-toggle-label">{themeToggle.label}</span>
          <span className="home-page__theme-toggle-value">
            {isBlueTheme ? themeToggle.blueLabel : themeToggle.redLabel}
          </span>
        </button>

        <section className="home-slider section reveal-on-scroll reveal-right">
          <div className="container">
            <div
              className="home-slider__frame"
              style={{ "--home-slider-duration": `${HOME_SLIDE_DURATION_MS}ms` }}
            >
              <img
                src={resolveImage(homeSliderData.backgroundImagePath)}
                alt={homeSliderData.backgroundImageAlt}
                className="home-slider__image"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="home-slider__slide is-active" key={currentSlide.title}>
                <div className="home-slider__overlay home-slider__overlay-stack">
                  <article className="home-slider__copy home-slider__copy--prev" aria-hidden="true">
                    <h2>{previousSlide.title}</h2>
                    <p>{previousSlide.text}</p>
                  </article>
                  <article className="home-slider__copy home-slider__copy--current">
                    <h2>{currentSlide.title}</h2>
                    <p>{currentSlide.text}</p>
                  </article>
                  <article className="home-slider__copy home-slider__copy--next" aria-hidden="true">
                    <h2>{nextSlide.title}</h2>
                    <p>{nextSlide.text}</p>
                  </article>
                </div>
              </div>
              <div className="home-slider__dots">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    className={`home-slider__dot ${index === activeSlideIndex ? "is-active" : ""}`.trim()}
                    onClick={() => setActiveSlideIndex(index)}
                    type="button"
                    aria-label={`${index + 1}. ${homeSliderData.dotAriaSuffix}`}
                  />
                ))}
              </div>
              <div className="home-slider__highlights" aria-hidden="true">
                {heroHighlights.map((item) => (
                  <div
                    key={item.key}
                    className={`home-page__rocket ${item.modifier}`.trim()}
                  >
                    <div className="home-page__rocket-visual">
                      <img
                        src={item.imageSrc}
                        alt=""
                        className="home-page__rocket-image"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="home-page__rocket-copy">
                      <strong>{`${highlightCounts[item.key] ?? 0}${item.suffix ?? ""}`}</strong>
                      <span>{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Hero />
        <AboutUs />
        <ReferenceShowcase />
        <HomeBrands />
      </main>
    </>
  )
}





