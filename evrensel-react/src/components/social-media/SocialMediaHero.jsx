import Button from "../shared/Button"

export default function SocialMediaHero({ hero, socialMediaMainImage }) {
  return (
    <section className="social-media-main-visual section reveal-on-scroll reveal-right" aria-label="Sosyal medya ana gorseli">
      <div className="social-media-main-visual__frame">
        <img
          src={socialMediaMainImage}
          alt="Sosyal medya ana slider gorseli"
          className="social-media-main-visual__image"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        <div className="container social-media-main-visual__overlay">
          <div className="social-media-hero social-media-hero__inner">
            <div className="social-media-hero__content">
              <h1>{hero.title}</h1>
              <p className="social-media-hero__lead">{hero.subtitle}</p>

              <div className="social-media-hero__actions">
                <Button to="/iletisim">{hero.primaryButton}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
