import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth color transitions based on scroll position
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsl(45, 30%, 98%)",      // Warm white (hero)
      "hsl(158, 15%, 96%)",     // Soft sage tint
      "hsl(45, 25%, 97%)",      // Cream
      "hsl(168, 12%, 95%)",     // Light teal hint
      "hsl(45, 20%, 96%)",      // Soft beige
      "hsl(158, 20%, 94%)",     // Sage ending
    ]
  );

  const gradientOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 0.5, 0.4]
  );

  return (
    <>
      {/* Base animated background */}
      <motion.div
        className="fixed inset-0 -z-20 transition-colors duration-1000"
        style={{ backgroundColor }}
      />
      
      {/* Subtle gradient overlay that shifts */}
      <motion.div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ opacity: gradientOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/3 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent/5 to-transparent blur-3xl" />
      </motion.div>
    </>
  );
};
