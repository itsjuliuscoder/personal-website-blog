import styles from "./StatsPanel.module.css";

const STATS = [
  { label: "Experience", value: "6+ Years in fintech" },
  { label: "Press", value: "4+ Press features" },
  { label: "Speaking", value: "3+ Google talks" },
  { label: "Founder", value: "2 Founded companies" },
] as const;

export function StatsPanel() {
  return (
    <div className={styles.grid}>
      {STATS.map((s) => (
        <div key={s.label} className={styles.cell}>
          <p className={styles.label}>{s.label}</p>
          <p className={styles.value}>{s.value}</p>
        </div>
      ))}
    </div>
  );
}
