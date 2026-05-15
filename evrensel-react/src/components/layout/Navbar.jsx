import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useMemo, useRef, useState } from "react"
import Button from "../shared/Button"
import navbarData from "../../data/navbarData.json"
import layoutData from "../../data/layoutData.json"
import { resolveImage } from "../../utils/imageResolver"
import { useLanguage } from "../../i18n/LanguageContext"
import { availableLanguages } from "../../i18n/translations"

const { links, topBar, brand, menuAriaLabel } = navbarData
const { floatingContacts } = layoutData
const whatsappIcon = resolveImage(floatingContacts.whatsapp.logoPath)

export default function Navbar() {
  const location = useLocation()
  const { lang, setLang } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenuLabel, setOpenSubmenuLabel] = useState("")
  const isScrolledRef = useRef(false)
  const rafRef = useRef(0)
  const lastYRef = useRef(0)
  const COLLAPSE_AT = 96
  const EXPAND_AT = 4

  const uniqueLinks = useMemo(() => {
    const seen = new Set()
    return links.filter((link) => {
      const key = `${link.label}|${link.to}`
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  }, [])

  const mobileSocialLinks = useMemo(
    () =>
      floatingContacts.items.map((item) => ({
        ...item,
        logoSrc: resolveImage(item.logoPath),
      })),
    [],
  )

  const isLinkActive = (linkTo) => {
    if (linkTo === "/hizmetlerimiz") {
      return location.pathname === "/hizmetlerimiz"
    }

    return location.pathname === linkTo || (linkTo !== "/" && location.pathname.startsWith(`${linkTo}/`))
  }

  useEffect(() => {
    const applyScrollState = () => {
      const y = window.scrollY

      if (window.matchMedia("(max-width: 768px)").matches) {
        if (isScrolledRef.current) {
          isScrolledRef.current = false
          setIsScrolled(false)
        }

        lastYRef.current = y
        rafRef.current = 0
        return
      }

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

  const headerClasses = `navbar ${isScrolled ? "navbar--scrolled" : ""} ${
    isMenuOpen ? "navbar--menu-open" : ""
  }`.trim()

  const spacerClasses = `navbar-spacer ${isScrolled ? "navbar-spacer--scrolled" : ""}`.trim()

  const closeCampaignModal = () => setIsCampaignModalOpen(false)

  const openCampaignModal = () => {
    setIsCampaignModalOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenSubmenuLabel("")
  }

  useEffect(() => {
    document.body.classList.toggle("is-mobile-menu-open", isMenuOpen)

    return () => {
      document.body.classList.remove("is-mobile-menu-open")
    }
  }, [isMenuOpen])

  return (
    <>
      {isCampaignModalOpen ? (
        <div className="navbar__campaign-modal" role="dialog" aria-modal="true" aria-label={topBar.fabLabel}>
          <div className="navbar__campaign-backdrop" onClick={closeCampaignModal} />
          <div className="navbar__campaign-panel">
            <button
              type="button"
              className="navbar__campaign-close"
              aria-label={topBar.closeAriaLabel}
              onClick={closeCampaignModal}
            >
              ×
            </button>
          </div>
        </div>
      ) : null}

      <header className={headerClasses}>
        <div className="navbar__top">
          <div className="container navbar__top-inner">
            <div className="navbar__top-left">
              <p className="navbar__top-text">{topBar.leftLabel}</p>
            </div>

            <div className="navbar__top-center">
              <ul className="navbar__top-badges">
                <li className="navbar__top-badge navbar__top-badge--strip">
                  {topBar.features.map((item, index) => (
                    <span key={item} className="navbar__top-strip-part">
                      <span>{item}</span>
                      {index < topBar.features.length - 1 ? (
                        <span className="navbar__top-strip-sep" aria-hidden="true">
                          -
                        </span>
                      ) : null}
                    </span>
                  ))}
                </li>
              </ul>
            </div>

            <div className="navbar__top-right">
              <Button
                to={topBar.ctaTo.startsWith("http") ? undefined : topBar.ctaTo}
                href={topBar.ctaTo.startsWith("http") ? topBar.ctaTo : undefined}
                variant="secondary"
                className="navbar__top-cta"
              >
                <img
                  src={whatsappIcon}
                  alt=""
                  className="navbar__top-cta-icon"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
                {topBar.ctaLabel}
              </Button>
            </div>

          </div>
        </div>

        <div className="navbar__main">
          <div className="container navbar__inner">
            <div className="navbar__main-left">
              <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
                <img
                  src={resolveImage(brand.logoPath)}
                  alt={brand.logoAlt}
                  className="navbar__brand-logo"
                  loading="eager"
                  decoding="async"
                />
              </NavLink>
              <div className="navbar__mobile-social" aria-label="Sosyal medya bağlantıları">
                {mobileSocialLinks.map((item) => (
                  <a
                    key={item.key}
                    className={`navbar__mobile-social-link navbar__mobile-social-link--${item.key}`.trim()}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.text}
                  >
                    <img
                      src={item.logoSrc}
                      alt=""
                      className="navbar__mobile-social-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                ))}
              </div>
              <button
                type="button"
                className="navbar__menu-toggle"
                aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
                aria-controls="primary-navigation"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((current) => !current)}
              >
                <span className="navbar__menu-toggle-line" aria-hidden="true" />
                <span className="navbar__menu-toggle-line" aria-hidden="true" />
                <span className="navbar__menu-toggle-line" aria-hidden="true" />
              </button>
            </div>

            <div className="navbar__main-right">
              <nav
                id="primary-navigation"
                className={`navbar__nav ${isMenuOpen ? "is-menu-open" : ""}`.trim()}
                aria-label={menuAriaLabel}
              >
                <ul className="navbar__menu">
                  {uniqueLinks.map((link) => {
                    const hasChildren = Array.isArray(link.children) && link.children.length > 0
                    const parentActive = isLinkActive(link.to)
                    const submenuOpen = openSubmenuLabel === link.label

                    if (!hasChildren) {
                      return (
                        <li key={`${link.to}-${link.label}`}>
                          <NavLink
                            to={link.to}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                              `navbar__link ${isActive ? "navbar__link--active" : ""}`.trim()
                            }
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      )
                    }

                    return (
                      <li
                        key={`${link.to}-${link.label}`}
                        className={`navbar__menu-item navbar__menu-item--has-dropdown ${
                          parentActive ? "is-active" : ""
                        } ${submenuOpen ? "is-submenu-open" : ""
                        }`.trim()}
                      >
                        <div className="navbar__link-row">
                          <NavLink
                            to={link.to}
                            onClick={closeMenu}
                            className={`navbar__link ${parentActive ? "navbar__link--active" : ""}`.trim()}
                          >
                            <span className="navbar__link-label">{link.label}</span>
                          </NavLink>
                          <button
                            type="button"
                            className="navbar__submenu-toggle"
                            aria-label={`${link.label} alt menüsünü ${submenuOpen ? "kapat" : "aç"}`}
                            aria-expanded={submenuOpen}
                            onClick={() => setOpenSubmenuLabel((current) => (current === link.label ? "" : link.label))}
                          >
                            <span className="navbar__link-caret" aria-hidden="true">
                              ▾
                            </span>
                          </button>
                        </div>

                        <ul
                          className={`navbar__dropdown ${
                            submenuOpen ? "navbar__dropdown--mobile-open" : ""
                          }`.trim()}
                          aria-label={`${link.label} alt menü`}
                        >
                          {link.children.map((child) => {
                            const childActive =
                              location.pathname === "/hizmetlerimiz" &&
                              location.search.includes(child.to.split("?")[1] || "")

                            return (
                              <li key={`${child.to}-${child.label}`}>
                                <NavLink
                                  to={child.to}
                                  onClick={closeMenu}
                                  className={`navbar__dropdown-link ${
                                    childActive ? "navbar__dropdown-link--active" : ""
                                  }`.trim()}
                                >
                                  {child.label}
                                </NavLink>
                              </li>
                            )
                          })}
                        </ul>
                      </li>
                    )
                  })}
                </ul>
              </nav>
              <div className="navbar__language" aria-label="Dil seçimi">
                {Object.entries(availableLanguages).map(([item, language]) => (
                  <button
                    key={item}
                    type="button"
                    className={`navbar__language-option ${lang === item ? "is-active" : ""}`.trim()}
                    onClick={() => setLang(item)}
                    aria-pressed={lang === item}
                  >
                    {language.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <button
        type="button"
        className="navbar__promo-fab is-visible"
        onClick={openCampaignModal}
        aria-label={topBar.openAriaLabel}
      >
        <span>{topBar.fabLabel}</span>
      </button>

      <div className={spacerClasses} />
    </>
  )
}

