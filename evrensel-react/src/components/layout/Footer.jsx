import { Link } from "react-router-dom"
import layoutData from "../../data/layoutData.json"
import contactData from "../../data/contactData.json"
import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"

export default function Footer() {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()
  const { footer } = layoutData
  const t = (value) => translateText(value, lang)
  const addressCard = contactData.contactCards.find((card) => card.title === "Adres")
  const address = addressCard?.value ?? footer.addressFallback
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=18&output=embed`
  const mapAriaLabel = `${address} ${t("harita konumu")}`
  const mapTitle = t("Evrensel Bilişim adres haritası")

  return (
    <footer key={lang} className="footer">
      <div className="container footer__inner">
        <section className="footer__column footer__brand">
          <h3>{t(footer.brand.title)}</h3>
          <p>{t(footer.brand.text)}</p>
          <nav className="footer__services" aria-label={t(footer.servicesAriaLabel)}>
            {footer.serviceLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                {t(link.label)}
              </Link>
            ))}
          </nav>
        </section>

        <section className="footer__column">
          <h4>{t(footer.contactTitle)}</h4>
          <ul className="footer__list">
            {footer.contactItems.map((item) => (
              <li key={item.label}>
                {item.href ? <a href={item.href}>{t(item.label)}</a> : t(item.label)}
              </li>
            ))}
          </ul>
          <Link className="footer__contact-button" to={footer.contactButton.href}>
            {t(footer.contactButton.label)}
          </Link>
        </section>

        <section className="footer__column">
          <h4>{t(footer.addressTitle)}</h4>
          <p className="footer__address">{address}</p>
          <div
            className="footer__map"
            aria-label={mapAriaLabel}
          >
            <iframe
              title={mapTitle}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            {t(footer.copyrightPrefix)} {year} | {t(footer.copyrightSuffix)}
          </p>
        </div>
      </div>
    </footer>
  )
}
