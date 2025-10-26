import { Button } from "@/components/ui/button";
import { Download, Linkedin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className={`container mt-8 mx-auto text-center max-w-4xl relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-glow-pulse">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Disponible en Freelance</span>
          </div>
        </div>

        <h1
          className={`text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-[hsl(12,100%,70%)] bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto] transform transition-all ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          Quentin Desbin
        </h1>

        <h2 className={`text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6 font-semibold transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
					Développeur <span className="text-primary">Fullstack</span> - Enseignant
        </h2>

        <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Passionné par la création d'expériences web, logiciel ou mobile modernes et performantes.<br />
          Spécialisé dans <span className="font-semibold">Vue</span>, <span className="font-semibold">Node.js</span>, <span className="font-semibold">Java</span> et les technologies cloud.<br/>
					Je combine expertise technique et pédagogie pour partager mes connaissances.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button
						onClick={() => window.open('https://quentin-desbin.fr/cv-quentin-desbin-2025_anon.pdf', '_blank')}
						size="lg" className="group relative overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Download className="mr-2 h-5 w-5 relative z-10 group-hover:animate-bounce-slow" />
            <span className="relative z-10">Télécharger CV</span>
          </Button>
					<Button
						onClick={() => window.open('https://www.linkedin.com/in/quentin-desbin-a51760148/', '_blank')}
						variant="outline" size="lg"
						className="group hover:border-primary hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
								 className="mr-2 h-5 w-5 group-hover:text-primary group-hover:scale-110 transition-all duration-300"
								 focusable="false">
							<path
								d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
						</svg>
						LinkedIn
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
