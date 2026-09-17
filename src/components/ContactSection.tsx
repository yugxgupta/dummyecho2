import React, { useState } from 'react';
import { ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Custom Web Application',
    budget: '$10k - $25k',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert(`Thank you, ${formData.name || 'Friend'}! Your inquiry has been sent to Echolance.`);
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Custom Web Application',
        budget: '$10k - $25k',
        message: '',
      });
    }, 600);
  };

  const socialLinks = [
    { name: 'Twitter / X', url: 'https://twitter.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Dribbble', url: 'https://dribbble.com' },
  ];

  return (
    <footer id="contact" className="relative bg-black py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-14 border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/3 w-[700px] h-[500px] bg-gradient-radial from-white/[0.03] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Left Column: Heading & Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full liquid-glass border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-sans-ui text-xs font-medium text-white/90 tracking-wide">
                Available for Q2/Q3 Projects
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight leading-[1.1]">
              Let&apos;s create something that <span className="italic">echoes</span>.
            </h2>

            <p className="font-sans-ui text-base text-white/70 leading-relaxed max-w-md">
              Whether you are looking to build a new flagship web experience, modernize your brand system, or engineer an interactive 3D product showcase, we are ready to bring your vision to life.
            </p>

            {/* Direct Email Link */}
            <div className="pt-4 font-sans-ui">
              <span className="text-xs text-white/40 uppercase tracking-widest block mb-2">Direct Contact</span>
              <a
                href="mailto:hello@echolance.com"
                className="text-xl sm:text-2xl font-serif italic text-white hover:text-white/80 transition-colors inline-flex items-center gap-2 group"
              >
                <span>hello@echolance.com</span>
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-6 font-sans-ui">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl liquid-glass border border-white/15 space-y-5 shadow-2xl backdrop-blur-md"
            >
              <h3 className="text-xl font-medium text-white mb-2">
                Start a Project Inquiry
              </h3>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors cursor-pointer"
                >
                  <option value="Custom Web Application">Custom Web Application</option>
                  <option value="Interactive 3D / WebGL">Interactive 3D / WebGL Experience</option>
                  <option value="Brand Identity & Design System">Brand Identity & Design System</option>
                  <option value="Performance Optimization">Performance & Re-platforming</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">
                  Project Brief / Goals
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your timeline, key objectives, and vision..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-white text-black hover:bg-white/90 font-medium py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Inquiry Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 font-sans-ui text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Echolance Studio.</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
