import { Fragment } from "react";
import styles from "./Footer.module.css";

const links = [
  { label: "GitHub", href: "https://github.com/itsjuliuscoder" },
  { label: "X / Twitter", href: "https://twitter.com/devcalledjulius" },
  { label: "LinkedIn", href: "https://linkedin.com/in/julius-olajumoke" },
  { label: "Instagram", href: "https://www.instagram.com/juliuscoder/" },
  { label: "juliusolajumoke.com", href: "https://juliusolajumoke.com" },
] as const;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.left}>© 2026 Julius Olajumoke · Lagos, Nigeria</p>
        <div className={styles.right}>
          {links.map((l, i) => (
            <Fragment key={l.href}>
              {i > 0 ? <span className={styles.sep}>·</span> : null}
              <a
                href={l.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
