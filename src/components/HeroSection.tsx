import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleCTAClick = () => {
    document.getElementById("formulario")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden overflow-y-hidden">
      {/* Background Image - Estudantes FAP */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/7465d9fe-905d-45b3-98ad-df9b8a773d66.png')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Text Content - Left side */}
          <div className="text-left text-white space-y-6">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                FAÇA
              </h1>

              {/* Medicina com imagem oficial */}
              <div className="relative">
                <img
                  src="/lovable-uploads/8d2d87c2-7baf-445d-92a1-42848628fdac.png"
                  alt="MEDICINA"
                  className="h-16 md:h-20 lg:h-24 w-auto"
                />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                NA FAP ARARIPINA
              </h1>
            </div>

            {/* Nota 5 MEC com elementos oficiais */}
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur rounded-2xl p-4 w-fit">
              <img
                src="/lovable-uploads/8cc26806-08d4-406d-9501-f6e602d71d69.png"
                alt="5"
                className="h-12 w-auto"
              />
              <div>
                <p className="text-lg font-bold">NOTA MÁXIMA</p>
                <p className="text-sm opacity-90">NO MEC!</p>
              </div>
              <img
                src="/lovable-uploads/07d1a877-d5b7-4ef3-b184-ae488822dadd.png"
                alt="5 estrelas"
                className="h-6 w-auto"
              />
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl leading-relaxed text-gray-100">
              Uma formação que transforma vidas no coração do Sertão.
              <br />
              <span className="text-accent font-semibold">
                VENHA SER MED FAP.
              </span>
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                variant="gradient"
                size="lg"
                className="text-lg px-8 py-4 font-semibold"
                onClick={handleCTAClick}
              >
                Garanta sua vaga agora
              </Button>
            </div>

            {/* Info adicional */}
            <div className="text-sm text-gray-200 bg-black/20 rounded-lg p-3 w-fit">
              🌐medicina2.fapce.edu.br
            </div>
          </div>
        </div>
      </div>

      {/* Estudante fixada na parte inferior direita (desktop) */}
      <div className="hidden lg:block absolute bottom-0 right-0 z-10">
        <div className="relative">
          <img
            src="/lovable-uploads/a80bc1e5-08f7-4b3c-8c6d-f7f23469f8ca.png"
            alt="Estudante de Medicina FAP"
            className="h-[95vh] object-contain drop-shadow-2xl"
          />
          <div className="absolute inset-0 bg-accent/20 blur-3xl -z-10 scale-110"></div>
        </div>
      </div>

      {/* Versão intermediária (tablet/iPad) */}
      <div className="hidden md:block lg:hidden absolute bottom-0 z-10 pointer-events-none">
        <img
          src="/lovable-uploads/a80bc1e5-08f7-4b3c-8c6d-f7f23469f8ca.png"
          alt="Estudante de Medicina FAP"
          className="h-56 md:h-64 ipad-portrait:h-[80vh] ipad-portrait:right-[1vw] w-auto object-contain drop-shadow-2xl absolute right-0"
        />
      </div>
    </section>
  );
};

export default HeroSection;
