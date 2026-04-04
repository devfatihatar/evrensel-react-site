import Button from "../shared/Button"
import homeHeroData from "../../data/homeHeroData.json"

const {
  eyebrow,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageAriaLabel,
  imagePlaceholderTitle,
  imagePlaceholderHint,
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
            <Button to="/hizmetlerimiz" variant="primary">
              {primaryButton}
            </Button>
            <Button to="/iletisim" variant="secondary">
              {secondaryButton}
            </Button>
          </div>
        </div>

        <div className="hero__image" aria-label={imageAriaLabel}>
          <div className="hero__image-placeholder">
            {imagePlaceholderTitle}
            <small>{imagePlaceholderHint}</small>
          </div>
        </div>
      </div>
    </section>
  )
}
