import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Check, Copy, ExternalLink, Sparkles, MapPin, AlertCircle, PhoneCall } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../data/portfolioData';
import { ContactFormData } from '../types';

interface ContactProps {
  selectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: selectedService || 'Website Development',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync service if prop changes
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const sanitizeHeader = (str: string) => {
    // Strip CRLF to prevent email header injection
    return str.replace(/[\r\n]+/g, ' ').trim();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setFormError('Please complete all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const getMailtoLink = () => {
    const cleanName = sanitizeHeader(formData.name.slice(0, 80));
    const cleanService = sanitizeHeader(formData.service.slice(0, 80));
    const cleanEmail = sanitizeHeader(formData.email.slice(0, 100));
    const cleanMessage = formData.message.slice(0, 3000);

    const subject = encodeURIComponent(`Project Inquiry: ${cleanService} - from ${cleanName}`);
    const body = encodeURIComponent(
      `Hello Pradeep,\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nService: ${cleanService}\n\nProject Scope:\n${cleanMessage}\n\n---\nSent via PPW DevStudio Portfolio`
    );
    return `mailto:${BRAND_INFO.email}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppMessage = () => {
    const cleanName = sanitizeHeader(formData.name.slice(0, 50));
    const cleanService = sanitizeHeader(formData.service.slice(0, 50));
    const text = encodeURIComponent(
      `Hello Pradeep, my name is ${cleanName || 'a client'}. I would like to discuss a ${cleanService || 'web'} project.`
    );
    return `https://wa.me/917654224826?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
            Get In Touch
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A56] tracking-tight">
            Let's Build Something Amazing
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Contact Cards & Direct WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with 1-Click Copy */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0EA5E9] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#0EA5E9] hover:border-sky-300 transition-all cursor-pointer shadow-2xs"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Direct Email Address
                </span>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="block text-sm sm:text-base font-bold text-[#102A56] hover:text-[#0EA5E9] transition-colors break-all mt-0.5"
                >
                  {BRAND_INFO.email}
                </a>
              </div>
              <p className="text-xs text-slate-500">
                Guaranteed response within 24 business hours for quotes & inquiries.
              </p>
            </div>

            {/* Direct WhatsApp Option */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white backdrop-blur-xs">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-md">
                  Instant Chat
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold">Connect on WhatsApp / Call</h3>
                <p className="text-xs text-emerald-100 mt-1 leading-relaxed">
                  Direct Line: <strong className="text-white font-mono">{BRAND_INFO.phone}</strong>
                </p>
                <p className="text-[11px] text-emerald-200 mt-0.5">
                  Have a quick question or urgent project? Chat with Pradeep directly for real-time discussion.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white text-emerald-800 font-bold text-xs shadow-sm hover:bg-emerald-50 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${BRAND_INFO.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-800/60 hover:bg-emerald-800 text-white font-bold text-xs border border-white/20 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>Call Direct</span>
                </a>
              </div>
            </div>

            {/* Studio Info & Location */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-[#0EA5E9] shrink-0" />
                <span>Operating from {BRAND_INFO.location} · Serving clients globally</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <Sparkles className="w-4 h-4 text-[#FBBF24] shrink-0" />
                <span>{BRAND_INFO.availability}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm">
            
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#102A56]">Message Prepared, {formData.name.slice(0, 40)}!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your inquiry has been compiled safely without transmitting credentials across insecure channels. Click below to launch your email client or connect via WhatsApp.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={getMailtoLink()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0EA5E9] hover:bg-[#0284c7] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </a>

                  <a
                    href={getWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Website Development',
                        message: '',
                      });
                    }}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="text-lg font-bold text-[#102A56]">Send a Direct Project Message</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill out the fields below and Pradeep will get back to you promptly.
                  </p>
                </div>

                {formError && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={80}
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#102A56] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={100}
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#102A56] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all"
                    />
                  </div>
                </div>

                {/* Service Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#102A56] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Full Stack Custom Package">Full Stack Custom Package</option>
                    <option value="General Project Consultation">General Project Consultation</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Project Details & Scope <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    maxLength={3000}
                    placeholder="Tell me about your business, desired features, goals, or launch timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#102A56] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#102A56] via-[#163870] to-[#0EA5E9] hover:from-[#0c2246] hover:to-[#0284c7] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-70 active:scale-98"
                  >
                    {isSubmitting ? (
                      <span>Preparing Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Privacy protected · No client-side credentials exposed</span>
                  <span>Direct delivery to {BRAND_INFO.ownerName}</span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
