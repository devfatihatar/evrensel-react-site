const fs = require("node:fs")
const path = require("node:path")

const rootDir = path.resolve(__dirname, "..")
const publicDir = path.join(rootDir, "public")
const siteUrl = (process.env.VITE_SITE_URL || "https://www.evrenselbilisim.com").replace(/\/$/, "")
const lastmod = "2026-05-12"

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(rootDir, relativePath), "utf8"))
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

const services = readJson("src/data/servicesData.json")
const categories = readJson("src/data/servicesCategoryData.json")

const urls = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/hakkimizda", changefreq: "monthly", priority: "0.8" },
  { path: "/web-tasarim", changefreq: "monthly", priority: "0.9" },
  { path: "/sosyal-medya", changefreq: "monthly", priority: "0.8" },
  { path: "/donanim", changefreq: "monthly", priority: "0.8" },
  { path: "/hizmetlerimiz", changefreq: "weekly", priority: "0.9" },
  ...categories.map((category) => ({
    path: `/hizmetlerimiz?kategori=${category.slug}`,
    changefreq: "monthly",
    priority: "0.7",
  })),
  ...services.map((service) => ({
    path: `/hizmetlerimiz/${service.slug}`,
    changefreq: "monthly",
    priority: "0.8",
  })),
  { path: "/yardim-destek", changefreq: "monthly", priority: "0.8" },
  { path: "/iletisim", changefreq: "monthly", priority: "0.7" },
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(`${siteUrl}${url.path}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`

const robots = `User-agent: *
Allow: /

Disallow: /404
Disallow: /*?utm_
Disallow: /*?fbclid=
Disallow: /*?gclid=

Sitemap: ${siteUrl}/sitemap.xml
`

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8")
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8")
