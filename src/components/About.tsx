import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Code, Cpu, Smartphone, BarChart3, ChevronDown, ChevronUp, Sparkles, UserCheck } from 'lucide-react';
import { BRAND_INFO, WORK_PROCESS } from '../data/portfolioData';

interface AboutProps {
  onOpenHireMe: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenHireMe }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
            About Me
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A56] tracking-tight">
            Turning Ideas Into Powerful Websites
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            I'm Pradeep Kumar, a web developer passionate about building modern, responsive and user-friendly websites. I enjoy creating digital experiences, exploring AI technologies and continuously improving my development skills.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setShowFullDetails(!showFullDetails)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-[#102A56] bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer shadow-2xs hover:shadow-xs"
            >
              <span>{showFullDetails ? 'Show Less' : 'Learn More'}</span>
              {showFullDetails ? (
                <ChevronUp className="w-4 h-4 text-[#0EA5E9]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#0EA5E9]" />
              )}
            </button>
          </div>
        </div>

        {/* 4 Pillars of PPW DevStudio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/70 hover:border-sky-300 transition-all duration-300 hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#0EA5E9] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#102A56] mb-2">Modern Web Development</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Writing clean, modular, semantic code that scales reliably and loads instantly for every user.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/70 hover:border-sky-300 transition-all duration-300 hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#102A56] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#102A56] mb-2">Responsive & Touch-First</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Crafting fluid interfaces designed for smartphones first, guaranteeing consistent beauty across all screens.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/70 hover:border-amber-300 transition-all duration-300 hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#d97706] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#102A56] mb-2">AI-Driven Innovations</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Harnessing modern AI tools and automated workflows to accelerate delivery and provide smarter user experiences.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/70 hover:border-emerald-300 transition-all duration-300 hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#102A56] mb-2">Data Analytics</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Transforming raw performance statistics and metrics into actionable business clarity and visual dashboards.
            </p>
          </div>
        </div>

        {/* Expandable "Learn More" Studio Insights */}
        {showFullDetails && (
          <div className="bg-gradient-to-br from-[#F8FAFC] via-white to-sky-50/30 rounded-3xl p-8 sm:p-10 border border-sky-100 shadow-lg mb-12 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0EA5E9]">
                  <Sparkles className="w-4 h-4 text-[#FBBF24]" />
                  <span>The Studio Philosophy</span>
                </div>

                <h3 className="text-2xl font-bold text-[#102A56]">
                  Dedicated to Craftsmanship & High-Performance Web Standards
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  At PPW DevStudio, I believe a modern website is more than just an online brochure—it is your business's 24/7 digital headquarters. Whether developing a dining portal for local favorites like Mom's Cafe and Kaimur Lazeez, or a grand luxury event platform like Sharda Palace, my focus is always on high performance, effortless navigation, and real business results.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>End-to-End Ownership:</strong> From wireframing and frontend architecture to database connectivity and live deployment.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Speed & SEO First:</strong> Lightweight bundle footprints, semantic HTML tags, and accessible contrast for optimal Google rankings.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Customer-Centric Interactions:</strong> Direct WhatsApp integration, fast ordering channels, and intuitive contact flows.</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={onOpenHireMe}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#102A56] hover:bg-[#0c2246] transition-colors"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="#projects"
                    className="text-xs font-semibold text-[#0EA5E9] hover:underline"
                  >
                    Explore Featured Work →
                  </a>
                </div>
              </div>

              {/* Development Process */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-400">
                    Workflow Stages
                  </span>
                  <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5" />
                    Pradeep Kumar's Method
                  </span>
                </div>

                <div className="space-y-4">
                  {WORK_PROCESS.map((p) => (
                    <div key={p.step} className="flex items-start gap-3.5">
                      <span className="font-mono text-xs font-bold text-[#0EA5E9] bg-sky-50 px-2 py-1 rounded-md shrink-0">
                        {p.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#102A56]">{p.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-normal">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
