import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"
import PageSeo from "../components/seo/PageSeo"
import contactData from "../data/contactData.json"
import seoData from "../data/seoData.json"
import { getBreadcrumbSchema } from "../seo/schema"

const { hero, contactCards, formSection, serviceTopics, workingModel, quickNotes, notes } = contactData
const contactSeo = seoData.contact

export default function Contact() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "İletişim", path: contactSeo.path },
  ])

  return (
    <>
      <PageSeo
        title={contactSeo.title}
        description={contactSeo.description}
        path={contactSeo.path}
        jsonLd={[breadcrumbSchema]}
      />

      <main className="contact-page page">
        <section className="section contact-page__hero">
          <div className="container contact-page__hero-grid">
            <div className="contact-page__hero-content">
              <SectionTitle eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

              <p className="contact-page__lead">{hero.lead}</p>

              <div className="contact-page__hero-actions">
                <Button href="tel:+905551112233">{hero.primaryButton}</Button>
                <Button href="mailto:info@evrenselbilisim.com" variant="secondary">
                  {hero.secondaryButton}
                </Button>
              </div>
            </div>

            <aside className="contact-page__hero-panel" aria-label={hero.panelAriaLabel}>
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
                eyebrow={formSection.eyebrow}
                title={formSection.title}
                subtitle={formSection.subtitle}
              />

              <form className="contact-page__form">
                <label className="contact-page__field">
                  <span>{formSection.fields.name.label}</span>
                  <input type="text" name="name" placeholder={formSection.fields.name.placeholder} />
                </label>

                <label className="contact-page__field">
                  <span>{formSection.fields.phone.label}</span>
                  <input type="tel" name="phone" placeholder={formSection.fields.phone.placeholder} />
                </label>

                <label className="contact-page__field">
                  <span>{formSection.fields.email.label}</span>
                  <input type="email" name="email" placeholder={formSection.fields.email.placeholder} />
                </label>

                <label className="contact-page__field">
                  <span>{formSection.fields.topic.label}</span>
                  <select name="topic" defaultValue="">
                    <option value="" disabled>
                      {formSection.fields.topic.placeholder}
                    </option>
                    {serviceTopics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="contact-page__field contact-page__field--full">
                  <span>{formSection.fields.message.label}</span>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder={formSection.fields.message.placeholder}
                  />
                </label>

                <div className="contact-page__form-actions">
                  <Button type="submit">{formSection.submitButton}</Button>
                </div>
              </form>
            </div>

            <aside className="contact-page__side">
              <div className="contact-page__side-box">
                <h3>{workingModel.title}</h3>
                <ul className="contact-page__side-list">
                  {workingModel.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="contact-page__side-box">
                <h3>{quickNotes.title}</h3>
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
    </>
  )
}
