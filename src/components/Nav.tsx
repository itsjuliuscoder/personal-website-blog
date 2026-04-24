"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "./Nav.module.css";

const links = [
  { href: "/stories", label: "Writing" },
  { href: "/talks", label: "Talks" },
  { href: "/projects", label: "Projects" },
  { href: "/knowledge-stack", label: "Knowledge" },
  { href: "/#press", label: "Press" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.inner} aria-label="Primary">
        <Link href="/" className={styles.brand}>
          Julius Olajumoke
        </Link>

        <div className={styles.center} role="navigation" aria-label="Section links">
          {links.map(({ href, label }, i) => (
            <Fragment key={href}>
              {i > 0 ? <span className={styles.sep}>·</span> : null}
              <Link href={href} className={styles.centerLink}>
                {label}
              </Link>
            </Fragment>
          ))}
        </div>

        <div className={styles.right}>
          <ThemeToggle />
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className={styles.mobilePanel}>
          <ul className={styles.mobileList}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={styles.mobileLink}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
