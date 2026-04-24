import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/api";
import { BlogPost } from "@/types/contentful";
import { siteConfig } from "@/lib/seo";
import { InnerPageHeader } from "@/components/layout/InnerPageHeader";
import styles from "./StoriesPage.module.css";

export const revalidate = 3600;

export const generateMetadata = (): Metadata => {
  return {
    title: "Stories",
    description:
      "Writing on software engineering, AI, fintech, and building products — by Julius Olajumoke.",
    alternates: { canonical: `${siteConfig.url}/stories` },
    openGraph: {
      title: "Stories | Julius Olajumoke",
      description:
        "Writing on software engineering, AI, fintech, and building products — by Julius Olajumoke.",
      url: `${siteConfig.url}/stories`,
      type: "website",
      locale: "en_GB",
    },
  };
};

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

const Page = async () => {
  const posts: BlogPost[] = await getAllPosts();

  return (
    <main id="main">
      <InnerPageHeader
        label="Stories"
        title="Writing"
        description="Essays and notes on software engineering, AI, fintech, and building products."
      />
      <div className={styles.content}>
        <div className={styles.rows}>
          {posts.map((post) => {
            const isArticle = post.type === "article";
            const href = isArticle ? `/stories/${post.slug}` : post.link;
            const inner = (
              <>
                <p className={styles.date}>{formatDate(post.sys.createdAt)}</p>
                <h2 className={styles.title}>{String(post.title)}</h2>
                <p className={styles.excerpt}>{String(post.excerpt)}</p>
              </>
            );

            if (isArticle) {
              return (
                <Link
                  key={post.sys.id}
                  href={href}
                  className={styles.row}
                  prefetch={false}
                >
                  {inner}
                </Link>
              );
            }

            return (
              <a
                key={post.sys.id}
                href={href}
                className={styles.row}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
