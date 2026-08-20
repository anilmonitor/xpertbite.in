export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: "Services" | "Products" | "Blog" | "Tools & Guides" | "Pages" | "Technologies" | "FAQs";
  href: string;
  keywords: string[];
  badge?: string;
  isExternal?: boolean;
}

export const SEARCH_ITEMS: SearchItem[] = [
  // ─── Featured Tools & Guides ──────────────────────────────────
  {
    id: "tool-tiranga-idcard",
    title: "Tiranga ID Card (तिरंगा आईडी कार्ड) - Step by Step Guide",
    description: "Create, customize with your photo & name, and download your Har Ghar Tiranga ID Card online.",
    category: "Tools & Guides",
    href: "/idcard",
    keywords: [
      "tiranga", "idcard", "id card", "tiranga id card", "tiranga id", "har ghar tiranga", 
      "tiranga-indol.vercel.app", "tiranga card download", "15 august", 
      "26 january", "patriotic badge", "flag card", "tiranga card kaise banaye", 
      "photo id card maker", "tiranga generator", "card", "online id card", "tiranga photo",
      "tiranga id card maker", "how to make tiranga id card", "tiranga card", "make tiranga id card"
    ],
    badge: "Featured Guide",
  },
  {
    id: "tool-tiranga-idcard-online-maker",
    title: "Tiranga ID Card Maker Online 2026 (Free Photo Badge Generator)",
    description: "Official online tool to create and download high-resolution Har Ghar Tiranga photo ID badge instantly.",
    category: "Tools & Guides",
    href: "/tiranga-idcard",
    keywords: [
      "tiranga id card online maker", "tiranga-idcard", "tiranga id card v2", "tiranga id maker",
      "har ghar tiranga generator", "tiranga-indol.vercel.app", "tiranga badge online",
      "15 august id card maker", "26 january id badge", "indian flag photo card maker"
    ],
    badge: "Free Tool",
  },
  {
    id: "tool-har-ghar-tiranga-v3",
    title: "Har Ghar Tiranga Kaise Banaye (2026) | How to Make Tiranga ID Card Online",
    description: "Complete guide on how to make Tiranga ID card online and Har Ghar Tiranga photo ID badge for free in 2026.",
    category: "Tools & Guides",
    href: "/har-ghar-tiranga",
    keywords: [
      "how to make tiranga id", "har ghar tiranga kaise banaye", "tiranga id card kaise banaye",
      "har ghar tiranga", "tiranga id card v3", "tiranga-indol.vercel.app", "how to make tiranga id card",
      "15 august id card", "har ghar tiranga certificate", "tiranga badge online"
    ],
    badge: "Special Edition V3",
  },

  // ─── Services ────────────────────────────────────────────────
  {
    id: "service-web-dev",
    title: "Web Development Services",
    description: "Custom web applications built with modern technologies like Next.js, React, and Node.js for scalability and performance.",
    category: "Services",
    href: "/services/web-development",
    keywords: ["web", "website", "react", "nextjs", "frontend", "backend", "fullstack", "portal", "custom web"],
  },
  {
    id: "service-mobile-dev",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android built with React Native and Flutter.",
    category: "Services",
    href: "/services/mobile-app-development",
    keywords: ["mobile", "app", "ios", "android", "react native", "flutter", "smartphone", "play store", "app store"],
  },
  {
    id: "service-ui-ux",
    title: "UI/UX Design Services",
    description: "User-centered interface and experience design, wireframing, interactive prototyping, and design systems.",
    category: "Services",
    href: "/services/ui-ux-design",
    keywords: ["ui", "ux", "design", "figma", "wireframing", "prototyping", "interface", "branding", "user experience"],
  },
  {
    id: "service-cloud",
    title: "Cloud Solutions & DevOps",
    description: "Scalable cloud infrastructure, migration, Kubernetes, Docker, and 24/7 DevOps management on AWS, GCP, and Azure.",
    category: "Services",
    href: "/services/cloud-solutions",
    keywords: ["cloud", "aws", "azure", "gcp", "devops", "docker", "kubernetes", "hosting", "serverless", "infrastructure"],
  },
  {
    id: "service-ai-ml",
    title: "AI & Machine Learning Development",
    description: "Custom AI solutions, LLM integrations, predictive analytics, chatbots, computer vision, and machine learning pipelines.",
    category: "Services",
    href: "/services/ai-development",
    keywords: ["ai", "ml", "machine learning", "artificial intelligence", "chatbots", "llm", "openai", "automation", "python"],
  },
  {
    id: "service-custom-software",
    title: "Custom Software Development",
    description: "Tailored enterprise software, ERP, CRM, and workflow automation systems built for specific business requirements.",
    category: "Services",
    href: "/services/custom-software",
    keywords: ["custom software", "enterprise", "erp", "crm", "automation", "microservices", "java", "python", "business software"],
  },

  // ─── Products ────────────────────────────────────────────────
  {
    id: "product-quickinventory",
    title: "QuickInventory ERP",
    description: "Cloud-based smart inventory and warehouse management system with real-time tracking, barcode scanning, and GST billing.",
    category: "Products",
    href: "/products/quickinventory",
    keywords: ["inventory", "warehouse", "stock", "erp", "gst billing", "barcode", "supply chain"],
  },
  {
    id: "product-secureauth",
    title: "SecureAuth Pro",
    description: "Enterprise-grade authentication and identity management platform featuring multi-factor auth and single sign-on (SSO).",
    category: "Products",
    href: "/products/secureauth-pro",
    keywords: ["auth", "security", "sso", "mfa", "identity", "oauth", "jwt", "login"],
  },
  {
    id: "product-payflow",
    title: "PayFlow Payment Gateway",
    description: "Unified multi-gateway payment processing solution supporting UPI, Cards, NetBanking, and recurring subscriptions.",
    category: "Products",
    href: "/products/payflow-gateway",
    keywords: ["payment", "gateway", "upi", "paytm", "razorpay", "stripe", "billing", "checkout", "subscriptions"],
  },
  {
    id: "product-cloudpulse",
    title: "CloudPulse Monitoring",
    description: "Real-time cloud infrastructure and application performance monitoring tool with instant alerts and automated diagnostics.",
    category: "Products",
    href: "/products/cloudpulse",
    keywords: ["monitoring", "uptime", "apm", "metrics", "alerts", "server tracking", "performance"],
  },
  {
    id: "product-teamsync",
    title: "TeamSync Workspace",
    description: "Collaborative project management and team productivity workspace featuring Kanban boards, Gantt charts, and real-time chat.",
    category: "Products",
    href: "/products/teamsync",
    keywords: ["project management", "collaboration", "kanban", "chat", "tasks", "jira alternative", "team"],
  },
  {
    id: "product-docusign-ai",
    title: "DocuSign AI & OCR",
    description: "Intelligent document processing, automated OCR text extraction, and digital e-signature management suite.",
    category: "Products",
    href: "/products/docusign-ai",
    keywords: ["documents", "ocr", "esignature", "pdf", "contracts", "ai extraction", "digital signature"],
  },

  // ─── Blog Posts ──────────────────────────────────────────────
  {
    id: "blog-nextjs-15",
    title: "Building High-Performance Web Applications with Next.js 15",
    description: "Discover how Next.js 15 App Router, React Server Components, and Turbopack elevate web speed and SEO for Indian startups.",
    category: "Blog",
    href: "/blog/building-scalable-web-apps-with-nextjs-15",
    keywords: ["nextjs", "nextjs 15", "react server components", "seo", "turbopack", "web performance", "frontend tutorial"],
  },
  {
    id: "blog-mobile-app-guide",
    title: "How to Choose the Right Tech Stack for Mobile App Development",
    description: "Comprehensive guide comparing React Native, Flutter, Swift, and Kotlin for modern cross-platform mobile apps.",
    category: "Blog",
    href: "/blog/choosing-right-mobile-app-tech-stack",
    keywords: ["mobile app", "react native vs flutter", "cross platform", "android development", "ios development"],
  },
  {
    id: "blog-ui-ux-design",
    title: "10 UI/UX Best Practices for Higher Conversion Rates",
    description: "Actionable design strategies, visual hierarchy rules, and user-flow tips to dramatically improve product retention.",
    category: "Blog",
    href: "/blog/ui-ux-best-practices-higher-conversion",
    keywords: ["ui ux", "conversion rate", "design principles", "user retention", "figma design"],
  },
  {
    id: "blog-saas-database",
    title: "Architecting Multi-Tenant Databases for Scalable SaaS",
    description: "Deep dive into multi-tenant database design patterns, data isolation, sharding, and PostgreSQL optimization.",
    category: "Blog",
    href: "/blog/architecting-multi-tenant-databases-saas",
    keywords: ["database", "saas", "multi-tenant", "postgresql", "sharding", "backend architecture"],
  },
  {
    id: "blog-cloud-devops",
    title: "DevOps & Cloud Migration: Best Practices for 2026",
    description: "A complete walkthrough on CI/CD pipelines, Docker containerization, Kubernetes orchestration, and cloud cost optimization.",
    category: "Blog",
    href: "/blog/devops-cloud-migration-best-practices-2026",
    keywords: ["devops", "cloud migration", "docker", "kubernetes", "ci cd", "aws", "infrastructure"],
  },
  {
    id: "blog-enterprise-scale",
    title: "Software Scaling Blueprint for Indian Tech Startups",
    description: "Proven architectural methodologies and caching strategies to scale digital platforms to millions of daily active users.",
    category: "Blog",
    href: "/blog/software-scaling-blueprint-indian-tech-startups",
    keywords: ["scaling", "startups", "high traffic", "microservices", "caching", "redis"],
  },

  // ─── Technologies ────────────────────────────────────────────
  {
    id: "tech-react-next",
    title: "React & Next.js Technologies",
    description: "Explore our frontend expertise in React, Next.js, TypeScript, and modern state management libraries.",
    category: "Technologies",
    href: "/technologies",
    keywords: ["react", "nextjs", "typescript", "javascript", "tailwind", "frontend"],
  },
  {
    id: "tech-backend-node-python",
    title: "Node.js, Python & Java Backend Stack",
    description: "Robust, resilient server architectures using Node.js, Express, Fastify, Django, FastAPI, and Spring Boot.",
    category: "Technologies",
    href: "/technologies",
    keywords: ["nodejs", "python", "fastapi", "django", "java", "spring boot", "backend", "api"],
  },
  {
    id: "tech-databases-cloud",
    title: "Cloud & Databases (PostgreSQL, MongoDB, AWS, Docker)",
    description: "Enterprise databases and cloud infrastructures built on PostgreSQL, Redis, MongoDB, AWS, and Kubernetes.",
    category: "Technologies",
    href: "/technologies",
    keywords: ["postgresql", "mongodb", "redis", "mysql", "prisma", "aws", "docker", "cloud"],
  },

  // ─── Key Company & Action Pages ──────────────────────────────
  {
    id: "page-about",
    title: "About XpertBite Technologies",
    description: "Learn about our company journey, leadership, mission, and how we empower businesses globally through technology.",
    category: "Pages",
    href: "/about",
    keywords: ["about us", "company", "team", "vision", "mission", "values", "history", "expertbite"],
  },
  {
    id: "page-request-quote",
    title: "Request a Quote (Start a Project)",
    description: "Get a free project estimate and consultation for your custom web, mobile, or enterprise software project.",
    category: "Pages",
    href: "/request-quote",
    keywords: ["quote", "estimate", "cost", "pricing estimate", "hire developers", "start project", "hire team"],
    badge: "Contact",
  },
  {
    id: "page-book-consultation",
    title: "Book a Free Consultation",
    description: "Schedule a 1-on-1 strategy session with our senior solution architects to discuss your technical roadmap.",
    category: "Pages",
    href: "/book-consultation",
    keywords: ["consultation", "meeting", "call", "schedule", "tech advisory", "expert guidance"],
    badge: "Popular",
  },
  {
    id: "page-contact",
    title: "Contact Us",
    description: "Get in touch with our team via phone (+91 74881 68228), email (xpertbite@gmail.com), or office visits in Garhwa & Bangalore.",
    category: "Pages",
    href: "/contact",
    keywords: ["contact", "phone", "email", "address", "support", "office location", "reach us"],
  },
  {
    id: "page-pricing",
    title: "Pricing Plans & Packages",
    description: "Transparent pricing models including Starter, Professional, and Enterprise custom software development packages.",
    category: "Pages",
    href: "/pricing",
    keywords: ["pricing", "cost", "plans", "packages", "rates", "budget", "development fees"],
  },
  {
    id: "page-case-studies",
    title: "Case Studies & Portfolio",
    description: "Explore real-world case studies of digital transformation, high-traffic SaaS builds, and client success stories.",
    category: "Pages",
    href: "/case-studies",
    keywords: ["case studies", "portfolio", "projects", "client work", "showcase", "success stories"],
  },
  {
    id: "page-careers",
    title: "Careers & Internships at XpertBite",
    description: "Join our fast-growing engineering team. Explore current full-time openings and software engineering internships.",
    category: "Pages",
    href: "/careers",
    keywords: ["careers", "jobs", "hiring", "internships", "developer jobs", "apply", "work with us"],
  },
  {
    id: "page-process",
    title: "Our Development Process",
    description: "Understand our agile 6-phase software delivery model: Discovery, Design, Development, Testing, Deployment & Support.",
    category: "Pages",
    href: "/process",
    keywords: ["process", "workflow", "methodology", "agile", "sprint", "delivery model"],
  },
  {
    id: "page-testimonials",
    title: "Client Testimonials & Reviews",
    description: "Read genuine feedback and reviews from founders, enterprise CTOs, and global clients who trust XpertBite.",
    category: "Pages",
    href: "/testimonials",
    keywords: ["reviews", "testimonials", "ratings", "client feedback", "expertbite reviews"],
  },
  {
    id: "page-faq",
    title: "Frequently Asked Questions (FAQ)",
    description: "Answers to common questions regarding timelines, costs, tech stack, IP ownership, NDAs, and post-launch support.",
    category: "FAQs",
    href: "/faq",
    keywords: ["faq", "questions", "answers", "help", "nda", "timelines", "payment terms"],
  },
  {
    id: "page-support",
    title: "Help & Support Center",
    description: "Get technical assistance, raise support tickets, or connect with our customer success team.",
    category: "Pages",
    href: "/support",
    keywords: ["support", "helpdesk", "ticket", "customer service", "assistance"],
  },
];
