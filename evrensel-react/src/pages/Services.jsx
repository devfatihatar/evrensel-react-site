import { useSearchParams } from "react-router-dom"
import PageSeo from "../components/seo/PageSeo"
import ServicesCatalog from "../components/services/ServicesCatalog"
import services from "../data/servicesData.json"
import servicesCategoryData from "../data/servicesCategoryData.json"
import servicesPageData from "../data/servicesPageData.json"
import navbarData from "../data/navbarData.json"
import seoData from "../data/seoData.json"
import { getBreadcrumbSchema } from "../seo/schema"
import { resolveImageList } from "../utils/imageResolver"

const servicesSeo = seoData.services
const serviceDropdownItems =
  navbarData.links.find((link) => link.to === "/hizmetlerimiz")?.children ?? []

export default function ServicesPage() {
  const [searchParams] = useSearchParams()
const activeCategorySlug = searchParams.get("kategori")
  const activeDropdownItem = serviceDropdownItems.find((item) => {
    const query = item.to.split("?")[1] ?? ""
    return new URLSearchParams(query).get("kategori") === activeCategorySlug
  })
  const activeCategory = servicesCategoryData.find((item) => item.slug === activeCategorySlug)
  const activeCategoryWithNav =
    activeCategory && activeDropdownItem
      ? { ...activeCategory, to: activeDropdownItem.to, label: activeDropdownItem.label }
      : null
  const pageTitle = activeCategoryWithNav
    ? `${activeCategoryWithNav.label} | Hizmetlerimiz | Evrensel Bilişim`
    : servicesSeo.title
  const pageDescription = activeCategoryWithNav?.description ?? servicesSeo.description
  const pagePath = activeCategoryWithNav?.to ?? servicesSeo.path

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetlerimiz", path: servicesSeo.path },
    ...(activeCategoryWithNav
      ? [{ name: activeCategoryWithNav.label, path: activeCategoryWithNav.to }]
      : []),
  ])

  return (
    <>
      <PageSeo
        title={pageTitle}
        description={pageDescription}
        path={pagePath}
        jsonLd={[breadcrumbSchema]}
      />

      <main className={`services-page page${activeCategoryWithNav ? " services-page--category-view" : ""}`}>
        <ServicesCatalog
          activeCategory={activeCategoryWithNav}
          benefits={servicesPageData.benefits}
          benefitsSection={servicesPageData.benefitsSection}
          catalog={servicesPageData.catalog}
          hero={servicesPageData.hero}
          labels={servicesPageData.labels}
          services={services}
          serviceShowcaseImages={resolveImageList(servicesPageData.showcaseImagePaths)}
        />
      </main>
    </>
  )
}
