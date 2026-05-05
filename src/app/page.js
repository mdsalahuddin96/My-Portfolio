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

export default function Home() {
  return (
    <main className="relative min-h-screen container mx-auto">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Skills/>
      <Projects />
      <Education />
      <Contact />
      <SocialLinks/>
      <footer className="py-12 border-t border-white/5 text-center text-gray-500">
        <div className="container mx-auto px-6">
          <p>
            © {new Date().getFullYear()} Md. Salah uddin. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-blue-500 transition-colors">
              Github
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
