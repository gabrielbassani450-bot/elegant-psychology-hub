import { AnimatedSection, AnimatedText } from "@/components/AnimatedSection";
import { Monitor, Clock, Home, Shield } from "lucide-react";

const benefits = [
  {
    icon: Home,
    title: "Conforto",
    description: "Sessões no ambiente da sua casa"
  },
  {
    icon: Clock,
    title: "Flexibilidade",
    description: "Horários adaptados à sua rotina"
  },
  {
    icon: Monitor,
    title: "Praticidade",
    description: "Sem deslocamento, via Google Meet"
  },
  {
    icon: Shield,
    title: "Sigilo Total",
    description: "Sessões protegidas e confidenciais"
  }
];

export const OnlineTherapy = () => {
  return (
    <section className="section-padding section-alt-bg">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="body-md text-muted-foreground mb-4 block">
            Atendimento Psicológico Online
          </span>
          <h2 className="headline-lg text-balance max-w-3xl mx-auto">
            Terapia de qualidade onde você estiver
          </h2>
        </AnimatedSection>

        <AnimatedText delay={0.1} className="max-w-2xl mx-auto text-center mb-16">
          <p className="body-lg text-muted-foreground">
            Com os avanços tecnológicos, o Conselho Federal de Psicologia autorizou 
            o atendimento remoto. A terapia online oferece os mesmos benefícios do 
            atendimento presencial, promovendo mudanças significativas cognitivas, 
            emocionais e comportamentais.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection 
              key={benefit.title} 
              delay={0.1 + index * 0.1}
              className="bg-card rounded-2xl p-8 card-elevated text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent mb-6">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="headline-md mb-3 font-serif">{benefit.title}</h3>
              <p className="body-md text-muted-foreground">{benefit.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};