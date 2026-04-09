import homeAboutUsData from "../../data/homeAboutUsData.json"

const { title, description, highlightTitle, highlightText, highlights, reasons } =
  homeAboutUsData

export default function AboutUs() {
  return (
    <section className="about-us section reveal-on-scroll reveal-right">
      <div className="container about-us__inner">
        <div className="about-us__content">
          <article className="about-us__spotlight">
            <div className="about-us__spotlight-shell">
              <h3>{highlightTitle}</h3>
              <p>{highlightText}</p>

              <div className="about-us__spotlight-list" role="list" aria-label="Neden biz ozetleri">
                {highlights.map((item) => (
                  <span key={item} className="about-us__spotlight-pill" role="listitem">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="about-us__header">
            <h2>{title}</h2>
            <p>{description}</p>

            <div className="about-us__list" role="list" aria-label="Neden biz detaylari">
              {reasons.map((reason, index) => (
                <article key={reason.title} className="about-us__item" role="listitem">
                  <div className="about-us__item-line">
                    <span className="about-us__item-index">{String(index + 1).padStart(2, "0")}</span>
                    <div className="about-us__item-copy">
                      <h3>{reason.title}</h3>
                      <p>{reason.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
