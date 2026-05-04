import Button from "../shared/Button"

export default function AboutCta({ cta }) {
  return (
    <section className="section about-page__cta">
      <div className="container about-page__cta-box homepage-shared-shell">
        <div className="homepage-shared-header">
          <p className="about-page__cta-eyebrow homepage-shared-eyebrow">{cta.eyebrow}</p>
          <h2>{cta.title}</h2>
          <p>{cta.text}</p>
        </div>

        <div className="about-page__cta-actions">
          <Button to="/iletisim">{cta.primaryButton}</Button>
          <Button to="/hizmetlerimiz" variant="secondary">
            {cta.secondaryButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
