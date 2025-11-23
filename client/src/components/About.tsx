import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Rocket, Sparkles, Database, Globe } from "lucide-react";
import headshotImage from "@assets/generated_images/professional_developer_headshot_portrait.png";

const skills = [
  { name: "React & TypeScript", icon: Code2 },
  { name: "UI/UX Design", icon: Palette },
  { name: "Node.js & APIs", icon: Database },
  { name: "Responsive Design", icon: Globe },
  { name: "Modern CSS", icon: Sparkles },
  { name: "Performance", icon: Rocket },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <img
                src={headshotImage}
                alt="Professional headshot"
                className="w-full max-w-md aspect-square object-cover rounded-2xl"
                data-testid="img-headshot"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2
                className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
                data-testid="text-about-heading"
              >
                About Me
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed text-muted-foreground"
                data-testid="text-about-bio"
              >
                I'm a passionate developer with a keen eye for design, dedicated to creating
                exceptional digital experiences. With expertise in modern web technologies and a
                user-centered approach, I transform ideas into elegant, high-performance
                applications.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new design trends, contributing to
                open source, or experimenting with the latest web technologies.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-sm uppercase tracking-wide font-semibold text-muted-foreground mb-4">
                Skills & Expertise
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-card border border-card-border hover-elevate transition-all"
                      data-testid={`skill-${index}`}
                    >
                      <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-card-foreground">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
