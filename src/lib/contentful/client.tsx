import { createClient } from "contentful";


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ""
})

export const getBlogPosts = async () => {
    const entries = await client.getEntries({ content_type: 'post' });
    return entries.items;
}

export const getBlogPostBySlug = async (slug: string) => {
    const entries = await client.getEntries({
        content_type: 'post',
        'fields.slug': slug,
    });

    return entries.items[0]; 
}

export const previewClient = createClient({
    host: 'preview.contentful.com',
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN || ''
})

