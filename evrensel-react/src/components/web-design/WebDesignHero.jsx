import Button from "../shared/Button"

export default function WebDesignHero({ hero, heroHighlights, webSlideMainImage }) {
  return (
    <section className="web-design-main-visual section reveal-on-scroll reveal-right" aria-label="Web tasarım ana görseli">
      <div className="web-design-main-visual__frame">
        <img
          src={webSlideMainImage}
          alt="Web tasarım ana slider görseli"
          className="web-design-main-visual__image"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        <div className="container web-design-main-visual__overlay">
          <div className="web-design-hero web-design-hero__inner">
            <div className="web-design-hero__content">
              <h1>{hero.title}</h1>
              <p className="web-design-hero__lead">{hero.subtitle}</p>

              <div className="web-design-hero__actions">
                <Button to="/iletisim">{hero.primaryButton}</Button>
              </div>
            </div>

            <aside className="web-design-hero__aside" aria-label={hero.panelAriaLabel}>
              <div className="web-design-hero__highlights" aria-label="Web tasarım avantajları">
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
                      <span>{item.text}</span>
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
