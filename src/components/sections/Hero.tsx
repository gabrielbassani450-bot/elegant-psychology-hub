import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

export const Hero = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=555481205788";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding container-narrow text-center pt-24 md:pt-32 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block text-sm md:body-md text-foreground/70 mb-4 md:mb-6 font-medium">
            Psicóloga Elisiane Valandro
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-3xl md:headline-xl text-balance mb-5 md:mb-8 text-foreground leading-tight"
        >
          Cuide da sua{" "}
          <span className="gradient-text italic">saúde mental</span>
          <br />
          com acolhimento
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-base md:body-lg text-foreground/70 max-w-2xl mx-auto mb-8 md:mb-12 text-balance"
        >
          Especializada em Terapia Cognitivo Comportamental, Terapia do Esquema 
          e Terapia de Casal. Um espaço seguro para seu autoconhecimento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground rounded-full text-sm md:body-md font-medium transition-transform duration-200 hover:scale-105 active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            Iniciar Conversa
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - CSS only animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/15 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};
