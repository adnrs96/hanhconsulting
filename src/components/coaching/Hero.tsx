import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-creative-tech.jpg";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(28 70% 55% / 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(28 70% 55% / 0.5) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Radial glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(28 70% 55% / 0.3) 0%, transparent 70%)'
        }}
      />

      <div className="section-container relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div 
            className={`mb-8 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <span className="label-premium">Leadership Elevation</span>
          </div>

          {/* Main headline */}
          <h1 
            className={`heading-display mb-8 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Transform Your Leadership.
            <br />
            <span className="text-primary">Elevate Your Team.</span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`body-large max-w-2xl mx-auto mb-12 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            We help business leaders develop solution-focused mindsets that drive 
            performance, inspire teams, and create lasting organizational change.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Button 
              asChild
              size="lg" 
              className="btn-premium rounded-none text-base h-14 px-10"
            >
              <Link to="/contact">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-none text-base h-14 px-10 border-muted-foreground/30 hover:border-primary hover:text-primary"
              onClick={() => {
                const element = document.getElementById('services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn Our Approach
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
        style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;