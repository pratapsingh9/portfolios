// TYPE DEFINITIONS
export interface IconProps {
  className?: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
  projects: Project[];
  skills: {
    technical: SkillCategory[];
    nonTechnical: string[];
  };
  certifications: Certification[];
}

export interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeLink: string;
}
