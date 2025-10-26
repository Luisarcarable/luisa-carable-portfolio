const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Luisa R. Carable. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with passion, creativity, and cutting-edge technology.
          </p>
          <div className="flex justify-center gap-2 text-xs text-muted-foreground">
            <span>Polytechnic University of the Philippines</span>
            <span>•</span>
            <span>Pasig City Scholar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
