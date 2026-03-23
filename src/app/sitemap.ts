import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const storyEntries: MetadataRoute.Sitemap = posts
    .filter((p) => p.type === "article" && p.slug)
    .map((p) => ({
      url: `https://www.juliusolajumoke.com/stories/${String(p.slug)}`,
      lastModified: new Date(p.sys.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: "https://www.juliusolajumoke.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.juliusolajumoke.com/stories",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.juliusolajumoke.com/talks",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.juliusolajumoke.com/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.juliusolajumoke.com/knowledge-stack",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...storyEntries,
  ];
}
