import { SectionShell } from "@/components/layout/SectionShell";
import { PROJECT_ITEMS } from "@/content/home";
import styles from "./ProjectsSection.module.css";

const featured = PROJECT_ITEMS.filter((p) => p.featured);
const more = PROJECT_ITEMS.filter((p) => !p.featured);

export function ProjectsSection() {
  return (
    <SectionShell id="projects">
      <p className={styles.label}>Projects</p>
      <div className={styles.featured}>
        {featured.map((p) => (
          <article key={p.name} className={styles.card}>
            <span className={styles.tag}>{p.tag}</span>
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.desc}>{p.description}</p>
            <a
              href={p.url}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View project →
            </a>
          </article>
        ))}
      </div>
      <p className={styles.moreLabel}>More projects</p>
      <div className={styles.moreRows}>
        {more.map((p) => (
          <div key={p.name} className={styles.moreRow}>
            <div>
              <p className={styles.moreName}>{p.name}</p>
              <p className={styles.moreTag}>{p.tag}</p>
            </div>
            <a
              href={p.url}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View project →
            </a>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
