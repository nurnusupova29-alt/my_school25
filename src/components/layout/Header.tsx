import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import {
  Menu,
  X,
  Shield,
  Globe,
  Sparkles,
  Layers,
  Star,
  Users,
  Compass,
  Trophy,
  GraduationCap,
  Info,
  Cpu,
  Newspaper,
  Phone,
} from 'lucide-react';
import { Language } from '../../types';

export const Header: React.FC = () => {
  const { language, setLanguage, activeSection, setActiveSection, isAdminLoggedIn, setIsAdminModalOpen } = useSchool();
  const t = getTranslation(language);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // All sections as requested by user in top row
  const primaryNavItems = [
    { id: 'about', label: t.navAbout, icon: Info },
    { id: 'teachers', label: t.navTeachers, icon: GraduationCap },
    { id: 'students', label: t.navStudents, icon: Users },
    { id: 'parliament', label: t.navParliament, icon: Star },
    { id: 'achievements', label: t.navAchievements, icon: Trophy },
    { id: 'stem', label: t.navStem, icon: Cpu },
    { id: 'clubs', label: t.navClubs, icon: Compass },
    { id: 'cabinets', label: t.navCabinets, icon: Layers },
    { id: 'news', label: t.navNews, icon: Newspaper },
    { id: 'contact', label: t.navContact, icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 transition-colors shadow-md">
      {/* Top main bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 xl:h-18">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none shrink-0"
          >
            <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 xl:w-5 xl:h-5 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base xl:text-lg tracking-tight text-white whitespace-nowrap group-hover:text-sky-300 transition-colors">
                Карасартов Инновациялык Мектеби
              </span>
              <span className="text-[10px] text-slate-400 -mt-0.5 hidden sm:block">
                «Билим. Инновация. Келечек!»
              </span>
            </div>
          </button>

          {/* Top navigation row containing all requested links highlighted with light blue background */}
          <nav className="hidden xl:flex items-center gap-2 2xl:gap-2.5 text-xs font-medium">
            {primaryNavItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1.5 px-3 rounded-lg whitespace-nowrap shrink-0 transition-all flex items-center gap-1.5 border ${
                    isActive
                      ? 'bg-sky-600 text-white font-bold border-sky-400 shadow-sm shadow-sky-500/30 ring-1 ring-sky-300/40'
                      : 'bg-sky-500/15 hover:bg-sky-500/25 text-sky-100 hover:text-white border-sky-400/25 hover:border-sky-300/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-sky-300'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Zone: Language + Admin + Mobile toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800/80 p-0.5 rounded-lg border border-slate-700 text-[11px] font-medium">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
              {(['ky', 'ru', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLangChange(lang)}
                  className={`px-1.5 py-0.5 rounded transition-all uppercase ${
                    language === lang
                      ? 'bg-sky-500 text-white font-bold shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Admin Portal CTA */}
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                isAdminLoggedIn
                  ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold'
                  : 'bg-sky-600 hover:bg-sky-500 text-white shadow-sm shadow-sky-600/30'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{isAdminLoggedIn ? 'Панель' : t.adminPanel}</span>
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Access Ribbon below main bar (with distinct light blue background buttons) */}
      <div className="xl:hidden bg-slate-950/90 border-t border-slate-800 px-4 py-2 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 text-xs whitespace-nowrap max-w-7xl mx-auto">
          <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider mr-1 shrink-0">
            Тез өтүү:
          </span>
          {primaryNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 border ${
                  isActive
                    ? 'bg-sky-600 text-white font-bold border-sky-400 shadow-xs'
                    : 'bg-sky-500/20 text-sky-200 hover:bg-sky-500/30 hover:text-white border-sky-400/30'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-sky-300" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Бардык бөлүмдөр
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {primaryNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 ${
                    activeSection === item.id
                      ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">«Билим. Инновация. Келечек!»</span>
            <button
              onClick={() => {
                setIsAdminModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-xs text-sky-400 hover:underline flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{isAdminLoggedIn ? 'Администратор панелин ачуу' : 'Кирүү'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
