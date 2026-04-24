import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";
import { HeroSection } from "@/components/hero/HeroSection";
import { PressSection } from "@/components/sections/PressSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { TalksSection } from "@/components/sections/TalksSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WritingSection } from "@/components/sections/WritingSection";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Julius Olajumoke",
    description: "Senior Software Engineer. Fintech · AI · Infrastructure.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
  },
};

export default function Home() {
  return (
    <main id="main">
      <HeroSection />
      <PressSection />
      <ExpertiseSection />
      <TalksSection />
      <ProjectsSection />
      <WritingSection />
    </main>
  );
}
