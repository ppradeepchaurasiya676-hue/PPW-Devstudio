import React, { useState } from 'react';
import { Eye, ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onOpenHireMe: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenHireMe }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F8FAFC] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
            Portfolio Showcase
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A56] tracking-tight">
            Featured Projects
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Real-world websites designed and developed for modern businesses.
          </p>
        </div>

        {/* 5 Premium Project Cards: 3 cols on large screens, 2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#0EA5E9]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Container with Zoom, Original Design Preserved & Badges */}
                <div
                  onClick={() => handleOpenModal(project)}
                  className="relative aspect-video w-full overflow-hidden bg-slate-100 cursor-pointer"
                  title="Click to inspect project details in preview frame"
                >
                  <img
                    src={project.thumbnail}
                    alt={`${project.name} website preview screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay on Hover with Inspect Trigger */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 pointer-events-none">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-[#0EA5E9]" />
                      Inspect Details & Devices
                    </span>
                    <span className="text-[11px] font-mono text-slate-200">
                      {project.status}
                    </span>
                  </div>

                  {/* Featured Project Badge (Top-Left) */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1.5 bg-[#102A56]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-white shadow-xs">
                      <Sparkles className="w-3 h-3 text-[#FBBF24]" />
                      Featured Project
                    </span>
                  </div>

                  {/* Category Label (Top-Right) */}
                  <div className="absolute top-3 right-3 max-w-[55%]">
                    <span className="inline-flex items-center bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#0EA5E9] shadow-xs truncate">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3
                      onClick={() => handleOpenModal(project)}
                      className="text-xl font-bold text-[#102A56] group-hover:text-[#0EA5E9] transition-colors cursor-pointer"
                    >
                      {project.name}
                    </h3>
                    <p className="text-xs text-[#0EA5E9] font-medium mt-0.5">
                      {project.category}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies Used: Clean unboxed text metadata with separators */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Tech Stack
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-700 font-medium">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="hover:text-[#0EA5E9] transition-colors">{tech}</span>
                          {i < project.technologies.length - 1 && (
                            <span className="text-slate-300">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Live Preview & View Project */}
              <div className="p-6 pt-0 border-t border-slate-100/60 flex items-center gap-3">
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-[#102A56] bg-slate-100 hover:bg-[#102A56] hover:text-white transition-all cursor-pointer shadow-2xs"
                  title={`Open live preview of ${project.name} in a new tab`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Preview</span>
                </a>

                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#102A56] to-[#0EA5E9] hover:from-[#0c2246] hover:to-[#0284c7] transition-all cursor-pointer shadow-xs"
                  title={`View live website for ${project.name} in a new tab`}
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Final Call-To-Action Section */}
        <div className="mt-20">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#102A56] via-[#0d2752] to-[#102A56] text-white p-8 sm:p-12 lg:p-14 border border-slate-700/60 shadow-xl">
            {/* Ambient Lighting Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>Web Architecture & Development</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Need a Professional Website for Your Business?
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
                I build modern, responsive, and user-friendly websites for restaurants, hotels, startups, and growing businesses.
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-[#102A56] bg-white hover:bg-sky-50 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-md"
                >
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0EA5E9]" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpenHireMe={onOpenHireMe}
      />
    </section>
  );
};
