import React, { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { CTASection } from '../components/CTASection';
import { motion, AnimatePresence } from 'motion/react';
import { img } from 'motion/react-client';
import nebulaImg from '../assets/Portfolio/nebula.png';
import meridianImg from '../assets/Portfolio/Meridian.png';
import forgeImg from '../assets/Portfolio/forge.png';
import summitImg from '../assets/Portfolio/summit.png';
import luminaryImg from '../assets/Portfolio/luminary.png';
import atlasImg from '../assets/Portfolio/atlas.png';
import orbitImg from '../assets/Portfolio/orbit.png';
import beaconImg from '../assets/Portfolio/beacon.png';

const projects = [
  { title: 'Nebula SaaS Platform', cat: 'Web Development', tags: ['React', 'Node.js', 'AWS'], img: nebulaImg, desc: 'End-to-end SaaS dashboard for enterprise analytics with real-time data visualization.' },
  { title: 'Meridian Health App', cat: 'App Development', tags: ['React Native', 'Firebase'], img: meridianImg, desc: 'Patient management mobile app used across 30+ clinics nationwide.' },
  { title: 'Forge Brand Identity', cat: 'Branding', tags: ['Logo', 'Guidelines', 'Print'], img: forgeImg, desc: 'Full rebrand for a manufacturing startup — identity, guidelines, and launch campaign.' },
  { title: 'Summit Cloud Migration', cat: 'Cloud Services', tags: ['AWS', 'Terraform', 'DevOps'], img: summitImg, desc: 'Zero-downtime migration of 40TB legacy infrastructure to AWS microservices.' },
  { title: 'Luminary E-Commerce', cat: 'Web Development', tags: ['Next.js', 'Shopify', 'SEO'], img: luminaryImg, desc: 'High-converting e-commerce store with 3D product viewer and custom CMS.' },
  { title: 'Atlas Corporate Film', cat: 'Video Editing', tags: ['4K', 'Motion Graphics', 'Color'], img: atlasImg, desc: 'Award-winning brand documentary produced for a Fortune 500 client.' },
  { title: 'Orbit FinTech App', cat: 'App Development', tags: ['Flutter', 'Blockchain', 'UX'], img: orbitImg, desc: 'Crypto portfolio tracker with DeFi integrations and biometric authentication.' },
  { title: 'Beacon Startup Brand', cat: 'Branding', tags: ['Identity', 'Web', 'Social'], img: beaconImg, desc: 'Complete brand launch for a seed-stage AI startup from zero to market.' },
];

const categories = ['All', 'Web Development', 'App Development', 'Branding', 'Cloud Services', 'Video Editing'];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.cat === activeFilter);

  return (
    <>
      <section className="pt-32 pb-20 overflow-hidden relative bg-grid">
        <div className="page-hero-blob"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="section-tag">Portfolio</div>
            <h1 className="section-heading my-4">Projects that move the needle.</h1>
            <p className="section-sub">
              A curated selection of work we've built, shipped, and loved. Every project is a story of collaboration, craft, and measurable impact.
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
                className={`px-4 py-2 rounded-xl text-[0.875rem] font-medium transition-all duration-200 border border-transparent ${activeFilter === cat
                  ? 'bg-brand-500 text-white shadow-[0_4px_16px_rgba(37,167,114,0.35)]'
                  : 'bg-slate-500/10 text-[var(--muted)] hover:bg-brand-50 hover:text-brand-500 dark:hover:bg-brand-500/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <AnimatePresence>
              {filteredProjects.map((p, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={p.title}
                  className="rounded-2xl overflow-hidden bg-[var(--card)] border border-[var(--border)] cursor-pointer card-hover group flex flex-col"
                >
                  <div className="aspect-[6/5] relative overflow-hidden shrink-0">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* 🔥 Bottom Fade Gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>

                    {/* Overlay UI */}
                    <div className="absolute top-3 right-3 w-10 h-10 bg-white/15 rounded-full"></div>
                    <div className="absolute bottom-3 left-3 w-6 h-6 bg-white/15 rounded-md rotate-12"></div>

                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-350 group-hover:bg-black/40">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 transition-all duration-300 scale-75 group-hover:opacity-100 group-hover:scale-100">
                        <Play size={18} className="text-slate-800 ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="font-mono text-[0.65rem] text-brand-500 uppercase tracking-widest font-medium mb-1.5">{p.cat}</div>
                    <div className="font-display font-semibold text-[0.95rem] mb-1.5 transition-colors duration-200 group-hover:text-brand-500">{p.title}</div>
                    <p className="text-[0.78rem] text-[var(--muted)] leading-relaxed mb-3 flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {p.tags.map(t => (
                        <span key={t} className="font-mono text-[0.68rem] bg-slate-500/10 text-[var(--muted)] px-2 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="text-center py-12 mt-12 border-t border-[var(--border)]">
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--muted)] mb-7">Trusted by companies of all shapes and sizes</p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
              {['Nebula', 'Meridian', 'Forge Co.', 'Summit', 'Luminary', 'Atlas'].map(n => (
                <span key={n} className="font-display font-semibold text-xl text-[var(--border)] dark:text-slate-800 transition-colors duration-200 cursor-default hover:text-[var(--muted)]">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
