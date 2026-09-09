import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-base font-bold text-neutral-950 dark:text-white tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-neutral-500 font-mono mt-0.5">
              {PERSONAL_INFO.role}
            </span>
          </div>

          {/* Minimal Links */}
          <div className="flex items-center space-x-6 text-xs font-medium">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github-link"
              className="hover:text-emerald-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-link"
              className="hover:text-emerald-500 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              id="footer-email-link"
              className="hover:text-emerald-500 transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-neutral-500 dark:text-neutral-500 font-mono">
            © 2026 {PERSONAL_INFO.name}
          </div>
        </div>
      </div>
    </footer>
  );
};
