import { useEffect, useRef, type ElementType, type ReactNode } from "react"

const REDUCED = "(prefers-reduced-motion: reduce)"

type RevealProps = {
  as?: ElementType
  className?: string
  /** Retraso en ms, para escalonar tarjetas de una misma fila. */
  delay?: number
  children: ReactNode
}

/**
 * Entrada sutil: opacidad + 24 px de desplazamiento, 800 ms, solo transform y opacity.
 * Regla: todo es visible en reposo. Lo que ya se ve al cargar nunca se oculta; solo se
 * prepara lo que está por debajo del pliegue, y se muestra apenas se acerca. Con
 * movimiento reducido o sin IntersectionObserver no se toca nada. El estado vive en un
 * atributo del DOM (ver .reveal en index.css), no en React, para no pelear con los renders.
 */
export function Reveal({ as: Tag = "div", className, delay = 0, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return
    if (window.matchMedia(REDUCED).matches) return

    const root = el.closest<HTMLElement>(".page-scroll")
    if (!root) return
    // Ya visible (o por encima de la vista): no se oculta nunca.
    if (el.getBoundingClientRect().top < root.getBoundingClientRect().bottom - 24) return

    el.style.setProperty("--reveal-delay", `${delay}ms`)
    el.dataset.reveal = "pending"
    const show = () => {
      el.dataset.reveal = "done"
      observer.disconnect()
      root.removeEventListener("scroll", onScroll)
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) show()
      },
      { root, rootMargin: "0px 0px -22% 0px" },
    )
    // Un salto por ancla puede pasar de largo sin que el observer lo note: lo que quedó
    // por encima de la vista se muestra, así nada queda oculto detrás de la persona.
    const onScroll = () => {
      if (el.getBoundingClientRect().bottom < root.getBoundingClientRect().top) show()
    }
    observer.observe(el)
    root.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      observer.disconnect()
      root.removeEventListener("scroll", onScroll)
      el.dataset.reveal = "done"
    }
  }, [delay])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
