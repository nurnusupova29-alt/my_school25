import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import { HERO_CAMPUS_IMG, STEM_ROBOTICS_IMG } from '../../data/initialData';
import { ArrowRight, Compass, Users, Award, BookOpen, Cpu, ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language, setActiveSection } = useSchool();
  const t = getTranslation(language);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#F4F9FF] via-[#EAF4FF] to-[#F7FBFF] text-slate-900 overflow-hidden border-b border-sky-200/80"
    >
      {/* Bright Daylight Architectural Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CAMPUS_IMG}
          alt="Эсенгул Карасартов атындагы инновациялык мектеп кампусу"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-20 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6FAFF]/95 via-[#EFF6FF]/90 to-[#E5F1FF]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F9FF] via-transparent to-white/60" />
        <div className="absolute inset-0 bg-arch-grid-light opacity-90" />
      </div>

      {/* Soft Luminous Glows */}
      <div className="absolute -top-24 left-1/4 w-[480px] h-[480px] bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/5 w-[380px] h-[380px] bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Main Split Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14 lg:pt-20 lg:pb-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left 7 Cols: Editorial Lead */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-sky-800">
              <span className="w-8 h-[1.5px] bg-amber-500" />
              <span>Эсенгул Карасартов атындагы мектеп · Ак-Талаа · STEM</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] tracking-tight text-slate-900 leading-[1.08] text-balance">
              «Билим — келечекке{' '}
              <span className="font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-sky-600 to-amber-600">
                жол ачат!
              </span>
              »
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Эсенгул Карасартов атындагы инновациялык жалпы билим берүү мектеби — терең фундаменталдык билимди, жасалма интеллектти, робототехниканы жана улуттук руханий баалуулуктарды айкалыштырган алдыңкы билим ордосу.
            </p>

            {/* Editorial Motto Quote Strip */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm">
              <span className="uppercase tracking-[0.18em] text-[11px] text-slate-500 font-semibold">
                Урааныбыз:
              </span>
              <span className="font-serif italic text-xl font-semibold text-sky-900">
                «Билим. Инновация. Келечек!»
              </span>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-[0_14px_28px_-10px_rgba(2,132,199,0.5)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{t.ctaExplore}</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </button>

              <button
                onClick={() => scrollTo('stem')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-sky-50 text-sky-900 border border-sky-200 hover:border-sky-300 font-semibold text-sm shadow-xs transition-all duration-200 cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-sky-600" />
                <span>Инновациялык STEM</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-slate-700 hover:text-sky-700 text-sm font-semibold transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-amber-600" />
                <span>{t.ctaApply}</span>
              </button>
            </div>
          </div>

          {/* Right 5 Cols: Bright Porcelain Flagship Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-sky-200/90 p-5 sm:p-6 shadow-[0_24px_60px_-20px_rgba(14,116,144,0.22)] space-y-5">
              {/* Top Image Showcase */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-sky-100">
                <img
                  src={STEM_ROBOTICS_IMG}
                  alt="STEM жана Робототехника борбору"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-2">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-300">
                      2026–2027 окуу жылы
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base text-white">
                      STEM & AI Инновациялык Борбору
                    </div>
                  </div>
                  <button
                    onClick={() => scrollTo('stem')}
                    className="p-2 rounded-lg bg-white/20 hover:bg-sky-500 text-white backdrop-blur-md transition-colors shrink-0 cursor-pointer"
                    title="STEM бөлүмүнө өтүү"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Architectural Quick Highlights */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  onClick={() => scrollTo('teachers')}
                  className="text-left p-3.5 rounded-xl bg-sky-50/80 hover:bg-sky-100 border border-sky-200/80 transition-all group cursor-pointer"
                >
                  <div className="text-[10px] uppercase tracking-wider text-sky-700 font-semibold">
                    Педагогикалык курам
                  </div>
                  <div className="font-bold text-slate-900 mt-1 flex items-center justify-between">
                    <span>82 кызматкер · PDF</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={() => scrollTo('parliament')}
                  className="text-left p-3.5 rounded-xl bg-amber-50/70 hover:bg-amber-100/70 border border-amber-200/80 transition-all group cursor-pointer"
                >
                  <div className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold">
                    Өзүн-өзү башкаруу
                  </div>
                  <div className="font-bold text-slate-900 mt-1 flex items-center justify-between">
                    <span>Мектеп парламенти</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column Bright Tabular KPI Ribbon */}
        <div className="mt-14 bg-white/85 backdrop-blur-md rounded-3xl border border-sky-200/90 shadow-xs p-6 sm:p-7 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-sky-100">
          <div className="md:pr-6 space-y-1">
            <div className="flex items-center gap-2 text-sky-700 text-[11px] uppercase tracking-wider font-semibold">
              <Users className="w-3.5 h-3.5" />
              <span>{t.statsStudents}</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display tabular-nums">
              1,240+
            </div>
            <div className="text-xs text-slate-500">1–11-класстар арасында</div>
          </div>

          <div className="md:px-6 space-y-1">
            <div className="flex items-center gap-2 text-amber-700 text-[11px] uppercase tracking-wider font-semibold">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.statsTeachers}</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display tabular-nums">
              82
            </div>
            <div className="text-xs text-slate-500">Билим берүүнүн мыктысы — 21</div>
          </div>

          <div className="md:px-6 space-y-1">
            <div className="flex items-center gap-2 text-emerald-700 text-[11px] uppercase tracking-wider font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.statsCabinets}</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display tabular-nums">
              38
            </div>
            <div className="text-xs text-slate-500">STEM, Физика, Химия, IT</div>
          </div>

          <div className="md:pl-6 space-y-1">
            <div className="flex items-center gap-2 text-indigo-700 text-[11px] uppercase tracking-wider font-semibold">
              <Cpu className="w-3.5 h-3.5 text-indigo-600" />
              <span>{t.statsClubs}</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display tabular-nums">
              24
            </div>
            <div className="text-xs text-slate-500">Робототехника, AI, Тилдер, Спорт</div>
          </div>
        </div>
      </div>
    </section>
  );
};
