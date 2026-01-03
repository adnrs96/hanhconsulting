import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/coaching/Header";
import Footer from "@/components/coaching/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center pt-20">
        <div className="section-container text-center">
          <span className="label-premium block mb-6">404 Error</span>
          <h1 className="heading-display mb-6">
            Page Not Found
          </h1>
          <p className="body-large max-w-md mx-auto mb-12">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="btn-premium rounded-none text-base h-14 px-10">
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;