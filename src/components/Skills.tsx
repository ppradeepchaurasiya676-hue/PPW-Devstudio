import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Core' | 'Frontend' | 'Data & AI' | 'Tools'>('All');

  const categories = ['All', 'Core', 'Frontend', 'Data & AI', 'Tools'] as const;

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  // SVG Logos or Badges for the authentic skills
  const renderTechIcon = (name: string) => {
    switch (name) {
      case 'HTML':
        return (
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm tracking-tighter border border-orange-100">
            &lt;/&gt;
          </div>
        );
      case 'CSS':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm border border-blue-100">
            #CSS
          </div>
        );
      case 'JavaScript':
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm font-mono border border-amber-100">
            JS
          </div>
        );
      case 'React':
        return (
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center font-bold text-sm border border-sky-100">
            ⚛
          </div>
        );
      case 'Python':
        return (
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm font-mono border border-indigo-100">
            py
          </div>
        );
      case 'Git':
        return (
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm border border-rose-100">
            git
          </div>
        );
      case 'Data Visualization':
        return (
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm border border-emerald-100">
            📊
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm">
            {name.slice(0, 2)}
          </div>
        );
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#FFFFFF] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
            Core Competencies
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A56] tracking-tight">
            My Skills & Technologies
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The proven tools and languages I utilize daily to engineer fast, clean, and responsive digital products.
          </p>

          {/* Interactive Category Filter Tabs (Zero-pill button design) */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center p-1.5 bg-slate-100/80 rounded-xl border border-slate-200/60 gap-1 overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-white text-[#102A56] font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.name}
              className="group bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 hover:border-[#0EA5E9]/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {renderTechIcon(skill.name)}
                  
                  {/* Clean unboxed metadata separator */}
                  <div className="text-xs text-slate-400 font-medium">
                    <span>{skill.category}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#102A56] group-hover:text-[#0EA5E9] transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Clean Level Indicator without pill badges */}
              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Capability</span>
                <span className="font-semibold text-[#102A56]">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Authenticity Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            Honest engineering values: Every listed skill represents hands-on project implementation and practical development experience.
          </p>
        </div>

      </div>
    </section>
  );
};
