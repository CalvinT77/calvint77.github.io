import React from 'react';
import { Icon } from '@iconify/react';

export default function Hero() {
  const UPWORK_URL = "https://www.upwork.com/freelancers/~015a281303c61eaf1b?mp_source=share";
  const FIVERR_URL = "https://www.fiverr.com/users/calvin_t_096";

  const techLogos = [
    { name: "React.js", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "FastAPI", icon: "logos:fastapi" },
    { name: "Claude (AI)", icon: "simple-icons:anthropic" },
    { name: "Antigravity", icon: "lucide:sparkles" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "MongoDB", icon: "logos:mongodb-icon" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  ];

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderPortrait = () => (
    <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto">
      {/* Subtle background ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-b from-[#d4ff00]/10 via-transparent to-transparent rounded-[2.5rem] blur-2xl pointer-events-none opacity-60"></div>

      {/* Main Image Container */}
      <div className="relative rounded-3xl overflow-hidden bg-[#12151f] border border-white/[0.08] shadow-2xl">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0c10]">
          <img
            src="./calvin-portrait.jpg"
            alt="Calvin Tucker - Full Stack Web Developer"
            className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
            loading="eager"
          />

          {/* Gradient Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-transparent to-transparent opacity-90 pointer-events-none"></div>

          {/* Bottom Image Info Pill */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-2xl bg-[#0a0c10]/90 backdrop-blur-xl border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#d4ff00] flex-shrink-0">
                <Icon icon="lucide:zap" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] sm:text-xs font-bold text-white truncate">Accelerated Web Dev</div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono truncate">FARM • Claude • Antigravity • SQL</div>
              </div>
            </div>
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#d4ff00]/15 text-[#d4ff00] text-[9px] sm:text-[10px] font-mono font-bold flex-shrink-0">
              PRO
            </span>
          </div>
        </div>
      </div>

      {/* Floating Stat Badge */}
      <div className="absolute -top-2.5 -left-2.5 sm:-top-3 sm:-left-3 bg-[#131722]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-xl flex items-center gap-2 sm:gap-3">
        <div className="w-2 h-2 rounded-full bg-[#d4ff00]"></div>
        <div className="text-[11px] sm:text-xs font-mono font-bold text-white">Direct Freelancer</div>
      </div>
    </div>
  );

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Hero Typography & Freelance Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Workflow Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] sm:text-xs font-mono text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-semibold">Available for Freelance</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">Upwork & Fiverr</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/25 text-[11px] sm:text-xs font-mono text-[#d4ff00]">
                <Icon icon="lucide:zap" className="w-3.5 h-3.5 text-[#d4ff00]" />
                <span>Accelerated AI Workflow</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.12] mb-4 sm:mb-6">
              Building high-performance <span className="text-[#d4ff00]">full-stack web apps</span> at accelerated velocity.
            </h1>

            {/* Mobile Portrait (Positioned right under headline and above "I'm Calvin Tucker" on mobile) */}
            <div className="block lg:hidden w-full my-6">
              {renderPortrait()}
            </div>

            {/* Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed mb-6 sm:mb-8 max-w-2xl font-sans">
              I'm <span className="text-white font-semibold">Calvin Tucker</span>, a freelance software engineer with a B.S. in Computer Science. I combine deep engineering in <strong className="text-slate-200">FARM (FastAPI / React / PostgreSQL)</strong> and <strong className="text-slate-200">MERN</strong> with high-speed <strong className="text-[#d4ff00]">Claude & Antigravity AI workflows</strong> to ship robust software 3x–5x faster.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full mb-6 sm:mb-8">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[11px] sm:text-xs font-mono text-[#d4ff00] font-bold mb-0.5 sm:mb-1">01. FARM & MERN</div>
                <div className="text-xs text-slate-300">FastAPI, Node, React, PostgreSQL</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[11px] sm:text-xs font-mono text-[#d4ff00] font-bold mb-0.5 sm:mb-1">02. CLAUDE & AGY</div>
                <div className="text-xs text-slate-300">Accelerated agentic development</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[11px] sm:text-xs font-mono text-[#d4ff00] font-bold mb-0.5 sm:mb-1">03. UPWORK ESCROW</div>
                <div className="text-xs text-slate-300">100% milestone protected contracts</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold btn-lime text-center"
              >
                <Icon icon="simple-icons:upwork" className="w-4 h-4" />
                <span>Hire on Upwork</span>
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 border border-white/[0.08] hover:text-white transition-all text-center"
              >
                <Icon icon="lucide:folder-git-2" className="w-4 h-4 text-slate-400" />
                <span>View Portfolio Work</span>
              </a>
            </div>

            {/* Quick Profile Links */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-500">
              <span className="text-slate-500 text-[10px] sm:text-xs uppercase">PROFILES:</span>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-[#d4ff00] transition-colors border border-white/[0.06] text-xs"
              >
                <Icon icon="simple-icons:upwork" className="w-3.5 h-3.5 text-emerald-400" />
                <span>Upwork Profile</span>
              </a>
              <a
                href={FIVERR_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-emerald-400 transition-colors border border-white/[0.06] text-xs"
              >
                <Icon icon="simple-icons:fiverr" className="w-3.5 h-3.5 text-emerald-400" />
                <span>Fiverr</span>
              </a>
              <a
                href="https://github.com/CalvinT77"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-white transition-colors border border-white/[0.06] text-xs"
              >
                <Icon icon="simple-icons:github" className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Desktop Right Column: Calvin's Studio Portrait */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            {renderPortrait()}
          </div>

        </div>

        {/* Tech Stack Ribbon */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.06]">
          <p className="text-center text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 sm:mb-6">
            Core Development Stack & Accelerated AI Tooling
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all group text-xs"
              >
                <Icon icon={tech.icon} className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs font-medium text-slate-300 group-hover:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mouse Scroll Wheel Indicator */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center">
          <button
            onClick={scrollToServices}
            className="group flex flex-col items-center gap-1.5 sm:gap-2 text-slate-500 hover:text-white transition-colors focus:outline-none cursor-pointer p-2"
            aria-label="Scroll to Services"
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1 sm:p-1.5 group-hover:border-[#d4ff00] transition-colors">
              <div className="w-1 sm:w-1.5 h-2 sm:h-2.5 bg-[#d4ff00] rounded-full animate-bounce"></div>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-[#d4ff00] flex items-center gap-1">
              <span>Scroll down</span>
              <Icon icon="lucide:chevron-down" className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-bounce" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
