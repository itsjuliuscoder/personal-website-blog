import { siteConfig } from "@/lib/seo";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Senior Software Engineer",
    description: siteConfig.description,
    sameAs: [
      "https://github.com/itsjuliuscoder",
      "https://www.linkedin.com/in/julius-olajumoke",
      "https://www.instagram.com/juliuscoder/",
      "https://twitter.com/ojuliuscoder",
    ],
    knowsAbout: ["Fintech", "AI", "Software Engineering", "MCP"],
    worksFor: {
      "@type": "Organization",
      name: "MeekFi",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
  imageUrl?: string;
}

export function ArticleJsonLd({
  title,
  description,
  publishedAt,
  slug,
  imageUrl,
}: ArticleJsonLdProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedAt,
    url: `${siteConfig.url}/stories/${slug}`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  if (imageUrl) {
    schema.image = imageUrl;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
