import Link from "next/link";
import styles from "./InnerPageHeader.module.css";

type InnerPageHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  showBack?: boolean;
};

export function InnerPageHeader({
  label,
  title,
  description,
  showBack = true,
}: InnerPageHeaderProps) {
  return (
    <header className={styles.shell}>
      {showBack ? (
        <Link href="/" className={styles.back}>
          ← Back to home
        </Link>
      ) : null}
      {label ? <p className={styles.label}>{label}</p> : null}
      <h1 className={styles.title}>{title}</h1>
      {description ? <p className={styles.desc}>{description}</p> : null}
    </header>
  );
}
