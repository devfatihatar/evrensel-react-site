export default function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <header className={`section-title section-title--${align}`}>
      {eyebrow ? <span className="section-title__eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
    </header>
  )
}
