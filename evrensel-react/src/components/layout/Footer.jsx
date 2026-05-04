import { Link } from "react-router-dom"
import layoutData from "../../data/layoutData.json"
import contactData from "../../data/contactData.json"

export default function Footer() {
  const year = new Date().getFullYear()
  const { footer } = layoutData
  const addressCard = contactData.contactCards.find((card) => card.title === "Adres")
  const address = addressCard?.value ?? footer.addressFallback
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <section className="footer__column footer__brand">
          <h3>{footer.brand.title}</h3>
          <p>{footer.brand.text}</p>
          <nav className="footer__services" aria-label={footer.servicesAriaLabel}>
            {footer.serviceLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </section>

        <section className="footer__column">
          <h4>{footer.contactTitle}</h4>
          <ul className="footer__list">
            {footer.contactItems.map((item) => (
              <li key={item.label}>
                {item.href ? <a href={item.href}>{item.label}</a> : item.label}
              </li>
            ))}
          </ul>
          <Link className="footer__contact-button" to={footer.contactButton.href}>
            {footer.contactButton.label}
          </Link>
        </section>

        <section className="footer__column">
          <h4>{footer.addressTitle}</h4>
          <p className="footer__address">{address}</p>
          <div className="footer__map" aria-label={`${address} harita konumu`}>
            <iframe
              title="Evrensel Bilişim adres haritası"
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
            {footer.copyrightPrefix} {year} | {footer.copyrightSuffix}
          </p>
        </div>
      </div>
    </footer>
  )
}
