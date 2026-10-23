import React from 'react';
import {
  HeartHandshake,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  MessageSquare,
  RefreshCw,
  Sparkles,
  ArrowUpRight,
  Check,
  Shield,
  Layers
} from 'lucide-react';

interface ClientSatisfactionProps {
  onOpenHireMe: () => void;
}

export const ClientSatisfaction: React.FC<ClientSatisfactionProps> = ({ onOpenHireMe }) => {
  const highlights = [
    {
      title: 'Client-Focused Approach',
      description:
        "Aligning technical execution with the client's business vision, audience expectations, and commercial goals from day one.",
      icon: HeartHandshake,
      badge: 'Core Philosophy',
      accent: 'from-sky-500 to-blue-600',
    },
    {
      title: 'Quality-Driven Development',
      description:
        'Crafting clean, modular TypeScript code with zero clutter, fast performance, and rock-solid architectural foundations.',
      icon: ShieldCheck,
      badge: 'Code Integrity',
      accent: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Modern & Responsive Design',
      description:
        'Ensuring fluid user interfaces that adapt seamlessly across smartphones, tablets, laptops, and high-DPI displays.',
      icon: Smartphone,
      badge: 'Cross-Device',
      accent: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Attention to Detail',
      description:
        'Focusing on fine-tuned typography, harmonic spacing, smooth micro-interactions, and rigorous cross-browser consistency.',
      icon: CheckCircle2,
      badge: 'Pixel Precision',
      accent: 'from-sky-600 to-cyan-600',
    },
    {
      title: 'Clear Communication',
      description:
        'Maintaining prompt, transparent updates, direct WhatsApp & email access, and clear milestone progress without jargon.',
      icon: MessageSquare,
      badge: 'Transparent',
      accent: 'from-blue-500 to-sky-600',
    },
    {
      title: 'Continuous Improvement',
      description:
        'Iterating actively based on real-world requirements, testing rigorously, and supporting clients after live deployment.',
      icon: RefreshCw,
      badge: 'Long-Term Value',
      accent: 'from-indigo-600 to-sky-600',
    },
  ];

  const commitments = [
    'Direct communication with the developer throughout the build lifecycle',
    'Pixel-perfect responsiveness across all screen sizes and modern browsers',
    'Clean, maintainable codebase ready for future expansions and SEO growth',
    'Post-launch deployment support and guidance on running your live website',
  ];

  return (
    <section id="satisfaction" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden border-t border-slate-100">
      {/* Background Subtle Ambience Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-50 via-slate-50/60 to-transparent rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
            Trust & Quality Standards
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A56] tracking-tight">
            Client Satisfaction Comes First
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            My goal is to create websites that clients love. I focus on modern design, smooth user experience, responsive layouts, and attention to every detail. Every project is an opportunity to turn a client's vision into a professional digital experience.
          </p>
        </div>

        {/* 6 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-[#0EA5E9]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0EA5E9] border border-sky-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0EA5E9] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Icon className="w-6 h-6 transition-colors" />
                    </div>

                    <span className="text-[11px] font-semibold text-slate-500 bg-white border border-slate-200/70 px-2.5 py-1 rounded-md shadow-2xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#102A56] group-hover:text-[#0EA5E9] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom subtle indicator line */}
                <div className="pt-5 mt-5 border-t border-slate-200/50 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px]">Principle 0{idx + 1}</span>
                  <span className="text-[#0EA5E9] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Quality Assured
                    <Check className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Commitment & Trust Guarantee Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-white via-sky-50/50 to-white border border-sky-200/80 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 cols: Pledge & Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#0EA5E9] text-xs font-bold">
                <Shield className="w-3.5 h-3.5" />
                <span>The PPW DevStudio Standard</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#102A56] tracking-tight">
                Dedicated Collaboration for Measurable Real-World Results
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than rushing templates or making unverified claims, I partner closely with clients from architecture to production deployment. Every design decision is made with transparency, functionality, and longevity in mind.
              </p>

              {/* Commitments checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {commitments.map((c, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Direct CTA */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md space-y-5 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#102A56] text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#FBBF24]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#102A56]">Ready to Start Your Project?</h4>
                  <p className="text-xs text-slate-500">Fast initial response within 24 hours</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you need a full website for your hotel, restaurant, or business, let's discuss your requirements and create a personalized plan.
              </p>

              <div className="pt-1 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenHireMe}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#102A56] to-[#0EA5E9] hover:from-[#0d2246] hover:to-[#0284c7] transition-all shadow-sm cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs font-semibold text-[#102A56] bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Contact Form
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
