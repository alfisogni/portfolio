import { useEffect } from "react"
import { useVideo } from "../video.tsx"

const SRC = "/bg.mp4"

function motionReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function BackgroundVideo() {
  const { videoRef, setPaused } = useVideo()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (motionReduced()) {
      video.pause()
      setPaused(true)
      return
    }

    void video.play().then(() => setPaused(false)).catch(() => {})
  }, [setPaused])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        src={SRC}
        autoPlay={!motionReduced()}
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover opacity-100"
      />
    </div>
  )
}
