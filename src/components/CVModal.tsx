import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, Github, MapPin, ExternalLink, GraduationCap, Award, Globe } from 'lucide-react';
import { CV_DATA } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
      id="cv-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white text-neutral-900 rounded-2xl shadow-2xl overflow-hidden my-8"
        id="cv-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Header (hidden in print) */}
        <div className="print:hidden flex items-center justify-between px-6 py-4 bg-neutral-900 text-white border-b border-neutral-800">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <h2 className="text-sm font-semibold tracking-wide uppercase font-mono">Curriculum Vitae</h2>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              id="cv-print-button"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-neutral-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              id="cv-close-button"
              className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
              aria-label="Close CV"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Printable Sheet */}
        <div className="p-8 sm:p-10 space-y-6 text-neutral-800 bg-white" id="cv-printable-content">
          {/* Header Block */}
          <div className="border-b border-neutral-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-950 font-sans">
                  {CV_DATA.name}
                </h1>
                <p className="text-base font-semibold text-emerald-700 mt-1">
                  {CV_DATA.title}
                </p>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                  {CV_DATA.experience}
                </div>
              </div>

              {/* Contact Information */}
              <div className="text-xs space-y-1.5 text-neutral-600 sm:text-right font-mono">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <a href={`mailto:${CV_DATA.contact.email}`} className="hover:text-emerald-600 underline">
                    {CV_DATA.contact.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{CV_DATA.contact.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Github className="w-3.5 h-3.5 text-neutral-400" />
                  <a href={CV_DATA.contact.github} target="_blank" rel="noreferrer" className="hover:text-emerald-600 underline">
                    github.com/asifgul21704-arch
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Experience</span>
              </h2>
              <div className="border-l-2 border-emerald-500/40 pl-3">
                <div className="font-semibold text-neutral-900 text-sm">
                  {CV_DATA.freelanceExperience.role}
                </div>
                <div className="text-xs text-emerald-700 font-mono font-medium mb-2">
                  {CV_DATA.freelanceExperience.period}
                </div>
                <ul className="space-y-1 text-xs text-neutral-600 list-disc list-inside">
                  {CV_DATA.freelanceExperience.points.map((pt, idx) => (
                    <li key={idx} className="leading-relaxed">{pt}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>Education</span>
              </h2>
              <div className="border-l-2 border-neutral-300 pl-3">
                <div className="font-semibold text-neutral-900 text-sm">
                  {CV_DATA.education.degree}
                </div>
                <div className="text-xs text-neutral-600 mt-0.5">
                  {CV_DATA.education.institution}
                </div>
              </div>

              {/* Languages */}
              <div className="mt-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono mb-2 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>Languages</span>
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {CV_DATA.languages.map((lang) => (
                    <span key={lang} className="text-xs px-2.5 py-1 rounded bg-neutral-100 text-neutral-800 font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono mb-2.5">
              Technical Stack
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {CV_DATA.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-100 text-neutral-800 border border-neutral-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Certifications & Training */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono mb-2.5">
              Certificates & Specialized Training
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CV_DATA.training.map((course, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700 bg-neutral-50 p-2 rounded border border-neutral-200/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info (print:hidden) */}
        <div className="print:hidden px-8 py-3 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
          <span>M. Asif Khan — One-Page Professional CV</span>
          <button
            onClick={handlePrint}
            className="text-emerald-700 font-medium hover:underline flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save as PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
