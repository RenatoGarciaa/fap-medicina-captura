import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medicina.jpg";

const HeroSection = () => {
  const handleCTAClick = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Title with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            FAÇA{" "}
            <span className="bg-gradient-ciano bg-clip-text text-transparent">
              MEDICINA
            </span>{" "}
            NA FAP ARARIPINA
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Vestibular 2025 com nota máxima no MEC!<br />
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