export default function SocialMediaScope({ scope }) {
  return (
    <section className="section social-media-scope reveal-on-scroll" aria-label="Sosyal medya hizmet kapsami">
      <div className="container">
        <div className="social-media-scope__shell homepage-shared-shell">
          <div className="social-media-scope__intro homepage-shared-header">
            <p className="social-media-scope__eyebrow homepage-shared-eyebrow">{scope.eyebrow}</p>
            <h2>{scope.title}</h2>
            <p>{scope.text}</p>
          </div>

          <div className="social-media-scope__grid">
            {scope.items.map((item) => (
              <article key={item.label} className="social-media-scope__card homepage-shared-card">
                <span className="social-media-scope__index">{item.label}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
