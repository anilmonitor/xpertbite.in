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
    slug: "fintech-banking-platform",
    title: "FinVault — Digital Banking Platform",
    category: "FinTech",
    description: "A comprehensive digital banking platform with real-time payments, portfolio management, and AI-powered financial insights for a leading fintech startup.",
    client: "FinVault Inc.",
    duration: "8 months",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe", "Redis"],
    challenge: "The client needed a secure, scalable digital banking platform that could handle 100K+ concurrent transactions while maintaining PCI DSS compliance.",
    solution: "We built a microservices architecture with event-driven processing, implemented end-to-end encryption, and deployed on AWS with auto-scaling capabilities.",
    results: ["150K+ active users in first year", "99.99% uptime achieved", "40% reduction in transaction processing time", "PCI DSS Level 1 certified"],
    liveUrl: "https://finvault.example.com",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "healthcare-management-system",
    title: "MediCore — Healthcare Management",
    category: "Healthcare",
    description: "An integrated healthcare management system connecting patients, doctors, and pharmacies with telemedicine capabilities and AI diagnostics.",
    client: "MediCore Health",
    duration: "10 months",
    technologies: ["React", "Python", "Django", "TensorFlow", "PostgreSQL", "Docker"],
    challenge: "Building a HIPAA-compliant platform that integrates with existing hospital systems while providing real-time telemedicine and AI-assisted diagnostics.",
    solution: "We developed a modular platform with HL7 FHIR integration, WebRTC-based video consultations, and ML models for preliminary diagnostics screening.",
    results: ["50+ hospitals onboarded", "1M+ patient records managed", "30% reduction in diagnosis time", "HIPAA compliant"],
    liveUrl: "https://medicore.example.com",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "ecommerce-marketplace",
    title: "ShopNest — Multi-Vendor Marketplace",
    category: "E-Commerce",
    description: "A feature-rich multi-vendor e-commerce marketplace with AI-powered product recommendations, real-time inventory sync, and automated fulfillment.",
    client: "ShopNest Global",
    duration: "6 months",
    technologies: ["Next.js", "Node.js", "MongoDB", "Elasticsearch", "Stripe", "AWS"],
    challenge: "Creating a scalable multi-vendor marketplace that could handle millions of products with real-time search and personalized recommendations.",
    solution: "We built a headless commerce architecture with Elasticsearch for lightning-fast search, ML-based recommendation engine, and automated vendor onboarding.",
    results: ["500+ vendors onboarded", "2M+ products listed", "35% increase in conversion rate", "Sub-100ms search response"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "edtech-learning-platform",
    title: "LearnHub — EdTech Platform",
    category: "Education",
    description: "An interactive online learning platform with live classes, course management, progress tracking, and gamification elements.",
    client: "LearnHub Education",
    duration: "7 months",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "WebRTC", "Redis"],
    challenge: "Building a platform that supports 10K+ simultaneous live class participants with low latency and interactive features like polls and whiteboards.",
    solution: "We implemented a hybrid architecture using WebRTC for peer-to-peer connections and HLS for large broadcasts, with Redis-backed real-time features.",
    results: ["100K+ students enrolled", "5K+ courses published", "92% student satisfaction rate", "4.8/5 App Store rating"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "logistics-tracking-system",
    title: "TrackFlow — Logistics Platform",
    category: "Logistics",
    description: "A real-time logistics and fleet management platform with route optimization, predictive ETAs, and automated dispatch system.",
    client: "TrackFlow Logistics",
    duration: "9 months",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "Google Maps", "IoT"],
    challenge: "Building a real-time tracking system for 5000+ vehicles with predictive ETAs and automated route optimization considering traffic, weather, and load factors.",
    solution: "We developed an IoT-integrated platform with ML-based route optimization, real-time GPS tracking, and automated dispatch algorithms.",
    results: ["5000+ vehicles tracked", "25% fuel cost reduction", "40% faster deliveries", "Real-time visibility for customers"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "saas-project-management",
    title: "TaskForge — Project Management SaaS",
    category: "SaaS",
    description: "A modern project management SaaS with Kanban boards, time tracking, resource management, and AI-powered project insights.",
    client: "TaskForge Inc.",
    duration: "12 months",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Vercel"],
    challenge: "Creating a multi-tenant SaaS platform that rivals established tools like Jira and Asana with better UX and AI-powered automation.",
    solution: "We built a fast, modern platform with real-time collaboration using WebSockets, AI-powered task prioritization, and a flexible plugin architecture.",
    results: ["10K+ teams using the platform", "$2M ARR in first year", "4.9/5 G2 rating", "Featured on Product Hunt #1"],
    liveUrl: "https://taskforge.example.com",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
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
    name: "Sarah Mitchell",
    role: "CTO",
    company: "FinVault Inc.",
    content: "XpertBite transformed our fintech vision into reality. Their deep technical expertise and commitment to quality resulted in a banking platform that our users love. The team's ability to handle complex compliance requirements while delivering an intuitive UX was truly impressive.",
    rating: 5,
    avatar: "/images/avatars/avatar-1.jpg",
  },
  {
    name: "James Rodriguez",
    role: "CEO",
    company: "ShopNest Global",
    content: "Working with XpertBite was a game-changer for our business. They built our marketplace from scratch, and the results speak for themselves — 500+ vendors, millions of products, and a 35% increase in conversion rates. Their strategic thinking sets them apart.",
    rating: 5,
    avatar: "/images/avatars/avatar-2.jpg",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Director of Technology",
    company: "MediCore Health",
    content: "The healthcare platform XpertBite built for us has revolutionized how we deliver care. Their attention to security, compliance, and user experience was exceptional. The AI diagnostic features have genuinely improved patient outcomes.",
    rating: 5,
    avatar: "/images/avatars/avatar-3.jpg",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "TaskForge Inc.",
    content: "XpertBite didn't just build our SaaS product — they became our technical partners. Their architectural decisions were spot-on, allowing us to scale from 0 to 10K teams without a hitch. Best investment we ever made.",
    rating: 5,
    avatar: "/images/avatars/avatar-4.jpg",
  },
  {
    name: "Anika Patel",
    role: "VP of Engineering",
    company: "LearnHub Education",
    content: "The quality of code and architecture from XpertBite is unmatched. Our learning platform handles thousands of live sessions simultaneously without breaking a sweat. Their team is responsive, skilled, and genuinely cares about the product.",
    rating: 5,
    avatar: "/images/avatars/avatar-5.jpg",
  },
  {
    name: "David Kim",
    role: "COO",
    company: "TrackFlow Logistics",
    content: "XpertBite's logistics platform reduced our operational costs by 25% and improved delivery times by 40%. Their IoT integration expertise and real-time tracking capabilities have given us a massive competitive advantage.",
    rating: 5,
    avatar: "/images/avatars/avatar-6.jpg",
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
    slug: "taskforge",
    name: "TaskForge",
    category: "Project Management",
    tagline: "Project management, reimagined.",
    description: "A modern project management platform with AI-powered task prioritization, real-time collaboration, and beautiful Kanban boards. Built for teams that ship fast.",
    features: ["AI Task Prioritization", "Kanban & Sprint Boards", "Time Tracking", "Resource Management", "Gantt Charts", "Real-time Collaboration", "Automated Workflows", "Custom Dashboards"],
    price: "$12/user/mo",
    status: "Live",
    demoUrl: "https://taskforge.xpertbite.in",
    image: "/images/products/taskforge.jpg",
  },
  {
    slug: "invoicely",
    name: "Invoicely",
    category: "Finance",
    tagline: "Smart invoicing for modern businesses.",
    description: "Generate professional invoices, track payments, manage expenses, and get financial insights — all in one beautiful application.",
    features: ["Invoice Generation", "Payment Tracking", "Expense Management", "Financial Reports", "Multi-Currency", "Tax Calculations", "Client Portal", "Recurring Invoices"],
    price: "$8/mo",
    status: "Live",
    demoUrl: "https://invoicely.xpertbite.in",
    image: "/images/products/invoicely.jpg",
  },
  {
    slug: "codeaudit",
    name: "CodeAudit",
    category: "Developer Tools",
    tagline: "AI-powered code review & security analysis.",
    description: "Automatically detect bugs, security vulnerabilities, and code quality issues across your entire codebase. Integrates with GitHub, GitLab, and Bitbucket.",
    features: ["AI Code Review", "Security Scanning", "Performance Analysis", "Tech Debt Tracking", "CI/CD Integration", "Custom Rules", "Team Analytics", "Auto-Fix Suggestions"],
    price: "$29/repo/mo",
    status: "Beta",
    image: "/images/products/codeaudit.jpg",
  },
  {
    slug: "formcraft",
    name: "FormCraft",
    category: "No-Code",
    tagline: "Build forms that convert.",
    description: "A drag-and-drop form builder with conditional logic, file uploads, payment collection, and analytics. No coding required.",
    features: ["Drag & Drop Builder", "Conditional Logic", "File Uploads", "Payment Collection", "Analytics Dashboard", "Email Notifications", "Webhook Integration", "Custom Themes"],
    price: "Free / $19/mo Pro",
    status: "Coming Soon",
    image: "/images/products/formcraft.jpg",
  },
];

// ─── Case Studies ────────────────────────────────────────────
export const caseStudies = [
  {
    slug: "finvault-digital-banking",
    title: "FinVault: Revolutionizing Digital Banking",
    category: "FinTech",
    client: "FinVault Inc.",
    challenge: "FinVault needed to build a digital banking platform from scratch that could handle 100K+ concurrent transactions, maintain PCI DSS compliance, and deliver a consumer-grade UX in a highly regulated industry.",
    solution: "We designed a microservices architecture with event sourcing and CQRS patterns. The platform uses end-to-end encryption, multi-factor authentication, and real-time fraud detection powered by machine learning.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Kubernetes", "Redis"],
    results: [
      { metric: "Active Users", value: "150K+", description: "Users acquired in the first year" },
      { metric: "Uptime", value: "99.99%", description: "System reliability achieved" },
      { metric: "Transaction Speed", value: "40%", description: "Faster processing vs. industry average" },
      { metric: "Compliance", value: "PCI L1", description: "Highest security certification" },
    ],
    testimonial: {
      quote: "XpertBite transformed our fintech vision into reality. The platform handles millions in transactions daily without a single security incident.",
      author: "Sarah Mitchell",
      role: "CTO, FinVault Inc.",
    },
    image: "/images/case-studies/finvault.jpg",
  },
  {
    slug: "shopnest-marketplace",
    title: "ShopNest: Building a Multi-Vendor Empire",
    category: "E-Commerce",
    client: "ShopNest Global",
    challenge: "ShopNest needed a marketplace that could scale to millions of products, support 500+ vendors, and provide a search experience rivaling Amazon — all within 6 months.",
    solution: "We built a headless commerce architecture with Elasticsearch for sub-100ms search, an ML-based recommendation engine, and automated vendor onboarding with real-time inventory synchronization.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Elasticsearch", "AWS", "Stripe"],
    results: [
      { metric: "Vendors", value: "500+", description: "Active sellers on the platform" },
      { metric: "Products", value: "2M+", description: "Listed across all categories" },
      { metric: "Conversion", value: "+35%", description: "Increase in purchase conversion" },
      { metric: "Search Speed", value: "<100ms", description: "Average search response time" },
    ],
    testimonial: {
      quote: "The marketplace XpertBite built exceeded every expectation. Our vendors love the dashboard, and customers can't stop shopping.",
      author: "James Rodriguez",
      role: "CEO, ShopNest Global",
    },
    image: "/images/case-studies/shopnest.jpg",
  },
  {
    slug: "medicore-healthcare",
    title: "MediCore: Transforming Healthcare Delivery",
    category: "Healthcare",
    client: "MediCore Health",
    challenge: "MediCore needed a HIPAA-compliant platform connecting patients, doctors, and pharmacies with telemedicine, AI diagnostics, and seamless EHR integration across 50+ hospitals.",
    solution: "We developed a modular platform with HL7 FHIR integration for EHR interoperability, WebRTC-based video consultations, and TensorFlow-powered diagnostic screening models.",
    technologies: ["React", "Python", "Django", "TensorFlow", "PostgreSQL", "Docker"],
    results: [
      { metric: "Hospitals", value: "50+", description: "Healthcare facilities onboarded" },
      { metric: "Patient Records", value: "1M+", description: "Securely managed records" },
      { metric: "Diagnosis Time", value: "-30%", description: "Reduction in average diagnosis time" },
      { metric: "Compliance", value: "HIPAA", description: "Full healthcare compliance" },
    ],
    testimonial: {
      quote: "The platform has genuinely improved patient outcomes. XpertBite understood healthcare complexities like no other team we've worked with.",
      author: "Dr. Priya Sharma",
      role: "Director of Technology, MediCore Health",
    },
    image: "/images/case-studies/medicore.jpg",
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
