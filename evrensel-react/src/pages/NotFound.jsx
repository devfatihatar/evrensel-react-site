import Button from "../components/shared/Button"
import PageSeo from "../components/seo/PageSeo"
import seoData from "../data/seoData.json"

const { notFound } = seoData

export default function NotFound() {
  return (
    <>
      <PageSeo title={notFound.title} description={notFound.description} path={notFound.path} noindex />

      <main className="page section">
        <div className="container" style={{ paddingBlock: "4rem" }}>
          <h1>Sayfa Bulunamadı</h1>
          <p>Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
          <Button to="/">Ana Sayfaya Dön</Button>
        </div>
      </main>
    </>
  )
}
