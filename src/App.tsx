import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { QuickIntroSection } from './sections/QuickIntroSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { AboutSection } from './sections/AboutSection';
import { ProcessSection } from './sections/ProcessSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CVModal } from './components/CVModal';
import { NotFoundPage } from './components/NotFoundPage';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Check if the current route is not root or hash
    const path = window.location.pathname;
    if (path && path !== '/' && path !== '/index.html') {
      setIs404(true);
    }
  }, []);

  if (is404) {
    return <NotFoundPage />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans transition-colors duration-200 selection:bg-emerald-500/20 selection:text-emerald-500">
        {/* Navigation Bar */}
        <Navbar onOpenCV={() => setIsCVOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <HeroSection />
          <QuickIntroSection />
          <ServicesSection />
          <ProjectsSection />
          <SkillsSection />
          <AboutSection onOpenCV={() => setIsCVOpen(true)} />
          <ProcessSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Action */}
        <WhatsAppFloatingButton />

        {/* Curriculum Vitae Modal */}
        <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
