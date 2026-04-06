import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, NovaTech Inc.',
    av: 'SJ',
    g: 'linear-gradient(135deg,#7c3aed,#5b21b6)',
    text: "EdgeX completely transformed our digital presence. The web development team delivered a product that exceeded all our expectations — on time and within budget."
  },
  {
    name: 'Marcus Chen',
    role: 'Founder, Luminary Labs',
    av: 'MC',
    g: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
    text: "The branding work EdgeX did for us was phenomenal. They truly understood our vision and created an identity that resonates deeply with our audience."
  },
  {
    name: 'Aisha Patel',
    role: 'CTO, Meridian Health',
    av: 'AP',
    g: 'linear-gradient(135deg,#25a772,#059669)',
    text: "Their cloud migration support was seamless. Zero downtime, exceptional documentation, and the team was incredibly communicative throughout."
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 section-alt">
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="section-tag">Testimonials</div>
          <h2 className="section-heading mt-3">Trusted by forward-thinking teams.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card flex flex-col gap-5 p-7 card-hover h-full">
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed flex-1 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-xs shrink-0"
                    style={{ background: t.g }}
                  >
                    {t.av}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--fg)]">{t.name}</div>
                    <div className="text-xs text-[var(--muted)]">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
