import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import { FileText, Download, Eye, Clock, ShieldCheck, BookCheck, Bell } from 'lucide-react';

export const RegulationsSection: React.FC = () => {
  const { documents, setSelectedDoc, language } = useSchool();
  const t = getTranslation(language);
  const [activeTab, setActiveTab] = useState<'docs' | 'schedule' | 'ethics'>('docs');

  const bellScheduleShift1 = [
    { period: '1-сабак', time: '08:00 - 08:45', breakTime: '10 мүнөт' },
    { period: '2-сабак', time: '08:55 - 09:40', breakTime: '15 мүнөт (Эртең мененки тамактануу)' },
    { period: '3-сабак', time: '09:55 - 10:40', breakTime: '10 мүнөт' },
    { period: '4-сабак', time: '10:50 - 11:35', breakTime: '15 мүнөт (Чоң тыныгуу)' },
    { period: '5-сабак', time: '11:50 - 12:35', breakTime: '10 мүнөт' },
    { period: '6-сабак', time: '12:45 - 13:30', breakTime: 'Нөөмөт алмашуу' },
  ];

  const bellScheduleShift2 = [
    { period: '1-сабак', time: '13:45 - 14:30', breakTime: '10 мүнөт' },
    { period: '2-сабак', time: '14:40 - 15:25', breakTime: '15 мүнөт' },
    { period: '3-сабак', time: '15:40 - 16:25', breakTime: '10 мүнөт' },
    { period: '4-сабак', time: '16:35 - 17:20', breakTime: '10 мүнөт' },
    { period: '5-сабак', time: '17:30 - 18:15', breakTime: 'Сабактын аякташы' },
  ];

  return (
    <section id="regulations" className="py-20 bg-gradient-to-b from-sky-50/70 via-sky-100/30 to-sky-50/70 border-b border-sky-200/90 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-900 bg-sky-100 border border-sky-300/80 px-3.5 py-1.5 rounded-full shadow-2xs">
            <BookCheck className="w-4 h-4 text-sky-700" />
            <span>Нормативдик-укуктук база</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
            МЕКТЕП РЕГЛАМЕНТИ ЖАНА ТАРТИБИ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Мектептин уставы, ички тартип эрежелери, сабактардын жадыбалы жана расмий документтер.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl border border-slate-300 gap-1">
            <button
              onClick={() => setActiveTab('docs')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'docs'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Расмий Документтер (PDF)
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'schedule'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Сабактардын жана Коңгуроолордун Жадыбалы
            </button>
            <button
              onClick={() => setActiveTab('ethics')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeTab === 'ethics'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Окуучулардын & Мугалимдердин Эрежелери
            </button>
          </div>
        </div>

        {/* Tab 1: Documents */}
        {activeTab === 'docs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-sky-700">{doc.category}</span>
                    <span className="font-mono text-slate-400">{doc.fileSize}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-slate-900 leading-snug">
                        {doc.title}
                      </h4>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Жаңыланган күнү: {doc.dateUpdated}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs transition-colors shadow-2xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Карап чыгуу</span>
                  </button>

                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs transition-colors"
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
            {/* Shift 1 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-sky-600" />
                  <h3 className="font-display font-bold text-base text-slate-900">
                    1-Нөөмөт (5-11 класстар)
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500">08:00 - 13:30</span>
              </div>

              <div className="divide-y divide-slate-200 text-xs">
                {bellScheduleShift1.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between">
                    <span className="font-semibold text-slate-800">{item.period}</span>
                    <span className="font-mono text-sky-700 font-medium">{item.time}</span>
                    <span className="text-slate-500 text-[11px]">{item.breakTime}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shift 2 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-amber-600" />
                  <h3 className="font-display font-bold text-base text-slate-900">
                    2-Нөөмөт (1-4 класстар)
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500">13:45 - 18:15</span>
              </div>

              <div className="divide-y divide-slate-200 text-xs">
                {bellScheduleShift2.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between">
                    <span className="font-semibold text-slate-800">{item.period}</span>
                    <span className="font-mono text-amber-700 font-medium">{item.time}</span>
                    <span className="text-slate-500 text-[11px]">{item.breakTime}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Ethics & Rights */}
        {activeTab === 'ethics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-600" />
                <span>Окуучулардын Негизги Эрежелери жана Милдеттери</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                  <span>Сабактарга кечикпей, сабак башталууга 15 мүнөт калганда таза жана тыкан мектеп формасы менен келүү.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                  <span>Мектептин мүлкүнө, STEM лабораториялык жабдыктарына жана китепкана китептерине аяр мамиле кылуу.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                  <span>Мугалимдерди, курдаштарды сыйлоо жана билим берүү чөйрөсүндө тартипти бекем сактоо.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                  <span>Академиялык ак ниеттүүлүктү сактоо: көчүрбөө, өз алдынча эмгектенүү жана чынчыл болуу.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
                <BookCheck className="w-5 h-5 text-emerald-600" />
                <span>Педагогикалык Этика Кодекси</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Окуучунун жеке инсандык кадыр-баркын сыйлоо, ар бир балага бирдей калыс мамиле жасоо.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Кесиптик чеберчиликти дайыма өркүндөтүү жана заманбап санариптик методдорду колдонуу.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Ата-энелер менен ачык, сый мамиледе өнөктөштүк кызматташтыкты өнүктүрүү.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>Окуучулардын коопсуздугун жана психологиялык жайлуулугун толук камсыздоо.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
