import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Box, Zap } from 'lucide-react';

const SERVICES = [
  {
    icon: Code2,
    title: 'Creative Development',
    tagline: 'Precision engineered for the modern browser',
    description: 'We build high-performance, responsive web applications using React, Next.js, and TypeScript, backed by silky-smooth 60fps micro-animations.',
    features: ['Custom Web Applications', 'React & Next.js Ecosystem', 'GSAP & Fluid Physics', 'Modular Component Architecture'],
  },
  {
    icon: Palette,
    title: 'UI/UX & Art Direction',
    tagline: 'Distinct visual identity with intuitive ergonomics',
    description: 'Striking typography, intentional white space, and immersive storytelling that turns casual visitors into lifelong brand advocates.',
    features: ['Design Systems & Style Guides', 'Interactive Wireframing', 'Kinetic Typography', 'Tactile Micro-Interactions'],
  },
  {
    icon: Box,
    title: '3D & Spatial WebGL',
    tagline: 'Interactive experiences beyond flat screens',
    description: 'Pushing browser capabilities with Three.js, procedural GLSL shaders, dynamic lighting models, and real-time interactive product configurators.',
    features: ['Three.js & React Three Fiber', 'Custom GLSL Shaders', '3D Scene Optimization', 'Spatial Audio Integration'],
  },
  {
    icon: Zap,
    title: 'Performance & SEO',
    tagline: 'Lightning speed meets measurable visibility',
    description: 'Sub-second load times, flawless Core Web Vitals, and semantic SEO structuring so your digital presence ranks at the top.',
    features: ['Core Web Vitals Optimization', 'Global CDN & Asset Delivery', 'Semantic HTML5 & Accessibility', 'Headless CMS Integration'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative bg-[#0B0609] py-24 sm:py-32 md:py-40 px-6 sm:px-10 md:px-14 overflow-hidden">
      {/* Soft Ambient Light Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#f2a97e]/25 to-transparent blur-[2px]" />

      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#9e6b88]/15 via-[#c87a5b]/8 to-transparent blur-3xl pointer-events-none" />

      {/* Fluted overlay texture */}
      <div className="absolute inset-0 fluted-overlay pointer-events-none opacity-50" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-copper-light shadow-[0_0_8px_rgba(242,169,126,0.8)]" />
            <span className="font-sans-ui text-xs text-copper-light uppercase tracking-[0.3em] font-medium">
              Services & Capabilities
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-[#FFF0EB] tracking-tight">
            How we <span className="italic copper-text-gradient">elevate brands</span>
          </h2>

          <p className="font-sans-ui text-sm sm:text-base text-[#FCEEE8]/75 max-w-lg leading-relaxed">
            From concept to deployment, we provide end-to-end creative engineering to bring high-impact digital experiences to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative p-8 sm:p-10 rounded-3xl liquid-glass border border-copper-dark/25 hover:border-copper-light/50 transition-all duration-500 hover:shadow-[0_16px_50px_rgba(200,122,91,0.25)] flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl liquid-glass border border-copper-light/35 flex items-center justify-center text-copper-light group-hover:scale-110 group-hover:bg-copper-light/15 transition-all shadow-[0_0_15px_rgba(226,149,120,0.2)]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-sans-ui text-xs font-mono text-copper-light/70">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif italic text-[#FFF0EB] mb-2 group-hover:text-copper-light transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans-ui text-xs sm:text-sm text-copper-light/90 uppercase tracking-wider mb-4 font-medium">
                    {service.tagline}
                  </p>

                  <p className="font-sans-ui text-sm sm:text-base text-[#FCEEE8]/75 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Feature Bullet Pills */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-copper-dark/25 font-sans-ui">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-xs px-3 py-1 rounded-full bg-copper-dark/15 text-[#FCEEE8]/90 border border-copper-dark/30 hover:border-copper-light/50 transition-colors"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
