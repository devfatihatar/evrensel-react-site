import Button from "../shared/Button"
import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"

export default function WebDesignHero({ hero, heroHighlights, webSlideMainImage }) {
  const { lang } = useLanguage()
  const t = (value) => translateText(value, lang)

  return (
    <section
      key={lang}
      className="web-design-main-visual section reveal-on-scroll reveal-right"
      aria-label={t("Web tasarım ana görseli")}
    >
      <div className="web-design-main-visual__frame">
        <img
          src={webSlideMainImage}
          alt={t("Web tasarım ana slider görseli")}
          className="web-design-main-visual__image"
          loading="eager"
          decoding="async"
        />

        <div className="container web-design-main-visual__overlay">
          <div className="web-design-hero web-design-hero__inner">
            <div className="web-design-hero__content">
              <h1>{t(hero.title)}</h1>
              <p className="web-design-hero__lead">{t(hero.subtitle)}</p>

              <div className="web-design-hero__actions">
                <Button to="/iletisim">{t(hero.primaryButton)}</Button>
              </div>
            </div>

            <aside className="web-design-hero__aside" aria-label={t(hero.panelAriaLabel)}>
              <div className="web-design-hero__highlights" aria-label={t("Web tasarım avantajları")}>
                {heroHighlights.map((item) => (
                  <article className="web-design-hero__highlight" key={item.text}>
                    <div className="web-design-hero__highlight-visual">
                      <img
                        src={item.imageSrc}
                        alt=""
                        className="web-design-hero__highlight-image"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="web-design-hero__highlight-copy">
                      <strong>{item.title}</strong>
                      <span>{t(item.text)}</span>
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
