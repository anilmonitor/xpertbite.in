import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { FeaturedServices } from "@/components/home/featured-services";
import { ProductsShowcase } from "@/components/home/products-showcase";
import { TechStack } from "@/components/home/tech-stack";
import { Process } from "@/components/home/process";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { Testimonials } from "@/components/home/testimonials";
import { TrustedCompanies } from "@/components/home/trusted-companies";
import { LatestBlogs } from "@/components/home/latest-blogs";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <FeaturedServices />
        <ProductsShowcase />
        <TechStack />
        <Process />
        <PortfolioPreview />
        <Testimonials />
        <TrustedCompanies />
        <LatestBlogs />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
