import { ButtonLink } from "@/components/ui/Button";
import { StatsPanel } from "@/components/hero/StatsPanel";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.section} aria-label="Introduction">
      <div className={styles.grid}>
        <div>
          <p className="heroEyebrow">
            Senior Software Engineer & Technology Entrepreneur
          </p>
          <h1 className={styles.headline}>
            Building at the intersection of fintech, AI &amp;{" "}
            <em>scalable infrastructure.</em>
          </h1>
          <p className={styles.body}>
            Senior Software Engineer and Technology Entrepreneur based in Lagos,
            Nigeria. I work with teams building regulated fintech products,
            AI-powered systems, and reliable infrastructure at scale — and I
            speak at conferences about what it takes to ship safely in the real
            world.
          </p>
          <div className={styles.ctaRow}>
            <ButtonLink
              href="https://www.linkedin.com/in/julius-olajumoke"
              variant="primary"
              external
            >
              View CV
            </ButtonLink>
            <ButtonLink href="mailto:devcalledjulius@gmail.com" variant="ghost">
              Contact me
            </ButtonLink>
          </div>
          <div className={styles.pillWrap}>
            <span className="statusPill">
              <span className="statusDot" aria-hidden />
              Open to speaking
            </span>
          </div>
        </div>
        <StatsPanel />
      </div>
    </section>
  );
}
