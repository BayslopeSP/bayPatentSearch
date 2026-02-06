import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, Brain, Globe2, Sparkles } from "lucide-react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#2C3531] via-[#116466] to-[#2C3531] text-[#D1E8E2]">
      {/* Top nav */}
      <header className="w-full border-b border-white/10 bg-black/10 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="text-xl font-semibold tracking-wide">
            <span className="text-[#FFCB9A]">Bay</span>PatentSearch
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a
              href="#how-it-works"
              className="hover:text-[#FFCB9A] transition-colors"
            >
              How it works
            </a>
            <a
              href="#features"
              className="hover:text-[#FFCB9A] transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="hover:text-[#FFCB9A] transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden rounded-full border border-[#D1E8E2]/40 px-4 py-1.5 text-sm md:inline-flex hover:border-[#FFCB9A] hover:text-[#FFCB9A] transition-colors"
            >
              Login
            </a>
            <a
              href="/login"
              className="inline-flex items-center gap-2 rounded-full bg-[#116466] px-4 py-1.5 text-sm font-medium shadow-[0_0_20px_rgba(17,100,102,0.8)] hover:bg-[#0e4e52] transition-colors"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-10 md:flex-row md:items-center">
        {/* Left text */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D9B08C]/40 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em]">
            <Sparkles className="h-3 w-3 text-[#FFCB9A]" />
            <span className="text-[#FFCB9A]">AI Powered</span>
            <span className="text-[#D1E8E2]/70">Patent Intelligence</span>
          </div>

          <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            Discover patents with
            <span className="block text-[#FFCB9A]">semantic AI search.</span>
          </h1>

          <p className="max-w-xl text-sm text-[#D1E8E2]/80 md:text-base">
            BayPatentSearch helps you explore global patent data by title,
            abstract, claims and description — ranked by intelligent similarity
            and context, not just keywords.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/login"
              className="inline-flex items-center gap-2 rounded-full bg-[#116466] px-5 py-2 text-sm font-medium shadow-[0_0_25px_rgba(17,100,102,0.9)] hover:bg-[#0e4e52] transition-colors"
            >
              Start searching
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/search"
              className="text-sm text-[#D1E8E2]/80 hover:text-[#FFCB9A] transition-colors"
            >
              Skip to search →
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-6 text-xs text-[#D1E8E2]/70">
            <div>
              <div className="font-semibold text-[#FFCB9A]">
                Semantic ranking
              </div>
              <div>Understand intent, not just keywords.</div>
            </div>
            <div>
              <div className="font-semibold text-[#FFCB9A]">
                Global coverage
              </div>
              <div>Search across jurisdictions and assignees.</div>
            </div>
          </div>
        </motion.section>

        {/* Right graphic */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-1 items-center justify-center md:mt-0"
        >
          <div className="relative h-72 w-72 rounded-full bg-gradient-to-br from-[#116466] via-[#2C3531] to-black shadow-[0_0_60px_rgba(17,100,102,0.9)]">
            <div className="absolute inset-6 rounded-full border border-[#FFCB9A]/40" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,203,154,0.5),transparent),radial-gradient(circle_at_70%_80%,rgba(17,100,102,0.9),transparent)]" />
            <div className="absolute inset-10 grid grid-cols-3 grid-rows-3">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="border border-[#D1E8E2]/10"
                  style={{ borderRadius: i === 4 ? "9999px" : undefined }}
                />
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-white/10 bg-black/25 py-12 backdrop-blur-md"
      >
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-xl font-semibold md:text-2xl">
            How it works
          </h2>
          <p className="mt-2 text-center text-sm text-[#D1E8E2]/80">
            Three simple steps from idea to insight.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5 shadow-[0_0_25px_rgba(17,100,102,0.5)]">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#116466]">
                <Search className="h-5 w-5 text-[#FFCB9A]" />
              </div>
              <h3 className="text-sm font-semibold">Search</h3>
              <p className="mt-1 text-xs text-[#D1E8E2]/80">
                Enter keywords, titles, or abstract text to query millions of
                global patents.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5 shadow-[0_0_25px_rgba(217,176,140,0.5)]">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D9B08C]">
                <Brain className="h-5 w-5 text-[#2C3531]" />
              </div>
              <h3 className="text-sm font-semibold">Analyze</h3>
              <p className="mt-1 text-xs text-[#D1E8E2]/80">
                AI ranks results by semantic relevance across title, abstract,
                claims and description.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5 shadow-[0_0_25px_rgba(209,232,226,0.5)]">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D1E8E2]">
                <Globe2 className="h-5 w-5 text-[#2C3531]" />
              </div>
              <h3 className="text-sm font-semibold">Decide</h3>
              <p className="mt-1 text-xs text-[#D1E8E2]/80">
                Quickly inspect assignees, inventors and claim sets to support
                your decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-xl font-semibold md:text-2xl">
            Key features
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Semantic search",
                body: "Go beyond keywords with vector-based similarity across patent text.",
              },
              {
                title: "Global coverage",
                body: "Combine patents from multiple jurisdictions in a single search.",
              },
              {
                title: "Deep claims view",
                body: "Instantly scan claims, abstract and description in a unified UI.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-black/30 p-5 shadow-[0_0_25px_rgba(17,100,102,0.5)]"
              >
                <div className="text-sm font-semibold text-[#FFCB9A]">
                  {f.title}
                </div>
                <p className="mt-2 text-xs text-[#D1E8E2]/80">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI strip */}
      <section className="border-y border-[#116466]/60 bg-[#116466]/40 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 text-xs text-[#D1E8E2]/90">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#FFCB9A]" />
            <span>Powered by AI embeddings & semantic ranking.</span>
          </div>
          <span className="hidden md:inline">
            Optimized for title, abstract, claims & description.
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-black/40 py-6 text-xs text-[#D1E8E2]/60"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 md:flex-row">
          <div>
            © {new Date().getFullYear()} BayPatentSearch. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              href="/search"
              className="hover:text-[#FFCB9A] transition-colors"
            >
              Search
            </a>
            <a href="/login" className="hover:text-[#FFCB9A] transition-colors">
              Login
            </a>
            <a
              href="#contact"
              className="hover:text-[#FFCB9A] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
