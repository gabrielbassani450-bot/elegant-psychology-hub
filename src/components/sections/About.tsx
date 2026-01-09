import { AnimatedSection, AnimatedScale } from "@/components/AnimatedSection";
import { MessageCircle } from "lucide-react";
import portraitImage from "@/assets/psychologist-portrait.png";

export const About = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=555481205788";

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedScale className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                <img 
                  src={portraitImage} 
                  alt="Psicóloga Elisiane Valandro" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-3xl -z-10" />
            </div>
          </AnimatedScale>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <AnimatedSection>
              <span className="body-md text-muted-foreground mb-4 block">
                Sobre Mim
              </span>
              <h2 className="headline-lg mb-8">
                Um espaço seguro para você se{" "}
                <span className="italic gradient-text">reencontrar</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="body-lg text-muted-foreground mb-6">
                Minha trajetória na psicologia vai além da clínica. Já atuei na 
                saúde pública, assistência social e na área hospitalar com 
                recrutamento e seleção.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="body-lg text-muted-foreground mb-6">
                Trabalho com a Terapia Cognitivo Comportamental e a Terapia do 
                Esquema, buscando entender como sua história de vida contribuiu 
                na formação de padrões mentais que podem estar causando sofrimento 
                emocional.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="body-lg text-muted-foreground mb-8">
                Meu objetivo como psicoterapeuta é fazer com que a terapia seja 
                um lugar seguro, confortável e acolhedor — para que você se 
                reencontre com seu adulto saudável e sua criança feliz.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full body-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Consulta
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};