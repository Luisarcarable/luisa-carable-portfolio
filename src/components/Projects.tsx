import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "IsKoolToura PASIGology",
      category: "Capstone Project",
      description: "A comprehensive web-based tourism platform showcasing Pasig City's culture, history, and attractions. Features interactive UI/UX design, user-friendly navigation, and engaging visual storytelling.",
      role: "Graphic Designer & UI/UX Lead",
      technologies: ["Figma", "Web Development", "Interactive Design", "User Research"],
      link: "https://www.canva.com/design/DAG2swy9Fkg/7WDnR8LacsNQ5AmfgkHdfQ/edit",
      color: "primary"
    },
    {
      title: "CNIMedia Content Projects",
      category: "Professional Work",
      description: "Led multiple content creation and social media campaigns, developing creative concepts, managing production workflows, and ensuring brand consistency across all digital platforms.",
      role: "Project Manager & Social Media Editor",
      technologies: ["Content Strategy", "Social Media", "Branding", "Team Leadership"],
      color: "accent"
    },
    {
      title: "Portfolio Website",
      category: "Personal Project",
      description: "A modern, interactive portfolio showcasing my journey as an IT student, designer, and project manager. Built with a focus on user experience and visual storytelling.",
      role: "Full Stack Designer & Developer",
      technologies: ["React", "Tailwind CSS", "UI/UX Design", "Responsive Design"],
      color: "primary"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing creativity, innovation, and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-8 bg-card shadow-card hover:shadow-glow transition-all border-${project.color}/20 group`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className={`h-5 w-5 text-${project.color}`} />
                      <span className={`text-sm font-medium text-${project.color}`}>{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground italic">{project.role}</p>
                  </div>
                  {project.link && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`hover:bg-${project.color}/20 hover:shadow-glow transition-all`}
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>

                {/* Description */}
                <p className="text-foreground/80 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium bg-${project.color}/10 text-${project.color} rounded-full border border-${project.color}/30`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Salesforce Credential */}
        <Card className="mt-8 p-6 bg-card shadow-card border-accent/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Salesforce Trailblazer</h3>
              <p className="text-muted-foreground">Expanding expertise in cloud platforms and CRM technologies</p>
            </div>
            <Button
              variant="outline"
              className="border-accent/50 hover:bg-accent/10"
              asChild
            >
              <a href="https://www.salesforce.com/trailblazer/p2p9ljaii4x4k3eonz" target="_blank" rel="noopener noreferrer">
                View Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
