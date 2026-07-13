"use client";

import Link from "next/link";
import { useState } from "react";
import { Send, Github, Linkedin, Twitter, Instagram, Facebook, Youtube, MapPin, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { COMPANY, FOOTER_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    // Will connect to server action later
    setEmail("");
  };

  const socialLinks = [
    { icon: Github, href: COMPANY.social.github, label: "GitHub" },
    { icon: Linkedin, href: COMPANY.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: COMPANY.social.twitter, label: "Twitter" },
    { icon: Instagram, href: COMPANY.social.instagram, label: "Instagram" },
    { icon: Facebook, href: COMPANY.social.facebook, label: "Facebook" },
    { icon: Youtube, href: COMPANY.social.youtube, label: "YouTube" },
  ];

  return (
    <footer className="relative bg-secondary text-white dark:bg-background dark:border-t">
      {/* Gradient top border */}
      <div className="h-px gradient-primary w-full" />

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-heading font-bold mb-2">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-white/60 dark:text-muted-foreground">
                Get the latest insights, tutorials, and company updates delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletter} className="flex gap-2 w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary"
                required
              />
              <Button type="submit" variant="gradient" className="shrink-0">
                <Send className="h-4 w-4 mr-1" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">X</span>
              </div>
              <span className="font-heading font-bold text-xl">
                <span className="text-primary">Xpert</span>
                <span className="text-white dark:text-foreground">Bite</span>
              </span>
            </Link>
            <p className="text-white/60 dark:text-muted-foreground text-sm mb-6 max-w-xs">
              {COMPANY.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-white/60 dark:text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div className="space-y-1.5 leading-relaxed">
                  <p>
                    <span className="font-semibold text-white/80 dark:text-foreground">Garhwa Office:</span> {COMPANY.addresses.garhwa}
                  </p>
                  <p>
                    <span className="font-semibold text-white/80 dark:text-foreground">Bangalore Office:</span> {COMPANY.addresses.bangalore}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">{COMPANY.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-primary transition-colors">{COMPANY.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>{COMPANY.workingHours}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white dark:text-foreground">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 dark:text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50 dark:text-muted-foreground">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p>
                © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
              </p>
              <div className="hidden md:block h-4 w-px bg-white/10 dark:bg-border" />
              <a
                href="https://qubitara.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors group py-1 md:py-0"
              >
                <span>Powered by</span>
                <img
                  src="/logos/qubitara_Logo.png"
                  alt="Qubitara Logo"
                  className="h-5 w-auto object-contain brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
                />
                <span className="font-semibold text-white/80 dark:text-foreground/80 group-hover:text-primary transition-colors">Qubitara</span>
              </a>
            </div>


            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
