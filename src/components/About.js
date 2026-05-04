"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center md:text-left">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am a passionate <span className="text-white font-semibold">Full Stack Web Developer</span> based in Bangladesh, 
              dedicated to building high-performance, visually stunning, and user-centric web applications.
            </p>
            
            <div className="grid md:grid-grid-cols-2 gap-8 mt-12">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <h3 className="text-blue-400 font-bold mb-2">Education</h3>
                <p className="text-white">DUET CSE Graduate</p>
                <p className="text-sm text-gray-400 mt-2">Focused on Computer Science and Engineering, building a strong foundation in software principles.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <h3 className="text-purple-400 font-bold mb-2">Problem Solving</h3>
                <p className="text-white">200+ JS Questions</p>
                <p className="text-sm text-gray-400 mt-2">Active problem solver on various platforms, mastering JavaScript logic and algorithms.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 md:col-span-2"
              >
                <h3 className="text-green-400 font-bold mb-2">Certifications</h3>
                <p className="text-white">FreeCodeCamp Verified</p>
                <p className="text-sm text-gray-400 mt-2">Certified in Responsive Web Design and JavaScript Algorithms & Data Structures.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
