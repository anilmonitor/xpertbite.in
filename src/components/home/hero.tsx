"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

export function Hero() {
  return (
    <section className="relative min-h-fit lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-10 lg:py-0">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-glow" />

      {/* Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-[80%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-0 bottom-0 left-[20%] w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 bottom-0 right-[20%] w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-6 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200 dark:border-primary/20 mb-6 max-w-[280px] sm:max-w-md mx-auto lg:mx-0 overflow-hidden relative shadow-sm"
            >
              <div className="flex items-center gap-1.5 shrink-0 z-10 bg-slate-100/95 dark:bg-slate-900/95 pr-2 border-r border-border/40 font-semibold text-[10px] text-emerald-600 dark:text-emerald-500 uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                Live
              </div>
              <div className="w-[180px] sm:w-[300px] overflow-hidden whitespace-nowrap text-[11px] font-medium text-muted-foreground select-none">
                <Marquee duration="25s" pauseOnHover={false} repeat={2} gap="2rem">
                  <span className="inline-flex items-center gap-1.5">
                    Someone from Mumbai is consulting for a new project...
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    A client from Bangalore scheduled a call...
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    Someone from Delhi is reviewing GharTak Delivery App...
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    A business owner from Hyderabad is estimating budget...
                  </span>
                </Marquee>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-[1.15] mb-6 text-balance"
            >
              Transforming Ideas Into{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Digital Reality</span>
                <motion.span
                  className="absolute -bottom-1.5 left-0 right-0 h-1 gradient-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 text-balance"
            >
              We are a leading software development company crafting world-class web applications, 
              mobile apps, and enterprise solutions that drive business growth and innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 mb-10"
            >
              <Button variant="gradient" size="xl" asChild>
                <Link href="/contact" className="group justify-center">
                  Start Your Project
                  <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-2 border-primary/20 hover:border-primary/60 bg-transparent text-primary hover:text-primary hover:bg-primary/5 transition-all duration-300" asChild>
                <Link href="/products" className="group justify-center flex items-center font-bold text-primary hover:text-primary">
                  <Play className="h-4 w-4 mr-1.5 fill-current" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 flex-wrap"
            >
              <span className="text-xs font-semibold text-muted-foreground mr-1 uppercase tracking-wider">Built with</span>
              {["React", "Next.js", "Node.js", "Python", "AWS", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-muted/60 text-muted-foreground border border-border/40 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Dynamic Editor Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-40 lg:opacity-50" />
            
            {/* Code Window */}
            <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950/80 backdrop-blur-xl p-4 lg:p-5 shadow-2xl overflow-hidden font-mono text-left max-w-sm lg:max-w-lg mx-auto">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-white/40">xpertbite-config.ts</div>
              </div>
              <div className="space-y-1.5 text-[11px] lg:text-xs text-slate-300">
                <div><span className="text-pink-500">import</span> &#123; <span className="text-blue-400">XpertBite</span> &#125; <span className="text-pink-500">from</span> <span className="text-green-400">"@/core"</span>;</div>
                <div>&nbsp;</div>
                <div><span className="text-pink-500">const</span> <span className="text-purple-400">project</span> = <span className="text-blue-400">XpertBite</span>.<span className="text-yellow-400">create</span>(&#123;</div>
                <div>&nbsp;&nbsp;name: <span className="text-green-400">"XpertBite Technologies"</span>,</div>
                <div>&nbsp;&nbsp;stack: [<span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"Node"</span>],</div>
                <div>&nbsp;&nbsp;speed: <span className="text-orange-400">"sub-100ms"</span>,</div>
                <div>&nbsp;&nbsp;scalability: <span className="text-orange-400">"unlimited"</span>,</div>
                <div>&nbsp;&nbsp;seoOptimized: <span className="text-orange-400">true</span></div>
                <div>&#125;);</div>
                <div>&nbsp;</div>
                <div><span className="text-blue-400">project</span>.<span className="text-yellow-400">buildReality</span>();</div>
              </div>
            </div>

            {/* Overlapping Glass Analytics Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-6 -left-4 lg:-left-8 p-3 lg:p-4 rounded-xl border border-slate-200 dark:border-border/60 bg-card/90 backdrop-blur-xl shadow-2xl max-w-[160px] lg:max-w-[200px] hidden sm:block"
            >
              <div className="text-[10px] lg:text-xs text-muted-foreground font-medium mb-1">Project Growth</div>
              <div className="text-xl lg:text-2xl font-bold font-heading text-primary">+250%</div>
              <div className="h-8 lg:h-10 w-full mt-2 lg:mt-3 flex items-end gap-1">
                <div className="w-full bg-primary/20 rounded-t h-4" />
                <div className="w-full bg-primary/40 rounded-t h-6" />
                <div className="w-full bg-primary/60 rounded-t h-8" />
                <div className="w-full bg-primary rounded-t h-10" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
