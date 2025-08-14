import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { SkillCategory } from '../types/portfolio';
import { Server, Cloud, Globe, Code } from 'lucide-react';
import { JSX } from 'react';

const s3Url = process.env.NEXT_PUBLIC_S3_CONTENT_URL || 'https://portfolio-content-2025.s3.amazonaws.com/portfolio-content.json';

const categoryIcons: { [key: string]: JSX.Element } = {
  "Backend Development": <Server className="w-5 h-5" />,
  "Cloud & DevOps": <Cloud className="w-5 h-5" />,
  "Full-stack / Frontend": <Globe className="w-5 h-5" />,
  "Software Engineering Principles": <Code className="w-5 h-5" />,
};

const categoryColors: { [key: string]: string } = {
  "Backend Development": "primary",
  "Cloud & DevOps": "secondary", 
  "Full-stack / Frontend": "accent",
  "Software Engineering Principles": "destructive",
};

const Skills = async () => {
  let skillCategories: SkillCategory[] = [];
  try {
    const res = await fetch(s3Url, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      skillCategories = data.skills || [];
    }
  } catch (error) {
    console.error('Failed to fetch skills:', error);
    // Fallback to hard-coded
    skillCategories = [
      {
        title: "Backend Development",
        skills: [
          "Node.js", "Python", "Express.js", "Flask", "Django", "NestJS",
          "PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB",
          "RESTful APIs", "GraphQL", "Microservices", "Jest", "Pytest"
        ]
      },
      {
        title: "Cloud & DevOps",
        skills: [
          "Amazon Web Services (AWS)", "EC2", "S3", "RDS", "Lambda", "API Gateway",
          "CloudWatch", "VPC", "IAM", "Docker", "Kubernetes", "Terraform",
          "GitHub Actions", "Jenkins", "CI/CD", "Infrastructure as Code"
        ]
      },
      {
        title: "Full-stack / Frontend",
        skills: [
          "React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3",
          "Tailwind CSS", "Bootstrap", "Responsive Design", "State Management"
        ]
      },
      {
        title: "Software Engineering Principles",
        skills: [
          "Object-Oriented Design", "SOLID Principles", "Design Patterns",
          "Secure Coding", "OWASP Top 10", "Test-Driven Development",
          "Agile/Scrum", "Code Reviews", "Software Architecture", "Scalable Systems"
        ]
      }
    ];
  }

  const getColorClasses = (categoryTitle: string, colorType: string) => {
    const color = categoryColors[categoryTitle] || "primary";
    
    const colorMap: { [key: string]: { [key: string]: string } } = {
      primary: {
        bg: "bg-primary",
        bgLight: "bg-primary/10",
        bgHover: "hover:bg-primary",
        text: "text-primary",
        textHover: "hover:text-primary-foreground",
        border: "border-primary/20",
        borderHover: "hover:border-primary"
      },
      secondary: {
        bg: "bg-secondary",
        bgLight: "bg-secondary/10", 
        bgHover: "hover:bg-secondary",
        text: "text-secondary",
        textHover: "hover:text-secondary-foreground",
        border: "border-secondary/20",
        borderHover: "hover:border-secondary"
      },
      accent: {
        bg: "bg-accent",
        bgLight: "bg-accent/10",
        bgHover: "hover:bg-accent", 
        text: "text-accent",
        textHover: "hover:text-accent-foreground",
        border: "border-accent/20",
        borderHover: "hover:border-accent"
      },
      destructive: {
        bg: "bg-destructive",
        bgLight: "bg-destructive/10",
        bgHover: "hover:bg-destructive",
        text: "text-destructive", 
        textHover: "hover:text-destructive-foreground",
        border: "border-destructive/20",
        borderHover: "hover:border-destructive"
      }
    };
    
    return colorMap[color][colorType] || colorMap.primary[colorType];
  };

  return (
    <section id="skills" className="py-20 section-bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across backend development, 
              cloud infrastructure, and software engineering best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category: SkillCategory, index: number) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden border-2 ${getColorClasses(category.title, 'border')} ${getColorClasses(category.title, 'borderHover')} bg-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group`}
              >
                {/* Decorative gradient background */}
                <div className={`absolute inset-0 ${getColorClasses(category.title, 'bgLight')} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                {/* Header with icon */}
                <CardHeader className="relative pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-3 ${getColorClasses(category.title, 'bgLight')} rounded-xl ${getColorClasses(category.title, 'text')} group-hover:scale-110 transition-transform duration-300`}>
                      {categoryIcons[category.title] || <Code className="w-5 h-5" />}
                    </div>
                    <CardTitle className={`text-xl font-bold ${getColorClasses(category.title, 'text')} group-hover:text-card-foreground transition-colors duration-300`}>
                      {category.title}
                    </CardTitle>
                  </div>
                  <div className={`w-full h-1 ${getColorClasses(category.title, 'bg')} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill: string, skillIndex: number) => (
                      <Badge 
                        key={skillIndex}
                        className={`
                          px-4 py-2 text-sm font-medium rounded-full cursor-pointer
                          bg-card border-2 ${getColorClasses(category.title, 'border')}
                          ${getColorClasses(category.title, 'text')}
                          ${getColorClasses(category.title, 'bgHover')} ${getColorClasses(category.title, 'textHover')}
                          hover:scale-105 hover:shadow-lg
                          transition-all duration-300 ease-out
                          transform hover:-translate-y-1
                        `}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 fade-in">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 animate-gradient"></div>
              
              <CardContent className="relative p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 gradient-text">What Makes Me Unique</h3>
                <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                  My unique blend of rigorous academic training from programs like ALX and OSSU, 
                  coupled with practical expertise in AWS cloud infrastructure and modern DevOps methodologies, 
                  allows me to approach software development with a comprehensive, end-to-end perspective. 
                  I am particularly driven by the challenge of architecting secure, high-performance systems 
                  and ensuring their seamless deployment and operation.
                </p>
                
                {/* Skill level indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Server className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary mb-1">Backend Expert</h4>
                    <p className="text-sm text-muted-foreground">5+ Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Cloud className="w-8 h-8 text-secondary" />
                    </div>
                    <h4 className="font-semibold text-secondary mb-1">Cloud Architect</h4>
                    <p className="text-sm text-muted-foreground">AWS Certified</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-accent mb-1">Full-Stack Dev</h4>
                    <p className="text-sm text-muted-foreground">Modern Frameworks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;