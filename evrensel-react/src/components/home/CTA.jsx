import Button from "../shared/Button"
import homeCtaData from "../../data/homeCtaData.json"

const { eyebrow, title, description, trustItems, primaryButton, secondaryButton } = homeCtaData

export default function CTA() {
  return (
    <section className="cta section reveal-on-scroll reveal-right">
      <div className="container cta__inner">
        <div className="cta__content">
          <p className="cta__eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>

          <ul className="cta__trust">
            {trustItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="cta__actions">
          <Button to="/iletisim" variant="primary" className="cta__primary">
            {primaryButton}
          </Button>
          <Button href="tel:+905551112233" variant="secondary" className="cta__secondary-btn">
            {secondaryButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
