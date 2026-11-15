import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import { Award, BookOpen, ChevronRight, User, FileText, ExternalLink, Download, Clock, Search } from 'lucide-react';

interface VeteranTeacherRecord {
  docNumber: number;
  fullName: string;
  pedExperience: string;
  subject: string;
  education: string;
  university: string;
}

const veteranTeachersOver35: VeteranTeacherRecord[] = [
  {
    docNumber: 15,
    fullName: 'Жакыпова Айнабү Рыскулбековна',
    pedExperience: '41 жыл',
    subject: 'Математика',
    education: 'Жогорку',
    university: 'КЖПИ',
  },
  {
    docNumber: 22,
    fullName: 'Орозматова Жумабүбү',
    pedExperience: '41 жыл',
    subject: 'Физика',
    education: 'Жогорку',
    university: 'КМУ',
  },
  {
    docNumber: 53,
    fullName: 'Баратажиев Абдыкадыр Мукашович',
    pedExperience: '41 жыл',
    subject: 'Дене тарбия',
    education: 'Атайын орто',
    university: 'НПУ',
  },
  {
    docNumber: 30,
    fullName: 'Ноганова Гүлзат Турарбековна',
    pedExperience: '39 жыл 11 ай',
    subject: 'География, биология',
    education: 'Жогорку',
    university: 'КМУУ',
  },
  {
    docNumber: 38,
    fullName: 'Стамакунова Гүлмайрам Качыбековна',
    pedExperience: '39 жыл',
    subject: 'Англис тили жана адабияты',
    education: 'Жогорку',
    university: 'КЖПИ',
  },
  {
    docNumber: 7,
    fullName: 'Эргешова Жылдызкан Токтогоновна',
    pedExperience: '38 жыл 9 ай',
    subject: 'Кыргыз тили жана адабияты',
    education: 'Жогорку',
    university: 'КЖПИ',
  },
  {
    docNumber: 37,
    fullName: 'Балтабаева Дамира Абакировна',
    pedExperience: '38 жыл',
    subject: 'Англис тили жана адабияты',
    education: 'Жогорку',
    university: 'КМУ',
  },
  {
    docNumber: 62,
    fullName: 'Сулайманова Анархан Мукановна',
    pedExperience: '38 жыл',
    subject: 'Башталгыч класс',
    education: 'Атайын орто',
    university: 'НПУ',
  },
  {
    docNumber: 64,
    fullName: 'Нурдөлөтова Светлана Рахматалиевна',
    pedExperience: '38 жыл',
    subject: 'Башталгыч класс',
    education: 'Жогорку',
    university: 'КМПУ',
  },
  {
    docNumber: 52,
    fullName: 'Сулайманова Мээрим Жусупбековна',
    pedExperience: '37 жыл',
    subject: 'Чийүү, кол эмгек',
    education: 'Жогорку',
    university: 'ПГПИ',
  },
  {
    docNumber: 28,
    fullName: 'Айткожоева Айнура Жумакадырова',
    pedExperience: '36 жыл',
    subject: 'Биология',
    education: 'Жогорку',
    university: 'НМУ',
  },
];

export const TeachersSection: React.FC = () => {
  const { teachers, setSelectedTeacher, language } = useSchool();
  const t = getTranslation(language);
  const [filterGroup, setFilterGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const staffPdfUrl = '/assets/aistudio/_______________2025-2026___fbb75640.pdf';

  const filterTabs = [
    { id: 'all', label: 'Бардык мугалимдер' },
    { id: 'stem', label: 'STEM & Так илимдер' },
    { id: 'humanities', label: 'Тил & Гуманитардык' },
    { id: 'primary', label: 'Башталгыч класстар' },
    { id: 'arts_sports', label: 'Өнөр & Спорт' },
  ];

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesGroup = filterGroup === 'all' || teacher.categoryGroup === filterGroup;
    const matchesSearch =
      teacher.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  return (
    <section id="teachers" className="py-24 bg-gradient-to-b from-[#F4F9FF] via-[#EAF4FF]/60 to-[#F4F9FF] border-b border-sky-200/80 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-sky-800">
              <span className="w-7 h-[1px] bg-sky-500" />
              <span>Педагогикалык Жамаат</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
              БИЗДИН АЛДЫҢКЫ МУГАЛИМДЕРИБИЗ
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Билими терең, жаңычыл методдорду өздөштүргөн, окуучунун жеке өнүгүүсүнө дем берген мыкты педагогдор.
            </p>
          </div>

          {/* Search */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Мугалимди же предметти издөө..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-sky-200 bg-white text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Official Archival Staff Composition Document Banner */}
        <div className="mb-10 bg-white rounded-3xl border border-sky-200/90 p-6 sm:p-7 shadow-[0_16px_45px_-22px_rgba(14,116,144,0.2)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-sky-700">
                <span>Расмий документ</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-mono text-slate-500">PDF · 2026–2027-окуу жылы</span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                <a
                  href={staffPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Мектепте иштеген кызматкерлердин сапаттык курамы (толук тизме)</span>
                  <ExternalLink className="w-4 h-4 text-sky-600 shrink-0" />
                </a>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                83 кызматкердин расмий тизмеси · Магистр — 11 · Жогорку билимдүү — 48 · Билим берүүнүн мыктысы — 21
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
            <a
              href={staffPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-200" />
              <span>Документти ачуу (PDF)</span>
            </a>
            <a
              href={staffPdfUrl}
              download="Мектеп_кызматкерлеринин_сапаттык_курамы_2026-2027.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Жүктөп алуу</span>
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterGroup(tab.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all border cursor-pointer ${
                filterGroup === tab.id
                  ? 'bg-sky-600 text-white font-semibold border-sky-600 shadow-xs'
                  : 'bg-white text-slate-600 border-sky-200/80 hover:border-sky-300 hover:text-sky-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl border border-sky-200/80 overflow-hidden shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-sky-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-square bg-slate-100 overflow-hidden">
                  <img
                    src={teacher.imageUrl}
                    alt={teacher.fullName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/15 to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4 text-white space-y-0.5">
                    <span className="text-[11px] font-semibold text-amber-300 block tabular-nums">
                      {teacher.experienceYears} жылдык тажрыйба
                    </span>
                    <h3 className="font-display font-bold text-base leading-tight">
                      {teacher.fullName}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="text-xs text-slate-500 font-medium line-clamp-1">
                    {teacher.role}
                  </div>
                  <div className="text-xs text-sky-800 font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span className="truncate">{teacher.subject}</span>
                  </div>
                  {teacher.awards.length > 0 && (
                    <div className="text-[11px] text-slate-600 flex items-start gap-1.5 pt-0.5">
                      <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{teacher.awards[0]}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedTeacher(teacher)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-sky-50 border border-sky-200/90 text-xs font-semibold text-sky-900 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-colors cursor-pointer"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>{t.viewProfile}</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-auto" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTeachers.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            Мындай критерий боюнча мугалим табылган жок. Башка категорияны тандап көрүңүз.
          </div>
        )}

        {/* Dedicated 35+ Years Experience Honor Roll */}
        <div
          id="veteran-teachers"
          className="mt-16 rounded-3xl bg-white border border-sky-200 p-7 sm:p-10 shadow-[0_20px_50px_-24px_rgba(14,116,144,0.18)]"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-sky-100">
            <div className="space-y-2.5 max-w-3xl">
              <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-amber-700">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Мектеп сыймыгы · 35+ жылдык эмгек стажы</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-wide uppercase">
                35 ЖЫЛДАН ЖОГОРКУ СТАЖЫСЫ БАР АРДАГЕР МУГАЛИМДЕР
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                2026–2027-окуу жылындагы мектеп кызматкерлеринин сапаттык курамы боюнча расмий тизмеден 35 жылдан ашык педагогикалык стажы бар улуу устаттар.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-semibold shrink-0 self-start md:self-auto shadow-xs">
              <Clock className="w-4 h-4 text-amber-200" />
              <span className="tabular-nums">Бардыгы: {veteranTeachersOver35.length} мугалим</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {veteranTeachersOver35.map((vet) => (
              <div
                key={vet.docNumber}
                className="bg-[#F8FBFF] rounded-2xl border border-sky-200/80 p-5 hover:bg-white hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-semibold text-sky-700">
                      №{vet.docNumber}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100/90 border border-amber-300/70 px-2.5 py-1 rounded-lg tabular-nums">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      {vet.pedExperience}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-base text-slate-900 leading-snug">
                      {vet.fullName}
                    </h4>
                    <div className="mt-1.5 text-xs font-semibold text-sky-800 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{vet.subject}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-sky-100 text-[11px] text-slate-600">
                  <span className="text-slate-400">Билими: </span>
                  <span className="font-semibold text-slate-800">
                    {vet.education} ({vet.university})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
