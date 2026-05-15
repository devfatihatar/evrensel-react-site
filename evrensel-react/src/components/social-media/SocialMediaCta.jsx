import Button from "../shared/Button"

export default function SocialMediaCta({ cta }) {
  return (
    <section className="section social-media-cta reveal-on-scroll" aria-label="Sosyal medya iletişim alanı">
      <div className="container">
        <div className="social-media-cta__shell homepage-shared-shell homepage-shared-header">
          <p className="social-media-cta__eyebrow homepage-shared-eyebrow">{cta.eyebrow}</p>
          <h2>{cta.title}</h2>
          <p>{cta.text}</p>

          <div className="social-media-cta__actions">
            <Button to="/iletisim" className="social-media-cta__primary-btn">
              {cta.primaryButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
