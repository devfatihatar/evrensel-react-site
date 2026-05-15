import { useState } from "react"
import PageSeo from "../components/seo/PageSeo"
import WebDesignHero from "../components/web-design/WebDesignHero"
import WebDesignMessage from "../components/web-design/WebDesignMessage"
import WebDesignShowcase from "../components/web-design/WebDesignShowcase"
import WebDesignProcess from "../components/web-design/WebDesignProcess"
import WebDesignDeliverables from "../components/web-design/WebDesignDeliverables"
import WebDesignSocialLinks from "../components/web-design/WebDesignSocialLinks"
import seoData from "../data/seoData.json"
import webDesignData from "../data/webDesignData.json"
import { getBreadcrumbSchema, getServiceSchema } from "../seo/schema"
import { resolveImage } from "../utils/imageResolver"

const webDesignSeo = seoData.webDesign
const {
  hero,
  servicesSection,
  services,
  deliverablesSection,
  deliverables,
  processSection,
  processSteps,
  assets,
  message,
  socialLinks,
} = webDesignData
const socialIcons = socialLinks.items.map((item) => ({
  ...item,
  logoSrc: resolveImage(assets.socialIconPaths[item.logoKey]),
}))
const processBoardSteps = [
  ...processSteps,
  {
    step: "04",
    title: "Yayın ve Destek",
    text: "Yayına alma, son kontroller ve sonraki süreçte ihtiyaç duyulan teknik desteği planlı şekilde sürdürüyoruz.",
  },
]
const heroHighlights = [
  {
    imageSrc: resolveImage(assets.highlightImagePaths.lighthouse),
    title: "60+",
    text: "Performans skorları",
  },
  {
    imageSrc: resolveImage(assets.highlightImagePaths.seo),
    title: "SEO",
    text: "SEO uyumlu altyapı",
  },
  {
    imageSrc: resolveImage(assets.highlightImagePaths.devices),
    title: "Responsive Tasarım",
    text: "Tüm cihazlarla uyumlu",
  },
]

export default function WebDesign() {
  const [hoveredSocialIndex, setHoveredSocialIndex] = useState(-1)

  const handleSocialClick = (event, href) => {
    event.preventDefault()
    event.stopPropagation()
    window.location.assign(href)
  }

  const handleSocialEnter = (index) => {
    setHoveredSocialIndex(index)
  }

  const handleSocialLeave = () => {
    setHoveredSocialIndex(-1)
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Web Tasarım", path: webDesignSeo.path },
  ])

  const serviceSchema = getServiceSchema({
    name: "Web Tasarım ve Geliştirme Hizmetleri",
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
        <WebDesignHero
          hero={hero}
          heroHighlights={heroHighlights}
          webSlideMainImage={resolveImage(assets.heroImagePath)}
        />
        <WebDesignMessage
          message={message}
        />
        <WebDesignShowcase
          servicesSection={servicesSection}
          services={services}
          webArchitectureImage={resolveImage(assets.showcaseImagePath)}
        />
        <WebDesignProcess processSection={processSection} processBoardSteps={processBoardSteps} />
        <WebDesignDeliverables
          deliverablesSection={deliverablesSection}
          deliverables={deliverables}
        />
        <WebDesignSocialLinks
          socialIcons={socialIcons}
          activeSocialIndex={-1}
          hoveredSocialIndex={hoveredSocialIndex}
          followText={socialLinks.followText}
          handleSocialClick={handleSocialClick}
          handleSocialEnter={handleSocialEnter}
          handleSocialLeave={handleSocialLeave}
        />
      </main>
    </>
  )
}
