export const siteConfig = {
  name: "Rohan Pathak",
  initials: "RP",
  title: "AI Marketing Expert",
  tagline: "Helping businesses grow smarter with AI-powered digital marketing.",
  description:
    "Practical AI-powered digital marketing strategy for small and medium-sized businesses that want stronger visibility, better leads, and sustainable growth.",
  biography:
    "I help small and medium-sized businesses turn digital marketing into a clearer, more practical growth system. My approach combines thoughtful strategy, modern AI tools, and straightforward communication—always shaped around the realities of your business.",
  storyPlaceholder:
    "Add your real professional story, background, and the experiences that shaped your approach here before launch.",
  email: "YOUR_EMAIL_ADDRESS",
  phone: "YOUR_PHONE_NUMBER",
  location: "YOUR_LOCATION",
  websiteUrl: "https://rohan-ai-marketing.richcove8.chatgpt.site",
  bookingUrl: "/contact#book",
  profileImage: "",
  socials: {
    linkedin: "YOUR_LINKEDIN_URL",
    facebook: "YOUR_FACEBOOK_URL",
    instagram: "YOUR_INSTAGRAM_URL",
  },
  services: [
    {
      slug: "ai-marketing-strategy",
      title: "AI-Powered Marketing Strategy",
      short: "A focused marketing roadmap built around your audience, goals, and resources.",
      outcome: "A clearer strategy for reaching your business growth goals.",
    },
    {
      slug: "search-engine-optimization",
      title: "Search Engine Optimization",
      short: "Improve how the right customers discover your business through search.",
      outcome: "Improved opportunities for relevant organic traffic.",
    },
    {
      slug: "social-media-marketing",
      title: "Social Media Marketing",
      short: "Build a consistent, useful presence that earns attention and engagement.",
      outcome: "Stronger brand awareness and improved audience engagement.",
    },
    {
      slug: "paid-advertising",
      title: "Paid Advertising & Lead Generation",
      short: "Plan efficient campaigns and conversion paths for qualified prospects.",
      outcome: "Better opportunities to reach qualified prospects and improve advertising efficiency.",
    },
    {
      slug: "content-marketing",
      title: "Content Marketing & AI Content Strategy",
      short: "Create a sustainable content system that supports trust and demand.",
      outcome: "More consistent, relevant content that supports trust and demand generation.",
    },
    {
      slug: "marketing-automation",
      title: "Marketing Automation & AI Integration",
      short: "Reduce repetitive work and create more reliable lead follow-up processes.",
      outcome: "More efficient marketing operations and better lead management.",
    },
  ],
} as const;

export type ServiceSlug = (typeof siteConfig.services)[number]["slug"];
