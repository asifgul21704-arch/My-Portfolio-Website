export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  accentColor: string;
  previewType: 'restaurant' | 'bakery' | 'books' | 'ecommerce' | 'healthcare' | 'generic';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  category?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
}

export interface CVData {
  name: string;
  title: string;
  experience: string;
  education: {
    degree: string;
    institution: string;
  };
  skills: string[];
  training: string[];
  languages: string[];
  contact: {
    email: string;
    phone: string;
    github: string;
    location: string;
  };
  freelanceExperience: {
    role: string;
    period: string;
    points: string[];
  };
}
