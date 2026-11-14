import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { CabinetLab } from '../../types';
import { Layers, MapPin, User, CheckCircle2, ChevronRight, Monitor, Sparkles } from 'lucide-react';

export const CabinetsSection: React.FC = () => {
  const { cabinets } = useSchool();
  const [selectedCabinet, setSelectedCabinet] = useState<CabinetLab>(cabinets[0] || null);

  return (
    <section id="cabinets" className="py-20 bg-gradient-to-b from-sky-50 via-sky-100/40 to-sky-50 border-b border-sky-200/90 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-900 bg-sky-100 border border-sky-300/80 px-3.5 py-1.5 rounded-full shadow-2xs">
            <Monitor className="w-4 h-4 text-sky-700" />
            <span>Инфраструктура жана Материалдык База</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
            ЗАМАНБАП КАБИНЕТТЕР ЖАНА STEM ЛАБОРАТОРИЯЛАР
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Мектеп эң алдыңкы санариптик жабдуулар, мультимедиалык комплекстер жана коопсуз лабораториялык куралдар менен камсыздалган.
          </p>
        </div>

        {/* Interactive Master-Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cabinet List (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Кабинетти тандаңыз ({cabinets.length})
            </div>
            {cabinets.map((cab) => {
              const isSelected = selectedCabinet?.id === cab.id;
              return (
                <button
                  key={cab.id}
                  onClick={() => setSelectedCabinet(cab)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-sky-500 shadow-md ring-1 ring-sky-500/30'
                      : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono font-semibold text-sky-700">{cab.roomNumber}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="text-slate-500">{cab.floor}</span>
                    </div>
                    <div className="font-display font-bold text-sm text-slate-900">
                      {cab.title}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-sky-600 translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Spotlight (Right Column) */}
          {selectedCabinet && (
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md">
              {/* Image */}
              <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
                <img
                  src={selectedCabinet.imageUrl}
                  alt={selectedCabinet.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono text-sky-300 font-semibold block">
                    {selectedCabinet.roomNumber} ({selectedCabinet.floor})
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl leading-tight">
                    {selectedCabinet.title}
                  </h3>
                </div>
              </div>

              {/* Details & Specs */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedCabinet.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Жооптуу мугалим / башчы:</span>
                    <span className="font-semibold text-slate-800">{selectedCabinet.headTeacher}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Студенттик орун:</span>
                    <span className="font-semibold text-slate-800 tabular-nums">{selectedCabinet.capacity} орун</span>
                  </div>
                </div>

                {/* Equipment List */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm text-slate-900">
                    Негизги жабдуулар жана комплектация:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedCabinet.equipment.map((eq, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Special Features */}
                {selectedCabinet.features.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                    {selectedCabinet.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-sky-800 bg-sky-50 px-3 py-1 rounded-lg border border-sky-100 font-medium"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
