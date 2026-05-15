import { useEffect, useRef, useState } from "react"
import Hero from "../components/home/Hero"
import AboutUs from "../components/home/AboutUs"
import ReferenceShowcase from "../components/home/ReferenceShowcase"
import HomeBrands from "../components/home/HomeBrands"
import PageSeo from "../components/seo/PageSeo"
import seoData from "../data/seoData.json"
import homeSliderData from "../data/homeSliderData.json"
import { resolveImage } from "../utils/imageResolver"

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

  useEffect(() => {
    document.body.classList.toggle("home-theme-blue", isBlueTheme)

    return () => {
      document.body.classList.remove("home-theme-blue")
    }
  }, [isBlueTheme])

  useEffect(() => {
    const slideTimer = window.setTimeout(() => {
      setActiveSlideIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 4200)

    return () => {
      window.clearTimeout(slideTimer)
    }
  }, [activeSlideIndex, slides.length])

  useEffect(() => {
    const root = homeRef.current
    if (!root) return

    const items = root.querySelectorAll(".reveal-on-scroll")

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

    items.forEach((item) => revealObserver.observe(item))

    return () => {
      revealObserver.disconnect()
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
            <div className="home-slider__frame">
              <img
                src={resolveImage(homeSliderData.backgroundImagePath)}
                alt={homeSliderData.backgroundImageAlt}
                className="home-slider__image"
                loading="eager"
                decoding="async"
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
                      <span>{item.label}</span>
                      <small>{item.description}</small>
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





