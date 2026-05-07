// "use client";
// import { motion } from "framer-motion";

// const educationData = [
//   {
//     year: "2020 - 2024",
//     degree: "B.Sc. in Computer Science & Engineering",
//     institution: "Dhaka University of Engineering & Technology (DUET)",
//     description: "Specialized in software engineering, algorithms, and web technologies.",
//     status: "Completed",
//   },
//   {
//     year: "2023",
//     degree: "JavaScript Problem Solving",
//     institution: "Self-Paced / Various Platforms",
//     description: "Mastered 200+ complex JavaScript logic questions and algorithm challenges.",
//     status: "Achieved",
//   },
//   {
//     year: "2022",
//     degree: "Responsive Web Design Certification",
//     institution: "FreeCodeCamp",
//     description: "Verified certification in modern responsive design and CSS frameworks.",
//     status: "Certified",
//   },
// ];

// const Education = () => {
//   return (
//     <section id="education" className="py-20 px-6">
//       <div className="container mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-5xl font-bold mb-16 text-center"
//         >
//           Educational <span className="text-gradient">Journey</span>
//         </motion.h2>

//         <div className="relative max-w-4xl mx-auto">
//           {/* Timeline Line */}
//           <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-purple-600 to-transparent md:-translate-x-1/2 hidden md:block" />

//           <div className="space-y-12">
//             {educationData.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className={`relative flex flex-col md:flex-row gap-8 items-center ${
//                   index % 2 === 0 ? "md:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Timeline Dot */}
//                 <div className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-black md:-translate-x-1/2 z-10 hidden md:block" />

//                 <div className="flex-1 w-full">
//                   <div className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors group">
//                     <span className="text-blue-500 font-bold mb-2 block">{item.year}</span>
//                     <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all">{item.degree}</h3>
//                     <p className="text-white/80 font-medium mb-4">{item.institution}</p>
//                     <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
//                     <div className="mt-4 px-4 py-1 bg-white/5 rounded-full text-xs inline-block text-blue-400 border border-blue-500/20">
//                       {item.status}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex-1 hidden md:block" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
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
    title: "Programming Hero (Full Stack Development)",
    org: "MERN / Next.js / Tailwind",
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