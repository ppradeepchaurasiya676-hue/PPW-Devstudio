import React from 'react';
import { ArrowUp, Sparkles, Mail, MessageSquare, Github, Linkedin, PhoneCall, Instagram } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102A56] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Monogram Badge */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-white via-sky-100 to-[#0EA5E9] text-[#102A56] font-bold tracking-wider shadow-sm">
                <span className="text-sm font-extrabold tracking-tight">PPW</span>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FBBF24] ring-2 ring-[#102A56]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-extrabold text-lg tracking-tight text-white">PPW</span>
                  <span className="font-light text-lg text-[#0EA5E9]">DevStudio</span>
                </div>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400">
                  By {BRAND_INFO.ownerName}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              "{BRAND_INFO.tagline}"
            </p>
            <p className="text-xs text-slate-400">
              Web Developer | AI Enthusiast | Data Analytics. Delivering modern, responsive, and performance-tuned web experiences.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0EA5E9] block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Me</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Skills & Tech</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#satisfaction" className="hover:text-white transition-colors">Client Satisfaction</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect & Direct Channels */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0EA5E9] block">
              Connect With Pradeep
            </span>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Based in {BRAND_INFO.location}. Open for freelance engagements, frontend consulting, and full-time remote roles.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-[#0EA5E9] flex items-center justify-center transition-all shadow-xs"
                title="Email Pradeep"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-emerald-600 flex items-center justify-center transition-all shadow-xs"
                title="WhatsApp Direct (+91 76542 24826)"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BRAND_INFO.phone.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-emerald-700 flex items-center justify-center transition-all shadow-xs"
                title="Call Pradeep (+91 76542 24826)"
              >
                <PhoneCall className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 flex items-center justify-center transition-all shadow-xs"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-sky-700 flex items-center justify-center transition-all shadow-xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} PPW DevStudio. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Designed & engineered by Pradeep.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
