import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function ProjectModal({ project, onClose }) {
  const UPWORK_URL = "https://www.upwork.com/freelancers/~015a281303c61eaf1b?mp_source=share";

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow || 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0f1219] border border-white/[0.1] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#0a0c10]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1219] via-[#0f1219]/40 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <Icon icon="lucide:x" className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-slate-200 text-xs font-mono mb-2 inline-block">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          <p className="text-xs font-mono text-[#d4ff00]">
            {project.tagline}
          </p>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Overview</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div className="p-5 rounded-2xl bg-[#0a0c10]/80 border border-white/[0.06] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-2">
                <Icon icon="lucide:sparkles" className="w-4 h-4 text-[#d4ff00]" />
                Key Highlights
              </h4>
              <div className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Icon icon="lucide:check" className="w-4 h-4 text-[#d4ff00] flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Breakdown */}
          {project.architecture && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">Architecture</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(project.architecture).map(([key, value]) => (
                  <div key={key} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[11px] font-mono text-[#d4ff00] uppercase font-bold mb-1">{key}</div>
                    <div className="text-xs text-slate-300 leading-snug">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#0a0c10] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/10 transition-colors"
              >
                <Icon icon="simple-icons:github" className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold btn-lime"
          >
            <Icon icon="simple-icons:upwork" className="w-4 h-4" />
            <span>Hire on Upwork</span>
          </a>
        </div>

      </div>
    </div>
  );
}
