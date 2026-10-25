export type BlogSection = { heading: string; paragraphs?: string[]; bullets?: string[] };
export type BlogContent = { title: string; metaDescription: string; excerpt: string; readingTime: string; author: string; intro: string[]; sections: BlogSection[] };
export type BlogPost = BlogContent & { slug: string; category: string; publishedAt: string; image: { src: string; alt: { en: string; ne: string } }; ne: BlogContent };
export type LocalizedBlogPost = Omit<BlogPost, "ne">;

export const blogPosts: BlogPost[] = [
  {
    slug: "how-small-businesses-can-use-ai-for-digital-marketing",
    title: "How Small Businesses Can Use AI to Improve Their Digital Marketing",
    metaDescription: "A practical guide to using AI for research, content planning, customer communication, and smarter marketing decisions.",
    excerpt: "Practical ways to use AI for better planning, clearer content, and more consistent marketing—without losing the human touch.",
    category: "AI Marketing", publishedAt: "2026-09-18", readingTime: "7 min read", author: "Rohan Pathak",
    image: { src: "/images/blog/ai-digital-marketing-small-business.png", alt: { en: "Small business owner planning digital marketing at a laptop in a bright office", ne: "उज्यालो कार्यालयमा ल्यापटपबाट डिजिटल मार्केटिङ योजना बनाउँदै गरेकी साना व्यवसायकी सञ्चालक" } },
    intro: [
      "AI can make digital marketing more manageable for a small team, but it works best as a capable assistant—not a replacement for judgment, customer knowledge, or a clear strategy.",
      "The most useful starting point is to identify where marketing work is repetitive, slow, or inconsistent. Then use AI to support that work while keeping a person responsible for accuracy, tone, and decisions.",
    ],
    sections: [
      { heading: "Start with customer and market research", paragraphs: ["AI tools can help organize customer feedback, group common questions, and turn scattered notes into useful themes. This can reveal the language customers use and the problems they care about most.", "Use those themes as inputs—not facts. Check them against real sales conversations, support messages, search data, and your own knowledge of the market."] },
      { heading: "Build a more consistent content workflow", paragraphs: ["AI can help turn one strong idea into an outline, social posts, an email draft, and a short video script. That makes it easier to maintain a useful publishing rhythm without creating every asset from scratch."], bullets: ["Create a monthly topic plan around real customer questions.", "Draft outlines before writing full articles or landing pages.", "Repurpose existing insights into formats suited to each channel.", "Review every output for accuracy, usefulness, and brand voice."] },
      { heading: "Improve lead follow-up", paragraphs: ["Simple automation can acknowledge inquiries, route leads, remind your team to follow up, and tailor helpful resources to a prospect’s interests. The goal is not to make communication feel robotic; it is to make sure promising conversations do not get lost."] },
      { heading: "Use AI to support decisions, not make them blindly", paragraphs: ["AI can summarize campaign results and surface patterns, but it does not understand your business context by default. Combine its analysis with clean data, sensible goals, and human review. Start with one workflow, measure whether it genuinely saves time or improves quality, and expand only when it earns its place."] },
    ],
    ne: {
      title: "साना व्यवसायले डिजिटल मार्केटिङ सुधार गर्न एआई कसरी प्रयोग गर्न सक्छन्?",
      metaDescription: "अनुसन्धान, कन्टेन्ट योजना, ग्राहक संवाद र अझ प्रभावकारी मार्केटिङ निर्णयका लागि एआई प्रयोग गर्ने व्यावहारिक मार्गदर्शन।",
      excerpt: "मानवीय समझ कायम राख्दै राम्रो योजना, स्पष्ट कन्टेन्ट र नियमित मार्केटिङका लागि एआई प्रयोग गर्ने व्यावहारिक तरिका।",
      readingTime: "७ मिनेट पढाइ", author: "रोहन पाठक",
      intro: ["एआईले सानो टोलीका लागि डिजिटल मार्केटिङ व्यवस्थापन गर्न सजिलो बनाउन सक्छ। तर निर्णय क्षमता, ग्राहकबारेको ज्ञान वा स्पष्ट रणनीतिको विकल्प होइन—यसलाई सक्षम सहायकका रूपमा प्रयोग गर्दा सबैभन्दा उपयोगी हुन्छ।", "सुरुमा दोहोरिरहने, धेरै समय लाग्ने वा असंगत मार्केटिङ काम पहिचान गर्नुहोस्। त्यसपछि शुद्धता, शैली र अन्तिम निर्णयको जिम्मा व्यक्तिसँगै राखेर ती काममा एआईको सहयोग लिनुहोस्।"],
      sections: [
        { heading: "ग्राहक र बजार अनुसन्धानबाट सुरु गर्नुहोस्", paragraphs: ["एआई टुलले ग्राहकको प्रतिक्रिया व्यवस्थित गर्न, बारम्बार सोधिने प्रश्न समूहमा राख्न र छरिएका नोटलाई उपयोगी विषयमा बदल्न सहयोग गर्छ। यसबाट ग्राहकले प्रयोग गर्ने भाषा र उनीहरूलाई सबैभन्दा महत्त्वपूर्ण लाग्ने समस्या बुझ्न सकिन्छ।", "यी विषयलाई तथ्य होइन, प्रारम्भिक संकेतका रूपमा लिनुहोस्। बिक्री संवाद, सहयोगसम्बन्धी सन्देश, खोज तथ्याङ्क र बजारबारे आफ्नै अनुभवसँग मिलाएर जाँच्नुहोस्।"] },
        { heading: "कन्टेन्ट बनाउने प्रक्रियालाई नियमित बनाउनुहोस्", paragraphs: ["एआईले एउटा उपयोगी विचारलाई लेखको रूपरेखा, सामाजिक सञ्जाल पोस्ट, इमेलको प्रारम्भिक मस्यौदा र छोटो भिडियो स्क्रिप्टमा बदल्न सहयोग गर्न सक्छ। यसले हरेक सामग्री शून्यबाट सुरु नगरी नियमित रूपमा उपयोगी कन्टेन्ट प्रकाशित गर्न सजिलो बनाउँछ।"], bullets: ["ग्राहकका वास्तविक प्रश्नमा आधारित मासिक विषय योजना तयार गर्नुहोस्।", "पूरा लेख वा ल्यान्डिङ पेज लेख्नुअघि रूपरेखा बनाउनुहोस्।", "पहिल्यै भएका उपयोगी विचारलाई प्रत्येक च्यानल सुहाउँदो स्वरूपमा पुनः प्रयोग गर्नुहोस्।", "हरेक नतिजालाई शुद्धता, उपयोगिता र ब्रान्डको शैलीअनुसार समीक्षा गर्नुहोस्।"] },
        { heading: "सम्भावित ग्राहकसँगको फलो-अप सुधार्नुहोस्", paragraphs: ["सरल अटोमेसनले सोधपुछ प्राप्त भएको जानकारी दिन, सम्भावित ग्राहकलाई सही व्यक्तिसम्म पुर्‍याउन, टोलीलाई फलो-अप सम्झाउन र उनीहरूको रुचिअनुसार उपयोगी सामग्री पठाउन सक्छ। उद्देश्य संवादलाई रोबोटजस्तो बनाउनु होइन; राम्रो व्यावसायिक अवसर हराउन नदिनु हो।"] },
        { heading: "निर्णयमा एआईको सहयोग लिनुहोस्, तर अन्धाधुन्ध निर्भर नहुनुहोस्", paragraphs: ["एआईले अभियानका नतिजा संक्षेप गर्न र समीक्षा गर्नुपर्ने ढाँचा देखाउन सक्छ, तर तपाईंको व्यवसायको सन्दर्भ आफैं बुझ्दैन। यसको विश्लेषणलाई सही तथ्याङ्क, व्यावहारिक लक्ष्य र मानवीय समीक्षासँग जोड्नुहोस्। एउटा प्रक्रियाबाट सुरु गर्नुहोस्, त्यसले साँच्चै समय बचायो वा गुणस्तर सुधार्‍यो कि मापन गर्नुहोस्, अनि उपयोगी प्रमाणित भएपछि मात्र विस्तार गर्नुहोस्।"] },
      ],
    },
  },
  {
    slug: "seven-digital-marketing-strategies-for-more-leads",
    title: "7 Digital Marketing Strategies to Help Small Businesses Generate More Leads",
    metaDescription: "Seven practical digital marketing strategies small businesses can use to create clearer, more reliable lead-generation opportunities.",
    excerpt: "Seven focused strategies for turning online attention into more relevant business conversations.",
    category: "Lead Generation", publishedAt: "2026-09-03", readingTime: "8 min read", author: "Rohan Pathak",
    image: { src: "/images/blog/lead-generation-strategy-team.png", alt: { en: "Small business team discussing a customer acquisition strategy around a laptop", ne: "ल्यापटप वरिपरि बसेर ग्राहक प्राप्त गर्ने रणनीति छलफल गर्दै गरेको साना व्यवसायको टोली" } },
    intro: ["More marketing activity does not automatically create more leads. A stronger approach connects the right audience, a clear offer, and a low-friction next step.", "These seven strategies can be adapted to your budget and stage of growth. The best mix depends on how your customers research, compare, and buy."],
    sections: [
      { heading: "1. Clarify your ideal customer and offer", paragraphs: ["Define who you help, the problem you solve, and why your approach is relevant. Specific positioning makes every channel—from search to social media—more effective."] },
      { heading: "2. Build focused service pages", paragraphs: ["Give each important service a useful page that explains the problem, your process, expected outcomes, and the next step. This helps both visitors and search engines understand your offer."] },
      { heading: "3. Capture high-intent search demand", paragraphs: ["Create content around the questions people ask when they are actively evaluating a solution. Local businesses should also keep business listings accurate and make location context easy to find."] },
      { heading: "4. Create a helpful lead resource", paragraphs: ["A checklist, short guide, calculator, or consultation can give prospects a practical reason to start a conversation. Make the value clear before asking for personal information."] },
      { heading: "5. Use paid campaigns selectively", paragraphs: ["Start with one audience, one offer, and one conversion action. Reliable tracking and a relevant landing page matter more than launching many campaigns at once."] },
      { heading: "6. Follow up consistently", paragraphs: ["A simple system for timely replies, useful follow-up emails, and clear ownership can improve the value of leads you already generate."] },
      { heading: "7. Review the full conversion path", paragraphs: ["Look beyond clicks. Review which sources create qualified conversations, where prospects hesitate, and whether your page answers the questions that matter before someone contacts you."] },
    ],
    ne: {
      title: "साना व्यवसायलाई थप सम्भावित ग्राहक प्राप्त गर्न मद्दत गर्ने ७ डिजिटल मार्केटिङ रणनीति",
      metaDescription: "साना व्यवसायले स्पष्ट र भरपर्दो सम्भावित ग्राहक प्राप्त गर्ने अवसर बनाउन प्रयोग गर्न सक्ने सात व्यावहारिक डिजिटल मार्केटिङ रणनीति।",
      excerpt: "अनलाइन ध्यानलाई व्यवसायसँग सम्बन्धित उपयोगी संवादमा बदल्ने सात केन्द्रित रणनीति।", readingTime: "८ मिनेट पढाइ", author: "रोहन पाठक",
      intro: ["मार्केटिङका धेरै गतिविधि गर्दैमा स्वतः धेरै सम्भावित ग्राहक आउँदैनन्। प्रभावकारी तरिकाले सही दर्शक, स्पष्ट प्रस्ताव र सजिलै लिन सकिने अर्को कदमलाई एकै ठाउँमा जोड्छ।", "यी सात रणनीतिलाई तपाईंको बजेट र व्यवसायको विकास चरणअनुसार अपनाउन सकिन्छ। उपयुक्त संयोजन तपाईंका ग्राहकले कसरी खोज्छन्, तुलना गर्छन् र खरिद गर्छन् भन्ने कुरामा निर्भर हुन्छ।"],
      sections: [
        { heading: "१. आदर्श ग्राहक र प्रस्ताव स्पष्ट बनाउनुहोस्", paragraphs: ["तपाईंले कसलाई सहयोग गर्नुहुन्छ, कुन समस्या समाधान गर्नुहुन्छ र तपाईंको तरिका किन सान्दर्भिक छ भन्ने स्पष्ट गर्नुहोस्। स्पष्ट पोजिसनिङले सर्चदेखि सामाजिक सञ्जालसम्म हरेक च्यानललाई प्रभावकारी बनाउँछ।"] },
        { heading: "२. केन्द्रित सेवा पेज बनाउनुहोस्", paragraphs: ["हरेक महत्त्वपूर्ण सेवाका लागि समस्या, तपाईंको प्रक्रिया, अपेक्षित नतिजा र अर्को कदम स्पष्ट गर्ने उपयोगी पेज बनाउनुहोस्। यसले वेबसाइट आगन्तुक र सर्च इन्जिन दुवैलाई तपाईंको प्रस्ताव बुझ्न मद्दत गर्छ।"] },
        { heading: "३. खरिदको स्पष्ट चाहना भएका खोजकर्तासम्म पुग्नुहोस्", paragraphs: ["समाधान सक्रिय रूपमा मूल्याङ्कन गरिरहेका मानिसले सोध्ने प्रश्नलाई आधार बनाएर कन्टेन्ट तयार गर्नुहोस्। स्थानीय व्यवसायले आफ्नो बिजनेस लिस्टिङ सही राख्नुपर्छ र स्थानसम्बन्धी जानकारी सजिलै भेटिने बनाउनुपर्छ।"] },
        { heading: "४. उपयोगी लिड रिसोर्स तयार गर्नुहोस्", paragraphs: ["चेकलिस्ट, छोटो गाइड, क्यालकुलेटर वा परामर्शले सम्भावित ग्राहकलाई संवाद सुरु गर्ने व्यावहारिक कारण दिन सक्छ। व्यक्तिगत विवरण माग्नुअघि उनीहरूले पाउने मूल्य स्पष्ट गर्नुहोस्।"] },
        { heading: "५. सशुल्क अभियान छनोट गरेर चलाउनुहोस्", paragraphs: ["एउटा दर्शक समूह, एउटा प्रस्ताव र एउटा रूपान्तरण लक्ष्यबाट सुरु गर्नुहोस्। धेरै अभियान एकैपटक सुरु गर्नुभन्दा भरपर्दो ट्र्याकिङ र सान्दर्भिक ल्यान्डिङ पेज बढी महत्त्वपूर्ण हुन्छ।"] },
        { heading: "६. नियमित फलो-अप गर्नुहोस्", paragraphs: ["समयमै जवाफ दिने, उपयोगी फलो-अप इमेल पठाउने र जिम्मेवारी स्पष्ट राख्ने सरल प्रणालीले तपाईंले पहिल्यै प्राप्त गरेका सम्भावित ग्राहकको मूल्य बढाउन सक्छ।"] },
        { heading: "७. सम्पूर्ण रूपान्तरण यात्राको समीक्षा गर्नुहोस्", paragraphs: ["क्लिक संख्या मात्र नहेर्नुहोस्। कुन स्रोतबाट योग्य व्यावसायिक संवाद आउँछ, सम्भावित ग्राहक कहाँ अलमलिन्छन् र सम्पर्क गर्नुअघि उनीहरूका महत्त्वपूर्ण प्रश्नको उत्तर तपाईंको पेजले दिन्छ कि दिँदैन भन्ने समीक्षा गर्नुहोस्।"] },
      ],
    },
  },
  {
    slug: "what-is-ai-powered-marketing",
    title: "What Is AI-Powered Marketing? A Practical Guide for Business Owners",
    metaDescription: "Understand AI-powered marketing in plain language, including practical uses, limitations, and a responsible way to get started.",
    excerpt: "A plain-language explanation of where AI fits into modern marketing—and where human judgment still matters most.",
    category: "Digital Marketing", publishedAt: "2026-08-19", readingTime: "6 min read", author: "Rohan Pathak",
    image: { src: "/images/blog/ai-powered-marketing-guide.png", alt: { en: "Digital marketing consultant reviewing strategy and analytics in a modern workspace", ne: "आधुनिक कार्यस्थलमा रणनीति र एनालिटिक्स समीक्षा गर्दै गरेका डिजिटल मार्केटिङ परामर्शदाता" } },
    intro: ["AI-powered marketing means using artificial intelligence to assist with marketing research, creation, personalization, analysis, or routine processes. It is not a single tool or a shortcut to guaranteed growth.", "For business owners, its value is practical: it can reduce time spent on repetitive work, help teams explore ideas faster, and make information easier to act on."],
    sections: [
      { heading: "Where AI can help", bullets: ["Organizing customer feedback and research notes.", "Creating first drafts, outlines, and content variations.", "Summarizing campaign data and identifying patterns to review.", "Supporting email segmentation and follow-up workflows.", "Helping teams document and repeat effective processes."] },
      { heading: "What AI should not replace", paragraphs: ["Your strategy still needs a clear business objective. Your brand still needs a distinct point of view. And your claims, facts, and customer communications still need responsible human review.", "AI output can be inaccurate, generic, or unsuitable for your audience. Treat privacy, consent, and sensitive business information carefully when selecting tools and workflows."] },
      { heading: "A sensible way to begin", paragraphs: ["Choose one well-defined task that consumes time, such as turning meeting notes into content briefs or preparing a weekly campaign summary. Set a quality standard, document the review process, and compare the new workflow with the old one.", "Once a workflow proves useful, connect it to a broader marketing plan. The goal is not to use more AI—it is to make marketing clearer, more consistent, and more valuable to the business."] },
    ],
    ne: {
      title: "एआई-सञ्चालित मार्केटिङ भनेको के हो? व्यवसायीका लागि व्यावहारिक मार्गदर्शन",
      metaDescription: "एआई-सञ्चालित मार्केटिङको व्यावहारिक प्रयोग, सीमा र जिम्मेवार रूपमा सुरु गर्ने तरिकालाई सरल भाषामा बुझ्नुहोस्।",
      excerpt: "आधुनिक मार्केटिङमा एआईको भूमिका र मानवीय निर्णय अझै सबैभन्दा महत्त्वपूर्ण हुने क्षेत्रबारे सरल व्याख्या।", readingTime: "६ मिनेट पढाइ", author: "रोहन पाठक",
      intro: ["एआई-सञ्चालित मार्केटिङ भनेको अनुसन्धान, सामग्री निर्माण, व्यक्तिगत अनुभव, विश्लेषण वा नियमित मार्केटिङ प्रक्रियामा आर्टिफिसियल इन्टेलिजेन्सको सहयोग लिनु हो। यो कुनै एउटै टुल होइन र सुनिश्चित वृद्धिको छोटो बाटो पनि होइन।", "व्यवसायीका लागि यसको मूल्य व्यावहारिक छ: यसले दोहोरिने काममा लाग्ने समय घटाउन, टोलीलाई छिटो नयाँ विचार खोज्न र उपलब्ध जानकारीबाट निर्णय लिन सजिलो बनाउन सक्छ।"],
      sections: [
        { heading: "एआईले कहाँ सहयोग गर्न सक्छ?", bullets: ["ग्राहकको प्रतिक्रिया र अनुसन्धानका नोट व्यवस्थित गर्न।", "प्रारम्भिक मस्यौदा, रूपरेखा र कन्टेन्टका फरक संस्करण बनाउन।", "अभियानको तथ्याङ्क संक्षेप गर्न र समीक्षा गर्नुपर्ने ढाँचा पहिचान गर्न।", "इमेल विभाजन र फलो-अप प्रक्रियामा सहयोग गर्न।", "प्रभावकारी प्रक्रियालाई अभिलेख गर्न र नियमित रूपमा दोहोर्‍याउन टोलीलाई मद्दत गर्न।"] },
        { heading: "एआईले केको स्थान लिनु हुँदैन?", paragraphs: ["तपाईंको रणनीतिलाई अझै पनि स्पष्ट व्यावसायिक उद्देश्य चाहिन्छ। तपाईंको ब्रान्डलाई आफ्नै विशिष्ट दृष्टिकोण चाहिन्छ। साथै तपाईंका दाबी, तथ्य र ग्राहकसँगका संवादलाई जिम्मेवार मानवीय समीक्षा आवश्यक पर्छ।", "एआईले दिने नतिजा गलत, सामान्य वा तपाईंका दर्शकका लागि अनुपयुक्त हुन सक्छ। टुल र प्रक्रिया छनोट गर्दा गोपनीयता, सहमति र संवेदनशील व्यावसायिक जानकारीलाई सावधानीपूर्वक व्यवहार गर्नुहोस्।"] },
        { heading: "व्यावहारिक रूपमा कसरी सुरु गर्ने?", paragraphs: ["बैठकका नोटलाई कन्टेन्ट ब्रिफमा बदल्ने वा साप्ताहिक अभियान सारांश तयार गर्ने जस्ता धेरै समय लाग्ने एउटा स्पष्ट काम छान्नुहोस्। गुणस्तरको मापदण्ड तय गर्नुहोस्, समीक्षा प्रक्रिया अभिलेख गर्नुहोस् र नयाँ प्रक्रियालाई पुरानो प्रक्रियासँग तुलना गर्नुहोस्।", "प्रक्रिया उपयोगी प्रमाणित भएपछि त्यसलाई बृहत् मार्केटिङ योजनासँग जोड्नुहोस्। उद्देश्य धेरै एआई प्रयोग गर्नु होइन—मार्केटिङलाई अझ स्पष्ट, नियमित र व्यवसायका लागि मूल्यवान बनाउनु हो।"] },
      ],
    },
  },
];

export const blogCategories = ["All", ...new Set(blogPosts.map((post) => post.category))];
export function getBlogPost(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function localizeBlogPost(post: BlogPost, locale: "en" | "ne"): LocalizedBlogPost { const { ne, ...shared } = post; return locale === "ne" ? { ...shared, ...ne } : shared; }
export function formatDate(date: string, locale: "en" | "ne" = "en") { return new Intl.DateTimeFormat(locale === "ne" ? "ne-NP" : "en", { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${date}T00:00:00`)); }
