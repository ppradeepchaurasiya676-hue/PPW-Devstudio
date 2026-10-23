import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenHireMe: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHireMe }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Satisfaction', href: '#satisfaction', id: 'satisfaction' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 select-none"
            aria-label="PPW DevStudio Home"
          >
            {/* Monogram Badge */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#102A56] via-[#163870] to-[#0EA5E9] shadow-sm text-white font-bold tracking-wider group-hover:shadow-md transition-all duration-300">
              <span className="text-sm font-extrabold tracking-tight text-white flex items-center">
                PPW
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FBBF24] ring-2 ring-white"></span>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-extrabold text-lg text-[#102A56] tracking-tight">PPW</span>
                <span className="font-light text-lg text-[#0EA5E9] tracking-normal">DevStudio</span>
              </div>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-600 mt-1">
                By {BRAND_INFO.ownerName}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#0EA5E9] font-semibold'
                      : 'text-slate-600 hover:text-[#102A56]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0EA5E9] rounded-full animate-in fade-in duration-200" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button: Hire Me */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenHireMe}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#102A56] to-[#0EA5E9] hover:from-[#0c2246] hover:to-[#0284c7] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-98"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenHireMe}
              className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#0EA5E9] shadow-xs mr-1"
            >
              Hire Me
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#102A56] hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-sky-50 text-[#0EA5E9] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireMe();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#102A56] text-white font-semibold text-sm shadow-sm hover:bg-[#0c2246]"
              >
                <span>Hire Me for a Project</span>
                <Sparkles className="w-4 h-4 text-[#FBBF24]" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
