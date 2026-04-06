import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import logo from "../assets/logo.png";


export const Footer = () => {
  return (
    <footer className="bg-[#0d1117] dark:bg-black text-slate-400 pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="EdgeX Logo" className="h-10 w-auto mb-4" />
                      </Link>
            <p className="text-sm leading-relaxed max-w-[280px] mb-6">
              One-stop digital agency powered by passion, creativity, and technical expertise. We build, grow, and transform your digital presence.
            </p>
            <div className="flex gap-2.5">
              <a href="#" className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-sm text-slate-200 mb-5">Company</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><Link to="/about" className="text-sm hover:text-brand-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-brand-400 transition-colors duration-200">Services</Link></li>
              <li><Link to="/portfolio" className="text-sm hover:text-brand-400 transition-colors duration-200">Portfolio</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-brand-400 transition-colors duration-200">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-sm text-slate-200 mb-5">Services</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><Link to="/services" className="text-sm hover:text-brand-400 transition-colors duration-200">IT Support</Link></li>
              <li><Link to="/services" className="text-sm hover:text-brand-400 transition-colors duration-200">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-sm hover:text-brand-400 transition-colors duration-200">Web Development</Link></li>
              <li><Link to="/services" className="text-sm hover:text-brand-400 transition-colors duration-200">App Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-sm text-slate-200 mb-5">Contact</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><Link to="/contact" className="text-sm hover:text-brand-400 transition-colors duration-200">Get in Touch</Link></li>
              <li><a href="mailto:hello@edgexsystems.com" className="text-sm hover:text-brand-400 transition-colors duration-200">info@edgexsystems.com</a></li>
              <li><a href="tel:+15550000000" className="text-sm hover:text-brand-400 transition-colors duration-200">+92 311 9891515</a></li>
              <li className="text-sm">Lahore, Pakistan 54300</li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 flex flex-wrap justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} EdgeX Systems. All rights reserved.</span>        </div>
      </div>
    </footer>
  );
};
