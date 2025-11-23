import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900"
    >
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 text-center">
        <div className="space-y-6 md:space-y-8">
          <h1
            className="text-6xl md:text-8xl font-bold tracking-tight text-white"
            data-testid="text-hero-name"
          >
            Alex Morgan
          </h1>
          <p
            className="text-xl md:text-2xl font-semibold text-purple-100"
            data-testid="text-hero-title"
          >
            Creative Developer & Designer
          </p>
          <p
            className="text-base md:text-lg text-purple-200 max-w-2xl mx-auto leading-relaxed"
            data-testid="text-hero-tagline"
          >
            Building beautiful, functional web experiences that delight users and solve real problems
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("projects")}
              className="text-base md:text-lg px-8 py-6 min-h-12"
              data-testid="button-view-projects"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="text-base md:text-lg px-8 py-6 min-h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              data-testid="button-contact-hero"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
