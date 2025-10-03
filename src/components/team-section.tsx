export function TeamSection() {
  const team = [
    {
      name: "Ricardo Almeida",
      role: "CEO & Co-fundador",
      image: "/professional-male-ceo-portrait.jpg",
    },
    {
      name: "Juliana Costa",
      role: "CTO & Co-fundadora",
      image: "/professional-female-cto-portrait.jpg",
    },
    {
      name: "Fernando Santos",
      role: "Diretor de Engenharia",
      image: "/professional-male-engineer.png",
    },
    {
      name: "Mariana Oliveira",
      role: "Diretora de Produto",
      image: "/professional-female-product-director-portrait.jpg",
    },
  ];

  return (
    <section id="equipe" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-accent/10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] hover:underline ">
              Nossa Equipe
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Conheça os profissionais talentosos que tornam tudo possível
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
