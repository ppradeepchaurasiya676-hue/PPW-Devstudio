export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  technologies: string[];
  liveDemoUrl: string;
  category: string;
  highlights: string[];
  client: string;
  year: string;
  status: 'Live' | 'Featured' | 'Live & Operational' | string;
  designTheme?: string;
  isLiveUrlPending?: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Core' | 'Data & AI' | 'Tools';
  description: string;
  icon: string;
  level: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget?: string;
  message: string;
}
