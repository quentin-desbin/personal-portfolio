import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import "./Experience.css";

const Experience = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const experiences = [
    {
      company: "iObeya",
			logo: "iobeya.svg",
      position: "Senior Software Engineer",
      period: "Septembre 2020 - Présent",
      responsibilities: [
        "Développement actif de la NextGen, team intégrations principalement et expert front/back en soutien dans d'autres teams",
        "Développement actif de la v4, corrections de bugs, plugins/add-ons",
        "Création Team Intégrations et des socles techniques (refontes d'API, monitoring, cloud)",
				"Conception d'architectures",
				"Participation aux différents comités techniques",
				"Facilitateur transverse"
      ],
      technologies: ["Angular.JS", "Java (Quarkus et Spring)", "Node.js", "Vue", "Docker", "Kubernetes", "Elasticsearch", "Redis" ],
    },
    {
      company: "Toulouse Ynov Campus",
			logo: "logo-tyc.jpeg",
      position: "Intervenant",
      period: "Octobre 2022 - Août 2025",
      responsibilities: [
        "Enseignement de modules aux B3 et B1 (Dev API, DevOps, Java)",
        "Participation aux jurys d'examens",
        "Corrections de rendus examens",
        "Animation de bootcamp rentrée, pour remise à niveau des nouveaux arrivants",
      ],
      technologies: ["API", "Node.JS/Express", "MySQL", "Docker", "Kubernetes", "Java"],
    },
    {
      company: "SQLI/Airbus",
			logo: "logo-airbus.jpeg",
      position: "Développeur Fullstack",
      period: "Avril 2018 - Septembre 2020",
      responsibilities: [
        "Développement d'interconnexions entre le logiciel iObeya et des logiciels internes Airbus au travers d'APIs",
        "Développement d'application mobile",
        "DevOps et SysAdmin d'une quizaine de VMs. Migration AWS Cloud"
      ],
      technologies: ["NodeJS", "VueJS", "AngularJS", "PHP", "Sysadmin", "Devops", "AWS", "PWA", "Apache Cordova"],
    },
		{
			company: "Yooz",
			logo: "logo-yooz.jpeg",
			position: "Développeur back-end ",
			period: "Juillet 2017 - Août 2017",
			responsibilities: [
				"Participation au développement de la nouvelle application Yooz (CDD pour l'été)",
				"Réalisation d'APIs REST"
			],
			technologies: ["Micro-services", "API", "NodeJS", "PostgreSQL"],
		}
  ];

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-card/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10" ref={elementRef}>
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-[hsl(270,100%,70%)] bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Expériences Professionnelles
        </h2>
        <p className={`text-center text-muted-foreground mb-16 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Mon parcours professionnel
        </p>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

          {experiences.map((exp, idx) => (
            <Card
              key={exp.company}
              className={`group relative hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >

              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                      <div className="p-2 rounded-lg default-shadow group-hover:animate-glow-pulse">
												<img src={'/' + exp.logo} alt={exp.company + ' logo'} className="h-8 w-8 rounded object-contain text-background" />
                      </div>
                      {exp.company}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground font-medium">{exp.position}</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="skill" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
