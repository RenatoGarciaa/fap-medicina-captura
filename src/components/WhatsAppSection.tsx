import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock } from "lucide-react";
const WhatsAppSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de receber mais informações sobre o curso de Medicina da FAP Araripina 2025.";
    const whatsappUrl = `https://wa.me/5587999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <section className="py-20 bg-gradient-to-r from-secondary to-primary">
      <div className="container mx-auto px-4 bg-[#140e66]/0">
        <div className="max-w-4xl mx-auto text-center text-white bg-[#0e1a66]/0">
          <div className="mb-8">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fale com nosso time agora mesmo!
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Tire todas as suas dúvidas sobre o vestibular, processo seletivo, 
              documentação e muito mais. Nossa equipe está pronta para te ajudar!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h3 className="font-bold text-lg mb-2">Atendimento rápido</h3>
              <p className="opacity-80">Resposta em poucos minutos</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h3 className="font-bold text-lg mb-2">Horário estendido</h3>
              <p className="opacity-80">Segunda a sábado, 8h às 18h</p>
            </div>
            <div className="text-center">
              <MessageCircle className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h3 className="font-bold text-lg mb-2">Canal direto</h3>
              <p className="opacity-80">Sem burocracias ou esperas</p>
            </div>
          </div>

          

          
        </div>
      </div>
    </section>;
};
export default WhatsAppSection;