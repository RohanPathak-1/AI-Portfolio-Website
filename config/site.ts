export const siteConfig = {
  name: "Rohan Pathak",
  initials: "RP",
  title: "AI Marketing Expert",
  tagline: "Helping businesses grow smarter with AI-powered digital marketing.",
  description:
    "AI-powered digital marketing strategies that help small and medium-sized businesses attract customers, generate leads, and grow online.",
  biography:
    "I’m Rohan Pathak, an AI Marketing Expert passionate about helping small and medium-sized businesses grow online. My goal is simple: to help you attract more customers, generate better leads, and grow your business using proven Digital Marketing strategies and practical AI tools.",
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
      short: "Get a customized marketing strategy designed around your business goals, target customers, and growth opportunities.",
      outcome: "A clear marketing roadmap tailored to your business.",
    },
    {
      slug: "search-engine-optimization",
      title: "Search Engine Optimization",
      short: "Improve your visibility on Google and help potential customers find your business when searching online.",
      outcome: "More opportunities for potential customers to discover your business.",
    },
    {
      slug: "social-media-marketing",
      title: "Social Media Marketing",
      short: "Build your brand, connect with your audience, and attract potential customers through effective social media strategies.",
      outcome: "A stronger online presence and better connection with your ideal audience.",
    },
    {
      slug: "paid-advertising",
      title: "Paid Advertising & Lead Generation",
      short: "Reach the right people with targeted advertising campaigns designed to generate quality leads.",
      outcome: "More qualified leads from focused digital advertising.",
    },
    {
      slug: "content-marketing",
      title: "Content Marketing",
      short: "Build trust, attract customers, and strengthen your online presence with valuable content supported by AI.",
      outcome: "Useful content that builds trust and supports lead generation.",
    },
    {
      slug: "marketing-automation",
      title: "Marketing Automation",
      short: "Save time and improve efficiency by automating repetitive marketing tasks using modern AI tools.",
      outcome: "Simpler marketing workflows and more time for your business.",
    },
  ],
} as const;

export type ServiceSlug = (typeof siteConfig.services)[number]["slug"];
