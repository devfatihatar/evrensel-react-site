import supportData from "../../data/supportData.json"
import { resolveImage } from "../../utils/imageResolver"

export default function SupportHero({ section }) {
  const { assets } = supportData

  return (
    <section className="support-main-visual section reveal-on-scroll reveal-right" aria-label={assets.heroAriaLabel}>
      <div className="support-main-visual__frame">
        <img
          src={resolveImage(assets.heroImagePath)}
          alt={assets.heroImageAlt}
          className="support-main-visual__image"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        <div className="container support-main-visual__overlay">
          <div className="support-hero support-hero__inner">
            <div className="support-hero__content">
              <p className="support-hero__eyebrow">{section.eyebrow}</p>
              <h1>{section.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
