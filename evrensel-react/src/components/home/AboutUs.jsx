import homeAboutUsData from "../../data/homeAboutUsData.json"

const { title, description, reasons } = homeAboutUsData

export default function AboutUs() {
  return (
    <section className="about-us section reveal-on-scroll reveal-right">
      <div className="container about-us__inner">
        <div className="about-us__header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="about-us__list" role="list" aria-label="Neden biz detaylari">
          {reasons.map((reason) => (
            <article key={reason.title} className="about-us__item" role="listitem">
              <div className="about-us__item-title">
                <h3>{reason.title}</h3>
              </div>
              <div className="about-us__item-body">
                <p>{reason.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
