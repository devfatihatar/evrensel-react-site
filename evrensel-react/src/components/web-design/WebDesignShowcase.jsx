import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"

export default function WebDesignShowcase({
  servicesSection,
  services,
  webArchitectureImage,
}) {
  const { lang } = useLanguage()
  const t = (value) => translateText(value, lang)

  return (
    <section
      key={lang}
      className="web-design-showcase section reveal-on-scroll reveal-right"
      aria-label={t("Web tasarım liste alanı")}
    >
      <div className="container web-design-showcase__inner">
        <div className="web-design-showcase__shell homepage-shared-shell">
          <div className="web-design-showcase__grid">
            <div className="web-design-showcase__media homepage-shared-media">
              <img
                src={webArchitectureImage}
                alt={t("Web mimarisi görseli")}
                className="web-design-showcase__image"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="web-design-showcase__content homepage-shared-header">
              <p className="web-design-showcase__eyebrow homepage-shared-eyebrow">{t(servicesSection.eyebrow)}</p>
              <h2>{t(servicesSection.title)}</h2>
              <p>{t(servicesSection.subtitle)}</p>
            </div>
          </div>

          <ul className="web-design-showcase__list" aria-label={t("Web tasarım liste alanı")}>
            {services.map((item) => (
              <li key={item.title} className="homepage-shared-card">
                <strong>{t(item.title)}</strong>
                <span>{t(item.text)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
