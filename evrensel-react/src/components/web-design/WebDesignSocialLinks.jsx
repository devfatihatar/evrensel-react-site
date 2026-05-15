import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"

export default function WebDesignSocialLinks({
  socialIcons,
  activeSocialIndex,
  hoveredSocialIndex,
  followText,
  handleSocialClick,
  handleSocialEnter,
  handleSocialLeave,
}) {
  const { lang } = useLanguage()
  const t = (value) => translateText(value, lang)

  return (
    <div key={lang} className="web-design-page__social-floats" aria-label={t("Sosyal medya bağlantıları")}>
      {socialIcons.map((item, index) => (
        <div key={item.key} className="web-design-page__social-item">
          <a
            className={`web-design-page__social-icon web-design-page__social-icon--${item.key} ${activeSocialIndex === index || hoveredSocialIndex === index ? "is-active" : ""}`.trim()}
            href={item.href}
            onClick={(event) => handleSocialClick(event, item.href)}
            onMouseEnter={() => handleSocialEnter(index)}
            onMouseLeave={handleSocialLeave}
            aria-label={t(`${item.text} sayfasına git`)}
          >
            <span className="web-design-page__social-logo">
              <img
                src={item.logoSrc}
                alt=""
                className="web-design-page__social-logo-image"
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="web-design-page__social-content">
              <span className="web-design-page__social-text">{t(followText)}</span>
              <span className="web-design-page__social-handle">{item.handle}</span>
            </span>
          </a>
        </div>
      ))}
    </div>
  )
}
