import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { CTASection } from '../components/CTASection';
import { motion, AnimatePresence } from 'motion/react';

const posts = [
  { title: 'The Future of Cloud Infrastructure: What to Expect in 2025', excerpt: 'As cloud providers race to offer more integrated AI-native services, businesses need to rethink how they architect for scale.', cat: 'Cloud', author: 'Maya Patel', av: 'MP', ag: 'linear-gradient(135deg,#f59e0b,#ea580c)', date: 'Mar 12, 2025', read: '5 min', g: 'linear-gradient(135deg,#0ea5e9,#0284c7)',},
  { title: 'Why Your Brand Identity Matters More Than Your Product', excerpt: "In a crowded market, first impressions happen in milliseconds. Here's how a strong visual identity can be your most powerful differentiator.", cat: 'Branding', author: 'Priya Nair', av: 'PN', ag: 'linear-gradient(135deg,#25a772,#059669)', date: 'Feb 28, 2025', read: '4 min', g: 'linear-gradient(135deg,#7c3aed,#5b21b6)' },
  { title: 'React Server Components: The Architecture Shift You Need to Understand', excerpt: "RSC represents a fundamental change in how we think about data fetching and rendering. Here's a practical guide to getting started.", cat: 'Development', author: 'Jordan Lee', av: 'JL', ag: 'linear-gradient(135deg,#0ea5e9,#0284c7)', date: 'Feb 14, 2025', read: '8 min', g: 'linear-gradient(135deg,#25a772,#14b8a6)' },
  { title: '10 IT Security Best Practices Every SMB Should Follow', excerpt: 'Cyberattacks on small businesses are up 300%. From MFA to zero-trust frameworks, here\'s how to build a secure foundation.', cat: 'IT Security', author: 'Alex Morgan', av: 'AM', ag: 'linear-gradient(135deg,#7c3aed,#5b21b6)', date: 'Jan 30, 2025', read: '6 min', g: 'linear-gradient(135deg,#ec4899,#e11d48)' },
  { title: 'Mobile-First is Dead. Long Live Context-First Design.', excerpt: "We've moved beyond device breakpoints. Designing for context — user intent, environment, and emotional state — is the next evolution in UX.", cat: 'Design', author: 'Priya Nair', av: 'PN', ag: 'linear-gradient(135deg,#25a772,#059669)', date: 'Jan 15, 2025', read: '5 min', g: 'linear-gradient(135deg,#f59e0b,#ea580c)' },
  { title: 'How We Built a Real-Time Analytics Dashboard for 1M+ Users', excerpt: "A deep dive into the architecture, tech stack, and hard-won lessons from building Nebula — a high-traffic SaaS analytics platform.", cat: 'Case Study', author: 'Jordan Lee', av: 'JL', ag: 'linear-gradient(135deg,#0ea5e9,#0284c7)', date: 'Jan 5, 2025', read: '10 min', g: 'linear-gradient(135deg,#475569,#1e293b)' },
];

const categories = ['All', 'Cloud', 'Branding', 'Development', 'IT Security', 'Design', 'Case Study'];

export const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showLoadMore, setShowLoadMore] = useState(true);

  // const featured = posts[0];
  const rest = posts.slice(0);

  const filteredRest = activeFilter === 'All'
    ? rest
    : rest.filter(p => p.cat === activeFilter);
    
  // const showFeatured = activeFilter === 'All' || featured.cat === activeFilter;

  return (
    <>
      <section className="pt-32 pb-20 overflow-hidden relative bg-grid">
        <div className="page-hero-blob"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="section-tag">Blog & Insights</div>
            <h1 className="section-heading my-4">Ideas, guides, and deep dives.</h1>
            <p className="section-sub">
              Practical insights from our team on technology, design, and building digital products that scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-9">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-[0.875rem] font-medium transition-all duration-200 border border-transparent ${
                  activeFilter === cat 
                    ? 'bg-brand-500 text-white shadow-[0_4px_16px_rgba(37,167,114,0.35)]' 
                    : 'bg-slate-500/10 text-[var(--muted)] hover:bg-brand-50 hover:text-brand-500 dark:hover:bg-brand-500/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
{/* 
          <AnimatePresence mode="popLayout">
            {showFeatured && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--card)] cursor-pointer card-hover mb-8 grid grid-cols-1 lg:grid-cols-2"
              >
                <div className="aspect-video relative overflow-hidden" style={{ background: featured.g }}>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-[30%] translate-y-[30%]"></div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white font-mono text-[0.65rem] uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-7 lg:p-9 flex flex-col justify-center">
                  <div className="font-mono text-[0.65rem] text-brand-500 uppercase tracking-widest font-medium mb-2">{featured.cat}</div>
                  <h2 className="font-display text-2xl font-semibold leading-[1.25] mb-3.5">{featured.title}</h2>
                  <p className="text-[0.875rem] text-[var(--muted)] leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-display font-semibold text-[0.65rem] shrink-0" style={{ background: featured.ag }}>
                        {featured.av}
                      </div>
                      <div>
                        <div className="text-[0.78rem] font-semibold text-[var(--fg)]">{featured.author}</div>
                        <div className="text-[0.72rem] text-[var(--muted)]">{featured.date}</div>
                      </div>
                    </div>
                    <span className="font-mono text-[0.72rem] text-[var(--muted)]">{featured.read} read</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence> */}

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filteredRest.map((p, i) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={p.title}
                  className="bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden cursor-pointer card-hover flex flex-col group"
                >
                  <div className="h-70 relative overflow-hidden shrink-0" style={{ background: p.g }}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-white/15 rounded-full"></div>
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-mono text-[0.6rem] uppercase tracking-widest px-2.5 py-1 rounded-full">
                        {p.cat}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="font-display font-semibold text-[0.95rem] leading-[1.35] mb-2 flex-1 transition-colors duration-200 group-hover:text-brand-500">{p.title}</div>
                    <p className="text-[0.78rem] text-[var(--muted)] leading-relaxed line-clamp-2 mb-4">{p.excerpt}</p>
                    <div className="flex items-center justify-between pt-3.5 border-t border-[var(--border)] mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-display font-semibold text-[0.65rem] shrink-0" style={{ background: p.ag }}>
                          {p.av}
                        </div>
                        <div className="text-[0.78rem] font-semibold text-[var(--fg)]">{p.author}</div>
                      </div>
                      <span className="font-mono text-[0.72rem] text-[var(--muted)]">{p.read}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {showLoadMore && (
            <div className="text-center mt-10">
              <button 
                className="btn-outline"
                onClick={() => setShowLoadMore(false)}
              >
                Load More Articles <ArrowDown size={16} />
              </button>
            </div>
          )}
          {!showLoadMore && (
            <p className="text-center mt-10 text-[var(--muted)] text-sm">No more articles to load.</p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
};
