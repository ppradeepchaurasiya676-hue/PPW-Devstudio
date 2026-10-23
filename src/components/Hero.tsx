import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, Sparkles, MapPin, Camera, Code2 } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { PhotoAdjustments } from './PhotoUploadModal';

interface HeroProps {
  portraitUrl?: string;
  adjustments?: PhotoAdjustments;
  isCustomPhoto?: boolean;
  onOpenPhotoModal?: () => void;
  onOpenHireMe: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  portraitUrl,
  adjustments = { zoom: 1, offsetY: 0, glowIntensity: 'medium' },
  isCustomPhoto = false,
  onOpenPhotoModal,
  onOpenHireMe,
}) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const glowStyles = {
    soft: 'from-[#0EA5E9]/20 via-sky-300/15 to-transparent blur-2xl',
    medium: 'from-[#0EA5E9]/30 via-sky-300/20 to-slate-200/40 blur-3xl',
    high: 'from-[#0EA5E9]/45 via-sky-400/25 to-[#FBBF24]/15 blur-3xl',
  }[adjustments.glowIntensity || 'medium'];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#FFFFFF]"
    >
      {/* Light Background with White, Soft Blue, and Subtle Silver Tones */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Blue and Silver Ambience Glows */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-sky-100/60 via-slate-100/40 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 left-10 w-72 h-72 bg-sky-50/50 rounded-full blur-2xl -z-10" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#102A56 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Responsive Grid: Left Text, Right Portrait on Desktop; Neatly Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Side: Professional Typography & Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 order-2 lg:order-1 animate-in fade-in duration-500">
            
            {/* Small text: HELLO, I'M */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-50 border border-sky-100/80 text-[#0EA5E9]">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase">
                HELLO, I'M
              </span>
            </div>

            {/* Large Heading: Pradeep Kumar */}
            <div className="space-y-2.5">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#102A56] tracking-tight leading-[1.08]">
                {BRAND_INFO.ownerName}
              </h1>

              {/* Professional Title: Web Developer | AI Enthusiast | Data Visualization */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-lg sm:text-2xl font-semibold text-[#0EA5E9]">
                <span>Web Developer</span>
                <span className="text-slate-300 font-normal">|</span>
                <span className="text-slate-600 font-medium text-base sm:text-xl">AI Enthusiast</span>
                <span className="text-slate-300 font-normal">|</span>
                <span className="text-slate-600 font-medium text-base sm:text-xl">Data Visualization</span>
              </div>
            </div>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {BRAND_INFO.heroIntro}
            </p>

            {/* Studio Tagline */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3.5 w-full sm:w-auto">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#FBBF24] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 block">
                  Studio Philosophy
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#102A56]">
                  "{BRAND_INFO.tagline}"
                </span>
              </div>
            </div>

            {/* Action Buttons: View Projects & Hire Me */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#102A56] via-[#163870] to-[#0EA5E9] hover:from-[#0c2246] hover:to-[#0284c7] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenHireMe}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-[#102A56] bg-white hover:bg-slate-50 border-2 border-[#102A56]/20 hover:border-[#102A56] shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer active:scale-98"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4 text-[#0EA5E9]" />
              </button>
            </div>

            {/* Credibility Notes & Status */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">100% Responsive & Clean Code</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-slate-700">
                <MapPin className="w-4 h-4 text-[#0EA5E9]" />
                <span>{BRAND_INFO.location}</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block mr-0.5" />
                <span>Available for new projects</span>
              </div>
            </div>

          </div>

          {/* Right Side: Pradeep's Personal Profile Photograph Layout */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-1 lg:order-2 animate-in fade-in duration-700">
            
            {/* Gentle Floating Wrapper with Reduced Motion Respect */}
            <div className="animate-float relative w-full flex flex-col items-center justify-center">
              
              {/* Outer Container for Frame and Glow */}
              <div className="relative w-72 h-[360px] sm:w-84 sm:h-[420px] lg:w-[380px] lg:h-[480px] flex items-center justify-center">
                
                {/* Subtle Circular Blue Gradient Glow Behind Photo */}
                <div
                  className={`absolute inset-0 rounded-[40px] bg-gradient-to-tr ${glowStyles} -z-10 transition-all duration-500 scale-105`}
                />

                {/* Concentric Subtle Silver & Blue Accent Rings */}
                <div className="absolute inset-[-12px] rounded-[44px] border border-sky-200/40 -z-10" />
                <div className="absolute inset-[-24px] rounded-[52px] border border-slate-200/30 -z-10" />

                {/* Premium Rounded-Rectangle Photo Frame */}
                <div className="relative w-full h-full rounded-[36px] p-3 sm:p-3.5 bg-gradient-to-b from-white via-sky-50/50 to-slate-100/80 shadow-2xl border border-sky-100 flex items-center justify-center overflow-hidden">
                  
                  {/* Inner Photo Container */}
                  <div className="w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b from-sky-50 to-slate-100 relative shadow-inner">
                    <img
                      src={portraitUrl}
                      alt="Pradeep Kumar - Web Developer | AI Enthusiast | Data Visualization"
                      className="w-full h-full object-cover object-top transition-transform duration-300 select-none"
                      style={{
                        transform: `scale(${adjustments.zoom || 1}) translateY(${adjustments.offsetY || 0}px)`,
                      }}
                      loading="eager"
                    />

                    {/* Subtle Bottom Ambient Gradient for natural integration */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#102A56]/20 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Studio Monogram Badge on bottom corner */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-2 sm:-left-4 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg rounded-2xl p-3 flex items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#0EA5E9] flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#102A56]">PPW DevStudio</div>
                    <div className="text-[10px] text-slate-500">Pradeep Kumar · Portfolio</div>
                  </div>
                </div>

                {/* Available for Work Status Badge on top corner */}
                <div className="absolute -top-3 -right-2 sm:-top-2 sm:-right-3 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md rounded-xl py-1.5 px-3 flex items-center gap-2 z-20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-[#102A56]">Online & Ready</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
