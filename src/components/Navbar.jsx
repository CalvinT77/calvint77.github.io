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

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services', icon: 'lucide:briefcase' },
    { name: 'Work', href: '#portfolio', id: 'portfolio', icon: 'lucide:folder-git-2' },
    { name: 'About', href: '#about', id: 'about', icon: 'lucide:user-check' },
    { name: 'FAQ', href: '#faq', id: 'faq', icon: 'lucide:help-circle' },
    { name: 'Contact', href: '#contact', id: 'contact', icon: 'lucide:send' },
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
      isScrolled || mobileMenuOpen
        ? 'py-2.5 sm:py-3.5 bg-[#0a0c10]/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl' 
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
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-display font-extrabold text-white text-sm group-hover:border-[#d4ff00]/50 group-hover:text-[#d4ff00] transition-colors">
              CT
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight group-hover:text-slate-200 transition-colors">
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

          {/* Mobile Right Controls: Prominent Large Hamburger Button */}
          <div className="flex items-center gap-2.5 md:hidden">
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold btn-lime flex items-center gap-1.5 shadow-md"
            >
              <Icon icon="simple-icons:upwork" className="w-3.5 h-3.5" />
              <span>Upwork</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-11 h-11 flex items-center justify-center rounded-2xl border transition-all active:scale-95 focus:outline-none ${
                mobileMenuOpen 
                  ? 'bg-[#d4ff00] text-[#0a0c10] border-[#d4ff00] shadow-lime-glow' 
                  : 'bg-white/[0.08] hover:bg-white/[0.14] text-white border-white/15'
              }`}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <Icon 
                icon={mobileMenuOpen ? "lucide:x" : "lucide:menu"} 
                className="w-6 h-6 transition-transform duration-200" 
              />
            </button>
          </div>

        </div>
      </div>

      {/* Sleek Mobile Slide-Down Dropdown Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-[500px] opacity-100 border-t border-white/[0.08] mt-2.5 bg-[#0a0c10]/98 backdrop-blur-2xl shadow-2xl' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-2 max-w-7xl mx-auto">
          
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1 px-3">
            Section Jump Menu
          </div>

          {/* Section Link Rows */}
          <div className="grid grid-cols-1 gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-white/10 text-[#d4ff00] border border-white/15 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-[#d4ff00]/20 text-[#d4ff00]' : 'bg-white/[0.05] text-slate-400'
                    }`}>
                      <Icon icon={link.icon} className="w-4 h-4" />
                    </div>
                    <span>{link.name}</span>
                  </div>
                  <Icon icon="lucide:arrow-down-right" className={`w-4 h-4 ${isActive ? 'text-[#d4ff00]' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Quick Platform Actions */}
          <div className="pt-3 border-t border-white/[0.08] space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl text-center text-xs font-bold btn-lime flex items-center justify-center gap-1.5"
              >
                <Icon icon="simple-icons:upwork" className="w-3.5 h-3.5" />
                <span>Upwork Profile</span>
              </a>

              <a
                href={FIVERR_URL}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl text-center text-xs font-semibold bg-white/[0.06] text-emerald-400 border border-emerald-500/30 flex items-center justify-center gap-1.5"
              >
                <Icon icon="simple-icons:fiverr" className="w-3.5 h-3.5" />
                <span>Fiverr Gigs</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </header>
  );
}
