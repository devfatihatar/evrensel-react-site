import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"

export default function WebDesignProcess({ processSection, processBoardSteps }) {
  const { lang } = useLanguage()
  const t = (value) => translateText(value, lang)

  return (
    <section
      key={lang}
      className="web-design-process section reveal-on-scroll reveal-left"
      aria-label={t("Web tasarım süreç alanı")}
    >
      <div className="container web-design-process__inner">
        <div className="web-design-process__shell homepage-shared-shell">
          <div className="web-design-process__header homepage-shared-header">
            <p className="web-design-process__eyebrow homepage-shared-eyebrow">{t(processSection.eyebrow)}</p>
            <h2>{t(processSection.title)}</h2>
            <p>{t(processSection.subtitle)}</p>
          </div>

          <div className="web-design-process__board" aria-label={t("Web tasarım süreç panosu")}>
            {processBoardSteps.map((item, index) => (
              <article
                key={item.step}
                className={`web-design-process__panel web-design-process__panel--${index + 1} homepage-shared-card`}
              >
                <span className="web-design-process__step">{item.step}</span>
                <h3>{t(item.title)}</h3>
                <p>{t(item.text)}</p>
                {index < processBoardSteps.length - 1 ? (
                  <span className="web-design-process__arrow" aria-hidden="true">
                    {index === 1 ? "↓" : "→"}
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
