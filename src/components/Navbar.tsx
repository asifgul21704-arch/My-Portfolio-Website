import React, { useState, useEffect } from 'react';
import { Github, Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/85 dark:bg-neutral-950/85 bg-white/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left Branding */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex flex-col group cursor-pointer"
          id="nav-brand"
        >
          <span className="text-base font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-emerald-500 transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            {PERSONAL_INFO.subtitle}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Download CV quick link (desktop) */}
          <button
            onClick={onOpenCV}
            id="nav-cv-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:text-emerald-500 dark:hover:text-emerald-400 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 transition-colors"
            title="Download CV"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-500" />
            <span>CV</span>
          </button>

          {/* GitHub Icon */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github-link"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Github className="w-4.5 h-4.5" />
          </a>

          {/* WhatsApp Icon */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-link"
            aria-label="Chat on WhatsApp"
            className="p-2 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
          >
            <svg
              className="w-4.5 h-4.5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.677.15-.202.301-.778.979-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.501.101-.2.051-.376-.025-.526-.076-.15-.677-1.633-.928-2.238-.244-.59-.493-.51-.677-.52l-.577-.01c-.201 0-.527.075-.802.376-.276.301-1.054 1.03-1.054 2.513 0 1.482 1.08 2.912 1.23 3.113.151.2 2.125 3.245 5.15 4.551.719.31 1.28.496 1.718.635.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35z" />
              <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.86.51 3.6 1.398 5.105L2 22l5.05-1.325c1.45.795 3.109 1.245 4.954 1.245 5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zm0 18.257c-1.603 0-3.092-.44-4.38-1.206l-.314-.186-3.25.852.868-3.167-.204-.325A8.225 8.225 0 0 1 3.75 12.004c0-4.552 3.702-8.254 8.254-8.254 4.552 0 8.254 3.702 8.254 8.254 0 4.552-3.702 8.253-8.254 8.253z" />
            </svg>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-btn"
            aria-label="Toggle light and dark theme"
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-lg px-4 py-5 shadow-lg"
          id="mobile-navigation-drawer"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium py-2 px-3 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="flex items-center gap-2 text-base font-medium py-2 px-3 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-neutral-800 transition-colors text-left"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
