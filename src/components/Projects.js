// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { FiGithub, FiExternalLink } from "react-icons/fi";

// const projects = [
//   {
//     id: 1,
//     title: "Project Alpha",
//     category: "Full Stack",
//     image: "/assets/p1.png",
//     description: "A comprehensive project management dashboard with real-time updates.",
//     github: "#",
//     live: "#",
//   },
//   {
//     id: 2,
//     title: "Luxury E-shop",
//     category: "E-commerce",
//     image: "/assets/p2.png",
//     description: "A premium e-commerce experience with smooth transitions and high-end feel.",
//     github: "#",
//     live: "#",
//   },
//   {
//     id: 3,
//     title: "Modern Portfolio",
//     category: "Frontend",
//     image: "/assets/p1.png", // Reusing for demo
//     description: "A highly interactive portfolio designed with Framer Motion and Next.js.",
//     github: "#",
//     live: "#",
//   },
//   {
//     id: 4,
//     title: "AI Chat App",
//     category: "AI",
//     image: "/assets/p2.png", // Reusing for demo
//     description: "An intelligent chat application powered by advanced AI models.",
//     github: "#",
//     live: "#",
//   },
// ];

// const categories = ["All", "Full Stack", "Frontend", "E-commerce", "AI"];

// const Projects = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProjects = activeCategory === "All" 
//     ? projects 
//     : projects.filter(p => p.category === activeCategory);

//   return (
//     <section id="projects" className="py-20 px-6">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
//           <div>
//             <motion.h2
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-5xl font-bold mb-4"
//             >
//               Featured <span className="text-gradient">Projects</span>
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="text-gray-400"
//             >
//               A selection of my recent works.
//             </motion.p>
//           </div>

//           <div className="flex flex-wrap gap-4">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-6 py-2 rounded-full border transition-all ${
//                   activeCategory === cat 
//                     ? "bg-blue-600 border-blue-600 text-white" 
//                     : "border-white/10 text-gray-400 hover:border-white/30"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         <motion.div 
//           layout
//           className="grid grid-cols-1 md:grid-cols-2 gap-8"
//         >
//           <AnimatePresence mode='popLayout'>
//             {filteredProjects.map((project) => (
//               <motion.div
//                 key={project.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.4 }}
//                 className="group relative rounded-3xl overflow-hidden glass border border-white/10"
//               >
//                 <div className="relative h-64 md:h-80 overflow-hidden">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
//                     <motion.a
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       href={project.github}
//                       className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white text-2xl"
//                     >
//                       <FiGithub />
//                     </motion.a>
//                     <motion.a
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       href={project.live}
//                       className="p-4 bg-blue-600 rounded-full text-white text-2xl"
//                     >
//                       <FiExternalLink />
//                     </motion.a>
//                   </div>
//                 </div>
                
//                 <div className="p-6 md:p-8">
//                   <span className="text-sm text-blue-500 font-bold uppercase tracking-wider mb-2 block">
//                     {project.category}
//                   </span>
//                   <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
//                   <p className="text-gray-400 text-sm leading-relaxed">
//                     {project.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";
import p1 from "@/assets/project1.png";
import p2 from "@/assets/project2.png";
import p3 from "@/assets/project3.png";
import p4 from "@/assets/project4.png";
import p5 from "@/assets/project5.png";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const projects = [
  { id: 1, title: "Luxury Tiles Gallery", category: "Full Stack", img: p1, tags: ["React", "Next.js", "MongoDB","Tailwind","BetterAuth"], desc: "This is a modern tile gallery platform where users can explore tiles in a structured and user-friendly interface.",live:"https://luxury-tiles-gallery.vercel.app/",code:"https://github.com/mdsalahuddin96/Luxury-Tiles-Gallery.git" },
  { id: 2, title: "The Dragon News", category: "Full Stack", img: p2, tags: ["React", "Next.js", "MongoDB","Tailwind","BetterAuth"], desc: "Dragon News is a modern news web application built with Next.js. Users can explore dynamic news categories, read full articles, and access protected routes through an authentication system. ",live:"https://dragon-news-nextapp.vercel.app/category/01",code:"https://github.com/mdsalahuddin96/dragon-news-nextapp.git" },
  { id: 3, title: "KeenKeeper", category: "Frontend", img: p3, tags: ["React","Next.js","Tailwind"," Rechart"], desc: "Keen Keeper is a smart friend relationship tracking web application that helps you maintain meaningful connections by reminding you when to reach out. It allows you to monitor your interactions, stay consistent, and never lose touch with important people.",live:"https://keen-keeper-nu-teal.vercel.app/",code:"https://github.com/mdsalahuddin96/keen-keeper.git" },
  { id: 4, title: "Book Vibe", category: "Frontend", img: p4, tags: ["JavaScript","React","React Router", "Tailwind","Rechart"], desc: "Book Vibe is a modern and responsive web application designed for book lovers. It allows users to explore different books, view detailed information, and manage their reading interests. The goal of this project is to create a clean and user-friendly interface where users can easily discover books and organize their reading journey.", live:"https://my-books-vibe.netlify.app/", code:"https://github.com/mdsalahuddin96/keen-keeper.git" },
  { id: 5, title: "DigiTools", category: "Frontend", img: p5, tags: ["JavaScript","React","HTML", "Tailwind"], desc: "DigiTools is a modern web-based utility platform that provides multiple useful digital tools in one place. The goal of this project is to make everyday online tasks easier by offering different productivity and utility features through a clean and user-friendly interface.", live:"https://salauddin-digitools.netlify.app/", code:"https://github.com/mdsalahuddin96/DigiTools.git" },
];

const filters = ["All", "Frontend", "Full Stack"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="relative py-28 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        <SectionHeader
          tag="Projects"
          title="Selected work"
          subtitle="A handful of projects showcasing UI craft, motion design and full-stack skills."
        />

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === f
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative glass rounded-3xl overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="p-5 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 flex items-end justify-start p-5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex gap-2">
                      <a href={p.live} target="_blank" className="px-3 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-xs font-medium inline-flex items-center gap-1.5">
                        <ExternalLink size={12} /> Live
                      </a>
                      <a href={p.code} target="_blank" className="px-3 py-1.5 rounded-full bg-gradient-primary text-xs font-medium inline-flex items-center gap-1.5">
                        <BsGithub size={12} /> Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{p.title}</h3>
                    <span className="text-[10px] text-mono text-primary px-2 py-0.5 rounded-full bg-primary/10">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] text-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;