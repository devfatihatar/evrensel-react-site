import Button from "../shared/Button"

export default function Hero() {
  return (
    <section className="hero section reveal-on-scroll reveal-right">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Evrensel Bilişim</p>
          <h1>Teknoloji çözümleri ile işinizi büyütün</h1>
          <p>
            Web tasarım, donanım ve teknik destek tarafında işletmelere hızlı ve
            güvenilir hizmet sunuyoruz.
          </p>

          <div className="hero__buttons">
            <Button to="/hizmetlerimiz" variant="primary">
              Hizmetlerimiz
            </Button>
            <Button to="/iletisim" variant="secondary">
              Bize Ulaşın
            </Button>
          </div>
        </div>

        <div className="hero__image" aria-label="Görsel alanı">
          <div className="hero__image-placeholder">
            Görsel Alanı
            <small>Buraya kendi görselini ekleyebilirsin</small>
          </div>
        </div>
      </div>
    </section>
  )
}
