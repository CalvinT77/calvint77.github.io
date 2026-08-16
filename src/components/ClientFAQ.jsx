import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { faqData } from '../data/faqData';

export default function ClientFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono mb-3 sm:mb-4">
            <Icon icon="lucide:help-circle" className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight mb-3 sm:mb-4">
            Frequently Asked <span className="text-[#d4ff00]">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about working with me on Upwork, Fiverr, or direct web contracts.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bespoke-card transition-all duration-200 ${
                  isOpen ? 'border-white/[0.12] bg-[#141824]' : ''
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base md:text-lg font-bold text-white flex items-start sm:items-center gap-2.5 sm:gap-3 leading-snug">
                    <span className="text-xs font-mono text-[#d4ff00] flex-shrink-0 mt-0.5 sm:mt-0">0{index + 1}.</span>
                    <span>{item.question}</span>
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-white/10 text-white rotate-180' : 'bg-white/[0.04] text-slate-400'
                  }`}>
                    <Icon icon="lucide:chevron-down" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 animate-fadeIn">
                    <div className="pt-3 border-t border-white/[0.06] text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
