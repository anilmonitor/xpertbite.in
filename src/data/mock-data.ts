import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  Code2,
  ShoppingCart,
  Database,
  Shield,
  Cog,
  BarChart3,
  Layers,
  Monitor,
  Rocket,
  Users,
  Zap,
  Cpu,
  type LucideIcon,
} from "lucide-react";

// ─── Services ────────────────────────────────────────────────
export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  technologies: string[];
  category: string;
  image: string;
}

export const services: ServiceData[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription: "Custom web applications built with modern technologies for scalability and performance.",
    description: "We build powerful, scalable web applications using the latest technologies. From simple websites to complex enterprise platforms, our team delivers pixel-perfect, high-performance solutions that drive business growth. We specialize in React, Next.js, and Node.js ecosystems to create fast, SEO-friendly, and accessible web experiences.",
    icon: Globe,
    features: ["Custom Web Applications", "Progressive Web Apps", "Single Page Applications", "Server-Side Rendering", "Static Site Generation", "API Development", "Performance Optimization", "SEO Implementation"],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform mobile applications for iOS and Android.",
    description: "We create stunning mobile applications that deliver exceptional user experiences across iOS and Android platforms. Our mobile development team uses React Native and Flutter to build cross-platform apps that feel truly native, reducing development time and cost while maintaining the highest quality standards.",
    icon: Smartphone,
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Store Optimization", "Push Notifications", "Offline Functionality", "Biometric Authentication", "In-App Purchases"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "REST APIs"],
    category: "Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "User-centered design that drives engagement and conversions.",
    description: "Our design team creates intuitive, beautiful interfaces that users love. We follow a research-driven design process, combining user research, wireframing, prototyping, and usability testing to deliver designs that not only look stunning but also drive measurable business results.",
    icon: Palette,
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Design Systems", "Usability Testing", "Interaction Design", "Brand Identity"],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
    category: "Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription: "Scalable cloud infrastructure and migration services.",
    description: "We help businesses leverage the full power of cloud computing. From cloud migration to architecture design and optimization, our certified cloud engineers ensure your infrastructure is secure, scalable, and cost-effective. We work with AWS, Azure, and Google Cloud to find the best fit for your needs.",
    icon: Cloud,
    features: ["Cloud Migration", "Architecture Design", "DevOps Automation", "Container Orchestration", "Serverless Computing", "Cost Optimization", "Disaster Recovery", "24/7 Monitoring"],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "ai-development",
    title: "AI & Machine Learning",
    shortDescription: "Intelligent solutions powered by artificial intelligence and machine learning.",
    description: "We build AI-powered solutions that transform raw data into actionable insights. From natural language processing and computer vision to predictive analytics and recommendation engines, our AI team delivers cutting-edge solutions that give your business a competitive edge.",
    icon: Cpu,
    features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Recommendation Engines", "Chatbot Development", "Data Processing Pipelines", "Model Training & Deployment", "AI Integration"],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face"],
    category: "AI & Data",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    shortDescription: "Tailored software solutions designed for your unique business needs.",
    description: "Every business is unique, and so should be its software. We build custom software solutions that perfectly align with your business processes, goals, and growth plans. From ERP systems to workflow automation tools, we deliver solutions that streamline operations and boost productivity.",
    icon: Code2,
    features: ["Requirements Analysis", "System Architecture", "Agile Development", "Quality Assurance", "Deployment & DevOps", "Ongoing Support", "Performance Tuning", "Security Audits"],
    technologies: ["Java", "Spring Boot", "Python", "Django", ".NET", "Microservices"],
    category: "Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    shortDescription: "Full-featured online stores and marketplace platforms.",
    description: "We build e-commerce solutions that convert visitors into customers. From custom Shopify stores to enterprise marketplace platforms, we handle everything from product catalog management to payment processing, ensuring a seamless shopping experience for your customers.",
    icon: ShoppingCart,
    features: ["Custom Storefronts", "Payment Integration", "Inventory Management", "Order Tracking", "Multi-Currency Support", "Analytics Dashboard", "SEO Optimization", "Mobile Commerce"],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "Next.js", "Node.js"],
    category: "Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    shortDescription: "Scalable software-as-a-service platforms built for growth.",
    description: "We specialize in building SaaS products from the ground up. Our team handles multi-tenancy, subscription billing, user management, analytics dashboards, and all the complexities that come with building a world-class SaaS platform. We've helped startups and enterprises alike launch successful SaaS products.",
    icon: Layers,
    features: ["Multi-Tenancy Architecture", "Subscription Billing", "User Management", "Analytics & Reporting", "API Platform", "Webhooks", "White-Label Solutions", "Usage Metering"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
    category: "Development",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "devops",
    title: "DevOps & CI/CD",
    shortDescription: "Automated deployment pipelines and infrastructure management.",
    description: "We implement DevOps best practices that accelerate your development cycle and improve reliability. From CI/CD pipeline setup to infrastructure-as-code, monitoring, and incident response, we help engineering teams ship faster with confidence.",
    icon: Rocket,
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring & Alerting", "Log Management", "Auto-Scaling", "Security Scanning", "Incident Response"],
    technologies: ["GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Terraform", "Datadog"],
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    shortDescription: "Comprehensive security solutions to protect your digital assets.",
    description: "We provide end-to-end security solutions to protect your business from cyber threats. Our security experts conduct thorough assessments, implement robust security measures, and provide ongoing monitoring to keep your data and systems safe.",
    icon: Shield,
    features: ["Security Audits", "Penetration Testing", "Vulnerability Assessment", "Compliance Management", "Incident Response", "Security Training", "Data Encryption", "Access Control"],
    technologies: ["OWASP", "Burp Suite", "Nessus", "Splunk", "CrowdStrike", "Vault"],
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    shortDescription: "Transform data into actionable business insights.",
    description: "We help businesses make data-driven decisions by building comprehensive analytics platforms. From data warehousing and ETL pipelines to interactive dashboards and predictive models, we turn your raw data into competitive advantages.",
    icon: BarChart3,
    features: ["Data Warehousing", "ETL Pipelines", "Business Intelligence", "Real-time Analytics", "Custom Dashboards", "Predictive Modeling", "Data Visualization", "A/B Testing"],
    technologies: ["Python", "Apache Spark", "Snowflake", "Tableau", "Power BI", "dbt"],
    category: "AI & Data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    shortDescription: "Enterprise resource planning systems for business efficiency.",
    description: "We develop custom ERP solutions that streamline your business operations. Our ERP systems integrate finance, HR, inventory, supply chain, and CRM into a unified platform, providing real-time visibility across your entire organization.",
    icon: Cog,
    features: ["Financial Management", "HR Management", "Inventory Control", "Supply Chain", "CRM Integration", "Reporting & Analytics", "Workflow Automation", "Multi-location Support"],
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Redis", "Kafka"],
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
];

// ─── Portfolio ───────────────────────────────────────────────
export interface PortfolioData {
  slug: string;
  title: string;
  category: string;
  description: string;
  client: string;
  duration: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  liveUrl?: string;
  image: string;
}

export const portfolioItems: PortfolioData[] = [
  {
    slug: "ghartak-delivery",
    title: "GharTak — Hyperlocal Delivery App",
    category: "Delivery App",
    description: "A complete food and grocery delivery application connecting local merchants, delivery agents, and customers with live tracking across India.",
    client: "GharTak India",
    duration: "5 months",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Razorpay", "Mapbox"],
    challenge: "The client needed an on-demand dispatching system with real-time GPS tracking and driver routing to serve local businesses.",
    solution: "We designed hybrid mobile applications with auto-dispatch algorithm, driver navigation using Mapbox, and central merchant portal.",
    results: ["100K+ monthly deliveries", "Under 24 minutes delivery time", "500+ local stores onboarded", "Instant merchant payouts"],
    liveUrl: "https://ghartak.xpertbite.in",
    image: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "apnadukaan-marketplace",
    title: "ApnaDukaan — ONDC Store Builder",
    category: "E-Commerce",
    description: "An all-in-one e-commerce storefront builder for Indian retail stores, integrated with WhatsApp catalogs and ONDC sales channel network.",
    client: "ApnaDukaan Retail",
    duration: "6 months",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "ONDC Protocol", "Razorpay", "AWS"],
    challenge: "Kirana store owners needed a 1-click platform to create online shops, accept digital UPI payments, and sell items without tech setup.",
    solution: "We developed a headless e-commerce backend with direct WhatsApp inventory uploads and automated ONDC registry sync.",
    results: ["10,000+ active store links", "₹50 Lakhs+ daily transactions", "Instant UPI payments setup", "30% sales conversion increase"],
    liveUrl: "https://apnadukaan.xpertbite.in",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "lapcare-manager",
    title: "LapCare — Laptop Shop Manager",
    category: "Shop Management",
    description: "Specialized billing, repair status tracking, and parts inventory software custom built for computer and electronics repair networks in India.",
    client: "LapCare Systems",
    duration: "4 months",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Docker", "Msg91 API"],
    challenge: "Chain of electronics repair shops struggled with tracking customer repair items, assignment to technicians, and printing GST receipts.",
    solution: "We built a responsive web dashboard with barcode tracking, auto repair-ready SMS triggers, and branch accounting.",
    results: ["80+ service center branches", "50K+ repair orders completed", "Automated GST invoicing billing", "40% reduction in parts inventory loss"],
    liveUrl: "https://lapcare.xpertbite.in",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "lapbazaar-estore",
    title: "LapBazaar — Refurbished Laptop E-Store",
    category: "Electronics E-Commerce",
    description: "High-performance electronics storefront featuring detailed computer spec filters, custom side-by-side spec compares, and bank EMI checkouts.",
    client: "LapBazaar India",
    duration: "3 months",
    technologies: ["Next.js", "Tailwind CSS", "Elasticsearch", "Node.js", "Paytm Gateway", "AWS"],
    challenge: "The vendor wanted an ultra-fast, SEO-optimized store specifically for refurbished computer hardware with online EMI verification.",
    solution: "We designed a modular Next.js storefront integrated with Elasticsearch for filters and integrated third-party loan EMI processors.",
    results: ["3x faster page load performance", "₹2 Crores+ monthly sales volume", "80% user visits on mobile app", "2-minute EMI approval time"],
    liveUrl: "https://lapbazaar.xpertbite.in",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
  },
];

// ─── Testimonials ────────────────────────────────────────────
export interface TestimonialData {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: TestimonialData[] = [
  {
    name: "Rajesh Singhania",
    role: "Founder & CEO",
    company: "GharTak India",
    content: "XpertBite built a highly scalable hyperlocal delivery system for us. Our orders are dispatched instantly, live tracking works flawlessly across India, and merchant partners love the quick UPI payment settlement flow.",
    rating: 5,
    avatar: "/images/avatars/avatar-1.jpg",
  },
  {
    name: "Vikram Aditya",
    role: "Managing Director",
    company: "ApnaDukaan Retail Group",
    content: "Working with XpertBite was a game-changer for ApnaDukaan. They built our catalog creator and integrated ONDC protocols seamlessly. Kirana shop owners can set up online shops in just one click!",
    rating: 5,
    avatar: "/images/avatars/avatar-2.jpg",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Co-Founder & Director",
    company: "LapCare Systems",
    content: "With LapCare, our branch repair inventory and automated GST billing are completely streamlined. The SMS status notification system has dramatically reduced follow-up calls and improved branch efficiency.",
    rating: 5,
    avatar: "/images/avatars/avatar-3.jpg",
  },
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    company: "LapBazaar India",
    content: "XpertBite built an ultra-fast refurbished laptop store template for LapBazaar. The laptop specifications compare grid and bank EMI calculation triggers are highly optimized and loved by customers.",
    rating: 5,
    avatar: "/images/avatars/avatar-4.jpg",
  },
];

// ─── Blog Posts ──────────────────────────────────────────────
export interface BlogData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogData[] = [
  {
    slug: "nextjs-15-production-guide",
    title: "Next.js 15 App Router: The Ultimate Production Guide for Modern Scale",
    excerpt: "Learn how XpertBite Technologies uses Next.js 15 App Router to build blazingly fast, SEO-friendly web platforms that load under 100ms.",
    content: "placeholder",
    category: "Development",
    author: "Rahul Kumar",
    authorRole: "Lead Web Architect",
    date: "2026-06-25",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    tags: ["Next.js 15", "Web Development", "XpertBite", "React 19"],
  },
  {
    slug: "cross-platform-mobile-apps-react-native",
    title: "React Native vs Flutter: Building Premium Mobile Applications in India",
    excerpt: "Outsourcing mobile app development? Read how ExpertBite developers select the ideal mobile framework for high-scale retail platforms.",
    content: "placeholder",
    category: "Mobile Apps",
    author: "Ananya Sharma",
    authorRole: "Mobile Engineering Lead",
    date: "2026-06-20",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    tags: ["React Native", "Mobile Development", "ExpertBite", "Android iOS"],
  },
  {
    slug: "figma-design-systems-enterprise",
    title: "How to Build an Enterprise-Grade Figma Design System in 2026",
    excerpt: "A guide on scaling design operations without losing pixel-perfection, written by the design squad at XpertBite Technologies.",
    content: "placeholder",
    category: "UI/UX Design",
    author: "Karan Verma",
    authorRole: "VP of Product Design",
    date: "2026-06-15",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?auto=format&fit=crop&w=600&q=80",
    tags: ["Figma", "Design System", "UI/UX", "XpertBite Design"],
  },
  {
    slug: "custom-saas-multi-tenant-architecture",
    title: "Multi-Tenant SaaS Database Architecture: Scale from 100 to 1M Users",
    excerpt: "Step-by-step playbook by XpertBite Technologies for database schema partitioning, tenant isolation, and connection pooling in SaaS apps.",
    content: "placeholder",
    category: "SaaS",
    author: "Vikram Malhotra",
    authorRole: "Solutions Architect",
    date: "2026-06-10",
    readTime: "18 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    tags: ["SaaS Architecture", "Prisma ORM", "MySQL", "Scalability"],
  },
  {
    slug: "ai-llm-integrations-nextjs-langchain",
    title: "Building Smart AI Applications: Next.js 15 & LangChain Integration Guide",
    excerpt: "Integrating custom models or OpenAI? Learn the event streaming architectures used by ExpertBite Technologies to build intelligent chatbots.",
    content: "placeholder",
    category: "AI & Data",
    author: "Priya Nair",
    authorRole: "AI/ML Specialist",
    date: "2026-06-05",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    tags: ["AI ML", "LangChain", "Next.js", "ExpertBite Technologies"],
  },
  {
    slug: "custom-erp-crm-development-operations",
    title: "Why Startups Outgrow Off-the-Shelf ERPs and How Custom CRMs Drive Growth",
    excerpt: "How tailoring your business operations workflows with custom software developments by XpertBite increases conversions.",
    content: "placeholder",
    category: "Custom Software",
    author: "Deepak Rawat",
    authorRole: "Director of Enterprise Solutions",
    date: "2026-06-01",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    tags: ["Custom CRM", "ERP Software", "XpertBite", "Workflow Automation"],
  },
  {
    slug: "aws-cloud-migrations-cost-optimizations",
    title: "AWS Cloud Migration Strategy: Reducing server bills by 40% with Serverless",
    excerpt: "A technical walkthrough of server migrations, docker configurations, and cloud cost management by ExpertBite Technologies.",
    content: "placeholder",
    category: "Cloud Solutions",
    author: "Sanjay Dutta",
    authorRole: "Lead Cloud DevOps Engineer",
    date: "2026-05-25",
    readTime: "16 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    tags: ["AWS Cloud", "DevOps", "Serverless", "Cost Optimization"],
  },
  {
    slug: "cybersecurity-compliance-startups-hipaa",
    title: "SaaS Security Checklist: Meeting HIPAA & GDPR Compliance in India",
    excerpt: "Avoid data leaks. Explore the core database encryptions, OAuth, and API security guidelines implemented by XpertBite.",
    content: "placeholder",
    category: "Security",
    author: "Kavitha Nair",
    authorRole: "Security Engineer",
    date: "2026-05-20",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    tags: ["Cybersecurity", "Compliance", "HIPAA GDPR", "Database Security"],
  },
  {
    slug: "ecommerce-fulfillment-automations-headless",
    title: "Headless E-Commerce: Accelerating Page Speed and Scaling Multi-Store Fronts",
    excerpt: "Why headless commerce Shopify structures are dominating the retail sector. Insights from ExpertBite solution squad.",
    content: "placeholder",
    category: "E-Commerce",
    author: "Rajesh Iyer",
    authorRole: "E-Commerce Architect",
    date: "2026-05-15",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    tags: ["Headless Commerce", "Shopify API", "ExpertBite E-Commerce"],
  },
  {
    slug: "dedicated-development-team-augmentation",
    title: "How Team Augmentation Solves the Technical Talent Crunch for Indian Startups",
    excerpt: "A guide to hiring dedicated developers, setting agile dashboards, and optimizing software sprint releases.",
    content: "placeholder",
    category: "Consulting",
    author: "Neha Kapoor",
    authorRole: "HR Operations Lead",
    date: "2026-05-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    tags: ["Team Augmentation", "Dedicated Developers", "Agile Sprints"],
  },
  {
    slug: "api-first-architecture-best-practices",
    title: "API-First Architecture: Building Resilient Microservices with OpenAPI Spec",
    excerpt: "Learn how to orchestrate service payloads, restrict API latencies, and automate client interfaces using XpertBite specs.",
    content: "placeholder",
    category: "Architecture",
    author: "Amit Sen",
    authorRole: "Backend Architect",
    date: "2026-05-05",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    tags: ["API-First", "Microservices", "OpenAPI", "Backend Architecture"],
  },
  {
    slug: "blockchain-smart-contracts-solidity-web3",
    title: "Web3 for Enterprise: Integrating Secure Ethereum Smart Contracts with Solidity",
    excerpt: "How decentralization transforms corporate transparency, auditing, and digital payments, analyzed by Expert Bite consulting specialists.",
    content: "placeholder",
    category: "Blockchain",
    author: "Vikas Joshi",
    authorRole: "Blockchain Engineer",
    date: "2026-04-28",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80",
    tags: ["Blockchain", "Smart Contracts", "Solidity", "Web3 Expert Bite"],
  },
  {
    slug: "automated-testing-qa-cypress-playwright",
    title: "End-to-End Automated Testing: Speeding up release cycles with Playwright",
    excerpt: "Implementing visual testing, headless assertions, and pipeline QA triggers. A guide by XpertBite Technologies squad.",
    content: "placeholder",
    category: "Quality Assurance",
    author: "Meera Nair",
    authorRole: "QA Operations Lead",
    date: "2026-04-20",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
    tags: ["Automated Testing", "QA Playwright", "Cypress E2E", "CI/CD"],
  },
  {
    slug: "data-analytics-bi-dashboards-recharts",
    title: "Interactive Data Visualization: Constructing Dashboards with Recharts & Next.js",
    excerpt: "Step-by-step layout design for custom business intelligence and visual metrics trackers by ExpertBite engineering teams.",
    content: "placeholder",
    category: "AI & Data",
    author: "Aditya Roy",
    authorRole: "Data Architect",
    date: "2026-04-15",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    tags: ["Data Visualization", "Recharts", "SaaS Analytics", "ExpertBite Data"],
  },
  {
    slug: "minimum-viable-product-mvp-launchpad",
    title: "The Lean Startup Playbook: Launching a Scalable MVP in 60 Days",
    excerpt: "Focus on validation. Discover how Expert Bite structures wireframes, scopes backlogs, and launches products fast.",
    content: "placeholder",
    category: "Consulting",
    author: "Preeti Mishra",
    authorRole: "Agile Project Manager",
    date: "2026-04-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    tags: ["MVP Development", "Lean Product", "Startup Launchpad", "Expert Bite"],
  },
  {
    slug: "healthcare-hl7-fhir-telemedicine-systems",
    title: "Building HIPAA-Compliant Telemedicine Apps: HL7 FHIR Integration Guide",
    excerpt: "Integrating healthcare records and video conferencing securely. Insights from XpertBite medical technology engineers.",
    content: "placeholder",
    category: "Healthcare",
    author: "Dr. Alok Verma",
    authorRole: "Healthcare Solutions Advisor",
    date: "2026-04-05",
    readTime: "16 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    tags: ["Telemedicine App", "HL7 FHIR Integration", "HIPAA Compliance"],
  },
  {
    slug: "payment-gateway-integrations-pci-dss",
    title: "Securing High-Volume Payments: Stripe and Razorpay Integration Guidelines",
    excerpt: "How to handle multi-currency payments, subscription retries, and ledger configurations. Playbook by ExpertBite.",
    content: "placeholder",
    category: "FinTech",
    author: "Rohan Das",
    authorRole: "FinTech Engineer",
    date: "2026-03-28",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
    tags: ["Payment Gateways", "Stripe API", "Razorpay Integration", "ExpertBite"],
  },
  {
    slug: "realtime-fleet-tracking-gps-iot-logistics",
    title: "IoT Fleet Tracking: Building Real-time GPS Route Trackers with WebSockets",
    excerpt: "Optimizing cargo dispatches and processing real-time telemetry datasets. Guide by XpertBite Technologies teams.",
    content: "placeholder",
    category: "Logistics",
    author: "Vikash Pandey",
    authorRole: "IoT Solutions Lead",
    date: "2026-03-20",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    tags: ["IoT Tracking", "WebSockets GPS", "Logistics Software", "XpertBite"],
  },
  {
    slug: "edtech-classroom-broadcasts-webrtc-hls",
    title: "Low-Latency Live Streaming: Architecting Interactive EdTech Virtual Classrooms",
    excerpt: "Orchestrating video channels and virtual canvases for virtual lessons, analyzed by Expert Bite engineering consultants.",
    content: "placeholder",
    category: "Education",
    author: "Shruti Hegde",
    authorRole: "EdTech Systems Advisor",
    date: "2026-03-15",
    readTime: "16 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    tags: ["EdTech Platform", "WebRTC Streaming", "HLS Live Broadcast", "Expert Bite"],
  },
  {
    slug: "devops-ci-cd-pipelines-github-actions-docker",
    title: "Automated Deployments: Zero-Downtime Releases with GitHub Actions and Docker",
    excerpt: "How containerized scaling prevents deployment breaks, written by the operations experts at XpertBite Technologies.",
    content: "placeholder",
    category: "Infrastructure",
    author: "Pranav Shah",
    authorRole: "VP of Cloud Operations",
    date: "2026-03-10",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
    tags: ["DevOps CI/CD", "Docker Containers", "GitHub Actions", "XpertBite Devs"],
  },
];

// ─── FAQ ─────────────────────────────────────────────────────
export interface FAQData {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQData[] = [
  {
    question: "What services does XpertBite Technologies offer?",
    answer: "We offer a comprehensive range of software development services including web development, mobile app development, UI/UX design, cloud solutions, AI & machine learning, custom software development, e-commerce solutions, SaaS development, DevOps, cybersecurity, and data analytics.",
    category: "General",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website takes 4-6 weeks, a web application 2-4 months, a mobile app 3-6 months, and enterprise solutions 6-12 months. We provide detailed timelines during the discovery phase and keep you updated throughout.",
    category: "Project",
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile development methodology with 6 phases: Discovery & Planning, UI/UX Design, Development, Quality Assurance, Deployment, and Post-Launch Support. Each phase includes client checkpoints to ensure alignment with your vision.",
    category: "Process",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely! We offer comprehensive post-launch support including bug fixes, performance monitoring, security patches, feature updates, and 24/7 emergency support. We offer flexible maintenance plans tailored to your needs.",
    category: "Support",
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, Java, React Native, Flutter, AWS, Azure, Google Cloud, PostgreSQL, MongoDB, and many more. We choose the best technology stack based on your project requirements.",
    category: "Technical",
  },
  {
    question: "How much does a project cost?",
    answer: "Project costs depend on scope, complexity, and timeline. We offer three engagement models: Fixed Price (for well-defined projects), Time & Material (for evolving requirements), and Dedicated Team (for long-term projects). Contact us for a detailed quote.",
    category: "Pricing",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, we take confidentiality very seriously. We're happy to sign NDAs before any project discussion. All our team members are bound by strict confidentiality agreements to protect your intellectual property.",
    category: "Legal",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely! We frequently augment existing development teams. Our engineers can seamlessly integrate with your team, following your workflows, tools, and coding standards. We support various collaboration models to fit your needs.",
    category: "Collaboration",
  },
];

// ─── Technologies ────────────────────────────────────────────
export interface TechnologyData {
  name: string;
  category: string;
  description: string;
  proficiency: number;
}

export const technologies: TechnologyData[] = [
  { name: "React", category: "Frontend", description: "UI component library", proficiency: 98 },
  { name: "Next.js", category: "Frontend", description: "React framework", proficiency: 97 },
  { name: "TypeScript", category: "Frontend", description: "Typed JavaScript", proficiency: 96 },
  { name: "Tailwind CSS", category: "Frontend", description: "Utility-first CSS", proficiency: 95 },
  { name: "Vue.js", category: "Frontend", description: "Progressive framework", proficiency: 88 },
  { name: "Angular", category: "Frontend", description: "Enterprise framework", proficiency: 85 },
  { name: "Node.js", category: "Backend", description: "JavaScript runtime", proficiency: 97 },
  { name: "Python", category: "Backend", description: "General purpose language", proficiency: 94 },
  { name: "Java", category: "Backend", description: "Enterprise language", proficiency: 92 },
  { name: "Spring Boot", category: "Backend", description: "Java framework", proficiency: 90 },
  { name: "Django", category: "Backend", description: "Python framework", proficiency: 89 },
  { name: "Laravel", category: "Backend", description: "PHP framework", proficiency: 87 },
  { name: "PostgreSQL", category: "Database", description: "Relational database", proficiency: 96 },
  { name: "MongoDB", category: "Database", description: "NoSQL database", proficiency: 93 },
  { name: "MySQL", category: "Database", description: "Relational database", proficiency: 94 },
  { name: "Redis", category: "Database", description: "In-memory store", proficiency: 91 },
  { name: "React Native", category: "Mobile", description: "Cross-platform mobile", proficiency: 94 },
  { name: "Flutter", category: "Mobile", description: "Google mobile SDK", proficiency: 90 },
  { name: "Swift", category: "Mobile", description: "iOS development", proficiency: 86 },
  { name: "Kotlin", category: "Mobile", description: "Android development", proficiency: 87 },
  { name: "AWS", category: "Cloud", description: "Amazon cloud services", proficiency: 95 },
  { name: "Docker", category: "DevOps", description: "Containerization", proficiency: 96 },
  { name: "Kubernetes", category: "DevOps", description: "Container orchestration", proficiency: 90 },
  { name: "Terraform", category: "DevOps", description: "Infrastructure as code", proficiency: 88 },
  { name: "TensorFlow", category: "AI/ML", description: "ML framework", proficiency: 87 },
  { name: "PyTorch", category: "AI/ML", description: "ML framework", proficiency: 86 },
  { name: "OpenAI", category: "AI/ML", description: "AI platform", proficiency: 92 },
  { name: "Figma", category: "Design", description: "Design tool", proficiency: 95 },
];

// ─── Industries ──────────────────────────────────────────────
export const industries = [
  { name: "Healthcare & Medical", icon: "🏥", description: "HIPAA-compliant healthcare solutions, telemedicine platforms, and medical device integrations.", projects: 45 },
  { name: "Finance & Banking", icon: "🏦", description: "Secure fintech applications, payment platforms, and regulatory compliance solutions.", projects: 38 },
  { name: "E-Commerce & Retail", icon: "🛒", description: "Custom online stores, marketplace platforms, and omnichannel retail solutions.", projects: 65 },
  { name: "Education & EdTech", icon: "📚", description: "Learning management systems, virtual classrooms, and educational content platforms.", projects: 42 },
  { name: "Logistics & Supply Chain", icon: "🚚", description: "Fleet management, route optimization, and real-time tracking solutions.", projects: 28 },
  { name: "Real Estate", icon: "🏠", description: "Property management, listing platforms, and virtual tour applications.", projects: 22 },
  { name: "Travel & Hospitality", icon: "✈️", description: "Booking platforms, hotel management systems, and travel experience apps.", projects: 18 },
  { name: "Manufacturing", icon: "🏭", description: "IoT-enabled factory management, quality control, and production optimization.", projects: 15 },
];

// ─── Pricing Plans ───────────────────────────────────────────
export const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for startups and small businesses getting started.",
    price: "$2,999",
    period: "starting from",
    features: [
      "Up to 10 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "CMS integration",
      "3 months support",
      "Performance optimization",
      "SSL certificate",
    ],
    notIncluded: [
      "Custom animations",
      "Advanced integrations",
      "Dedicated project manager",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses needing advanced features.",
    price: "$9,999",
    period: "starting from",
    features: [
      "Unlimited pages",
      "Custom UI/UX design",
      "Advanced SEO & analytics",
      "Payment integration",
      "User authentication",
      "Admin dashboard",
      "6 months support",
      "Performance optimization",
      "Custom animations",
      "API integrations",
      "Dedicated project manager",
    ],
    notIncluded: [
      "AI features",
    ],
    popular: true,
    cta: "Start Project",
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex requirements.",
    price: "Custom",
    period: "let's talk",
    features: [
      "Everything in Professional",
      "Custom software architecture",
      "AI/ML integration",
      "Microservices architecture",
      "24/7 premium support",
      "Dedicated development team",
      "SLA guarantee",
      "Security audits",
      "Compliance (HIPAA, PCI, SOC2)",
      "Training & documentation",
      "Priority bug fixes",
      "Quarterly reviews",
    ],
    notIncluded: [],
    popular: false,
    cta: "Contact Sales",
  },
];

// ─── Products ────────────────────────────────────────────────
export interface ProductData {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  price: string;
  status: "Live" | "Beta" | "Coming Soon";
  demoUrl?: string;
  image: string;
}

export const products: ProductData[] = [
  {
    slug: "ghartak",
    name: "GharTak",
    category: "Hyperlocal Delivery",
    tagline: "On-demand delivery app for local stores.",
    description: "A complete delivery management software with customer apps, driver app routing, real-time tracking, and merchant dashboard. Perfect for local restaurants, groceries, and courier services.",
    features: ["Merchant Dashboard", "Real-time Order Tracking", "Driver Routing & GPS", "Customer Android/iOS Apps", "Razorpay Payment Gateway", "Delivery Partner App", "Instant Settlement", "SMS Alerts (Msg91)"],
    price: "₹4,999/mo",
    status: "Live",
    demoUrl: "https://ghartak.xpertbite.in",
    image: "/images/products/taskforge.jpg",
  },
  {
    slug: "apnadukaan",
    name: "ApnaDukaan",
    category: "E-Commerce Builder",
    tagline: "Create your online shop in minutes.",
    description: "An all-in-one e-commerce builder for Indian retailers. Create catalog, accept payments via UPI & cards, manage orders, and send WhatsApp updates to customers automatically.",
    features: ["Unlimited Products", "Custom Custom Domain", "UPI & Netbanking Setup", "WhatsApp Notification API", "ONDC Network Integration", "Discount Code Engine", "Indian Tax (GST) Invoice", "Shiprocket Shipping Sync"],
    price: "₹999/mo",
    status: "Live",
    demoUrl: "https://apnadukaan.xpertbite.in",
    image: "/images/products/invoicely.jpg",
  },
  {
    slug: "lapcare",
    name: "LapCare",
    category: "Shop Management",
    tagline: "Inventory & repair tracker for computer shops.",
    description: "A specialized management software for laptop and smartphone service shops. Track customer repair status, manage parts inventory, print GST bills, and send auto SMS alerts upon service completion.",
    features: ["Repair Status Tracker", "Inventory Parts Control", "GST & Custom Invoice", "WhatsApp Status Updates", "Customer Receipt QR Code", "Technician Assignment", "Expense Tracker", "Supplier Management"],
    price: "₹1,499/mo",
    status: "Beta",
    image: "/images/products/codeaudit.jpg",
  },
  {
    slug: "lapbazaar",
    name: "LapBazaar",
    category: "Electronics E-Commerce",
    tagline: "Sell new & refurbished laptops online.",
    description: "A premium electronic commerce store template built with Next.js and Tailwind. Fully optimized for selling computers, hardware components, and accessories with detailed specifications filters.",
    features: ["Product Specifications Grid", "Advanced Filter Sidebar", "EMI Calculator Tool", "Razorpay / Paytm Checkout", "SEO Optimized Pages", "Admin Order Dashboard", "Warranty Registration", "Customer Review System"],
    price: "₹2,499/mo",
    status: "Coming Soon",
    image: "/images/products/formcraft.jpg",
  },
];

// ─── Case Studies ────────────────────────────────────────────
export const caseStudies = [
  {
    slug: "ghartak-delivery",
    title: "GharTak: Building a Hyperlocal Food & Grocery Network",
    category: "Delivery App",
    client: "GharTak India",
    challenge: "The client needed an on-demand delivery app connecting local merchants, delivery agents, and customers across Lucknow with sub-second order dispatching and live route tracking.",
    solution: "We built custom Android and iOS applications using React Native and Mapbox API for delivery routes optimization, with a central merchant dashboard and WhatsApp notification integrations.",
    technologies: ["React Native", "Node.js", "Mapbox", "AWS", "MongoDB", "Razorpay"],
    results: [
      { metric: "Monthly Orders", value: "100K+", description: "Orders completed smoothly" },
      { metric: "Delivery Speed", value: "<24 mins", description: "Average courier delivery time" },
      { metric: "Merchants", value: "500+", description: "Local food and grocery shops onboarded" },
      { metric: "Settlement Speed", value: "Instant", description: "Payment settlements to merchant partners" },
    ],
    testimonial: {
      quote: "XpertBite built a highly scalable logistics system for us. Our orders are dispatched instantly and customer satisfaction is at an all-time high.",
      author: "Alok Dwivedi",
      role: "Founder, GharTak India",
    },
    image: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "apnadukaan-marketplace",
    title: "ApnaDukaan: Helping Retailers Sell Online via ONDC",
    category: "E-Commerce",
    client: "ApnaDukaan Retail",
    challenge: "The client wanted to build a SaaS portal enabling Indian kirana stores to generate instant e-commerce links, integrate UPI checkouts, and list products on the ONDC network.",
    solution: "We developed a headless storefront architecture with automated catalogue uploads via WhatsApp bot, integrated Razorpay custom checkouts, and synced with local shipping carriers.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "ONDC Protocol", "WhatsApp Cloud API", "Razorpay"],
    results: [
      { metric: "Active Stores", value: "10,000+", description: "Indian kirana shops selling online" },
      { metric: "Daily Volume", value: "₹50 Lakhs+", description: "Transaction value processed daily" },
      { metric: "Store Creation", value: "1-Click", description: "Instant web link setup" },
      { metric: "Conversion", value: "+30%", description: "Increase in purchase conversions" },
    ],
    testimonial: {
      quote: "The ApnaDukaan platform has enabled thousands of local shop owners to accept digital payments and orders directly.",
      author: "Vikram Aditya",
      role: "Managing Director, ApnaDukaan Retail",
    },
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "lapcare-manager",
    title: "LapCare: Streamlining Computer Store Inventories",
    category: "Laptop Shop Manager",
    client: "LapCare Systems",
    challenge: "A national chain of laptop repair and refurbished sales centers needed a unified software to track service ticket status, parts stock control, and GST invoicing.",
    solution: "We built a responsive web app with barcode scanning, SMS auto-alerts for customers when repairs are ready, and multi-branch accounting reporting dashboards.",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Docker", "Msg91 API"],
    results: [
      { metric: "Branches", value: "80+", description: "Service center branches managed" },
      { metric: "Repairs Tracked", value: "50K+", description: "Monthly support tickets completed" },
      { metric: "CSAT Score", value: "95%", description: "Customer feedback satisfaction" },
      { metric: "Inventory Loss", value: "-40%", description: "Reduction in parts wastage" },
    ],
    testimonial: {
      quote: "With LapCare, our branch inventory tracking and GST calculations are automated. It has completely transformed our business operations.",
      author: "Rohan Kapoor",
      role: "COO, LapCare Systems",
    },
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "lapbazaar-estore",
    title: "LapBazaar: Premium Refurbished Electronics Store",
    category: "Laptop Sell E-Commerce",
    client: "LapBazaar India",
    challenge: "The client wanted a high-performance, SEO-friendly e-commerce store with specification comparisons, warranty registration, and bank EMI calculators for laptops.",
    solution: "We designed a modular Next.js storefront integrated with Elasticsearch for laptop specs filtering, integrated third-party loan EMI processors.",
    technologies: ["Next.js", "Tailwind CSS", "Elasticsearch", "Node.js", "AWS", "Paytm Gateway"],
    results: [
      { metric: "Load Speed", value: "3x Faster", description: "Improvement in webpage load time" },
      { metric: "Sales Growth", value: "₹2 Crores+", description: "Monthly order sales volume generated" },
      { metric: "Mobile Traffic", value: "80%", description: "Users visiting through mobile phones" },
      { metric: "EMI Checkout", value: "2 Mins", description: "Average time to purchase a laptop" },
    ],
    testimonial: {
      quote: "LapBazaar's new storefront has increased our sales by 300%. The laptop specifications compare tool is highly praised by customers.",
      author: "Sanjay Singhal",
      role: "Managing Director, LapBazaar India",
    },
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
  },
];

// ─── Clients ─────────────────────────────────────────────────
export const clients = [
  "TechCorp", "InnovateLabs", "GlobalFinance", "HealthFirst",
  "EduPro", "RetailMax", "DataStream", "CloudNine",
  "SecureNet", "GreenTech", "SmartLogix", "MediaPulse",
];

// ─── Career Openings ─────────────────────────────────────────
export interface CareerData {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const careers: CareerData[] = [
  {
    slug: "senior-fullstack-developer",
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Join our engineering team to build cutting-edge web applications using React, Next.js, and Node.js. You'll lead feature development and mentor junior developers.",
    responsibilities: [
      "Design and implement scalable web applications",
      "Collaborate with product and design teams",
      "Conduct code reviews and mentor junior developers",
      "Contribute to technical architecture decisions",
      "Optimize application performance and reliability",
    ],
    requirements: [
      "5+ years of full stack development experience",
      "Expert in React, Next.js, and TypeScript",
      "Strong backend skills with Node.js",
      "Experience with PostgreSQL and Redis",
      "Understanding of cloud services (AWS/GCP)",
    ],
    benefits: [
      "Competitive salary + equity",
      "Remote-first culture",
      "Health insurance for you & family",
      "Learning & development budget",
      "Flexible working hours",
    ],
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "We're looking for a talented UI/UX designer who can create beautiful, intuitive interfaces that users love. You'll work on diverse projects across industries.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Build and maintain design systems",
      "Collaborate closely with developers",
      "Present designs to clients and stakeholders",
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Expert in Figma and design systems",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of frontend development",
      "Excellent communication skills",
    ],
    benefits: [
      "Competitive salary",
      "Creative freedom",
      "Latest design tools & hardware",
      "Conference attendance",
      "Flexible schedule",
    ],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Help us build and maintain robust CI/CD pipelines, manage cloud infrastructure, and ensure our applications run smoothly at scale.",
    responsibilities: [
      "Design and maintain CI/CD pipelines",
      "Manage cloud infrastructure on AWS",
      "Implement monitoring and alerting systems",
      "Optimize deployment processes",
      "Ensure security best practices",
    ],
    requirements: [
      "4+ years of DevOps experience",
      "Expert in AWS, Docker, and Kubernetes",
      "Experience with Terraform or Pulumi",
      "Knowledge of monitoring tools (Datadog, Grafana)",
      "Strong Linux administration skills",
    ],
    benefits: [
      "Competitive salary",
      "100% remote",
      "AWS certification sponsorship",
      "Health benefits",
      "Annual team retreats",
    ],
  },
];

// ─── Internships ─────────────────────────────────────────────
export const internships = [
  {
    slug: "frontend-intern",
    title: "Frontend Development Intern",
    duration: "3-6 months",
    stipend: "₹15,000 - ₹25,000/month",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    description: "Learn to build production-grade web applications with React and Next.js. You'll work alongside senior developers on real client projects.",
  },
  {
    slug: "backend-intern",
    title: "Backend Development Intern",
    duration: "3-6 months",
    stipend: "₹15,000 - ₹25,000/month",
    skills: ["Node.js", "PostgreSQL", "REST APIs"],
    description: "Gain hands-on experience building APIs, managing databases, and working with cloud infrastructure in a fast-paced environment.",
  },
  {
    slug: "ui-ux-intern",
    title: "UI/UX Design Intern",
    duration: "3 months",
    stipend: "₹12,000 - ₹20,000/month",
    skills: ["Figma", "User Research", "Prototyping"],
    description: "Join our design team to learn industry-standard design processes and create beautiful interfaces for real-world applications.",
  },
];
