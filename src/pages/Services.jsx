import React from 'react';
import { Monitor, Cloud, Globe, Smartphone, PenTool, Video } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { CTASection } from '../components/CTASection';

const services = [
  { icon: <Monitor size={24} />, title: 'IT Support & Managed Services', desc: 'Comprehensive IT support including 24/7 helpdesk, network management, security monitoring, hardware/software procurement, and strategic IT consulting for growing businesses.', tags: ['24/7 Helpdesk', 'Network Management', 'Security Monitoring', 'IT Consulting'] },
  { icon: <Cloud size={24} />, title: 'Cloud Services', desc: 'End-to-end cloud solutions including architecture design, migration, DevOps automation, and ongoing optimization across AWS, Microsoft Azure, and Google Cloud Platform.', tags: ['AWS / Azure / GCP', 'Cloud Migration', 'DevOps & CI/CD', 'Cost Optimization'] },
  { icon: <Globe size={24} />, title: 'Web Development', desc: 'Performance-first websites and web applications. We build with React, Next.js, and modern stacks — optimized for speed, accessibility, and conversions.', tags: ['React / Next.js', 'E-commerce', 'CMS Integration', 'SEO Optimization'] },
  { icon: <Smartphone size={24} />, title: 'App Development', desc: 'Beautifully designed, high-performing mobile applications for iOS and Android. From MVP to full-scale product, we build apps people love to use.', tags: ['iOS & Android', 'React Native', 'Flutter', 'API Integration'] },
  { icon: <PenTool size={24} />, title: 'Branding & Identity', desc: 'Strategic brand identity systems — from logo design and typography to brand guidelines, messaging frameworks, and multi-channel visual systems.', tags: ['Logo Design', 'Brand Guidelines', 'Print & Digital', 'Brand Strategy'] },
  { icon: <Video size={24} />, title: 'Video Editing & Production', desc: 'Full-stack video production from scripting and filming to editing, motion graphics, color grading, and final delivery across all formats and platforms.', tags: ['Post-Production', 'Motion Graphics', 'Color Grading', 'Social Content'] },
];

const process = [
  { n: '01', t: 'Discovery', d: 'We dive deep into your business, goals, and competition to craft the right strategy.' },
  { n: '02', t: 'Design', d: 'Wireframes, prototypes, and refined designs — iterating until it feels exactly right.' },
  { n: '03', t: 'Build', d: 'Clean, tested, production-grade code delivered on schedule with full transparency.' },
  { n: '04', t: 'Launch & Grow', d: 'Deployment, monitoring, and ongoing support to keep your product performing.' }
];

export const Services = () => {
  return (
    <>
      <section className="pt-32 pb-20 overflow-hidden relative bg-grid">
        <div className="page-hero-blob"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="section-tag">Services</div>
            <h1 className="section-heading my-4">Everything you need to compete digitally.</h1>
            <p className="section-sub">
              One agency, every capability. We've assembled the rare combination of technical depth and creative talent under one roof — so you don't have to manage five vendors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-7 card-hover h-full flex flex-col">
                  <div className="w-12 h-12 bg-brand-50 dark:bg-brand-500/15 rounded-xl flex items-center justify-center mb-5 text-brand-500 shrink-0">
                    {s.icon}
                  </div>
                  <div className="font-display font-semibold text-[1.1rem] mb-2.5">{s.title}</div>
                  <p className="text-[0.875rem] text-[var(--muted)] leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {s.tags.map((t, j) => (
                      <span key={j} className="text-[0.75rem] font-medium bg-slate-500/10 text-[var(--muted)] px-2.5 py-1 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-tag">Our Process</div>
            <h2 className="section-heading mt-3">How we work.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative overflow-hidden bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 h-full card-hover">
                  <div className="absolute top-2 right-3 font-display text-6xl font-semibold text-brand-100 dark:text-brand-500/5 leading-none pointer-events-none">
                    {p.n}
                  </div>
                  <div className="font-mono text-[0.65rem] text-brand-500 uppercase tracking-widest font-medium mb-2.5">{p.n}</div>
                  <div className="font-display font-semibold text-[1.1rem] mb-2">{p.t}</div>
                  <p className="text-[0.8rem] text-[var(--muted)] leading-relaxed relative z-10">{p.d}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
