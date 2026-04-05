import { useEffect, useRef, useState } from "react"
import HomeSlider from "../components/home/HomeSlider"
import Hero from "../components/home/Hero"
import Services from "../components/home/Services"
import WhyUs from "../components/home/WhyUs"
import References from "../components/home/References"
import HomeBrands from "../components/home/HomeBrands"
import CTA from "../components/home/CTA"
import PageSeo from "../components/seo/PageSeo"
import seoData from "../data/seoData.json"
import wingsImage from "../assets/images/icons/pngwing.com.png"
import emojiImage from "../assets/images/icons/emoji.png"
import instagramLogo from "../assets/images/social-media/instagram.png"
import googleLogo from "../assets/images/social-media/google.png"
import facebookLogo from "../assets/images/social-media/facebook.png"

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

export default function Home() {
  const homeRef = useRef(null)
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
    const root = homeRef.current
    if (!root) return

    let rafId = 0

    const applyRocketProgress = () => {
      const whyUs = root.querySelector(".why-us")
      const services = root.querySelector(".services")
      const servicesFooter = root.querySelector(".services__footer")
      const footer = document.querySelector("footer")
      if (!whyUs) {
        rafId = 0
        return
      }

      const y = window.scrollY
      const whyTop = y + whyUs.getBoundingClientRect().top
      const vh = window.innerHeight
      const servicesTop = services ? y + services.getBoundingClientRect().top : whyTop - vh * 0.7
      const servicesFooterTop = servicesFooter
        ? y + servicesFooter.getBoundingClientRect().top
        : servicesTop + vh * 0.42
      const footerTop = footer ? y + footer.getBoundingClientRect().top : servicesFooterTop + vh * 1.2

      const rocketStart = vh * 0.22
      const rocketEnd = whyTop - vh * 0.15
      const rocketRaw = (y - rocketStart) / Math.max(rocketEnd - rocketStart, 1)
      const rocketProgress = Math.min(1, Math.max(0, rocketRaw))

      const rocket2DelayedStart = rocketEnd + vh * 0.08
      const rocket2Start = Math.max(servicesTop - vh * 0.96, rocket2DelayedStart)
      const rocket2MidA = Math.max(servicesTop - vh * 0.4, rocket2Start + vh * 0.34)
      const rocket2MidB = Math.max(servicesFooterTop - vh * 0.12, rocket2MidA + vh * 0.34)
      const rocket2End = Math.max(footerTop + vh * 0.08, rocket2MidB + vh * 0.36)

      const entryProgress = Math.min(
        1,
        Math.max(0, (y - rocket2Start) / Math.max(rocket2MidA - rocket2Start, 1))
      )
      const driftProgress = Math.min(
        1,
        Math.max(0, (y - rocket2MidA) / Math.max(rocket2MidB - rocket2MidA, 1))
      )
      const exitProgress = Math.min(
        1,
        Math.max(0, (y - rocket2MidB) / Math.max(rocket2End - rocket2MidB, 1))
      )

      let rocket2X = 18
      let rocket2Y = -12
      let rocket2Rotate = -10
      let rocket2Opacity = 0

      if (y < rocket2Start) {
        rocket2Opacity = 0
      } else if (y < rocket2MidA) {
        rocket2X = 18 + entryProgress * 10
        rocket2Y = -12 + entryProgress * 176
        rocket2Rotate = -10 + entryProgress * 8
        rocket2Opacity = Math.min(1, entryProgress * 1.4)
      } else if (y < rocket2MidB) {
        const zigzag = Math.sin(driftProgress * Math.PI * 2.4) * 24
        rocket2X = -34 + zigzag
        rocket2Y = 164 + driftProgress * 254
        rocket2Rotate = -2 + Math.sin(driftProgress * Math.PI * 1.6) * 10
        rocket2Opacity = 1
      } else {
        rocket2X = -30 + exitProgress * 344
        rocket2Y = 418 - exitProgress * 560
        rocket2Rotate = 10 - exitProgress * 36
        rocket2Opacity = Math.max(0, 1 - exitProgress * 1.15)
      }

      document.documentElement.style.setProperty("--rocket-progress", rocketProgress.toFixed(3))
      document.documentElement.style.setProperty("--rocket2-x", `${rocket2X.toFixed(2)}px`)
      document.documentElement.style.setProperty("--rocket2-y", `${rocket2Y.toFixed(2)}px`)
      document.documentElement.style.setProperty("--rocket2-rotate", `${rocket2Rotate.toFixed(2)}deg`)
      document.documentElement.style.setProperty("--rocket2-opacity", rocket2Opacity.toFixed(3))
      rafId = 0
    }

    const onScrollOrResize = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(applyRocketProgress)
    }

    applyRocketProgress()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)

    return () => {
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
      if (rafId) window.cancelAnimationFrame(rafId)
      document.documentElement.style.removeProperty("--rocket-progress")
      document.documentElement.style.removeProperty("--rocket2-x")
      document.documentElement.style.removeProperty("--rocket2-y")
      document.documentElement.style.removeProperty("--rocket2-rotate")
      document.documentElement.style.removeProperty("--rocket2-opacity")
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

  return (
    <>
      <PageSeo title={homeSeo.title} description={homeSeo.description} path={homeSeo.path} />

      <main className="home-page" ref={homeRef}>
        <HomeSlider />

        <Hero />

        <div className="home-page__rocket" aria-hidden="true">
          <img src={wingsImage} alt="" className="home-page__rocket-image" />
        </div>
        <div className="home-page__rocket home-page__rocket--second" aria-hidden="true">
          <img src={emojiImage} alt="" className="home-page__rocket-image" />
        </div>

        <Services />

        <WhyUs />

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

        <References />
        <HomeBrands />

        <CTA />
      </main>
    </>
  )
}

