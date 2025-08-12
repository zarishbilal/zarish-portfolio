import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      <Navigation />

      <section className="snap-start min-h-screen">
        <Hero />
      </section>

      <section className="snap-start min-h-screen">
        <About />
      </section>
<section className="snap-start min-h-screen">
        <Projects />
      </section>
      <section className="snap-start min-h-screen">
        <Skills />
      </section>

      

      <section className="snap-start min-h-screen">
        <Education />
      </section>

      <section className="snap-start min-h-screen">
        <Contact />
      </section>

      
    </div>
  );
};

export default Index;
