// ─── Company Information ─────────────────────────────────────
export const COMPANY = {
  name: "XpertBite Technologies",
  shortName: "XpertBite",
  tagline: "Transforming Ideas Into Digital Reality",
  description:
    "We are a leading software development company specializing in building world-class web applications, mobile apps, and enterprise solutions that drive business growth.",
  url: "https://xpertbite.in",
  email: "xpertbite@gmail.com",
  supportEmail: "xpertbite@gmail.com",
  phone: "+91 74881 68228",
  alternatePhone: "+91 74881 68228",
  addresses: {
    garhwa: "Garhwa, Jharkhand - 822114",
    bangalore: "Bangalore, Karnataka, India",
  },
  workingHours: "Mon - Fri: 9:00 AM - 6:00 PM IST",
  foundedYear: 2017,
  social: {
    github: "https://github.com/xpertbite",
    linkedin: "https://linkedin.com/company/xpertbite",
    twitter: "https://twitter.com/xpertbite",
    instagram: "https://instagram.com/xpertbite",
    facebook: "https://facebook.com/xpertbite",
    youtube: "https://youtube.com/@xpertbite",
  },
} as const;

// ─── Brand Colors ────────────────────────────────────────────
export const BRAND = {
  primary: "#4f46e5",
  secondary: "#0F172A",
  accent: "#6366f1",
} as const;

// ─── Statistics ──────────────────────────────────────────────
export const STATS = [
  { label: "Years Experience", value: 8, suffix: "+" },
  { label: "Projects Completed", value: 10, suffix: "k+", },
  { label: "Happy Clients", value: 800, suffix: "+" },
  { label: "Secure & Encrypted", value: 100, suffix: "%" },
] as const;

// ─── Navigation ──────────────────────────────────────────────
export const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development", description: "Custom web applications built with modern technologies" },
      { label: "Mobile App Development", href: "/services/mobile-app-development", description: "Native & cross-platform mobile applications" },
      { label: "UI/UX Design", href: "/services/ui-ux-design", description: "User-centered design that drives engagement" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions", description: "Scalable cloud infrastructure & migration" },
      { label: "AI & Machine Learning", href: "/services/ai-development", description: "Intelligent solutions powered by AI/ML" },
      { label: "Custom Software", href: "/services/custom-software", description: "Tailored solutions for your unique needs" },
    ],
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", description: "Our story, mission, and values" },
      { label: "Case Studies", href: "/case-studies", description: "In-depth project breakdowns" },
      { label: "Technologies", href: "/technologies", description: "Our tech stack expertise" },
      { label: "Our Process", href: "/process", description: "How we deliver excellence" },
      { label: "Careers", href: "/careers", description: "Join our growing team" },
    ],
  },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog", description: "Insights, tutorials, and updates" },
      { label: "Tiranga ID Card (V1) 🇮🇳", href: "/idcard", description: "Step-by-step Har Ghar Tiranga ID Card Guide" },
      { label: "Tiranga ID Card (V2) ✨", href: "/tiranga-idcard", description: "Online Photo ID Card Maker 2026" },
      { label: "Industries", href: "/industries", description: "Sectors we serve" },
      { label: "Testimonials", href: "/testimonials", description: "What our clients say" },
      { label: "FAQ", href: "/faq", description: "Frequently asked questions" },
      { label: "Support", href: "/support", description: "Get help when you need it" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

// ─── Footer Navigation ──────────────────────────────────────
export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Technologies", href: "/technologies" },
    { label: "Our Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Tiranga ID Card (V1) 🇮🇳", href: "/idcard" },
    { label: "Tiranga ID Card (V2) ✨", href: "/tiranga-idcard" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Industries", href: "/industries" },
    { label: "Career", href: "/careers" },
    { label: "Internships", href: "/internships" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Clients", href: "/clients" },
    { label: "Support", href: "/support" },
    { label: "Book Consultation", href: "/book-consultation" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Cancellation Policy", href: "/cancellation-policy" },
  ],
} as const;
