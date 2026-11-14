import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import { HERO_CAMPUS_IMG, CLASSROOM_IMG } from '../../data/initialData';
import { Compass, Target, ShieldCheck, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language, teachers, setSelectedTeacher } = useSchool();
  const t = getTranslation(language);
  const [activeTab, setActiveTab] = useState<'mission' | 'history' | 'values' | 'strategy'>('mission');

  const administration = teachers.slice(0, 3);

  const valuesList = [
    {
      title: 'Билимге умтулуу жана сапат',
      desc: 'Ар бир сабакта терең фундаменталдык жана практикалык билимди камсыздоо.',
      icon: Target,
    },
    {
      title: 'Инновация жана STEM эркиндиги',
      desc: 'Окуучулардын изилдөөчүлүк жана ойлоп табуучулук демилгелерин ар тараптан колдоо.',
      icon: TrendingUp,
    },
    {
      title: 'Улуттук адеп-ахлак жана тарбия',
      desc: 'Элибиздин нарк-насилин, улуттук каада-салттарын заманбап маданият менен айкалыштыруу.',
      icon: ShieldCheck,
    },
    {
      title: 'Санариптик лидерлик жана жоопкерчилик',
      desc: '21-кылымдын технологияларын адамзаттын жакшылыгы жана өлкөнүн өсүшү үчүн колдонуу.',
      icon: Compass,
    },
  ];

  const roadmapSteps = [
    {
      year: '2025 - 2026',
      title: 'STEM жана IT Лабораторияларын толук жаңылоо',
      desc: 'Creality 3D принтерлерин, LEGO Spike жана жасалма интеллект үчүн GPU станцияларын ишке киргизүү.',
      status: 'Аткарылды',
    },
    {
      year: '2026 - 2027',
      title: 'Санариптик мектеп платформасы жана AI-репетиторлор',
      desc: 'Электрондук баалоо, виртуалдык китепкана жана окуучулар үчүн кыргыз тилиндеги AI жардамчысын өнүктүрүү.',
      status: 'Ишке ашууда',
    },
    {
      year: '2027 - 2028',
      title: 'Эл аралык аккредитация жана алмашуу программалары',
      desc: 'Борбор Азия жана дүйнөлүк мектептер менен биргелешкен илимий долбоорлорду баштоо.',
      status: 'Планда',
    },
    {
      year: '2028 - 2030',
      title: '«Жашыл Мектеп» экологиялык көмүртексиз кампусу',
      desc: '100% күн энергиясына өтүү, жабык гидропоникалык комплекстер жана инновациялык илимий борбор түзүү.',
      status: 'Келечекте',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-sky-50 via-sky-100/30 to-sky-50 border-b border-sky-200/90 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-800 bg-sky-100/90 border border-sky-300/60 px-3.5 py-1 rounded-full shadow-2xs">
            <span>Эсенгул Карасартов атындагы мектеп</span>
            <span aria-hidden="true">·</span>
            <span>Тарых, Миссия, Стратегия</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
            МЕКТЕПТИН МИССИЯСЫ ЖАНА ӨНҮГҮҮ ЖОЛУ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Биз жаш муунду жаңы бийиктиктерге үндөгөн заманбап, эркин жана интеллектуалдык чөйрөнү куруп келебиз.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl border border-slate-300">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'mission'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Миссия жана Көз караш
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'history'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Мектептин Тарыхы
            </button>
            <button
              onClick={() => setActiveTab('values')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'values'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Баалуулуктар
            </button>
            <button
              onClick={() => setActiveTab('strategy')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'strategy'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2025-2030 Стратегия
            </button>
          </div>
        </div>

        {/* Tab 1: Mission & Vision */}
        {activeTab === 'mission' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  Мектептин Башкы Миссиясы
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ар бир окуучунун ички мүмкүнчүлүктөрүн ачып, инновациялык билим берүү технологиялары, практикалык STEM лабораториялары жана терең гуманитардык тарбия аркылуу коомго жана мамлекетке пайда алып келүүчү эркин, чыгармачыл жана жоопкерчиликтүү инсанды калыптандыруу.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Дүйнөлүк деңгээлдеги билим стандарттарына ылайык окутуу</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Илимий изилдөө жана ойлоп табуучулук жөндөмдөрүн өстүрүү</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Эне тилин жана эл аралык тилдерди эркин колдонууга үйрөтүү</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                «Билим – келечекке жол ачат!»
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-8 border border-slate-800 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-sky-400">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Биздин Көз Карашыбыз (Vision)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Кыргызстандын билим берүү системасында инновациялардын, STEM-практикасынын жана санариптик педагогиканын үлгүсү болгон, бүтүрүүчүлөрү дүйнөнүн алдыңкы ЖОЖдорунда ийгиликтүү билим алып, өлкөнүн өнүгүшүнө зор салым кошкон алдыңкы мектепке айлануу.
                </p>
                <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700 space-y-2">
                  <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    Негизги Багыттар
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    Инженердик ой жүгүртүү, жасалма интеллектти туура пайдалануу, лидерлик сапаттар жана коомдук активдүүлүк.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                Карасартов мектеби · 2026-2030 стратегиялык көз карашы
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: History */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider">
                Мектептин түптөлүшү жана Эсенгул Карасартовдун мурасы
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900">
                Эсенгул Карасартов атындагы билим уясы
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Мектебибиз өлкөбүздүн агартуу майданында өзгөчө орду бар, эл агартуусуна жана билим берүүгө зор эмгек сиңирген инсан Эсенгул Карасартовдун урматына аталган. Анын педагогикалык көз карашы — жаштарга сапаттуу таалим-тарбия берип, аларды турмуштун бардык сыноолоруна даярдоо болгон.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Замандын талабы менен мектеп инновациялык багытка бурулуп, республикадагы биринчилерден болуп толук кандуу STEM лабораториясын, робототехника борборун жана заманбап компьютердик класстарды ачты. Бүгүнкү күндө миңден ашуун окуучу жаңыча ой жүгүртүүгө үйрөнүүдө.
              </p>
              <div className="pt-2 text-xs text-slate-500 italic">
                «Ар бир муун мурдагыдан билимдүү, күчтүү жана акылдуу болушу шарт»
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-md aspect-4/3 border border-slate-200">
                <img
                  src={CLASSROOM_IMG}
                  alt="Тарых жана жаңылануу"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Values */}
        {activeTab === 'values' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesList.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 4: Strategy */}
        {activeTab === 'strategy' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {roadmapSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-sky-700">
                        {step.year}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500">
                        {step.status}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-slate-900">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="h-1 bg-sky-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        idx === 0
                          ? 'w-full bg-emerald-500'
                          : idx === 1
                          ? 'w-2/3 bg-sky-500'
                          : 'w-1/4 bg-slate-300'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Administration Preview */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider">
                Жетекчилик Курам
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 tracking-wide uppercase">
                МЕКТЕПТИН АДМИНИСТРАЦИЯСЫ
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Тажрыйбалуу, жаңычыл жана окуучулардын келечеги үчүн талыкпай эмгектенген педагогикалык жетекчилер.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {administration.map((admin) => (
              <div
                key={admin.id}
                onClick={() => setSelectedTeacher(admin)}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all cursor-pointer group flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                  <img
                    src={admin.imageUrl}
                    alt={admin.fullName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-1 min-w-0">
                  <h4 className="font-display font-bold text-slate-900 text-sm truncate group-hover:text-sky-600 transition-colors">
                    {admin.fullName}
                  </h4>
                  <div className="text-xs text-slate-500 truncate">{admin.role}</div>
                  <div className="text-[11px] text-sky-700 font-medium">
                    {admin.experienceYears} жылдык тажрыйба · Көрүү →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
