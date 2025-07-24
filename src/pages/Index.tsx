import HeroSection from "@/components/HeroSection";
import FormularioCaptura from "@/components/FormularioCaptura";
import SobreCurso from "@/components/SobreCurso";
import WhatsAppSection from "@/components/WhatsAppSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FormularioCaptura />
      <SobreCurso />
      <WhatsAppSection />
      <Footer />
    </div>
  );
};

export default Index;
