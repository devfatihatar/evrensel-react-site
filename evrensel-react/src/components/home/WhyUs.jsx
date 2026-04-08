import Button from "../shared/Button"
import CountUpText from "../shared/CountUpText"
import SectionTitle from "../shared/SectionTitle"
import homeWhyUsData from "../../data/homeWhyUsData.json"

const { section, features, processSteps, trustStats, footerText, footerButton } = homeWhyUsData

export default function WhyUs() {
  return (
    <section className="why-us section reveal-on-scroll reveal-right">
      <div className="container">
        <SectionTitle eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />

        <div className="why-us__features">
          {features.map((item) => (
            <article className="why-us__card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="why-us__metric">{item.metric}</span>
            </article>
          ))}
        </div>

        <div className="why-us__process" aria-label="Hizmet süreci adımları">
          {processSteps.map((step) => (
            <div className="why-us__step" key={step}>
              {step}
            </div>
          ))}
        </div>

        <div className="why-us__trust">
          {trustStats.map((stat) => (
            <article className="why-us__trust-item" key={stat.label}>
              <strong>
                <CountUpText value={stat.value} />
              </strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <footer className="why-us__footer">
          <p>{footerText}</p>
          <Button variant="secondary">{footerButton}</Button>
        </footer>
      </div>
    </section>
  )
}
