import { SectionShell } from "@/components/layout/SectionShell";
import { EXPERTISE_ITEMS } from "@/content/home";
import styles from "./ExpertiseSection.module.css";

export function ExpertiseSection() {
  return (
    <SectionShell id="expertise">
      <p className={styles.label}>Expertise</p>
      <div className={styles.grid}>
        {EXPERTISE_ITEMS.map((item) => (
          <div key={item.number} className={styles.cell}>
            <p className={styles.num}>{item.number}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
