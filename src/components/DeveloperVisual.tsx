import React from 'react';
import { Terminal, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { PROFILE_IMAGE_URL } from '../data/portfolioData';

export const DeveloperVisual: React.FC = () => {
  // If user provides their real profile image URL later, show it with high-end styling
  if (PROFILE_IMAGE_URL && PROFILE_IMAGE_URL.trim() !== '') {
    return (
      <div className="relative group w-full max-w-md mx-auto aspect-square">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/20 rounded-2xl blur-lg transition duration-500 group-hover:opacity-100" />
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-800 dark:border-neutral-800 bg-neutral-900">
          <img
            src={PROFILE_IMAGE_URL}
            alt="M. Asif Khan"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  // Professional abstract coding visual inspired by premium SaaS editors
  return (
    <div className="relative w-full max-w-lg mx-auto select-none" id="abstract-developer-visual">
      {/* Subtle ambient backdrop glow */}
      <div className="absolute -top-6 -left-6 w-60 h-60 bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -right-8 w-60 h-60 bg-teal-500/15 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Code Window */}
      <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/90 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-100/90 dark:bg-neutral-900/90 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center space-x-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <Terminal className="w-3.5 h-3.5 text-emerald-500" />
            <span>asif-khan.dev — fullstack</span>
          </div>
          <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            v3.2.0
          </div>
        </div>

        {/* Code View */}
        <div className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto text-neutral-800 dark:text-neutral-200 bg-neutral-50/50 dark:bg-neutral-950/60">
          <div className="flex space-x-3">
            <span className="text-neutral-400 select-none text-right w-5">01</span>
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">const</span>{' '}
              <span className="text-sky-600 dark:text-sky-300">developer</span> = &#123;
            </div>
          </div>

          <div className="flex space-x-3">
            <span className="text-neutral-400 select-none text-right w-5">02</span>
            <div className="pl-4">
              <span className="text-neutral-600 dark:text-neutral-400">name:</span>{' '}
              <span className="text-amber-600 dark:text-amber-300">"M. Asif Khan"</span>,
            </div>
          </div>

          <div className="flex space-x-3">
            <span className="text-neutral-400 select-none text-right w-5">03</span>
            <div className="pl-4">
              <span className="text-neutral-600 dark:text-neutral-400">role:</span>{' '}
              <span className="text-amber-600 dark:text-amber-300">"Full-Stack Web Developer"</span>,
            </div>
          </div>

          <div className="flex space-x-3">
            <span className="text-neutral-400 select-none text-right w-5">04</span>
            <div className="pl-4">
              <span className="text-neutral-600 dark:text-neutral-400">focus:</span>{' '}
              <span className="text-amber-600 dark:text-amber-300">"Modern, Scalable Web Apps"</span>,
            </div>
          </div>

          <div className="flex space-x-3">
            <span className="text-neutral-400 select-none text-right w-5">05</span>
            <div className="pl-4">
              <span className="text-neutral-600 dark:text-neutral-400">availability:</span>{' '}
              <span className="text-emerald-600 dark:text-emerald-400">true</span>,
            </div>
          </div>

          <div className="flex space-x-3">
            <span className="text-neutral-400 select-none text-right w-5">06</span>
            <div className="pl-4">
              <span className="text-neutral-600 dark:text-neutral-400">stack:</span> [
              <span className="text-teal-600 dark:text-teal-300">"React"</span>,{' '}
              <span className="text-teal-600 dark:text-teal-300">"Node.js"</span>,{' '}
              <span className="text-teal-600 dark:text-teal-300">"Express"</span>,{' '}
              <span className="text-teal-600 dark:text-teal-300">"MongoDB"</span>]
            </div>
          </div>

          <div className="flex space-x-3">
            <span className="text-neutral-400 select-none text-right w-5">07</span>
            <div>&#125;;</div>
          </div>

          <div className="flex space-x-3 mt-1">
            <span className="text-neutral-400 select-none text-right w-5">08</span>
            <div>
              <span className="text-purple-600 dark:text-purple-400 font-semibold">export async function</span>{' '}
              <span className="text-blue-600 dark:text-blue-300">buildProject</span>() &#123;
            </div>
          </div>

          <div className="flex space-x-3">
            <span className="text-neutral-400 select-none text-right w-5">09</span>
            <div className="pl-4">
              <span className="text-purple-600 dark:text-purple-400 font-semibold">await</span>{' '}
              <span className="text-sky-600 dark:text-sky-300">craftCleanCode</span>();
            </div>
          </div>

          <div className="flex space-x-3">
            <span className="text-neutral-400 select-none text-right w-5">10</span>
            <div className="pl-4">
              <span className="text-purple-600 dark:text-purple-400 font-semibold">return</span>{' '}
              <span className="text-emerald-600 dark:text-emerald-400">&#123; status: "shipped", impact: "high" &#125;</span>;
            </div>
          </div>

          <div className="flex space-x-3">
            <span className="text-neutral-400 select-none text-right w-5">11</span>
            <div>&#125;</div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Ready to collaborate</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1">
              <Cpu className="w-3 h-3 text-neutral-400" />
              TypeScript
            </span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-3 h-3" />
              Production Ready
            </span>
          </div>
        </div>
      </div>

      {/* Floating mini badge: Clean Architecture */}
      <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl flex items-center space-x-2 text-xs font-medium text-neutral-700 dark:text-neutral-300">
        <Code2 className="w-4 h-4 text-emerald-500" />
        <span>Clean Code Architecture</span>
      </div>

      {/* Floating mini badge: High Performance */}
      <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl flex items-center space-x-2 text-xs font-medium text-neutral-700 dark:text-neutral-300">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span>Fast & Responsive</span>
      </div>
    </div>
  );
};
