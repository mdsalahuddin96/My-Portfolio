
"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Award, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

const cards = [
  {
    icon: GraduationCap,
    title: "DUET CSE Graduate",
    desc: "Computer Science & Engineering at Dhaka University of Engineering & Technology.",
  },
  {
    icon: Code2,
    title: "200+ Problems Solved",
    desc: "Strong JavaScript fundamentals through algorithm & DS practice.",
  },
  {
    icon: Award,
    title: "FreeCodeCamp Certified",
    desc: "Verified certifications in JavaScript algorithms and data structure.",
  },
  {
    icon: Rocket,
    title: "Shipping Mindset",
    desc: "Focused on production-ready, accessible, performant web apps.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        <SectionHeader
          tag="About Me"
          title="Full-stack developer focused on real-world impact"
          subtitle="I build modern, responsive web experiences and love turning complex problems into elegant interfaces."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I&apos;m a Full Stack Web Developer from Bangladesh with a CSE degree from DUET. I love
              building polished interfaces with <span className="text-primary">React</span> and
              <span className="text-primary"> Next.js</span>, backed by Node.js & MongoDB.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I sharpen my skills daily by solving algorithm challenges and building real-world
              projects. Currently open for remote, on‑site, and freelance opportunities.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Remote", "On-site", "Freelance"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-mono">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl p-6 group hover:border-primary/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center mb-4 group-hover:shadow-glow transition-shadow">
                    <Icon size={20} className="text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-1">{c.title}</h4>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;