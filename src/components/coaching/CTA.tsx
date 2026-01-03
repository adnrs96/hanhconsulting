import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(28 70% 55%) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(28 70% 55%) 0%, transparent 50%)`
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span 
            className={`label-premium block mb-6 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationFillMode: 'forwards' }}
          >
            Start Your Transformation
          </span>
          
          <h2 
            className={`heading-section mb-8 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            Ready to Elevate Your Leadership?
          </h2>
          
          <p 
            className={`body-large mb-12 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Book a complimentary discovery call to discuss your leadership challenges 
            and explore how we can help you achieve breakthrough results.
          </p>

          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <Button 
              size="lg" 
              className="btn-premium rounded-none text-base h-14 px-10"
            >
              Book Your Free Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div 
            className={`mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <span>✓ No obligation</span>
            <span>✓ 30-minute consultation</span>
            <span>✓ Personalized assessment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;