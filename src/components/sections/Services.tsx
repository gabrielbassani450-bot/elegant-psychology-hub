import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Brain, Heart, Users } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Terapia do Esquema",
    description: "Abordagem integrativa focada em identificar e tratar Esquemas Iniciais Desadaptativos — padrões rígidos e negativos de pensamento formados na infância que causam sofrimento na vida adulta.",
    highlight: "Ideal para transtornos de personalidade, depressão e ansiedade"
  },
  {
    icon: Heart,
    title: "Terapia Cognitivo Comportamental",
    description: "Foco no presente e em problemas específicos. Você aprenderá a identificar pensamentos disfuncionais, questioná-los e desenvolver ferramentas práticas para lidar com desafios.",
    highlight: "Promove mudanças positivas e maior flexibilidade emocional"
  },
  {
    icon: Users,
    title: "Terapia de Casal",
    description: "Ajuda parceiros a entender como esquemas mentais profundos geram ciclos disfuncionais de interação, criando conflitos e insatisfação no relacionamento.",
    highlight: "Baseada na Terapia do Esquema para casais"
  }
];

export const Services = () => {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="body-md text-muted-foreground mb-4 block">
            Especialidades
          </span>
          <h2 className="headline-lg text-balance max-w-3xl mx-auto">
            Abordagens terapêuticas baseadas em{" "}
            <span className="italic">evidências científicas</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem 
              key={service.title}
              className="glass-card rounded-3xl p-10 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8 transition-all duration-500 group-hover:scale-105 group-hover:bg-primary/15">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="headline-md mb-4 font-serif">{service.title}</h3>
              
              <p className="body-md text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <p className="body-md text-primary font-medium">
                {service.highlight}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};