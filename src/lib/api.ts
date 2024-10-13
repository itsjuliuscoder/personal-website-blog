import { createClient, EntryCollection } from 'contentful';
import { BlogPost } from '../types/contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Fetch posts and include sys metadata
export async function getAllPosts(): Promise<BlogPost[]> {
    const response: EntryCollection<BlogPost> = await client.getEntries<BlogPost>({
      content_type: 'post',
      order: ['-sys.createdAt'],
    });
  
    return response.items.map(item => ({
      ...item.fields,  // This includes slug, title, etc.
      sys: item.sys,  // Include sys metadata like id, createdAt, etc.
    } as unknown as BlogPost));
  }
  

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const response: EntryCollection<BlogPost> = await client.getEntries({
        content_type: 'post',
        'fields.slug': slug,  // Correct query for Contentful API
        limit: 1,
    } as { content_type: string; 'fields.slug': string; limit: number });

  return response.items[0] ? (response.items[0].fields as unknown as BlogPost) : null;
}
