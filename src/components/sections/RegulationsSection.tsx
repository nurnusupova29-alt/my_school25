import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { FileText, Download, Eye, ShieldCheck, BookCheck, Bell } from 'lucide-react';

export const RegulationsSection: React.FC = () => {
  const { documents, setSelectedDoc } = useSchool();
  const [activeTab, setActiveTab] = useState<'docs' | 'schedule' | 'ethics'>('docs');

  const bellScheduleShift1 = [
    { period: '1-сабак', time: '08:00 – 08:45', breakTime: '10 мүнөт' },
    { period: '2-сабак', time: '08:55 – 09:40', breakTime: '15 мүнөт (Тамактануу)' },
    { period: '3-сабак', time: '09:55 – 10:40', breakTime: '10 мүнөт' },
    { period: '4-сабак', time: '10:50 – 11:35', breakTime: '15 мүнөт (Чоң тыныгуу)' },
    { period: '5-сабак', time: '11:50 – 12:35', breakTime: '10 мүнөт' },
    { period: '6-сабак', time: '12:45 – 13:30', breakTime: 'Нөөмөт алмашуу' },
  ];

  const bellScheduleShift2 = [
    { period: '1-сабак', time: '13:45 – 14:30', breakTime: '10 мүнөт' },
    { period: '2-сабак', time: '14:40 – 15:25', breakTime: '15 мүнөт' },
    { period: '3-сабак', time: '15:40 – 16:25', breakTime: '10 мүнөт' },
    { period: '4-сабак', time: '16:35 – 17:20', breakTime: '10 мүнөт' },
    { period: '5-сабак', time: '17:30 – 18:15', breakTime: 'Сабактын аякташы' },
  ];

  const studentRules = [
    'Сабактарга кечикпей, сабак башталууга 15 мүнөт калганда таза жана тыкан мектеп формасы менен келүү.',
    'Мектептин мүлкүнө, STEM лабораториялык жабдыктарына жана китепкана китептерине аяр мамиле кылуу.',
    'Мугалимдерди, курдаштарды сыйлоо жана билим берүү чөйрөсүндө тартипти бекем сактоо.',
    'Академиялык ак ниеттүүлүктү сактоо: көчүрбөө, өз алдынча эмгектенүү жана чынчыл болуу.',
  ];

  const teacherRules = [
    'Окуучунун жеке инсандык кадыр-баркын сыйлоо, ар бир балага бирдей калыс мамиле жасоо.',
    'Кесиптик чеберчиликти дайыма өркүндөтүү жана заманбап санариптик методдорду колдонуу.',
    'Ата-энелер менен ачык, сый мамиледе өнөктөштүк кызматташтыкты өнүктүрүү.',
    'Окуучулардын коопсуздугун жана психологиялык жайлуулугун толук камсыздоо.',
  ];

  return (
    <section id="regulations" className="py-24 bg-gradient-to-b from-[#F4F9FF] via-[#EAF4FF]/60 to-[#F4F9FF] border-b border-sky-200/80 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3.5">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-sky-800">
            <span className="w-6 h-[1px] bg-sky-500" />
            <span>Нормативдик-укуктук база</span>
            <span className="w-6 h-[1px] bg-sky-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase text-balance">
            МЕКТЕП РЕГЛАМЕНТИ ЖАНА ТАРТИБИ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Мектептин уставы, ички тартип эрежелери, сабактардын жадыбалы жана расмий документтер.
          </p>
        </div>

        {/* Segmented Switcher */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-1 scrollbar-none">
          <div className="inline-flex p-1 bg-sky-100/80 rounded-xl border border-sky-200/90 gap-1">
            <button
              onClick={() => setActiveTab('docs')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'docs'
                  ? 'bg-sky-600 text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-sky-900 hover:bg-white/70'
              }`}
            >
              Расмий Документтер (PDF)
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'schedule'
                  ? 'bg-sky-600 text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-sky-900 hover:bg-white/70'
              }`}
            >
              Коңгуроолордун Жадыбалы
            </button>
            <button
              onClick={() => setActiveTab('ethics')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'ethics'
                  ? 'bg-sky-600 text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-sky-900 hover:bg-white/70'
              }`}
            >
              Эрежелер жана Этика
            </button>
          </div>
        </div>

        {/* Tab 1: Documents */}
        {activeTab === 'docs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-sky-200/80 shadow-xs hover:-translate-y-1 hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-sky-700">{doc.category}</span>
                    <span className="font-mono text-slate-400 tabular-nums">{doc.fileSize}</span>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-slate-900 leading-snug">
                        {doc.title}
                      </h4>
                      <div className="text-[11px] text-slate-400 mt-1 font-mono tabular-nums">
                        Жаңыланды: {doc.dateUpdated}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors cursor-pointer shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-100" />
                    <span>Карап чыгуу</span>
                  </button>

                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="inline-flex items-center justify-center py-2.5 px-3.5 rounded-xl bg-sky-50 border border-sky-200 hover:bg-sky-100 text-sky-900 font-medium text-xs transition-colors cursor-pointer"
                    title="Жүктөп алуу"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Bell Schedule */}
        {activeTab === 'schedule' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-7 border border-sky-200/80 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <Bell className="w-4 h-4 text-sky-600" />
                  <h3 className="font-display font-bold text-base text-slate-900">
                    1-Нөөмөт (5–11-класстар)
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold text-sky-700 tabular-nums">08:00 – 13:30</span>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {bellScheduleShift1.map((item, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between gap-2">
                    <span className="font-semibold text-slate-900">{item.period}</span>
                    <span className="font-mono text-sky-700 font-semibold tabular-nums">{item.time}</span>
                    <span className="text-slate-500 text-[11px] text-right">{item.breakTime}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-sky-200/80 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <Bell className="w-4 h-4 text-amber-600" />
                  <h3 className="font-display font-bold text-base text-slate-900">
                    2-Нөөмөт (1–4-класстар)
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold text-amber-700 tabular-nums">13:45 – 18:15</span>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {bellScheduleShift2.map((item, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between gap-2">
                    <span className="font-semibold text-slate-900">{item.period}</span>
                    <span className="font-mono text-amber-700 font-semibold tabular-nums">{item.time}</span>
                    <span className="text-slate-500 text-[11px] text-right">{item.breakTime}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Ethics & Rights */}
        {activeTab === 'ethics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-sky-200/80 shadow-xs space-y-5">
              <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-sky-600" />
                <span>Окуучулардын Негизги Эрежелери</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-700">
                {studentRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-[11px] font-bold text-sky-700 pt-0.5 tabular-nums">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-sky-200/80 shadow-xs space-y-5">
              <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2.5">
                <BookCheck className="w-5 h-5 text-emerald-600" />
                <span>Педагогикалык Этика Кодекси</span>
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-700">
                {teacherRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-[11px] font-bold text-emerald-700 pt-0.5 tabular-nums">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
