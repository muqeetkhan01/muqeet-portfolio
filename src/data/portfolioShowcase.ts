export type ShowcaseProject = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  summary: string;
  year: string;
  accent: string;
  cover: string;
  icon: string;
  href: string;
  deliverables: string[];
};

export type ArchiveProject = {
  name: string;
  category: string;
  icon: string;
  href: string;
};

export const featuredProjects: ShowcaseProject[] = [
  {
    slug: "ferebe",
    name: "Ferebe",
    category: "Shopping / E-commerce",
    headline: "A polished commerce app built to make a long-running beauty business feel premium on mobile.",
    summary:
      "Ordering, payments, account flows, and a cleaner buying experience packaged into a product that looks modern and sells with confidence.",
    year: "2025",
    accent: "#ff9b62",
    cover: "/projects/ferebe/cover.png",
    icon: "/projects/ferebe/icon.jpg",
    href: "https://apps.apple.com/us/app/ferebe/id1546841196",
    deliverables: ["Mobile commerce UX", "Ordering and payments", "Customer account flows"]
  },
  {
    slug: "hyperwave",
    name: "The Hyperwave",
    category: "Lifestyle / Networking",
    headline: "A niche social product with a sharper visual identity and a more immersive mobile experience.",
    summary:
      "Designed to help a focused community connect, browse, and engage inside a more considered product environment.",
    year: "2025",
    accent: "#4b89ff",
    cover: "/projects/hyperwave/cover.png",
    icon: "/projects/hyperwave/icon.jpg",
    href: "https://apps.apple.com/us/app/the-hyperwave/id1669710037",
    deliverables: ["Community features", "Immersive mobile UI", "Profile and discovery flows"]
  },
  {
    slug: "pawwalk",
    name: "PawWalk",
    category: "Pet Services Marketplace",
    headline: "A marketplace experience for pet services with a friendly brand feel and cleaner service discovery.",
    summary:
      "Built around bookings, provider discovery, and location-based browsing so pet owners can find and book services quickly.",
    year: "2024",
    accent: "#f4a261",
    cover: "/projects/pawwalk/cover.jpg",
    icon: "/projects/pawwalk/icon.jpg",
    href: "https://apps.apple.com/us/app/pawwalk/id1669535775",
    deliverables: ["Marketplace UX", "Booking flows", "Provider listings"]
  },
  {
    slug: "ethio-properties",
    name: "Ethio Properties",
    category: "Real Estate Platform",
    headline: "A real estate product for buying, selling, and renting with agent-friendly workflows and direct messaging.",
    summary:
      "Property browsing, agent tooling, and purchase discovery were shaped into a more credible and conversion-friendly app.",
    year: "2024",
    accent: "#34a0a4",
    cover: "/projects/ethio-properties/cover.png",
    icon: "/projects/ethio-properties/icon.jpg",
    href: "https://apps.apple.com/us/app/ethio-properties/id1441741097",
    deliverables: ["Property discovery", "Agent dashboard flows", "In-app messaging"]
  },
  {
    slug: "quickclick",
    name: "QuickClick Buy & Sell",
    category: "Marketplace / Classifieds",
    headline: "A marketplace app focused on clean listing flows, product discovery, and faster buyer-seller interaction.",
    summary:
      "The product centers on browsing, posting, and practical commerce features without unnecessary friction.",
    year: "2025",
    accent: "#f25f5c",
    cover: "/projects/quickclick/cover.jpg",
    icon: "/projects/quickclick/icon.jpg",
    href: "https://apps.apple.com/pk/app/quickclick-buy-sell/id6467562036",
    deliverables: ["Listing management", "Search and discovery", "Marketplace interaction"]
  },
  {
    slug: "clean-scenes",
    name: "Clean Scenes",
    category: "Service Booking",
    headline: "A service-led app for maid bookings, scheduling, and client management with a cleaner front-end experience.",
    summary:
      "The app balances booking clarity and operational utility, giving both customers and the business a smoother flow.",
    year: "2025",
    accent: "#5bc0eb",
    cover: "/projects/clean-scenes/cover.png",
    icon: "/projects/clean-scenes/icon.jpg",
    href: "https://apps.apple.com/us/app/clean-scenes/id6474244788",
    deliverables: ["Appointment booking", "Service browsing", "Operational support flows"]
  },
  {
    slug: "burns-construction",
    name: "Burns Construction",
    category: "Company / Community App",
    headline: "A branded company app that turns updates, news, and participation into a mobile-first experience.",
    summary:
      "Built to support news, RSVP moments, and ongoing community connection for a construction brand with a modern identity.",
    year: "2025",
    accent: "#ffd166",
    cover: "/projects/burns-construction/cover.png",
    icon: "/projects/burns-construction/icon.jpg",
    href: "https://apps.apple.com/us/app/burns-construction/id6476978785",
    deliverables: ["Community feed", "RSVP flows", "Branded mobile presence"]
  },
  {
    slug: "lose-weight",
    name: "Lose Weight at Home in 30 Days",
    category: "Health & Fitness",
    headline: "A structured workout and diet app with guided plans, progress tracking, and a strong retention loop.",
    summary:
      "The product turns routines, progress, and motivation into a clearer mobile journey that keeps users engaged.",
    year: "2024",
    accent: "#a06cd5",
    cover: "/projects/lose-weight/cover.jpg",
    icon: "/projects/lose-weight/icon.jpg",
    href: "https://apps.apple.com/pk/app/lose-weight-at-home-in-30-days/id1266612768",
    deliverables: ["Fitness UX", "Program structure", "Progress and habit tracking"]
  }
];

export const archiveProjects: ArchiveProject[] = [
  {
    name: "Dawn",
    category: "News",
    icon: "/projects/dawn/icon.jpg",
    href: "https://apps.apple.com/pk/app/dawn-official-mobile-app/id935631940"
  },
  {
    name: "The Haylo",
    category: "Operations",
    icon: "/projects/haylo/icon.jpg",
    href: "https://apps.apple.com/pk/app/haylo-photo-booth/id1557655049"
  },
  {
    name: "Stretch2Go",
    category: "Health",
    icon: "/projects/stretch2go/icon.jpg",
    href: "https://apps.apple.com/us/app/stretch2go/id1605923898"
  },
  {
    name: "Poker Run App",
    category: "Events",
    icon: "/projects/poker-run/icon.jpg",
    href: "https://apps.apple.com/us/app/poker-run-app/id1626958029"
  },
  {
    name: "HADA",
    category: "Books",
    icon: "/projects/hada/icon.jpg",
    href: "https://apps.apple.com/us/app/hada/id6474098538"
  },
  {
    name: "CargoRent",
    category: "Business",
    icon: "/projects/cargorent/icon.jpg",
    href: "https://apps.apple.com/us/app/cargorent/id6448697695"
  },
  {
    name: "Load Management",
    category: "Logistics",
    icon: "/projects/load-management/icon.jpg",
    href: "https://apps.apple.com/us/app/load-management/id1554266807"
  },
  {
    name: "STM",
    category: "Construction",
    icon: "/projects/stm/icon.jpg",
    href: "https://apps.apple.com/pk/app/stm/id6473781207"
  }
];

export const capabilityRows = [
  {
    title: "Mobile apps with real product polish",
    detail: "From shopping and health to marketplaces and internal tools, the goal is always the same: clearer UX, stronger trust, and better conversion."
  },
  {
    title: "Full-stack delivery instead of half-finished handoffs",
    detail: "Frontend, backend, integrations, dashboards, and launch support handled as one product system."
  },
  {
    title: "Business systems that still feel crafted",
    detail: "Admin panels, operational apps, and niche workflows built with the same care usually reserved for consumer-facing products."
  }
];
