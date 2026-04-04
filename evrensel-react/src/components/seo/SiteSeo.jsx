import { Helmet } from "react-helmet-async"
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL } from "../../seo/config"
import { getLocalBusinessSchema, getOrganizationSchema, getWebsiteSchema } from "../../seo/schema"

const globalSchemas = [getOrganizationSchema(), getLocalBusinessSchema(), getWebsiteSchema()]

export default function SiteSeo() {
  return (
    <Helmet>
      <html lang="tr" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#4a0f1a" />

      <title>{DEFAULT_TITLE}</title>
      <meta name="description" content={DEFAULT_DESCRIPTION} />
      <meta name="application-name" content={SITE_NAME} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={DEFAULT_TITLE} />
      <meta property="og:description" content={DEFAULT_DESCRIPTION} />
      <meta property="og:url" content={SITE_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={DEFAULT_TITLE} />
      <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />

      {globalSchemas.map((schema, index) => (
        <script key={`global-schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
