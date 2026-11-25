import { useEffect, useState } from "react"
import { useVideo } from "../video.tsx"

const REDUCED = "(prefers-reduced-motion: reduce)"
const NARROW = "(max-width: 768px)"

// Escritorio: WebM (VP9) primero, MP4 de respaldo. Móvil: una sola versión de 640 px.
const SOURCES = {
  wide: { poster: "/bg-poster.jpg", files: [{ src: "/bg.webm", type: "video/webm" }, { src: "/bg.mp4", type: "video/mp4" }] },
  narrow: { poster: "/bg-poster-mobile.jpg", files: [{ src: "/bg-mobile.mp4", type: "video/mp4" }] },
}

function useMedia(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const list = window.matchMedia(query)
    const onChange = () => setMatches(list.matches)
    list.addEventListener("change", onChange)
    return () => list.removeEventListener("change", onChange)
  }, [query])
  return matches
}

export function BackgroundVideo() {
  const { videoRef, setPaused } = useVideo()
  const reduced = useMedia(REDUCED)
  const narrow = useMedia(NARROW)
  const variant = narrow ? SOURCES.narrow : SOURCES.wide

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (reduced) {
      video.pause()
      video.currentTime = 0
      setPaused(true)
      return
    }

    void video.play().then(() => setPaused(false)).catch(() => {})
  }, [reduced, variant, setPaused, videoRef])

  return (
    <div
      className="bg-poster pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ backgroundImage: `url(${variant.poster})` }}
    >
      <video
        // Al cambiar de versión (rotar el teléfono, redimensionar) se remonta con sus fuentes.
        key={narrow ? "narrow" : "wide"}
        ref={videoRef}
        poster={variant.poster}
        autoPlay={!reduced}
        muted
        loop
        playsInline
        // Con movimiento reducido no se descarga nada hasta que la persona toque play.
        preload={reduced ? "none" : narrow ? "metadata" : "auto"}
        className="h-full w-full object-cover opacity-100"
      >
        {variant.files.map((file) => (
          <source key={file.src} src={file.src} type={file.type} />
        ))}
      </video>
      {/* Velo: promedio 35 %, más denso arriba (barra) y en el centro (titular). Medido: texto del hero 6,9:1 en el peor cuadro. */}
      <div className="bg-veil absolute inset-0" aria-hidden="true" />
    </div>
  )
}
