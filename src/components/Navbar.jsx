import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const UPWORK_URL = "https://www.upwork.com/freelancers/~015a281303c61eaf1b?mp_source=share";
  const FIVERR_URL = "https://www.fiverr.com/users/calvin_t_096";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#portfolio', id: 'portfolio' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-2.5 sm:py-3.5 bg-[#0a0c10]/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-md' 
        : 'py-3.5 sm:py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-display font-extrabold text-white text-xs sm:text-sm group-hover:border-[#d4ff00]/50 group-hover:text-[#d4ff00] transition-colors">
              CT
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-sm sm:text-base tracking-tight group-hover:text-slate-200 transition-colors">
                Calvin Tucker
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono leading-none">
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
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
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

          {/* Desktop Action CTAs */}
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

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-bold btn-lime flex items-center gap-1.5"
            >
              <Icon icon="simple-icons:upwork" className="w-3 h-3" />
              <span>Upwork</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.06] border border-white/10 text-slate-200 hover:text-white focus:outline-none active:scale-95 transition-all"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <Icon icon={mobileMenuOpen ? "lucide:x" : "lucide:menu"} className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[57px] bottom-0 bg-[#0a0c10]/98 backdrop-blur-3xl border-b border-white/[0.08] px-5 py-6 flex flex-col justify-between overflow-y-auto md:hidden animate-fadeIn z-50">
          
          <div className="flex flex-col gap-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2 px-2">
              Navigation Menu
            </div>
            
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-left text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-white/10 text-[#d4ff00] border border-white/15'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{link.name}</span>
                  <Icon icon="lucide:chevron-right" className={`w-4 h-4 ${isActive ? 'text-[#d4ff00]' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <div className="flex items-center justify-center gap-2 py-1 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Freelance Contracts</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3 rounded-xl text-center text-xs font-bold btn-lime flex items-center justify-center gap-1.5"
              >
                <Icon icon="simple-icons:upwork" className="w-3.5 h-3.5" />
                <span>Upwork Profile</span>
              </a>

              <a
                href={FIVERR_URL}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3 rounded-xl text-center text-xs font-semibold bg-white/[0.06] text-emerald-400 border border-emerald-500/30 flex items-center justify-center gap-1.5"
              >
                <Icon icon="simple-icons:fiverr" className="w-3.5 h-3.5" />
                <span>Fiverr Gigs</span>
              </a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
