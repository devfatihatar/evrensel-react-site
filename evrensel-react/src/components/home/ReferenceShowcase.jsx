import homeReferenceShowcaseData from "../../data/homeReferenceShowcaseData.json"
import talyantisImage from "../../assets/images/referances/talyantis.jpg"
import rotlogImage from "../../assets/images/referances/rotlog.jpg"
import renovaImage from "../../assets/images/referances/renova.jpg"
import yatsanImage from "../../assets/images/referances/ref_yatsan.webp"

const { title, description, previews, stats } = homeReferenceShowcaseData
const previewImages = [talyantisImage, rotlogImage, renovaImage, yatsanImage]

export default function ReferenceShowcase() {
  return (
    <section className="reference-showcase section reveal-on-scroll reveal-right">
      <div className="container reference-showcase__inner">
        <div className="reference-showcase__header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="reference-showcase__previews" aria-label="Ornek referans gorselleri">
          {previews.map((item, index) => (
            <figure key={item.name} className="reference-showcase__preview-card">
              <div className="reference-showcase__preview" aria-hidden="true">
                <img
                  src={previewImages[index]}
                  alt={`${item.name} referans gorseli`}
                  className="reference-showcase__preview-image"
                />
              </div>
              <figcaption className="reference-showcase__preview-name">{item.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="reference-showcase__list" role="list" aria-label="Referans istatistikleri">
          {stats.map((item) => (
            <article className="reference-showcase__item" key={item.label} role="listitem">
              <div className="reference-showcase__item-title">
                <strong>{item.value}</strong>
              </div>
              <div className="reference-showcase__item-body">
                <span>{item.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
