import React from 'react';
import { motion } from 'framer-motion';

const STAT_HIGHLIGHTS = [
  { value: '100%', label: 'Bespoke Code', sub: 'Zero templates or generic frameworks' },
  { value: '<0.8s', label: 'Load Performance', sub: 'Optimized for global speed & fidelity' },
  { value: '45+', label: 'Global Launches', sub: 'Partnering with unicorns & visionary studios' },
  { value: '99.4%', label: 'Satisfaction', sub: 'Long-term client relationships & repeat builds' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#0B0609] py-24 sm:py-32 md:py-40 px-6 sm:px-10 md:px-14 overflow-hidden">
      {/* Soft Ambient Light Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#f2a97e]/25 to-transparent blur-[2px]" />

      {/* Background ambient copper-mauve flare */}
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[500px] bg-gradient-radial from-[#c87a5b]/15 via-[#9e6b88]/8 to-transparent blur-3xl pointer-events-none" />

      {/* Fluted texture backdrop */}
      <div className="absolute inset-0 fluted-overlay pointer-events-none opacity-50" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-copper-light shadow-[0_0_8px_rgba(242,169,126,0.8)]" />
              <span className="font-sans-ui text-xs text-copper-light uppercase tracking-[0.3em] font-medium">
                About Echolance
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-[#FFF0EB] tracking-tight leading-[1.15]">
              We believe websites shouldn&apos;t just be visited — they should <span className="italic copper-text-gradient">echo in memory</span>.
            </h2>

            <p className="font-sans-ui text-base sm:text-lg text-[#FCEEE8]/85 leading-relaxed max-w-2xl font-normal">
              Echolance is an independent creative engineering studio operating at the intersection of design, interaction, and performance. We strip away digital noise to reveal sharp, intentional web experiences that captivate attention and drive meaningful action.
            </p>

            <p className="font-sans-ui text-sm sm:text-base text-[#FCEEE8]/70 leading-relaxed max-w-2xl">
              Every transition, layout, and pixel is crafted with obsessive attention to detail — balancing timeless editorial aesthetics with the fluid power of modern web technologies.
            </p>

            {/* Core Values / Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 font-sans-ui">
              <div className="p-4 rounded-2xl liquid-glass border border-copper-dark/25 hover:border-copper-light/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <span className="text-xs uppercase tracking-widest text-copper-light block mb-1 font-semibold">Pillar 01</span>
                <span className="text-sm font-semibold text-[#FFF0EB]">Intention-First</span>
              </div>
              <div className="p-4 rounded-2xl liquid-glass border border-copper-dark/25 hover:border-copper-light/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <span className="text-xs uppercase tracking-widest text-copper-light block mb-1 font-semibold">Pillar 02</span>
                <span className="text-sm font-semibold text-[#FFF0EB]">Fluid Motion</span>
              </div>
              <div className="p-4 rounded-2xl liquid-glass border border-copper-dark/25 hover:border-copper-light/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <span className="text-xs uppercase tracking-widest text-copper-light block mb-1 font-semibold">Pillar 03</span>
                <span className="text-sm font-semibold text-[#FFF0EB]">Engineering Rigor</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Stats Card */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 font-sans-ui">
            {STAT_HIGHLIGHTS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="p-6 rounded-3xl liquid-glass border border-copper-dark/25 hover:border-copper-light/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(200,122,91,0.25)]"
              >
                <div className="text-3xl sm:text-4xl font-serif italic text-copper-light mb-1 shadow-[0_0_12px_rgba(226,149,120,0.2)]">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-[#FFF0EB] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#FCEEE8]/65 leading-normal">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
