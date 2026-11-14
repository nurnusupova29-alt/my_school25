import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import { Sparkles, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

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
    { id: 'news', label: t.navNews },
    { id: 'achievements', label: t.navAchievements },
    { id: 'clubs', label: t.navClubs },
    { id: 'cabinets', label: t.navCabinets },
    { id: 'regulations', label: t.navRegulations },
    { id: 'gallery', label: t.navGallery },
    { id: 'contact', label: t.navContact },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-display font-bold text-white text-base">
                Эсенгул Карасартов мектеби
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              «Эсенгул Карасартов атындагы инновациялык жалпы билим берүү мектеби» — жаш муундарга сапаттуу билим, STEM инновацияларын жана терең адеп-ахлактык тарбия тартуулаган алдыңкы ордо.
            </p>
            <div className="text-xs text-amber-400 font-semibold tracking-wide">
              «Билим. Инновация. Келечек!»
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Бөлүмдөр</h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(link.id);
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-sky-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Байланыш жана Дарек</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Кыргыз Республикасы, Чүй облусу, Инновация көчөсү, 42</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+996 (312) 65-43-21 / +996 (700) 88-99-00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>info@karasartov-school.edu.kg</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Дүйшөмбү - Ишемби: 08:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Actions & Return */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm">Санариптик Портал</h4>
            <p className="text-xs text-slate-400">
              Окуучулар, мугалимдер жана ата-энелер үчүн ачык маалыматтык платформа.
            </p>
            <button
              onClick={scrollToTop}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 hover:bg-slate-800 hover:text-white transition-all shadow-xs"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Башкы бетке кайтуу</span>
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Эсенгул Карасартов атындагы инновациялык жалпы билим берүү мектеби. Бардык укуктар корголгон.
          </div>
          <div className="flex items-center gap-4">
            <span>Кыргыз Республикасынын Билим берүү жана илим министрлиги</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
