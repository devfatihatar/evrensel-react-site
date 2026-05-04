export default function WebDesignProcess({ processSection, processBoardSteps }) {
  return (
    <section className="web-design-process section reveal-on-scroll reveal-left" aria-label="Web tasarım süreç alanı">
      <div className="container web-design-process__inner">
        <div className="web-design-process__shell homepage-shared-shell">
          <div className="web-design-process__header homepage-shared-header">
            <p className="web-design-process__eyebrow homepage-shared-eyebrow">{processSection.eyebrow}</p>
            <h2>{processSection.title}</h2>
            <p>{processSection.subtitle}</p>
          </div>

          <div className="web-design-process__board" aria-label="Web tasarım süreç panosu">
            {processBoardSteps.map((item, index) => (
              <article
                key={item.step}
                className={`web-design-process__panel web-design-process__panel--${index + 1} homepage-shared-card`}
              >
                <span className="web-design-process__step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {index < processBoardSteps.length - 1 ? (
                  <span className="web-design-process__arrow" aria-hidden="true">
                    {index === 1 ? "↓" : "→"}
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
