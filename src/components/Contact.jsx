import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import confetti from 'canvas-confetti';

export default function Contact({ preselectedService }) {
  const UPWORK_URL = "https://www.upwork.com/freelancers/~015a281303c61eaf1b?mp_source=share";
  const FIVERR_URL = "https://www.fiverr.com/users/calvin_t_096";
  const myEmail = "ctucker123@gmail.com";
  const WEB3FORMS_KEY = "94eca56d-7ffd-4c2d-abfb-eab387e72efb";

  const [projectType, setProjectType] = useState(preselectedService || 'Full-Stack Web App');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$1,000 - $3,000',
    platform: 'Upwork Contract',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    'Full-Stack Web App',
    'Front-End UI / React',
    'Backend & API / Node',
    'Website Redesign',
    'Other / Custom Scope'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopiedEmail(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const payload = new FormData();
      payload.append("access_key", WEB3FORMS_KEY);
      payload.append("from_name", "Calvin Tucker Portfolio Contact Form");
      payload.append("subject", `New Inquiry: ${projectType} from ${formData.name}`);
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("project_type", projectType);
      payload.append("budget_range", formData.budget);
      payload.append("preferred_platform", formData.platform);
      payload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload
      });

      const data = await response.json();

      if (data.success) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        setSubmissionStatus('success');
        setStatusMessage('Your message was sent successfully! Calvin will review it and reply within 12 hours.');
        setFormData({
          name: '',
          email: '',
          budget: '$1,000 - $3,000',
          platform: 'Upwork Contract',
          message: ''
        });
      } else {
        setSubmissionStatus('error');
        setStatusMessage(data.message || 'Something went wrong. Please try again or email directly.');
      }
    } catch (err) {
      setSubmissionStatus('error');
      setStatusMessage('Network error occurred. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono mb-4">
            <Icon icon="lucide:send" className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Start a <span className="text-[#d4ff00]">Project</span> With Calvin
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Ready to build a web application, API, or discuss a freelance contract? Send a message directly below or hire on Upwork & Fiverr.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Upwork Direct Card */}
            <div className="bespoke-card p-6 border-emerald-500/20 bg-gradient-to-br from-[#0f181f] via-[#121622] to-[#0f1219]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Icon icon="simple-icons:upwork" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Hire on Upwork</h3>
                  <p className="text-[11px] text-slate-400 font-mono">Verified Freelance Profile</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Milestone escrow protection & clear contract terms for fixed or hourly projects.
              </p>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-bold btn-lime flex items-center justify-center gap-2"
              >
                <Icon icon="simple-icons:upwork" className="w-4 h-4" />
                <span>Open Upwork Profile</span>
              </a>
            </div>

            {/* Fiverr Direct Card */}
            <div className="bespoke-card p-6 border-emerald-500/20 bg-gradient-to-br from-[#0d1419] via-[#121622] to-[#0f1219]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Icon icon="simple-icons:fiverr" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Order on Fiverr</h3>
                  <p className="text-[11px] text-slate-400 font-mono">@calvin_t_096</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Custom full-stack, frontend, and backend gig orders directly on Fiverr.
              </p>
              <a
                href={FIVERR_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.1] text-emerald-400 hover:text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors flex items-center justify-center gap-2"
              >
                <Icon icon="simple-icons:fiverr" className="w-4 h-4" />
                <span>Open Fiverr Profile</span>
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="bespoke-card p-8 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-bold">
                Direct Email
              </h3>

              <div className="p-4 rounded-2xl bg-[#0a0c10]/80 border border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] text-white flex items-center justify-center flex-shrink-0">
                    <Icon icon="lucide:mail" className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-slate-500">EMAIL</div>
                    <div className="text-xs font-mono font-bold text-white truncate">{myEmail}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex-shrink-0 ${
                    copiedEmail
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/10'
                  }`}
                >
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 px-1 font-mono">
                <Icon icon="lucide:clock" className="w-3.5 h-3.5 text-emerald-400" />
                <span>Typical response time: Within 12 hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Web3Forms Powered Contact Form */}
          <div className="lg:col-span-7 bespoke-card p-8 sm:p-10">
            
            {submissionStatus === 'success' ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lime-glow">
                  <Icon icon="lucide:check-circle-2" className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {statusMessage}
                </p>
                <button
                  onClick={() => setSubmissionStatus(null)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold btn-lime transition-all mt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Project Scope Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Select Scope:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all border ${
                          projectType === type
                            ? 'bg-white/10 border-white/20 text-white font-bold'
                            : 'bg-[#0a0c10]/60 border-white/[0.04] text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5" htmlFor="name">
                      Your Name / Company *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0c10]/80 border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-white/30 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5" htmlFor="email">
                      Your Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0c10]/80 border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-white/30 text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Budget & Platform */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5" htmlFor="budget">
                      Estimated Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0c10]/80 border border-white/[0.08] text-white focus:outline-none focus:border-white/30 text-sm transition-all"
                    >
                      <option value="Under $500">Under $500 (Small Task / Bug Fix)</option>
                      <option value="$500 - $1,500">$500 - $1,500 (Landing Page / Frontend)</option>
                      <option value="$1,500 - $3,000">$1,500 - $3,000 (Full-Stack Web App)</option>
                      <option value="$3,000+">$3,000+ (Custom Enterprise / Scale)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5" htmlFor="platform">
                      Preferred Platform
                    </label>
                    <select
                      id="platform"
                      name="platform"
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0c10]/80 border border-white/[0.08] text-white focus:outline-none focus:border-white/30 text-sm transition-all"
                    >
                      <option value="Upwork Contract">Upwork Contract</option>
                      <option value="Fiverr Gig Order">Fiverr Gig Order</option>
                      <option value="Direct Contract / Invoice">Direct Contract / Invoice</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5" htmlFor="message">
                    Project Overview & Timeline *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your web app, required stack, or key features..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0c10]/80 border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-white/30 text-sm transition-all resize-none"
                  ></textarea>
                </div>

                {/* Error Banner if any */}
                {submissionStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-start gap-2.5">
                    <Icon icon="lucide:alert-circle" className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-sm font-bold btn-lime flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Icon icon="lucide:loader-2" className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Icon icon="lucide:send" className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-500 font-mono">
                  Delivered directly to Calvin Tucker via Web3Forms. No spam, ever.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
