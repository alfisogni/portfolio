import Hls from "hls.js"
import { useEffect } from "react"
import { useVideo } from "../video.tsx"

const STREAM =
  "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8"

function motionReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function BackgroundVideo() {
  const { videoRef, setPaused } = useVideo()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = () => {
      if (motionReduced()) {
        video.pause()
        setPaused(true)
        return
      }
      void video.play().then(() => setPaused(false)).catch(() => {})
    }

    const nativeHls = video.canPlayType("application/vnd.apple.mpegurl")
    if (nativeHls && !Hls.isSupported()) {
      video.src = STREAM
      play()
      return
    }

    if (!Hls.isSupported()) return

    const hls = new Hls()
    hls.loadSource(STREAM)
    hls.attachMedia(video)
    hls.on(Hls.Events.MANIFEST_PARSED, play)
    return () => hls.destroy()
  }, [setPaused])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay={!motionReduced()}
        muted
        loop
        playsInline
        className="h-full w-full object-cover opacity-100"
      />
    </div>
  )
}
