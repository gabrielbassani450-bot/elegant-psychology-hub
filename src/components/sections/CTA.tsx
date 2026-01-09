import { AnimatedSection } from "@/components/AnimatedSection";
import { MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const CTA = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=555481205788";

  return (
    <section className="section-padding section-alt-bg overflow-hidden">
      <div className="container-narrow text-center relative">
        {/* Decorative elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl -z-10"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"
        />

        <AnimatedSection>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-8">
            <Heart className="w-7 h-7 text-primary" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="headline-lg mb-6 text-balance">
            Cuidar da saúde mental é um{" "}
            <span className="italic gradient-text">ato de amor próprio</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="body-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Se você sente que chegou o momento de olhar para si com mais carinho 
            e consciência, a terapia pode ser seu próximo passo. Estou aqui para 
            te ajudar.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Vamos Conversar
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};