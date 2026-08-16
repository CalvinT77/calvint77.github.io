import React from 'react';
import { Icon } from '@iconify/react';

export default function Hero() {
  const UPWORK_URL = "https://www.upwork.com/freelancers/~015a281303c61eaf1b?mp_source=share";

  const techLogos = [
    { name: "React.js", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "FastAPI", icon: "logos:fastapi" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "Python", icon: "logos:python" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "MongoDB", icon: "logos:mongodb-icon" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "WebSockets", icon: "logos:socket-io" },
  ];

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Hero Typography & Freelance Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold">Available for Freelance</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Upwork & Fiverr</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Building high-performance <span className="text-[#d4ff00]">full-stack web apps</span> with precision.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl font-sans">
              I'm <span className="text-white font-semibold">Calvin Tucker</span>, a freelance developer with a B.S. in Computer Science. I engineer fast React & Next.js frontends, scalable <strong className="text-slate-200">FARM (FastAPI / React / MongoDB / PostgreSQL)</strong> and <strong className="text-slate-200">MERN</strong> backends, and robust full-stack web applications.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs font-mono text-[#d4ff00] font-bold mb-1">01. FARM & MERN</div>
                <div className="text-xs text-slate-300">FastAPI, Node, React, PostgreSQL</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs font-mono text-[#d4ff00] font-bold mb-1">02. PERFORMANCE</div>
                <div className="text-xs text-slate-300">Clean, typed, scalable architecture</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs font-mono text-[#d4ff00] font-bold mb-1">03. UPWORK ESCROW</div>
                <div className="text-xs text-slate-300">100% milestone protected contracts</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold btn-lime"
              >
                <Icon icon="simple-icons:upwork" className="w-4 h-4" />
                <span>Hire on Upwork</span>
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 border border-white/[0.08] hover:text-white transition-all"
              >
                <Icon icon="lucide:folder-git-2" className="w-4 h-4 text-slate-400" />
                <span>View Portfolio Work</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="text-slate-500">PROFILES:</span>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-[#d4ff00] transition-colors border border-white/[0.06]"
              >
                <Icon icon="simple-icons:upwork" className="w-3.5 h-3.5 text-emerald-400" />
                <span>Upwork Profile</span>
              </a>
              <a
                href="https://www.fiverr.com/users/calvin_t_096"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-emerald-400 transition-colors border border-white/[0.06]"
              >
                <Icon icon="simple-icons:fiverr" className="w-3.5 h-3.5 text-emerald-400" />
                <span>Fiverr</span>
              </a>
              <a
                href="https://github.com/CalvinT77"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-white transition-colors border border-white/[0.06]"
              >
                <Icon icon="simple-icons:github" className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Calvin's Studio Cutout Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Subtle background ambient warmth */}
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
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#0a0c10]/90 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#d4ff00]">
                        <Icon icon="lucide:code-2" className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Full-Stack Web Dev</div>
                        <div className="text-[10px] text-slate-400 font-mono">FARM • MERN • Next.js • SQL</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#d4ff00]/15 text-[#d4ff00] text-[10px] font-mono font-bold">
                      PRO
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-3 -left-3 bg-[#131722]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl hidden sm:flex items-center gap-3 animate-float-slow">
                <div className="w-2 h-2 rounded-full bg-[#d4ff00]"></div>
                <div className="text-xs font-mono font-bold text-white">Direct Freelancer</div>
              </div>

            </div>
          </div>

        </div>

        {/* Tech Stack Ribbon */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
            Core Development Stack & Technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all group"
              >
                <Icon icon={tech.icon} className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-slate-300 group-hover:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mouse Scroll Wheel Indicator */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <button
            onClick={scrollToServices}
            className="group flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors focus:outline-none cursor-pointer"
            aria-label="Scroll to Services"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 group-hover:border-[#d4ff00] transition-colors">
              <div className="w-1.5 h-2.5 bg-[#d4ff00] rounded-full animate-bounce"></div>
            </div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-[#d4ff00] flex items-center gap-1">
              <span>Scroll down</span>
              <Icon icon="lucide:chevron-down" className="w-3.5 h-3.5 animate-bounce" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
