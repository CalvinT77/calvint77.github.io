import React from 'react';
import { Icon } from '@iconify/react';
import { servicesData, freelanceWorkflow } from '../data/servicesData';

export default function Services({ onSelectService }) {
  const UPWORK_URL = "https://www.upwork.com/freelancers/~015a281303c61eaf1b?mp_source=share";

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono mb-4">
            <Icon icon="lucide:briefcase" className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>Freelance Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            End-to-End Web <span className="text-[#d4ff00]">Engineering</span> Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Specialized solutions for custom web applications. From pixel-perfect React frontends to scalable Node.js APIs and full-stack systems.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bespoke-card p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:text-[#d4ff00] transition-colors">
                    <Icon icon={service.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    {service.upworkSkill}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-[#d4ff00] mb-4">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-6 pt-5 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">Deliverables:</span>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Icon icon="lucide:check" className="w-3.5 h-3.5 text-[#d4ff00] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Available on Upwork & Fiverr</span>
                <a
                  href="#contact"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#d4ff00] transition-colors"
                >
                  <span>Request Scope</span>
                  <Icon icon="lucide:arrow-right" className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Workflow Timeline Section */}
        <div className="bespoke-card p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              How We Collaborate
            </h3>
            <p className="text-slate-400 text-sm">
              A transparent, milestone-driven process designed for speed, clarity, and top-tier code quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {freelanceWorkflow.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-2xl bg-[#0a0c10] border border-white/10 flex items-center justify-center text-white mb-4 group-hover:border-[#d4ff00]/40 group-hover:text-[#d4ff00] transition-all">
                  <Icon icon={item.icon} className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#d4ff00] mb-1">
                  STEP {item.step}
                </span>
                <h4 className="text-sm font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-sm font-bold text-white">Ready to hire a reliable full-stack freelancer?</div>
              <div className="text-xs text-slate-400">Open a contract on Upwork or submit an inquiry for a free estimate.</div>
            </div>
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold btn-lime flex items-center gap-2"
            >
              <Icon icon="simple-icons:upwork" className="w-3.5 h-3.5" />
              <span>Hire on Upwork</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
