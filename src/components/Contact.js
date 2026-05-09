"use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FiSend, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

// const Contact = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsSubmitting(false);
//       alert("Message sent successfully! (Demo)");
//     }, 2000);
//   };

//   return (
//     <section id="contact" className="py-20 px-6">
//       <div className="container mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-5xl font-bold mb-6"
//             >
//               Let&apos;s <span className="text-gradient">Connect</span>
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="text-gray-400 text-lg mb-12"
//             >
//               Have a project in mind or just want to say hi? Feel free to reach out.
//               I&apos;m always open to discussing new opportunities and creative ideas.
//             </motion.p>

//             <div className="space-y-8">
//               {[
//                 { icon: FiMail, label: "Email", value: "salahuddin@example.com", color: "text-blue-500" },
//                 { icon: FiMapPin, label: "Location", value: "Dhaka, Bangladesh", color: "text-purple-500" },
//                 { icon: FiPhone, label: "Phone", value: "+880 1XXX-XXXXXX", color: "text-green-500" },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2 + i * 0.1 }}
//                   className="flex items-center gap-6 group"
//                 >
//                   <div className={`w-14 h-14 glass rounded-2xl flex items-center justify-center text-2xl transition-all group-hover:scale-110 ${item.color}`}>
//                     <item.icon />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 uppercase tracking-widest">{item.label}</p>
//                     <p className="text-lg font-medium">{item.value}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="glass p-8 md:p-12 rounded-3xl border border-white/10"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-400">Name</label>
//                   <input
//                     type="text"
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
//                     placeholder="Your Name"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-400">Email</label>
//                   <input
//                     type="email"
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-400">Subject</label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
//                   placeholder="How can I help?"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-400">Message</label>
//                 <textarea
//                   required
//                   rows="4"
//                   className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
//                   placeholder="Your message here..."
//                 ></textarea>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
//                   isSubmitting ? "bg-gray-700 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
//                 }`}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                 ) : (
//                   <>
//                     Send Message <FiSend />
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Phone, Loader2, Check } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setDone(false), 2500);
    }, 1500);
  };

  const Field = ({ label, type = "text", textarea, value, onChange, name }) => (
    <label className="block group">
      <span className="text-xs text-mono text-muted-foreground mb-1.5 block">
        {label}
      </span>
      {textarea ? (
        <textarea
          required
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:shadow-glow outline-none transition-all resize-none"
        />
      ) : (
        <input
          required
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:shadow-glow outline-none transition-all"
        />
      )}
    </label>
  );

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
              type="button"
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-primary 
               text-primary-foreground font-medium inline-flex items-center justify-center 
               gap-2 shadow-glow hover:shadow-glow-strong transition-shadow"
            >
              <Send size={16} /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
