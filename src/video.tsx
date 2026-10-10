import { createContext, useCallback, useContext, useRef, useState, type ReactNode, type RefObject } from "react"

type VideoValue = {
  videoRef: RefObject<HTMLVideoElement | null>
  paused: boolean
  setPaused: (paused: boolean) => void
  toggle: () => void
}

const VideoContext = createContext<VideoValue | null>(null)

function motionReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function VideoProvider({ children }: { children: ReactNode }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [paused, setPaused] = useState(motionReduced)

  const toggle = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play().then(() => setPaused(false)).catch(() => {})
    } else {
      video.pause()
      setPaused(true)
    }
  }, [])

  return <VideoContext.Provider value={{ videoRef, paused, setPaused, toggle }}>{children}</VideoContext.Provider>
}

export function useVideo() {
  const value = useContext(VideoContext)
  if (!value) throw new Error("useVideo must be used within VideoProvider")
  return value
}
