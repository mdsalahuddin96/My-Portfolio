// "use client";
// import { motion } from "framer-motion";
// import { 
//   SiHtml5, SiCss, SiJavascript, SiReact, 
//   SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb 
// } from "react-icons/si";

// const techs = [
//   { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
//   { name: "CSS3", icon: SiCss, color: "text-blue-500" },
//   { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
//   { name: "React", icon: SiReact, color: "text-cyan-400" },
//   { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
//   { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
//   { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
//   { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
// ];

// const TechStack = () => {
//   return (
//     <section id="skills" className="py-20 px-6">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-5xl font-bold mb-4"
//           >
//             My <span className="text-gradient">Tech Stack</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-gray-400"
//           >
//             The technologies I use to bring ideas to life.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
//           {techs.map((tech, index) => (
//             <motion.div
//               key={tech.name}
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
//               whileHover={{ 
//                 y: -10, 
//                 scale: 1.1,
//                 transition: { type: "spring", stiffness: 400, damping: 10 } 
//               }}
//               className="flex flex-col items-center group"
//             >
//               <div className="w-16 h-16 md:w-20 md:h-20 glass rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:animate-glow">
//                 <tech.icon className={`text-4xl md:text-5xl transition-all duration-300 ${tech.color}`} />
//               </div>
//               <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
//                 {tech.name}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStack;

'use client'
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiMongodb, SiGit, SiGithub,
  SiTypescript, SiExpress, SiPostman, SiVite,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";

const techs = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express", Icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
];

const TechStack = () => (
  <section id="stack" className="relative py-28 px-4 md:px-8">
    <div className="container max-w-6xl mx-auto">
      <SectionHeader
        tag="Tech Stack"
        title="Tools I love working with"
        subtitle="A modern stack chosen for speed, reliability and developer experience."
      />
      <motion.div
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4"
      >
        {techs.map((t) => {
          const Icon = t.Icon;
          return (
            <motion.div
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.85 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
              }}
              whileHover={{ y: -8, scale: 1.08 }}
              className="group relative aspect-square glass rounded-2xl flex flex-col items-center justify-center gap-2 cursor-default overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-2xl"
                style={{ background: t.color }}
              />
              <Icon
                size={36}
                color={t.color}
                className="relative z-10 transition-transform group-hover:scale-110"
              />
              <span className="relative z-10 text-[11px] text-mono text-muted-foreground group-hover:text-foreground transition-colors">
                {t.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default TechStack;