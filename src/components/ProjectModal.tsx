import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  fullOverview: string;
  image: string;
  technologies: string[];
  metrics: string;
  link?: string;
  span?: string;
  aspectRatio?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B0609]/90 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto liquid-glass bg-[#140B10]/95 border border-copper-dark/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(200,122,91,0.25)] text-[#FFF0EB]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full liquid-glass border border-copper-light/30 flex items-center justify-center text-[#FCEEE8]/80 hover:text-[#FFF0EB] hover:border-copper-light transition-all z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6 pr-12">
            <div className="flex items-center gap-3 mb-2 font-sans-ui text-xs uppercase tracking-widest text-copper-light">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-[#FFF0EB] mb-2">
              {project.title}
            </h2>
            <p className="font-sans-ui text-sm sm:text-base text-[#FCEEE8]/70">
              {project.tagline}
            </p>
          </div>

          {/* Project Cover Image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 border border-copper-dark/30 shadow-2xl bg-[#0B0609]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none" />
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 font-sans-ui">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-medium text-[#FFF0EB]">Project Overview</h3>
              <p className="text-sm text-[#FCEEE8]/80 leading-relaxed">
                {project.fullOverview || project.description}
              </p>
            </div>

            <div className="space-y-6 bg-copper-dark/[0.08] p-5 rounded-2xl border border-copper-dark/25">
              <div>
                <span className="text-xs text-copper-light/70 uppercase tracking-wider block mb-1">
                  Key Impact
                </span>
                <span className="text-base font-semibold text-[#FFF0EB]">
                  {project.metrics}
                </span>
              </div>

              <div>
                <span className="text-xs text-copper-light/70 uppercase tracking-wider block mb-2">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-copper-dark/15 text-[#FFF0EB] border border-copper-dark/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-copper-dark/25 font-sans-ui">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm text-[#FCEEE8]/80 hover:text-copper-light group transition-colors"
            >
              <span>Interested in a similar build?</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => alert(`Launching live preview for ${project.title}...`)}
              className="inline-flex items-center gap-2 bg-copper-light text-[#0B0609] hover:bg-[#FFF0EB] px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(226,149,120,0.3)] hover:scale-[1.02] cursor-pointer"
            >
              <span>Live Experience</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
