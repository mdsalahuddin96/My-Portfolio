// "use client";
// import { motion } from "framer-motion";
// import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
// const SocialLinks = () => {
//   return (
//     <div className="hidden fixed lg:flex flex-col space-y-6 absolute left-5 top-130 -translate-y-1/2 z-20">
//       {[
//         { icon: <FiGithub />, color: "hover:text-white", href: "#" },
//         { icon: <FiLinkedin />, color: "hover:text-blue-400", href: "#" },
//         { icon: <FiTwitter />, color: "hover:text-blue-300", href: "#" },
//       ].map((social, i) => (
//         <motion.a
//           key={i}
//           href={social.href}
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.5 + i * 0.1 }}
//           whileHover={{ scale: 1.2, x: 5 }}
//           className={`text-2xl text-gray-500 transition-colors ${social.color}`}
//         >
//           {social.icon}
//         </motion.a>
//       ))}
//       <div className="w-[2px] h-24 bg-gradient-to-b from-gray-500 to-transparent mx-auto" />
//     </div>
//   );
// };

// export default SocialLinks;
 'use client'
import { motion } from "framer-motion";
import { BiEnvelope } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const items = [
  { icon: FaGithub, href: "https://github.com", color: "hover:text-foreground", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", color: "hover:text-[#0A66C2]", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://facebook.com", color: "hover:text-[#1877F2]", label: "Facebook" },
  { icon: BiEnvelope, href: "mailto:hello@salah.dev", color: "hover:text-[#FBBC04]", label: "Email" },
];

const SocialRail = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4"
    >
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <motion.a
            key={i}
            href={it.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative w-10 h-10 grid place-items-center rounded-full glass  transition-colors ${it.color}`}
            aria-label={it.label}
          >
            <Icon size={18} />
            <span className="absolute left-12 px-2 py-1 rounded-md text-xs glass opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {it.label}
            </span>
          </motion.a>
        );
      })}
      <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent mx-auto" />
    </motion.div>
  );
};

export default SocialRail;