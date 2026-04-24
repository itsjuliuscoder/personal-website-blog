import styles from "./SectionShell.module.css";

type SectionShellProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <section id={id} className={`${styles.shell}${className ? ` ${className}` : ""}`}>
      {children}
    </section>
  );
}
