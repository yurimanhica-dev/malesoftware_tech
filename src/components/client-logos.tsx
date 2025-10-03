"use client";

import Image from "next/image";

export function ClientLogos() {
  const clients = [
    "/logos/bni.png",
    "/logos/Genesis.png",
    "/logos/FFH.png",
    "/logos/Maleseguros_dark.png",
    "/logos/bdq-removebg-preview.png",
    "/logos/teka.png",
    "/logos/cfm.png",
    "/logos/MCAIXA.png",
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 border-b border-border/50 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-muted-foreground mb-12 uppercase tracking-wider">
          Empresas que confiam em nossas soluções
        </p>

        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-12 animate-scroll-left group-hover:[animation-play-state:paused]">
            {duplicatedClients.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[200px] h-28"
              >
                <Image
                  src={logo}
                  alt={`Logo cliente ${index + 1}`}
                  width={150}
                  height={50}
                  className="object-contain grayscale-85 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
