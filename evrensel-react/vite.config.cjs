const path = require("node:path")
const { defineConfig } = require("vite")
const react = require("@vitejs/plugin-react")
const vitePrerender = require("vite-plugin-prerender")

const prerenderRoutes = [
  "/",
  "/hakkimizda",
  "/web-tasarim",
  "/donanim",
  "/hizmetlerimiz",
  "/hizmetlerimiz/web-tasarimi",
  "/hizmetlerimiz/donanim-altyapisi",
  "/hizmetlerimiz/yardim-destek",
  "/yardim-destek",
  "/iletisim",
]

module.exports = defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: prerenderRoutes,
    }),
  ],
})
