import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpeg";

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('https://docs.google.com/document/d/1jlEpmAPMzQBrFz8ersrne4Uo5ncr3k0Esa4uqmtgZNs/export?format=pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <img 
              src={profilePicture} 
              alt="Luisa R. Carable" 
              className="w-48 h-48 rounded-full object-cover border-4 border-primary/30 shadow-glow"
            />
          </div>
          
          {/* Name with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient">Luisa R. Carable</span>
          </h1>
          
          {/* Subtitle */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-foreground/90 font-medium">
              Information Technology Student
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Project Manager • Social Media Editor • UI/UX Designer
            </p>
          </div>

          {/* Brief intro */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Merging technology, creativity, and storytelling to craft meaningful digital experiences.
            Passionate about bridging creativity and innovation in every project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="gradient-primary hover:opacity-90 transition-all shadow-glow group min-w-[200px]"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 min-w-[200px]"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex gap-4 justify-center pt-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-primary/20 hover:shadow-glow transition-all"
              asChild
            >
              <a href="https://www.linkedin.com/in/luisarcarable" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-primary/20 hover:shadow-glow transition-all"
              asChild
            >
              <a href="mailto:luisarcarable@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
