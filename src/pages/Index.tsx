import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { OnlineTherapy } from "@/components/sections/OnlineTherapy";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Online Therapy Benefits */}
      <OnlineTherapy />
      
      {/* About Section */}
      <div id="sobre">
        <About />
      </div>
      
      {/* Services Section */}
      <div id="servicos">
        <Services />
      </div>
      
      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>
      
      {/* Call to Action */}
      <CTA />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
