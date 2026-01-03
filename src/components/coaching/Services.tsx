import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Users, Briefcase, Brain, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Leadership Systems",
    description: "Build a leadership framework that's simple, effective, and easy for new leaders to adopt. Transform managers into inspiring leaders.",
    features: ["Leadership Assessment", "Communication Training", "Team Development"],
  },
  {
    icon: Briefcase,
    title: "Business & Marketing Systems",
    description: "Get strategic guidance before venturing into the unknown. Learn proven systems that have generated over $50M in client growth.",
    features: ["Business Strategy", "Marketing Systems", "Growth Planning"],
  },
  {
    icon: Brain,
    title: "Solution-Focused Mindset",
    description: "Develop the ability to think in solutions on your feet. Transform how you approach challenges and make decisions under pressure.",
    features: ["Mindset Training", "Decision Making", "Problem Solving"],
  },
  {
    icon: TrendingUp,
    title: "People Growth",
    description: "Personal development is as vital as technical development. Help your team move from average to peak performance.",
    features: ["Performance Coaching", "Team Training", "Personal Development"],
  },
];

const Services = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-card">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <span 
            className={`label-premium block mb-6 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationFillMode: 'forwards' }}
          >
            Our Services
          </span>
          <h2 
            className={`heading-section mb-6 opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            Systemize and Scale Your Business
          </h2>
          <p 
            className={`body-large opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Comprehensive coaching programs designed to transform how you lead, 
            think, and grow your organization.
          </p>
        </div>

        {/* Services grid - Bento style */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group card-premium hover-lift cursor-pointer opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ 
                animationDelay: `${0.3 + index * 0.1}s`, 
                animationFillMode: 'forwards' 
              }}
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <h3 className="heading-subsection mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;