import Link from "next/link";
import { BsChevronDoubleDown } from "react-icons/bs";
import Button from "./Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen h-fit flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <img
          src="/digital-globe-network-connections-blue-technology.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0 gradient-mesh" />
      <div className="starfield" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative mt-32 z-10">
        <div className="max-w-5xl mx-auto text-center ">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 text-balance tracking-tight">
            Modernizando{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
              Processos de Negócios
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-1.5xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 text-pretty leading-relaxed">
            Transformamos desafios complexos em soluções elegantes através de
            desenvolvimento de software personalizado, automação inteligente e
            infraestrutura robusta.
          </p>

          {/* CTA Buttons */}
          <Link
            href="#projetos"
            className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300"
          >
            <Button
              variant="secondary"
              className="cursor-pointer group relative overflow-hidden"
              iconAfter={
                <div className="relative size-5 overflow-hidden">
                  <div className="flex w-10 h-7 transition-transform duration-500 ease-in-out group-hover:-translate-x-1/2">
                    <BsChevronDoubleDown className="w-5 h-5" />
                    <BsChevronDoubleDown className="w-5 h-5" />
                  </div>
                </div>
              }
            >
              <span className="text-lg">Nossas Soluções</span>
            </Button>
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-in fade-in duration-700 delay-500">
            {[
              { value: "50+", label: "Projetos Entregues" },
              { value: "98%", label: "Satisfação do Cliente" },
              { value: "15+", label: "Anos de Experiência" },
              { value: "30+", label: "Clientes Ativos" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h2 className="text-3xl md:text-5xl font-semibold text-primary/60 mb-2">
                  {stat.value}
                </h2>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
