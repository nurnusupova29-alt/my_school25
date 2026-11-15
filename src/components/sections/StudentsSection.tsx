import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Award, Trophy, Star, BookOpen, UserCheck, Crown, Briefcase, Users, Leaf, Radio, Palette, ShieldCheck } from 'lucide-react';

export const StudentsSection: React.FC = () => {
  const { achievements } = useSchool();
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const levels = [
    { id: 'all', label: 'Бардык жетишкендиктер' },
    { id: 'Эл аралык', label: 'Эл аралык' },
    { id: 'Республикалык', label: 'Республикалык' },
    { id: 'Облустук', label: 'Облустук' },
    { id: 'Райондук', label: 'Райондук' },
  ];

  const filtered =
    selectedLevel === 'all'
      ? achievements
      : achievements.filter((a) => a.level === selectedLevel);

  return (
    <section id="students" className="py-24 bg-gradient-to-b from-[#EAF4FF]/65 via-[#F4F9FF] to-[#EAF4FF]/65 border-b border-sky-200/80 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3.5">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-sky-800">
            <span className="w-6 h-[1px] bg-sky-500" />
            <span>Биздин Сыймыктарыбыз · Олимпиадалар</span>
            <span className="w-6 h-[1px] bg-sky-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase text-balance">
            ОКУУЧУЛАРДЫН ЖЕТИШКЕНДИКТЕРИ ЖАНА ПОРТФОЛИОСУ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Эл аралык жана республикалык интеллектуалдык, илимий олимпиадалардын жана спартакиадалардын жеңүүчүлөрү.
          </p>
        </div>

        {/* Level Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1 bg-sky-100/80 rounded-xl border border-sky-200/90 gap-1">
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedLevel === lvl.id
                    ? 'bg-sky-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-sky-900 hover:bg-white/60'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ach) => (
            <div
              key={ach.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-sky-200/80 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-amber-300 transition-all duration-200 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-sky-700">{ach.level}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-slate-400 tabular-nums">{ach.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{ach.category}</span>
                </div>

                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100/90 border border-amber-300/70 px-2.5 py-1 rounded-lg">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>{ach.place}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors pt-1">
                    {ach.studentName}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">{ach.grade}</div>
                </div>

                <div className="text-xs text-slate-800 font-semibold leading-snug">
                  {ach.competition}
                </div>

                {ach.projectName && (
                  <div className="bg-[#F6FAFF] rounded-2xl p-3.5 border border-sky-100 text-xs text-slate-600 space-y-1">
                    <span className="font-semibold text-slate-800 block">Долбоор:</span>
                    <span>{ach.projectName}</span>
                  </div>
                )}

                <p className="text-xs text-slate-600 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>Насаатчы</span>
                </span>
                <span className="font-semibold text-slate-800">{ach.mentorName}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Student Parliament Dedicated Bright Chamber */}
        <div id="parliament" className="mt-20 pt-14 border-t border-sky-200/90 scroll-mt-24">
          <div className="bg-gradient-to-br from-white via-[#F0F7FF] to-[#E5F2FF] rounded-3xl p-7 sm:p-10 text-slate-900 shadow-[0_24px_60px_-22px_rgba(14,116,144,0.2)] border border-sky-200 space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-arch-grid-light opacity-50 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sky-200/80 pb-6">
              <div className="space-y-2.5 max-w-2xl">
                <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-sky-700">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                  <span>Өзүн-өзү башкаруу уюму</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-wider uppercase">
                  МЕКТЕП ОКУУЧУЛАРЫНЫН ПАРЛАМЕНТИ
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Окуучулардын укуктарын коргоо, чыгармачыл иш-чараларды уюштуруу, мектеп тартибин бекемдөө жана коомдук лидерликти өнүктүрүү үчүн шайланган активдүү жаштардын борбору.
                </p>
              </div>

              <div className="bg-white px-5 py-3.5 rounded-2xl border border-sky-200 shadow-2xs shrink-0">
                <div className="text-[11px] uppercase tracking-wider text-slate-500">Шайлоо мөөнөтү</div>
                <div className="text-sm font-bold text-sky-700 font-mono mt-0.5">2026–2027 окуу жылы</div>
              </div>
            </div>

            {/* Executive Leadership */}
            <div className="relative z-10 space-y-3.5">
              <div className="text-xs font-semibold text-amber-700 uppercase tracking-[0.18em] flex items-center gap-2">
                <Crown className="w-3.5 h-3.5 text-amber-600" />
                <span>Парламенттин Башкы Жетекчилиги</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-sky-200 space-y-2.5 hover:border-sky-400 shadow-2xs transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] text-sky-700 font-bold uppercase tracking-wide">
                    Мектеп парламентинин жетекчиси
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900">Сагынбекова Элзат</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Педагогикалык насаатчы, парламенттин ишмердүүлүгүн жана окуучулар демилгелерин координациялоочу жетекчи.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-amber-300/80 space-y-2.5 hover:border-amber-400 shadow-2xs transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Crown className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] text-amber-700 font-bold uppercase tracking-wide">
                    Мектептин Президенти
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900">Рысбеков Алишер</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Окуучулардын өзүн-өзү башкаруу уюмунун башчысы, мектеп окуучуларынын кызыкчылыктарын коргоочу лидер.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-indigo-200 space-y-2.5 hover:border-indigo-400 shadow-2xs transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] text-indigo-700 font-bold uppercase tracking-wide">
                    Премьер-министр
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900">Жумабаев Калыс</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Министрликтердин иш-пландарын жүзөгө ашыруу, күнүмдүк иш-чараларды жана тартипти координациялоочу.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 space-y-2.5 hover:border-emerald-400 shadow-2xs transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] text-emerald-700 font-bold uppercase tracking-wide">
                    Балдар Совети
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900">Райымбеков Калыс</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Окуучулардын пикирин угуу, класстар арасындагы өз ара жардамдашуу жана социалдык колдоо багыты.
                  </p>
                </div>
              </div>
            </div>

            {/* Parliament Ministries */}
            <div className="relative z-10 space-y-3.5 pt-2">
              <div className="text-xs font-semibold text-sky-700 uppercase tracking-[0.18em] flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-sky-600" />
                <span>Тармактык Министрликтер</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                <div className="bg-white/90 p-4 rounded-2xl border border-sky-200/80 space-y-2 hover:border-sky-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] text-sky-700 font-bold uppercase">Билим Министри</div>
                  <h5 className="font-display font-bold text-base text-slate-900">Дүйшөналиева Нурзат</h5>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Олимпиадаларга даярдык, акыл-таймаштар жана окуу сапатын жогорулатуу.
                  </p>
                </div>

                <div className="bg-white/90 p-4 rounded-2xl border border-sky-200/80 space-y-2 hover:border-purple-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] text-purple-700 font-bold uppercase">Маданият Министри</div>
                  <h5 className="font-display font-bold text-base text-slate-900">Токонова Сабина</h5>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Майрамдык салтанаттар, адабий кечелер жана чыгармачыл көргөзмөлөр.
                  </p>
                </div>

                <div className="bg-white/90 p-4 rounded-2xl border border-sky-200/80 space-y-2 hover:border-amber-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] text-amber-700 font-bold uppercase">Спорт Министри</div>
                  <h5 className="font-display font-bold text-base text-slate-900">Үсөнбаев Эльдар</h5>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Спартакиадалар, волейбол жана футбол турнирлери, сергек жашоо.
                  </p>
                </div>

                <div className="bg-white/90 p-4 rounded-2xl border border-sky-200/80 space-y-2 hover:border-rose-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
                    <Radio className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] text-rose-700 font-bold uppercase">Медиа Министри</div>
                  <h5 className="font-display font-bold text-base text-slate-900">Кубанычбекова Фатима</h5>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Мектеп маалымат кызматы, видео-репортаждар жана жаңылыктар.
                  </p>
                </div>

                <div className="bg-white/90 p-4 rounded-2xl border border-sky-200/80 space-y-2 hover:border-emerald-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] text-emerald-700 font-bold uppercase">Тазалык Министри</div>
                  <h5 className="font-display font-bold text-sm text-slate-900">
                    Токтобекова Гүлзада,
                    <br />
                    Султанбекова Асема
                  </h5>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Мектеп тазалыгын көзөмөлдөө, ишембиликтер жана «Жашыл мектеп» долбоору.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-5 border-t border-sky-200/80 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-4">
              <div>
                Парламенттик жыйындар: Ар аптанын шаршемби күнү саат 15:30
              </div>
              <div className="font-serif italic font-semibold text-base text-sky-900">
                «Жаштардын үнү — инновациянын деми!»
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
