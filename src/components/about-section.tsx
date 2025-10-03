import { Eye, Handshake, Target, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/data-network-technology-blue-connections-abstract.jpg"
          alt=""
          className="w-full h-full object-cover opacity-8"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] hover:underline ">
                Sobre a MaleSoftware
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Somos uma empresa de desenvolvimento de software com paixão por
              inovação e excelência técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16 text-start">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                Nossa Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Impulsionar empresas através de soluções tecnológicas simples,
                eficazes e inovadoras, que tornam o dia a dia mais produtivo.
                Transformamos desafios complexos em oportunidades reais de
                crescimento, com foco em resultados consistentes e sustentáveis.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-accent" />
                </div>
                Nossa Visão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a principal referência em desenvolvimento de software em
                Moçambique, reconhecida pela excelência técnica, pela inovação
                constante e pela capacidade de gerar impacto positivo.
                Tencionamos digitalizar empresas de todos os portes e setores.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-accent" />
                </div>
                Valores
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-accent text-xl">E </span>
                xcelência: qualidade em cada entrega. <br />
                <span className="font-semibold text-accent text-xl">T </span>
                ransparência: agimos com clareza e respeito. <br />
                <span className="font-semibold text-accent text-xl ml-1">
                  I {"  "}
                </span>
                novação: criamos soluções criativas e eficazes. <br />
                <span className="font-semibold text-accent text-xl">C </span>
                olaboração: valorizamos o trabalho em equipe. <br />
                <span className="font-semibold text-accent text-xl">A</span>
                gilidade: rapidez e eficiência nas soluções.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-lg bg-card/50 border border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Nossa Trajectória</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fundada em 2010, a MaleSoftware nasceu da visão de três
                  engenheiros de software apaixonados por resolver problemas
                  complexos. Começamos desenvolvendo soluções para pequenas
                  empresas locais e, ao longo dos anos, expandimos nossa atuação
                  para atender grandes corporações em todo o país.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Hoje, somos uma equipe de mais de 40 profissionais especializados
              em diversas tecnologias e metodologias. Já entregamos mais de 150
              projetos bem-sucedidos, sempre mantendo nosso compromisso com a
              qualidade, inovação e satisfação do cliente. Nossa jornada é
              marcada por parcerias duradouras e pela constante busca por
              excelência em tudo que fazemos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
