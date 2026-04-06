import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 p-10 sm:p-16 text-white card-hover">
            <div className="cta-blob"></div>
            <div className="cta-grid"></div>
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-3.5 py-1.5 rounded-full font-mono text-[0.7rem] uppercase tracking-wider mb-6">
                <span className="tag-dot bg-white opacity-80"></span>
                Ready to launch?
              </div>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] mb-5">
                Let's build something<br />
                <span className="opacity-80">extraordinary together.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                From idea to launch — we handle everything. Book a free discovery call and let's map out your digital roadmap.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-600 font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]">
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <Link to="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/25 transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5">
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
