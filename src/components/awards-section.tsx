"use client";

import { Award, Medal, Star, Trophy } from "lucide-react";

export function AwardsSection() {
  const timeline = [
    {
      year: "2024",
      title: "Melhor Empresa de Tecnologia",
      description: "Prêmio Tech Excellence Brasil",
      icon: Trophy,
    },
    {
      year: "2023",
      title: "Top 10 Startups de Software",
      description: "Revista Inovação Digital",
      icon: Star,
    },
    {
      year: "2022",
      title: "Certificação ISO 27001",
      description: "Segurança da Informação",
      icon: Medal,
    },
    {
      year: "2021",
      title: "Prêmio Inovação em Cloud",
      description: "AWS Partner Awards",
      icon: Award,
    },
    {
      year: "2020",
      title: "Empresa Revelação",
      description: "Associação Brasileira de Software",
      icon: Star,
    },
    {
      year: "2019",
      title: "Melhor Projeto de Transformação Digital",
      description: "Digital Transformation Summit",
      icon: Trophy,
    },
  ];

  return (
    <section id="distincoes" className="py-24 relative overflow-hidden">
      {/* Fundo com gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] hover:drop-shadow-[0_0_15px_rgba(118,181,197,0.7)]">
                Distinções e Reconhecimentos
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nossa jornada de excelência é reconhecida pelo mercado.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-card/60 border border-border/50 hover:border-primary/40 shadow-sm hover:shadow-md transition-all hover:scale-105 text-center"
                  >
                    <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 border border-primary/30 mb-4 flex-shrink-0 shadow-[0_0_20px_rgba(118,181,197,0.5)] animate-pulse">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h1 className="block text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                      {item.year}
                    </h1>
                    <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
