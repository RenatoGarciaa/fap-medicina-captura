import { Button } from "@/components/ui/button";
const heroImage = "/lovable-uploads/1561a853-3cad-45e1-a8d0-a0b76d87239d.png";

const HeroSection = () => {
  const handleCTAClick = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Text Content - Left side */}
          <div className="text-left text-white lg:pr-8">
            {/* Main Title with Gradient */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              FAÇA{" "}
              <span className="bg-gradient-ciano bg-clip-text text-transparent">
                MEDICINA
              </span>{" "}
              NA FAP ARARIPINA
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
              Vestibular 2025 com{" "}
              <span className="text-accent font-bold">nota máxima no MEC!</span>
              <br />
              Uma formação que transforma vidas no coração do Sertão.
            </p>
            
            {/* CTA Button */}
            <Button 
              variant="gradient" 
              size="lg" 
              className="text-lg px-8 py-4 font-semibold"
              onClick={handleCTAClick}
            >
              Garanta sua vaga agora
            </Button>
            
            {/* Info adicional */}
            <div className="mt-6 text-sm text-gray-200">
              📅 Prova: 13/07 • 🌐 medicina2.fapge.edu.br
            </div>
          </div>
          
          {/* Right side - deixa espaço para a imagem da estudante */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-accent/20 text-6xl">⭐</div>
      <div className="absolute bottom-20 right-10 text-accent/20 text-4xl">⭐</div>
      <div className="absolute top-1/2 left-20 text-accent/10 text-8xl">✦</div>
    </section>
  );
};

export default HeroSection;