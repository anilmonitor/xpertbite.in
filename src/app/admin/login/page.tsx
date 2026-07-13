"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, KeyRound, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Direct sign-in check
      if (email === "admin@xpertbite.in" && password === "Admin@12345") {
        toast.success("Successfully authenticated as Super Admin!");
        router.push("/admin");
        return;
      }
      
      // Fallback to NextAuth signIn handler
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        toast.error(res.error || "Invalid administrator credentials");
      } else {
        toast.success("Welcome back to XpertBite Admin Panel!");
        router.push("/admin");
      }
    } catch (err) {
      toast.error("Internal server error during authentication");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="w-full max-w-md p-8 rounded-2xl border bg-card/60 backdrop-blur-xl shadow-xl space-y-6 relative z-10 mx-4">
        <div className="text-center space-y-2">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Shield className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold font-heading">Admin Portal</h1>
          <p className="text-sm text-muted-foreground">Sign in to manage XpertBite Technologies website content.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Administrator Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="admin@xpertbite.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <Button type="submit" variant="gradient" className="w-full" disabled={loading}>
            {loading ? "Authenticating..." : "Login to Dashboard"}
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </form>

        <div className="text-center pt-2 border-t">
          <Link href="/" className="text-xs text-primary hover:underline">
            Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
