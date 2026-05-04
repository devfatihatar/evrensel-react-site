import {
  BUSINESS_ADDRESS_COUNTRY,
  BUSINESS_ADDRESS_LOCALITY,
  BUSINESS_ADDRESS_REGION,
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  toAbsoluteUrl,
} from "./config"

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    image: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    telephone: BUSINESS_PHONE_DISPLAY,
    email: BUSINESS_EMAIL,
  }
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    image: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    telephone: BUSINESS_PHONE_DISPLAY,
    email: BUSINESS_EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_ADDRESS_LOCALITY,
      addressRegion: BUSINESS_ADDRESS_REGION,
      addressCountry: BUSINESS_ADDRESS_COUNTRY,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Antalya",
      },
      {
        "@type": "Country",
        name: "Türkiye",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],
  }
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/hizmetlerimiz?kategori={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
}

export function getServiceSchema({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
  }
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
