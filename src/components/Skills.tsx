import { Card } from "@/components/ui/card";
import { Code2, Palette, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Development",
      color: "primary",
      skills: [
        "Web-Based Systems Development",
        "UI/UX Design with Figma",
        "Prototyping & Wireframing",
        "Interactive Systems Design",
        "Frontend Development"
      ]
    },
    {
      icon: Palette,
      title: "Design & Content",
      color: "accent",
      skills: [
        "Graphic Design",
        "Social Media Content Creation",
        "Digital Branding",
        "Visual Communication",
        "Video Editing"
      ]
    },
    {
      icon: Users,
      title: "Project Management",
      color: "primary",
      skills: [
        "Team Leadership",
        "Production Workflow Management",
        "Creative Concept Development",
        "Content Strategy",
        "Cross-functional Collaboration"
      ]
    },
    {
      icon: Lightbulb,
      title: "Core Competencies",
      color: "accent",
      skills: [
        "Design Thinking",
        "Creative Problem Solving",
        "Digital Storytelling",
        "User Experience Enhancement",
        "Technology Integration"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A diverse skill set bridging technology, creativity, and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-6 bg-card shadow-card hover:shadow-glow transition-all border-${category.color}/20 group`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-${category.color}/20 group-hover:bg-${category.color}/30 transition-all`}>
                  <category.icon className={`h-6 w-6 text-${category.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{category.title}</h3>
                </div>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-foreground/80">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${category.color}`}></div>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Figma", "Canva", "Web Development", "Salesforce", "Git", "Design Systems"].map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-card rounded-full border border-primary/30 hover:border-primary hover:shadow-glow transition-all"
              >
                <span className="text-sm font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
