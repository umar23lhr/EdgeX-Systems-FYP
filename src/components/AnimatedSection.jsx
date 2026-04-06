import { motion } from 'motion/react';

export const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  id,
  duration = 0.8,
  yOffset = 30,
  scaleOnHover = true,
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: yOffset, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.6, 0.05, -0.01, 0.9], // smooth, natural easing
      }}
      whileHover={scaleOnHover ? { scale: 1.03, transition: { duration: 0.3 } } : {}}
      className={`${className} will-change-transform`}
    >
      {children}
    </motion.div>
  );
};