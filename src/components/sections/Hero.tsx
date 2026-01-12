import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useRef } from "react";
import heroImage from "@/assets/hero-abstract.jpg";

export const Hero = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=555481205788";
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </motion.div>

      {/* Content with scroll fade */}
      <motion.div 
        className="relative z-10 section-padding container-narrow text-center pt-32"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block body-md text-foreground/70 mb-6 font-medium">
            Psicóloga Elisiane Valandro
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="headline-xl text-balance mb-8 text-foreground"
        >
          Cuide da sua{" "}
          <span className="gradient-text italic">saúde mental</span>
          <br />
          com acolhimento
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="body-lg text-foreground/70 max-w-2xl mx-auto mb-12 text-balance"
        >
          Especializada em Terapia Cognitivo Comportamental, Terapia do Esquema 
          e Terapia de Casal. Um espaço seguro para seu autoconhecimento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full body-md font-medium transition-all duration-500 hover:scale-[1.03] hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Iniciar Conversa
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-foreground/15 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-foreground/40 rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
};