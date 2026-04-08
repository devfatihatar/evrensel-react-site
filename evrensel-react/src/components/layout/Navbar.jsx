import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useMemo, useRef, useState } from "react"
import Button from "../shared/Button"
import navbarData from "../../data/navbarData.json"
import evrenselLogo from "../../assets/images/icons/evrensel-logo.png"

const { links, topBar, menuAriaLabel } = navbarData

export default function Navbar() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPromoClosed, setIsPromoClosed] = useState(false)
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

  const isLinkActive = (linkTo) =>
    location.pathname === linkTo || (linkTo !== "/" && location.pathname.startsWith(linkTo))

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

  const headerClasses = `navbar ${isScrolled ? "navbar--scrolled" : ""} ${
    isPromoClosed ? "navbar--promo-closed" : ""
  }`.trim()

  const spacerClasses = `navbar-spacer ${isScrolled ? "navbar-spacer--scrolled" : ""} ${
    isPromoClosed ? "navbar-spacer--promo-closed" : ""
  }`.trim()

  return (
    <>
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
              <Button to={topBar.ctaTo} variant="secondary" className="navbar__top-cta">
                {topBar.ctaLabel}
              </Button>
            </div>

            <button
              type="button"
              className="navbar__top-close"
              aria-label={topBar.closeAriaLabel}
              onClick={() => setIsPromoClosed(true)}
            >
              ×
            </button>
          </div>
        </div>

        <div className="navbar__main">
          <div className="container navbar__inner">
            <div className="navbar__main-left">
              <NavLink to="/" className="navbar__brand">
                <img src={evrenselLogo} alt="Evrensel Bilişim" className="navbar__brand-logo" />
              </NavLink>
            </div>

            <div className="navbar__main-right">
              <nav className="navbar__nav" aria-label={menuAriaLabel}>
                <ul className="navbar__menu">
                  {uniqueLinks.map((link) => {
                    const hasChildren = Array.isArray(link.children) && link.children.length > 0
                    const parentActive = isLinkActive(link.to)

                    if (!hasChildren) {
                      return (
                        <li key={`${link.to}-${link.label}`}>
                          <NavLink
                            to={link.to}
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
                        }`.trim()}
                      >
                        <NavLink
                          to={link.to}
                          className={`navbar__link ${parentActive ? "navbar__link--active" : ""}`.trim()}
                        >
                          <span className="navbar__link-label">{link.label}</span>
                          <span className="navbar__link-caret" aria-hidden="true">
                            ▾
                          </span>
                        </NavLink>

                        <ul className="navbar__dropdown" aria-label={`${link.label} alt menü`}>
                          {link.children.map((child) => {
                            const childActive =
                              location.pathname === "/hizmetlerimiz" &&
                              location.search.includes(child.to.split("?")[1] || "")

                            return (
                              <li key={`${child.to}-${child.label}`}>
                                <NavLink
                                  to={child.to}
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
            </div>
          </div>
        </div>
      </header>

      <button
        type="button"
        className={`navbar__promo-fab ${isPromoClosed ? "is-visible" : ""}`.trim()}
        onClick={() => setIsPromoClosed(false)}
        aria-label={topBar.openAriaLabel}
      >
        <span>{topBar.fabLabel}</span>
      </button>

      <div className={spacerClasses} />
    </>
  )
}

