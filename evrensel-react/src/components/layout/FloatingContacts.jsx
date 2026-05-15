import { useMemo, useState } from "react"
import layoutData from "../../data/layoutData.json"
import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"
import { resolveImage } from "../../utils/imageResolver"

export default function FloatingContacts() {
  const { lang } = useLanguage()
  const { floatingContacts } = layoutData
  const t = (value) => translateText(value, lang)
  const socialIcons = useMemo(
    () =>
      floatingContacts.items.map((item) => ({
        ...item,
        logoSrc: resolveImage(item.logoPath),
      })),
    [floatingContacts.items]
  )
  const whatsappLogo = resolveImage(floatingContacts.whatsapp.logoPath)
  const [hoveredSocialIndex, setHoveredSocialIndex] = useState(-1)

  const handleSocialEnter = (index) => {
    setHoveredSocialIndex(index)
  }

  const handleSocialLeave = () => {
    setHoveredSocialIndex(-1)
  }

  return (
    <>
      <a
        key={`whatsapp-${lang}`}
        href={floatingContacts.whatsapp.href}
        className="floating-contacts__whatsapp"
        aria-label={t(floatingContacts.whatsapp.ariaLabel)}
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsappLogo} alt="" loading="lazy" decoding="async" />
      </a>

      <div key={`social-${lang}`} className="floating-contacts" aria-label={t(floatingContacts.ariaLabel)}>
        {socialIcons.map((item, index) => (
          <div key={item.key} className="floating-contacts__item">
            <a
              className={`floating-contacts__icon floating-contacts__icon--${item.key} ${
                hoveredSocialIndex === index ? "is-active" : ""
              }`.trim()}
              href={item.href}
              onMouseEnter={() => handleSocialEnter(index)}
              onMouseLeave={handleSocialLeave}
              aria-label={t(`${item.text} sayfasına git`)}
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
                <span className="floating-contacts__text">{t(floatingContacts.followText)}</span>
                <span className="floating-contacts__handle">{item.handle}</span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
