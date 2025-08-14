import { ExternalLink, Github, Server, Globe, Shield, Star, Calendar, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Project } from '../types/portfolio';

const s3Url = process.env.NEXT_PUBLIC_S3_CONTENT_URL || 'https://portfolio-content-2025.s3.amazonaws.com/portfolio-content.json';
const iconMap = {
  Server: <Server className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
};

const projectColors = {
  Server: {
    gradient: "from-blue-500/20 via-indigo-500/10 to-purple-500/20",
    accent: "text-blue-500",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10"
  },
  Globe: {
    gradient: "from-green-500/20 via-emerald-500/10 to-teal-500/20",
    accent: "text-green-500", 
    border: "border-green-500/30",
    bg: "bg-green-500/10"
  },
  Shield: {
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
    accent: "text-orange-500",
    border: "border-orange-500/30", 
    bg: "bg-orange-500/10"
  },
};

const Projects = async () => {
  let projects: Project[] = [];
  try {
    const res = await fetch(s3Url, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      projects = data.projects || [];
    }
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    // Fallback to hard-coded
    projects = [
      {
        title: "Secure E-commerce Backend API",
        description: "A highly scalable, secure, and production-ready RESTful API for an e-commerce platform with automated AWS deployment and comprehensive CI/CD pipeline.",
        icon: "Server",
        technologies: ["Node.js", "Express.js", "PostgreSQL", "AWS Lambda", "API Gateway", "Terraform", "GitHub Actions", "JWT", "Docker"],
        features: [
          "RESTful API design with comprehensive CRUD operations",
          "Secure authentication using JWT and bcrypt",
          "AWS serverless deployment with Lambda and API Gateway",
          "Infrastructure as Code using Terraform",
          "Automated CI/CD pipeline with GitHub Actions",
          "90%+ test coverage with Jest and Supertest",
          "OWASP Top 10 security compliance"
        ],
        githubUrl: "https://github.com/momen124/ecommerce-api",
        liveUrl: "https://api.yourproject.com",
        docsUrl: "https://api.yourproject.com/docs"
      },
      {
        title: "Real-time Collaborative Mind Map Editor",
        description: "A full-stack application enabling multiple users to simultaneously create and edit mind maps in real-time using WebSockets and React.",
        icon: "Globe",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Docker", "Redis", "Express.js"],
        features: [
          "Real-time collaboration with WebSocket communication",
          "Responsive React frontend with intuitive UI",
          "Concurrent editing with conflict resolution",
          "User authentication and authorization",
          "Containerized deployment with Docker",
          "Persistent storage with MongoDB",
          "Scalable WebSocket server architecture"
        ],
        githubUrl: "https://github.com/momen124/mindmap-collab",
        liveUrl: "https://mindmap.yourproject.com"
      },
      {
        title: "Distributed Event Management Platform",
        description: "A microservices-based system demonstrating event-driven architecture, inter-service communication, and independent deployment strategies.",
        icon: "Shield",
        technologies: ["Node.js", "RabbitMQ", "Docker", "Kubernetes", "AWS ECS", "PostgreSQL", "MongoDB", "Terraform"],
        features: [
          "Microservices architecture with loose coupling",
          "Event-driven communication with RabbitMQ",
          "Independent CI/CD pipelines for each service",
          "Container orchestration with Kubernetes",
          "Distributed tracing and monitoring",
          "Circuit breaker pattern for fault tolerance",
          "API Gateway for service orchestration"
        ],
        githubUrl: "https://github.com/momen124/event-platform",
        liveUrl: "https://events.yourproject.com"
      }
    ];
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium tracking-wide uppercase text-sm">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical expertise through real-world projects that demonstrate 
              backend development, cloud architecture, and full-stack capabilities.
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project: Project, index: number) => {
              const colors = projectColors[project.icon] || projectColors.Server;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`fade-in group ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  <Card className={`relative overflow-hidden border-2 ${colors.border} hover:border-opacity-60 bg-gradient-to-br ${colors.gradient} backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>
                    <div className={`absolute -top-2 -right-2 w-24 h-24 ${colors.bg} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    
                    <div className={`grid grid-cols-1 lg:grid-cols-5 gap-0 ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                      {/* Main Content */}
                      <div className={`lg:col-span-3 p-8 ${isEven ? '' : 'lg:col-start-3'}`}>
                        <CardHeader className="p-0 mb-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`relative p-4 ${colors.bg} rounded-2xl ${colors.accent} group-hover:scale-110 transition-all duration-300`}>
                              {iconMap[project.icon] || <Server className="w-6 h-6" />}
                              <div className={`absolute inset-0 ${colors.bg} rounded-2xl animate-pulse opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Star className={`w-4 h-4 ${colors.accent}`} />
                                <span className={`text-xs font-medium ${colors.accent} uppercase tracking-wider`}>Featured Project</span>
                              </div>
                              <CardTitle className="text-2xl xl:text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                                {project.title}
                              </CardTitle>
                            </div>
                          </div>
                          <CardDescription className="text-base leading-relaxed text-muted-foreground">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="p-0 space-y-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                              <Code2 className="w-4 h-4" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech: string, techIndex: number) => (
                                <Badge 
                                  key={techIndex} 
                                  className={`px-3 py-1 text-xs font-medium border-2 bg-card ${colors.border} ${colors.accent} hover:bg-opacity-20 hover:scale-105 transition-all duration-200`}
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-3">
                            <Button variant="default" size="sm" className={`${colors.bg} ${colors.accent} border ${colors.border} hover:bg-opacity-80`} asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                              </a>
                            </Button>
                            {project.liveUrl && (
                              <Button variant="outline" size="sm" className="hover:shadow-lg" asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                            {project.docsUrl && (
                              <Button variant="outline" size="sm" className="hover:shadow-lg" asChild>
                                <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  API Docs
                                </a>
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </div>
                      
                      {/* Features Sidebar */}
                      <div className={`lg:col-span-2 bg-card/50 backdrop-blur-sm border-l-4 ${colors.border} p-8 ${isEven ? '' : 'lg:col-start-1'}`}>
                        <div className="sticky top-8">
                          <h4 className="font-semibold mb-6 text-sm uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            Key Features & Highlights
                          </h4>
                          <ul className="space-y-4">
                            {project.features.map((feature: string, featureIndex: number) => (
                              <li key={featureIndex} className="flex items-start gap-3 text-sm group/item">
                                <div className={`w-2 h-2 ${colors.bg} ${colors.accent} rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}></div>
                                <span className="text-muted-foreground leading-relaxed group-hover/item:text-card-foreground transition-colors duration-200">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-20 fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <Card className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/30 p-8">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Github className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold gradient-text">Want to see more?</h3>
                </div>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Explore my complete portfolio on GitHub or let's discuss your next project
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="modern-btn glow-effect" asChild>
                    <a href="https://github.com/momen124" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      View All Projects
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10" asChild>
                    <a href="#contact">
                      Let's Collaborate
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;