import React from 'react';
import { ArrowRight, MessageSquare, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DeveloperVisual } from '../components/DeveloperVisual';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Badge */}
            <div
              id="hero-availability-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Freelance Work</span>
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1] mb-6">
              Modern Websites. <br />
              <span className="text-emerald-600 dark:text-emerald-400">
                Built to Grow.
              </span>
            </h1>

            {/* Short Text */}
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed mb-8">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('#work')}
                id="hero-btn-work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                id="hero-btn-talk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 text-sm font-medium transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>Let's Talk</span>
              </button>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-btn-whatsapp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-all shadow-sm active:scale-95"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.202.301-.778.979-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.501.101-.2.051-.376-.025-.526-.076-.15-.677-1.633-.928-2.238-.244-.59-.493-.51-.677-.52l-.577-.01c-.201 0-.527.075-.802.376-.276.301-1.054 1.03-1.054 2.513 0 1.482 1.08 2.912 1.23 3.113.151.2 2.125 3.245 5.15 4.551.719.31 1.28.496 1.718.635.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35z" />
                  <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.86.51 3.6 1.398 5.105L2 22l5.05-1.325c1.45.795 3.109 1.245 4.954 1.245 5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zm0 18.257c-1.603 0-3.092-.44-4.38-1.206l-.314-.186-3.25.852.868-3.167-.204-.325A8.225 8.225 0 0 1 3.75 12.004c0-4.552 3.702-8.254 8.254-8.254 4.552 0 8.254 3.702 8.254 8.254 0 4.552-3.702 8.253-8.254 8.253z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <DeveloperVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
