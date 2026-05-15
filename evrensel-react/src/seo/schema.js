import {
  BUSINESS_ADDRESS_COUNTRY,
  BUSINESS_ADDRESS_LOCALITY,
  BUSINESS_ADDRESS_REGION,
  BUSINESS_EMAIL,
  BUSINESS_LATITUDE,
  BUSINESS_LONGITUDE,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_STREET_ADDRESS,
  DEFAULT_OG_IMAGE,
  SAME_AS_URLS,
  SITE_NAME,
  SITE_URL,
  toAbsoluteUrl,
} from "./config"

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    image: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    telephone: BUSINESS_PHONE_DISPLAY,
    email: BUSINESS_EMAIL,
    sameAs: SAME_AS_URLS,
  }
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    telephone: BUSINESS_PHONE_DISPLAY,
    email: BUSINESS_EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_STREET_ADDRESS,
      addressLocality: BUSINESS_ADDRESS_LOCALITY,
      addressRegion: BUSINESS_ADDRESS_REGION,
      addressCountry: BUSINESS_ADDRESS_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_LATITUDE,
      longitude: BUSINESS_LONGITUDE,
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
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "tr-TR",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
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
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
  }
}

export function getWebPageSchema({ title, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "tr-TR",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
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
