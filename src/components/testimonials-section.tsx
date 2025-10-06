"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Pause, Play, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      quote:
        "A MaleSoftware transformou completamente nossa operação. O sistema que desenvolveram reduziu nosso tempo de processamento em 60% e eliminou praticamente todos os erros manuais. A equipe é extremamente profissional e sempre disponível.",
      author: "Nicole Requadt",
      role: "Diretora Comercial",
      company: "FFH, fp.",
      year: "2020",
      rating: 5,
    },
    {
      quote:
        "Trabalhar com a MaleSoftware foi uma experiência excepcional. Eles não apenas entregaram o que prometeram, mas superaram nossas expectativas em qualidade e prazo. O suporte pós-implementação é impecável.",
      author: "Sadia Jamal",
      role: "Gestora",
      company: "BDQ Microcréditos",
      year: "2023",
      rating: 5,
    },
    {
      quote:
        "A automação implementada pela MaleSoftware nos permitiu escalar nosso negócio sem aumentar proporcionalmente os custos operacionais. O ROI foi alcançado em menos de 8 meses. Recomendo fortemente!",
      author: "Edecina Laundi",
      role: "Correctora de Seguros",
      company: "Geneses Corretora",
      year: "2025",
      rating: 5,
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

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

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 group relative overflow-hidden ${
                index === activeTestimonial
                  ? "border-primary/70 shadow-lg shadow-primary/10"
                  : ""
              }`}
            >
              <CardContent className="p-8 relative">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  <div className="flex gap-1">
                    {/* {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))} */}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic group-hover:text-foreground/80 transition-colors">
                  "{testimonial.quote}"
                </p>

                <div className="flex justify-between items-center gap-4">
                  <div className="border-t border-border/50 pt-4 flex-1">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {testimonial.year}
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                      <Image
                        src="/professional-female-product-director-portrait.jpg"
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Quote className="w-8 h-8 text-primary/30" />
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-primary text-primary"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex justify-between items-center gap-4">
                        <div className="border-t border-border/50 pt-4 flex-1">
                          <p className="font-semibold text-foreground">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role} • {testimonial.company}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-muted-foreground">
                              {testimonial.year}
                            </span>
                            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                            <span className="text-xs text-primary font-semibold">
                              Cliente Verificado
                            </span>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                            <Image
                              src="/professional-female-product-director-portrait.jpg"
                              alt={testimonial.author}
                              width={48}
                              height={48}
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all"
            >
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? "bg-primary w-6"
                      : "bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all"
            >
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex justify-center items-center gap-6 mt-12">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-primary" />
            ) : (
              <Play className="w-6 h-6 text-primary" />
            )}
          </button>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        {/* <div className="hidden md:block max-w-md mx-auto mt-8">
          <div className="w-full bg-primary/10 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-primary to-accent h-1 rounded-full transition-all duration-1000"
              style={{
                width: `${
                  ((activeTestimonial + 1) / testimonials.length) * 100
                }%`,
              }}
            ></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
