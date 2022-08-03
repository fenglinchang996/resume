export type Category = {
  title: string;
};

export type Contact = {
  email?: string;
  linkedin?: string;
  github?: string;
};

export type About = {
  name: string;
  headline: string;
  contact: Contact;
  summary: string;
};

export type Skill = {
  title: string;
  skillList: string[];
};

export type Experience = {
  title: string;
  company: {
    name: string;
    url: string;
  };
  startDate: Date;
  endDate?: Date;
  location: string;
  description: string | string[];
  skills?: string[];
};

export type Project = {
  title: string;
  briefDescription: string;
  startDate: Date;
  endDate?: Date;
  projectURL?: string;
  repoURL?: string;
  detailedDescription?: string | string[];
  skills?: string[];
};

export type Education = {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate?: Date;
};

export type ResumeData = {
  about: About;
  skills: Skill[];
  workExperience: Experience[];
  otherExperience: Experience[];
  projects: Project[];
  education: Education[];
};
