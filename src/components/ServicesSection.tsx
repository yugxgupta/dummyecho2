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
    <section id="services" className="relative bg-black py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-14 border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-white/[0.02] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="space-y-4 mb-14 md:mb-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-white/40" />
            <span className="font-sans-ui text-xs text-white/70 uppercase tracking-[0.3em] font-medium">
              Services & Capabilities
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight">
            How we <span className="italic">elevate brands</span>
          </h2>

          <p className="font-sans-ui text-sm sm:text-base text-white/70 max-w-lg leading-relaxed">
            From concept to deployment, we provide end-to-end creative engineering to bring high-impact digital experiences to life.
          </p>
        </div>

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
                className="group relative p-8 sm:p-10 rounded-3xl liquid-glass border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl liquid-glass border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-sans-ui text-xs font-mono text-white/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif italic text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="font-sans-ui text-xs sm:text-sm text-white/50 uppercase tracking-wider mb-4">
                    {service.tagline}
                  </p>

                  <p className="font-sans-ui text-sm sm:text-base text-white/70 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Feature Bullet Pills */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 font-sans-ui">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-xs px-3 py-1 rounded-full bg-white/[0.04] text-white/80 border border-white/10"
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
