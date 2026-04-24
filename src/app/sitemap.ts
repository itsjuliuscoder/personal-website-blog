import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";
import { siteConfig } from "@/lib/seo";

const base = siteConfig.url;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const storyEntries: MetadataRoute.Sitemap = posts
    .filter((p) => p.type === "article" && p.slug)
    .map((p) => ({
      url: `${base}/stories/${String(p.slug)}`,
      lastModified: new Date(p.sys.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/stories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/talks`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/knowledge-stack`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...storyEntries,
  ];
}
