'use client'
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skills = [
  { name: "React / Next.js", level: 80 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js / Express", level: 40 },
  { name: "MongoDB", level: 40 },
  { name: "HTML / CSS", level: 96 },
  { name: "Git & GitHub", level: 80 },
  { name: "Problem Solving", level: 80 },
];

const Skills = () => (
  <section id="skills" className="relative py-28 px-4 md:px-8">
    <div className="container max-w-6xl mx-auto">
      <SectionHeader
        tag="Skills"
        title="What I bring to the table"
        subtitle="Years of practice condensed into a focused, modern skillset."
      />
      <div className="grid md:grid-cols-2 gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ scale: 1.02 }}
            className="group glass rounded-2xl p-5 hover:shadow-glow transition-shadow"
          >
            <div className="flex justify-between items-baseline mb-3">
              <span className="font-medium">{s.name}</span>
              <span className="text-mono text-sm gradient-text font-bold">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.06 }}
                className="h-full bg-gradient-primary rounded-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;