const path = require("node:path")
const { defineConfig } = require("vite")
const react = require("@vitejs/plugin-react")
const vitePrerender = require("vite-plugin-prerender")
const Renderer = vitePrerender.PuppeteerRenderer

const prerenderRoutes = [
  "/",
  "/hakkimizda",
  "/web-tasarim",
  "/sosyal-medya",
  "/donanim",
  "/hizmetlerimiz",
  "/hizmetlerimiz/web-tasarimi",
  "/hizmetlerimiz/donanim-altyapisi",
  "/hizmetlerimiz/yardim-destek",
  "/yardim-destek",
  "/iletisim",
]

module.exports = defineConfig({
  build: {
    target: "es2018",
  },
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: prerenderRoutes,
      renderer: new Renderer({
        renderAfterTime: 1500,
      }),
    }),
  ],
})
