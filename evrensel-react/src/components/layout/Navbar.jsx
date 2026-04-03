import { NavLink } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import Button from "../shared/Button"

const links = [
  { to: "/", label: "Anasayfa" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/web-tasarim", label: "Web Tasarımı" },
  { to: "/donanim", label: "Donanım" },
  { to: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { to: "/yardim-destek", label: "Yardım Destek" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const isScrolledRef = useRef(false)
  const rafRef = useRef(0)
  const lastYRef = useRef(0)
  const COLLAPSE_AT = 96
  const EXPAND_AT = 4

  useEffect(() => {
    const applyScrollState = () => {
      const y = window.scrollY
      const wasScrolled = isScrolledRef.current
      const isGoingDown = y > lastYRef.current
      const isGoingUp = y < lastYRef.current

      let nextScrolled = wasScrolled

      if (!wasScrolled && isGoingDown && y > COLLAPSE_AT) {
        nextScrolled = true
      }

      if (wasScrolled && isGoingUp && y <= EXPAND_AT) {
        nextScrolled = false
      }

      if (nextScrolled !== wasScrolled) {
        isScrolledRef.current = nextScrolled
        setIsScrolled(nextScrolled)
      }

      lastYRef.current = y
      rafRef.current = 0
    }

    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = window.requestAnimationFrame(applyScrollState)
    }

    lastYRef.current = window.scrollY
    applyScrollState()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <>
      <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`.trim()}>
        <div className="navbar__top">
          <div className="container navbar__top-inner">
            <div className="navbar__top-left">
              <p className="navbar__top-text">Kurumsal teknoloji partneriniz</p>
              <ul className="navbar__top-badges">
                <li className="navbar__top-badge">7/24 Destek</li>
                <li className="navbar__top-badge">Aynı Gün Geri Dönüş</li>
                <li className="navbar__top-badge">Ücretsiz Keşif</li>
              </ul>
            </div>

            <div className="navbar__top-right">
              <a className="navbar__top-contact" href="tel:+905551112233">
                +90 555 111 22 33
              </a>
              <Button to="/iletisim" variant="secondary" className="navbar__top-cta">
                Ön Görüşme Planla
              </Button>
            </div>
          </div>
        </div>

        <div className="navbar__main">
          <div className="container navbar__inner">
            <NavLink to="/" className="navbar__brand">
              <span className="navbar__brand-mark">EB</span>
              <span className="navbar__brand-text">
                <strong>Evrensel Bilişim</strong>
                <small>Web | Donanım | Destek</small>
              </span>
            </NavLink>

            <nav aria-label="Ana menü">
              <ul className="navbar__menu">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `navbar__link ${isActive ? "navbar__link--active" : ""}`.trim()
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Button to="/iletisim" className="navbar__main-cta">
              Teklif Al
            </Button>
          </div>
        </div>
      </header>

      <div className={`navbar-spacer ${isScrolled ? "navbar-spacer--scrolled" : ""}`.trim()} />
    </>
  )
}
