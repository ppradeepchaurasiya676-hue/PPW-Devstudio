import React, { useState } from 'react';
import { X, ExternalLink, Monitor, Tablet, Smartphone, Check, Sparkles, Calendar, User, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenHireMe: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenHireMe,
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0EA5E9]">
                {project.category}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500">{project.year}</span>
            </div>
            <h3 className="text-xl font-extrabold text-[#102A56]">{project.name}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Device Preview Simulator */}
          <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 text-white shadow-inner flex flex-col items-center">
            
            {/* Viewport Switcher Controls */}
            <div className="flex items-center justify-between w-full pb-4 border-b border-slate-800">
              <span className="text-xs text-slate-400 font-mono">
                Interactive Showcase Frame · {project.name}
              </span>

              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg">
                <button
                  onClick={() => setDeviceView('desktop')}
                  className={`p-1.5 rounded-md text-xs font-medium transition-colors ${
                    deviceView === 'desktop'
                      ? 'bg-[#0EA5E9] text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Desktop View"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeviceView('tablet')}
                  className={`p-1.5 rounded-md text-xs font-medium transition-colors ${
                    deviceView === 'tablet'
                      ? 'bg-[#0EA5E9] text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Tablet View"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeviceView('mobile')}
                  className={`p-1.5 rounded-md text-xs font-medium transition-colors ${
                    deviceView === 'mobile'
                      ? 'bg-[#0EA5E9] text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Simulated Device Frame */}
            <div className="w-full flex justify-center py-4 overflow-hidden">
              <div
                className={`transition-all duration-300 rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 ${
                  deviceView === 'desktop'
                    ? 'w-full max-w-3xl'
                    : deviceView === 'tablet'
                    ? 'w-[500px] max-w-full'
                    : 'w-[280px]'
                }`}
              >
                {/* Simulated Browser Bar */}
                <div className="bg-slate-800 px-3 py-1.5 flex items-center gap-2 border-b border-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="bg-slate-900 rounded-md px-3 py-0.5 text-[10px] font-mono text-slate-300 flex-1 text-center truncate">
                    {project.liveDemoUrl || `https://ppwdevstudio.com/showcase/${project.id}`}
                  </div>
                </div>

                {/* Screenshot / Mockup Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900 group">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-white/90">
                      High-fidelity responsive UI engineered by PPW DevStudio
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left 2 Cols: Description & Highlights */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h4 className="text-base font-bold text-[#102A56] mb-1">Project Overview</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <h4 className="text-sm font-bold text-[#102A56]">Key Features & Deliverables</h4>
                <div className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 1 Col: Metadata & Stack */}
            <div className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-200/80 space-y-4 h-fit">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Technologies Used
                </span>
                {/* Clean unboxed text list per frontend-design guidelines */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-[#102A56]">
                  {project.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {i < project.technologies.length - 1 && (
                        <span className="text-slate-300 font-normal">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200/60 pt-3 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Client</span>
                  <span className="font-semibold text-slate-800">{project.client}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Delivery Year</span>
                  <span className="font-semibold text-slate-800">{project.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Platform Status</span>
                  <span className="font-semibold text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-500">Live URL</span>
                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#0EA5E9] hover:underline flex items-center gap-1"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-medium text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                      Pending Deployment
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-2 space-y-2">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg bg-[#0EA5E9] hover:bg-[#0284c7] text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Live Website</span>
                  </a>
                )}
                <button
                  onClick={() => {
                    onClose();
                    onOpenHireMe();
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#102A56] hover:bg-[#0c2246] text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
                  <span>Build Similar Project</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Engineered with modern responsive standards by Pradeep
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
