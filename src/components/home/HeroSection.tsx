import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import { HERO_CAMPUS_IMG } from '../../data/initialData';
import { ArrowRight, Compass, Users, Award, BookOpen, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language, setActiveSection } = useSchool();
  const t = getTranslation(language);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CAMPUS_IMG}
          alt="Эсенгул Карасартов атындагы инновациялык мектеп кампусу"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 motion-safe:animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-3xl space-y-6">
          {/* Light blue kicker badge */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-200 bg-sky-950/70 border border-sky-400/40 px-3.5 py-1.5 rounded-full shadow-xs backdrop-blur-md">
            <span>Инновациялык жалпы билим берүү мектеби</span>
            <span aria-hidden="true">·</span>
            <span>STEM Борбору</span>
            <span aria-hidden="true">·</span>
            <span>Кыргызстан</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight text-balance">
            «Билим – келечекке <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-amber-300">жол ачат!</span>»
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
            Эсенгул Карасартов атындагы инновациялык мектеп — фундаменталдык билимди, заманбап жасалма интеллектти, робототехниканы жана улуттук баалуулуктарды айкалыштырган алдыңкы билим берүү мейкиндиги.
          </p>

          <div className="text-amber-300 font-semibold text-sm sm:text-base flex items-center gap-2">
            <span>Негизги ураан:</span>
            <span className="italic font-display">«Билим. Инновация. Келечек!»</span>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('about')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.ctaExplore}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('stem')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 font-semibold text-sm backdrop-blur-md transition-all"
            >
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>Инновациялык STEM багыты</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-300 hover:text-white text-sm font-medium hover:underline"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>{t.ctaApply}</span>
            </button>
          </div>
        </div>

        {/* 4-column KPI strip below the hero split */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-medium">
              <Users className="w-4 h-4" />
              <span>{t.statsStudents}</span>
            </div>
            <div className="text-3xl font-extrabold tracking-tight text-white font-display tabular-nums">
              1,240+
            </div>
            <div className="text-xs text-slate-400">1-11-класстар арасында</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-medium">
              <Award className="w-4 h-4" />
              <span>{t.statsTeachers}</span>
            </div>
            <div className="text-3xl font-extrabold tracking-tight text-white font-display tabular-nums">
              82
            </div>
            <div className="text-xs text-slate-400">Мыкты педагог & насаатчылар</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
              <BookOpen className="w-4 h-4" />
              <span>{t.statsCabinets}</span>
            </div>
            <div className="text-3xl font-extrabold tracking-tight text-white font-display tabular-nums">
              38
            </div>
            <div className="text-xs text-slate-400">STEM, Физика, Химия, IT</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-medium">
              <Cpu className="w-4 h-4" />
              <span>{t.statsClubs}</span>
            </div>
            <div className="text-3xl font-extrabold tracking-tight text-white font-display tabular-nums">
              24
            </div>
            <div className="text-xs text-slate-400">Робототехника, AI, Тилдер, Спорт</div>
          </div>
        </div>
      </div>
    </section>
  );
};
