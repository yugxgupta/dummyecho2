import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectData, ProjectModal } from './ProjectModal';
import { DroppingStars } from './DroppingStars';

export const PROJECTS: ProjectData[] = [
  {
    id: 'proj-1',
    title: 'Automotive Motion',
    category: '3D & WebGL',
    year: '2025',
    tagline: 'Real-time vehicle configurator with procedural aerodynamics.',
    description: 'A cutting-edge interactive automotive showroom engineered in Three.js and WebGL, featuring dynamic sun flare reflections, procedural paint shaders, and instant fluid response.',
    fullOverview: 'We partnered with a luxury electric hypercar manufacturer to design an unforgettable web experience. Visitors can manipulate lighting angles, customize carbon-fiber trims, explore aerodynamic downforce simulations, and listen to spatial engine acoustics in real time.',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1400&auto=format&fit=crop',
    technologies: ['React', 'Three.js', 'GLSL', 'GSAP', 'Web Audio API'],
    metrics: '+240% Engagement Time',
    span: 'col-span-12 md:col-span-7',
    aspectRatio: 'aspect-[16/10] md:aspect-[16/11]',
  },
  {
    id: 'proj-2',
    title: 'Urban Architecture',
    category: 'Spatial Design',
    year: '2025',
    tagline: 'Monolithic structural visualizer with dynamic lighting.',
    description: 'Generative architectural exploration platform celebrating brutalist geometries and fluid shadow cascades.',
    fullOverview: 'An interactive monograph designed for a premier Scandinavian architecture studio. Features procedural raymarching geometry that responds directly to the visitor\'s cursor position and time-of-day solar orientation.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Canvas 2D'],
    metrics: 'Awwwards Site of the Day',
    span: 'col-span-12 md:col-span-5',
    aspectRatio: 'aspect-[16/10] md:aspect-[16/11]',
  },
  {
    id: 'proj-3',
    title: 'Human Perspective',
    category: 'Creative Direction',
    year: '2024',
    tagline: 'Experimental gallery combining human cadence and shader noise.',
    description: 'An evocative digital exhibition investigating human expression and AI generative noise patterns.',
    fullOverview: 'Created for a global creative summit, this website features multi-layered liquid displacement effects, variable typographic layouts, and interactive magnetic cards that track viewport depth.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React 19', 'Framer Motion', 'CSS Shaders', 'Web Audio'],
    metrics: '1.2M+ Global Visitors',
    span: 'col-span-12 md:col-span-5',
    aspectRatio: 'aspect-[16/10] md:aspect-[16/11]',
  },
  {
    id: 'proj-4',
    title: 'Quantum Brand System',
    category: 'Brand Experience',
    year: '2024',
    tagline: 'Comprehensive digital identity and luxury e-commerce ecosystem.',
    description: 'Full-spectrum visual system and custom digital storefront designed for next-generation quantum computing hardware.',
    fullOverview: 'We built a unified digital brand language spanning 3D product visualizations, interactive typography guides, modular CMS architecture, and ultra-smooth sub-second page transitions.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop',
    technologies: ['TypeScript', 'Tailwind', 'Stripe', 'Headless CMS'],
    metrics: '+185% Pre-Order Conversion',
    span: 'col-span-12 md:col-span-7',
    aspectRatio: 'aspect-[16/10] md:aspect-[16/11]',
  },
];

const CATEGORIES = ['All', '3D & WebGL', 'Spatial Design', 'Creative Direction', 'Brand Experience'];

export const WorkSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative bg-[#0B0609] pt-24 sm:pt-32 md:pt-36 pb-20 sm:pb-28 md:pb-36 px-6 sm:px-10 md:px-14 overflow-hidden">
      {/* Dropping Stars Particle System from top of Work Section down to end */}
      <DroppingStars />

      {/* Fluted texture backdrop */}
      <div className="absolute inset-0 fluted-overlay pointer-events-none opacity-40 z-0" />

      {/* Subtle ambient copper glow in background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-[#c87a5b]/10 via-[#9e6b88]/5 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-20">
          <div className="space-y-4">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-copper-light shadow-[0_0_8px_rgba(242,169,126,0.8)]" />
              <span className="font-sans-ui text-xs text-copper-light uppercase tracking-[0.3em] font-medium">
                Selected Work
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-[#FFF0EB] tracking-tight">
              Featured <span className="italic copper-text-gradient">projects</span>
            </h2>

            {/* Subtext */}
            <p className="font-sans-ui text-sm sm:text-base text-[#FCEEE8]/75 max-w-lg leading-relaxed">
              A curated selection of custom web applications, spatial interactions, and digital brand platforms crafted by Echolance.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap font-sans-ui">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-4 py-2 rounded-full transition-all duration-300 relative cursor-pointer ${
                    isSelected
                      ? 'text-[#0B0609] bg-gradient-to-r from-copper-light to-copper-dark font-semibold shadow-[0_0_20px_rgba(226,149,120,0.5)]'
                      : 'text-[#FCEEE8]/75 hover:text-[#FFF0EB] liquid-glass hover:bg-white/[0.06] hover:border-copper-light/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => setActiveModalProject(project)}
                className={`${project.span} group relative cursor-pointer rounded-3xl overflow-hidden liquid-glass border border-copper-dark/25 transition-all duration-500 hover:border-copper-light/60 hover:shadow-[0_16px_50px_rgba(200,122,91,0.3)]`}
              >
                <div className={`relative w-full ${project.aspectRatio} overflow-hidden`}>
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />

                  {/* Halftone Dot Overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay halftone-overlay" />

                  {/* Copper/Obsidian Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0609] via-[#0B0609]/40 to-transparent pointer-events-none" />

                  {/* Top Badge Info */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                    <span className="font-sans-ui text-[11px] uppercase tracking-[0.2em] font-medium text-copper-light liquid-glass px-3 py-1 rounded-full border border-copper-light/40 shadow-[0_0_10px_rgba(226,149,120,0.15)]">
                      {project.category}
                    </span>
                    <span className="font-sans-ui text-xs text-[#FCEEE8]/80 liquid-glass px-3 py-1 rounded-full border border-copper-dark/30">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom Content Card */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#FFF0EB] tracking-tight mb-1 group-hover:translate-x-1 transition-transform group-hover:text-copper-light">
                        {project.title}
                      </h3>
                      <p className="font-sans-ui text-xs sm:text-sm text-[#FCEEE8]/75 line-clamp-1 max-w-md">
                        {project.tagline}
                      </p>
                    </div>

                    {/* View Button Icon */}
                    <div className="w-10 h-10 rounded-full liquid-glass border border-copper-light/40 flex items-center justify-center text-copper-light group-hover:bg-gradient-to-r group-hover:from-copper-light group-hover:to-copper-dark group-hover:text-[#0B0609] group-hover:scale-110 transition-all duration-300 flex-shrink-0 shadow-[0_0_15px_rgba(226,149,120,0.25)]">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
