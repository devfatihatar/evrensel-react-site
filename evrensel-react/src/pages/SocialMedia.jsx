import PageSeo from "../components/seo/PageSeo"
import SocialMediaHero from "../components/social-media/SocialMediaHero"
import SocialMediaShowcase from "../components/social-media/SocialMediaShowcase"
import SocialMediaScope from "../components/social-media/SocialMediaScope"
import SocialMediaProcess from "../components/social-media/SocialMediaProcess"
import SocialMediaPackages from "../components/social-media/SocialMediaPackages"
import SocialMediaCta from "../components/social-media/SocialMediaCta"
import seoData from "../data/seoData.json"
import socialMediaData from "../data/socialMediaData.json"
import { getBreadcrumbSchema, getServiceSchema } from "../seo/schema"
import { resolveImage } from "../utils/imageResolver"

const socialMediaSeo = seoData.socialMedia
const { hero, highlights, scope, process, packages: packageSection, cta, assets, showcase } = socialMediaData

export default function SocialMedia() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Sosyal Medya", path: socialMediaSeo.path },
  ])

  const serviceSchema = getServiceSchema({
    name: "Sosyal Medya Hizmetleri",
    description: socialMediaSeo.description,
    path: socialMediaSeo.path,
  })

  return (
    <>
      <PageSeo
        title={socialMediaSeo.title}
        description={socialMediaSeo.description}
        path={socialMediaSeo.path}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <main className="social-media-page page">
        <SocialMediaHero hero={hero} socialMediaMainImage={resolveImage(assets.heroImagePath)} />
        <SocialMediaShowcase hero={hero} highlights={highlights} showcase={showcase} />
        <SocialMediaScope scope={scope} />
        <SocialMediaProcess process={process} />
        <SocialMediaPackages packageSection={packageSection} />
        <SocialMediaCta cta={cta} />
      </main>
    </>
  )
}
