import { Link } from "react-router-dom"
import homeHeroData from "../../data/homeHeroData.json"
import { resolveImage } from "../../utils/imageResolver"

const {
  eyebrow,
  title,
  description,
  imageAriaLabel,
  imageAlt,
  imagePath,
  serviceLinkCta,
  servicesHeading,
  services,
} = homeHeroData

export default function Hero() {
  const heroVisual = resolveImage(imagePath)

  return (
    <section className="hero section reveal-on-scroll reveal-right">
      <div className="container hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-text">{eyebrow}</span>
        </p>

        <div className="hero__content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className="hero__image" aria-label={imageAriaLabel}>
          <div className="hero__image-shell">
            <img
              src={heroVisual}
              alt={imageAlt}
              className="hero__image-media"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="hero__services">
          <div className="hero__services-content">
            <p className="hero__services-title">{servicesHeading}</p>
            <div className="hero__services-list" role="list" aria-label={servicesHeading}>
              {services.map((item) => (
                <article className="hero__services-item" key={item.label} role="listitem">
                  <Link to={item.href} className="hero__services-link">
                    <span className="hero__services-link-text">{item.label}</span>
                    <span className="hero__services-link-cta">{serviceLinkCta}</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
