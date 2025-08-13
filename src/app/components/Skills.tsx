import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { SkillCategory } from '../types/portfolio';

const S3_SKILLS_URL = 'https://portfolio-content-2025.s3.us-east-1.amazonaws.com/portfolio-content.json';

const Skills = async () => {
  let skillCategories: SkillCategory[] = [];
  try {
    const res = await fetch(S3_SKILLS_URL, { cache: 'no-store' });
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

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across backend development, 
              cloud infrastructure, and software engineering best practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category: SkillCategory, index: number) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string, skillIndex: number) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-sm py-1 px-3 hover:bg-primary  hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">What Makes Me Unique</h3>
              <p className="text-muted-foreground leading-relaxed">
                My unique blend of rigorous academic training from programs like ALX and OSSU, 
                coupled with practical expertise in AWS cloud infrastructure and modern DevOps methodologies, 
                allows me to approach software development with a comprehensive, end-to-end perspective. 
                I am particularly driven by the challenge of architecting secure, high-performance systems 
                and ensuring their seamless deployment and operation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;