"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      {isDark ? (
        <Sun className={styles.icon} strokeWidth={1.5} aria-hidden />
      ) : (
        <Moon className={styles.icon} strokeWidth={1.5} aria-hidden />
      )}
    </button>
  );
}
