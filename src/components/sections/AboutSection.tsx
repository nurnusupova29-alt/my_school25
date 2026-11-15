import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { CLASSROOM_IMG } from '../../data/initialData';
import { Compass, Target, ShieldCheck, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { teachers, setSelectedTeacher } = useSchool();
  const [activeTab, setActiveTab] = useState<'mission' | 'history' | 'values' | 'strategy'>('mission');

  const administration = teachers.slice(0, 3);

  const valuesList = [
    {
      num: '01',
      title: 'Билимге умтулуу жана сапат',
      desc: 'Ар бир сабакта терең фундаменталдык жана практикалык билимди камсыздоо.',
      icon: Target,
    },
    {
      num: '02',
      title: 'Инновация жана STEM эркиндиги',
      desc: 'Окуучулардын изилдөөчүлүк жана ойлоп табуучулук демилгелерин ар тараптан колдоо.',
      icon: TrendingUp,
    },
    {
      num: '03',
      title: 'Улуттук адеп-ахлак жана тарбия',
      desc: 'Элибиздин нарк-насилин, улуттук каада-салттарын заманбап маданият менен айкалыштыруу.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Санариптик лидерлик жана жоопкерчилик',
      desc: '21-кылымдын технологияларын адамзаттын жакшылыгы жана өлкөнүн өсүшү үчүн колдонуу.',
      icon: Compass,
    },
  ];

  const roadmapSteps = [
    {
      year: '2025 – 2026',
      title: 'STEM жана IT Лабораторияларын толук жаңылоо',
      desc: 'Creality 3D принтерлерин, LEGO Spike жана жасалма интеллект үчүн GPU станцияларын ишке киргизүү.',
      status: 'Аткарылды',
    },
    {
      year: '2026 – 2027',
      title: 'Санариптик мектеп платформасы жана AI-репетиторлор',
      desc: 'Электрондук баалоо, виртуалдык китепкана жана окуучулар үчүн кыргыз тилиндеги AI жардамчысын өнүктүрүү.',
      status: 'Ишке ашууда',
    },
    {
      year: '2027 – 2028',
      title: 'Эл аралык аккредитация жана алмашуу программалары',
      desc: 'Борбор Азия жана дүйнөлүк мектептер менен биргелешкен илимий долбоорлорду баштоо.',
      status: 'Планда',
    },
    {
      year: '2028 – 2030',
      title: '«Жашыл Мектеп» экологиялык көмүртексиз кампусу',
      desc: '100% күн энергиясына өтүү, жабык гидропоникалык комплекстер жана инновациялык илимий борбор түзүү.',
      status: 'Келечекте',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#F4F9FF] via-[#EBF4FF]/65 to-[#F4F9FF] border-b border-sky-200/80 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3.5">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-sky-800">
            <span className="w-6 h-[1px] bg-sky-500" />
            <span>Эсенгул Карасартов мектеби · Тарых · Стратегия</span>
            <span className="w-6 h-[1px] bg-sky-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase text-balance">
            МЕКТЕПТИН МИССИЯСЫ ЖАНА ӨНҮГҮҮ ЖОЛУ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Биз жаш муунду жаңы бийиктиктерге үндөгөн заманбап, эркин жана интеллектуалдык чөйрөнү куруп келебиз.
          </p>
        </div>

        {/* Architectural Segmented Control */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-1 scrollbar-none">
          <div className="inline-flex p-1 bg-sky-100/80 rounded-xl border border-sky-200/90 gap-1">
            {[
              { id: 'mission', label: 'Миссия жана Көз караш' },
              { id: 'history', label: 'Мектептин Тарыхы' },
              { id: 'values', label: 'Баалуулуктар' },
              { id: 'strategy', label: '2025–2030 Стратегия' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-sky-600 text-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-sky-900 hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Mission & Vision */}
        {activeTab === 'mission' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sky-200/80 shadow-[0_20px_50px_-24px_rgba(14,116,144,0.18)] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  Мектептин Башкы Миссиясы
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Ар бир окуучунун ички мүмкүнчүлүктөрүн ачып, инновациялык билим берүү технологиялары, практикалык STEM лабораториялары жана терең гуманитардык тарбия аркылуу коомго жана мамлекетке пайда алып келүүчү эркин, чыгармачыл жана жоопкерчиликтүү инсанды калыптандыруу.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Дүйнөлүк деңгээлдеги билим стандарттарына ылайык окутуу</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Илимий изилдөө жана ойлоп табуучулук жөндөмдөрүн өстүрүү</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Эне тилин жана эл аралык тилдерди эркин колдонууга үйрөтүү</span>
                  </div>
                </div>
              </div>
              <div className="pt-5 border-t border-slate-100 font-serif italic text-base text-sky-800">
                «Билим – келечекке жол ачат!»
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#EDF6FF] via-white to-[#E2F0FF] text-slate-900 rounded-3xl p-8 sm:p-10 border border-sky-300/80 shadow-[0_20px_50px_-24px_rgba(14,116,144,0.2)] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 border border-amber-300/70 flex items-center justify-center text-amber-700">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  Биздин Көз Карашыбыз
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                  Кыргызстандын билим берүү системасында инновациялардын, STEM-практикасынын жана санариптик педагогиканын үлгүсү болгон, бүтүрүүчүлөрү дүйнөнүн алдыңкы ЖОЖдорунда ийгиликтүү билим алып, өлкөнүн өнүгүшүнө зор салым кошкон алдыңкы мектепке айлануу.
                </p>
                <div className="bg-white/90 rounded-2xl p-5 border border-sky-200/80 space-y-2">
                  <div className="text-[11px] font-semibold text-sky-700 uppercase tracking-[0.18em]">
                    Стратегиялык багыттар
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Инженердик ой жүгүртүү, жасалма интеллектти туура пайдалануу, лидерлик сапаттар жана коомдук активдүүлүк.
                  </p>
                </div>
              </div>
              <div className="pt-5 border-t border-sky-200/70 text-xs text-slate-600 flex items-center justify-between">
                <span>Карасартов мектеби</span>
                <span className="font-mono font-semibold text-sky-800">2026–2030</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: History */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sky-200/80 shadow-[0_20px_50px_-24px_rgba(14,116,144,0.16)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold text-sky-700 uppercase tracking-[0.18em]">
                Мектептин түптөлүшү жана Эсенгул Карасартовдун мурасы
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                Эсенгул Карасартов атындагы билим уясы
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                Мектебибиз өлкөбүздүн агартуу майданында өзгөчө орду бар, эл агартуусуна жана билим берүүгө зор эмгек сиңирген инсан Эсенгул Карасартовдун урматына аталган. Анын педагогикалык көз карашы — жаштарга сапаттуу таалим-тарбия берип, аларды турмуштун бардык сыноолоруна даярдоо болгон.
              </p>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                Замандын талабы менен мектеп инновациялык багытка бурулуп, республикадагы биринчилерден болуп толук кандуу STEM лабораториясын, робототехника борборун жана заманбап компьютердик класстарды ачты. Бүгүнкү күндө миңден ашуун окуучу жаңыча ой жүгүртүүгө үйрөнүүдө.
              </p>
              <div className="pt-3 border-t border-slate-100 font-serif italic text-base text-slate-700">
                «Ар бир муун мурдагыдан билимдүү, күчтүү жана акылдуу болушу шарт»
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-4/3 border border-sky-100">
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
            {valuesList.map((val) => {
              const IconComp = val.icon;
              return (
                <div
                  key={val.num}
                  className="bg-white rounded-3xl p-7 border border-sky-200/80 shadow-xs space-y-4 hover:-translate-y-1 hover:shadow-md hover:border-sky-300 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400">{val.num}</span>
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 leading-snug">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 4: Strategy */}
        {activeTab === 'strategy' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-sky-200/80 shadow-xs flex flex-col justify-between space-y-5 hover:border-sky-300 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
                    <span className="font-mono font-bold text-sky-700">{step.year}</span>
                    <span className="font-medium text-slate-500">{step.status}</span>
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="h-1.5 bg-sky-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      idx === 0
                        ? 'w-full bg-emerald-500'
                        : idx === 1
                        ? 'w-2/3 bg-sky-600'
                        : 'w-1/4 bg-slate-300'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Administration Preview */}
        <div className="mt-20 pt-14 border-t border-sky-200/90">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-[0.18em]">
                <span className="w-5 h-[1px] bg-sky-500" />
                <span>Жетекчилик Курам</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-wide uppercase">
                МЕКТЕПТИН АДМИНИСТРАЦИЯСЫ
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Тажрыйбалуу, жаңычыл жана окуучулардын келечеги үчүн талыкпай эмгектенген педагогикалык жетекчилер.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {administration.map((admin) => (
              <div
                key={admin.id}
                onClick={() => setSelectedTeacher(admin)}
                className="bg-white rounded-2xl p-5 border border-sky-200/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all cursor-pointer group flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-sky-100">
                  <img
                    src={admin.imageUrl}
                    alt={admin.fullName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <h4 className="font-display font-bold text-slate-900 text-sm truncate group-hover:text-sky-700 transition-colors">
                    {admin.fullName}
                  </h4>
                  <div className="text-xs text-slate-500 truncate">{admin.role}</div>
                  <div className="text-[11px] text-sky-700 font-semibold flex items-center gap-1 pt-0.5">
                    <span>{admin.experienceYears} жылдык тажрыйба</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
