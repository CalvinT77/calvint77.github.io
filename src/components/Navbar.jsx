import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const UPWORK_URL = "https://www.upwork.com/freelancers/~015a281303c61eaf1b?mp_source=share";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#portfolio', id: 'portfolio' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3.5 bg-[#0a0c10]/90 backdrop-blur-2xl border-b border-white/[0.06]' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => setActiveSection('home')}
          >
            <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-display font-extrabold text-white text-sm group-hover:border-[#d4ff00]/50 group-hover:text-[#d4ff00] transition-colors">
              CT
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-slate-200 transition-colors">
                Calvin Tucker
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Full-Stack Freelancer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#12151f]/80 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Available for Hire
            </div>

            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold btn-lime"
            >
              <Icon icon="simple-icons:upwork" className="w-3.5 h-3.5" />
              <span>Hire on Upwork</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-bold btn-lime"
            >
              Upwork
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <Icon icon={mobileMenuOpen ? "lucide:x" : "lucide:menu"} className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c10]/98 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-white/[0.08]">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl text-center text-xs font-bold btn-lime flex items-center justify-center gap-2"
              >
                <Icon icon="simple-icons:upwork" className="w-4 h-4" />
                <span>Hire Calvin on Upwork</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
