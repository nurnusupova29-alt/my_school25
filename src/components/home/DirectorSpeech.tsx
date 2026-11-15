import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { DIRECTOR_PORTRAIT_IMG } from '../../data/initialData';
import { Award, ChevronRight, X } from 'lucide-react';

export const DirectorSpeech: React.FC = () => {
  const { teachers, setSelectedTeacher } = useSchool();
  const [isFullSpeechOpen, setIsFullSpeechOpen] = useState(false);

  const director = teachers.find((t) => t.id === 't-1') || teachers[0];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#EAF4FF]/80 via-[#F4F9FF] to-[#EAF4FF]/80 border-b border-sky-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Director Portrait Architectural Frame */}
          <div className="lg:col-span-5">
            <div className="relative p-2.5 rounded-3xl bg-white border border-sky-200/90 shadow-[0_24px_60px_-20px_rgba(14,116,144,0.22)]">
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-100">
                <img
                  src={director?.imageUrl || DIRECTOR_PORTRAIT_IMG}
                  alt={director?.fullName || 'Мектептин Директору'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050C1A]/90 via-[#050C1A]/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                    {director?.role || 'Мектептин Директору'}
                  </div>
                  <div className="font-display font-bold text-xl tracking-tight">
                    {director?.fullName || 'Абылова Нелли Камчыбековна'}
                  </div>
                  <div className="text-xs text-sky-200/90">
                    КР Билим берүүсүнүн отличниги · {director?.experienceYears || 24} жылдык тажрыйба
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Director Address */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-sky-800">
              <span className="w-8 h-[1px] bg-sky-600" />
              <span>Директордун Кайрылуусу</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-slate-900 leading-[1.2] tracking-wide uppercase">
              «БИЛИМДҮҮ ЖАШТАР — ЖАРКЫН КЕЛЕЧЕКТИН, КҮЧТҮҮ МАМЛЕКЕТТИН БЕКЕМ ТИРЕГИ»
            </h2>

            {/* Editorial Pull Quote with hairline top/bottom dividers */}
            <div className="py-5 border-y border-sky-200/90 space-y-3">
              <p className="font-serif italic text-lg sm:text-[21px] text-slate-800 leading-relaxed">
                «Урматтуу окуучулар, ардактуу ата-энелер жана кесиптештер! Биздин мектеп — жөн гана билим берүү мекемеси эмес, бул жерде ар бир баланын жеке жөндөмү ачылып, дүйнөлүк деңгээлдеги STEM инновациялары менен улуттук тарбия терең айкалышат.»
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Эсенгул Карасартовдун атын сыймык менен алып жүргөн биздин мектепте заманбап лабораториялар, робототехника класстары жана санариптик экосистема түзүлгөн. Ар бир окуучу өзүнүн илимий кыялдарын реалдуулукка айлантууга толук мүмкүнчүлүгү бар.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => setIsFullSpeechOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm shadow-sky-500/20 transition-colors cursor-pointer"
              >
                <span>Толук кайрылууну окуу</span>
                <ChevronRight className="w-4 h-4 text-amber-200" />
              </button>

              <button
                onClick={() => director && setSelectedTeacher(director)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-sky-50 text-sky-900 border border-sky-200 font-semibold text-xs transition-colors shadow-2xs cursor-pointer"
              >
                <Award className="w-4 h-4 text-amber-600" />
                <span>Директордун өмүр баяны</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Speech Modal */}
      {isFullSpeechOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-9 max-h-[90vh] overflow-y-auto shadow-2xl border border-sky-100 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4 gap-4">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700 mb-1">
                  Расмий кайрылуу
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Мектептин Директорунун Салтанаттуу Кайрылуусу
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {director?.fullName || 'Абылова Нелли Камчыбековна'} · 2026–2027-окуу жылы
                </p>
              </div>
              <button
                onClick={() => setIsFullSpeechOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                <strong>Кымбаттуу мектеп жамааты, окуучулар жана ата-энелер!</strong>
              </p>
              <p>
                Бүгүнкү заман адамзаттан терең фундаменталдык билимди гана эмес, критикалык ой жүгүртүүнү, креативдүү чечимдерди табууну жана санариптик технологияларды мыкты өздөштүрүүнү талап кылат.
              </p>
              <p>
                Биздин мектеп инновациялык багытты туу тутуп, STEM (Илим, Технология, Инженерия жана Математика) дисциплиналарын өлкөбүздүн улуттук педагогикасынын мыкты салттары менен бирдикте өнүктүрүп келет. Биздин максат — жөн гана баа коюу эмес, ар бир баланын жүрөгүндө изилдөөчүлүк кумарды ойготуу.
              </p>
              <p>
                Биздин окуучулар республикалык жана эл аралык олимпиадаларда байгелүү орундарды багындырып, робототехника боюнча жаңы чечимдерди сунуштап жатканы биздин биргелешкен аракетибиздин жемиши.
              </p>
              <p className="border-t border-slate-100 pt-4 font-serif italic text-base text-slate-800">
                «Келечек — билимге умтулгандардыкы. Биздин инновациялык мектепке кош келиңиздер!»
              </p>
              <div className="text-right pt-2 font-semibold text-slate-900">
                <div>{director?.fullName || 'Абылова Нелли Камчыбековна'}</div>
                <div className="text-xs font-normal text-slate-500">
                  Эсенгул Карасартов атындагы инновациялык мектептин директору
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsFullSpeechOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500 transition-colors cursor-pointer"
              >
                Жабуу
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
