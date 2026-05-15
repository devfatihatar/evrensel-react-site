import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"

export default function WebDesignMessage({ message }) {
  const { lang } = useLanguage()
  const t = (value) => translateText(value, lang)

  const sectionAriaLabel = t("Web tasarım bilgilendirme mesajı")
  const descriptionText = t(
    "Kurulumdan içerik yönetimine, güncellemelerden teknik bakıma kadar süreci tek noktadan yürütüyor; yayın sonrası tarafta da işlerinizi zorlaştıran ek maliyetler çıkarmıyoruz.",
  )
  const messageAriaLabel = t(
    "Web sitenizin içerik girmekten, güncellemelerden veya bakımından para almıyoruz.",
  )

  return (
    <section key={lang} className="web-design-message section reveal-on-scroll reveal-left" aria-label={sectionAriaLabel}>
      <div className="container">
        <div className="web-design-message__inner homepage-shared-shell">
          <div className="web-design-message__intro homepage-shared-header">
            <h2>{t(message.title)}</h2>
            <p className="web-design-message__description">{descriptionText}</p>
          </div>

          <div className="web-design-message__text" role="text" aria-label={messageAriaLabel}>
            <span className="web-design-message__static">{t(message.staticPrefix)}</span>
            <ul
              className="web-design-message__rotator"
              aria-live="polite"
              style={{ "--slide-count": message.rotatingWords.length }}
            >
              {message.rotatingWords.map((word, index) => (
                <li key={word} className="web-design-message__word" style={{ "--slide-index": index }}>
                  {t(word)}
                </li>
              ))}
            </ul>
            <span className="web-design-message__static">{t(message.staticSuffix)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
