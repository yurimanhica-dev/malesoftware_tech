import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Expertise Comprovada",
      description:
        "Mais de 15 anos desenvolvendo soluções para empresas de diversos sectores públicos e privados.",
    },
    {
      title: "Metodologia Ágil",
      description:
        "Entregas rápidas e iterativas com feedback contínuo do cliente.",
    },
    {
      title: "Equipe 100% Moçambicana",
      description:
        "Trabalhamos contigo, lado a lado, para garantir o sucesso de seus projectos.",
    },
    {
      title: "Suporte Dedicado",
      description:
        "Equipe disponível para garantir o sucesso contínuo do sua solução.",
    },
    {
      title: "Segurança em Primeiro Lugar",
      description:
        "Implementamos as melhores práticas de segurança em todos as soluções.",
    },
    {
      title: "ROI Comprovado",
      description:
        "Nossos clientes reportam redução de custos de até 40% após implementação.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/10 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                Por que escolher nos?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Somos mais que uma empresa de tecnologia, somos seu parceiro
              estratégico para o sucesso digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all hover:scale-105 group"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
