"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Phone, Loader2, Check } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        alert("Message sent!");
        e.target.reset();
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setIsPending(false);
    }
  };
  return (
    <section id="contact" className="relative py-28 px-4 md:px-8">
      <div className="container max-w-5xl mx-auto">
        <SectionHeader
          tag="Contact"
          title="Let's build something great"
          subtitle="Open for full-time, contract, and freelance work."
        />

        <div className="grid md:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 glass rounded-3xl p-7 space-y-5 relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <h3 className="font-bold text-xl mb-2">Get in touch</h3>
            <p className="text-sm text-muted-foreground">
              Have a project in mind or just want to say hi? Drop a message.
            </p>
            <div className="space-y-3 pt-2">
              {[
                { Icon: Mail, label: "salauddincse96@gmail.com" },
                { Icon: MapPin, label: "Dhaka, Bangladesh" },
                { Icon: Phone, label: "019-9548-6917" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <span className="w-9 h-9 grid place-items-center rounded-lg bg-muted text-primary">
                    <Icon size={16} />
                  </span>
                  <span className="text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              {[BsGithub, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 grid place-items-center rounded-xl bg-muted hover:bg-gradient-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 glass rounded-3xl p-7 space-y-4 border border-[#ffffff14]"
          >
            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10
                 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10
                 transition"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
               focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10
               transition resize-none"
            />

            {/* Button */}
            <motion.button
              disabled={isPending}
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-primary 
               text-primary-foreground font-medium inline-flex items-center justify-center 
               gap-2 shadow-glow hover:shadow-glow-strong transition-shadow"
            >
              <Send size={16} /> {isPending?"Sending...":"Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
