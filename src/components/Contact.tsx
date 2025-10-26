import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Business Email",
      value: "luisarcarable@gmail.com",
      link: "mailto:luisarcarable@gmail.com",
      color: "primary"
    },
    {
      icon: Mail,
      label: "Student Email",
      value: "luisarcarable@iskolarngbayan.pup.edu.ph",
      link: "mailto:luisarcarable@iskolarngbayan.pup.edu.ph",
      color: "accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/luisarcarable",
      color: "primary"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's collaborate and create something amazing together
          </p>
        </div>

        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className={`p-6 bg-card shadow-card hover:shadow-glow transition-all border-${method.color}/20 group`}
            >
              <a
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-${method.color}/20 group-hover:bg-${method.color}/30 transition-all`}>
                    <method.icon className={`h-6 w-6 text-${method.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className={`font-medium text-foreground group-hover:text-${method.color} transition-colors`}>
                      {method.value}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </Card>
          ))}
        </div>

        {/* CTA Card */}
        <Card className="mt-12 p-8 bg-gradient-primary shadow-glow border-0 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to start a project?</h3>
          <p className="text-white/90 mb-6">
            Whether it's design, development, or content creation, I'm here to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="mailto:luisarcarable@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="https://www.linkedin.com/in/luisarcarable" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
