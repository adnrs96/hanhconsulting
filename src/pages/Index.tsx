import Header from "@/components/coaching/Header";
import Hero from "@/components/coaching/Hero";
import Stats from "@/components/coaching/Stats";
import About from "@/components/coaching/About";
import Services from "@/components/coaching/Services";
import Testimonials from "@/components/coaching/Testimonials";
import CTA from "@/components/coaching/CTA";
import Footer from "@/components/coaching/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="cta">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;