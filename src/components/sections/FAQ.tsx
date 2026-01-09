import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Atende convênio?",
    answer: "Não. Atendo somente particular, mas emito nota fiscal para reembolso do plano de saúde e declaração de imposto de renda."
  },
  {
    question: "Qual a duração da sessão?",
    answer: "Cada sessão tem duração de aproximadamente 50 a 55 minutos."
  },
  {
    question: "Quantas sessões vou precisar?",
    answer: "A quantidade de sessões varia conforme o caso e os objetivos. Durante os primeiros encontros, avaliamos juntos suas necessidades para definir o plano terapêutico mais adequado."
  },
  {
    question: "As sessões são confidenciais?",
    answer: "Sim, absolutamente. Todo o conteúdo compartilhado durante as sessões é protegido por sigilo profissional, garantido pelo Código de Ética do Psicólogo."
  },
  {
    question: "Qual aplicativo é usado para o atendimento online?",
    answer: "Utilizo o Google Meet para realizar as sessões online, garantindo qualidade de áudio e vídeo, além de ser uma plataforma segura e de fácil acesso."
  },
  {
    question: "Como saber o valor da sessão?",
    answer: "O Conselho Regional de Psicologia não autoriza a divulgação de valores publicamente. Os valores são combinados por canais diretos de comunicação, como WhatsApp ou presencialmente."
  }
];

export const FAQ = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <span className="body-md text-muted-foreground mb-4 block">
            Dúvidas Frequentes
          </span>
          <h2 className="headline-lg text-balance">
            Tudo o que você precisa saber
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl px-8 border-none card-elevated"
              >
                <AccordionTrigger className="body-lg font-medium py-6 hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="body-md text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};