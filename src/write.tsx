import { createContext, useCallback, useContext, useState, type ReactNode } from "react"

type WriteValue = {
  open: boolean
  openWrite: () => void
  closeWrite: () => void
}

const WriteContext = createContext<WriteValue | null>(null)

export function WriteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openWrite = useCallback(() => {
    setOpen(true)
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    document.getElementById("top")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" })
  }, [])

  const closeWrite = useCallback(() => setOpen(false), [])

  return (
    <WriteContext.Provider value={{ open, openWrite, closeWrite }}>
      {children}
    </WriteContext.Provider>
  )
}

export function useWrite() {
  const value = useContext(WriteContext)
  if (!value) throw new Error("useWrite must be used within WriteProvider")
  return value
}
