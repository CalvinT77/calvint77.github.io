import React from 'react';
import { Icon } from '@iconify/react';

export default function FreelancePlatforms() {
  const UPWORK_URL = "https://www.upwork.com/freelancers/~015a281303c61eaf1b?mp_source=share";
  const FIVERR_URL = "https://www.fiverr.com/users/calvin_t_096";

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bespoke-card p-6 sm:p-8 lg:p-12 relative overflow-hidden bg-gradient-to-r from-[#0d1018] via-[#121622] to-[#0d1018]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] sm:text-xs font-mono text-emerald-400">
                <Icon icon="lucide:shield-check" className="w-3.5 h-3.5" />
                <span>Verified Freelance Profiles</span>
              </div>

              <h3 className="text-xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                Hire With Confidence on <span className="text-emerald-400">Upwork</span> & <span className="text-emerald-400">Fiverr</span>
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl">
                Prefer milestone escrow protection, automated invoices, and guaranteed buyer security? You can hire me directly through my verified Upwork profile or place custom orders on Fiverr.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Icon icon="lucide:check-circle-2" className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Escrow & milestone-based release</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Icon icon="lucide:check-circle-2" className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Full IP and source code ownership</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Icon icon="lucide:check-circle-2" className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Fixed-price and hourly contract options</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Icon icon="lucide:check-circle-2" className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Prompt daily progress updates</span>
                </div>
              </div>
            </div>

            {/* Right Platform Cards */}
            <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4">
              
              {/* Upwork Verified Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0a0c10]/90 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-emerald-400/50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Icon icon="simple-icons:upwork" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 flex-wrap">
                      <span>Upwork Freelancer</span>
                      <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[9px] sm:text-[10px] font-mono">Direct Profile</span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-mono">Fixed & Hourly Contracts</div>
                  </div>
                </div>
                <a
                  href={UPWORK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold btn-lime flex items-center justify-center gap-1.5 flex-shrink-0 text-center"
                >
                  <span>Open Profile</span>
                  <Icon icon="lucide:arrow-up-right" className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Fiverr Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0a0c10]/90 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-white/20 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Icon icon="simple-icons:fiverr" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 flex-wrap">
                      <span>Fiverr Gigs</span>
                      <span className="px-1.5 py-0.2 rounded bg-white/10 text-slate-300 text-[9px] sm:text-[10px] font-mono">Custom Orders</span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-mono">Front-End & Full-Stack</div>
                  </div>
                </div>
                <a
                  href={FIVERR_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.1] text-emerald-400 hover:text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors flex items-center justify-center gap-1.5 flex-shrink-0 text-center"
                >
                  <span>Open Fiverr</span>
                  <Icon icon="lucide:arrow-up-right" className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
