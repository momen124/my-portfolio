import { Github, Linkedin, Mail, Heart, MapPin, Phone, Send, Code2, Coffee, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com/momen124", 
      label: "GitHub",
      color: "hover:text-purple-400 hover:bg-purple-400/10"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://www.linkedin.com/in/momen-hosny", 
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:bg-blue-400/10"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: "mailto:momen.hosny@example.com", 
      label: "Email",
      color: "hover:text-green-400 hover:bg-green-400/10"
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Skills', href: '#skills', icon: <Zap className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <Coffee className="w-4 h-4" /> },
    { name: 'Education', href: '#education', icon: <Github className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Send className="w-4 h-4" /> }
  ];

  const achievements = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "20+" },
    { label: "AWS Certifications", value: "2" },
    { label: "Technologies", value: "15+" }
  ];

  return (
    <footer className="relative bg-card border-t border-border/50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              Connect With Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className={`p-3 bg-muted/50 rounded-xl border border-border/50 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <div className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                      {link.icon}
                    </div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-secondary to-accent rounded-full"></div>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Email</p>
                  <p className="text-sm">momen.hosny@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Location</p>
                  <p className="text-sm">Available Worldwide (Remote)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Status</p>
                  <p className="text-sm">Open to opportunities</p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 rounded-xl border border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">Ready to collaborate?</p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Send className="w-4 h-4" />
                Let's work together
              </a>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-accent to-primary rounded-full"></div>
              Achievements
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <p className="text-sm text-muted-foreground">{achievement.label}</p>
                  <p className="text-lg font-bold text-card-foreground">{achievement.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/50"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-card px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-muted-foreground">
              <p className="text-sm">© {currentYear} Momen Hosny. All rights reserved.</p>
              <div className="flex items-center gap-1 text-sm">
                Built with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & Tailwind CSS
              </div>
            </div>
            
            {/* Tech Stack Icons */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-muted/30 rounded-full border border-border/50">
                <span className="text-xs text-muted-foreground">Powered by</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-medium text-blue-500">Next.js</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-xs font-medium text-cyan-500">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
    </footer>
  );
};

export default Footer;