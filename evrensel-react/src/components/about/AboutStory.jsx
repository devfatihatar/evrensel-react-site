import SectionTitle from "../shared/SectionTitle"
import CountUpText from "../shared/CountUpText"

export default function AboutStory({ story, timeline }) {
  return (
    <section className="section about-page__story">
      <div className="container about-page__story-grid">
        <div className="homepage-shared-header">
          <SectionTitle eyebrow={story.eyebrow} title={story.title} subtitle={story.subtitle} />
        </div>

        <div className="about-page__story-text">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="about-page__timeline">
          {timeline.map((item) => (
            <article key={`${item.year}-${item.title}`} className="about-page__timeline-item homepage-shared-card">
              <span className="about-page__timeline-year">
                <CountUpText value={item.year} />
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
