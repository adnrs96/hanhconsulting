import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Lincoln's approach transformed how I lead my team. We went from constant firefighting to strategic growth. Our revenue has tripled in 18 months.",
    author: "Sarah Chen",
    role: "CEO, TechScale Solutions",
  },
  {
    quote: "The solution-focused methodology changed everything. I now approach challenges with clarity instead of stress. My team follows suit.",
    author: "Marcus Williams",
    role: "VP Operations, Global Manufacturing Inc.",
  },
  {
    quote: "After 20 years in management, I thought I knew leadership. Lincoln showed me I was just managing, not leading. The difference is night and day.",
    author: "Jennifer Park",
    role: "Director, Financial Services Group",
  },
];

const Testimonials = () => {
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
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span 
            className={`label-premium block mb-6 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationFillMode: 'forwards' }}
          >
            Client Success
          </span>
          <h2 
            className={`heading-section opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            Leaders Who Transformed
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`relative opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ 
                animationDelay: `${0.2 + index * 0.15}s`, 
                animationFillMode: 'forwards' 
              }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              
              {/* Quote text */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Divider */}
              <div className="divider-gradient mb-6" />
              
              {/* Author */}
              <div>
                <div className="font-medium text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;