import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { StudentAchievement } from '../../types';
import { Award, Trophy, Star, BookOpen, UserCheck, Sparkles, Crown, Briefcase, Users, Leaf, Radio, Palette, ShieldCheck, CheckCircle2 } from 'lucide-react';

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

  const filtered = selectedLevel === 'all'
    ? achievements
    : achievements.filter((a) => a.level === selectedLevel);

  return (
    <section id="students" className="py-20 bg-gradient-to-b from-sky-50 via-sky-100/40 to-sky-50 border-b border-sky-200/90 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-900 bg-sky-100 border border-sky-300/80 px-3.5 py-1.5 rounded-full shadow-2xs">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Биздин Сыймыктарыбыз</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
            ОКУУЧУЛАРДЫН ЖЕТИШКЕНДИКТЕРИ ЖАНА ПОРТФОЛИОСУ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Эл аралык жана республикалык интеллектуалдык, илимий олимпиадалардын жана спартакиадалардын жеңүүчүлөрү.
          </p>
        </div>

        {/* Level Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl border border-slate-300 gap-1">
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  selectedLevel === lvl.id
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
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
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Level and Year unboxed text metadata */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-sky-700">{ach.level} деңгээл</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-slate-400">{ach.year}-жыл</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-500">{ach.category}</span>
                </div>

                {/* Place and Name */}
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
                    <Award className="w-3.5 h-3.5" />
                    <span>{ach.place}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors">
                    {ach.studentName}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">{ach.grade}</div>
                </div>

                {/* Competition info */}
                <div className="text-xs text-slate-700 font-medium">
                  {ach.competition}
                </div>

                {ach.projectName && (
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-600 space-y-1">
                    <span className="font-semibold text-slate-800 block">Долбоор:</span>
                    <span>{ach.projectName}</span>
                  </div>
                )}

                <p className="text-xs text-slate-600 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Mentor */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>Насаатчы:</span>
                </span>
                <span className="font-medium text-slate-800">{ach.mentorName}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Student Parliament Dedicated Section */}
        <div id="parliament" className="mt-16 pt-12 border-t border-sky-200 scroll-mt-24">
          <div className="bg-gradient-to-br from-sky-950 via-slate-900 to-sky-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl border-2 border-sky-400/50 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-200 bg-sky-900/80 border border-sky-400/50 px-3.5 py-1.5 rounded-full shadow-xs">
                  <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                  <span>Өзүн-өзү башкаруу уюму</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-wider">
                  МЕКТЕП ОКУУЧУЛАРЫНЫН ПАРЛАМЕНТИ
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Окуучулардын укуктарын коргоо, чыгармачыл иш-чараларды уюштуруу, мектеп тартибин бекемдөө жана коомдук лидерликти өнүктүрүү үчүн шайланган активдүү жаштардын борбору.
                </p>
              </div>

              <div className="flex items-center gap-4 bg-slate-800/80 px-4 py-3 rounded-2xl border border-slate-700/80 shrink-0">
                <div className="text-right">
                  <div className="text-xs text-slate-400">Шайлоо мөөнөтү:</div>
                  <div className="text-sm font-bold text-sky-400 font-mono">2026-2027 Окуу жылы</div>
                </div>
              </div>
            </div>

            {/* Executive Leadership */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-amber-300" />
                <span>Парламенттин Башкы Жетекчилиги</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1. Жетекчи */}
                <div className="bg-slate-800/80 p-5 rounded-2xl border border-sky-400/40 space-y-2 hover:border-sky-400 transition-colors shadow-md">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5 text-sky-400" />
                  </div>
                  <div className="text-xs text-sky-400 font-semibold uppercase">Мектеп парламентинин жетекчиси</div>
                  <h4 className="font-display font-bold text-lg text-white">Сагынбекова Элзат</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Педагогикалык насаатчы, парламенттин ишмердүүлүгүн жана окуучулар демилгелерин координациялоочу жетекчи.
                  </p>
                </div>

                {/* 2. Президент */}
                <div className="bg-slate-800/80 p-5 rounded-2xl border border-amber-400/40 space-y-2 hover:border-amber-400 transition-colors shadow-md">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
                    <Crown className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="text-xs text-amber-400 font-semibold uppercase">Мектептин Президенти</div>
                  <h4 className="font-display font-bold text-lg text-white">Рысбеков Алишер</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Окуучулардын өзүн-өзү башкаруу уюмунун башчысы, мектеп окуучуларынын кызыкчылыктарын коргоочу лидер.
                  </p>
                </div>

                {/* 3. Премьер-министр */}
                <div className="bg-slate-800/80 p-5 rounded-2xl border border-indigo-400/40 space-y-2 hover:border-indigo-400 transition-colors shadow-md">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold">
                    <Briefcase className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="text-xs text-indigo-300 font-semibold uppercase">Премьер-министр</div>
                  <h4 className="font-display font-bold text-lg text-white">Жумабаев Калыс</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Министрликтердин иш-пландарын жүзөгө ашыруу, күнүмдүк иш-чараларды жана тартипти координациялоочу.
                  </p>
                </div>

                {/* 4. Балдар совети */}
                <div className="bg-slate-800/80 p-5 rounded-2xl border border-emerald-400/40 space-y-2 hover:border-emerald-400 transition-colors shadow-md">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-emerald-300 font-semibold uppercase">Балдар Совети</div>
                  <h4 className="font-display font-bold text-lg text-white">Райымбеков Калыс</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Окуучулардын пикирин угуу, класстар арасындагы өз ара жардамдашуу жана социалдык колдоо багыты.
                  </p>
                </div>
              </div>
            </div>

            {/* Parliament Ministries */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-sky-400" />
                <span>Тармактык Министрликтер</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {/* 5. Билим министри */}
                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="text-[11px] text-sky-400 font-semibold uppercase">Билим Министри</div>
                  <h5 className="font-display font-bold text-base text-white">Дүйшөналиева Нурзат</h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Олимпиадаларга даярдык, акыл-таймаштар жана окуу сапатын жогорулатуу.
                  </p>
                </div>

                {/* 6. Маданият министри */}
                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center">
                    <Palette className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-[11px] text-purple-300 font-semibold uppercase">Маданият Министри</div>
                  <h5 className="font-display font-bold text-base text-white">Токонова Сабина</h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Майрамдык салтанаттар, адабий кечелер жана чыгармачыл көргөзмөлөр.
                  </p>
                </div>

                {/* 7. Спорт министри */}
                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-[11px] text-amber-300 font-semibold uppercase">Спорт Министри</div>
                  <h5 className="font-display font-bold text-base text-white">Үсөнбаев Эльдар</h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Спартакиадалар, волейбол жана футбол турнирлери, сергек жашоо.
                  </p>
                </div>

                {/* 8. Медиа министри */}
                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center">
                    <Radio className="w-4 h-4 text-rose-400" />
                  </div>
                  <div className="text-[11px] text-rose-300 font-semibold uppercase">Медиа Министри</div>
                  <h5 className="font-display font-bold text-base text-white">Кубанычбекова Фатима</h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Мектеп маалымат кызматы, видео-репортаждар жана жаңылыктар.
                  </p>
                </div>

                {/* 9. Тазалык министри */}
                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-[11px] text-emerald-300 font-semibold uppercase">Тазалык Министри</div>
                  <h5 className="font-display font-bold text-sm text-white">
                    Токтобекова Гүлзада,<br />Султанбекова Асема
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Мектеп тазалыгын көзөмөлдөө, ишембиликтер жана «Жашыл мектеп» долбоору.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick parliamentary initiatives */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Парламенттик жыйындар: Ар аптанын шаршемби күнү саат 15:30</span>
              </div>
              <div className="text-slate-300">
                «Жаштардын үнү — инновациянын деми!»
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
