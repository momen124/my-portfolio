import { ArrowDown, Code, Cloud, Shield, Sparkles } from 'lucide-react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading with gradient text */}
          <div className="mb-8 space-y-4 fade-in">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <span className="text-primary font-medium tracking-wide uppercase text-sm">Software Engineer</span>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="gradient-text float-animation">Momen Hosny</span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-8 space-y-2">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <span className="flex items-center gap-2 modern-card px-4 py-2 rounded-full">
                  <Code className="w-5 h-5 text-primary" />
                  Backend Development
                </span>
                <span className="text-primary">•</span>
                <span className="flex items-center gap-2 modern-card px-4 py-2 rounded-full">
                  <Cloud className="w-5 h-5 text-secondary" />
                  Full-Stack
                </span>
                <span className="text-primary">•</span>
                <span className="flex items-center gap-2 modern-card px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-accent" />
                  DevOps & Cloud
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12 fade-in">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I am a highly motivated Software Engineer with a strong foundation in 
              <span className="text-primary font-semibold"> backend development</span> and 
              <span className="text-secondary font-semibold"> full-stack capabilities</span>, passionate about building 
              scalable, secure, and efficient software solutions. With extensive experience in 
              <span className="text-accent font-semibold"> Node.js, Python, and AWS</span>, coupled with a deep understanding of 
              software engineering principles and DevOps practices, I excel at transforming complex challenges into robust technical solutions.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto fade-in">
            <div className="modern-card p-6 text-center animated-bg group hover:shadow-xl scale-hover">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Code className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Backend Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Proficient in Node.js, Python, API design, and database modeling with a focus on scalable architectures
              </p>
            </div>
            
            <div className="modern-card p-6 text-center animated-bg group hover:shadow-xl scale-hover">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                <Cloud className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">Cloud & DevOps</h3>
              <p className="text-sm text-muted-foreground">
                AWS certified with hands-on experience in CI/CD, Infrastructure as Code, and containerization
              </p>
            </div>
            
            <div className="modern-card p-6 text-center animated-bg group hover:shadow-xl scale-hover">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <Shield className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">Secure Development</h3>
              <p className="text-sm text-muted-foreground">
                Committed to secure coding practices, OWASP guidelines, and building ethical, maintainable systems
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
            <Button 
              size="lg" 
              className="modern-btn text-lg px-8 py-4 glow-effect rounded-xl"
              asChild
            >
              <a href="#projects">
                View My Projects
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 glass-effect hover:bg-primary/10 border-primary/30 rounded-xl"
              asChild
            >
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero