import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface CoreArea {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Initiative {
  project: string;
  partner: string;
  outcome: string;
}

export interface Milestone {
  period: string;
  title: string;
  description: string;
}

export interface Partner {
    name: string;
    description: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  bio: string;
  imageUrl: string;
}

export interface NewsArticle {
  title: string;
  category: 'News' | 'Views' | 'Update';
  date: string;
  excerpt: string;
  readMoreUrl: string;
}

export interface GalleryVideo {
  id: string;
  title: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface ResourceDocument {
  title: string;
  description: string;
  fileType: 'PDF' | 'Word';
  url: string;
}