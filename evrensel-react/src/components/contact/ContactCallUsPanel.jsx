import contactData from "../../data/contactData.json"

export default function ContactCallUsPanel() {
  const { contactCards } = contactData
  const visibleCards = contactCards.filter((card) => card.title !== "Adres")

  return (
    <div className="contact-page__side contact-page__side--right">
      <div className="contact-page__right-content">
        <div className="contact-page__panel-title">
          <h2>BİZE ULAŞIN</h2>
        </div>
        <div className="contact-page__info-panel">
          <div className="contact-page__info-cards">
            {visibleCards.map((card) => {
              const content = (
                <>
                  <span className="contact-page__info-card-label">{card.title}</span>
                  <strong className="contact-page__info-card-value">{card.value}</strong>
                  <p>{card.detail}</p>
                </>
              )

              return card.href ? (
                <a key={card.title} className="contact-page__info-card" href={card.href}>
                  {content}
                </a>
              ) : (
                <div key={card.title} className="contact-page__info-card">
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
