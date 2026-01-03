import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 md:py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl font-bold text-foreground inline-block mb-4">
              Hanh Consulting
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Inspiring business leaders to confidently transform their business and their teams.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/lincoln-anthony-10675a36/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/lincolnanthony777/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/linc88" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/HappyHanh88" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#services" className="link-underline hover:text-foreground transition-colors">Leadership Systems</a></li>
              <li><a href="#services" className="link-underline hover:text-foreground transition-colors">Business Strategy</a></li>
              <li><a href="#services" className="link-underline hover:text-foreground transition-colors">Mindset Coaching</a></li>
              <li><a href="#services" className="link-underline hover:text-foreground transition-colors">Team Development</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link to="/contact" className="link-underline hover:text-foreground transition-colors">Get in Touch</Link></li>
              <li><a href="#cta" className="link-underline hover:text-foreground transition-colors">Book a Call</a></li>
              <li><Link to="/privacy-policy" className="link-underline hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-gradient mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hanh Consulting. All rights reserved.</p>
          <p>Toronto, Canada</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;