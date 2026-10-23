import React, { useState } from 'react';
import { X, Sparkles, Send, Check, MessageSquare } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../data/portfolioData';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website Development',
    timeline: 'Within 2-4 weeks',
    budget: '$500 - $1,500',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedDesc = formData.description.trim();

    if (!trimmedName || !trimmedEmail || !trimmedDesc) {
      setError('Please fill in all required fields.');
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please provide a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const safeName = encodeURIComponent(formData.name.trim().slice(0, 50) || 'a client');
    const safeType = encodeURIComponent(formData.projectType.slice(0, 50));
    return `https://wa.me/917654224826?text=Hello%20Pradeep,%20I%20would%20like%20to%20hire%20PPW%20DevStudio%20for%20a%20${safeType}%20project.%20My%20name%20is%20${safeName}.`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-sky-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#102A56] to-[#0EA5E9] text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5 text-[#FBBF24]" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#102A56]">Hire PPW DevStudio</h3>
              <p className="text-xs text-slate-500">Collaborate with Pradeep on your next digital experience</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 text-rose-700 text-xs border border-rose-200">
              {error}
            </div>
          )}

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#102A56]">Inquiry Prepared!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, {formData.name.slice(0, 40)}. You can connect directly with Pradeep via WhatsApp or email.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Your Name *</label>
                  <input
                    type="text"
                    required
                    maxLength={80}
                    placeholder="e.g. Amit Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    maxLength={100}
                    placeholder="e.g. amit@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Primary Project Need</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Complete Custom Platform">Complete Custom Platform</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Expected Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
                  >
                    <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                    <option value="Standard (2-4 weeks)">Standard (2-4 weeks)</option>
                    <option value="Flexible (1-2 months)">Flexible (1-2 months)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Target Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
                  >
                    <option value="Standard Project">Standard Project</option>
                    <option value="Growth / High Feature">Growth / High Feature</option>
                    <option value="Custom Enterprise">Custom Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Project Description *</label>
                <textarea
                  required
                  rows={3}
                  maxLength={1500}
                  placeholder="Provide brief details about the website or application..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#102A56] to-[#0EA5E9] hover:from-[#0c2246] hover:to-[#0284c7] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Submit Project Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
