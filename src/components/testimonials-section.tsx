import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "A MaleSoftware transformou completamente nossa operação. O sistema que desenvolveram reduziu nosso tempo de processamento em 60% e eliminou praticamente todos os erros manuais. A equipe é extremamente profissional e sempre disponível.",
      author: "Nicole Requadt",
      role: "Diretora de Comercial",
      company: "FFH, fp.",
      year: "2020",
    },
    {
      quote:
        "Trabalhar com a MaleSoftware foi uma experiência excepcional. Eles não apenas entregaram o que prometeram, mas superaram nossas expectativas em qualidade e prazo. O suporte pós-implementação é impecável.",
      author: "Sadia Jamal",
      role: "Gestora",
      company: "BDQ Microcréditos",
      year: "2023",
    },
    {
      quote:
        "A automação implementada pela MaleSoftware nos permitiu escalar nosso negócio sem aumentar proporcionalmente os custos operacionais. O ROI foi alcançado em menos de 8 meses. Recomendo fortemente!",
      author: "Edecina Laundi",
      role: "Correctora de Seguros",
      company: "Geneses Corretora",
      year: "2025",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/blue-particle-network-connections-technology-abstract.jpg"
          alt=""
          className="w-full h-full object-cover opacity-8"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
              O que nossos clientes dizem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Depoimentos reais de empresas que transformaram seus negócios com
            nossas soluções.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all hover:scale-105"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex justify-between items-center gap-4">
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {testimonial.year}
                    </p>
                  </div>
                  <div>
                    <Image
                      src="/professional-female-product-director-portrait.jpg"
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full mt-4"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
