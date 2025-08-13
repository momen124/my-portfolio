import { GraduationCap, Award, BookOpen, Cloud } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './ui/badge';
import { EducationCategory, EducationItem } from '../types/portfolio';

const S3_EDUCATION_URL = 'https://portfolio-content-2025.s3.us-east-1.amazonaws.com/portfolio-content.json';

const iconMap = {
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />
};

const Education = async () => {
  let educationCategories: EducationCategory[] = [];
  try {
    const res = await fetch(S3_EDUCATION_URL, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      educationCategories = data.education || [];
    }
  } catch (error) {
    console.error('Failed to fetch education:', error);
    // Fallback to hard-coded
    educationCategories = [
      {
        title: "Formal Programs & Comprehensive Curricula",
        icon: "GraduationCap",
        items: [
          {
            name: "ALX Software Engineering Program",
            institution: "ALX",
            description: "Comprehensive full-stack development program covering low-level programming (C), algorithms, data structures, system design, and collaborative development.",
            keyLearnings: "Applied principles of efficient algorithm design and data structures in backend projects, utilized collaborative development workflows for team-based development.",
            relevance: "Foundation for all backend development projects and understanding of computer science fundamentals."
          },
          {
            name: "ALX ProDev",
            institution: "ALX",
            description: "Advanced software development practices and professional development skills program.",
            keyLearnings: "Enhanced understanding of professional software development practices and project management methodologies.",
            relevance: "Critical in managing the complexity of microservices architecture and distributed systems projects."
          },
          {
            name: "Open Source Society University (OSSU) Computer Science Curriculum",
            institution: "OSSU",
            description: "Self-directed comprehensive computer science curriculum covering discrete mathematics, algorithms, operating systems, networking, and databases.",
            keyLearnings: "Strong theoretical foundation in computer science fundamentals, including operating systems, networking, and database theory.",
            relevance: "Instrumental in designing scalable architectures and understanding containerization and cloud infrastructure."
          }
        ]
      },
      {
        title: "Cloud & DevOps Certifications",
        icon: "Cloud",
        items: [
          {
            name: "AWS Certified Cloud Practitioner",
            institution: "Amazon Web Services",
            description: "Fundamental understanding of AWS cloud concepts, services, security, architecture, pricing, and support.",
            keyLearnings: "Comprehensive knowledge of AWS core services, cloud computing concepts, and best practices for cloud deployment.",
            relevance: "Foundational knowledge for deploying and managing resources in AWS for all cloud-based projects."
          },
          {
            name: "AWS Certified Solutions Architect – Associate",
            institution: "Amazon Web Services",
            description: "Advanced certification covering design of distributed systems, highly available, scalable, fault-tolerant, and cost-effective applications on AWS.",
            keyLearnings: "Deep understanding of AWS services including EC2, S3, RDS, VPC, Load Balancers, Auto Scaling, and architectural best practices.",
            relevance: "Directly applied architectural best practices and service selection knowledge to design robust and scalable AWS infrastructure for production applications."
          }
        ]
      },
      {
        title: "Specialized University Courses",
        icon: "BookOpen",
        items: [
          {
            name: "Software Architecture",
            institution: "University of Alberta",
            description: "Principles of software architecture, architectural patterns, quality attributes (scalability, security, maintainability), and architectural documentation.",
            keyLearnings: "Understanding of architectural patterns, quality attributes, and design principles for large-scale systems.",
            relevance: "Informed architectural decisions and design patterns used in microservices projects, ensuring modular and scalable system design."
          },
          {
            name: "Design Patterns & Object-Oriented Design",
            institution: "University of Alberta",
            description: "Fundamental design patterns (Factory, Singleton, Observer), SOLID principles, and object-oriented analysis and design.",
            keyLearnings: "Mastery of design patterns, SOLID principles, and object-oriented programming concepts.",
            relevance: "Implemented various design patterns (Repository, Strategy) in backend projects to enhance code reusability and maintainability."
          },
          {
            name: "Secure Coding",
            institution: "UC Davis & Northeastern University",
            description: "Common vulnerabilities (OWASP Top 10), secure coding practices, threat modeling, defensive programming, and secure authentication/authorization.",
            keyLearnings: "Comprehensive understanding of web security vulnerabilities and secure coding practices.",
            relevance: "Integrated secure coding practices and OWASP Top 10 mitigation techniques into all API projects, ensuring robust protection against common web vulnerabilities."
          },
          {
            name: "DevOps",
            institution: "IBM",
            description: "DevOps principles, CI/CD pipelines, automation, infrastructure as code, monitoring, and collaboration between development and operations.",
            keyLearnings: "Understanding of DevOps culture, practices, and tools for continuous integration and deployment.",
            relevance: "Directly informed the design and implementation of CI/CD pipelines and Infrastructure as Code practices, streamlining deployment workflows."
          }
        ]
      }
    ];
  }

  return (
    <section id="education" className="py-20 section-bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Education & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive educational foundation combining formal programs, industry certifications, 
              and specialized coursework that directly informs my practical software development skills.
            </p>
          </div>
          
          <div className="space-y-12">
            {educationCategories.map((category: EducationCategory, categoryIndex: number) => (
              <div key={categoryIndex} className="fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                    {iconMap[category.icon] || <GraduationCap className="w-6 h-6" />}
                  </div>
                  <h3 className="text-2xl font-semibold gradient-text">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.items.map((item: EducationItem, itemIndex: number) => (
                    <Card key={itemIndex} className="modern-card h-full group hover:shadow-xl">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg text-primary group-hover:text-primary/80 transition-colors duration-300">
                          {item.name}
                        </CardTitle>
                        <CardDescription className="font-medium text-card-foreground text-base">
                          {item.institution}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="inner-card p-4 space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm mb-2 text-primary">Key Learnings:</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.keyLearnings}
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-sm mb-2 text-secondary">Applied in Projects:</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.relevance}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 fade-in">
            <Card className="modern-card bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-2xl gradient-text">Continuous Learning</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Beyond formal education, I actively pursue continuous learning through various platforms
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <Badge className="skill-badge">Udemy Courses</Badge>
                  <Badge className="skill-badge">Technical Documentation</Badge>
                  <Badge className="skill-badge">Open Source Contributions</Badge>
                  <Badge className="skill-badge">Industry Best Practices</Badge>
                  <Badge className="skill-badge">Technology Blogs</Badge>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  I believe in staying current with emerging technologies and industry trends through 
                  continuous learning, hands-on experimentation, and engagement with the developer community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;