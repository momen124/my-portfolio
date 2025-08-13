import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/momen124", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/momen-hosny", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:momen.hosny@example.com", label: "Email" } // Update with real email
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-xl font-bold mb-2">Momen Hosny</h3>
            <p className="text-muted-foreground mb-4">Software Engineer specializing in backend development, full-stack solutions, and cloud infrastructure. Passionate about building secure, scalable, and efficient software systems.</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
            <p className="text-muted-foreground mb-2">momen.hosny@example.com</p> {/* Update with real email */}
            <p className="text-muted-foreground mb-2">Available Worldwide (Remote)</p>
            <p className="text-muted-foreground">Available for full-time opportunities and freelance projects</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 text-center text-muted-foreground">
          <p>© {currentYear} Momen Hosny. All rights reserved.</p>
          <p className="mt-2 flex justify-center items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;