import { Button } from "@/components/ui/button"
import { Medal } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          
          {/* Texto Principal */}
          <div className="space-y-6 z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Faça <span className="text-primary">Medicina</span> na FAP Araripina
            </h1>
            <div className="flex items-center gap-3 text-lg">
              <Medal className="text-yellow-400 w-6 h-6" />
              <span>Nota máxima no MEC</span>
            </div>
            <p className="text-base sm:text-lg max-w-md">
              Uma formação que transforma vidas no coração do Sertão. <strong>VENHA SER MED FAP.</strong>
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button className="text-lg px-6 py-3">Garanta sua vaga agora</Button>
              <span className="text-sm">@medicinafap2025</span>
            </div>
          </div>

          {/* Imagem da médica (entra no grid em md+) */}
          <div className="hidden md:flex justify-end items-end">
            <div className="relative">
              <img
                src="/lovable-uploads/a80bc1e5-08f7-4b3c-8c6d-f7f23469f8ca.png"
                alt="Estudante de Medicina FAP"
                className="h-[80vh] lg:h-[95vh] object-contain drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-accent/20 blur-3xl -z-10 scale-110"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
