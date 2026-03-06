import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{display:"flex", gap:"20px", padding:"20px", background:"#eee"}}>
      <Link to="/">Anasayfa</Link>
      <Link to="/hakkimizda">Hakkımızda</Link>
      <Link to="/web-tasarim">Web Tasarım</Link>
      <Link to="/donanim">Donanım</Link>
      <Link to="/hizmetlerimiz">Hizmetlerimiz</Link>
      <Link to="/yardim-destek">Yardım & Destek</Link>
      <Link to="/iletisim">İletişim</Link>
    </nav>
  )
}