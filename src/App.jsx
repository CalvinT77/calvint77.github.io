import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FreelancePlatforms from './components/FreelancePlatforms';
import ClientFAQ from './components/ClientFAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ScrollProgressBar from './components/ScrollProgressBar';
import { Icon } from '@iconify/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [preselectedService, setPreselectedService] = useState('');

  const UPWORK_URL = "https://www.upwork.com/freelancers/~015a281303c61eaf1b?mp_source=share";

  // Intersection observer for section tracking as user scrolls naturally
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-70px 0px -40% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const handleSelectService = (serviceTitle) => {
    setPreselectedService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-100 font-sans selection:bg-[#d4ff00]/30 selection:text-white">
      
      {/* Top Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Top Sticky Navbar (Auto-highlights sections on scroll) */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections (Completely scrollable with mouse wheel) */}
      <main className="w-full">
        <Hero />

        <Services onSelectService={handleSelectService} />

        <FreelancePlatforms />

        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        <About />

        <ClientFAQ />

        <Contact preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Modal (Rendered ONLY when active) */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Floating Quick Action Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <a
          href={UPWORK_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-full btn-lime text-xs font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          <Icon icon="simple-icons:upwork" className="w-4 h-4" />
          <span className="hidden sm:inline">Hire on Upwork</span>
        </a>
      </div>

    </div>
  );
}
