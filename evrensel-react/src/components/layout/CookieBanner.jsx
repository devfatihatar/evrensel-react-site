import { useState } from "react"
import layoutData from "../../data/layoutData.json"

const defaultPreferences = {
  necessary: true,
  analytics: false,
  targeting: false,
}

const readInitialCookieState = (storageKey) => {
  if (typeof window === "undefined") {
    return {
      isVisible: false,
      preferences: defaultPreferences,
    }
  }

  const savedConsent = window.localStorage.getItem(storageKey)

  if (!savedConsent) {
    return {
      isVisible: true,
      preferences: defaultPreferences,
    }
  }

  try {
    const parsed = JSON.parse(savedConsent)
    if (parsed && typeof parsed === "object") {
      return {
        isVisible: false,
        preferences: {
          necessary: true,
          analytics: Boolean(parsed.analytics),
          targeting: Boolean(parsed.targeting),
        },
      }
    }
  } catch {
    if (savedConsent === "accepted") {
      return {
        isVisible: false,
        preferences: { necessary: true, analytics: true, targeting: true },
      }
    }
  }

  return {
    isVisible: false,
    preferences: defaultPreferences,
  }
}

export default function CookieBanner() {
  const { cookieBanner } = layoutData
  const initialState = useState(() => readInitialCookieState(cookieBanner.storageKey))[0]
  const [isVisible, setIsVisible] = useState(initialState.isVisible)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [preferences, setPreferences] = useState(initialState.preferences)

  const savePreferences = (nextPreferences) => {
    window.localStorage.setItem(cookieBanner.storageKey, JSON.stringify(nextPreferences))
    setIsVisible(false)
  }

  const handleToggle = (key) => {
    if (key === "necessary") return

    setPreferences((current) => ({
      ...current,
      [key]: !current[key],
    }))
  }

  if (!isVisible) return null

  return (
    <aside
      className={`cookie-banner ${isSettingsOpen ? "is-settings-open" : ""}`.trim()}
      aria-label={cookieBanner.ariaLabel}
    >
      {isSettingsOpen ? (
        <div className="cookie-banner__settings-header">
          <h2>{cookieBanner.settingsTitle}</h2>
        </div>
      ) : (
        <>
          <div className="cookie-banner__visual" aria-hidden="true">
            <span className="cookie-banner__crumb cookie-banner__crumb--one" />
            <span className="cookie-banner__crumb cookie-banner__crumb--two" />
            <span className="cookie-banner__crumb cookie-banner__crumb--three" />
          </div>

          <div className="cookie-banner__content">
            <p className="cookie-banner__eyebrow">{cookieBanner.eyebrow}</p>
            <h2>{cookieBanner.title}</h2>
            <p>{cookieBanner.text}</p>
          </div>

          <div className="cookie-banner__actions">
            <button
              type="button"
              className="cookie-banner__button cookie-banner__button--ghost"
              onClick={() => setIsSettingsOpen(true)}
            >
              {cookieBanner.manageButton}
            </button>
            <button
              type="button"
              className="cookie-banner__button cookie-banner__button--muted"
              onClick={() => savePreferences(preferences)}
            >
              {cookieBanner.laterButton}
            </button>
            <button
              type="button"
              className="cookie-banner__button cookie-banner__button--primary"
              onClick={() => savePreferences({ necessary: true, analytics: true, targeting: true })}
            >
              {cookieBanner.acceptButton}
            </button>
          </div>
        </>
      )}

      {isSettingsOpen ? (
        <div className="cookie-banner__settings">
          {cookieBanner.settings.map((setting) => (
            <article key={setting.key} className="cookie-banner__setting">
              <div className="cookie-banner__setting-copy">
                <h3>{setting.title}</h3>
                <p>{setting.text}</p>
              </div>
              <button
                type="button"
                className={`cookie-banner__switch ${setting.locked ? "is-locked" : ""} ${
                  preferences[setting.key] ? "is-on" : ""
                }`.trim()}
                aria-label={setting.ariaLabel}
                aria-pressed={setting.locked ? undefined : preferences[setting.key]}
                disabled={setting.locked}
                onClick={() => handleToggle(setting.key)}
              >
                <span />
              </button>
            </article>
          ))}

          <div className="cookie-banner__settings-actions">
            <button
              type="button"
              className="cookie-banner__button cookie-banner__button--primary"
              onClick={() => savePreferences(preferences)}
            >
              {cookieBanner.saveButton}
            </button>
          </div>
        </div>
      ) : null}
    </aside>
  )
}
