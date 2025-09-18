export type WidgetType = 'text' | 'image';

export interface TextWidget {
  id: string;
  type: 'text';
  html: string;
}

export interface ImageWidget {
  id: string;
  type: 'image';
  url: string;
  alt?: string;
}

export type PostWidget = TextWidget | ImageWidget;

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date
  widgets: PostWidget[];
}


