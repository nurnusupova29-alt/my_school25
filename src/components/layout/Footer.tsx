import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setActiveSection } = useSchool();
  const t = getTranslation(language);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const navLinks = [
    { id: 'about', label: t.navAbout },
    { id: 'stem', label: t.navStem },
    { id: 'teachers', label: t.navTeachers },
    { id: 'students', label: t.navStudents },
    { id: 'parliament', label: t.navParliament },
    { id: 'news', label: t.navNews },
    { id: 'achievements', label: t.navAchievements },
    { id: 'clubs', label: t.navClubs },
    { id: 'cabinets', label: t.navCabinets },
    { id: 'regulations', label: t.navRegulations },
    { id: 'gallery', label: t.navGallery },
    { id: 'contact', label: t.navContact },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#EAF3FF] to-[#DFECFF] text-slate-700 border-t border-sky-200 text-sm relative">
      <div className="h-[2px] w-full bg-gradient-to-r from-sky-300/60 via-amber-400/70 to-sky-300/60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-sky-300 flex items-center justify-center shadow-2xs">
                <span className="font-serif italic font-bold text-base text-sky-800">ЭК</span>
              </div>
              <span className="font-display font-bold text-slate-900 text-base tracking-tight">
                Эсенгул Карасартов мектеби
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              «Эсенгул Карасартов атындагы инновациялык жалпы билим берүү мектеби» — жаш муундарга сапаттуу билим, STEM инновацияларын жана терең адеп-ахлактык тарбия тартуулаган алдыңкы ордо.
            </p>
            <div className="font-serif italic font-semibold text-base text-sky-900">
              «Билим. Инновация. Келечек!»
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.16em] mb-4">
              Бөлүмдөр
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(link.id);
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-600 hover:text-sky-700 font-medium transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.16em] mb-4">
              Байланыш жана Дарек
            </h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Кыргыз Республикасы, Нарын облусу, Ак-Талаа району</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-mono text-slate-800">+996 (312) 65-43-21 / +996 (700) 88-99-00</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-mono text-slate-800">info@karasartov-school.edu.kg</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Дүйшөмбү — Ишемби: 08:00 – 18:00</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Return */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.16em]">
              Санариптик Портал
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Окуучулар, мугалимдер жана ата-энелер үчүн ачык расмий маалыматтык платформа.
            </p>
            <button
              onClick={scrollToTop}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-sky-200 text-xs font-semibold text-sky-900 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all shadow-2xs cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Башкы бетке кайтуу</span>
            </button>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-sky-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Эсенгул Карасартов атындагы инновациялык жалпы билим берүү мектеби. Бардык укуктар корголгон.
          </div>
          <div>
            <span>Кыргыз Республикасынын Билим берүү жана илим министрлиги</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
