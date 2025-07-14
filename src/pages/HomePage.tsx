import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, MapPin, Users, FileText, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: "Anonymous Reporting",
      description: "Report illegal dumping safely and anonymously with photo evidence"
    },
    {
      icon: MapPin,
      title: "Location Mapping",
      description: "Pin exact locations on interactive maps for precise reporting"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Join discussions with fellow citizens about local waste issues"
    },
    {
      icon: FileText,
      title: "Know the Laws",
      description: "Learn about waste management laws and penalties in your area"
    },
    {
      icon: Phone,
      title: "Contact Authorities",
      description: "Direct access to pollution control boards and municipal offices"
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Get help from our friendly chatbot anytime, anywhere"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="w-full py-4 px-6 lg:px-12 border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-foreground">CleanSpeak</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-accent smooth-hover">
              Home
            </Link>
            <Link to="/report" className="text-foreground hover:text-accent smooth-hover">
              Report
            </Link>
            <Link to="/forum" className="text-foreground hover:text-accent smooth-hover">
              Forum
            </Link>
            <Link to="/laws" className="text-foreground hover:text-accent smooth-hover">
              Laws
            </Link>
            <Link to="/contact" className="text-foreground hover:text-accent smooth-hover">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="gold" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            CleanSpeak
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Raise Your Voice for a Cleaner Tomorrow
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Report illegal dumping easily, safely, and anonymously. Together, we can build cleaner, healthier communities across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/report">
              <Button variant="hero" className="w-full sm:w-auto">
                Report Now
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How CleanSpeak Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and effective tools to help you make a difference in your community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="gradient-card border-border/50 soft-shadow hover:soft-shadow-lg smooth-hover">
                <CardContent className="p-8 text-center">
                  <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of citizens across India who are already using CleanSpeak to report illegal dumping and create cleaner communities.
          </p>
          <Link to="/report">
            <Button variant="hero">
              Start Reporting Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer with Gamosa Pattern */}
      <footer className="gamosa-pattern border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-accent" />
                <span className="text-2xl font-bold text-foreground">CleanSpeak</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering citizens to report illegal dumping and build cleaner, healthier communities across India.
              </p>
              <p className="text-sm text-muted-foreground">
                Inspired by the beautiful weaving traditions of Assam
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/report" className="hover:text-accent smooth-hover">Report Dumping</Link></li>
                <li><Link to="/forum" className="hover:text-accent smooth-hover">Community Forum</Link></li>
                <li><Link to="/laws" className="hover:text-accent smooth-hover">Laws & Penalties</Link></li>
                <li><Link to="/contact" className="hover:text-accent smooth-hover">Contact Authorities</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-accent smooth-hover">About Us</Link></li>
                <li><Link to="/privacy" className="hover:text-accent smooth-hover">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-accent smooth-hover">Terms of Service</Link></li>
                <li><Link to="/help" className="hover:text-accent smooth-hover">Help Center</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 CleanSpeak. Built with care for cleaner communities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;