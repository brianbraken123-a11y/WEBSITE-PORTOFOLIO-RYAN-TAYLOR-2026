import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSummary } from './components/AboutSummary';
import { KeyStrengths } from './components/KeyStrengths';
import { CareerStoryTimeline } from './components/CareerStoryTimeline';
import { CareerProgressionHighlight } from './components/CareerProgressionHighlight';
import { WorkExperience } from './components/WorkExperience';
import { EntrepreneurshipSection } from './components/EntrepreneurshipSection';
import { CoreCompetencies } from './components/CoreCompetencies';
import { Education } from './components/Education';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvPreviewModal } from './components/CvPreviewModal';
import { LaunchPhotoModal } from './components/LaunchPhotoModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isLaunchModalOpen, setIsLaunchModalOpen] = useState(false);

  // Auto pop-up on launch as requested
  useEffect(() => {
    try {
      const hasSeen = localStorage.getItem('has_seen_launch_modal');
      if (!hasSeen) {
        const timer = setTimeout(() => {
          setIsLaunchModalOpen(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsLaunchModalOpen(true);
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-slate-900 dark:selection:bg-amber-400 selection:text-white dark:selection:text-slate-950 transition-colors duration-300">
        {/* Scroll Progress Indicator Bar at very top */}
        <ScrollProgress />

        {/* Sticky Navigation Bar */}
        <Navbar
          onOpenCvPreview={() => setIsCvModalOpen(true)}
          onOpenLaunchModal={() => setIsLaunchModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Dynamic, Communicative Hero Section */}
          <Hero
            onOpenCvPreview={() => setIsCvModalOpen(true)}
            onOpenLaunchModal={() => setIsLaunchModalOpen(true)}
          />

          {/* 2. About / Professional Summary */}
          <AboutSummary />

          {/* 3. Interactive Key Strengths Cards */}
          <KeyStrengths />

          {/* 4. Interactive Career Story Timeline */}
          <CareerStoryTimeline />

          {/* 5. Career Progression Highlight (Sunmore Coffee & Co.) */}
          <CareerProgressionHighlight />

          {/* 6. Interactive Work Experience Cards (Smooth Accordion) */}
          <WorkExperience />

          {/* 7. Business & Entrepreneurship Experience */}
          <EntrepreneurshipSection />

          {/* 8. Interactive Core Competencies (Expandable Grouped Skills) */}
          <CoreCompetencies />

          {/* 9. Education */}
          <Education />

          {/* 10. Contact & Download CV Section */}
          <ContactSection onOpenCvPreview={() => setIsCvModalOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Full CV Interactive Preview Modal */}
        <CvPreviewModal
          isOpen={isCvModalOpen}
          onClose={() => setIsCvModalOpen(false)}
        />

        {/* Exhibition Launch Photo Pop-up Modal */}
        <LaunchPhotoModal
          isOpen={isLaunchModalOpen}
          onClose={() => setIsLaunchModalOpen(false)}
          onOpenCvPreview={() => {
            setIsLaunchModalOpen(false);
            setIsCvModalOpen(true);
          }}
        />
      </div>
    </ThemeProvider>
  );
}
