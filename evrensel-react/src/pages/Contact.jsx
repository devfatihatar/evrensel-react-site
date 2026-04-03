import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"

const contactCards = [
  {
    title: "Telefon",
    value: "+90 555 111 22 33",
    detail: "Hafta içi çalışma saatlerinde doğrudan ulaşabilirsiniz.",
    href: "tel:+905551112233",
  },
  {
    title: "E-posta",
    value: "info@evrenselbilisim.com",
    detail: "Taleplerinizi kısa bir özetle e-posta üzerinden iletebilirsiniz.",
    href: "mailto:info@evrenselbilisim.com",
  },
  {
    title: "Adres",
    value: "Şişli / İstanbul",
    detail: "Merkez Mah. Teknoloji Cad. No:12 adresinde hizmet veriyoruz.",
  },
]

const serviceTopics = [
  "Web tasarımı ve geliştirme",
  "Donanım ve altyapı kurulumu",
  "Teknik destek ve bakım",
  "Genel bilgi ve teklif talebi",
]

const notes = [
  "İhtiyacınızı kısa ve net şekilde iletin.",
  "Varsa mevcut sorun ya da hedefinizi belirtin.",
  "Dilerseniz telefon üzerinden de ön görüşme planlayabiliriz.",
]

export default function Contact() {
  return (
    <main className="contact-page page">
      <section className="section contact-page__hero">
        <div className="container contact-page__hero-grid">
          <div className="contact-page__hero-content">
            <SectionTitle
              eyebrow="İletişim"
              title="İhtiyacınızı paylaşın, size uygun yolu birlikte netleştirelim"
              subtitle="Web, donanım veya teknik destek tarafında hangi konuda desteğe ihtiyaç duyduğunuzu iletin; en uygun başlangıç planını birlikte çıkaralım."
            />

            <p className="contact-page__lead">
              İlk görüşmede amacımız sizi gereksiz teknik detaylarla yormak değil,
              ihtiyacınızı doğru anlamaktır. Kısa bir özet bile çoğu zaman doğru
              çerçeveyi kurmak için yeterlidir.
            </p>

            <div className="contact-page__hero-actions">
              <Button href="tel:+905551112233">Hemen Arayın</Button>
              <Button href="mailto:info@evrenselbilisim.com" variant="secondary">
                E-posta Gönderin
              </Button>
            </div>
          </div>

          <aside className="contact-page__hero-panel" aria-label="İletişim bilgileri">
            <ul className="contact-page__card-list">
              {contactCards.map((item) => (
                <li key={item.title} className="contact-page__info-card">
                  <strong>{item.title}</strong>
                  {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section contact-page__content">
        <div className="container contact-page__content-grid">
          <div className="contact-page__form-box">
            <SectionTitle
              eyebrow="İletişim Formu"
              title="Kısa bir ön bilgi bırakın"
              subtitle="Bu alan şimdilik statik form yapısı olarak hazırlandı. Sonraki adımda bunu mail servisi ya da backend’e bağlayabiliriz."
            />

            <form className="contact-page__form">
              <label className="contact-page__field">
                <span>Ad Soyad</span>
                <input type="text" name="name" placeholder="Adınızı ve soyadınızı yazın" />
              </label>

              <label className="contact-page__field">
                <span>Telefon</span>
                <input type="tel" name="phone" placeholder="Telefon numaranızı yazın" />
              </label>

              <label className="contact-page__field">
                <span>E-posta</span>
                <input type="email" name="email" placeholder="E-posta adresinizi yazın" />
              </label>

              <label className="contact-page__field">
                <span>İlgilendiğiniz Hizmet</span>
                <select name="topic" defaultValue="">
                  <option value="" disabled>
                    Hizmet başlığı seçin
                  </option>
                  {serviceTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </label>

              <label className="contact-page__field contact-page__field--full">
                <span>Mesajınız</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Kısaca ihtiyacınızı, mevcut durumunuzu veya almak istediğiniz hizmeti yazın"
                />
              </label>

              <div className="contact-page__form-actions">
                <Button type="submit">Mesajı Gönder</Button>
              </div>
            </form>
          </div>

          <aside className="contact-page__side">
            <div className="contact-page__side-box">
              <h3>Çalışma Düzeni</h3>
              <ul className="contact-page__side-list">
                <li>Hafta içi 09:00 - 18:30 aktif iletişim</li>
                <li>Ön görüşmeler için telefon ya da e-posta üzerinden planlama</li>
                <li>İhtiyaca göre uzaktan veya yerinde değerlendirme</li>
              </ul>
            </div>

            <div className="contact-page__side-box">
              <h3>Hızlı Notlar</h3>
              <ul className="contact-page__side-list">
                {notes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
