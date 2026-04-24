import Link from "next/link";
import { Metadata } from "next";
import { getAllPresentation } from "@/lib/api";
import { Presentation } from "@/types/contentful";
import { siteConfig } from "@/lib/seo";
import { InnerPageHeader } from "@/components/layout/InnerPageHeader";
import styles from "./TalksPage.module.css";

export const revalidate = 3600;

export const generateMetadata = (): Metadata => {
  return {
    title: "Talks",
    description:
      "Conference talks and presentations by Julius Olajumoke at Google and other tech events across Africa.",
    alternates: { canonical: `${siteConfig.url}/talks` },
    openGraph: {
      title: "Talks | Julius Olajumoke",
      description:
        "Conference talks and presentations by Julius Olajumoke at Google and other tech events across Africa.",
      url: `${siteConfig.url}/talks`,
      type: "website",
      locale: "en_GB",
    },
  };
};

function yearFromEventDate(eventDate: string | undefined): string {
  if (!eventDate) return "";
  const d = new Date(eventDate);
  return Number.isNaN(d.getTime()) ? "" : String(d.getFullYear());
}

function talkMeta(p: Presentation): string {
  const loc = String(p.location ?? "").trim();
  const y = yearFromEventDate(p.eventDate);
  const parts = [loc.toUpperCase(), y].filter(Boolean);
  return parts.join(" · ");
}

const Page = async () => {
  const presentations = await getAllPresentation();

  return (
    <main id="main">
      <InnerPageHeader
        label="Talks"
        title="Speaking"
        description="Conference talks and presentations — mostly Google and pan-African tech events."
      />
      <div className={styles.content}>
        <div className={styles.rows}>
          {presentations.map((p) => (
            <Link
              key={p.sys?.id ?? p.slug}
              href={`/talks/${p.slug}`}
              className={styles.row}
              prefetch={false}
            >
              <div>
                <p className={styles.meta}>{talkMeta(p)}</p>
                <h2 className={styles.title}>{String(p.title)}</h2>
                <p className={styles.venue}>{String(p.description)}</p>
              </div>
              <span className={styles.arrow} aria-hidden>
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
