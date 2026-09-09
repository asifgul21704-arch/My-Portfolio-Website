import React from 'react';
import { QUICK_STATS } from '../data/portfolioData';

export const QuickIntroSection: React.FC = () => {
  return (
    <section className="py-8 border-y border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 divide-x divide-neutral-200 dark:divide-neutral-800">
          {QUICK_STATS.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center ${
                index > 0 ? 'pl-4 sm:pl-8' : ''
              }`}
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
