import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { CTASection } from '../components/CTASection';

const timeline = [
  { yr: '2018', ev: 'EdgeX Founded', e: '🏠' },
  { yr: '2020', ev: '50th Client Milestone', e: '🎉' },
  { yr: '2022', ev: 'Team of 10+', e: '👥' },
  { yr: '2024', ev: '200 Projects Delivered', e: '🚀' }
];

const values = [
  { e: '🎯', t: 'Craft Over Quantity', d: 'We take on fewer projects to deliver exceptional results. Every pixel, every line of code is intentional.' },
  { e: '🔍', t: 'Radical Transparency', d: 'No surprises. Clear timelines, honest pricing, and open communication from day one.' },
  { e: '🚀', t: 'Always Evolving', d: 'We invest in continuous learning to stay ahead of the curve and bring you the latest solutions.' },
  { e: '📈', t: 'Results-First', d: 'We measure success by your growth, not just deliverables. Your ROI is our North Star.' }
];

const team = [
  { n: 'M Umar Saeed', r: 'CEO & Founder', av: 'US', g: 'linear-gradient(135deg,#7c3aed,#5b21b6)' },
  { n: 'Ammar Saeed', r: 'Co-Founder', av: 'AS', g: 'linear-gradient(135deg,#25a772,#059669)' },
  { n: 'Umair Saeed', r: 'Lead Engineer', av: 'US', g: 'linear-gradient(135deg,#0ea5e9,#0284c7)' },
  { n: 'Ahmad Iqbal Ch', r: 'Project Manager', av: 'AI', g: 'linear-gradient(135deg,#f59e0b,#ea580c)' }
];
export const About = () => {
  return (
    <>
      <section className="pt-32 pb-20 overflow-hidden relative bg-grid">
        <div className="page-hero-blob"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="section-tag">About EdgeX</div>
            <h1 className="section-heading my-4">We're a team of builders, designers, and strategists.</h1>
            <p className="section-sub">
              Founded in 2025 in Lahore, Pakistan, EdgeX Systems started with a simple mission: make enterprise-grade digital expertise accessible to businesses of every size.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="section-tag">Our Story</div>
              <h2 className="font-display text-3xl font-semibold my-4 leading-[1.2]">From a two-person studio to a full-service agency.</h2>
              <div className="flex flex-col gap-4 text-[var(--muted)] text-[0.95rem] leading-relaxed">
                <p>What started as two friends freelancing from a coffee shop has grown into a 15-person powerhouse delivering end-to-end digital solutions to clients across 12 countries.</p>
                <p>We've built products used by millions, migrated infrastructure serving billions of requests, and crafted brands that have become household names.</p>
                <p>EdgeX is built on the belief that great digital work shouldn't require a Fortune 500 budget. We're here to level the playing field.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {timeline.map((t, i) => (
                  <div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 card-hover">
                    <div className="text-2xl mb-2">{t.e}</div>
                    <div className="font-mono text-[0.7rem] text-brand-500 uppercase tracking-widest font-medium mb-1">{t.yr}</div>
                    <div className="font-display font-bold text-[0.9rem]">{t.ev}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-3xl p-10 text-white h-full" style={{ background: 'linear-gradient(135deg,#25a772,#059669)' }}>
                <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex bg-white/20 border border-white/30 px-3 py-1.5 rounded-full font-mono text-[0.65rem] uppercase tracking-widest mb-5">Our Mission</div>
                  <h3 className="font-display text-[1.4rem] font-semibold leading-[1.2] mb-3.5">Empowering businesses through innovative digital solutions.</h3>
                  <p className="text-sm text-white/70 leading-relaxed">We strive to democratize world-class digital capabilities for every organization. Every business deserves technology that genuinely propels its growth.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl p-10 text-white h-full" style={{ background: 'linear-gradient(135deg,#0ea5e9,#25a772)' }}>
                <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex bg-white/20 border border-white/30 px-3 py-1.5 rounded-full font-mono text-[0.65rem] uppercase tracking-widest mb-5">Our Vision</div>
                  <h3 className="font-display text-[1.4rem] font-semibold leading-[1.2] mb-3.5">To be the most trusted digital partner in the industry.</h3>
                  <p className="text-sm text-white/70 leading-relaxed">We envision a world where every great idea has the technical talent and creative firepower to become a category-defining product.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-tag">Core Values</div>
            <h2 className="section-heading mt-3">Why choose EdgeX?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-7 bg-[var(--card)] border border-[var(--border)] rounded-2xl card-hover h-full">
                  <div className="text-3xl mb-4">{v.e}</div>
                  <div className="font-display font-bold text-[0.95rem] mb-2.5">{v.t}</div>
                  <p className="text-[0.8rem] text-[var(--muted)] leading-relaxed">{v.d}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-tag">The Team</div>
            <h2 className="section-heading mt-3">Meet the people behind the magic.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-white font-display font-semibold text-xl mx-auto mb-3.5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]" style={{ background: m.g }}>
                    {m.av}
                  </div>
                  <div className="font-display font-bold text-[0.95rem]">{m.n}</div>
                  <div className="text-[0.8rem] text-[var(--muted)] mt-1">{m.r}</div>
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
