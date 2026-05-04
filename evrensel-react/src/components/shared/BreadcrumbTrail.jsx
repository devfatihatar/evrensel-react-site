import { Link } from "react-router-dom"

export default function BreadcrumbTrail({ items, className = "" }) {
  return (
    <nav className={`breadcrumb-trail ${className}`.trim()} aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={`${item.label}-${item.to ?? index}`}>
              {isLast || !item.to ? (
                <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
