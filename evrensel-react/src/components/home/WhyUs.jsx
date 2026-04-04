import SectionTitle from "../shared/SectionTitle"
import Button from "../shared/Button"
import homeWhyUsData from "../../data/homeWhyUsData.json"

const { section, features, processSteps, trustStats, footerText, footerButton } = homeWhyUsData

export default function WhyUs() {
  return (
    <section className="why-us section reveal-on-scroll reveal-right">
      <div className="container">
        <SectionTitle eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />

        <div className="why-us__features">
          {features.map((item, index) => (
            <article
              className={`why-us__card reveal-on-scroll ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`.trim()}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="why-us__metric">{item.metric}</span>
            </article>
          ))}
        </div>

        <div className="why-us__process">
          {processSteps.map((step, index) => (
            <div
              className={`why-us__step reveal-on-scroll ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`.trim()}
              key={step}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="why-us__trust">
          {trustStats.map((stat, index) => (
            <article
              className={`why-us__trust-item reveal-on-scroll ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`.trim()}
              key={stat.label}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <div className="why-us__footer reveal-on-scroll reveal-right">
          <p>{footerText}</p>
          <Button to="/iletisim" variant="secondary">
            {footerButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
