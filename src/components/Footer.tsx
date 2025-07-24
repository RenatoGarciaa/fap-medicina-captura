import { Instagram, Facebook, Youtube, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">FAP ARARIPINA</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Formando os melhores profissionais de saúde do Sertão, 
              com excelência acadêmica e compromisso social.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-accent flex-shrink-0" />
                Rua Prof. Alonso Barbosa, 65<br />
                Centro - Araripina/PE<br />
                CEP: 56280-000
              </p>
              <p>📞 (87) 3873-1234</p>
              <p>📱 (87) 99999-9999</p>
              <p>✉️ contato@faparaipina.edu.br</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Úteis</h4>
            <div className="space-y-2 text-gray-300">
              <a href="#" className="block hover:text-accent transition-colors">
                Portal do Aluno
              </a>
              <a href="#" className="block hover:text-accent transition-colors">
                Processo Seletivo
              </a>
              <a href="#" className="block hover:text-accent transition-colors">
                Grade Curricular
              </a>
              <a href="#" className="block hover:text-accent transition-colors">
                Corpo Docente
              </a>
              <a href="#" className="block hover:text-accent transition-colors">
                Infraestrutura
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 FAP Araripina - Todos os direitos reservados
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;