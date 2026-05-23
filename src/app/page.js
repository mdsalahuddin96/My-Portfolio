import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";
import SocialLinks from "@/components/SocialLinks";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Top from "@/components/Top";

export default function Home() {
  return (
    <main className="relative min-h-screen container mx-auto">
      
      <ParticleBackground />
      <Top/>
      <Navbar />
      
      <Hero />
      <About />
      <TechStack />
      <Skills/>
      <Projects />
      <Education />
      <Contact />
      <SocialLinks/>
      <Footer/>
    </main>
  );
}
