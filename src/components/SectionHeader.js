import { motion } from "framer-motion";

const SectionHeader = ({ tag, title, subtitle }) => (
  <div className="text-center mb-14 max-w-2xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-mono text-blue-400 mb-4"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" /> {tag}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="text-4xl md:text-5xl font-bold mb-3"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-muted-foreground"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeader;