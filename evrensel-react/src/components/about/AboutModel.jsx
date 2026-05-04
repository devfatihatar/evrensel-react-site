import SectionTitle from "../shared/SectionTitle"
import CountUpText from "../shared/CountUpText"

export default function AboutModel({ modelSection, workModel }) {
  return (
    <section className="section about-page__model">
      <div className="container">
        <SectionTitle
          eyebrow={modelSection.eyebrow}
          title={modelSection.title}
          subtitle={modelSection.subtitle}
        />

        <div className="about-page__model-grid">
          {workModel.map((item) => (
            <article key={item.step} className="about-page__model-card homepage-shared-card">
              <span className="about-page__model-step">
                <CountUpText value={item.step} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
