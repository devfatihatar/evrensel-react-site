import PageSeo from "../components/seo/PageSeo"
import ContactCallUsPanel from "../components/contact/ContactCallUsPanel"
import ContactReachUsPanel from "../components/contact/ContactReachUsPanel"
import seoData from "../data/seoData.json"
import { getBreadcrumbSchema } from "../seo/schema"

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
        <h1 className="sr-only">{contactSeo.title}</h1>
        <section className="section contact-page__split-section">
          <div className="container">
            <div
              className="contact-page__split"
            >
              <ContactReachUsPanel />
              <ContactCallUsPanel />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
