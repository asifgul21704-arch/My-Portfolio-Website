import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 print:hidden flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-lg border border-neutral-800 dark:border-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat with M. Asif Khan on WhatsApp"
        className="relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Subtle ping animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 animate-ping pointer-events-none" />

        {/* Real WhatsApp SVG icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.202.301-.778.979-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.501.101-.2.051-.376-.025-.526-.076-.15-.677-1.633-.928-2.238-.244-.59-.493-.51-.677-.52l-.577-.01c-.201 0-.527.075-.802.376-.276.301-1.054 1.03-1.054 2.513 0 1.482 1.08 2.912 1.23 3.113.151.2 2.125 3.245 5.15 4.551.719.31 1.28.496 1.718.635.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35z" />
          <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.86.51 3.6 1.398 5.105L2 22l5.05-1.325c1.45.795 3.109 1.245 4.954 1.245 5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zm0 18.257c-1.603 0-3.092-.44-4.38-1.206l-.314-.186-3.25.852.868-3.167-.204-.325A8.225 8.225 0 0 1 3.75 12.004c0-4.552 3.702-8.254 8.254-8.254 4.552 0 8.254 3.702 8.254 8.254 0 4.552-3.702 8.253-8.254 8.253z" />
        </svg>
      </a>
    </div>
  );
};
