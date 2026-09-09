import React, { useState } from 'react';
import { Mail, Phone, Github, Send, CheckCircle2, AlertCircle, ArrowUpRight, Loader2, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Business Websites',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [isConfigMissing, setIsConfigMissing] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');
    setIsConfigMissing(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setStatusMessage('Message sent successfully.');
        setIsConfigMissing(false);
        setFormData({
          name: '',
          email: '',
          service: 'Business Websites',
          message: '',
        });
      } else {
        setStatus('error');
        setIsConfigMissing(Boolean(data.isConfigMissing));
        setStatusMessage(
          data.error || 'Unable to deliver message through automated email right now.'
        );
      }
    } catch (err: any) {
      setStatus('error');
      setStatusMessage('Network error. Please reach out directly via WhatsApp or email.');
    }
  };

  // Pre-fill WhatsApp message with typed message if user wants to fallback
  const getWhatsAppFallbackUrl = () => {
    const text = encodeURIComponent(
      `Hello M. Asif Khan, my name is ${formData.name || 'Client'}. ${formData.message || 'I would like to discuss a project.'}`
    );
    return `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`;
  };

  // Pre-fill mailto URL with typed message as fallback
  const getMailtoFallbackUrl = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.service || 'Web Development'} - ${formData.name || 'Client'}`
    );
    const body = encodeURIComponent(
      `Hi M. Asif Khan,\n\nName: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}\nService: ${formData.service || 'Web Development'}\n\nMessage:\n${formData.message || ''}\n`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Have a project in mind?
          </h2>
          <p className="text-lg sm:text-xl text-emerald-600 dark:text-emerald-400 font-medium mt-3">
            Let's build something great.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Whether you have an upcoming web project, need technical consultation, or want to discuss a custom application, feel free to reach out.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 transition-colors group"
                id="contact-email-link"
              >
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:text-emerald-500 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 font-sans">Email</div>
                  <div className="text-neutral-900 dark:text-neutral-200 font-medium">{PERSONAL_INFO.email}</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 transition-colors group"
                id="contact-whatsapp-link"
              >
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:text-emerald-500 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 font-sans">WhatsApp</div>
                  <div className="text-neutral-900 dark:text-neutral-200 font-medium">{PERSONAL_INFO.phone}</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 transition-colors group"
                id="contact-github-link"
              >
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:text-emerald-500 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 font-sans">GitHub</div>
                  <div className="text-neutral-900 dark:text-neutral-200 font-medium">github.com/asifgul21704-arch</div>
                </div>
              </a>
            </div>

            {/* Prompt Requested Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="btn-email-me"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-whatsapp-me"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-sm shadow-emerald-950/20"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp Me</span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-github-me"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real Email Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 shadow-xl shadow-neutral-950/5 relative">
              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono mb-1.5">
                    Service
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other / Custom Inquiry">Other / Custom Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project goals and requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Status Feedback Notice */}
                {status === 'success' && (
                  <div
                    id="contact-status-success"
                    className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div
                    id="contact-status-error"
                    className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/25 text-rose-700 dark:text-rose-300 text-xs space-y-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" />
                      <div className="space-y-1">
                        <div className="font-semibold leading-snug">{statusMessage}</div>
                        {isConfigMissing && (
                          <p className="text-[11px] text-neutral-600 dark:text-neutral-400 font-mono leading-relaxed">
                            (Requires <span className="text-emerald-500 font-bold">SMTP_PASS</span> in environment settings for direct server delivery. Your message is safe below:)
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Instant 1-click fallback actions so client inquiry is never lost */}
                    <div className="pt-2 border-t border-rose-500/15 flex flex-wrap items-center gap-2">
                      <a
                        href={getWhatsAppFallbackUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Send via WhatsApp</span>
                      </a>

                      <a
                        href={getMailtoFallbackUrl()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-semibold text-xs transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open in Email App</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  id="contact-submit-button"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-neutral-600 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-950/20 active:scale-[0.99] cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
