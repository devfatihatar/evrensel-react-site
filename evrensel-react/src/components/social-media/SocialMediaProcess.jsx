export default function SocialMediaProcess({ process }) {
  return (
    <section className="section social-media-process reveal-on-scroll" aria-label="Sosyal medya süreci">
      <div className="container">
        <div className="social-media-process__shell homepage-shared-shell">
          <div className="social-media-process__header homepage-shared-header">
            <p className="social-media-process__eyebrow homepage-shared-eyebrow">{process.eyebrow}</p>
            <h2>{process.title}</h2>
          </div>

          <div className="social-media-process__track">
            {process.steps.map((step) => (
              <article key={step.number} className="social-media-process__step homepage-shared-card">
                <span className="social-media-process__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
