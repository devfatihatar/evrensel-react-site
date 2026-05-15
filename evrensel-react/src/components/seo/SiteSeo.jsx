import { Helmet } from "react-helmet-async"
import { getLocalBusinessSchema, getOrganizationSchema, getWebsiteSchema } from "../../seo/schema"
import { useLanguage } from "../../i18n/LanguageContext"

const globalSchemas = [getOrganizationSchema(), getLocalBusinessSchema(), getWebsiteSchema()]

export default function SiteSeo() {
  const { lang } = useLanguage()

  return (
    <Helmet>
      <html lang={lang} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#4a0f1a" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link rel="preconnect" href="https://maps.googleapis.com" />
      <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />

      {globalSchemas.map((schema, index) => (
        <script key={`global-schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
