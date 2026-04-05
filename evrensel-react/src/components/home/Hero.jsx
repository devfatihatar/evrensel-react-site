import Button from "../shared/Button"
import homeHeroData from "../../data/homeHeroData.json"
import heroVisual from "../../assets/images/sliders/slider1.webp"

const {
  eyebrow,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageAriaLabel,
  imageAlt,
} = homeHeroData

export default function Hero() {
  return (
    <section className="hero section reveal-on-scroll reveal-right">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>

          <div className="hero__buttons">
            <Button to="/iletisim" variant="primary">
              {primaryButton}
            </Button>
            <Button to="/hizmetlerimiz" variant="primary">
              {secondaryButton}
            </Button>
          </div>
        </div>

        <div className="hero__image" aria-label={imageAriaLabel}>
          <div className="hero__image-shell">
            <img src={heroVisual} alt={imageAlt} className="hero__image-media" />
          </div>
        </div>
      </div>
    </section>
  )
}
