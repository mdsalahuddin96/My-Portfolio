"use client";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, 
  SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb 
} from "react-icons/si";

const techs = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
];

const TechStack = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Tech Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            The technologies I use to bring ideas to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
              whileHover={{ 
                y: -10, 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 } 
              }}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 glass rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:animate-glow">
                <tech.icon className={`text-4xl md:text-5xl transition-all duration-300 ${tech.color}`} />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
