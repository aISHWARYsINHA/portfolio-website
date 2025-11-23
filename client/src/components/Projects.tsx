import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImage from "@assets/generated_images/e-commerce_web_app_interface.png";
import taskManagementImage from "@assets/generated_images/task_management_dashboard_interface.png";
import weatherAppImage from "@assets/generated_images/weather_app_mobile_interface.png";
import analyticsImage from "@assets/generated_images/analytics_dashboard_interface_design.png";
import recipeImage from "@assets/generated_images/recipe_platform_web_interface.png";
import fitnessImage from "@assets/generated_images/fitness_tracking_app_interface.png";

const projects = [
  {
    title: "3D Universe Sandbox",
    description: "Interactive 3D solar system visualization with realistic physics and pleasing UI for exploring planetary information",
    image: ecommerceImage,
    tags: ["Three.js", "React", "TypeScript", "WebGL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/universe",
  },
  {
    title: "Cloud-Based Video Editor",
    description: "Timeline-based video editor supporting image/audio uploads with basic Premiere Pro features",
    image: taskManagementImage,
    tags: ["React", "TypeScript", "Web APIs", "Canvas"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/video-editor",
  },
  {
    title: "Math Olympiad Toolkit",
    description: "Collection of problem-solving tools and resources for competitive mathematics preparation",
    image: weatherAppImage,
    tags: ["React", "TypeScript", "LaTeX rendering"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/math-toolkit",
  },
  {
    title: "Indian Scientists Archive",
    description: "Digital archive showcasing India's historical contributions to science and mathematics",
    image: analyticsImage,
    tags: ["React", "TypeScript", "Historical research"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/scientists",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
            data-testid="text-projects-heading"
          >
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills in web development, design, and problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden hover-elevate transition-all group"
              data-testid={`card-project-${index}`}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-project-${index}`}
                />
              </div>

              <CardHeader className="space-y-2">
                <CardTitle className="text-xl md:text-2xl" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" data-testid={`badge-tag-${index}-${tagIndex}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3 flex-wrap">
                <Button
                  variant="default"
                  size="sm"
                  className="flex items-center gap-2"
                  asChild
                  data-testid={`button-demo-${index}`}
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  asChild
                  data-testid={`button-github-${index}`}
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
