import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import { SchoolClub } from '../../types';
import { Clock, MapPin, User, Users, CheckCircle, Sparkles } from 'lucide-react';

export const ClubsSection: React.FC = () => {
  const { clubs, language } = useSchool();
  const t = getTranslation(language);
  const [filterCat, setFilterCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Бардык ийримдер' },
    { id: 'STEM', label: 'STEM & Робот' },
    { id: 'Тил', label: 'Тилдер & Дебат' },
    { id: 'Спорт', label: 'Спорттук секциялар' },
    { id: 'Чыгармачылык', label: 'Өнөр & Музыка' },
  ];

  const filteredClubs = filterCat === 'all'
    ? clubs
    : clubs.filter((c) => c.category === filterCat);

  return (
    <section id="clubs" className="py-20 bg-gradient-to-b from-sky-50/70 via-sky-100/30 to-sky-50/70 border-b border-sky-200/90 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-900 bg-sky-100 border border-sky-300/80 px-3.5 py-1.5 rounded-full shadow-2xs">
              <Sparkles className="w-4 h-4 text-amber-500" />
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
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCat(cat.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                filterCat === cat.id
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => {
            const isFull = club.enrolledCount >= club.maxStudents;
            return (
              <div
                key={club.id}
                className="bg-slate-50/70 rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-16/10 bg-slate-200 overflow-hidden">
                    <img
                      src={club.imageUrl}
                      alt={club.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-sky-300">
                      {club.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-medium text-slate-300">
                      {club.targetGrades}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-1">
                      {club.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {club.description}
                    </p>

                    <div className="space-y-1.5 pt-2 text-xs text-slate-600 border-t border-slate-200/60">
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="truncate">Жетекчи: <strong>{club.mentor}</strong></span>
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

                <div className="p-5 pt-0">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>Катышуучулар саны:</span>
                    </span>
                    <span className="font-mono font-medium text-slate-800">
                      {club.enrolledCount} / {club.maxStudents} окуучу
                    </span>
                  </div>

                  <div className="w-full py-2 px-3 rounded-xl bg-sky-50 border border-sky-200 text-center text-xs text-sky-800 font-medium flex items-center justify-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Мектеп окуучулары үчүн катышуу акысыз</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
