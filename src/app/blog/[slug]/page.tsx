import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/mock-data";
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getFullBlogContent } from "@/data/blog-contents";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = blogPosts.find((i) => i.slug === slug);
  if (!p) return { title: "Post Not Found" };
  return { title: p.title, description: p.excerpt };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2);

  const renderTextWithBold = (text: string) => {
    const normalized = text.replaceAll("***", "**");
    const parts = normalized.split("**");
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} className="font-semibold text-foreground">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <PublicLayout>
      <article className="py-16">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>

          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">{post.title}</h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">{post.author.charAt(0)}</div>
                  <div>
                    <div className="font-medium text-sm">{post.author}</div>
                    <div className="text-xs text-muted-foreground">{post.authorRole}</div>
                  </div>
                </div>
                <Separator orientation="vertical" className="h-8" />
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Featured Image */}
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden border mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/5" />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12 space-y-6 text-muted-foreground leading-relaxed">
              {getFullBlogContent(post.slug)
                .split("\n\n")
                .map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  
                  if (trimmed === "---") {
                    return <Separator key={index} className="my-8" />;
                  }

                  // Simple dynamic markdown renderer
                  if (trimmed.startsWith("|")) {
                    const rows = trimmed.split("\n").map(r => r.trim()).filter(Boolean);
                    const tableRows = rows.filter(row => !row.includes("---"));
                    
                    return (
                      <div key={index} className="overflow-x-auto my-6 rounded-xl border bg-card/50">
                        <table className="min-w-full divide-y border-collapse text-left">
                          {tableRows.map((row, rowIndex) => {
                            const cells = row.split("|").map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);
                            if (rowIndex === 0) {
                              return (
                                <thead key={rowIndex} className="bg-muted/50">
                                  <tr>
                                    {cells.map((cell, cellIndex) => (
                                      <th key={cellIndex} className="px-4 py-3 text-xs md:text-sm font-semibold text-foreground border-b border-r last:border-r-0 border-border">
                                        {renderTextWithBold(cell)}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                              );
                            }
                            return (
                              <tbody key={rowIndex} className="divide-y divide-border">
                                <tr className="hover:bg-muted/30 transition-colors odd:bg-muted/5">
                                  {cells.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="px-4 py-3 text-xs md:text-sm border-r last:border-r-0 border-border">
                                      {renderTextWithBold(cell)}
                                    </td>
                                  ))}
                                </tr>
                              </tbody>
                            );
                          })}
                        </table>
                      </div>
                    );
                  }

                  if (trimmed.startsWith("```")) {
                    const code = trimmed.replace(/^```[a-zA-Z]*/, "").replace(/```$/, "").trim();
                    return (
                      <pre key={index} className="p-4 rounded-xl bg-slate-950 dark:bg-slate-900/60 text-slate-100 dark:text-slate-200 font-mono text-xs md:text-sm overflow-x-auto my-6 border border-border">
                        <code>{code}</code>
                      </pre>
                    );
                  }

                  if (trimmed.startsWith("# ")) {
                    return <h1 key={index} className="text-3xl md:text-4xl font-bold font-heading text-foreground mt-8 mb-4">{renderTextWithBold(trimmed.replace("# ", ""))}</h1>;
                  }
                  if (trimmed.startsWith("## ")) {
                    return <h2 key={index} className="text-2xl md:text-3xl font-bold font-heading text-foreground mt-8 mb-4">{renderTextWithBold(trimmed.replace("## ", ""))}</h2>;
                  }
                  if (trimmed.startsWith("### ")) {
                    return <h3 key={index} className="text-xl md:text-2xl font-bold font-heading text-foreground mt-6 mb-3">{renderTextWithBold(trimmed.replace("### ", ""))}</h3>;
                  }
                  if (trimmed.startsWith("- ")) {
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                        {trimmed.split("\n").map((li, i) => (
                          <li key={i}>{renderTextWithBold(li.replace("- ", "").trim())}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={index} className="text-base md:text-lg">{renderTextWithBold(trimmed)}</p>;
                })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (<Badge key={tag} variant="secondary">{tag}</Badge>))}
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border">
              <Share2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Share this article:</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8"><Twitter className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8"><Linkedin className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="max-w-3xl mx-auto mt-16">
              <h3 className="text-2xl font-heading font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group p-4 rounded-xl border bg-card hover:shadow-md transition-all">
                    <Badge className="mb-2">{r.category}</Badge>
                    <h4 className="font-heading font-bold group-hover:text-primary transition-colors line-clamp-2">{r.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{r.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </PublicLayout>
  );
}
