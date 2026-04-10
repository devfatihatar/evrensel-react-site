import { useEffect, useRef, useState } from "react"
import Hero from "../components/home/Hero"
import AboutUs from "../components/home/AboutUs"
import ReferenceShowcase from "../components/home/ReferenceShowcase"
import HomeBrands from "../components/home/HomeBrands"
import PageSeo from "../components/seo/PageSeo"
import seoData from "../data/seoData.json"
import homeSliderData from "../data/homeSliderData.json"
import homepageImage from "../assets/images/homepage.jpg"
import homepageWebIcon from "../assets/images/sliders/homepagewebicon.png"
import homepageSocialIcon from "../assets/images/sliders/homepagesocialicon.png"
import homepageSeoIcon from "../assets/images/sliders/homepageseoicon.png"
import instagramLogo from "../assets/images/social-media/instagram.png"
import googleLogo from "../assets/images/social-media/google.png"
import facebookLogo from "../assets/images/social-media/facebook.png"

const HOME_SLIDE_DURATION_MS = 6300
const homeSeo = seoData.home
const socialIcons = [
  {
    key: "instagram",
    text: "Instagram",
    handle: "@evrenselbilisim",
    logoSrc: instagramLogo,
    href: "https://www.instagram.com",
  },
  {
    key: "google",
    text: "Google",
    handle: "google.com/maps",
    logoSrc: googleLogo,
    href: "https://www.google.com/maps",
  },
  {
    key: "facebook",
    text: "Facebook",
    handle: "/evrenselbilisim",
    logoSrc: facebookLogo,
    href: "https://www.facebook.com",
  },
]
const heroHighlights = [
  {
    key: "web",
    imageSrc: homepageWebIcon,
    value: 100,
    suffix: "+",
    label: "Web Sitesi",
    modifier: "home-page__rocket--first",
  },
  {
    key: "social",
    imageSrc: homepageSocialIcon,
    value: 250,
    suffix: "+",
    label: "Sosyal Medya Tasarimi",
    modifier: "home-page__rocket--second",
  },
  {
    key: "support",
    imageSrc: homepageSeoIcon,
    value: 50,
    suffix: "+",
    label: "SEO Yonetimi",
    modifier: "home-page__rocket--third",
  },
]

export default function Home() {
  const slides = homeSliderData.slides
  const homeRef = useRef(null)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [isBlueTheme, setIsBlueTheme] = useState(false)
  const [highlightCounts, setHighlightCounts] = useState(() =>
    Object.fromEntries(heroHighlights.map((item) => [item.key, 0]))
  )
  const [activeSocialIndex, setActiveSocialIndex] = useState(-1)
  const [hoveredSocialIndex, setHoveredSocialIndex] = useState(-1)
  const socialIndexRef = useRef(-1)
  const hoveredSocialRef = useRef(-1)
  const activeTimeoutRef = useRef(null)
  const hoverLeaveTimeoutRef = useRef(null)

  const handleSocialClick = (event, href) => {
    event.preventDefault()
    event.stopPropagation()
    window.location.assign(href)
  }

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

  useEffect(() => {
    if (!socialIcons.length) return

    const visibleDurationMs = 5000
    const cycleDurationMs = 7600

    const runCycle = () => {
      if (hoveredSocialRef.current >= 0) return
      socialIndexRef.current = (socialIndexRef.current + 1) % socialIcons.length
      setActiveSocialIndex(socialIndexRef.current)

      if (activeTimeoutRef.current) window.clearTimeout(activeTimeoutRef.current)
      activeTimeoutRef.current = window.setTimeout(() => {
        if (hoveredSocialRef.current < 0) setActiveSocialIndex(-1)
      }, visibleDurationMs)
    }

    runCycle()
    const cycleTimer = window.setInterval(runCycle, cycleDurationMs)

    return () => {
      window.clearInterval(cycleTimer)
      if (activeTimeoutRef.current) window.clearTimeout(activeTimeoutRef.current)
      if (hoverLeaveTimeoutRef.current) window.clearTimeout(hoverLeaveTimeoutRef.current)
    }
  }, [])

  const openNextSocialCard = () => {
    socialIndexRef.current = (socialIndexRef.current + 1) % socialIcons.length
    setActiveSocialIndex(socialIndexRef.current)

    if (activeTimeoutRef.current) window.clearTimeout(activeTimeoutRef.current)
    activeTimeoutRef.current = window.setTimeout(() => {
      if (hoveredSocialRef.current < 0) setActiveSocialIndex(-1)
    }, 5000)
  }

  const handleSocialEnter = (index) => {
    if (hoverLeaveTimeoutRef.current) {
      window.clearTimeout(hoverLeaveTimeoutRef.current)
      hoverLeaveTimeoutRef.current = null
    }
    hoveredSocialRef.current = index
    setHoveredSocialIndex(index)
    setActiveSocialIndex(-1)
    if (activeTimeoutRef.current) window.clearTimeout(activeTimeoutRef.current)
  }

  const handleSocialLeave = () => {
    hoverLeaveTimeoutRef.current = window.setTimeout(() => {
      hoveredSocialRef.current = -1
      setHoveredSocialIndex(-1)
      openNextSocialCard()
    }, 120)
  }

  const previousSlide = slides[(activeSlideIndex - 1 + slides.length) % slides.length]
  const currentSlide = slides[activeSlideIndex]
  const nextSlide = slides[(activeSlideIndex + 1) % slides.length]

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
          aria-label="Anasayfa renk temasını değiştir"
        >
          <span className="home-page__theme-toggle-label">Tema</span>
          <span className="home-page__theme-toggle-value">
            {isBlueTheme ? "Mavi" : "Kirmizi"}
          </span>
        </button>

        <section className="home-slider section reveal-on-scroll reveal-right">
          <div className="container">
            <div
              className="home-slider__frame"
              style={{ "--home-slider-duration": `${HOME_SLIDE_DURATION_MS}ms` }}
            >
              <img
                src={homepageImage}
                alt="Evrensel Bilisim anasayfa gorseli"
                className="home-slider__image"
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
                      <img src={item.imageSrc} alt="" className="home-page__rocket-image" />
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

        <div className="home-page__social-floats" aria-label="Sosyal medya bağlantıları">
          {socialIcons.map((item, index) => (
            <div key={item.key} className="home-page__social-item">
              <a
                className={`home-page__social-icon home-page__social-icon--${item.key} ${activeSocialIndex === index || hoveredSocialIndex === index ? "is-active" : ""}`.trim()}
                href={item.href}
                onClick={(event) => handleSocialClick(event, item.href)}
                onMouseEnter={() => handleSocialEnter(index)}
                onMouseLeave={handleSocialLeave}
                aria-label={`${item.text} sayfasına git`}
              >
                <span className="home-page__social-logo">
                  <img src={item.logoSrc} alt="" className="home-page__social-logo-image" />
                </span>
                <span className="home-page__social-content">
                  <span className="home-page__social-text">Bizi Takip Et</span>
                  <span className="home-page__social-handle">{item.handle}</span>
                </span>
              </a>
            </div>
          ))}
        </div>
        <HomeBrands />
      </main>
    </>
  )
}





