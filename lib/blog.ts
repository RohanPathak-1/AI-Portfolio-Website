export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  visual: "indigo" | "cyan" | "navy";
  intro: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-small-businesses-can-use-ai-for-digital-marketing",
    title: "How Small Businesses Can Use AI to Improve Their Digital Marketing",
    metaDescription:
      "A practical guide to using AI for research, content planning, customer communication, and smarter marketing decisions.",
    excerpt:
      "Practical ways to use AI for better planning, clearer content, and more consistent marketing—without losing the human touch.",
    category: "AI Marketing",
    publishedAt: "2026-09-18",
    readingTime: "7 min read",
    author: "Rohan Pathak",
    visual: "indigo",
    intro: [
      "AI can make digital marketing more manageable for a small team, but it works best as a capable assistant—not a replacement for judgment, customer knowledge, or a clear strategy.",
      "The most useful starting point is to identify where marketing work is repetitive, slow, or inconsistent. Then use AI to support that work while keeping a person responsible for accuracy, tone, and decisions.",
    ],
    sections: [
      {
        heading: "Start with customer and market research",
        paragraphs: [
          "AI tools can help organize customer feedback, group common questions, and turn scattered notes into useful themes. This can reveal the language customers use and the problems they care about most.",
          "Use those themes as inputs—not facts. Check them against real sales conversations, support messages, search data, and your own knowledge of the market.",
        ],
      },
      {
        heading: "Build a more consistent content workflow",
        paragraphs: [
          "AI can help turn one strong idea into an outline, social posts, an email draft, and a short video script. That makes it easier to maintain a useful publishing rhythm without creating every asset from scratch.",
        ],
        bullets: [
          "Create a monthly topic plan around real customer questions.",
          "Draft outlines before writing full articles or landing pages.",
          "Repurpose existing insights into formats suited to each channel.",
          "Review every output for accuracy, usefulness, and brand voice.",
        ],
      },
      {
        heading: "Improve lead follow-up",
        paragraphs: [
          "Simple automation can acknowledge inquiries, route leads, remind your team to follow up, and tailor helpful resources to a prospect’s interests. The goal is not to make communication feel robotic; it is to make sure promising conversations do not get lost.",
        ],
      },
      {
        heading: "Use AI to support decisions, not make them blindly",
        paragraphs: [
          "AI can summarize campaign results and surface patterns, but it does not understand your business context by default. Combine its analysis with clean data, sensible goals, and human review. Start with one workflow, measure whether it genuinely saves time or improves quality, and expand only when it earns its place.",
        ],
      },
    ],
  },
  {
    slug: "seven-digital-marketing-strategies-for-more-leads",
    title: "7 Digital Marketing Strategies to Help Small Businesses Generate More Leads",
    metaDescription:
      "Seven practical digital marketing strategies small businesses can use to create clearer, more reliable lead-generation opportunities.",
    excerpt:
      "Seven focused strategies for turning online attention into more relevant business conversations.",
    category: "Lead Generation",
    publishedAt: "2026-09-03",
    readingTime: "8 min read",
    author: "Rohan Pathak",
    visual: "cyan",
    intro: [
      "More marketing activity does not automatically create more leads. A stronger approach connects the right audience, a clear offer, and a low-friction next step.",
      "These seven strategies can be adapted to your budget and stage of growth. The best mix depends on how your customers research, compare, and buy.",
    ],
    sections: [
      {
        heading: "1. Clarify your ideal customer and offer",
        paragraphs: [
          "Define who you help, the problem you solve, and why your approach is relevant. Specific positioning makes every channel—from search to social media—more effective.",
        ],
      },
      {
        heading: "2. Build focused service pages",
        paragraphs: [
          "Give each important service a useful page that explains the problem, your process, expected outcomes, and the next step. This helps both visitors and search engines understand your offer.",
        ],
      },
      {
        heading: "3. Capture high-intent search demand",
        paragraphs: [
          "Create content around the questions people ask when they are actively evaluating a solution. Local businesses should also keep business listings accurate and make location context easy to find.",
        ],
      },
      {
        heading: "4. Create a helpful lead resource",
        paragraphs: [
          "A checklist, short guide, calculator, or consultation can give prospects a practical reason to start a conversation. Make the value clear before asking for personal information.",
        ],
      },
      {
        heading: "5. Use paid campaigns selectively",
        paragraphs: [
          "Start with one audience, one offer, and one conversion action. Reliable tracking and a relevant landing page matter more than launching many campaigns at once.",
        ],
      },
      {
        heading: "6. Follow up consistently",
        paragraphs: [
          "A simple system for timely replies, useful follow-up emails, and clear ownership can improve the value of leads you already generate.",
        ],
      },
      {
        heading: "7. Review the full conversion path",
        paragraphs: [
          "Look beyond clicks. Review which sources create qualified conversations, where prospects hesitate, and whether your page answers the questions that matter before someone contacts you.",
        ],
      },
    ],
  },
  {
    slug: "what-is-ai-powered-marketing",
    title: "What Is AI-Powered Marketing? A Practical Guide for Business Owners",
    metaDescription:
      "Understand AI-powered marketing in plain language, including practical uses, limitations, and a responsible way to get started.",
    excerpt:
      "A plain-language explanation of where AI fits into modern marketing—and where human judgment still matters most.",
    category: "Digital Marketing",
    publishedAt: "2026-08-19",
    readingTime: "6 min read",
    author: "Rohan Pathak",
    visual: "navy",
    intro: [
      "AI-powered marketing means using artificial intelligence to assist with marketing research, creation, personalization, analysis, or routine processes. It is not a single tool or a shortcut to guaranteed growth.",
      "For business owners, its value is practical: it can reduce time spent on repetitive work, help teams explore ideas faster, and make information easier to act on.",
    ],
    sections: [
      {
        heading: "Where AI can help",
        bullets: [
          "Organizing customer feedback and research notes.",
          "Creating first drafts, outlines, and content variations.",
          "Summarizing campaign data and identifying patterns to review.",
          "Supporting email segmentation and follow-up workflows.",
          "Helping teams document and repeat effective processes.",
        ],
      },
      {
        heading: "What AI should not replace",
        paragraphs: [
          "Your strategy still needs a clear business objective. Your brand still needs a distinct point of view. And your claims, facts, and customer communications still need responsible human review.",
          "AI output can be inaccurate, generic, or unsuitable for your audience. Treat privacy, consent, and sensitive business information carefully when selecting tools and workflows.",
        ],
      },
      {
        heading: "A sensible way to begin",
        paragraphs: [
          "Choose one well-defined task that consumes time, such as turning meeting notes into content briefs or preparing a weekly campaign summary. Set a quality standard, document the review process, and compare the new workflow with the old one.",
          "Once a workflow proves useful, connect it to a broader marketing plan. The goal is not to use more AI—it is to make marketing clearer, more consistent, and more valuable to the business.",
        ],
      },
    ],
  },
];

export const blogCategories = ["All", ...new Set(blogPosts.map((post) => post.category))];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
