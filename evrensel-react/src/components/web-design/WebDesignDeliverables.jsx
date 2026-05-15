import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"

export default function WebDesignDeliverables({ deliverablesSection, deliverables }) {
  const { lang } = useLanguage()
  const t = (value) => translateText(value, lang)

  return (
    <section
      key={lang}
      className="web-design-deliverables section reveal-on-scroll reveal-right"
      aria-label={t("Web tasarım teslim kapsamı")}
    >
      <div className="container web-design-deliverables__inner">
        <div className="web-design-deliverables__shell homepage-shared-shell">
          <div className="web-design-deliverables__header homepage-shared-header">
            <p className="web-design-deliverables__eyebrow homepage-shared-eyebrow">{t(deliverablesSection.eyebrow)}</p>
            <h2>{t(deliverablesSection.title)}</h2>
            <p>{t(deliverablesSection.subtitle)}</p>
          </div>

          <ul className="web-design-deliverables__grid" aria-label={t(deliverablesSection.listAriaLabel)}>
            {deliverables.map((item, index) => (
              <li key={item} className="web-design-deliverables__card homepage-shared-card">
                <div className="web-design-deliverables__card-top">
                  <span className="web-design-deliverables__icon" aria-hidden="true">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="web-design-deliverables__tag">{t(deliverablesSection.itemTag)}</span>
                </div>
                <p>{t(item)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
