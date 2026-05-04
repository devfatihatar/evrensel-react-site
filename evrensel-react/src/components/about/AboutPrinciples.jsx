import SectionTitle from "../shared/SectionTitle"

export default function AboutPrinciples({ principlesSection, principles }) {
  return (
    <section className="section about-page__principles">
      <div className="container">
        <SectionTitle
          eyebrow={principlesSection.eyebrow}
          title={principlesSection.title}
          subtitle={principlesSection.subtitle}
          align="center"
        />

        <div className="about-page__principles-grid">
          {principles.map((item) => (
            <article key={item.title} className="about-page__principle-card homepage-shared-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
