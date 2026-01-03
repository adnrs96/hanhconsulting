import Header from "@/components/coaching/Header";
import Footer from "@/components/coaching/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="section-narrow">
          <span className="label-premium block mb-6">Legal</span>
          <h1 className="heading-section mb-8">Privacy Policy</h1>
          
          <p className="body-large mb-12">
            At Hanh Consulting, we respect your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website
            or interact with our services.
          </p>

          <div className="space-y-12 text-muted-foreground">
            <section>
              <h2 className="heading-subsection text-foreground mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email address) when you fill out our contact form</li>
                <li>Information you provide when booking a consultation</li>
                <li>Usage data and analytics about how you interact with our website</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-subsection text-foreground mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Schedule and conduct coaching sessions</li>
                <li>Send you relevant information about our services (with your consent)</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-subsection text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the Internet is 100% secure, and we cannot guarantee 
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="heading-subsection text-foreground mb-4">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@hanhconsulting.com"
                  className="text-primary hover:underline transition-colors"
                >
                  privacy@hanhconsulting.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="heading-subsection text-foreground mb-4">Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience and analyze site traffic. 
                You can control cookie preferences through your browser settings. Disabling cookies may 
                affect certain features of the website.
              </p>
            </section>

            <section>
              <h2 className="heading-subsection text-foreground mb-4">Third-Party Services</h2>
              <p>
                We may use third-party services for analytics, scheduling, and communication. These 
                services have their own privacy policies, and we encourage you to review them. We do 
                not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="heading-subsection text-foreground mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this 
                page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="heading-subsection text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please 
                contact us at:{" "}
                <a
                  href="mailto:privacy@hanhconsulting.com"
                  className="text-primary hover:underline transition-colors"
                >
                  privacy@hanhconsulting.com
                </a>
              </p>
            </section>

            <p className="text-sm pt-8 border-t border-border">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;