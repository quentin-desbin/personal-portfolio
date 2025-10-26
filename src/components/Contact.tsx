import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10" ref={elementRef}>
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-[hsl(270,100%,70%)] bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Contact
        </h2>
        <p className={`text-center text-muted-foreground mb-16 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Discutons de notre prochain projet
        </p>

        <div className="flex flex-auto gap-12">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Restons en contact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vous avez un projet en tête ou souhaitez discuter d'une opportunité ?
                N'hésitez pas à me contacter directement par mes réseaux sociaux.
              </p>
            </div>

            <div className="flex flex-row justify-center gap-4 items-center">
              <a
                href="https://www.linkedin.com/in/quentin-desbin-a51760148"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
											 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform"
											 focusable="false">
										<path
											d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
									</svg>
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/quentin-desbin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 group"
              >
								<div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
									<svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32"
											 data-view-component="true" className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor">
										<path
											d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
									</svg>
								</div>
								<span className="text-sm">Github</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
