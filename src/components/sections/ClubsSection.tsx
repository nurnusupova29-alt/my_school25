import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Clock, MapPin, User, Users, CheckCircle } from 'lucide-react';

export const ClubsSection: React.FC = () => {
  const { clubs } = useSchool();
  const [filterCat, setFilterCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Бардык ийримдер' },
    { id: 'STEM', label: 'STEM & Робот' },
    { id: 'Тил', label: 'Тилдер & Дебат' },
    { id: 'Спорт', label: 'Спорттук секциялар' },
    { id: 'Чыгармачылык', label: 'Өнөр & Музыка' },
  ];

  const filteredClubs =
    filterCat === 'all' ? clubs : clubs.filter((c) => c.category === filterCat);

  return (
    <section id="clubs" className="py-24 bg-gradient-to-b from-[#F4F9FF] via-[#EAF4FF]/60 to-[#F4F9FF] border-b border-sky-200/80 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-sky-800">
              <span className="w-7 h-[1px] bg-sky-500" />
              <span>Кошумча Билим Берүү</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
              МЕКТЕПТИН ЧЫГАРМАЧЫЛ ЖАНА STEM ИЙРИМДЕРИ
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ар бир окуучу өзүнүн шыгына жараша техникалык, тилдик, музыкалык же спорттук секцияларга акысыз катыша алат.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCat(cat.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all border cursor-pointer ${
                filterCat === cat.id
                  ? 'bg-sky-600 text-white font-semibold border-sky-600 shadow-xs'
                  : 'bg-white text-slate-600 border-sky-200/80 hover:border-sky-300 hover:text-sky-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => (
            <div
              key={club.id}
              className="bg-white rounded-3xl border border-sky-200/80 overflow-hidden shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-sky-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={club.imageUrl}
                    alt={club.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-sky-700">{club.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{club.targetGrades}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-1">
                    {club.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {club.description}
                  </p>

                  <div className="space-y-1.5 pt-3 text-xs text-slate-600 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span className="truncate">
                        Жетекчи: <strong className="text-slate-800">{club.mentor}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span className="truncate">{club.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span className="truncate">{club.room}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>Катышуучулар</span>
                  </span>
                  <span className="font-mono font-semibold text-slate-800 tabular-nums">
                    {club.enrolledCount} / {club.maxStudents} окуучу
                  </span>
                </div>

                <div className="w-full py-2.5 px-3 rounded-xl bg-sky-50 border border-sky-200/80 text-center text-xs text-sky-900 font-semibold flex items-center justify-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Мектеп окуучулары үчүн катышуу акысыз</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
