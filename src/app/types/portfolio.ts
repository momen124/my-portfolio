export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  icon: "Server" | "Globe" | "Shield";
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  docsUrl?: string;
}

export interface EducationItem {
  name: string;
  institution: string;
  description: string;
  keyLearnings: string;
  relevance: string;
}

export interface EducationCategory {
  title: string;
  icon: "GraduationCap" | "Cloud" | "BookOpen";
  items: EducationItem[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
}

export interface PortfolioContent {
  skills: SkillCategory[];
  projects: Project[];
  education: EducationCategory[];
  blog: BlogPost[];
}