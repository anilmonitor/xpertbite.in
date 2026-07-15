"use client";

import { useState } from "react";
import { products } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function AdminProductsPage() {
  const [list, setList] = useState(products);

  const handleDelete = (slug: string) => {
    setList(list.filter((item) => item.slug !== slug));
    toast.success("Product showcase item removed successfully.");
  };

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-heading">Manage Products</h1>
            <p className="text-sm text-muted-foreground">Configure the active SaaS product showcase listing.</p>
          </div>
          <Button variant="gradient" size="sm" onClick={() => toast.info("Add new product functionality is currently in development.")}>
            <Plus className="h-4 w-4 mr-1" /> Add Product
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="border rounded-2xl bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/40 border-b text-sm font-semibold text-muted-foreground">
                  <th className="p-4">Product Info</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Pricing</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {list.map((product) => (
                  <tr key={product.slug} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-foreground">{product.name}</div>
                      <div className="text-xs text-muted-foreground">{product.tagline}</div>
                    </td>
                    <td className="p-4">{product.category}</td>
                    <td className="p-4 font-mono font-medium">{product.price}</td>
                    <td className="p-4">
                      <Badge variant={product.status === "Live" ? "default" : "secondary"}>
                        {product.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info("Editing item...")}>
                        <Edit2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10" onClick={() => handleDelete(product.slug)}>
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
  );
}

