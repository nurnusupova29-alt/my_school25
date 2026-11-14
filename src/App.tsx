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
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-900">
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
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 text-xs animate-bounce font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
