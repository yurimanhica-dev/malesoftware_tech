import { AlertTriangle, TrendingDown } from "lucide-react";

export function ProblemsSection() {
  const problems = [
    {
      problem: "Processos Manuais e Repetitivos",
      consequence:
        "Perda de tempo, erros humanos e custos operacionais elevados que comprometem a competitividade",
    },
    {
      problem: "Sistemas Legados Desatualizados",
      consequence:
        "Dificuldade de integração, vulnerabilidades de segurança e impossibilidade de escalar o negócio",
    },
    {
      problem: "Falta de Integração entre Sistemas",
      consequence:
        "Dados fragmentados, retrabalho constante e decisões baseadas em informações incompletas",
    },
    {
      problem: "Infraestrutura Inadequada",
      consequence:
        "Instabilidade, lentidão, indisponibilidade e perda de clientes por má experiência",
    },
    {
      problem: "Ausência de Visibilidade de Dados",
      consequence:
        "Impossibilidade de tomar decisões estratégicas e perda de oportunidades de mercado",
    },
    {
      problem: "Vulnerabilidades de Segurança",
      consequence:
        "Risco de vazamento de dados, multas regulatórias e danos irreparáveis à reputação",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-background to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                Problemas que Resolvemos
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Identificamos e solucionamos os principais desafios tecnológicos
              que impedem o crescimento da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card/50 border border-border/50 hover:border-destructive/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                    <AlertTriangle className="w-5 h-5 text-destructive/80" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {item.problem}
                    </h3>
                    <div className="flex items-start gap-2">
                      <TrendingDown className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <span className="font-medium text-destructive/80">
                          Consequência:
                        </span>{" "}
                        {item.consequence}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-lg bg-primary/5 border border-primary/20 text-center">
            <p className="text-lg text-foreground font-medium">
              Não deixe esses problemas limitarem o potencial do seu negócio.{" "}
              <a
                href="#contato"
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] hover:underline "
              >
                Fale com nossos especialistas
              </a>{" "}
              e descubra como podemos ajudar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
