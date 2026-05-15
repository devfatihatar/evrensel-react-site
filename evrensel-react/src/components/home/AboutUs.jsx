import homeAboutUsData from "../../data/homeAboutUsData.json"
import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"

const { title, description, descriptionSecondary, highlightTitle, highlightText, highlights, reasons } =
  homeAboutUsData

export default function AboutUs() {
  const { lang } = useLanguage()
  const t = (value) => translateText(value, lang)

  return (
    <section key={lang} className="about-us section reveal-on-scroll reveal-right">
      <div className="container about-us__inner">
        <div className="about-us__content">
          <div className="about-us__header">
            <h2>{t(title)}</h2>
            <p>{t(description)}</p>
            {descriptionSecondary ? <p>{t(descriptionSecondary)}</p> : null}
          </div>

          <article className="about-us__spotlight">
            <div className="about-us__spotlight-shell">
              <h3>{t(highlightTitle)}</h3>
              <p>{t(highlightText)}</p>

              <div className="about-us__spotlight-list" role="list" aria-label={t("Neden biz özetleri")}>
                {highlights.map((item) => (
                  <span key={item} className="about-us__spotlight-pill" role="listitem">
                    {t(item)}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="about-us__list" role="list" aria-label={t("Neden biz detayları")}>
            {reasons.map((reason, index) => (
              <article key={reason.title} className="about-us__item" role="listitem">
                <div className="about-us__item-line">
                  <span className="about-us__item-index">{String(index + 1).padStart(2, "0")}</span>
                  <div className="about-us__item-copy">
                    <h3>{t(reason.title)}</h3>
                    <p>{t(reason.text)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
