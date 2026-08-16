import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { skillsData, freelanceGuarantees } from '../data/skillsData';

export default function About() {
  const [activeSkillCategory, setActiveSkillCategory] = useState('ai_accelerated');

  const UPWORK_URL = "https://www.upwork.com/freelancers/~015a281303c61eaf1b?mp_source=share";

  const skillTabs = [
    { key: 'ai_accelerated', label: 'AI & Accelerated', icon: 'lucide:zap' },
    { key: 'frontend', label: 'Front-End', icon: 'lucide:layout' },
    { key: 'backend', label: 'Back-End & APIs', icon: 'lucide:server' },
    { key: 'databases', label: 'Databases & SQL', icon: 'lucide:database' },
    { key: 'tools', label: 'Dev Tools & Cloud', icon: 'lucide:wrench' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono mb-3 sm:mb-4">
            <Icon icon="lucide:user-check" className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>Developer Profile</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-3 sm:mb-4">
            About <span className="text-[#d4ff00]">Calvin Tucker</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg">
            Computer Science graduate combining FARM stack, modern React, and high-velocity <strong className="text-white font-semibold">Claude & Antigravity</strong> accelerated development workflows.
          </p>
        </div>

        {/* Top Grid: Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16 items-start">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-7 bespoke-card p-6 sm:p-8 lg:p-10 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.05] border border-white/10 text-white flex items-center justify-center flex-shrink-0">
                <Icon icon="lucide:terminal" className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white">Background & Accelerated Approach</h3>
                <span className="text-[11px] sm:text-xs font-mono text-[#d4ff00]">B.S. in Computer Science • AI-Assisted Full-Stack Engineer</span>
              </div>
            </div>

            <div className="space-y-3.5 sm:space-y-4 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                My programming journey began in high school building games in C# with Unity, creating custom management software, and discovering the thrill of architecting complex interactive systems.
              </p>
              <p>
                Earning my <strong className="text-white">Bachelor's Degree in Computer Science</strong> grounded me in core software engineering, data structures, relational database schemas (<strong className="text-white">PostgreSQL & SQL</strong>), and modern web stacks like <strong className="text-[#d4ff00]">FastAPI (FARM Stack)</strong> and <strong className="text-[#d4ff00]">React / Node.js (MERN)</strong>.
              </p>
              <p>
                Today, I supercharge my freelance workflow on <strong className="text-[#d4ff00]">Upwork and Fiverr</strong> using advanced agentic AI systems like <strong className="text-white">Claude</strong> and <strong className="text-white">Google Antigravity</strong>. This allows me to prototype, build, refactor, and stress-test production code at 3x–5x standard speed while maintaining strict architectural rigor and human craftsmanship.
              </p>
            </div>

            {/* Quick Stat Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-4 border-t border-white/[0.06] text-center">
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#0a0c10]/60 border border-white/[0.04]">
                <div className="text-sm sm:text-base font-bold text-white font-mono">B.S. CS</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider">Degree</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#0a0c10]/60 border border-white/[0.04]">
                <div className="text-sm sm:text-base font-bold text-[#d4ff00] font-mono">Claude / AGY</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider">AI Workflow</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#0a0c10]/60 border border-white/[0.04]">
                <div className="text-sm sm:text-base font-bold text-white font-mono">FARM / MERN</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider">Stacks</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#0a0c10]/60 border border-white/[0.04]">
                <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">3x–5x</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider">Speed Delivery</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interests & Freelance Card */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            
            <div className="bespoke-card p-6 sm:p-8 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.05] border border-white/10 text-white flex items-center justify-center flex-shrink-0">
                  <Icon icon="lucide:zap" className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4ff00]" />
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-white">Accelerated Engineering Edge</h3>
              </div>

              <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <Icon icon="simple-icons:anthropic" className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4ff00] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Claude & Antigravity Mastery:</strong>
                    Deep context orchestration and agentic pair programming allow rapid API scaffolding, instant bug hunting, and clean code generation.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <Icon icon="lucide:cpu" className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Hardware & Systems Optimization:</strong>
                    Custom PC building since age 12 gives me a grounded appreciation for compute speed, cache efficiency, and server resource allocation.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <Icon icon="lucide:database" className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Fast Python & Relational SQL:</strong>
                    Architecting high-throughput asynchronous backends with FastAPI and structured PostgreSQL databases.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Freelance Badge */}
            <div className="bespoke-card p-5 sm:p-6 text-center">
              <span className="text-xs font-mono text-[#d4ff00] uppercase font-bold block mb-1">Looking for a High-Velocity Developer?</span>
              <p className="text-xs text-slate-400 mb-3 sm:mb-4">Get your web app or API shipped faster with modern AI-accelerated workflows.</p>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold btn-lime text-center"
              >
                <Icon icon="simple-icons:upwork" className="w-3.5 h-3.5" />
                <span>Open Contract on Upwork</span>
              </a>
            </div>

          </div>

        </div>

        {/* Skills Matrix */}
        <div className="bespoke-card p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-white/[0.06]">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">Technical Arsenal & AI Workflows</h3>
              <p className="text-[11px] sm:text-xs text-slate-400 font-mono mt-1">Frameworks and agentic tools I use to deliver software at maximum velocity</p>
            </div>

            {/* Skill Tabs (Swipeable on mobile) */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar max-w-full pb-1">
              {skillTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveSkillCategory(tab.key)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    activeSkillCategory === tab.key
                      ? 'bg-white/10 text-white font-bold'
                      : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <Icon icon={tab.icon} className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {skillsData[activeSkillCategory].map((skill) => (
              <div
                key={skill.name}
                className="p-3 sm:p-4 rounded-2xl bg-[#0a0c10]/60 border border-white/[0.04] hover:border-white/15 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
                  <Icon icon={skill.icon} className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-xs sm:text-sm font-bold text-white truncate">
                      {skill.name}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-slate-500">
                      {skill.level}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {freelanceGuarantees.map((guarantee, idx) => (
            <div
              key={idx}
              className="bespoke-card p-5 sm:p-6 border border-white/[0.04]"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.05] border border-white/10 text-[#d4ff00] flex items-center justify-center mb-3 sm:mb-4">
                <Icon icon={guarantee.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">{guarantee.title}</h4>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">{guarantee.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
