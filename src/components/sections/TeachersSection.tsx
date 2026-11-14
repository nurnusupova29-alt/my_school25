import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import { Teacher } from '../../types';
import { GraduationCap, Award, BookOpen, ChevronRight, User, FileText, ExternalLink, Download, Clock } from 'lucide-react';

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
    <section id="teachers" className="py-20 bg-gradient-to-b from-sky-50/70 via-sky-100/30 to-sky-50/70 border-b border-sky-200/90 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-900 bg-sky-100 border border-sky-300/80 px-3.5 py-1.5 rounded-full shadow-2xs">
              <GraduationCap className="w-4 h-4 text-sky-700" />
              <span>Педагогикалык Жамаат</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
              БИЗДИН АЛДЫҢКЫ МУГАЛИМДЕРИБИЗ
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Билими терең, жаңычыл методдорду өздөштүргөн, окуучунун жеке өнүгүүсүнө дем берген мыкты педагогдор.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Мугалимди же предметти издөө..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Official Staff Composition Document Link */}
        <div className="mb-8 bg-white/90 rounded-2xl border border-sky-200 p-5 sm:p-6 shadow-xs hover:border-sky-300 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                <span className="text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-md border border-sky-200">
                  Расмий документ • PDF
                </span>
                <span className="text-slate-500">2026–2027-окуу жылы</span>
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
                83 кызматкердин толук тизмеси, билими, педагогикалык стажы, окуткан сабактары жана жумалык сааттары (Магистр — 11, Жогорку билимдүү — 48, Билим берүүнүн мыктысы — 21).
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
            <a
              href={staffPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-600 text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
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
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterGroup(tab.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                filterGroup === tab.id
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
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
              className="bg-slate-50/70 rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-square bg-slate-200 overflow-hidden">
                  <img
                    src={teacher.imageUrl}
                    alt={teacher.fullName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-sky-300 block">
                      {teacher.experienceYears} жылдык тажрыйба
                    </span>
                    <h3 className="font-display font-bold text-base leading-tight">
                      {teacher.fullName}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-2">
                  <div className="text-xs text-slate-500 font-medium">
                    {teacher.role}
                  </div>
                  <div className="text-xs text-sky-800 font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>{teacher.subject}</span>
                  </div>
                  {teacher.awards.length > 0 && (
                    <div className="text-[11px] text-slate-600 flex items-start gap-1 pt-1">
                      <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{teacher.awards[0]}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => setSelectedTeacher(teacher)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 transition-colors shadow-2xs"
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

        {/* Dedicated 35+ Years Experience Teachers Block (from official PDF) */}
        <div
          id="veteran-teachers"
          className="mt-16 rounded-3xl bg-gradient-to-br from-sky-100/70 via-white to-sky-50/90 border border-sky-200 p-6 sm:p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="space-y-2.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-900 bg-amber-100/90 border border-amber-300/80 px-3.5 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Мектеп сыймыгы • 35+ жылдык стаж</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-wide uppercase">
                35 ЖЫЛДАН ЖОГОРКУ СТАЖЫСЫ БАР АРДАГЕР МУГАЛИМДЕР
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                2026–2027-окуу жылындагы мектеп кызматкерлеринин сапаттык курамы боюнча расмий тизмеден 35 жылдан ашык педагогикалык эмгек стажы бар улуу устаттар.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-900 text-white text-xs font-semibold shrink-0 self-start md:self-auto">
              <Clock className="w-4 h-4 text-amber-300" />
              <span>Бардыгы: {veteranTeachersOver35.length} мугалим</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {veteranTeachersOver35.map((vet) => (
              <div
                key={vet.docNumber}
                className="bg-white rounded-2xl border border-sky-200/80 p-5 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-md">
                      Тизме №{vet.docNumber}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300/80 px-2.5 py-1 rounded-lg">
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

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-600">
                  <span className="text-slate-400">Билими: </span>
                  <span className="font-medium text-slate-800">
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
