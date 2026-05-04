import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Suspense, lazy, useEffect } from "react"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import FloatingContacts from "../components/layout/FloatingContacts"
import CookieBanner from "../components/layout/CookieBanner"
import SiteSeo from "../components/seo/SiteSeo"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

const About = lazy(() => import("../pages/About"))
const WebDesign = lazy(() => import("../pages/WebDesign"))
const SocialMedia = lazy(() => import("../pages/SocialMedia"))
const Hardware = lazy(() => import("../pages/Hardware"))
const Services = lazy(() => import("../pages/Services"))
const ServiceDetail = lazy(() => import("../pages/ServiceDetail"))
const Support = lazy(() => import("../pages/Support"))
const Contact = lazy(() => import("../pages/Contact"))

function RouterContent() {
  const location = useLocation()

  useEffect(() => {
    const items = document.querySelectorAll(".page > .section, .page .reveal-on-scroll")

    if (!items.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    )

    items.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [location.pathname])

  return (
    <>
      <SiteSeo />
      <Navbar />
      <FloatingContacts />
      <CookieBanner />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/web-tasarim" element={<WebDesign />} />
          <Route path="/sosyal-medya" element={<SocialMedia />} />
          <Route path="/donanim" element={<Hardware />} />
          <Route path="/hizmetlerimiz" element={<Services />} />
          <Route path="/hizmetlerimiz/:slug" element={<ServiceDetail />} />
          <Route path="/yardim-destek" element={<Support />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  )
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  )
}
