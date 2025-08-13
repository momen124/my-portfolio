import { ExternalLink, Github, Server, Globe, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Project } from '../types/portfolio';

const S3_PROJECTS_URL = 'https://portfolio-content-2025.s3.us-east-1.amazonaws.com/portfolio-content.json';

const iconMap = {
  Server: <Server className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />
};

const Projects = async () => {
  let projects: Project[] = [];
  try {
    const res = await fetch(S3_PROJECTS_URL, { cache: 'no-store' });
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical expertise through real-world projects that demonstrate 
              backend development, cloud architecture, and full-stack capabilities.
            </p>
          </div>
          <div className="space-y-12">
            {projects.map((project: Project, index: number) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {iconMap[project.icon] || <Server className="w-6 h-6" />}
                        </div>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: string, techIndex: number) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="default" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.docsUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              API Docs
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                  <div className="bg-muted/30 p-8 lg:border-l border-border">
                    <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                      Key Features & Contributions
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work or discuss a potential collaboration?
            </p>
            <Button size="lg" asChild>
              <a href="https://github.com/momen124" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;