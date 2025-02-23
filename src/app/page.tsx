// import Navigation from "../app/components/navigation";
import Nav from "../app/components/nav"
import Hero from "../app/components/hero";
import About from "../app/components/about";
import Skills from "../app/components/skills";
import Projects from "../app/components/projects";
import Contact from "../app/components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
