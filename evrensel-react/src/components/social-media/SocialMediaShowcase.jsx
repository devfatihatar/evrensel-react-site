export default function SocialMediaShowcase({ hero, highlights, showcase }) {
  return (
    <section className="section social-media-showcase" aria-label="Sosyal medya içerik vitrini">
      <div className="container">
        <div className="social-media-showcase__shell homepage-shared-shell">
          <div className="social-media-showcase__header homepage-shared-header">
            <p className="social-media-showcase__eyebrow homepage-shared-eyebrow">{hero.eyebrow}</p>
            <h2>{showcase.title}</h2>
            <p>{showcase.text}</p>
          </div>

          <div className="social-media-showcase__grid">
            {highlights.map((item) => (
              <article key={item.title} className="social-media-showcase__card homepage-shared-card">
                <span className="social-media-showcase__badge">{item.title}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
