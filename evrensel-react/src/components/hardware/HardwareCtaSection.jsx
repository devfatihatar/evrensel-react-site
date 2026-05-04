import Button from "../shared/Button"

export default function HardwareCtaSection({ cta }) {
  return (
    <section className="section reveal-on-scroll reveal-right" aria-label="Donanım çağrısı">
      <div className="container">
        <div className="hardware-page__cta-box homepage-shared-shell homepage-shared-header">
          <p className="hardware-page__eyebrow homepage-shared-eyebrow">{cta.eyebrow}</p>
          <h2>{cta.title}</h2>
          <p>{cta.text}</p>

          <div className="hardware-page__cta-actions">
            <Button to="/iletisim">{cta.primaryButton}</Button>
            <Button to="/yardim-destek" variant="secondary">
              {cta.secondaryButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
