import { Document } from "@contentful/rich-text-types";
import { EntrySkeletonType } from "contentful";


export interface Assets {
    title: string;
    description?: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };   
  sys: Sys;
  metadata: Metadata
}

interface Metadata {
    tags: string;
}
export interface Author {
  name: string;
  picture: Assets;
}
// Define the fields for a blog post
export interface BlogPostFields {
  title: string;
  slug: string; // Slug is defined here
  content: Document;
  author: Author;
  coverImage: Image;
  date: string;
  excerpt: string;
}

// Define the sys metadata
interface Sys {
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface Slug {
  slug: string;
}

interface Title {
  title: string;
}

interface Excerpt {
  excerpt: string;
}

interface Image {
    fields: Assets;
}


interface PresentationDocument {
    fields: {
        file: {
            url: string;
            details: {
            size: number;
            };
            fileName: string;
            contentType: string;
        };
    } 
}

export interface KnowledgeFields {
  title: string;
  description: string;
  source: RichTextContent[];
}

export interface Knowledge extends EntrySkeletonType {
  contentTypeId: "knowledge";
  sys: Sys; // Metadata such as ID, timestamps
  title: string;
  description: string;
  type: string;
  url: string;
  source: Document;
}


export interface Presentation extends EntrySkeletonType {
    contentTypeId: 'talks';
    title: string;
    sys: Sys; // Metadata such as ID, timestamps
    description: string;
    document: PresentationDocument;
    // file: PresentationDocument;
    slug: string; // Added slug field
    location: string;
    
}

export type RichTextSource = Document | {
    nodeType: string;
    data: Record<string, unknown>;
    content: RichTextContent[];
};

export type RichTextContent = Document | {
  nodeType: string;
  data: Record<string, unknown>;
  content: RichTextContent[];
};

// The BlogPost type with fields and sys metadata
export interface BlogPost extends EntrySkeletonType<BlogPostFields> {
  sys: Sys; // Metadata such as ID, timestamps
  slug: Slug;
  title: Title;
  excerpt: Excerpt;
  content: RichTextContent;
  coverImage: Image;
  contentTypeId: "post";
}




