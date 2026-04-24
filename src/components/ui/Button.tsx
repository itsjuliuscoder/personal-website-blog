import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonLinkProps = {
  href: string;
  variant: "primary" | "ghost";
  children: ReactNode;
  external?: boolean;
};

export function ButtonLink({
  href,
  variant,
  children,
  external,
}: ButtonLinkProps) {
  const cls = variant === "primary" ? styles.primary : styles.ghost;
  if (external) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
