export interface Author {
  id: string;
  fullName: string;
  nickname?: string;
  roles: string[];
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

export interface Feature {
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

export interface NavItem {
  title: string;
  url: string;
  targetBlank: boolean;
}

export interface Navigation {
  id: string;
  title: string;
  navigationId: string;
  items: NavItem[];
  showInFooter: boolean;
}