import { motion } from "framer-motion";
export default function MotionFade({ delay=0, y=12, children }) {
  return (
    <motion.div
      initial={{ opacity:0, y }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, amount:.3 }}
      transition={{ duration:.5, ease:"easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
