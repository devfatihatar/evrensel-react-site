import { useEffect, useMemo, useRef, useState } from "react"

const parseDisplayValue = (input) => {
  const raw = String(input ?? "")
  const match = raw.match(/^(\D*)(\d+)(.*)$/)
  if (!match) return null

  return {
    prefix: match[1],
    target: Number(match[2]),
    suffix: match[3],
    padLength: match[2].length,
  }
}

export default function CountUpText({ value, duration = 4800 }) {
  const parsed = useMemo(() => parseDisplayValue(value), [value])
  const ref = useRef(null)
  const hasAnimatedRef = useRef(false)
  const [display, setDisplay] = useState(() => {
    if (!parsed) return String(value ?? "")
    return `${parsed.prefix}${String(0).padStart(parsed.padLength, "0")}${parsed.suffix}`
  })

  useEffect(() => {
    if (!parsed) {
      setDisplay(String(value ?? ""))
      return
    }

    const element = ref.current
    if (!element) return

    let rafId = 0
    const isInViewport = () => {
      const rect = element.getBoundingClientRect()
      return rect.top < window.innerHeight * 0.9 && rect.bottom > 0
    }

    const startAnimation = () => {
      if (hasAnimatedRef.current) return
      hasAnimatedRef.current = true

      const startTime = performance.now()

      const tick = (now) => {
        const progress = Math.min(1, (now - startTime) / duration)
        const eased = 1 - Math.pow(1 - progress, 5)
        const next = Math.round(parsed.target * eased)
        const numberText = String(next).padStart(parsed.padLength, "0")
        setDisplay(`${parsed.prefix}${numberText}${parsed.suffix}`)

        if (progress < 1) {
          rafId = window.requestAnimationFrame(tick)
        }
      }

      rafId = window.requestAnimationFrame(tick)
    }

    const onScrollOrResize = () => {
      if (isInViewport()) {
        startAnimation()
        window.removeEventListener("scroll", onScrollOrResize)
        window.removeEventListener("resize", onScrollOrResize)
      }
    }

    if (isInViewport()) {
      startAnimation()
    } else {
      window.addEventListener("scroll", onScrollOrResize, { passive: true })
      window.addEventListener("resize", onScrollOrResize)
    }

    return () => {
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [duration, parsed])

  return <span ref={ref}>{display}</span>
}
