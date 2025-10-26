import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">Getting to know the person behind the portfolio</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-foreground/90 leading-relaxed">
              I'm an Information Technology student at the{" "}
              <span className="text-primary font-medium">Polytechnic University of the Philippines – San Juan</span>,
              and a proud <span className="text-primary font-medium">Pasig City Scholar since 2017</span>.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              I'm passionate about merging technology, creativity, and storytelling to craft meaningful digital experiences.
              As both a <span className="text-accent font-medium">Project Manager</span> and{" "}
              <span className="text-accent font-medium">Social Media Editor</span> for the CNIMedia Team, and{" "}
              <span className="text-accent font-medium">Graphic Designer</span> for IsKoolToura PASIGology (Capstone Project),
              I lead in developing creative concepts, managing production workflows, and ensuring that every content piece
              reflects strong visual communication and strategy.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              I specialize in editing, content creation, and digital branding, focusing on how technology can enhance
              engagement and storytelling. In the IT field, I have experience working with Figma for UI/UX design,
              web-based systems development, and prototyping platforms that integrate innovation, interactivity, and
              business functionality.
            </p>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-4">
            <Card className="p-6 bg-card shadow-card hover:shadow-glow transition-all border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Polytechnic University of the Philippines – San Juan
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Graduated from Nagpayong Elementary & High School (with Honors)
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-card hover:shadow-glow transition-all border-accent/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/20">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Achievements</h3>
                  <p className="text-sm text-muted-foreground">Pasig City Scholar (2017 - Present)</p>
                  <p className="text-sm text-muted-foreground">Graduated with Honors</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-card hover:shadow-glow transition-all border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Driven By</h3>
                  <p className="text-sm text-muted-foreground">
                    Curiosity, design thinking, and collaboration — always seeking ways to bridge creativity and
                    technology in every project I work on.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
