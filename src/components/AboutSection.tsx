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
    <section id="about" className="relative bg-black py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-14 border-t border-white/10 overflow-hidden">
      {/* Subtle background ambient flare */}
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[500px] bg-gradient-radial from-white/[0.02] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-white/40" />
              <span className="font-sans-ui text-xs text-white/70 uppercase tracking-[0.3em] font-medium">
                About Echolance
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-white tracking-tight leading-[1.15]">
              We believe websites shouldn&apos;t just be visited — they should <span className="italic">echo in memory</span>.
            </h2>

            <p className="font-sans-ui text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-normal">
              Echolance is an independent creative engineering studio operating at the intersection of design, interaction, and performance. We strip away digital noise to reveal sharp, intentional web experiences that captivate attention and drive meaningful action.
            </p>

            <p className="font-sans-ui text-sm sm:text-base text-white/60 leading-relaxed max-w-2xl">
              Every transition, layout, and pixel is crafted with obsessive attention to detail — balancing timeless editorial aesthetics with the fluid power of modern web technologies.
            </p>

            {/* Core Values / Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 font-sans-ui">
              <div className="p-4 rounded-2xl liquid-glass border border-white/10">
                <span className="text-xs uppercase tracking-widest text-white/40 block mb-1">Pillar 01</span>
                <span className="text-sm font-semibold text-white">Intention-First</span>
              </div>
              <div className="p-4 rounded-2xl liquid-glass border border-white/10">
                <span className="text-xs uppercase tracking-widest text-white/40 block mb-1">Pillar 02</span>
                <span className="text-sm font-semibold text-white">Fluid Motion</span>
              </div>
              <div className="p-4 rounded-2xl liquid-glass border border-white/10">
                <span className="text-xs uppercase tracking-widest text-white/40 block mb-1">Pillar 03</span>
                <span className="text-sm font-semibold text-white">Engineering Rigor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats Card */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 font-sans-ui">
            {STAT_HIGHLIGHTS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="p-6 rounded-3xl liquid-glass border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-serif italic text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-white/50 leading-normal">
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
