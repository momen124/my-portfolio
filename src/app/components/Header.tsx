'use client';
import { useState, useContext } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Blog', href: '#blog' },  // Added
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Momen Hosny</div>  // Updated logo
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/momen124" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/momen-hosny" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.professional.email@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail size={20} />
            </a>
            <Button variant="outline" size="sm" className="ml-4">
              <Download size={16} className="mr-2" />
              Resume
            </Button>
            <Button variant="ghost" onClick={toggleTheme}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-foreground hover:text-primary transition-colors duration-200">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://github.com/momen124" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/momen-hosny" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="mailto:your.professional.email@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail size={20} />
              </a>
              <Button variant="outline" size="sm" className="ml-4">
                <Download size={16} className="mr-2" />
                Resume
              </Button>
              <Button variant="ghost" onClick={toggleTheme}>
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;