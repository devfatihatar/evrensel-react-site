import { useEffect, useRef, useState } from "react"
import PageSeo from "../components/seo/PageSeo"
import WebDesignHero from "../components/web-design/WebDesignHero"
import WebDesignMessage from "../components/web-design/WebDesignMessage"
import WebDesignShowcase from "../components/web-design/WebDesignShowcase"
import WebDesignProcess from "../components/web-design/WebDesignProcess"
import WebDesignDeliverables from "../components/web-design/WebDesignDeliverables"
import WebDesignSocialLinks from "../components/web-design/WebDesignSocialLinks"
import seoData from "../data/seoData.json"
import webDesignData from "../data/webDesignData.json"
import { getBreadcrumbSchema, getServiceSchema } from "../seo/schema"
import { resolveImage } from "../utils/imageResolver"

const webDesignSeo = seoData.webDesign
const {
  hero,
  servicesSection,
  services,
  deliverablesSection,
  deliverables,
  processSection,
  processSteps,
  assets,
  message,
  socialLinks,
} = webDesignData
const rotatingWords = message.rotatingWords
const ROTATOR_TRANSITION_MS = 560
const ROTATOR_INTERVAL_MS = 2400
const socialIcons = socialLinks.items.map((item) => ({
  ...item,
  logoSrc: resolveImage(assets.socialIconPaths[item.logoKey]),
}))
const processBoardSteps = [
  ...processSteps,
  {
    step: "04",
    title: "Yayin ve Destek",
    text: "Yayina alma, son kontroller ve sonraki surecte ihtiyac duyulan teknik destegi planli sekilde surduruyoruz.",
  },
]
const heroHighlights = [
  {
    imageSrc: resolveImage(assets.highlightImagePaths.lighthouse),
    title: "60+",
    text: "Performans skorlari",
  },
  {
    imageSrc: resolveImage(assets.highlightImagePaths.seo),
    title: "SEO",
    text: "SEO uyumlu altyapi",
  },
  {
    imageSrc: resolveImage(assets.highlightImagePaths.devices),
    title: "Responsive Tasarım",
    text: "Tum cihazlarla uyumlu",
  },
]

export default function WebDesign() {
  const webDesignRef = useRef(null)
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const [isRotatorTransitionEnabled, setIsRotatorTransitionEnabled] = useState(true)
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
    if (activeWordIndex === rotatingWords.length) {
      const resetTimer = window.setTimeout(() => {
        setIsRotatorTransitionEnabled(false)
        setActiveWordIndex(0)

        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setIsRotatorTransitionEnabled(true)
          })
        })
      }, ROTATOR_TRANSITION_MS)

      return () => window.clearTimeout(resetTimer)
    }

    const timer = window.setTimeout(() => {
      setIsRotatorTransitionEnabled(true)
      setActiveWordIndex((current) => current + 1)
    }, ROTATOR_INTERVAL_MS)

    return () => window.clearTimeout(timer)
  }, [activeWordIndex])

  useEffect(() => {
    const root = webDesignRef.current
    if (!root) return

    const sections = Array.from(root.querySelectorAll(":scope > section"))
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

    applySectionFocus()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)

    return () => {
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

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Web Tasarım", path: webDesignSeo.path },
  ])

  const serviceSchema = getServiceSchema({
    name: "Web Tasarım ve Geliştirme Hizmetleri",
    description: webDesignSeo.description,
    path: webDesignSeo.path,
  })

  return (
    <>
      <PageSeo
        title={webDesignSeo.title}
        description={webDesignSeo.description}
        path={webDesignSeo.path}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <main className="web-design-page page" ref={webDesignRef}>
        <WebDesignHero
          hero={hero}
          heroHighlights={heroHighlights}
          webSlideMainImage={resolveImage(assets.heroImagePath)}
        />
        <WebDesignMessage
          message={message}
          isRotatorTransitionEnabled={isRotatorTransitionEnabled}
          activeWordIndex={activeWordIndex}
          rotatingWords={rotatingWords}
        />
        <WebDesignShowcase
          servicesSection={servicesSection}
          services={services}
          webArchitectureImage={resolveImage(assets.showcaseImagePath)}
        />
        <WebDesignProcess processSection={processSection} processBoardSteps={processBoardSteps} />
        <WebDesignDeliverables
          deliverablesSection={deliverablesSection}
          deliverables={deliverables}
        />
        <WebDesignSocialLinks
          socialIcons={socialIcons}
          activeSocialIndex={activeSocialIndex}
          hoveredSocialIndex={hoveredSocialIndex}
          followText={socialLinks.followText}
          handleSocialClick={handleSocialClick}
          handleSocialEnter={handleSocialEnter}
          handleSocialLeave={handleSocialLeave}
        />
      </main>
    </>
  )
}
