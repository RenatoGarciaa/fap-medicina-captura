import { Card, CardContent } from "@/components/ui/card";
import { Star, Building2, Users, Heart, GraduationCap } from "lucide-react";

const SobreCurso = () => {
  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-accent" />,
      title: "Nota 5 no MEC",
      description: "Reconhecimento máximo pelo Ministério da Educação, garantindo qualidade e excelência no ensino."
    },
    {
      icon: <Building2 className="w-8 h-8 text-accent" />,
      title: "Estrutura moderna",
      description: "Laboratórios equipados com tecnologia de ponta para uma formação completa e atualizada."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Corpo docente experiente",
      description: "Professores doutores e mestres com vasta experiência acadêmica e prática médica."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Parcerias hospitalares",
      description: "Convênios com hospitais e clínicas para estágios e práticas supervisionadas."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Apoio para residência",
      description: "Preparação especializada para residências médicas e programas de pós-graduação."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Por que escolher Medicina na FAP?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra os diferenciais que fazem da FAP Araripina a melhor escolha para sua formação médica no Sertão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional highlights */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Formando médicos para transformar o Sertão
            </h3>
            <p className="text-lg opacity-90">
              Nossa missão é formar profissionais comprometidos com a saúde e o desenvolvimento da região nordestina, 
              preparados para os desafios da medicina moderna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreCurso;