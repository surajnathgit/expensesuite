// types/index.ts
export interface Feature {
    id: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }
  
  export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
  }
  
  export interface TestimonialItem {
    id: string;
    name: string;
    position: string;
    company: string;
    avatar?: string;
    content: string;
    rating: number;
  }
  
  export interface TeamMember {
    id: string;
    name: string;
    position: string;
    avatar: string;
    bio: string;
    socialLinks: {
      linkedin?: string;
      twitter?: string;
      email?: string;
    };
  }
  
  export interface FaqItem {
    question: string;
    answer: string;
  }
  
  export interface ComparisonItem {
    task: string;
    manual: string;
    ai: string;
  }
  
  export interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }