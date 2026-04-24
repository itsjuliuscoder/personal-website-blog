import { SectionShell } from "@/components/layout/SectionShell";
import { PressCard } from "@/components/cards/PressCard";
import { PRESS_ITEMS } from "@/content/home";
import styles from "./PressSection.module.css";

export function PressSection() {
  return (
    <SectionShell id="press">
      <p className={styles.label}>As seen in</p>
      <div className={styles.grid}>
        {PRESS_ITEMS.map((item) => (
          <PressCard key={item.url} item={item} />
        ))}
      </div>
    </SectionShell>
  );
}
