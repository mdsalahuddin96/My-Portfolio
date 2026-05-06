"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { Download, Sparkles } from "lucide-react";


const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1 ml-4">
          <motion.div
            variants={item}
            className="inline-flex absolute top-25 items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-300"
          >
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-muted-foreground">
              Available for opportunities
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Hi, I&apos;m <br />{" "}
            <span className="text-gradient">Md. Salah uddin</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400  h-12"
          >
            <div className="flex gap-2 items-center">
              <span>I&apos;m a </span>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer",
                    "Front-End Developer",
                    "React Developer",
                    "Problem Solver",
                    "Next.js Specialist",
                    "AI Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </motion.div>
          <motion.p className="text-gray-400 max-w-xl text-sm leading-relaxed ">
            Full Stack Web Developer crafting fast, accessible, and beautifully
            animated experiences with React, Next.js & Node. Currently open to
            remote, on‑site, and freelance work worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4"
          >
            <button
              variants={item}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600   text-white rounded-full font-semibold flex items-center gap-2 transition-all group cursor-pointer"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/salauddin.pdf"
              download
              className="flex items-center gap-2 px-6 py-2 rounded-lg glass text-white font-semibold transition-all "
            >
             <Download size={20} /> Download CV
            </a>
            {/* <button className="px-8 py-4 glass text-white rounded-full font-bold transition-all hover:bg-white/10">
              Contact Me
            </button> */}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 lg:order-2"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl rotate-6 blur-2xl opacity-50" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 glass animate-glow">
              <Image
                src="/assets/profile.png"
                alt="Md. Salah uddin"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Abstract Shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-4 -right-4 w-24 h-24 border border-blue-500/30 rounded-full border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-8 -left-8 w-32 h-32 border border-purple-500/20 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
