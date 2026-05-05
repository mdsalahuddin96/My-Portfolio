
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section id="about" className="py-20 px-6 bg-black/50">
//       <div className="container mx-auto max-w-4xl">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
//         >
//           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full" />
          
//           <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center md:text-left">
//             About <span className="text-gradient">Me</span>
//           </h2>
          
//           <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
//             <p>
//               I am a passionate <span className="text-white font-semibold">Full Stack Web Developer</span> based in Bangladesh, 
//               dedicated to building high-performance, visually stunning, and user-centric web applications.
//             </p>
            
//             <div className="grid md:grid-grid-cols-2 gap-8 mt-12">
//               <motion.div 
//                 whileHover={{ y: -5 }}
//                 className="bg-white/5 p-6 rounded-2xl border border-white/10"
//               >
//                 <h3 className="text-blue-400 font-bold mb-2">Education</h3>
//                 <p className="text-white">DUET CSE Graduate</p>
//                 <p className="text-sm text-gray-400 mt-2">Focused on Computer Science and Engineering, building a strong foundation in software principles.</p>
//               </motion.div>
              
//               <motion.div 
//                 whileHover={{ y: -5 }}
//                 className="bg-white/5 p-6 rounded-2xl border border-white/10"
//               >
//                 <h3 className="text-purple-400 font-bold mb-2">Problem Solving</h3>
//                 <p className="text-white">200+ JS Questions</p>
//                 <p className="text-sm text-gray-400 mt-2">Active problem solver on various platforms, mastering JavaScript logic and algorithms.</p>
//               </motion.div>
              
//               <motion.div 
//                 whileHover={{ y: -5 }}
//                 className="bg-white/5 p-6 rounded-2xl border border-white/10 md:col-span-2"
//               >
//                 <h3 className="text-green-400 font-bold mb-2">Certifications</h3>
//                 <p className="text-white">FreeCodeCamp Verified</p>
//                 <p className="text-sm text-gray-400 mt-2">Certified in Responsive Web Design and JavaScript Algorithms & Data Structures.</p>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
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
    desc: "Verified certifications in front-end and JavaScript development.",
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
          title="Curious developer. Crafted in Bangladesh."
          subtitle="I build modern, animated web experiences and love turning complex problems into elegant interfaces."
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