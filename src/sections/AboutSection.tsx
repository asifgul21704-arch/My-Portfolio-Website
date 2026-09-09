import React from 'react';
import { GraduationCap, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenCV: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV }) => {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm relative overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white mb-6">
            About
          </h2>

          {/* Prompt exact text */}
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
            {PERSONAL_INFO.aboutText}
          </p>

          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            {/* Education */}
            <div className="flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider">
                  Education
                </div>
                <div className="text-base font-bold text-neutral-900 dark:text-white mt-0.5">
                  {PERSONAL_INFO.education.degree}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  {PERSONAL_INFO.education.institution}
                </div>
              </div>
            </div>

            {/* Download CV Action */}
            <button
              onClick={onOpenCV}
              id="about-download-cv-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 text-xs font-semibold transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-500" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
