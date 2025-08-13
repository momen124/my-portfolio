import { ArrowDown, Code, Cloud, Shield, Sparkles } from 'lucide-react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading with gradient text */}
          <div className="mb-8 space-y-4">
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
                <span className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Backend Development
                </span>
                <span className="text-primary">•</span>
                <span className="flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-primary" />
                  Full-Stack
                </span>
                <span className="text-primary">•</span>
                <span className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  DevOps & Cloud
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I am a highly motivated Software Engineer with a strong foundation in 
              <span className="text-primary font-semibold"> backend development</span> and 
              <span className="text-primary font-semibold"> full-stack capabilities</span>, passionate about building 
              scalable, secure, and efficient software solutions. With extensive experience in 
              <span className="text-primary font-semibold"> Node.js, Python, and AWS</span>, coupled with a deep understanding of 
              software engineering principles and DevOps practices, I excel at transforming complex challenges into robust technical solutions.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="modern-card p-6 text-center animated-bg">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Backend Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Proficient in Node.js, Python, API design, and database modeling with a focus on scalable architectures
              </p>
            </div>
            
            <div className="modern-card p-6 text-center animated-bg">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-sm text-muted-foreground">
                AWS certified with hands-on experience in CI/CD, Infrastructure as Code, and containerization
              </p>
            </div>
            
            <div className="modern-card p-6 text-center animated-bg">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Development</h3>
              <p className="text-sm text-muted-foreground">
                Committed to secure coding practices, OWASP guidelines, and building ethical, maintainable systems
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="modern-btn text-lg px-8 py-4 glow-effect"
              asChild
            >
              <a href="#projects">
                View My Projects
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 glass-effect hover:bg-primary/10 border-primary/30"
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

