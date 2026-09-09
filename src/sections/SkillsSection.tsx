import React from 'react';
import { SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section className="py-16 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Core Technologies
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Tools and frameworks I use to build scalable web applications.
            </p>
          </div>

          <div className="md:w-2/3 flex flex-wrap gap-2 sm:gap-2.5">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700/60 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors select-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
