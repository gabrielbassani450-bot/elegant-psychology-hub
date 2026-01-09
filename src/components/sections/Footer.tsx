import { MessageCircle, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=555481205788";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding bg-foreground text-background">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">Elisiane Valandro</h3>
            <p className="text-background/70 body-md mb-6">
              Psicóloga Clínica<br />
              CRP 07/XXXXX
            </p>
            <p className="text-background/70 body-md">
              Especialista em Terapia Cognitivo Comportamental e Terapia do Esquema
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="body-md">WhatsApp</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@psicologaelisianevalandro.com.br"
                  className="inline-flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="body-md">E-mail</span>
                </a>
              </li>
              <li>
                <div className="inline-flex items-center gap-3 text-background/70">
                  <MapPin className="w-5 h-5" />
                  <span className="body-md">Atendimento Online</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="font-serif text-xl mb-6">Horários</h4>
            <p className="text-background/70 body-md mb-2">
              Segunda a Sexta
            </p>
            <p className="text-background/70 body-md">
              Horários flexíveis mediante agendamento
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 body-md">
            © {currentYear} Elisiane Valandro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};