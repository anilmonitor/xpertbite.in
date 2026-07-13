"use client";

import { useState } from "react";
import AdminLayout from "@/app/admin/layout";
import { blogPosts } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function AdminBlogsPage() {
  const [list, setList] = useState(blogPosts);

  const handleDelete = (slug: string) => {
    setList(list.filter((item) => item.slug !== slug));
    toast.success("Blog post removed successfully.");
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <ScrollReveal>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold font-heading">Manage Blogs</h1>
              <p className="text-sm text-muted-foreground">Create and curate technical articles or corporate insights.</p>
            </div>
            <Button variant="gradient" size="sm" onClick={() => toast.info("Add new blog post functionality is currently in development.")}>
              <Plus className="h-4 w-4 mr-1" /> New Post
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border rounded-2xl bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/40 border-b text-sm font-semibold text-muted-foreground">
                    <th className="p-4">Article Title</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Author</th>
                    <th className="p-4">Publish Date</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {list.map((post) => (
                    <tr key={post.slug} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4">
                        <div className="font-semibold text-foreground max-w-sm truncate">{post.title}</div>
                        <div className="text-xs text-muted-foreground">{post.readTime}</div>
                      </td>
                      <td className="p-4">
                        <Badge>{post.category}</Badge>
                      </td>
                      <td className="p-4 text-muted-foreground">{post.author}</td>
                      <td className="p-4 font-mono">{post.date}</td>
                      <td className="p-4 text-right space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info("Editing item...")}>
                          <Edit2 className="h-4 w-4 text-muted-foreground" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10" onClick={() => handleDelete(post.slug)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </AdminLayout>
  );
}
