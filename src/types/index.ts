
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface ExperienceItem {
  jobTitle: string;
  companyName: string;
  location: string;
  workDuration: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  studyDuration: string;
}

export interface ProjectItem {
  title: string;
  timeline: string;
  technologiesUsed: string[];
  description: string;
  repoLink: string;
  liveDemoLink?: string;
}

export interface PortfolioData {
  name: string;
  designation: string;
  contact: ContactInfo;
  aboutMe: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  techAndTools: string[];
  projects: ProjectItem[];
}
