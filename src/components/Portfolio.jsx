import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { projectsData } from '../data/projectsData';

export default function Portfolio({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono mb-3 sm:mb-4">
              <Icon icon="lucide:folder-git-2" className="w-3.5 h-3.5 text-[#d4ff00]" />
              <span>Proven Deliverables</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Selected <span className="text-[#d4ff00]">Work</span> & Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 sm:mt-3">
              Full-stack applications and frontend architectures built with React, Node.js, Express, Next.js, FastAPI, and MongoDB/PostgreSQL.
            </p>
          </div>

          {/* Category Filter Tabs (Swipeable on Mobile) */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#12151f] p-1.5 rounded-2xl border border-white/[0.06] overflow-x-auto no-scrollbar max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-white/10 text-white font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bespoke-card overflow-hidden flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              {/* Project Image Preview */}
              <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-[#0a0c10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-transparent to-transparent opacity-95"></div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0a0c10]/80 backdrop-blur-md border border-white/10 text-slate-200 text-[10px] sm:text-xs font-mono">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1.5 sm:mb-2 group-hover:text-[#d4ff00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#d4ff00] mb-2 sm:mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 sm:mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills & Actions */}
                <div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 text-[11px] sm:text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3.5 sm:pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#d4ff00] transition-colors py-1"
                    >
                      <span>Case Study Details</span>
                      <Icon icon="lucide:arrow-right" className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <Icon icon="simple-icons:github" className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* GitHub Repos CTA Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bespoke-card flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white flex-shrink-0">
              <Icon icon="simple-icons:github" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Explore More Code on GitHub</h4>
              <p className="text-xs text-slate-400 mt-0.5">Browse my open-source repositories and code commits.</p>
            </div>
          </div>
          <a
            href="https://github.com/CalvinT77"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/10 transition-all text-center"
          >
            <span>Visit @CalvinT77</span>
            <Icon icon="lucide:external-link" className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
