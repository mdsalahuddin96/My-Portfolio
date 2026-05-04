"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
const SocialLinks = () => {
  return (
    <div className="hidden fixed lg:flex flex-col space-y-6 absolute left-5 top-130 -translate-y-1/2 z-20">
      {[
        { icon: <FiGithub />, color: "hover:text-white", href: "#" },
        { icon: <FiLinkedin />, color: "hover:text-blue-400", href: "#" },
        { icon: <FiTwitter />, color: "hover:text-blue-300", href: "#" },
      ].map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          whileHover={{ scale: 1.2, x: 5 }}
          className={`text-2xl text-gray-500 transition-colors ${social.color}`}
        >
          {social.icon}
        </motion.a>
      ))}
      <div className="w-[2px] h-24 bg-gradient-to-b from-gray-500 to-transparent mx-auto" />
    </div>
  );
};

export default SocialLinks;
