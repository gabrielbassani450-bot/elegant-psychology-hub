import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

export const Hero = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=555481205788";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding container-narrow text-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="inline-block body-md text-foreground/70 mb-6 font-medium">
            Psicóloga Elisiane Valandro
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="headline-xl text-balance mb-8 text-foreground"
        >
          Cuide da sua{" "}
          <span className="gradient-text italic">saúde mental</span>
          <br />
          com acolhimento
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="body-lg text-foreground/70 max-w-2xl mx-auto mb-12 text-balance"
        >
          Especializada em Terapia Cognitivo Comportamental, Terapia do Esquema 
          e Terapia de Casal. Um espaço seguro para seu autoconhecimento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full body-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Iniciar Conversa
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};