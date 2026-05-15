import Button from "../shared/Button"
import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"

export default function HardwareHero({ hero, highlights, backgroundImage, devicesImage }) {
  const { lang } = useLanguage()

  const mainVisualAriaLabel = translateText("Donanım ana görseli", lang)
  const backgroundAlt = translateText("Donanım ana slider görseli", lang)
  const highlightsAriaLabel = translateText("Donanım avantajları", lang)
  const panelAriaLabel = translateText(hero.panelAriaLabel, lang)

  return (
    <section className="section hardware-main-visual reveal-on-scroll reveal-right" aria-label={mainVisualAriaLabel}>
      <div className="hardware-main-visual__frame">
        <img
          src={backgroundImage}
          alt={backgroundAlt}
          className="hardware-main-visual__image"
          loading="eager"
          decoding="async"
        />

        <div className="container hardware-main-visual__overlay">
          <div className="hardware-hero hardware-hero__inner">
            <div className="hardware-hero__content homepage-shared-header">
              <h1>{hero.title}</h1>
              <p className="hardware-hero__lead">{hero.subtitle}</p>

              <div className="hardware-hero__actions">
                <Button to="/iletisim">{hero.primaryButton}</Button>
              </div>
            </div>

            <aside className="hardware-hero__aside" aria-label={panelAriaLabel}>
              <div className="hardware-hero__highlights" aria-label={highlightsAriaLabel}>
                {highlights.map((item) => (
                  <article key={item.label} className="hardware-hero__highlight homepage-shared-card">
                    <div className="hardware-hero__highlight-visual">
                      <img
                        src={devicesImage}
                        alt=""
                        className="hardware-hero__highlight-image"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="hardware-hero__highlight-copy">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
