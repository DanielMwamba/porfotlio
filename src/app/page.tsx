import { Nav } from "../app/components/nav"
import { Hero } from "../app/components/hero"
import { About } from "../app/components/about"
import { Skills } from "../app/components/skills"
import { Projects } from "../app/components/projects"
import { Contact } from "../app/components/contact"
import { Footer } from "../app/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

