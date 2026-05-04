import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import homeHeroData from "../../data/homeHeroData.json"
import { resolveImage, resolveImageList } from "../../utils/imageResolver"

const {
  eyebrow,
  title,
  description,
  imageAriaLabel,
  imageAlt,
  imagePath,
  serviceImagePaths,
  serviceImagesAriaLabel,
  serviceImageDotAriaPrefix,
  serviceLinkCta,
  servicesHeading,
  services,
} = homeHeroData

export default function Hero() {
  const heroVisual = resolveImage(imagePath)
  const serviceVisuals = resolveImageList(serviceImagePaths)
  const [activeServiceVisual, setActiveServiceVisual] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveServiceVisual((current) => (current + 1) % serviceVisuals.length)
    }, 3200)

    return () => {
      window.clearInterval(timer)
    }
  }, [serviceVisuals.length])

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
          <div className="hero__services-media" aria-label={serviceImagesAriaLabel}>
            {serviceVisuals.map((visualSrc, index) => (
              <div
                className={`hero__services-media-item ${activeServiceVisual === index ? "is-active" : ""}`.trim()}
                key={visualSrc}
              >
                <img
                  src={visualSrc}
                  alt=""
                  className="hero__services-media-image"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
                <span className="hero__services-media-badge">0{index + 1}</span>
              </div>
            ))}

            <div className="hero__services-media-dots" aria-label="Hizmet gorseli secimi">
              {serviceVisuals.map((visualSrc, index) => (
                <button
                  key={`${visualSrc}-dot`}
                  type="button"
                  className={`hero__services-media-dot ${activeServiceVisual === index ? "is-active" : ""}`.trim()}
                  onClick={() => setActiveServiceVisual(index)}
                  aria-label={`${serviceImageDotAriaPrefix} ${index + 1}`}
                />
              ))}
            </div>
          </div>

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
