import SectionTitle from "../shared/SectionTitle"
import CountUpText from "../shared/CountUpText"
import homeReferencesData from "../../data/homeReferencesData.json"

const { section, references, trust, logoAriaSuffix } = homeReferencesData

export default function References() {
  return (
    <section className="references section reveal-on-scroll reveal-left">
      <div className="container">
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          subtitle={section.subtitle}
          align="right"
        />

        <div className="references__grid">
          {references.map((item, index) => (
            <article
              className={`references__item reveal-on-scroll ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`.trim()}
              key={item.name}
            >
              <div className="references__head">
                <div className="references__logo" aria-label={`${item.name} ${logoAriaSuffix}`}>
                  {item.logo}
                </div>
                <span className="references__sector">{item.sector}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.result}</p>
            </article>
          ))}
        </div>

        <div className="references__trust">
          {trust.map((item, index) => (
            <article
              className={`references__trust-item reveal-on-scroll ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`.trim()}
              key={item.label}
            >
              <strong>
                <CountUpText value={item.value} />
              </strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
