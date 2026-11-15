import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import {
  Menu,
  X,
  Shield,
  Globe,
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
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-sky-200/90 text-slate-900 shadow-[0_10px_30px_-15px_rgba(14,116,144,0.18)]">
      {/* Delicate gold & sky top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-sky-400 via-amber-400 to-sky-400" />

      {/* Top main bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 xl:h-[70px]">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none shrink-0 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-50 via-sky-100 to-amber-50 border border-sky-300 flex items-center justify-center shadow-2xs group-hover:border-sky-500 transition-colors">
              <span className="font-serif italic font-bold text-base text-sky-800 tracking-tight">
                ЭК
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm xl:text-[15px] tracking-tight text-slate-900 whitespace-nowrap group-hover:text-sky-700 transition-colors">
                Карасартов Инновациялык Мектеби
              </span>
              <span className="text-[10px] tracking-[0.16em] uppercase text-sky-700 font-semibold hidden sm:block">
                Билим · Инновация · Келечек
              </span>
            </div>
          </button>

          {/* Top navigation row with bright light-blue background buttons */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2 text-[11.5px] font-medium">
            {primaryNavItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1.5 px-2.5 rounded-lg whitespace-nowrap shrink-0 transition-all duration-200 flex items-center gap-1.5 border cursor-pointer ${
                    isActive
                      ? 'bg-sky-600 text-white font-semibold border-sky-600 shadow-sm shadow-sky-500/25'
                      : 'bg-sky-50 hover:bg-sky-100 text-sky-900 border-sky-200/80 hover:border-sky-300'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-200' : 'text-sky-600'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Zone: Language + Admin + Mobile toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center bg-sky-50 p-0.5 rounded-lg border border-sky-200 text-[11px] font-medium">
              <Globe className="w-3.5 h-3.5 text-sky-600 ml-1.5 mr-1" />
              {(['ky', 'ru', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLangChange(lang)}
                  className={`px-1.5 py-0.5 rounded transition-all uppercase cursor-pointer ${
                    language === lang
                      ? 'bg-sky-600 text-white font-bold shadow-2xs'
                      : 'text-slate-600 hover:text-sky-800'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsAdminModalOpen(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 border cursor-pointer ${
                isAdminLoggedIn
                  ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 border-amber-300'
                  : 'bg-sky-600 hover:bg-sky-500 text-white border-sky-600 shadow-2xs'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{isAdminLoggedIn ? 'Панель' : t.adminPanel}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-sky-800 hover:bg-sky-50 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Access Ribbon on Tablet/Mobile */}
      <div className="xl:hidden bg-[#F4F9FF] border-t border-sky-200/80 px-4 py-2 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 text-xs whitespace-nowrap max-w-7xl mx-auto">
          <span className="text-[11px] font-semibold text-sky-700 uppercase tracking-wider mr-1 shrink-0">
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
                    ? 'bg-sky-600 text-white font-semibold border-sky-600'
                    : 'bg-sky-100/80 text-sky-900 hover:bg-sky-200/80 border-sky-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-200' : 'text-sky-600'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-sky-200 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto shadow-xl">
          <div className="text-[11px] font-semibold text-sky-700 uppercase tracking-widest mb-2.5">
            Мектеп бөлүмдөрү
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {primaryNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-colors flex items-center gap-2 border ${
                    activeSection === item.id
                      ? 'bg-sky-600 text-white font-semibold border-sky-600'
                      : 'bg-sky-50 text-sky-950 hover:bg-sky-100 border-sky-200/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${activeSection === item.id ? 'text-amber-200' : 'text-sky-600'}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
          <div className="pt-3 border-t border-sky-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-serif italic">«Билим. Инновация. Келечек!»</span>
            <button
              onClick={() => {
                setIsAdminModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-xs text-sky-700 font-semibold hover:underline flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{isAdminLoggedIn ? 'Админ панели' : 'Кирүү'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
