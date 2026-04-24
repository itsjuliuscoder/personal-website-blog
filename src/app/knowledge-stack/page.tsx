import { Metadata } from "next";
import { getAllKnowledgeStacks } from "@/lib/api";
import { Knowledge } from "@/types/contentful";
import { siteConfig } from "@/lib/seo";
import { InnerPageHeader } from "@/components/layout/InnerPageHeader";
import { KNOWLEDGE_LINKS, KNOWLEDGE_QUOTES } from "@/content/home";
import { plainTextFromDocument } from "@/lib/plainText";
import styles from "./KnowledgeStackPage.module.css";

export const revalidate = 3600;

export const generateMetadata = (): Metadata => {
  return {
    title: "Knowledge Stack",
    description:
      "A curated repository of resources, tools, and reading materials in software engineering, AI, and fintech.",
    alternates: { canonical: `${siteConfig.url}/knowledge-stack` },
    openGraph: {
      title: "Knowledge Stack | Julius Olajumoke",
      description:
        "A curated repository of resources, tools, and reading materials in software engineering, AI, and fintech.",
      url: `${siteConfig.url}/knowledge-stack`,
      type: "website",
      locale: "en_GB",
    },
  };
};

const Page = async () => {
  const cmsItems: Knowledge[] = await getAllKnowledgeStacks();
  const curatedUrls = new Set(KNOWLEDGE_LINKS.map((l) => l.url));

  const cmsLinks = cmsItems.filter(
    (k) => k.type === "link" && k.url && !curatedUrls.has(k.url)
  );
  const cmsNonLinks = cmsItems.filter((k) => k.type !== "link");

  return (
    <main id="main">
      <InnerPageHeader
        label="Knowledge stack"
        title="Repository"
        description="Curated links and notes from the homepage, plus entries from the CMS."
      />
      <div className={styles.content}>
        <h2 className={styles.blockTitle}>Links</h2>
        <ul className={styles.list}>
          {KNOWLEDGE_LINKS.map((l) => (
            <li key={l.url} className={styles.listItem}>
              <a
                href={l.url}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.title}
              </a>
            </li>
          ))}
          {cmsLinks.map((k) => (
            <li key={k.sys.id} className={styles.listItem}>
              <a
                href={k.url}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {k.title}
              </a>
            </li>
          ))}
        </ul>

        <h2 className={styles.blockTitleSpaced}>Quotes</h2>
        {KNOWLEDGE_QUOTES.map((q) => (
          <figure key={q.author}>
            <blockquote className={styles.quote}>
              <span className="sr-only">Quote attributed to {q.author}</span>
              <cite>— {q.author}</cite>
            </blockquote>
          </figure>
        ))}

        {cmsNonLinks.length > 0 ? (
          <>
            <p className={styles.subLabel}>From the archive</p>
            {cmsNonLinks.map((k) => {
              const body =
                String(k.description ?? "").trim() ||
                plainTextFromDocument(k.source);
              return (
                <figure key={k.sys.id}>
                  <blockquote className={styles.quote}>
                    {body ? <span>{body}</span> : null}
                    <cite>— {k.title}</cite>
                  </blockquote>
                </figure>
              );
            })}
          </>
        ) : null}
      </div>
    </main>
  );
};

export default Page;
