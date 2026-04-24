import { Metadata } from "next";
import { getAllProjects } from "@/lib/api";
import { Projects } from "@/types/contentful";
import { siteConfig } from "@/lib/seo";
import { InnerPageHeader } from "@/components/layout/InnerPageHeader";
import { plainTextFromDocument } from "@/lib/plainText";
import styles from "./ProjectsPage.module.css";

export const revalidate = 3600;

export const generateMetadata = (): Metadata => {
  return {
    title: "Projects",
    description:
      "Open-source projects and products built by Julius Olajumoke, software engineer in Lagos, Nigeria.",
    alternates: { canonical: `${siteConfig.url}/projects` },
    openGraph: {
      title: "Projects | Julius Olajumoke",
      description:
        "Open-source projects and products built by Julius Olajumoke, software engineer in Lagos, Nigeria.",
      url: `${siteConfig.url}/projects`,
      type: "website",
      locale: "en_GB",
    },
  };
};

function tagFromSource(source: string): string {
  const s = source.trim();
  if (!s) return "PROJECT";
  return s.replace(/^https?:\/\//i, "").split("/")[0]?.toUpperCase() ?? "PROJECT";
}

const Page = async () => {
  const projects = await getAllProjects();

  return (
    <main id="main">
      <InnerPageHeader
        label="Projects"
        title="Shipped work"
        description="Products and open experiments — links go to demos, repos, or live apps."
      />
      <div className={styles.content}>
        <div className={styles.grid}>
          {projects.map((project: Projects) => {
            const excerpt = plainTextFromDocument(project.excerpt);
            return (
              <article key={project.slug} className={styles.card}>
                <span className={styles.tag}>{tagFromSource(project.source)}</span>
                <h2 className={styles.name}>{String(project.title)}</h2>
                <p className={styles.desc}>
                  {excerpt || "—"}
                </p>
                <a
                  href={project.source}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
