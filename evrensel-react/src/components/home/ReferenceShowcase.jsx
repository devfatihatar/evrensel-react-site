import homeReferenceShowcaseData from "../../data/homeReferenceShowcaseData.json"
import { resolveImage } from "../../utils/imageResolver"

const { title, description, previews } = homeReferenceShowcaseData

export default function ReferenceShowcase() {
  return (
    <section className="reference-showcase section reveal-on-scroll reveal-right">
      <div className="container reference-showcase__inner">
        <div className="reference-showcase__header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="reference-showcase__previews" aria-label="Referans gorselleri">
          {previews.map((item) => (
            <figure key={item.name} className="reference-showcase__preview-card">
              <div className="reference-showcase__preview" aria-hidden="true">
                <img
                  src={resolveImage(item.imagePath)}
                  alt={`${item.name} referans gorseli`}
                  className="reference-showcase__preview-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="reference-showcase__preview-name">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
