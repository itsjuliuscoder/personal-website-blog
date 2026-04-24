import type { PressEntry } from "@/content/home";
import styles from "./PressCard.module.css";

export function PressCard({ item }: { item: PressEntry }) {
  return (
    <article className={styles.cell}>
      <p className={styles.outlet}>
        {item.flag} {item.outlet}
      </p>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.desc}>{item.description}</p>
      <div className={styles.footer}>
        <time
          className={styles.date}
          {...(item.date !== "—" ? { dateTime: item.date } : {})}
        >
          {item.date}
        </time>
        <a
          href={item.url}
          className={styles.read}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read →
        </a>
      </div>
    </article>
  );
}
