import React from 'react';
import {
  Calendar,
  Briefcase,
  Code2,
  Smartphone,
  Building2,
  UtensilsCrossed,
  Sparkles,
  Rocket,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

interface ExperienceProps {
  onOpenHireMe?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenHireMe }) => {
  const highlightedSkills = [
    {
      name: 'Website Development',
      description: 'Building custom, scalable, and high-performance web applications using modern web technologies.',
      icon: Code2,
      accent: 'text-[#0EA5E9] bg-sky-50 border-sky-100',
    },
    {
      name: 'Responsive Web Design',
      description: 'Creating pixel-perfect layouts that adapt seamlessly across smartphones, tablets, and desktop displays.',
      icon: Smartphone,
      accent: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      name: 'Hotel & Restaurant Websites',
      description: 'Designing tailored web portals with room booking, table reservations, and customer contact workflows.',
      icon: Building2,
      accent: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      name: 'Digital Menu Development',
      description: 'Crafting interactive, mobile-friendly culinary menus and dish showcases with WhatsApp order links.',
      icon: UtensilsCrossed,
      accent: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      name: 'AI-Assisted Development',
      description: 'Leveraging cutting-edge AI tools to accelerate code generation, optimize workflows, and enhance UI.',
      icon: Sparkles,
      accent: 'text-purple-600 bg-purple-50 border-purple-100',
    },
    {
      name: 'Website Deployment',
      description: 'Deploying production builds with custom domain linkage, HTTPS security, and CDN speed optimization.',
      icon: Rocket,
      accent: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden border-t border-slate-100">
      {/* Background Subtle Ambience Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-50/70 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-100/50 rounded-full blur-2xl -z-10" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(#102A56 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
            Career & Expertise
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A56] tracking-tight">
            Experience
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Hands-on web engineering, real-world business implementations, and modern digital development.
          </p>
        </div>

        {/* Main Experience Showcase Card */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12 transition-all duration-300 hover:shadow-lg hover:border-sky-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 5 Cols: Duration Badge, Role, Brand & Description */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* "12 Months" Premium Experience Badge */}
              <div className="inline-flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#102A56] via-[#163870] to-[#0EA5E9] text-white shadow-sm">
                  <Calendar className="w-6 h-6 text-sky-200" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl sm:text-2xl font-black text-[#102A56] tracking-tight">
                      1 Year
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#FBBF24]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Of Professional Experience
                  </span>
                </div>
              </div>

              {/* Role & Brand Card */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0EA5E9] uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Role & Organization</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A56] tracking-tight">
                  Web Developer
                </h3>

                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-700">
                  <span className="text-slate-400 font-normal">at</span>
                  <span className="text-[#102A56] font-extrabold">{BRAND_INFO.brandName}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    Active Practice
                  </span>
                </div>
              </div>

              {/* Exact Description Provided */}
              <div className="relative p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  "I have 1 year of experience in website development, creating modern, responsive, and user-friendly websites for businesses, hotels, and restaurants. I work with AI-assisted development tools, website design, digital menus, and website deployment."
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">— Pradeep Kumar</span>
                  <span className="text-slate-400 font-mono">Bhabua, Bihar, India</span>
                </div>
              </div>

              {/* View Projects shortcut */}
              <div className="pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#102A56] hover:text-[#0EA5E9] transition-colors"
                >
                  <span>Explore websites built during this experience</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0EA5E9]" />
                </a>
              </div>

            </div>

            {/* Right 7 Cols: Highlighted Skills Grid */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#102A56] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0EA5E9]" />
                  <span>Core Expertise & Focus Areas</span>
                </h4>
                <span className="text-xs text-slate-400 font-mono">6 Key Disciplines</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlightedSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#0EA5E9]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${skill.accent} group-hover:scale-105 transition-transform shadow-2xs`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-mono text-slate-400">0{index + 1}</span>
                        </div>

                        <h5 className="text-sm font-bold text-[#102A56] group-hover:text-[#0EA5E9] transition-colors">
                          {skill.name}
                        </h5>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Production Tested</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quick Metric summary bar */}
              <div className="pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#0EA5E9]" />
                    <span>Real-world client websites delivered across hospitality & dining</span>
                  </div>
                  {onOpenHireMe && (
                    <button
                      type="button"
                      onClick={onOpenHireMe}
                      className="inline-flex items-center gap-1 font-bold text-[#0EA5E9] hover:underline cursor-pointer"
                    >
                      <span>Inquire for your business</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
