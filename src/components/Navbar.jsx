import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('edgex-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  // const toggleTheme = () => {
  //   const newIsDark = !isDark;
  //   setIsDark(newIsDark);
  //   if (newIsDark) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('edgex-theme', 'dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('edgex-theme', 'light');
  //   }
  // };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-out ${isScrolled
          ? 'top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[95%] max-w-[2560px] rounded-2xl bg-white/80 dark:bg-[#0a0f1a]/80 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'top-0 left-0 w-full bg-transparent border-b border-transparent'
        }`}
    >
      <nav className={`transition-all duration-500 ${isScrolled ? 'px-4 md:px-6' : 'container-custom'}`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="EdgeX Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1 list-none bg-slate-50/50 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200/50 dark:border-white/5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 group flex items-center justify-center ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-[var(--muted)] hover:text-[var(--fg)]'
                      }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="absolute inset-0 bg-white dark:bg-white/10 rounded-xl shadow-sm border border-slate-200/50 dark:border-white/5"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-xl bg-slate-200/50 dark:bg-white/5 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--muted)] hover:bg-slate-100 dark:hover:bg-white/10 hover:text-[var(--fg)] transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </button> */}

            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl transition-all duration-300 hover:shadow-[0_8px_20px_rgba(37,167,114,0.3)] hover:-translate-y-0.5"
            >
              Get Started <ArrowRight size={16} />
            </Link>

            <button
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-[var(--fg)] hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 mx-0 sm:mx-4 p-4 rounded-3xl bg-white dark:bg-[#0a0f1a] border border-slate-200 dark:border-white/10 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${isActive
                          ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10'
                          : 'text-[var(--muted)] hover:text-[var(--fg)] hover:bg-slate-50 dark:hover:bg-white/5'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4 pt-4 border-t border-slate-100 dark:border-white/10"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full p-3.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold rounded-xl shadow-[0_4px_12px_rgba(37,167,114,0.25)]"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
