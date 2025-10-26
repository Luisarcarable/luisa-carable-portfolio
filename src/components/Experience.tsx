import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Project Manager & Social Media Editor",
      organization: "CNIMedia Team",
      period: "Present",
      responsibilities: [
        "Lead development of creative concepts and content strategy",
        "Manage production workflows and team coordination",
        "Ensure strong visual communication across all content",
        "Oversee editing and content creation processes",
        "Drive digital branding initiatives"
      ],
      color: "primary"
    },
    {
      role: "Graphic Designer",
      organization: "IsKoolToura PASIGology (Capstone Project)",
      period: "Academic Project",
      responsibilities: [
        "Design visual elements and branding materials",
        "Create interactive UI/UX designs using Figma",
        "Develop web-based system prototypes",
        "Integrate innovation and business functionality",
        "Enhance user experience through thoughtful design"
      ],
      color: "accent"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building skills through hands-on projects and leadership roles
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-8 bg-card shadow-card hover:shadow-glow transition-all border-${exp.color}/20 relative overflow-hidden group`}
            >
              {/* Decorative gradient */}
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-${exp.color} to-transparent`}></div>
              
              <div className="space-y-4 ml-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <p className={`text-lg font-medium text-${exp.color}`}>{exp.organization}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className={`h-5 w-5 text-${exp.color}`} />
                    <span className="font-semibold text-foreground">Key Responsibilities:</span>
                  </div>
                  <ul className="space-y-2 ml-7">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3 text-foreground/80">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${exp.color} mt-2 flex-shrink-0`}></div>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Note */}
        <Card className="mt-8 p-6 bg-secondary/50 border-primary/20">
          <p className="text-center text-foreground/80">
            <span className="font-semibold text-primary">Focus:</span> Creating digital solutions that help businesses 
            grow through innovative website interfaces and interactive systems that improve user experience.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
