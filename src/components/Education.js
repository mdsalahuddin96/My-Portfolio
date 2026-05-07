
'use client'
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Code } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: GraduationCap,
    title: "B.Sc. in Computer Science & Engineering",
    org: "Dhaka University of Engineering & Technology (DUET)",
    period: "2019 — 2023",
    desc: "Studied algorithms, databases, OS, networks and modern software engineering.",
  },
  {
    icon: Code,
    title: "JavaScript Algorithms & Data Structures",
    org: "FreeCodeCamp",
    period: "Certified",
    desc: "Solved 200+ problems and built JS-focused projects to certification level.",
  },
  {
    icon: BookOpen,
    title: "Full Stack Development",
    org: "Programming Hero ",
    period: "Ongoing",
    desc: "Daily learning, building modern projects, and contributing on GitHub.",
  },
];

const Education = () => (
  <section id="education" className="relative py-28 px-4 md:px-8">
    <div className="container max-w-4xl mx-auto">
      <SectionHeader tag="Education" title="My learning journey" />

      <div className="relative pl-8 md:pl-12">
        {/* Timeline line */}
        <div className="absolute left-3 md:left-5 top-1 bottom-0 w-px bg-gradient-to-b from-[#2775f0] via-[#9A52E8] to-transparent" />

        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-8 md:-left-12 top-1 w-7 h-7 rounded-full bg-gradient-primary grid place-items-center  ring-4 ring-background">
                <Icon size={14} className="text-primary-foreground" />
              </div>
              <div className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="font-bold text-lg">{it.title}</h3>
                  <span className="text-xs text-blue-400">{it.period}</span>
                </div>
                <p className="text-sm text-[#27e3b1] mb-2">{it.org}</p>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Education;