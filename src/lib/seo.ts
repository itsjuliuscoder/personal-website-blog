const rawSiteUrl =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : "https://juliusolajumoke.com";

export const siteConfig = {
  name: "Julius Olajumoke",
  title: "Julius Olajumoke — Senior Software Engineer",
  description:
    "Senior Software Engineer and Technology Entrepreneur based in Lagos, Nigeria. Building at the intersection of fintech, AI and scalable infrastructure.",
  url: rawSiteUrl,
  ogImage: `${rawSiteUrl}/og-image.jpg`,
  twitterHandle: "@juliusolajumoke",
  keywords: [
    "Julius Olajumoke",
    "software engineer Nigeria",
    "fintech engineer Lagos",
    "AI engineer",
    "technical founder",
    "conference speaker",
    "creator of PromptPal",
  ],
};
