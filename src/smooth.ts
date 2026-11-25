import Lenis from "lenis"
import { useEffect, type RefObject } from "react"

const REDUCED = "(prefers-reduced-motion: reduce)"

/**
 * Una sola instancia de Lenis sobre el contenedor de scroll de la página (no sobre window,
 * porque la página scrollea dentro de `.page-scroll`). Se destruye al desmontar y se apaga
 * con prefers-reduced-motion, incluso si cambia mientras la página está abierta.
 * Reloj propio (autoRaf): no hay GSAP, así que no hay un segundo reloj que sincronizar.
 * Los anclas (#work, #about, #contact, #top) se resuelven con lenis.scrollTo desde un solo
 * listener en document: la barra vive fuera del contenedor, así que `anchors` de Lenis no la ve.
 * Un contenedor con scroll propio dentro de la página debe llevar `data-lenis-prevent`.
 */
export function useSmoothScroll(wrapper: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = wrapper.current
    if (!el) return

    const media = window.matchMedia(REDUCED)
    let lenis: Lenis | null = null

    const sync = () => {
      if (media.matches) {
        lenis?.destroy()
        lenis = null
      } else if (!lenis) {
        lenis = new Lenis({ wrapper: el, content: el, autoRaf: true })
      }
    }

    const onClick = (event: MouseEvent) => {
      if (!lenis || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
      const hash = link?.getAttribute("href")
      if (!hash || hash.length < 2) return
      const target = document.querySelector<HTMLElement>(hash)
      if (!target) return
      event.preventDefault()
      lenis.scrollTo(target, { offset: 0 })
      history.pushState(null, "", hash)
    }

    sync()
    media.addEventListener("change", sync)
    document.addEventListener("click", onClick)
    return () => {
      media.removeEventListener("change", sync)
      document.removeEventListener("click", onClick)
      lenis?.destroy()
      lenis = null
    }
  }, [wrapper])
}
