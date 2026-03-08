import Button from "../shared/Button"

const trustItems = ["48 saat içinde net plan", "Ücretsiz ön keşif", "Şeffaf teklif süreci"]

export default function CTA() {
  return (
    <section className="cta section reveal-on-scroll reveal-right">
      <div className="container cta__inner">
        <div className="cta__content">
          <p className="cta__eyebrow">Hemen Başlayalım</p>
          <h2>Projenizi 48 saat içinde netleştirelim</h2>
          <p>
            İhtiyacınızı analiz edip kapsam, süre ve bütçe çerçevesini birlikte
            belirleyelim.
          </p>

          <ul className="cta__trust">
            {trustItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="cta__actions">
          <Button to="/iletisim" variant="primary" className="cta__primary">
            Teklif Al
          </Button>
          <Button href="tel:+905551112233" variant="secondary" className="cta__secondary-btn">
            Bizi Ara
          </Button>
        </div>
      </div>
    </section>
  )
}
