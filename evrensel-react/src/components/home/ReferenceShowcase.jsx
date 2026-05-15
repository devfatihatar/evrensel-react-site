import homeReferenceShowcaseData from "../../data/homeReferenceShowcaseData.json"
import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"
import { resolveImage } from "../../utils/imageResolver"

const { title, description, previews } = homeReferenceShowcaseData

export default function ReferenceShowcase() {
  const { lang } = useLanguage()
  const t = (value) => translateText(value, lang)

  return (
    <section key={lang} className="reference-showcase section reveal-on-scroll reveal-right">
      <div className="container reference-showcase__inner">
        <div className="reference-showcase__header">
          <h2>{t(title)}</h2>
          <p>{t(description)}</p>
        </div>

        <div className="reference-showcase__previews" aria-label={t("Referans görselleri")}>
          {previews.map((item) => (
            <figure key={item.name} className="reference-showcase__preview-card">
              <div className="reference-showcase__preview" aria-hidden="true">
                <img
                  src={resolveImage(item.imagePath)}
                  alt={`${item.name} ${t("referans görseli")}`}
                  className="reference-showcase__preview-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="reference-showcase__preview-name">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
