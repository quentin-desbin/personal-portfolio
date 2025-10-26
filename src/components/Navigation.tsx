import { Menu, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
	const [theme, setTheme] = useState<'dark' | 'light'>('dark');

	const handleThemeToggle = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
	};

  const navLinks = useMemo(
    () => [
      { name: "À Propos", href: "#about" },
      { name: "Compétences", href: "#skills" },
      { name: "Projets", href: "#projects" },
      { name: "Expériences", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    let lastActiveSection = "";
    const handleScroll = () => {
      let current = "";
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottomThreshold = document.body.offsetHeight - 100;
      if (scrollPosition >= bottomThreshold) {
        current = sectionIds[sectionIds.length - 1]; // Last section (Contact)
      } else {
        for (const id of sectionIds) {
          const section = document.getElementById(id);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 80 && rect.bottom > 80) {
              current = id;
              break;
            }
          }
        }
      }
      setActiveSection(current);
      // Update hash if changed
      if (current && current !== lastActiveSection) {
        history.replaceState(null, "", `#${current}`);
        lastActiveSection = current;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

	useEffect(() => {
		// Detect user browser preference on first load
		const localTheme = localStorage.getItem('theme');
		if (localTheme === 'dark' || localTheme === 'light') {
			setTheme(localTheme);
			document.documentElement.setAttribute('data-theme', localTheme);
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const defaultTheme = prefersDark ? 'dark' : 'light';
			setTheme(defaultTheme);
			document.documentElement.setAttribute('data-theme', defaultTheme);
		}
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-xl font-bold text-transparent bg-gradient-to-r from-primary via-accent to-[hsl(12,100%,70%)] bg-clip-text hover:text-primary transition-colors"
          >
            Quentin Desbin
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}

						<button
							onClick={handleThemeToggle}
							className="px-2 py-1 text-sm rounded bg-card text-card-foreground border border-border shadow transition-colors"
							aria-label="Toggle theme"
						>
							{theme === 'dark' ? '🌙' : '☀️'}
						</button>
          </div>

          {/* Mobile Menu Button */}
					<div className="md:hidden flex flex-row gap-2 items-center">
						<button
							className="md:hidden text-foreground"
							onClick={() => setIsOpen(!isOpen)}
							aria-label="Toggle menu"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>

						<button
							onClick={handleThemeToggle}
							className="px-2 py-1 text-sm rounded bg-card text-card-foreground border border-border shadow transition-colors"
							aria-label="Toggle theme"
						>
							{theme === 'dark' ? '🌙' : '☀️'}
						</button>
					</div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
