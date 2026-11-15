import React from 'react';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { DirectorSpeech } from './components/home/DirectorSpeech';
import { AboutSection } from './components/sections/AboutSection';
import { StemSection } from './components/sections/StemSection';
import { TeachersSection } from './components/sections/TeachersSection';
import { StudentsSection } from './components/sections/StudentsSection';
import { NewsSection } from './components/sections/NewsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ClubsSection } from './components/sections/ClubsSection';
import { CabinetsSection } from './components/sections/CabinetsSection';
import { RegulationsSection } from './components/sections/RegulationsSection';
import { GallerySection } from './components/sections/GallerySection';
import { ContactSection } from './components/sections/ContactSection';
import { NewsModal } from './components/ui/NewsModal';
import { TeacherModal } from './components/ui/TeacherModal';
import { StemModal } from './components/ui/StemModal';
import { DocumentModal } from './components/ui/DocumentModal';
import { LightboxModal } from './components/ui/LightboxModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { CheckCircle2 } from 'lucide-react';

const SchoolPortal: React.FC = () => {
  const { toastMessage } = useSchool();

  return (
    <div className="min-h-screen bg-[#F6FAFF] text-slate-900 flex flex-col font-sans selection:bg-amber-300 selection:text-slate-950">
      {/* Top Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <DirectorSpeech />
        <AboutSection />
        <StemSection />
        <TeachersSection />
        <StudentsSection />
        <NewsSection />
        <AchievementsSection />
        <ClubsSection />
        <CabinetsSection />
        <RegulationsSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Modals and Overlays */}
      <NewsModal />
      <TeacherModal />
      <StemModal />
      <DocumentModal />
      <LightboxModal />
      <AdminDashboard />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white text-slate-900 px-5 py-3.5 rounded-2xl shadow-xl border border-sky-300 flex items-center gap-3 text-xs font-semibold animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <SchoolProvider>
      <SchoolPortal />
    </SchoolProvider>
  );
}
