export default function SectionTitle({ eyebrow, title, subtitle, align = "left", headingLevel = 2 }) {
  const HeadingTag = `h${headingLevel}`

  return (
    <header className={`section-title section-title--${align}`}>
      {eyebrow ? <span className="section-title__eyebrow">{eyebrow}</span> : null}
      <HeadingTag className="section-title__heading">{title}</HeadingTag>
      {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
    </header>
  )
}
