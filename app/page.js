import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import MyProjectsSection from "../components/MyProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="bg-black text-white snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Section 1: Hero / Intro */}
      <section id="intro" className="snap-start h-screen w-full">
        <IntroSection />
      </section>

      {/* Section 2: About */}
      <section id="about" className="snap-start h-screen w-full">
        <AboutSection />
      </section>

      {/* Section 3: Projects */}
      <section id="projects" className="snap-start h-screen w-full">
        <MyProjectsSection />
      </section>

      {/* Section 4: Contact */}
      <section id="contact" className="snap-start h-screen w-full">
        <ContactSection />
      </section>
    </main>
  );
}
