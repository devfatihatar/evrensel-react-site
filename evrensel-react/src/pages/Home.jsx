import { useEffect, useRef } from "react"
import HomeSlider from "../components/home/HomeSlider"
import Hero from "../components/home/Hero"
import Services from "../components/home/Services"
import WhyUs from "../components/home/WhyUs"
import References from "../components/home/References"
import HomeBrands from "../components/home/HomeBrands"
import CTA from "../components/home/CTA"
import PageSeo from "../components/seo/PageSeo"
import seoData from "../data/seoData.json"

const homeSeo = seoData.home
const socialIcons = [
  {
    key: "instagram",
    text: "Instagram",
    logo: "IG",
    href: "https://www.instagram.com",
    scatterX: "-13vw",
    scatterY: "10vh",
  },
  {
    key: "google",
    text: "Google",
    logo: "G",
    href: "https://www.google.com/maps",
    scatterX: "-24vw",
    scatterY: "3vh",
  },
  {
    key: "facebook",
    text: "Facebook",
    logo: "f",
    href: "https://www.facebook.com",
    scatterX: "-16vw",
    scatterY: "17vh",
  },
]

export default function Home() {
  const homeRef = useRef(null)
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

    const applyFloatProgress = () => {
      const whyUs = root.querySelector(".why-us")
      const references = root.querySelector(".references")
      const footer = document.querySelector("footer")
      if (!whyUs || !references) {
        rafId = 0
        return
      }

      const y = window.scrollY
      const whyTop = y + whyUs.getBoundingClientRect().top
      const referencesTop = y + references.getBoundingClientRect().top
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight

      const rocketStart = window.innerHeight * 0.22
      const rocketEnd = whyTop - window.innerHeight * 0.35
      const rocketRaw = (y - rocketStart) / Math.max(rocketEnd - rocketStart, 1)
      const rocketProgress = Math.min(1, Math.max(0, rocketRaw))

      const socialStart = whyTop - window.innerHeight * 0.9
      const socialMid = whyTop + whyUs.offsetHeight * 0.78
      const footerTop = footer ? y + footer.getBoundingClientRect().top : referencesTop + references.offsetHeight
      const footerHeight = footer ? footer.getBoundingClientRect().height : window.innerHeight * 0.6
      const socialExitStart = footerTop - window.innerHeight * 0.85
      const socialEnd = Math.min(maxScrollY, footerTop + footerHeight * 0.45)

      let socialEnter = 0
      let socialExit = 0

      if (y > socialStart && y < socialMid) {
        socialEnter = (y - socialStart) / Math.max(socialMid - socialStart, 1)
      } else if (y >= socialMid) {
        socialEnter = 1
        socialExit = (y - socialExitStart) / Math.max(socialEnd - socialExitStart, 1)
      }

      socialEnter = Math.min(1, Math.max(0, socialEnter))
      socialExit = Math.min(1, Math.max(0, socialExit))
      const socialScatter = Math.min(1, Math.max(0, socialEnter * (1 - socialExit * 0.45)))

      document.documentElement.style.setProperty("--rocket-progress", rocketProgress.toFixed(3))
      document.documentElement.style.setProperty("--social-enter", socialEnter.toFixed(3))
      document.documentElement.style.setProperty("--social-exit", socialExit.toFixed(3))
      document.documentElement.style.setProperty("--social-scatter", socialScatter.toFixed(3))
      rafId = 0
    }

    const onScrollOrResize = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(applyFloatProgress)
    }

    applyFloatProgress()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)

    return () => {
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
      if (rafId) window.cancelAnimationFrame(rafId)
      document.documentElement.style.removeProperty("--rocket-progress")
      document.documentElement.style.removeProperty("--social-enter")
      document.documentElement.style.removeProperty("--social-exit")
      document.documentElement.style.removeProperty("--social-scatter")
    }
  }, [])

  return (
    <>
      <PageSeo title={homeSeo.title} description={homeSeo.description} path={homeSeo.path} />

      <main className="home-page" ref={homeRef}>
        <HomeSlider />

        <Hero />

        <div className="home-page__rocket" aria-hidden="true">
          <span className="home-page__rocket-title">ROCKET</span>
          <small>Placeholder</small>
        </div>

        <Services />

        <WhyUs />

        <div className="home-page__social-floats" aria-label="Sosyal medya bağlantıları">
          {socialIcons.map((item) => (
            <a
              key={item.key}
              className={`home-page__social-icon home-page__social-icon--${item.key}`}
              href={item.href}
              onClick={(event) => handleSocialClick(event, item.href)}
              aria-label={`${item.text} sayfasına git`}
              style={{
                "--scatter-x": item.scatterX,
                "--scatter-y": item.scatterY,
              }}
            >
              <span className="home-page__social-logo">{item.logo}</span>
              <span className="home-page__social-text">{item.text}</span>
            </a>
          ))}
        </div>

        <References />
        <HomeBrands />

        <CTA />
      </main>
    </>
  )
}
