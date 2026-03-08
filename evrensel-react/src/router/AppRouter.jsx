import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

import Home from "../pages/Home"
import About from "../pages/About"
import WebDesign from "../pages/WebDesign"
import Hardware from "../pages/Hardware"
import Services from "../pages/Services"
import ServiceDetail from "../pages/ServiceDetail"
import Support from "../pages/Support"
import Contact from "../pages/Contact"

export default function AppRouter() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/web-tasarim" element={<WebDesign />} />
        <Route path="/donanim" element={<Hardware />} />
        <Route path="/hizmetlerimiz" element={<Services />} />
        <Route path="/hizmetlerimiz/:slug" element={<ServiceDetail />} />
        <Route path="/yardim-destek" element={<Support />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}