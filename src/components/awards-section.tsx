"use client";

import { Award, Building2, Medal, Plus, Star } from "lucide-react";

export function AwardsSection() {
  const timeline = [
    // {
    //   year: "2024",
    //   title: "Melhor Empresa de Tecnologia",
    //   description: "Prêmio Tech Excellence",
    //   icon: Trophy,
    // },
    // {
    //   year: "2023",
    //   title: "Top 10 Startups de Software",
    //   description: "Revista Inovação Digital",
    //   icon: Star,
    // },
    {
      year: "2025",
      title: "Informações por Recolher",
      description: "Informações por Recolher ",
      icon: Medal,
      clients: 30,
    },
    {
      year: "2020",
      title: "Revamping das Soluções",
      description: "Novas soluções para desafios tragos pela pandemia",
      icon: Award,
      clients: 20,
    },
    {
      year: "2015",
      title: "Consolidação no Mercado",
      description: "Reconhecimento pela excelência em soluções de software",
      icon: Star,
      clients: 10,
    },
    {
      year: "2010",
      title: "Criação da MaleSoftware",
      description: "Fundação da empresa",
      icon: Building2,
      clients: 5,
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
                Nossas Jornada
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Uma linha do tempo destacando marcos importantes e conquistas ao
              longo dos anos.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="grid md:grid-cols-4 gap-8">
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
                    <h1 className="block text-lg mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                      <span>
                        <Plus className="w-4 h-4 text-accent inline-block" />
                      </span>{" "}
                      {item.clients} Clientes
                    </h1>
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
