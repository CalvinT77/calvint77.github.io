import React from 'react';
import { Icon } from '@iconify/react';

export default function Footer() {
  const UPWORK_URL = "https://www.upwork.com/freelancers/~015a281303c61eaf1b?mp_source=share";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-white/[0.06] bg-[#07090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.04] items-center">
          
          {/* Logo & Bio */}
          <div className="md:col-span-5 space-y-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-display font-bold text-white text-xs">
                CT
              </div>
              <span className="font-display font-bold text-white text-base">Calvin Tucker</span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Freelance Full-Stack & Front-End Web Developer building clean, reliable web applications. Available for hire on Upwork and Fiverr.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2.5">
            <a
              href="https://github.com/CalvinT77"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-white hover:border-white/20 transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <Icon icon="simple-icons:github" className="w-4 h-4" />
            </a>
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-emerald-400 hover:border-emerald-500/40 transition-colors"
              title="Upwork Profile"
              aria-label="Upwork Profile"
            >
              <Icon icon="simple-icons:upwork" className="w-4 h-4" />
            </a>
            <a
              href="https://www.fiverr.com/users/calvin_t_096"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-emerald-400 hover:border-emerald-500/40 transition-colors"
              title="Fiverr Profile (@calvin_t_096)"
              aria-label="Fiverr Profile"
            >
              <Icon icon="simple-icons:fiverr" className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <Icon icon="lucide:arrow-up" className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-mono text-slate-600">
          <div>
            © {new Date().getFullYear()} Calvin Tucker. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>React & Tailwind CSS v4</span>
            <span>•</span>
            <span>calvint77.github.io</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
