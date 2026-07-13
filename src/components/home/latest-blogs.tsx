"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { blogPosts } from "@/data/mock-data";

export function LatestBlogs() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            badge="Blog"
            title="Latest Insights & Articles"
            subtitle="Stay updated with the latest trends, tutorials, and insights from our engineering team."
          />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latest.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full"
              >
                <div className="h-full rounded-2xl border bg-card overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-heading font-bold gradient-text opacity-20">
                        {post.category.slice(0, 3)}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="default" className="backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Author + CTA */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-xs font-medium">{post.author}</span>
                      </div>
                      <span className="text-xs font-medium text-primary flex items-center gap-1">
                        Read
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal animation="fade-up" delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
