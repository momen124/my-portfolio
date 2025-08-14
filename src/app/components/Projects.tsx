import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Globe, Server, Shield } from 'lucide-react';
import { Project } from '../types/portfolio';

const s3Url = process.env.NEXT_PUBLIC_S3_CONTENT_URL || 'https://portfolio-content-2025.s3.amazonaws.com/portfolio-content.json';
const iconMap = {
  Server: <Server className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
};

const Projects = async () => {
  let projects: Project[] = [];
  try {
    const res = await fetch(s3Url, { cache: 'force-cache', next: { revalidate: 3600 } });
    if (res.ok) {
      const data = await res.json();
      projects = data.projects || [];
    }
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    projects = [
      {
        title: "Sample Project",
        description: "A sample project showcasing my skills.",
        icon: "Server",
        technologies: ["Node.js", "React", "AWS"],
        features: ["Feature 1", "Feature 2"],
        githubUrl: "https://github.com/momen124/sample",
        liveUrl: "https://example.com",
        docsUrl: "https://docs.example.com"
      }
    ];
  }

  return (
    <section id="projects" className="py-20 section-bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work, highlighting technical expertise in backend development, cloud infrastructure, and full-stack solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="modern-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      {iconMap[project.icon] || <Server className="w-6 h-6" />}
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} className="skill-badge">{tech}</Badge>
                    ))}
                  </div>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      <Github className="w-5 h-5" />
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.docsUrl && (
                      <a href={project.docsUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Docs
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;