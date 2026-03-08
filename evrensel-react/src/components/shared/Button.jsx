import { Link } from "react-router-dom"

export default function Button({
  to,
  href,
  variant = "primary",
  className = "",
  children,
  type = "button",
  onClick,
}) {
  const classes = `btn btn-${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (!href) {
    return (
      <button type={type} className={classes} onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}
