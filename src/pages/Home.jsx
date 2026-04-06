import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Monitor, Cloud, Globe, Smartphone, PenTool, Video, Check } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { motion, useScroll, useTransform } from 'motion/react';
import ScrollDown from "../components/scrollanimated"
import nebulaImg from '../assets/Portfolio/nebula.png';
import meridianImg from '../assets/Portfolio/Meridian.png';
import forgeImg from '../assets/Portfolio/forge.png';
import summitImg from '../assets/Portfolio/summit.png';
import bgvideo from '../assets/hero/hero.mp4';


const services = [
  { icon: <Monitor size={24} />, title: 'IT Support', desc: 'Proactive monitoring, helpdesk, and managed IT services to keep your business running smoothly 24/7.' },
  { icon: <Cloud size={24} />, title: 'Cloud Services', desc: 'Seamless cloud migration, infrastructure management, and optimization on AWS, Azure, and GCP.' },
  { icon: <Globe size={24} />, title: 'Web Development', desc: 'Fast, accessible, and beautifully crafted websites and web apps built with modern frameworks.' },
  { icon: <Smartphone size={24} />, title: 'App Development', desc: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS & Android.' },
  { icon: <PenTool size={24} />, title: 'Branding', desc: 'Strategic brand identity, logo design, and visual systems that leave a lasting impression.' },
  { icon: <Video size={24} />, title: 'Video Editing', desc: 'Professional video production, motion graphics, and post-production for brands and creators.' },
];

const portfolioPreviews = [
  {
    title: 'Nebula SaaS Platform',
    cat: 'Web Development',
    g: 'linear-gradient(135deg,#7c3aed,#5b21b6)',
    img: nebulaImg,
  },
  {
    title: 'Meridian Health App',
    cat: 'App Development',
    g: 'linear-gradient(135deg,#0ea5e9,#0891b2)',
    img: meridianImg,
  },
  {
    title: 'Forge Brand Identity',
    cat: 'Branding',
    g: 'linear-gradient(135deg,#25a772,#059669)',
    img: forgeImg,
  },
  {
    title: 'Summit Cloud Migration',
    cat: 'Cloud Services',
    g: 'linear-gradient(135deg,#f59e0b,#ea580c)',
    img: summitImg,
  },
];

const stats = [
  { v: '200+', l: 'Projects Done', e: '🚀' },
  { v: '50+', l: 'Happy Clients', e: '🤝' },
  { v: '6+', l: 'Years Active', e: '📅' },
  { v: '15+', l: 'Team Members', e: '👥' }
];

export const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const scrollLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-[90vh] flex items-center overflow-hidden pt-24 pb-20 bg-grid relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 blur-xs"
        >
        <source src={bgvideo} type="video/mp4" />
        </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/5 to-transparent pointer-events-none"></div>
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="section-tag">
              <span className="tag-dot"></span>Available for new projects
            </div>
            <h1 className="font-tech text-[clamp(2.8rem,8vw,5.5rem)] font-semibold leading-[1.02] text-[var(--fg)] my-4">
              <span className="glitch-text" data-text="We Build">We Build</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 mb-2 via-blue-500 to-brand-500 bg-[length:200%_auto] animate-text-shimmer inline-block relative">
                Digital Futures
                <svg className="ml-45 absolute -bottom-1.5 left-0 w-full h-1.5" viewBox="0 0 400 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11C70 4 150 2 200 2C250 2 330 4 397 11" stroke="#25a772" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span><br />
              <span className="glitch-text" data-text="for Bold Brands.">for Bold Brands.</span>
            </h1>
            <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mb-9">
              At EdgeX, we do it all — from IT support and cloud services to website development, app design, branding, video editing, and beyond. One-stop digital agency, powered by passion.
            </p>
            <div className="flex flex-wrap gap-4 items-center mb-14">
              <Link to="/contact" className="btn-primary btn-lg">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn-ghost">
                View Our Work
              </Link>
            </div>
            <div className="flex flex-wrap gap-15 pt-9 border-t border-[var(--border)]">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
                <div className="font-display text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 flex items-center">
                  <AnimatedCounter to={200} suffix="+" duration={2} />
                </div>
                <div className="text-xs text-[var(--muted)] mt-1 uppercase tracking-wider font-semibold">Projects Delivered</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
                <div className="font-display text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 flex items-center">
                  <AnimatedCounter to={50} suffix="+" duration={2} />
                </div>
                <div className="text-xs text-[var(--muted)] mt-1 uppercase tracking-wider font-semibold">Happy Clients</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
                <div className="font-display text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 flex items-center">
                  <AnimatedCounter to={6} suffix="+" duration={2} />
                </div>
                <div className="text-xs text-[var(--muted)] mt-1 uppercase tracking-wider font-semibold">Years Experience</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
                <div className="font-display text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 flex items-center">
                  <AnimatedCounter to={99} suffix="%" duration={2} />
                </div>
                <div className="text-xs text-[var(--muted)] mt-1 uppercase tracking-wider font-semibold">Client Satisfaction</div>
              </motion.div>
            </div>
          </div>
        </div>



        <ScrollDown className="absolute bottom-8 left-1/2 -translate-x-1/2" />
      </section>
      {/* <motion.div 
          style={{ opacity: scrollOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[var(--muted)]">Scroll</span>
          <div className="w-[1px] h-16 bg-[var(--border)] relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-brand-500"
              style={{ height: scrollLineHeight }}
            />
          </div>
        </motion.div> */}


      {/* Services Preview */}
      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-14">
            <div>
              <div className="section-tag">What we do</div>
              <h2 className="section-heading">Services built for<br />the modern web.</h2>
            </div>
            <Link to="/services" className="btn-outline">
              All Services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-7 card-hover group cursor-default h-full">
                  <div className="w-12 h-12 bg-brand-50 dark:bg-brand-500/15 rounded-xl flex items-center justify-center mb-5 text-brand-500 transition-all duration-300 shrink-0 group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110">
                    {s.icon}
                  </div>
                  <div className="font-display font-semibold text-lg mb-2">{s.title}</div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{s.desc}</p>
                  <div className="flex items-center gap-1.5 mt-4 text-xs font-semibold text-brand-500 opacity-0 transition-all duration-300 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1">
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 section-alt">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="section-tag">About EdgeX</div>
              <h2 className="section-heading text-[clamp(1.8rem,4vw,2.8rem)] my-3">We're not just a vendor — we're your digital partner.</h2>
              <p className="text-[var(--muted)] leading-relaxed mb-2">
                Founded in 2018, EdgeX Systems has grown from a boutique tech studio into a full-service digital agency. We obsess over quality, craft, and measurable results.
              </p>
              <ul className="flex flex-col gap-3 my-6 list-none">
                {['Agile, transparent process', 'Dedicated account managers', 'Ongoing support & maintenance', 'Proven track record across industries'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                    <span className="w-5 h-5 bg-brand-50 dark:bg-brand-500/15 rounded-full flex items-center justify-center shrink-0 text-brand-500">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary">
                Our Story <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-3.5">
                {stats.map((s, i) => (
                  <div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 text-center card-hover">
                    <div className="text-2xl mb-2">{s.e}</div>
                    <div className="font-display text-3xl font-semibold">
                      <AnimatedCounter
                        to={s.v.replace('+', '')} // remove + for counting
                        suffix={s.v.includes('+') ? '+' : ''}
                        duration={2}
                      />
                    </div>
                    <div className="text-xs text-[var(--muted)] mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-10">
            <div>
              <div className="section-tag">Portfolio</div>
              <h2 className="section-heading">Work we're proud of.</h2>
            </div>
            <Link to="/portfolio" className="btn-outline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioPreviews.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link
                  to="/portfolio"
                  className="block rounded-2xl overflow-hidden relative aspect-[4/5] cursor-pointer group"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* 🔥 Bottom Fade Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 transition-all duration-300 group-hover:bg-black/20">
                    <div className="text-white/70 text-xs uppercase tracking-widest">
                      {p.cat}
                    </div>

                    <div className="text-white font-semibold mt-1">
                      {p.title}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
};
