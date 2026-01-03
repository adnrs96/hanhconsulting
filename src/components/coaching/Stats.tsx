import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "1700+", label: "Leaders Coached", description: "Who continue to grow and succeed" },
  { number: "98%", label: "Success Rate", description: "Of clients achieve their goals" },
  { number: "$50M+", label: "Revenue Generated", description: "In client business growth" },
  { number: "30+", label: "Years Experience", description: "In leadership development" },
];

const Stats = () => {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-card">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                animationFillMode: 'forwards' 
              }}
            >
              <div className="stat-number mb-3">{stat.number}</div>
              <div className="text-lg font-medium text-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;