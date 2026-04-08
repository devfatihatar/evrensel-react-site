import { useState } from "react"
import CountUpText from "../shared/CountUpText"
import homeHeroData from "../../data/homeHeroData.json"
import heroVisual from "../../assets/images/sliders/slider1.webp"

const {
  eyebrow,
  title,
  description,
  supportText,
  imageAriaLabel,
  imageAlt,
  stats,
} = homeHeroData

export default function Hero() {
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
    <section className="hero section reveal-on-scroll reveal-right">
      <div className="container hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-text">{eyebrow}</span>
        </p>

        <div className="hero__content">
          <h1>{title}</h1>
          <p>{description}</p>
          {supportText ? <p>{supportText}</p> : null}
        </div>

        <div className="hero__image" aria-label={imageAriaLabel}>
          <div className="hero__image-shell">
            <img src={heroVisual} alt={imageAlt} className="hero__image-media" />
          </div>
        </div>

        <div className="services__stats hero__stats">
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
      </div>
    </section>
  )
}
