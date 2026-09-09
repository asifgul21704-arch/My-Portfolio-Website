import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Process
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 font-mono">
            How we turn ideas into reliable web solutions.
          </p>
        </div>

        {/* 4-Step Visual Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PROCESS_STEPS.map((stepItem, index) => (
            <div
              key={stepItem.step}
              id={`process-step-${stepItem.step}`}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800/80 flex flex-col justify-between relative group hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-neutral-300 dark:text-neutral-700 group-hover:text-emerald-500/80 transition-colors">
                {stepItem.step}
              </div>
              <div className="mt-8">
                <div className="text-lg font-bold text-neutral-900 dark:text-white">
                  {stepItem.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
