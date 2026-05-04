import PageSeo from "../components/seo/PageSeo"
import SupportHero from "../components/support/SupportHero"
import SupportDownloadsSection from "../components/support/SupportDownloadsSection"
import seoData from "../data/seoData.json"
import supportData from "../data/supportData.json"
import { getBreadcrumbSchema, getServiceSchema } from "../seo/schema"

const supportSeo = seoData.support

export default function Support() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Yardım ve Destek", path: supportSeo.path },
  ])

  const serviceSchema = getServiceSchema({
    name: "Yardım ve Destek Hizmetleri",
    description: supportSeo.description,
    path: supportSeo.path,
  })

  return (
    <>
      <PageSeo
        title={supportSeo.title}
        description={supportSeo.description}
        path={supportSeo.path}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <main className="support-page page">
        <SupportHero section={supportData.downloadsSection} />
        <SupportDownloadsSection section={supportData.downloadsSection} items={supportData.downloadItems} />
      </main>
    </>
  )
}
