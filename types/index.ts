export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  socials: SocialLink[];
  resumeUrl: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  navItems: NavItem[];
}

export type ProjectStatus = "Live" | "In Development" | "Research" | "Coming Soon";
export type ProjectCategory = "Agentic AI" | "Live AI Applications" | "Advanced AI Engineering";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  status: ProjectStatus;
  featured: boolean;
  technologies: string[];
  domain: string;
  image: string;
  gallery: string[];
  architecture: string; // URL to architecture image/SVG or component name
  problem: string;
  solution: string;
  workflow: string[];
  implementation: string;
  evaluation: string;
  results: string[];
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}
