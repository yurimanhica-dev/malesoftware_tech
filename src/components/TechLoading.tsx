export default function TechLoading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Starfield Background */}
      <div className="starfield"></div>

      {/* Gradient Mesh */}
      <div className="gradient-mesh absolute inset-0"></div>

      {/* Main Loading Container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        {/* Animated Logo/Orb */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse-glow shadow-2xl shadow-primary/30">
            <div className="absolute inset-2 rounded-full bg-background/20 backdrop-blur-sm border border-primary/30"></div>
          </div>

          {/* Pulsing Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping [animation-duration:2s]"></div>
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse"></div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-heading font-bold text-foreground tracking-wider">
            MALE<span className="text-primary">SOFTWARE</span>
          </h1>

          {/* Animated Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-accent animate-[loading-bar_2s_ease-in-out_infinite]"></div>
        </div>

        {/* Tech Elements */}
        <div className="flex space-x-4 text-xs text-muted-foreground font-mono">
          <div className="animate-pulse">INICIALIZANDO...</div>
          <div className="animate-pulse [animation-delay:0.5s]">
            CARREGANDO SISTEMA
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
