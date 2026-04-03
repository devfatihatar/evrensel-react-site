import { Link } from "react-router-dom"

const quickLinks = [
  { to: "/", label: "Anasayfa" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { to: "/iletisim", label: "İletişim" },
]

const serviceLinks = [
  { to: "/web-tasarim", label: "Web Tasarımı" },
  { to: "/donanim", label: "Donanım Altyapısı" },
  { to: "/yardim-destek", label: "Yardım ve Destek" },
]

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "YouTube" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <section className="footer__column footer__brand">
          <h3>Evrensel Bilişim</h3>
          <p>
            İşletmeler için web, sistem ve teknik destek süreçlerini uçtan uca
            yöneten teknoloji partneri.
          </p>
        </section>

        <section className="footer__column">
          <h4>İletişim</h4>
          <ul className="footer__list">
            <li>
              <a href="tel:+905551112233">+90 555 111 22 33</a>
            </li>
            <li>
              <a href="mailto:info@evrenselbilisim.com">info@evrenselbilisim.com</a>
            </li>
            <li>Hafta içi 09:00 - 18:30</li>
          </ul>
        </section>

        <section className="footer__column">
          <h4>Adres ve Menü</h4>
          <p className="footer__address">
            Merkez Mah. Teknoloji Cad. No:12
            <br />
            Şişli / İstanbul
          </p>
          <ul className="footer__list footer__list--inline">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer__column">
          <h4>Hizmet ve Sosyal</h4>
          <ul className="footer__list">
            {serviceLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="footer__social">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href}>{social.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>Evrensel Bilişim © {year} | Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
