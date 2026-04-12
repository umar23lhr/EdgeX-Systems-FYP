import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, User, Building, LayoutList, MessageSquare, ChevronDown } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { motion, AnimatePresence } from 'motion/react';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError('Please fill in name, email, and message.');
      return;
    }

    setSubmitError('');
    setIsSubmitting(true);

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
      const response = await fetch(`${apiBaseUrl}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Unable to submit form right now.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="pt-32 pb-20 overflow-hidden relative bg-grid">
        <div className="page-hero-blob"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="section-tag">Contact Us</div>
            <h1 className="section-heading my-4">Let's start a conversation.</h1>
            <p className="section-sub">
              Have a project in mind? Fill out the form and we'll get back to you within 24 hours with a tailored proposal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <AnimatedSection className="lg:col-span-1">
              <h2 className="font-display text-[1.4rem] font-semibold mb-2">Get in touch</h2>
              <p className="text-[0.875rem] text-[var(--muted)] leading-relaxed mb-5">
                Our team is friendly, responsive, and ready to help.
              </p>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 card-hover shadow-sm">
                  <div className="w-10 h-10 bg-brand-50 dark:bg-brand-500/15 rounded-xl flex items-center justify-center text-brand-500 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--muted)] mb-1">Email</div>
                    <a href="mailto:hello@edgexsystems.com" className="text-[0.875rem] font-semibold text-[var(--fg)] hover:text-brand-500 transition-colors duration-200">info@edgexsystems.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 card-hover shadow-sm">
                  <div className="w-10 h-10 bg-brand-50 dark:bg-brand-500/15 rounded-xl flex items-center justify-center text-brand-500 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--muted)] mb-1">Phone</div>
                    <a href="tel:+15550000000" className="text-[0.875rem] font-semibold text-[var(--fg)] hover:text-brand-500 transition-colors duration-200">+92 311 9891515</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 card-hover shadow-sm">
                  <div className="w-10 h-10 bg-brand-50 dark:bg-brand-500/15 rounded-xl flex items-center justify-center text-brand-500 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--muted)] mb-1">Office</div>
                    <span className="text-[0.875rem] font-semibold text-[var(--fg)]">Lahore, Pakitan</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 card-hover shadow-sm">
                  <div className="w-10 h-10 bg-brand-50 dark:bg-brand-500/15 rounded-xl flex items-center justify-center text-brand-500 shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-widest text-[var(--muted)] mb-1">Hours</div>
                    <span className="text-[0.875rem] font-semibold text-[var(--fg)]">Mon–Fri, 9am – 6pm GMT +5</span>
                  </div>
                </div>
              </div>
              
<div className="relative mt-4 rounded-2xl overflow-hidden border border-[var(--border)] aspect-video">
  <iframe
    src="https://maps.google.com/maps?q=31.5204,74.3587&z=13&output=embed"
    className="w-full h-full border-0"
  ></iframe>

  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded-lg">
    📍 Lahore, Pakistan
  </div>
</div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="bg-white/60 dark:bg-[#0a0f1a]/60 backdrop-blur-2xl border border-slate-200/60 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 relative overflow-hidden min-h-[500px]">
                {/* Decorative Background Orbs */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit} 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10"
                    >
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[0.65rem] uppercase tracking-widest font-semibold text-[var(--muted)] ml-1">Full Name *</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--muted)] group-focus-within:text-brand-500 transition-colors">
                            <User size={18} />
                          </div>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3.5 bg-white/80 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-[0.875rem] text-[var(--fg)] transition-all duration-300 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 placeholder:text-[var(--muted)] placeholder:opacity-60 shadow-sm" 
                            placeholder="Alex Johnson" 
                            required 
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[0.65rem] uppercase tracking-widest font-semibold text-[var(--muted)] ml-1">Email *</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--muted)] group-focus-within:text-brand-500 transition-colors">
                            <Mail size={18} />
                          </div>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3.5 bg-white/80 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-[0.875rem] text-[var(--fg)] transition-all duration-300 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 placeholder:text-[var(--muted)] placeholder:opacity-60 shadow-sm" 
                            placeholder="alex@company.com" 
                            required 
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[0.65rem] uppercase tracking-widest font-semibold text-[var(--muted)] ml-1">Company</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--muted)] group-focus-within:text-brand-500 transition-colors">
                            <Building size={18} />
                          </div>
                          <input 
                            type="text" 
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3.5 bg-white/80 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-[0.875rem] text-[var(--fg)] transition-all duration-300 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 placeholder:text-[var(--muted)] placeholder:opacity-60 shadow-sm" 
                            placeholder="Acme Inc." 
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[0.65rem] uppercase tracking-widest font-semibold text-[var(--muted)] ml-1">Service Needed</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--muted)] group-focus-within:text-brand-500 transition-colors">
                            <LayoutList size={18} />
                          </div>
                          <select 
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full pl-10 pr-10 py-3.5 bg-white/80 dark:bg-black/20 border-none rounded-xl text-[0.875rem] text-[var(--fg)] transition-all duration-300 outline-none focus:ring-4 focus:ring-brand-500/10 appearance-none shadow-sm cursor-pointer"
                          >
                            <option value="" className="bg-white dark:bg-[#0a0f1a] text-[var(--fg)]">Select a service...</option>
                            <option className="bg-white dark:bg-[#0a0f1a] text-[var(--fg)]">IT Support</option>
                            <option className="bg-white dark:bg-[#0a0f1a] text-[var(--fg)]">Cloud Services</option>
                            <option className="bg-white dark:bg-[#0a0f1a] text-[var(--fg)]">Web Development</option>
                            <option className="bg-white dark:bg-[#0a0f1a] text-[var(--fg)]">App Development</option>
                            <option className="bg-white dark:bg-[#0a0f1a] text-[var(--fg)]">Branding</option>
                            <option className="bg-white dark:bg-[#0a0f1a] text-[var(--fg)]">Video Editing</option>
                            <option className="bg-white dark:bg-[#0a0f1a] text-[var(--fg)]">Multiple Services</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[var(--muted)]">
                            <ChevronDown size={18} />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 sm:col-span-2">
                        <label className="font-mono text-[0.65rem] uppercase tracking-widest font-semibold text-[var(--muted)] ml-1">Your Message *</label>
                        <div className="relative group">
                          <div className="absolute top-3.5 left-0 pl-3.5 flex items-start pointer-events-none text-[var(--muted)] group-focus-within:text-brand-500 transition-colors">
                            <MessageSquare size={18} />
                          </div>
                          <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5} 
                            className="w-full pl-10 pr-4 py-3.5 bg-white/80 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-[0.875rem] text-[var(--fg)] transition-all duration-300 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 placeholder:text-[var(--muted)] placeholder:opacity-60 resize-none shadow-sm" 
                            placeholder="Tell us about your project, goals, timeline, and budget..."
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 sm:col-span-2 mt-2">
                        <button type="submit" disabled={isSubmitting} className="group flex items-center justify-center gap-2.5 w-full py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold text-[0.95rem] rounded-xl transition-all duration-300 hover:from-brand-600 hover:to-brand-700 hover:-translate-y-1 shadow-[0_8px_20px_rgba(37,167,114,0.25)] hover:shadow-[0_12px_28px_rgba(37,167,114,0.4)] disabled:opacity-70 disabled:cursor-not-allowed">
                          {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                        <p className="text-center text-xs text-[var(--muted)] mt-2">We typically respond within 24 hours. No spam, ever.</p>
                        {submitError ? <p className="text-center text-xs text-red-500 mt-1">{submitError}</p> : null}
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center p-8 z-10"
                    >
                      <div className="text-center">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                          className="w-20 h-20 bg-brand-50 dark:bg-brand-500/15 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500 shadow-lg shadow-brand-500/20"
                        >
                          <CheckCircle2 size={40} />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="font-display text-3xl font-semibold mb-3">Message Sent!</div>
                          <p className="text-[0.95rem] text-[var(--muted)] max-w-[300px] mx-auto leading-relaxed">
                            Thanks for reaching out! We'll review your project and respond within 24 hours.
                          </p>
                          <button 
                            onClick={() => {
                              setIsSubmitted(false);
                              setFormData({name: '', email: '', company: '', service: '', message: ''});
                              setSubmitError('');
                            }}
                            className="mt-8 px-6 py-2.5 bg-slate-100 dark:bg-white/5 text-[var(--fg)] font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 transition-colors duration-200"
                          >
                            Send another message
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};
