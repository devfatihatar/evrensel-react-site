import PageSeo from "../components/seo/PageSeo"
import AboutHero from "../components/about/AboutHero"
import AboutStory from "../components/about/AboutStory"
import AboutPrinciples from "../components/about/AboutPrinciples"
import AboutCapabilities from "../components/about/AboutCapabilities"
import AboutModel from "../components/about/AboutModel"
import AboutCta from "../components/about/AboutCta"
import aboutData from "../data/aboutData.json"
import seoData from "../data/seoData.json"
import { getBreadcrumbSchema } from "../seo/schema"

const {
  hero,
  story,
  timeline,
  principlesSection,
  principles,
  capabilitiesSection,
  capabilities,
  facts,
  modelSection,
  workModel,
  cta,
} = aboutData

const aboutSeo = seoData.about

export default function About() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Hakkımızda", path: aboutSeo.path },
  ])

  return (
    <>
      <PageSeo
        title={aboutSeo.title}
        description={aboutSeo.description}
        path={aboutSeo.path}
        jsonLd={[breadcrumbSchema]}
      />

      <main className="about-page page">
        <AboutHero hero={hero} facts={facts} />
        <AboutStory story={story} timeline={timeline} />
        <AboutPrinciples principlesSection={principlesSection} principles={principles} />
        <AboutCapabilities capabilitiesSection={capabilitiesSection} capabilities={capabilities} />
        <AboutModel modelSection={modelSection} workModel={workModel} />
        <AboutCta cta={cta} />
      </main>
    </>
  )
}
