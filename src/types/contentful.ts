import { Document } from "@contentful/rich-text-types";
import { EntrySkeletonType, Asset } from "contentful";


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

interface PresentationFields {
    title: string;
    description: string;
    file: Asset; // Assuming the file is an Asset type in Contentful
    slug: string; // Added slug field
    location: string;
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


export interface Presentation extends EntrySkeletonType {
    contentTypeId: 'talks';
    title: string;
    description: string;
    document: PresentationDocument;
    // file: PresentationDocument;
    slug: string; // Added slug field
    location: string;
    
}

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




