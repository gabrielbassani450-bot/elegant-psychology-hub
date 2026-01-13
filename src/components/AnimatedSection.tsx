import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Lightweight fade + translate animation (GPU optimized)
export const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

// Simple text fade
export const AnimatedText = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Simple scale animation
export const AnimatedScale = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

// Staggered children animation (lightweight)
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({ children, className = "", staggerDelay = 0.08 }: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.4,
            ease: "easeOut"
          }
        },
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};
