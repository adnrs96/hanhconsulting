import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const credentials = [
  "Solution-Focused Certified Coach",
  "30+ Years Leadership Experience",
  "Global Corporate Training",
  "Government & Enterprise Expertise",
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div 
            className={`relative opacity-0 ${isVisible ? 'animate-slideInLeft' : ''}`}
            style={{ animationFillMode: 'forwards' }}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary/20" />
            <div className="absolute -inset-8 border border-primary/10" />
            
            {/* Main image */}
            <div className="relative aspect-[4/5] bg-gradient-to-br from-muted to-card overflow-hidden">
              <img 
                src="/images/pexels-kadeem-stewart-170429769-15786936.jpg" 
                alt="Lincoln Anthony - Leadership Elevation Coach"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4">
              <div className="text-2xl font-serif font-bold">30+</div>
              <div className="text-xs uppercase tracking-wider">Years Experience</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span 
              className={`label-premium block mb-6 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              Meet Your Coach
            </span>
            
            <h2 
              className={`heading-section mb-8 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Lincoln Anthony
            </h2>
            
            <p 
              className={`body-large mb-8 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              I've spent three decades helping business leaders transform the way they lead. 
              My approach is simple: develop a solution-focused mindset that turns challenges 
              into opportunities and teams into high-performing units.
            </p>
            
            <p 
              className={`text-muted-foreground mb-10 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
            >
              From government organizations to global corporations, I've trained leaders 
              at every level to think differently, communicate effectively, and inspire 
              lasting change in their organizations.
            </p>

            {/* Credentials list */}
            <ul className="space-y-4">
              {credentials.map((credential, index) => (
                <li
                  key={credential}
                  className={`flex items-center gap-4 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
                  style={{ 
                    animationDelay: `${0.4 + index * 0.1}s`, 
                    animationFillMode: 'forwards' 
                  }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;