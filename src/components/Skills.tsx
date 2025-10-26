import { Badge } from "@/components/ui/badge";
import {Code2, Database, Server, Cloud, Wrench, Bot, TestTubeDiagonal} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["Javascript", "TypeScript", "Tailwind CSS", "Vue"],
      color: "from-primary to-accent",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "Java", "Spring", "Quarkus", "Intégration", "API Rest/GraphQL", "WebSocket", "Webhooks", "OAuth2"],
      color: "from-accent to-[hsl(270,100%,70%)]",
    },
    {
      title: "Données",
      icon: Database,
      skills: ["PostgreSQL", "Elasticsearch", "Redis", "Supabase", "Prisma", "ORM"],
      color: "from-primary to-accent",
    },
    {
      title: "DevOps",
      icon: Cloud,
      skills: ["Docker", "Kubernates/KNative", "AWS", "CI/CD", "Gitlab CI", "GitHub Actions"],
      color: "from-accent to-[hsl(270,100%,70%)]",
    },
    {
      title: "Outils",
      icon: Wrench,
      skills: ["Git", "IntelliJ", "Figma", "Postman/Bruno"],
      color: "from-primary to-accent",
    },
		{
			title: "AI",
			icon: Bot,
			skills: ["MCP Server", "LLMs", "Lovable/v0", "Copilot", "ChatGPT", "Gemini"],
			color: "from-accent to-primary",
		},
		{
			title: "Tests",
			icon: TestTubeDiagonal,
			skills: ["E2E", "Unitaires", "Intégration", "Automatisation"],
			color: "from-primary to-primary",
		}
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-card/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={elementRef}>
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-[hsl(270,100%,70%)] bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Compétences Techniques
        </h2>
        <p className={`text-center text-muted-foreground mb-16 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Technologies et outils que je maîtrise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} group-hover:animate-glow-pulse transition-all duration-300`}>
                  <category.icon className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge
                    key={skill}
                    variant="skill"
                    className="hover:scale-110 hover:bg-primary/20 transition-all duration-300"
                    style={{ transitionDelay: `${skillIdx * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
