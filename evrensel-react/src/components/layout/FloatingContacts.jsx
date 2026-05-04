import { useEffect, useMemo, useRef, useState } from "react"
import layoutData from "../../data/layoutData.json"
import { resolveImage } from "../../utils/imageResolver"

export default function FloatingContacts() {
  const { floatingContacts } = layoutData
  const socialIcons = useMemo(
    () =>
      floatingContacts.items.map((item) => ({
        ...item,
        logoSrc: resolveImage(item.logoPath),
      })),
    [floatingContacts.items]
  )
  const whatsappLogo = resolveImage(floatingContacts.whatsapp.logoPath)
  const [activeSocialIndex, setActiveSocialIndex] = useState(-1)
  const [hoveredSocialIndex, setHoveredSocialIndex] = useState(-1)
  const socialIndexRef = useRef(-1)
  const hoveredSocialRef = useRef(-1)
  const activeTimeoutRef = useRef(null)
  const hoverLeaveTimeoutRef = useRef(null)

  useEffect(() => {
    if (!socialIcons.length) return undefined

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
  }, [socialIcons])

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
      <a
        href={floatingContacts.whatsapp.href}
        className="floating-contacts__whatsapp"
        aria-label={floatingContacts.whatsapp.ariaLabel}
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsappLogo} alt="" loading="lazy" decoding="async" />
      </a>

      <div className="floating-contacts" aria-label={floatingContacts.ariaLabel}>
        {socialIcons.map((item, index) => (
          <div key={item.key} className="floating-contacts__item">
            <a
              className={`floating-contacts__icon floating-contacts__icon--${item.key} ${
                activeSocialIndex === index || hoveredSocialIndex === index ? "is-active" : ""
              }`.trim()}
              href={item.href}
              onMouseEnter={() => handleSocialEnter(index)}
              onMouseLeave={handleSocialLeave}
              aria-label={`${item.text} sayfasına git`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="floating-contacts__logo">
                <img
                  src={item.logoSrc}
                  alt=""
                  className="floating-contacts__logo-image"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="floating-contacts__content">
                <span className="floating-contacts__text">{floatingContacts.followText}</span>
                <span className="floating-contacts__handle">{item.handle}</span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
