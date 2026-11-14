import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Trophy, Award, Medal, CheckCircle2, Star, ShieldCheck } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'teachers' | 'school'>('students');

  const schoolAwards = [
    {
      title: '«Жылдын Мыкты Инновациялык Мектеби - 2025»',
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
    <section id="achievements" className="py-20 bg-gradient-to-b from-sky-50 via-sky-100/40 to-sky-50 border-b border-sky-200/90 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-900 bg-sky-100 border border-sky-300/80 px-3.5 py-1.5 rounded-full shadow-2xs">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Сыйлыктар жана Жеңиштер</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
            ИЙГИЛИКТЕР ЖАНА МАМЛЕКЕТТИК ТААНУУ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Мектеп жамаатынын, мугалимдерибиздин жана бүтүрүүчүлөрүбүздүн талыкпас эмгегинин бааланган натыйжалары.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl border border-slate-300 gap-1">
            <button
              onClick={() => setActiveTab('students')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'students'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Олимпиадалар (Райондук - Эл аралык)
            </button>
            <button
              onClick={() => setActiveTab('teachers')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'teachers'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Мугалимдердин сыйлыктары
            </button>
            <button
              onClick={() => setActiveTab('school')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'school'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Мектептин Кубоктору жана Сертификаттары
            </button>
          </div>
        </div>

        {/* Tab Content 1: Olympiad Stats & Overview */}
        {activeTab === 'students' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center space-y-1">
                <div className="text-amber-500 font-bold text-xs uppercase tracking-wider">Эл аралык</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tabular-nums">4 Медаль</div>
                <div className="text-[11px] text-slate-500">STEM жана Тил дебаттары</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center space-y-1">
                <div className="text-sky-600 font-bold text-xs uppercase tracking-wider">Республикалык</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tabular-nums">12 Диплом</div>
                <div className="text-[11px] text-slate-500">Физика, Математика, Робот</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center space-y-1">
                <div className="text-emerald-600 font-bold text-xs uppercase tracking-wider">Облустук</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tabular-nums">28 Орун</div>
                <div className="text-[11px] text-slate-500">Предметтик жана спорт</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center space-y-1">
                <div className="text-indigo-600 font-bold text-xs uppercase tracking-wider">Райондук</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tabular-nums">54 Жеңүүчү</div>
                <div className="text-[11px] text-slate-500">Бардык предметтер боюнча</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-4">
                Олимпиадалык даярдык системасы
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Мектепте ар бир сабак боюнча атайын олимпиадалык топтор иштейт. 7-класстан баштап таланттуу окуучулар менен жекече иш алып барылып, ЖОЖдордун профессорлору жана STEM устаттары кошумча мастер-класстарды өткөрүшөт.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Тереңдетилген практикалык сабактар</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Эл аралык сынактардын онлайн симуляторлору</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div className="space-y-1">
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
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {award.date} · {award.issuer}
                    </div>
                    <h4 className="font-display font-bold text-base text-slate-900">
                      {award.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
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
