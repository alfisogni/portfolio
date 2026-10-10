import { About } from "./components/About.tsx"
import { BackgroundVideo } from "./components/BackgroundVideo.tsx"
import { Contact } from "./components/Contact.tsx"
import { Hero } from "./components/Hero.tsx"
import { Navbar } from "./components/Navbar.tsx"
import { Work } from "./components/Work.tsx"
import { LocaleFade, LocaleProvider } from "./locale.tsx"
import { VideoProvider } from "./video.tsx"
import { WriteProvider } from "./write.tsx"

export default function App() {
  return (
    <LocaleProvider>
      <WriteProvider>
      <VideoProvider>
      <div className="h-dvh overflow-hidden bg-black text-white selection:bg-white selection:text-black">
        <BackgroundVideo />
        <LocaleFade>
          <div className="relative z-10 flex h-dvh flex-col">
            <Navbar />
            <div className="page-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain scroll-smooth">
              <section className="flex min-h-full flex-col">
                <Hero />
              </section>
              <About />
              <Work />
              <Contact />
            </div>
          </div>
        </LocaleFade>
      </div>
      </VideoProvider>
      </WriteProvider>
    </LocaleProvider>
  )
}
