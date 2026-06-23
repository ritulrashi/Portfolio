import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Ticker />
      <main className="pt-32 pb-margin-desktop">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
