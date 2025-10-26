import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="relative py-12 text-center border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        <p className="text-muted-foreground relative z-10">© 2025 Quentin Desbin. Tous droits réservés.</p>
        <p className="text-sm text-muted-foreground/60 mt-2 relative z-10">Fait avec ❤️, React et Lovable</p>
      </footer>
    </div>
  );
};

export default Index;
