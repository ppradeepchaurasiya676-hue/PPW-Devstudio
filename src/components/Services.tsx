import React from 'react';
import { Code2, Layout, Sparkles, BarChart3, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-6 h-6" />;
      case 'Layout':
        return <Layout className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6" />;
      default:
        return <Code2 className="w-6 h-6" />;
    }
  };

  const handleInquire = (title: string) => {
    onSelectService(title);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
            What I Deliver
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A56] tracking-tight">
            My Services
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            High-caliber digital solutions tailored to elevate your business, attract customers, and automate workflows.
          </p>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#0EA5E9]/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent Top Border Bar on Hover */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#102A56] group-hover:to-[#0EA5E9] rounded-b transition-all duration-300" />

                <div className="space-y-5">
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-xl bg-sky-50 text-[#0EA5E9] group-hover:bg-[#102A56] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-[#0EA5E9] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#102A56] group-hover:text-[#0EA5E9] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Highlights
                    </span>
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquiry Action */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => handleInquire(service.title)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold text-[#102A56] bg-slate-50 group-hover:bg-[#102A56] group-hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <span>Inquire for Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-[#FBBF24] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#102A56]">Need a Custom Solution or Combination?</h4>
              <p className="text-xs text-slate-500">
                I can craft an integrated package combining Web Development, AI automations, and Analytics.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleInquire('Full Stack Custom Package')}
            className="shrink-0 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0EA5E9] hover:bg-[#0284c7] transition-colors cursor-pointer"
          >
            Get Custom Estimate
          </button>
        </div>

      </div>
    </section>
  );
};
