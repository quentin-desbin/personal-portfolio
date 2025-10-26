import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Ynov Discover API",
      description: "Starter pack d'une API pour le module de découverte des APIs que j'ai pu enseigner.",
      technologies: ["API", "Node.js", "Express", "MySQL"],
      github: "https://github.com/quentin-desbin/ynov-api-24-25"
    },
    {
      title: "Extinction-MiniJeux.fr",
      description: "Communauté/jeu en ligne regroupant 3 mini-jeux.",
      technologies: ["Flash (legacy)", "Vue", "Tailwind", "WebSocket", "Java", "MySQL", "Prisma", "API"],
      demo: "https://extinction-minijeux.fr",
    },
		{
			title: "Mon portfolio",
			description: "Refonte de mon portfolio pour s'essayer à React et le moderniser.",
			technologies: ["Lovable", "React", "Tailwind"],
			github: "https://github.com/quentin-desbin/personal-portfolio"
		}
  ];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-float pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10" ref={elementRef}>
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-[hsl(270,100%,70%)] bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Mes Projets
        </h2>
        <p className={`text-center text-muted-foreground mb-16 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Sélection de réalisations récentes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className={`group relative overflow-hidden hover:shadow-[0_0_40px_rgba(6,182,212,0.4),0_0_80px_rgba(99,102,241,0.2)] hover:scale-[1.03] transition-all duration-500 cursor-pointer border-border hover:border-primary/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative z-10">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="skill" className="text-xs group-hover:scale-105 transition-transform duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 relative z-10">
								{ project.github && <Button variant="ghost" size="sm" className="flex-1 group/btn hover:bg-primary/10" onClick={() => window.open(project.github, "_blank")}>
									<svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32"
											 data-view-component="true" className="mr-2 h-4 w-4 group-hover/btn:animate-pulse" fill="currentColor">
										<path
											d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
									</svg>
                  Code
                </Button> }
								{ project.demo && <Button variant="outline" size="sm" className="flex-1 group/btn hover:border-primary hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]" onClick={() => window.open(project.demo, "_blank")}>
                  <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:animate-pulse" />
                  Demo
                </Button> }
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
