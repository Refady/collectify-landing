export interface Author {
  id: string;
  fullName: string;
  nickname?: string;
  role: string;
  slug: string;
  avatar: {
    url: string;
    width: number;
    height: number;
  };
  portfolio?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  priority: number;
}

export interface FeatureQueryResult {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  icon: {
    url: string;
    width: number;
    height: number;
  };
  priority: number;
}

export interface Navigation {
  id: string;
  navigationId: string;
  items: {
    title: string;
    url: string;
    targetBlank: boolean;
  }[];
}