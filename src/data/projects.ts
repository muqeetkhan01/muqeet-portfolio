export type ProjectLink = { label: string; url: string };

export type Project = {
  name: string;
  type: string;
  description: string;
  features: string[];
  roles?: string[];
  techStack?: string[];
  businessValue?: string[];
  ai?: string[];
  links?: ProjectLink[];
  tags?: string[];
};

export const projects: Project[] = [
  {
    name: "Ferebe",
    type: "E-commerce Platform (Mobile App)",
    description:
      "A premium e-commerce experience for a long-running health & beauty business—built to make shopping convenient with ordering, payments, and account flows.",
    features: ["Order management & tracking", "Payment management", "User accounts & contact info"],
    businessValue: ["Improves purchase experience", "Streamlines ordering for customers"],
    links: [{ label: "App Store", url: "https://apps.apple.com/us/app/ferebe/id1546841196" }],
    tags: ["Commerce", "Mobile"]
  },
  {
    name: "Gabu",
    type: "Discounts & Coupons (Mobile App)",
    description:
      "A search and discovery app for promotions, offers, and discounts—helping users compare prices and redeem codes at participating stores.",
    features: ["Offer discovery", "Discount code flow", "Curated browsing", "Compare store prices"],
    businessValue: ["Boosts offer visibility", "Improves customer acquisition for stores"],
    links: [{ label: "App Store", url: "https://apps.apple.com/pk/app/gabu/id6443456022" }],
    tags: ["Marketplace", "Growth"]
  },
  {
    name: "GameChanger",
    type: "Sports (Mobile App)",
    description:
      "Youth sports platform for streaming games and keeping fans connected—includes team workflows and game tracking.",
    features: ["Live video streaming", "Integrated scorekeeping", "Team communication", "Stats & archived video"],
    ai: ["AutoStream (AI-powered)"],
    businessValue: ["Improves fan engagement", "Simplifies game coverage for teams"],
    links: [{ label: "App Store", url: "https://apps.apple.com/us/app/gamechanger/id1308415878" }],
    tags: ["Sports", "AI"]
  },
  {
    name: "Lose Weight at Home in 30 Days",
    type: "Health & Fitness (Mobile App)",
    description:
      "Home workout and diet program with progress tracking—designed to help users follow structured plans and improve fitness.",
    features: ["Structured home workout plans", "Guided exercise demos", "Progress & calorie tracking", "Apple Health integration"],
    businessValue: ["Improves retention via progress tracking", "Clear user journey for fitness goals"],
    links: [{ label: "App Store", url: "https://apps.apple.com/pk/app/lose-weight-at-home-in-30-days/id1266612768" }],
    tags: ["Fitness", "Mobile"]
  },
  {
    name: "PawWalk",
    type: "Pet Services Marketplace (Mobile App)",
    description:
      "A pet services platform built to help people discover and book pet-related services in their city with a smooth, app-first experience.",
    features: ["Pet service discovery", "Booking workflow", "Provider listings", "City-based availability"],
    businessValue: ["Connects service providers with pet owners", "Improves booking convenience"],
    links: [{ label: "App Store", url: "https://apps.apple.com/us/app/pawwalk/id1669535775" }],
    tags: ["Marketplace", "Mobile"]
  },
  {
    name: "Ethio Properties",
    type: "Real Estate Platform (Mobile App)",
    description:
      "Real estate platform for buying, selling, and renting properties in Ethiopia—supports agents with property management and direct messaging.",
    features: ["Property search & browsing", "Direct in-app messaging", "Agent property management", "Simplified purchase flow"],
    businessValue: ["Enables diaspora property discovery", "Improves agent conversion workflow"],
    links: [{ label: "App Store", url: "https://apps.apple.com/us/app/ethio-properties/id1441741097" }],
    tags: ["Real Estate", "Mobile"]
  },
  {
    name: "The Haylo",
    type: "Healthcare / Caregiver Platform (Mobile App)",
    description:
      "A caregiver-focused platform built to support healthcare workflows with modern mobile UX and operational visibility.",
    features: ["Caregiver workflows", "Attendance & reporting", "Operational visibility", "Modern mobile experience"],
    businessValue: ["Improves workforce coordination", "Supports reporting and oversight"],
    links: [{ label: "App Store", url: "https://apps.apple.com/us/app/the-haylo/id1494538763" }],
    tags: ["Healthcare", "Operations"]
  }
];
