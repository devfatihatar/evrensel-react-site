import PageSeo from "../components/seo/PageSeo"
import HardwareCasesSection from "../components/hardware/HardwareCasesSection"
import HardwareCtaSection from "../components/hardware/HardwareCtaSection"
import HardwareDeliverablesSection from "../components/hardware/HardwareDeliverablesSection"
import HardwareHero from "../components/hardware/HardwareHero"
import HardwareProcessSection from "../components/hardware/HardwareProcessSection"
import HardwareServicesSection from "../components/hardware/HardwareServicesSection"
import hardwareData from "../data/hardwareData.json"
import seoData from "../data/seoData.json"
import { getBreadcrumbSchema, getServiceSchema } from "../seo/schema"
import { resolveImage } from "../utils/imageResolver"

const {
  hero,
  highlights,
  servicesSection,
  services,
  processSection,
  processSteps,
  deliverablesSection,
  deliverables,
  casesSection,
  useCases,
  cta,
  assets,
} = hardwareData
const hardwareSeo = seoData.hardware

export default function Hardware() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Donanım", path: hardwareSeo.path },
  ])

  const serviceSchema = getServiceSchema({
    name: "Donanım ve Altyapı Hizmetleri",
    description: hardwareSeo.description,
    path: hardwareSeo.path,
  })

  return (
    <>
      <PageSeo
        title={hardwareSeo.title}
        description={hardwareSeo.description}
        path={hardwareSeo.path}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <main className="hardware-page page">
        <HardwareHero
          hero={hero}
          highlights={highlights}
          backgroundImage={resolveImage(assets.backgroundImagePath)}
          devicesImage={resolveImage(assets.highlightImagePath)}
        />
        <HardwareServicesSection section={servicesSection} services={services} />
        <HardwareProcessSection processSection={processSection} processSteps={processSteps} />
        <HardwareDeliverablesSection
          deliverablesSection={deliverablesSection}
          deliverables={deliverables}
        />
        <HardwareCasesSection casesSection={casesSection} useCases={useCases} />
        <HardwareCtaSection cta={cta} />
      </main>
    </>
  )
}
