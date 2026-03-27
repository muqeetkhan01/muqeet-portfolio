export type PortfolioApp = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  summary: string;
  href: string;
  accent: string;
  initials: string;
  tags: string[];
  icon?: string;
  cover?: string;
  priority?: boolean;
};

export const portfolioApps: PortfolioApp[] = [
  {
    slug: "linkease",
    name: "LinkEase",
    category: "Travel SaaS / Family Utility",
    headline: "A travel-focused product built to keep families connected, organized, and easier to manage on the move.",
    summary:
      "Positioned as a polished utility product for modern travel coordination, with a cleaner consumer experience and premium product presentation.",
    href: "https://apps.apple.com/pk/app/linkease-for-travel-families/id6743674626",
    accent: "#4de2c5",
    initials: "LE",
    tags: ["Priority app", "SaaS feel", "Travel"],
    priority: true
  },
  {
    slug: "meetworth",
    name: "MeetWorth",
    category: "Business Networking / Founder Platform",
    headline: "A verified entrepreneur network built for business owners who want premium connections, sharper discovery, and stronger in-app credibility.",
    summary:
      "Positioned more like a serious founder product than a generic social app, with swiping, networking, group chats, and business-first profile flows.",
    href: "https://apps.apple.com/us/app/meetworth-business-networking/id1662378935",
    accent: "#f2b766",
    initials: "MW",
    tags: ["Priority app", "Founder network", "Business"],
    icon: "/projects/meetworth/icon.jpg",
    cover: "/projects/meetworth/cover.png",
    priority: true
  },
  {
    slug: "cargorent",
    name: "CargoRent",
    category: "Logistics / Fleet Operations",
    headline: "A serious business app for transport workflows, availability, and rental operations that needs to look trustworthy fast.",
    summary:
      "The product sits in a business-heavy category where clarity, speed, and operational confidence matter more than flashy noise.",
    href: "https://apps.apple.com/us/app/cargorent/id6448697695",
    accent: "#6fb1ff",
    initials: "CR",
    tags: ["Priority app", "Operations", "Business"],
    icon: "/projects/cargorent/icon.jpg",
    priority: true
  },
  {
    slug: "stm",
    name: "STM",
    category: "AI / Road Inspection",
    headline: "An AI-rich field app designed around scanning roads and helping teams understand what products or repairs are required.",
    summary:
      "This is the kind of industrial workflow product that wins trust when the interface feels precise, modern, and built for real decision-making.",
    href: "https://apps.apple.com/pk/app/stm/id6473781207",
    accent: "#7af06d",
    initials: "STM",
    tags: ["Priority app", "AI-rich", "Field ops"],
    icon: "/projects/stm/icon.jpg",
    priority: true
  },
  {
    slug: "gamechanger",
    name: "GameChanger",
    category: "Sports / AI Video",
    headline: "A fan-facing sports platform where streaming, team workflows, and AI-assisted capture all need to feel effortless.",
    summary:
      "Strong mobile product thinking matters here because video, team management, and retention all depend on a smooth in-app experience.",
    href: "https://apps.apple.com/us/app/gamechanger/id1308415878",
    accent: "#ff7e6b",
    initials: "GC",
    tags: ["Video", "AI", "Consumer scale"]
  },
  {
    slug: "ferebe",
    name: "Ferebe",
    category: "E-commerce",
    headline: "A polished commerce app for a long-running beauty business that needed a more premium mobile buying experience.",
    summary:
      "Ordering, payments, account flows, and clearer product presentation packaged into a customer-facing app built to convert with confidence.",
    href: "https://apps.apple.com/us/app/ferebe/id1546841196",
    accent: "#ff9b62",
    initials: "FE",
    tags: ["Commerce", "Premium UI", "Sales"],
    icon: "/projects/ferebe/icon.jpg",
    cover: "/projects/ferebe/cover.png"
  },
  {
    slug: "quickclick",
    name: "QuickClick Buy & Sell",
    category: "Marketplace / Classifieds",
    headline: "A mobile marketplace focused on faster listings, clearer browsing, and less friction between buyers and sellers.",
    summary:
      "The product benefits from a more modern look because trust and conversion in marketplace apps start with how cleanly the product presents itself.",
    href: "https://apps.apple.com/pk/app/quickclick-buy-sell/id6467562036",
    accent: "#f25f5c",
    initials: "QC",
    tags: ["Marketplace", "Listings", "Consumer"],
    icon: "/projects/quickclick/icon.jpg",
    cover: "/projects/quickclick/cover.jpg"
  },
  {
    slug: "pawwalk",
    name: "PawWalk",
    category: "Pet Services Marketplace",
    headline: "A bookings-led marketplace for pet services with a softer brand and a cleaner service discovery experience.",
    summary:
      "Designed around bookings, provider discovery, and local browsing so users can move from curiosity to action quickly.",
    href: "https://apps.apple.com/us/app/pawwalk/id1669535775",
    accent: "#f4a261",
    initials: "PW",
    tags: ["Marketplace", "Bookings", "Services"],
    icon: "/projects/pawwalk/icon.jpg",
    cover: "/projects/pawwalk/cover.jpg"
  },
  {
    slug: "ethio-properties",
    name: "Ethio Properties",
    category: "Real Estate Platform",
    headline: "A real estate product for buying, selling, and renting with agent-friendly flows and stronger mobile credibility.",
    summary:
      "Property browsing, agent tools, and buyer messaging shaped into a product that feels more trustworthy and conversion-ready.",
    href: "https://apps.apple.com/us/app/ethio-properties/id1441741097",
    accent: "#34a0a4",
    initials: "EP",
    tags: ["PropTech", "Messaging", "Agents"],
    icon: "/projects/ethio-properties/icon.jpg",
    cover: "/projects/ethio-properties/cover.png"
  },
  {
    slug: "clean-scenes",
    name: "Clean Scenes",
    category: "Service Operations",
    headline: "A service-booking product that balances customer booking clarity with the operational needs of the business behind it.",
    summary:
      "Scheduling, service browsing, and day-to-day coordination packaged into a cleaner front-end experience.",
    href: "https://apps.apple.com/us/app/clean-scenes/id6474244788",
    accent: "#58c4dd",
    initials: "CS",
    tags: ["Booking", "Operations", "Services"],
    icon: "/projects/clean-scenes/icon.jpg",
    cover: "/projects/clean-scenes/cover.png"
  },
  {
    slug: "burns-construction",
    name: "Burns Construction",
    category: "Construction / Company App",
    headline: "A branded company app built to turn updates, news, and participation into a stronger mobile presence.",
    summary:
      "A good example of giving a traditional business a more modern digital face without losing practical utility.",
    href: "https://apps.apple.com/us/app/burns-construction/id6476978785",
    accent: "#ffd166",
    initials: "BC",
    tags: ["Construction", "Brand", "Community"],
    icon: "/projects/burns-construction/icon.jpg",
    cover: "/projects/burns-construction/cover.png"
  },
  {
    slug: "lose-weight",
    name: "Lose Weight at Home in 30 Days",
    category: "Health & Fitness",
    headline: "A guided workout and diet product with routines, progress tracking, and retention-minded mobile UX.",
    summary:
      "The product turns plans, motivation, and measurable progress into a clearer everyday mobile journey.",
    href: "https://apps.apple.com/pk/app/lose-weight-at-home-in-30-days/id1266612768",
    accent: "#a06cd5",
    initials: "LW",
    tags: ["Fitness", "Retention", "Consumer"],
    icon: "/projects/lose-weight/icon.jpg",
    cover: "/projects/lose-weight/cover.jpg"
  },
  {
    slug: "gabu",
    name: "Gabu",
    category: "Coupons / Discovery",
    headline: "A discovery-led app for offers and discounts where browsing speed and clarity matter to both users and partner brands.",
    summary:
      "Built to help users compare promotions and redeem codes through a simpler mobile flow.",
    href: "https://apps.apple.com/pk/app/gabu/id6443456022",
    accent: "#ffb347",
    initials: "GA",
    tags: ["Discovery", "Growth", "Offers"]
  },
  {
    slug: "dawn",
    name: "Dawn",
    category: "Media",
    headline: "A news product that needs clarity, credibility, and strong reading rhythm on mobile.",
    summary:
      "Media apps win on structure and readability, especially when daily use and habit-building are part of the product value.",
    href: "https://apps.apple.com/pk/app/dawn-official-mobile-app/id935631940",
    accent: "#6f86ff",
    initials: "DN",
    tags: ["Media", "Content", "Readers"],
    icon: "/projects/dawn/icon.jpg"
  },
  {
    slug: "haylo-photo-booth",
    name: "Haylo Photo Booth",
    category: "Events / Operations",
    headline: "An event-facing product where the brand experience and the operational flow both need to feel smooth.",
    summary:
      "The product leans on presentation, responsiveness, and making service interactions feel simple in real-world use.",
    href: "https://apps.apple.com/pk/app/haylo-photo-booth/id1557655049",
    accent: "#ff8aa1",
    initials: "HP",
    tags: ["Events", "Experience", "Operations"],
    icon: "/projects/haylo/icon.jpg"
  },
  {
    slug: "stretch2go",
    name: "Stretch2Go",
    category: "Health / Wellness",
    headline: "A wellness product built around guided value, repeat use, and a cleaner consumer experience.",
    summary:
      "Simple, credible product presentation matters here because the interface itself helps communicate the value of the service.",
    href: "https://apps.apple.com/us/app/stretch2go/id1605923898",
    accent: "#65d6a3",
    initials: "S2",
    tags: ["Wellness", "Mobile", "Habit"],
    icon: "/projects/stretch2go/icon.jpg"
  },
  {
    slug: "hyperwave",
    name: "The Hyperwave",
    category: "Social / Lifestyle",
    headline: "A niche social product with a sharper identity and a more immersive mobile environment.",
    summary:
      "Community products grow when discovery, personality, and retention feel intentional instead of generic.",
    href: "https://apps.apple.com/us/app/the-hyperwave/id1669710037",
    accent: "#4b89ff",
    initials: "HW",
    tags: ["Community", "Lifestyle", "Brand"],
    icon: "/projects/hyperwave/icon.jpg",
    cover: "/projects/hyperwave/cover.png"
  },
  {
    slug: "poker-run-app",
    name: "Poker Run App",
    category: "Events",
    headline: "An event product where scheduling, activity visibility, and participant convenience all need to feel immediate.",
    summary:
      "Good event apps remove confusion and help organizers look more put together on the day that matters.",
    href: "https://apps.apple.com/us/app/poker-run-app/id1626958029",
    accent: "#f97352",
    initials: "PR",
    tags: ["Events", "Coordination", "Experience"],
    icon: "/projects/poker-run/icon.jpg"
  },
  {
    slug: "chi-caregiver",
    name: "CHI Caregiver",
    category: "Healthcare Operations",
    headline: "A caregiver-focused product where daily workflows and operational visibility need to stay clean and dependable.",
    summary:
      "Healthcare operations products work best when the interface reduces friction and supports repeat tasks gracefully.",
    href: "https://apps.apple.com/no/app/chi-caregiver/id1566324609",
    accent: "#52d7ff",
    initials: "CC",
    tags: ["Healthcare", "Operations", "Workforce"]
  },
  {
    slug: "hada",
    name: "HADA",
    category: "Publishing / Books",
    headline: "A publishing-oriented app that benefits from calm interfaces, better reading flow, and clearer structure.",
    summary:
      "Content-heavy products succeed when the UX gets out of the way and lets the experience feel deliberate.",
    href: "https://apps.apple.com/us/app/hada/id6474098538",
    accent: "#d3b07a",
    initials: "HA",
    tags: ["Content", "Publishing", "Mobile"],
    icon: "/projects/hada/icon.jpg"
  },
  {
    slug: "red-eyed-films",
    name: "Red Eyed Films",
    category: "Creative / Media",
    headline: "A media brand app where polish and visual confidence help the business feel more premium from the first interaction.",
    summary:
      "Creative businesses benefit when their product presence matches the quality of the work they want to sell.",
    href: "https://apps.apple.com/us/app/red-eyed-films/id6468818138",
    accent: "#ff6d8a",
    initials: "RF",
    tags: ["Media", "Creative", "Brand"]
  },
  {
    slug: "load-management",
    name: "Load Management",
    category: "Logistics",
    headline: "An operations-focused app that puts logistics workflows into a cleaner mobile environment for real teams.",
    summary:
      "Products like this win trust when they feel practical, organized, and made for real field use instead of generic admin panels.",
    href: "https://apps.apple.com/us/app/load-management/id1554266807",
    accent: "#7dcfff",
    initials: "LM",
    tags: ["Logistics", "Operations", "B2B"],
    icon: "/projects/load-management/icon.jpg"
  },
  {
    slug: "poker-run-network",
    name: "Poker Run Network",
    category: "Events Network",
    headline: "A connected events product designed to help organizers and participants navigate a wider event ecosystem.",
    summary:
      "Networked event experiences benefit from clearer structure, stronger discoverability, and modern mobile presentation.",
    href: "https://apps.apple.com/us/app/poker-run-network/id6756013238",
    accent: "#ff9551",
    initials: "PN",
    tags: ["Events", "Network", "Community"]
  },
  {
    slug: "nightly-whats-up",
    name: "Nightly What's Up",
    category: "Lifestyle / Social",
    headline: "A nightlife-focused product where fast discovery and energy-heavy presentation make the experience feel alive.",
    summary:
      "Social discovery products need a clear vibe, quick scanning, and confident product personality to stand out.",
    href: "https://apps.apple.com/us/app/nightly-whats-up/id1667230632",
    accent: "#b26bff",
    initials: "NW",
    tags: ["Lifestyle", "Discovery", "Social"]
  },
  {
    slug: "nexlane-ads",
    name: "Nexlane Ads",
    category: "AdTech / Marketing",
    headline: "A business-facing app in a performance-driven category where trust, speed, and clarity all influence conversion.",
    summary:
      "Ad and growth products need interfaces that feel capable enough for teams spending real money through them.",
    href: "https://apps.apple.com/us/app/nexlane-ads/id6736761530",
    accent: "#41e3bb",
    initials: "NA",
    tags: ["AdTech", "Growth", "Business"]
  },
  {
    slug: "l3-attendance-system",
    name: "L3 Attendance System",
    category: "Workforce Operations",
    headline: "An attendance product built around repeat internal workflows where speed and reliability drive the whole experience.",
    summary:
      "Operational tools become much easier to adopt when the UI feels obvious and the workflow is respectful of busy teams.",
    href: "https://apps.apple.com/us/app/l3-attendance-system/id6476187276",
    accent: "#75e08a",
    initials: "L3",
    tags: ["Attendance", "Operations", "Teams"]
  },
  {
    slug: "listishop",
    name: "Listishop",
    category: "Shopping / Commerce",
    headline: "A shopping-oriented product that benefits from clearer catalog structure, stronger trust, and cleaner purchase flow.",
    summary:
      "Commerce products look more credible when the interface feels direct, modern, and easy to browse quickly.",
    href: "https://apps.apple.com/us/app/listishop/id6483000895",
    accent: "#ffc75f",
    initials: "LS",
    tags: ["Shopping", "Commerce", "Discovery"]
  },
  {
    slug: "renew-fitness",
    name: "Renew Fitness",
    category: "Fitness",
    headline: "A fitness app where motivation, repeat usage, and product clarity all depend on a cleaner mobile experience.",
    summary:
      "Good wellness UX supports habit-building without making the product feel heavy or confusing.",
    href: "https://apps.apple.com/us/app/renew-fitness/id6504458241",
    accent: "#70f0a1",
    initials: "RF",
    tags: ["Fitness", "Habit", "Mobile"]
  },
  {
    slug: "swishswipe",
    name: "SwishSwipe",
    category: "Utility / Consumer App",
    headline: "A consumer-facing product where immediacy and friction-free interaction shape the whole perception of quality.",
    summary:
      "Apps in this category depend on quick comprehension and a sharp interface to feel competitive.",
    href: "https://apps.apple.com/pk/app/swishswipe/id6740293282",
    accent: "#67c8ff",
    initials: "SS",
    tags: ["Utility", "Consumer", "Speed"]
  },
  {
    slug: "mon-ticket-promo",
    name: "Mon Ticket Promo",
    category: "Promotions / Events",
    headline: "A promo-first product where the interface has to communicate urgency, value, and trust at a glance.",
    summary:
      "Campaign and ticketing products win when the journey from discovery to action is fast and obvious.",
    href: "https://apps.apple.com/pk/app/mon-ticket-promo/id6745189242",
    accent: "#ff9174",
    initials: "MT",
    tags: ["Promotions", "Events", "Conversion"]
  },
  {
    slug: "muslimbiz",
    name: "MuslimBiz",
    category: "Business Directory",
    headline: "A directory-led product where credibility and clarity help users discover businesses with less friction.",
    summary:
      "Discovery platforms feel more valuable when the structure is cleaner and the business information is easier to scan.",
    href: "https://apps.apple.com/pk/app/muslimbiz/id6504187196",
    accent: "#53d7b5",
    initials: "MB",
    tags: ["Directory", "Business", "Discovery"]
  },
  {
    slug: "festiness",
    name: "Festiness",
    category: "Events / Lifestyle",
    headline: "An event-lifestyle product that relies on energy, personality, and quick discovery to keep users engaged.",
    summary:
      "Event discovery products land better when the mood feels intentional instead of generic and static.",
    href: "https://apps.apple.com/pk/app/festiness/id6742417446",
    accent: "#ff5fa2",
    initials: "FS",
    tags: ["Lifestyle", "Events", "Discovery"]
  }
];

const featuredOrder = ["linkease", "meetworth", "cargorent", "stm", "gamechanger"];

export const featuredProjects = featuredOrder
  .map((slug) => portfolioApps.find((project) => project.slug === slug))
  .filter((project): project is PortfolioApp => Boolean(project));

export const capabilityRows = [
  {
    title: "Premium product design for serious buyers",
    detail:
      "Whether the client is a SaaS founder, a logistics team, or an established business, the interface needs to signal trust, speed, and quality in seconds."
  },
  {
    title: "Mobile, SaaS, and operational systems in one delivery flow",
    detail:
      "I work across product UX, app implementation, business logic, and the practical workflows that make software usable after launch."
  },
  {
    title: "AI-rich and business-heavy products without toy UX",
    detail:
      "Apps like STM show the difference between adding advanced capability and actually packaging it into a product that executives and field teams will trust."
  }
];
