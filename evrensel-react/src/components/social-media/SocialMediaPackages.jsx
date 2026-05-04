export default function SocialMediaPackages({ packageSection }) {
  return (
    <section className="section social-media-packages reveal-on-scroll" aria-label="Sosyal medya paketleri">
      <div className="container">
        <div className="social-media-packages__shell homepage-shared-shell">
          <div className="social-media-packages__header homepage-shared-header">
            <p className="social-media-packages__eyebrow homepage-shared-eyebrow">{packageSection.eyebrow}</p>
            <h2>{packageSection.title}</h2>
          </div>

          <div className="social-media-packages__grid">
            {packageSection.items.map((item) => (
              <article
                key={item.name}
                className={`social-media-packages__card homepage-shared-card${item.featured ? " is-featured" : ""}`}
              >
                <span className="social-media-packages__tag">{item.tag}</span>
                <h3>{item.name}</h3>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
