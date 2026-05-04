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
          <h1>{notFound.heading}</h1>
          <p>{notFound.text}</p>
          <Button to="/">{notFound.button}</Button>
        </div>
      </main>
    </>
  )
}
