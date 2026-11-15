import React, { useState } from 'react';
import { Trophy, Award, Medal, CheckCircle2, Star, ShieldCheck } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'teachers' | 'school'>('students');

  const schoolAwards = [
    {
      title: '«Жылдын Мыкты Инновациялык Мектеби – 2025»',
      issuer: 'КР Билим берүү жана илим министрлиги',
      date: '2025-декабрь',
      description: 'STEM билим берүүнү жайылтуу жана санариптик лабораторияларды түзүү боюнча республикалык кароо-сынактын башкы жеңүүчүсү.',
      icon: Trophy,
    },
    {
      title: '«Жашыл Мектеп жана Экологиялык Демилге» Эл аралык Сертификаты',
      issuer: 'ЮНЕСКО жана Борбор Азиялык Экологиялык Фонд',
      date: '2026-март',
      description: 'Күн энергиясын колдонуу жана мектеп ичинде таштандыны өзүнчө ылгоо долбоору үчүн ыйгарылган.',
      icon: Medal,
    },
    {
      title: '«Санариптик Педагогиканын Алдыңкы Лидери» Диплому',
      issuer: 'Билим берүү академиясы',
      date: '2026-май',
      description: 'Окутуу процессине жасалма интеллект жана интерактивдүү симуляторлорду ийгиликтүү киргизгендиги үчүн.',
      icon: Award,
    },
  ];

  const teacherAccolades = [
    {
      name: 'Абылова Нелли Камчыбековна',
      honor: 'КР Билим берүүсүнүн отличниги',
      detail: '24 жылдык үзүрлүү эмгеги жана инновациялык жетекчилиги үчүн',
    },
    {
      name: 'Темирбек Усубалиев',
      honor: 'Республикалык STEM «Мыкты насаатчысы»',
      detail: 'Робототехника боюнча республикалык чемпиондорду даярдаганы үчүн',
    },
    {
      name: 'Айнура Осмонова',
      honor: '«Ыйык тил» республикалык кароо-сынагынын лауреаты',
      detail: 'Кыргыз тилин заманбап медиа-технологиялар аркылуу окутуу методикасы үчүн',
    },
    {
      name: 'Динара Султанбекова',
      honor: 'Fulbright TEA Эл аралык программасынын стипендиаты',
      detail: 'АКШ университеттеринде билим берүү стажировкасынан өткөн',
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-[#EAF4FF]/65 via-[#F4F9FF] to-[#EAF4FF]/65 border-b border-sky-200/80 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3.5">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-sky-800">
            <span className="w-6 h-[1px] bg-sky-500" />
            <span>Сыйлыктар жана Жеңиштер</span>
            <span className="w-6 h-[1px] bg-sky-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase text-balance">
            ИЙГИЛИКТЕР ЖАНА МАМЛЕКЕТТИК ТААНУУ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Мектеп жамаатынын, мугалимдерибиздин жана бүтүрүүчүлөрүбүздүн талыкпас эмгегинин бааланган натыйжалары.
          </p>
        </div>

        {/* Segmented Switcher */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-1 scrollbar-none">
          <div className="inline-flex p-1 bg-sky-100/80 rounded-xl border border-sky-200/90 gap-1">
            <button
              onClick={() => setActiveTab('students')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'students'
                  ? 'bg-sky-600 text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-sky-900 hover:bg-white/70'
              }`}
            >
              Олимпиадалар (Райондук – Эл аралык)
            </button>
            <button
              onClick={() => setActiveTab('teachers')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'teachers'
                  ? 'bg-sky-600 text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-sky-900 hover:bg-white/70'
              }`}
            >
              Мугалимдердин сыйлыктары
            </button>
            <button
              onClick={() => setActiveTab('school')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'school'
                  ? 'bg-sky-600 text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-sky-900 hover:bg-white/70'
              }`}
            >
              Мектептин Кубоктору
            </button>
          </div>
        </div>

        {/* Tab Content 1: Olympiad Stats & Overview */}
        {activeTab === 'students' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-sky-200/80 shadow-xs grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-sky-100">
              <div className="p-7 text-center space-y-1.5">
                <div className="text-amber-600 font-bold text-[11px] uppercase tracking-[0.2em]">Эл аралык</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tabular-nums">4 Медаль</div>
                <div className="text-xs text-slate-500">STEM жана Тил дебаттары</div>
              </div>
              <div className="p-7 text-center space-y-1.5">
                <div className="text-sky-700 font-bold text-[11px] uppercase tracking-[0.2em]">Республикалык</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tabular-nums">12 Диплом</div>
                <div className="text-xs text-slate-500">Физика, Математика, Робот</div>
              </div>
              <div className="p-7 text-center space-y-1.5">
                <div className="text-emerald-700 font-bold text-[11px] uppercase tracking-[0.2em]">Облустук</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tabular-nums">28 Орун</div>
                <div className="text-xs text-slate-500">Предметтик жана спорт</div>
              </div>
              <div className="p-7 text-center space-y-1.5">
                <div className="text-indigo-700 font-bold text-[11px] uppercase tracking-[0.2em]">Райондук</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tabular-nums">54 Жеңүүчү</div>
                <div className="text-xs text-slate-500">Бардык предметтер боюнча</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-sky-200/80 shadow-xs space-y-5">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  Олимпиадалык даярдык системасы
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                  Мектепте ар бир сабак боюнча атайын олимпиадалык топтор иштейт. 7-класстан баштап таланттуу окуучулар менен жекече иш алып барылып, ЖОЖдордун профессорлору жана STEM устаттары кошумча мастер-класстарды өткөрүшөт.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700 pt-2">
                <div className="flex items-start gap-2.5 bg-[#F6FAFF] p-4 rounded-2xl border border-sky-100">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Тереңдетилген практикалык сабактар</span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#F6FAFF] p-4 rounded-2xl border border-sky-100">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Эл аралык сынактардын онлайн симуляторлору</span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#F6FAFF] p-4 rounded-2xl border border-sky-100">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Мектеп тарабынан атайын стипендиялар</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Teachers Accolades */}
        {activeTab === 'teachers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teacherAccolades.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-sky-200/80 shadow-xs flex items-start gap-4 hover:border-sky-300 transition-colors"
              >
                <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-base text-slate-900">
                    {item.name}
                  </h4>
                  <div className="text-xs font-semibold text-sky-700">
                    {item.honor}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: School Awards */}
        {activeTab === 'school' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schoolAwards.map((award, idx) => {
              const Icon = award.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-sky-200/80 shadow-xs flex flex-col justify-between space-y-5 hover:-translate-y-1 hover:shadow-md transition-all"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {award.date} · {award.issuer}
                    </div>
                    <h4 className="font-display font-bold text-base text-slate-900 leading-snug">
                      {award.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Расмий тастыкталган</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
