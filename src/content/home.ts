export type PressEntry = {
  flag: string;
  outlet: string;
  title: string;
  description: string;
  date: string;
  url: string;
};

export type ExpertiseEntry = {
  number: string;
  title: string;
  description: string;
};

export type TalkEntry = {
  year: string;
  meta: string;
  title: string;
  venue: string;
  href: string;
};

export type ProjectEntry = {
  name: string;
  tag: string;
  description: string;
  url: string;
  featured?: boolean;
};

export type WritingEntry = {
  tag: string;
  title: string;
  href: string;
  year: string;
  readTime: string;
  external?: boolean;
};

export type KnowledgeLink = { title: string; url: string };
export type KnowledgeQuote = { author: string };

export const PRESS_ITEMS: PressEntry[] = [
  {
    flag: "\uD83C\uDDEC\uD83C\uDDE7",
    outlet: "THE UK WATCH",
    title:
      "Julius Olajumoke Spotlighted for Contributions to Fintech, AI and Scalable Software Infrastructure",
    description:
      "Coverage of engineering leadership and contributions across fintech, AI, and scalable systems.",
    date: "Feb 3, 2026",
    url: "https://theukwatch.com/2026/02/03/julius-olajumoke-spotlighted-for-contributions-to-fintech-ai-and-scalable-software-infrastructure/",
  },
  {
    flag: "\uD83C\uDDF3\uD83C\uDDEC",
    outlet: "BUSINESSDAY NG",
    title: "Becoming a Software Engineer in an AI Era — Why It Still Matters",
    description:
      "Why software engineering remains essential in an AI-driven industry, and how to stay relevant.",
    date: "—",
    url: "https://businessday.ng/bd-weekender/article/becoming-a-software-engineer-in-an-ai-era-why-it-still-matters/",
  },
  {
    flag: "\uD83C\uDDF3\uD83C\uDDEC",
    outlet: "THE SUN NIGERIA",
    title: "Why AI Prompting Is Becoming Essential",
    description:
      "How prompt engineering is emerging as a core skill alongside traditional software delivery.",
    date: "Mar 31, 2026",
    url: "https://thesun.ng/why-ai-prompting-is-becoming-essential/",
  },
];

export const EXPERTISE_ITEMS: ExpertiseEntry[] = [
  {
    number: "01",
    title: "Fintech Engineering",
    description:
      "Regulated payments, ledgers, and reliability patterns for money-moving systems.",
  },
  {
    number: "02",
    title: "AI & Prompt Engineering",
    description:
      "Practical LLM workflows, evaluation, and safe production patterns for AI features.",
  },
  {
    number: "03",
    title: "Backend & Infrastructure",
    description:
      "APIs, data pipelines, cloud operations, and performance under real-world load.",
  },
  {
    number: "04",
    title: "Engineering Leadership",
    description:
      "Hiring, delivery cadence, and technical direction for high-stakes product teams.",
  },
  {
    number: "05",
    title: "Pan-African Tech",
    description:
      "Speaking, mentoring, and building bridges across ecosystems from Lagos outward.",
  },
];

export const TALK_ITEMS: TalkEntry[] = [
  {
    year: "2025",
    meta: "GOOGLE PRODUCT DEVELOPMENT CENTRE · NAIROBI, KENYA · 2025",
    title:
      "From Code to Cloud: Demystifying DevOps for the Next Generation of Engineers",
    venue: "Google Product Development Centre, Nairobi, Kenya",
    href: "/talks/from-code-to-cloud-demystifying-devops-for-the-next-generation-of-engineers",
  },
  {
    year: "2024",
    meta: "GOOGLE AI LAB · ACCRA, GHANA · 2024",
    title: "AI: The Death of Startups?",
    venue: "Google AI Lab, Accra, Ghana",
    href: "/talks/ai-the-death-of-startups",
  },
];

export const PROJECT_ITEMS: ProjectEntry[] = [
  {
    name: "PromptPal",
    tag: "AI · PROMPT ENGINEERING",
    description:
      "An AI prompt engineering platform for crafting, testing, and refining prompts.",
    url: "https://promptpal.app",
    featured: true,
  },
  {
    name: "EngiChat",
    tag: "AI · ENGINEERING TOOLS",
    description:
      "An AI assistant purpose-built for mechanical, electrical, and civil engineers.",
    url: "https://www.engichat.com",
    featured: true,
  },
  {
    name: "ChatGPT-Like Chat App",
    tag: "AI · CHAT",
    description: "A conversational app powered by OpenAI gpt-4o.",
    url: "https://julz-ai-chatbotapp.vercel.app/",
    featured: false,
  },
  {
    name: "Text to Speech Web App",
    tag: "PRODUCTIVITY · AUDIO",
    description: "Converts text from PDF/Word documents into speech audio.",
    url: "https://text-to-speech.juliusolajumoke.com/",
    featured: false,
  },
  {
    name: "GlobeCast App",
    tag: "WEATHER · TRAVEL",
    description:
      "Real-time weather updates and travel advice for major cities worldwide.",
    url: "https://realtime-weather-app-ten.vercel.app/",
    featured: false,
  },
];

export const WRITING_ITEMS: WritingEntry[] = [
  {
    tag: "YEAR IN REVIEW",
    title: "2024: Year in Review",
    href: "/stories/2024-year-in-review",
    year: "2024",
    readTime: "8 min read",
  },
  {
    tag: "AI",
    title: "Building AI-Powered Web Apps With Vercel AI SDK",
    href: "/stories/building-ai-powered-web-apps-with-vercel-ai-sdk",
    year: "2024",
    readTime: "12 min read",
  },
  {
    tag: "ENGINEERING",
    title: "A Beginners Guide to Writing Clean Code",
    href: "https://medium.com/analytics-vidhya/a-beginners-guide-to-writing-clean-code-aa58ac915462",
    year: "2020",
    readTime: "Medium",
    external: true,
  },
  {
    tag: "INTRO",
    title: "Hello World! I am Julius",
    href: "https://medium.com/@ojuliuscoder/hello-world-i-am-julius-902cf0eb8ae7",
    year: "2019",
    readTime: "Medium",
    external: true,
  },
  {
    tag: "GO",
    title: "Using Pointers in Go",
    href: "/stories/using-pointers-in-go",
    year: "2023",
    readTime: "10 min read",
  },
  {
    tag: "COMPUTING",
    title: "0s & 1s: The Language of the computer",
    href: "/stories/0s-and-1s-the-language-of-the-computer",
    year: "2023",
    readTime: "7 min read",
  },
];

export const KNOWLEDGE_LINKS: KnowledgeLink[] = [
  { title: "Emerging Architectures for LLM Applications (a16z)", url: "https://a16z.com/emerging-architectures-for-llm-applications/" },
  { title: "30 Seconds of Code", url: "https://www.30secondsofcode.org/" },
  { title: "JavaScript Questions", url: "https://github.com/lydiahallie/javascript-questions" },
  { title: "LeetCode Patterns", url: "https://github.com/seanprashad/leetcode-patterns" },
  { title: "Software Engineering at Google", url: "https://abseil.io/resources/swe-book" },
  { title: "How The Web Works", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works" },
  { title: "Computer Science Academic Papers", url: "https://arxiv.org/" },
  { title: "Free Programming Books", url: "https://ebookfoundation.github.io/free-programming-books/" },
  { title: "The Algorithms", url: "https://the-algorithms.com/" },
  { title: "The Intelligence Age — Sam Altman", url: "https://blog.samaltman.com/the-intelligence-age" },
  { title: "Free Public APIs", url: "https://github.com/public-apis/public-apis" },
  { title: "NodeJS Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices" },
  { title: "Generative AI Resources", url: "https://github.com/aishwaryanr/awesome-generative-ai-guide" },
  { title: "Kaggle", url: "https://www.kaggle.com/" },
  { title: "arXiv Resources", url: "https://arxiv.org/" },
  { title: "Papers with Code", url: "https://paperswithcode.com/" },
  { title: "A Guide to Node.js design patterns", url: "https://nodejs.org/en/learn" },
  { title: "Debugging by Pretty Printing", url: "https://wiki.c2.com/?DebuggingByPrinting" },
  { title: "Architecture of Open Source Applications", url: "https://aosabook.org/en/" },
  { title: "LLAMA-OMNI paper", url: "https://arxiv.org/abs/2409.06666" },
];

export const KNOWLEDGE_QUOTES: KnowledgeQuote[] = [
  { author: "Steve McConnell" },
  { author: "John Johnson" },
  { author: "Fei-Fei Li" },
  { author: "Yann LeCun" },
  { author: "Linus Torvalds" },
];
