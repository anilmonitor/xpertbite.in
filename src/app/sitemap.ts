import { MetadataRoute } from "next";
import { services, products, portfolioItems, blogPosts } from "@/data/mock-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://xpertbite.in";
  const currentDate = new Date();

  // 1. Static Routes
  const staticRoutes = [
    "",
    "/collegeid",
    "/idcard",
    "/tiranga-idcard",
    "/idcard-v2",
    "/idcard/v2",
    "/har-ghar-tiranga",
    "/idcard-v3",
    "/raksha-bandhan",
    "/search",
    "/services",
    "/products",
    "/portfolio",
    "/blog",
    "/technologies",
    "/process",
    "/clients",
    "/testimonials",
    "/pricing",
    "/contact",
    "/request-quote",
    "/faq",
    "/support",
    "/privacy-policy",
    "/terms",
    "/refund-policy",
    "/shipping-policy",
    "/cookie-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority:
      route === ""
        ? 1.0
        : [
            "/collegeid",
            "/idcard",
            "/tiranga-idcard",
            "/idcard-v2",
            "/idcard/v2",
            "/har-ghar-tiranga",
            "/idcard-v3",
            "/raksha-bandhan",
          ].includes(route)
        ? 0.9
        : 0.8,
  }));

  // 2. Dynamic Service Routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 3. Dynamic Product Routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 4. Dynamic Portfolio Routes
  const portfolioRoutes = portfolioItems.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 5. Dynamic Blog Routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...portfolioRoutes,
    ...blogRoutes,
  ];
}
