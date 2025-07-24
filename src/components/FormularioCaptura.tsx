import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const FormularioCaptura = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Dados enviados com sucesso!",
        description: "Em breve nossa equipe entrará em contato com você.",
      });
      setFormData({ nome: "", email: "", telefone: "" });
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="formulario" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-primary mb-4">
                Inscreva-se e receba informações exclusivas
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Preencha seus dados e nossa equipe entrará em contato com todas as informações sobre o vestibular 2025.
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-base font-medium">
                    Nome completo *
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-base font-medium">
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    placeholder="(87) 99999-9999"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full h-14 text-lg font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Enviar dados"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FormularioCaptura;