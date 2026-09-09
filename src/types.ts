export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  featuredImageAlt: string;
  pinterestImage?: string;
  pinterestTitle?: string;
  pinterestDescription?: string;
  category: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  published: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  readingTime: string;
  author: User;
}

export interface Media {
  id: string;
  url: string;
  name: string;
  alt: string;
  type: string;
  createdAt: string;
}

export type ViewMode = 
  | { type: 'home' }
  | { type: 'blog' }
  | { type: 'category'; category: string }
  | { type: 'article'; slug: string }
  | { type: 'about' }
  | { type: 'admin' }
  | { type: 'search'; query?: string };
