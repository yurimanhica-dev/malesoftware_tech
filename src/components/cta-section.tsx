import ContactForm from "./Form";

export function CTASection() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/futuristic-technology-blue-digital-network-abstract.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
      <div className="starfield" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
              Compartilhe seu projeto conosco
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            Agende uma consultoria gratuita com nossos especialistas e descubra
            como podemos transformar seus desafios em soluções inovadoras
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
