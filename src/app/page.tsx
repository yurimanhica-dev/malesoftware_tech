import { AboutSection } from "@/components/about-section";
import { AwardsSection } from "@/components/awards-section";
import { ClientLogos } from "@/components/client-logos";
import { CTASection } from "@/components/cta-section";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemsSection } from "@/components/problems-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { TeamSection } from "@/components/team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ClientLogos />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsSection />
      <ProblemsSection />
      <TestimonialsSection />
      <AboutSection />
      <TeamSection />
      <AwardsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
