import Link from "next/link";
import { SectionShell } from "@/components/layout/SectionShell";
import { WRITING_ITEMS } from "@/content/home";
import styles from "./WritingSection.module.css";

export function WritingSection() {
  return (
    <SectionShell id="writing">
      <p className={styles.label}>Writing</p>
      <div className={styles.grid}>
        {WRITING_ITEMS.map((item) => {
          const inner = (
            <>
              <span className={styles.tag}>{item.tag}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.footer}>
                <span className={styles.meta}>{item.year}</span>
                <span className={styles.meta}>{item.readTime}</span>
              </div>
            </>
          );
          if (item.external) {
            return (
              <a
                key={item.href}
                href={item.href}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            );
          }
          return (
            <Link key={item.href} href={item.href} className={styles.card}>
              {inner}
            </Link>
          );
        })}
      </div>
      <p className={styles.bottom}>
        <Link href="/stories" className={styles.bottomLink}>
          View all stories →
        </Link>
      </p>
    </SectionShell>
  );
}
