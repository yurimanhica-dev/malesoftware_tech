import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Cloud,
  Code2,
  Cpu,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento de Software",
      description:
        "Soluções de software feitas à medida para bancos e seguradoras, aumentando eficiência e segurança, e simplificando processos internos.",
      link: "#",
    },
    {
      icon: Cpu,
      title: "Consultoria Organizacional",
      description:
        "Optimização de processos e alinhamento estratégico para potenciar inovação e crescimento no setor financeiro.",
      link: "#",
    },
    {
      icon: ShieldCheck,
      title: "Software como Serviço (SaaS)",
      description:
        "Acesso flexível às nossas aplicações, sem instalação local, com manutenção contínua, actualizações automáticas e escalabilidade garantida.",
      link: "#",
    },
    {
      icon: Server,
      title: "Infraestrutura de Dados",
      description:
        "Fornecemos, montamos e operamos infra-estrutura robusta, tanto no ambiente do cliente (on-premise) como na nuvem, garantindo desempenho e segurança.",
      link: "#",
    },
    {
      icon: Cloud,
      title: "Segurança Física e Lógica",
      description:
        "Instalação e configuração de soluções de segurança completas, protegendo dados e activos contra acessos não autorizados.",
      link: "#",
    },
    {
      icon: Zap,
      title: "Automação e Integração de Sistemas",
      description:
        "Integramos sistemas e automatizamos processos críticos, reduzindo erros, acelerando operações e aumentando a produtividade de sua organização.",
      link: "#",
    },
  ];

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/circuit-board-technology-blue-abstract-pattern.jpg"
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
              Nossas Soluções
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Oferecemos um portfólio completo de serviços para transformar
            digitalmente o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    <h1>{service.title}</h1>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="link"
                    asChild
                    className="absolute bottom-3 left-4 text-primary p-0 h-auto group/link"
                  >
                    <Link href={service.link}>
                      Veja mais
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-primary/5" />
    </section>
  );
}
