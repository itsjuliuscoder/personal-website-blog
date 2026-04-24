import Link from "next/link";
import { SectionShell } from "@/components/layout/SectionShell";
import { TALK_ITEMS } from "@/content/home";
import styles from "./TalksSection.module.css";

export function TalksSection() {
  return (
    <SectionShell id="talks">
      <p className={styles.label}>Talks</p>
      <div className={styles.rows}>
        {TALK_ITEMS.map((talk) => (
          <Link key={talk.href} href={talk.href} className={styles.row}>
            <div>
              <p className={styles.meta}>{talk.meta}</p>
              <h3 className={styles.title}>{talk.title}</h3>
              <p className={styles.venue}>{talk.venue}</p>
            </div>
            <span className={styles.arrow} aria-hidden>
              ↗
            </span>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
