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
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto liquid-glass bg-[#080808]/90 border border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full liquid-glass border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 transition-all z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6 pr-12">
            <div className="flex items-center gap-3 mb-2 font-sans-ui text-xs uppercase tracking-widest text-white/60">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white mb-2">
              {project.title}
            </h2>
            <p className="font-sans-ui text-sm sm:text-base text-white/70">
              {project.tagline}
            </p>
          </div>

          {/* Project Cover Image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-2xl bg-black">
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
              <h3 className="text-lg font-medium text-white">Project Overview</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {project.fullOverview || project.description}
              </p>
            </div>

            <div className="space-y-6 bg-white/[0.03] p-5 rounded-2xl border border-white/10">
              <div>
                <span className="text-xs text-white/50 uppercase tracking-wider block mb-1">
                  Key Impact
                </span>
                <span className="text-base font-semibold text-white">
                  {project.metrics}
                </span>
              </div>

              <div>
                <span className="text-xs text-white/50 uppercase tracking-wider block mb-2">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/90 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10 font-sans-ui">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white group"
            >
              <span>Interested in a similar build?</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => alert(`Launching live preview for ${project.title}...`)}
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:scale-[1.02]"
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
