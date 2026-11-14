import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { DIRECTOR_PORTRAIT_IMG } from '../../data/initialData';
import { Quote, Award, Sparkles, BookOpen, ChevronRight, X } from 'lucide-react';

export const DirectorSpeech: React.FC = () => {
  const { teachers, setSelectedTeacher } = useSchool();
  const [isFullSpeechOpen, setIsFullSpeechOpen] = useState(false);

  // Director from teachers list
  const director = teachers.find((t) => t.id === 't-1') || teachers[0];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-sky-50/90 via-sky-100/40 to-sky-50/90 border-b border-sky-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Director Image and Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square bg-slate-100 border border-slate-200">
                <img
                  src={director?.imageUrl || DIRECTOR_PORTRAIT_IMG}
                  alt={director?.fullName || 'Мектептин Директору'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-display font-bold text-xl">{director?.fullName || 'Абылова Нелли Камчыбековна'}</div>
                  <div className="text-xs text-sky-300 font-medium">{director?.role || 'Мектептин Директору'}</div>
                  <div className="text-[11px] text-slate-300 mt-1">КР Билим берүүсүнүн отличниги · {director?.experienceYears || 24} жылдык тажрыйба</div>
                </div>
              </div>
            </div>
          </div>

          {/* Director Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-700">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Директордун Кайрылуусу</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 leading-snug tracking-wide uppercase">
              «БИЛИМДҮҮ ЖАШТАР — ЖАРКЫН КЕЛЕЧЕКТИН, КҮЧТҮҮ МАМЛЕКЕТТИН БЕКЕМ ТИРЕГИ»
            </h2>

            <div className="relative pl-6 border-l-2 border-sky-500 text-slate-600 space-y-3 italic">
              <Quote className="w-8 h-8 text-sky-200 absolute -top-4 -left-2 -z-10" />
              <p className="leading-relaxed">
                «Урматтуу окуучулар, ардактуу ата-энелер жана кесиптештер! Биздин мектеп — жөн гана билим берүү мекемеси эмес, бул жерде ар бир баланын жеке жөндөмү ачылып, дүйнөлүк деңгээлдеги STEM инновациялары менен улуттук тарбия терең айкалышат. Биз балдарыбызды 21-кылымдын сыноолоруна даяр, эркин ой жүгүрткөн ойлоп тапкыч кылып тарбиялоого болгон аракетибизди жумшайбыз.»
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Эсенгул Карасартовдун атын сыймык менен алып жүргөн биздин мектепте заманбап лабораториялар, робототехника класстары жана санариптик экосистема түзүлгөн. Ар бир окуучу өзүнүн илимий кыялдарын реалдуулукка айлантууга толук мүмкүнчүлүгү бар.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsFullSpeechOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs shadow-xs transition-colors"
              >
                <span>Толук кайрылууну окуу</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => director && setSelectedTeacher(director)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors"
              >
                <Award className="w-4 h-4 text-amber-600" />
                <span>Директордун өмүр баяны жана жетишкендиктери</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Speech Modal */}
      {isFullSpeechOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Мектептин Директорунун Салтанаттуу Кайрылуусу
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{director?.fullName || 'Абылова Нелли Камчыбековна'} · 2026-окуу жылы</p>
              </div>
              <button
                onClick={() => setIsFullSpeechOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
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
              <p className="border-t border-slate-100 pt-3 italic text-slate-600">
                «Келечек — билимге умтулгандардыкы. Биздин инновациялык мектепке кош келиңиздер!»
              </p>
              <div className="text-right pt-2 font-medium text-slate-900">
                <div>{director?.fullName || 'Абылова Нелли Камчыбековна'}</div>
                <div className="text-xs text-slate-500">Эсенгул Карасартов атындагы инновациялык мектептин директору</div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsFullSpeechOpen(false)}
                className="px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
              >
                Түшүнүктүү
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
