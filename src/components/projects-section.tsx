import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  const projects = [
    {
      title: "Sistema de Gestão de Correctoras Seguros",
      category: "Seguros",
      description:
        "Sistema de gestão de correctoras para seguros de automóveis, residenciais e empresariais, com integração a APIs de seguradoras.",
      image: "/ms6.png",
      link: "#",
    },
    {
      title: "E-commerce Multicanal",
      category: "Varejo",
      description:
        "Solução de comércio eletrônico integrada com marketplaces, ERP e sistemas de logística para grande varejista nacional.",
      image: "/ecommerce-platform-interface-modern-design.jpg",
      link: "#",
    },
    {
      title: "Plataforma de Educação Online",
      category: "Educação",
      description:
        "Sistema de ensino à distância com videoconferência, gamificação e acompanhamento de desempenho para instituição de ensino.",
      image: "/online-education-platform.png",
      link: "#",
    },
    {
      title: "Sistema Bancário Digital",
      category: "Fintech",
      description:
        "Aplicativo mobile e web para banco digital com abertura de conta, transferências, investimentos e cartão virtual.",
      image: "/digital-banking-app-interface-modern.jpg",
      link: "#",
    },
    {
      title: "Sistema de Gestao de Recursos Humanos",
      category: "Recursos Humanos",
      description:
        "Plataforma completa para gestão de talentos, folha de pagamento, benefícios e avaliação de desempenho.",
      image: "/industrial-iot-dashboard-monitoring.jpg",
      link: "#",
    },
    {
      title: "CRM Inteligente com IA",
      category: "Vendas",
      description:
        "Plataforma de gestão de relacionamento com clientes potencializada por inteligência artificial para previsão de vendas.",
      image: "/ai-crm-dashboard-interface.jpg",
      link: "#",
    },
  ];

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/blue-matrix-code-technology-background-abstract.jpg"
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
              Projetos que Transformam
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 uppercase tracking-widest rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <Button
                  variant="link"
                  asChild
                  className="text-primary p-0 h-auto group/link"
                >
                  <Link href={project.link}>
                    Mais detalhes
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
