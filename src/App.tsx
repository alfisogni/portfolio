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
      <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
        <BackgroundVideo />
        <LocaleFade>
          <div className="relative z-10">
            <Navbar />
            <section className="flex min-h-screen flex-col pt-40 md:pt-28">
              <Hero />
            </section>
            <About />
            <Work />
            <Contact />
          </div>
        </LocaleFade>
      </div>
      </VideoProvider>
      </WriteProvider>
    </LocaleProvider>
  )
}
