import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <footer id="contact" className="relative bg-[#0B0609] py-24 sm:py-32 md:py-40 px-6 sm:px-10 md:px-14 overflow-hidden">
      {/* Soft Ambient Light Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#f2a97e]/25 to-transparent blur-[2px]" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/3 w-[700px] h-[500px] bg-gradient-radial from-[#c87a5b]/15 via-[#9e6b88]/8 to-transparent blur-3xl pointer-events-none" />

      {/* Fluted texture backdrop */}
      <div className="absolute inset-0 fluted-overlay pointer-events-none opacity-50" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Left Column: Heading & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full liquid-glass border border-copper-light/40 shadow-[0_0_15px_rgba(226,149,120,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper-light opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-copper-light shadow-[0_0_10px_rgba(242,169,126,0.9)]" />
              </span>
              <span className="font-sans-ui text-xs font-semibold text-[#FFF0EB] tracking-wide">
                Available for Q2/Q3 Projects
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-[#FFF0EB] tracking-tight leading-[1.1]">
              Let&apos;s create something that <span className="italic copper-text-gradient">echoes</span>.
            </h2>

            <p className="font-sans-ui text-base text-[#FCEEE8]/80 leading-relaxed max-w-md">
              Whether you are looking to build a new flagship web experience, modernize your brand system, or engineer an interactive 3D product showcase, we are ready to bring your vision to life.
            </p>

            {/* Direct Email Link */}
            <div className="pt-4 font-sans-ui">
              <span className="text-xs text-copper-light uppercase tracking-widest block mb-2 font-medium">Direct Contact</span>
              <a
                href="mailto:hello@echolance.com"
                className="text-xl sm:text-2xl font-serif italic text-[#FFF0EB] hover:text-copper-light transition-colors inline-flex items-center gap-2 group"
              >
                <span>hello@echolance.com</span>
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-copper-light" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 font-sans-ui"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl liquid-glass border border-copper-dark/35 space-y-5 shadow-[0_16px_50px_rgba(0,0,0,0.6)] backdrop-blur-md"
            >
              <h3 className="text-xl font-medium text-[#FFF0EB] mb-2">
                Start a Project Inquiry
              </h3>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FCEEE8]/80 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-[#140B10]/90 border border-copper-dark/35 rounded-xl px-4 py-3 text-sm text-[#FFF0EB] placeholder-[#FCEEE8]/40 focus:outline-none focus:border-copper-light transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#FCEEE8]/80 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full bg-[#140B10]/90 border border-copper-dark/35 rounded-xl px-4 py-3 text-sm text-[#FFF0EB] placeholder-[#FCEEE8]/40 focus:outline-none focus:border-copper-light transition-colors"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#FCEEE8]/80 mb-2 font-medium">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#140B10] border border-copper-dark/35 rounded-xl px-4 py-3 text-sm text-[#FFF0EB] focus:outline-none focus:border-copper-light transition-colors cursor-pointer"
                >
                  <option value="Custom Web Application">Custom Web Application</option>
                  <option value="Interactive 3D / WebGL">Interactive 3D / WebGL Experience</option>
                  <option value="Brand Identity & Design System">Brand Identity & Design System</option>
                  <option value="Performance Optimization">Performance & Re-platforming</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#FCEEE8]/80 mb-2 font-medium">
                  Project Brief / Goals
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your timeline, key objectives, and vision..."
                  className="w-full bg-[#140B10]/90 border border-copper-dark/35 rounded-xl px-4 py-3 text-sm text-[#FFF0EB] placeholder-[#FCEEE8]/40 focus:outline-none focus:border-copper-light transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-gradient-to-r from-copper-light to-copper-dark text-[#0B0609] hover:from-[#FFF0EB] hover:to-copper-light font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(226,149,120,0.4)] hover:shadow-[0_0_35px_rgba(242,169,126,0.6)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
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
          </motion.div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-10 border-t border-copper-dark/25 flex flex-col sm:flex-row items-center justify-between gap-6 font-sans-ui text-xs text-[#FCEEE8]/60">
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
                className="hover:text-copper-light transition-colors"
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
