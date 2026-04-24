import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "IBM Plex Sans", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
        display: ["var(--font-display)", "Playfair Display", "serif"],
      },
      fontSize: {
        "2xs": "10px",
        xs: "12px",
        sm: "13px",
      },
      borderWidth: {
        DEFAULT: "0.5px",
        hairline: "0.5px",
      },
      colors: {
        background: "var(--bg)",
        foreground: "var(--text-primary)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-muted)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        accent: "var(--accent)",
        "accent-btn-text": "var(--accent-btn-text)",
        "accent-green": "var(--accent-green)",
        "accent-green-bg": "var(--accent-green-bg)",
        "accent-badge-bg": "var(--accent-green-bg)",
        "accent-badge-text": "var(--accent-green)",
        "accent-badge-dot": "var(--accent-green)",
      },
    },
  },
  plugins: [],
};
export default config;
