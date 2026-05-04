import { Helmet } from "react-helmet-async"
import { getLocalBusinessSchema, getOrganizationSchema, getWebsiteSchema } from "../../seo/schema"

const globalSchemas = [getOrganizationSchema(), getLocalBusinessSchema(), getWebsiteSchema()]

export default function SiteSeo() {
  return (
    <Helmet>
      <html lang="tr" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#4a0f1a" />

      {globalSchemas.map((schema, index) => (
        <script key={`global-schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
