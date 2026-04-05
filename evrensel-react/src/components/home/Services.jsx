import { useState } from "react"
import SectionTitle from "../shared/SectionTitle"
import Button from "../shared/Button"
import CountUpText from "../shared/CountUpText"
import homeServicesData from "../../data/homeServicesData.json"

const { section, stats, serviceCards, cardLink, footerButton } = homeServicesData

export default function Services() {
  const [statProgress, setStatProgress] = useState({})
  const [statCompleted, setStatCompleted] = useState({})

  const updateStatProgress = (label, progress) => {
    setStatProgress((prev) => {
      const next = Math.max(0, Math.min(1, progress))
      if (prev[label] === next) return prev
      return { ...prev, [label]: next }
    })
  }

  const markStatCompleted = (label) => {
    setStatCompleted((prev) => {
      if (prev[label]) return prev
      return { ...prev, [label]: true }
    })
  }

  return (
    <section className="services section reveal-on-scroll reveal-left">
      <div className="container services__container">
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          subtitle={section.subtitle}
          align="right"
        />

        <div className="services__stats">
          {stats.map((stat) => (
            <article
              className={`services__stat ${statCompleted[stat.label] ? "is-finished" : ""}`.trim()}
              key={stat.label}
              style={{ "--stat-fill": statProgress[stat.label] ?? 0 }}
            >
              <strong>
                <CountUpText
                  value={stat.value}
                  onProgress={(progress) => updateStatProgress(stat.label, progress)}
                  onComplete={() => markStatCompleted(stat.label)}
                />
              </strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <div className="services__grid">
          {serviceCards.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__tag">{service.tag}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul className="service-card__list">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href="/hizmetlerimiz" className="service-card__link">
                {cardLink}
              </a>
            </article>
          ))}
        </div>

        <div className="services__footer">
          <Button to="/hizmetlerimiz" variant="primary">
            {footerButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
