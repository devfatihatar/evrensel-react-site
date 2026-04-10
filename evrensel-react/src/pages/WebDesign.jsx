import Button from "../components/shared/Button"
import PageSeo from "../components/seo/PageSeo"
import seoData from "../data/seoData.json"
import webDesignData from "../data/webDesignData.json"
import { getBreadcrumbSchema, getServiceSchema } from "../seo/schema"
import devicesImage from "../assets/images/web-design/devices.png"
import lighthouseImage from "../assets/images/web-design/lighthouse.png"
import seoImage from "../assets/images/web-design/seo.png"
import webArchitectureImage from "../assets/images/web-design/web-architecture.png"
import webSlideMainImage from "../assets/images/web-design/webslidermain.png"

const webDesignSeo = seoData.webDesign
const { hero } = webDesignData
const heroHighlights = [
  {
    imageSrc: lighthouseImage,
    title: "60+",
    text: "Performans skorlari",
  },
  {
    imageSrc: seoImage,
    title: "SEO",
    text: "SEO uyumlu altyapi",
  },
  {
    imageSrc: devicesImage,
    title: "Responsive Tasarim",
    text: "Tum cihazlarla uyumlu",
  },
]

export default function WebDesign() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Web Tasarim", path: webDesignSeo.path },
  ])

  const serviceSchema = getServiceSchema({
    name: "Web Tasarim ve Gelistirme Hizmetleri",
    description: webDesignSeo.description,
    path: webDesignSeo.path,
  })

  return (
    <>
      <PageSeo
        title={webDesignSeo.title}
        description={webDesignSeo.description}
        path={webDesignSeo.path}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <main className="web-design-page page">
        <section className="web-design-main-visual section" aria-label="Web tasarim ana gorseli">
          <div className="web-design-main-visual__frame">
            <img
              src={webSlideMainImage}
              alt="Web tasarim ana slider gorseli"
              className="web-design-main-visual__image"
            />

            <div className="container web-design-main-visual__overlay">
              <div className="web-design-hero web-design-hero__inner">
                <div className="web-design-hero__content">
                  <h1>{hero.title}</h1>
                  <p className="web-design-hero__lead">
                    {hero.subtitle}
                  </p>

                  <div className="web-design-hero__actions">
                    <Button to="/iletisim">{hero.primaryButton}</Button>
                  </div>
                </div>

                <aside className="web-design-hero__aside" aria-label={hero.panelAriaLabel}>
                  <div className="web-design-hero__highlights" aria-label="Web tasarim avantajlari">
                    {heroHighlights.map((item) => (
                      <article className="web-design-hero__highlight" key={item.text}>
                        <div className="web-design-hero__highlight-visual">
                          <img src={item.imageSrc} alt="" className="web-design-hero__highlight-image" />
                        </div>
                        <div className="web-design-hero__highlight-copy">
                          <strong>{item.title}</strong>
                          <span>{item.text}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="web-design-showcase section" aria-label="Web tasarim liste alani">
          <div className="container web-design-showcase__inner">
            <div className="web-design-showcase__grid">
              <div className="web-design-showcase__media">
                <img
                  src={webArchitectureImage}
                  alt="Web mimarisi gorseli"
                  className="web-design-showcase__image"
                />
              </div>

              <div className="web-design-showcase__content">
                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                  ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus
                  auctor fringilla.
                </p>

                <ul className="web-design-showcase__list" aria-label="Web tasarim liste alani">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</li>
                  <li>Vestibulum id ligula porta felis euismod semper.</li>
                  <li>Donec sed odio dui, posuere consectetur est at lobortis.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
