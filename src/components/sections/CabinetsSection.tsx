import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { CabinetLab } from '../../types';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const CabinetsSection: React.FC = () => {
  const { cabinets } = useSchool();
  const [selectedCabinet, setSelectedCabinet] = useState<CabinetLab>(cabinets[0] || null);

  return (
    <section id="cabinets" className="py-24 bg-gradient-to-b from-[#EAF4FF]/65 via-[#F4F9FF] to-[#EAF4FF]/65 border-b border-sky-200/80 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-sky-800">
            <span className="w-6 h-[1px] bg-sky-500" />
            <span>Инфраструктура жана Материалдык База</span>
            <span className="w-6 h-[1px] bg-sky-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase text-balance">
            ЗАМАНБАП КАБИНЕТТЕР ЖАНА STEM ЛАБОРАТОРИЯЛАР
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Мектеп эң алдыңкы санариптик жабдуулар, мультимедиалык комплекстер жана коопсуз лабораториялык куралдар менен камсыздалган.
          </p>
        </div>

        {/* Interactive Master-Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cabinet Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-[11px] font-semibold text-sky-800 uppercase tracking-[0.18em] mb-3">
              Кабинетти тандаңыз ({cabinets.length})
            </div>
            {cabinets.map((cab) => {
              const isSelected = selectedCabinet?.id === cab.id;
              return (
                <button
                  key={cab.id}
                  onClick={() => setSelectedCabinet(cab)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-sky-600 border-sky-600 text-white shadow-md shadow-sky-200/70'
                      : 'bg-white border-sky-200/80 text-slate-900 hover:border-sky-300 hover:bg-sky-50/40'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className={`font-mono font-semibold ${isSelected ? 'text-amber-200' : 'text-sky-700'}`}>
                        {cab.roomNumber}
                      </span>
                      <span aria-hidden="true" className={isSelected ? 'text-sky-200' : 'text-slate-300'}>
                        ·
                      </span>
                      <span className={isSelected ? 'text-sky-100' : 'text-slate-500'}>{cab.floor}</span>
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base">
                      {cab.title}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-amber-200 translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Spotlight */}
          {selectedCabinet && (
            <div className="lg:col-span-7 bg-white rounded-3xl border border-sky-200/90 overflow-hidden shadow-[0_24px_60px_-24px_rgba(14,116,144,0.22)]">
              <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
                <img
                  src={selectedCabinet.imageUrl}
                  alt={selectedCabinet.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050C1A]/90 via-[#050C1A]/20 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
                  <span className="text-xs font-mono text-amber-300 font-semibold block">
                    {selectedCabinet.roomNumber} · {selectedCabinet.floor}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl leading-tight">
                    {selectedCabinet.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  {selectedCabinet.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs bg-[#F6FAFF] p-4 rounded-2xl border border-sky-100">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Жооптуу мугалим / башчы:</span>
                    <span className="font-semibold text-slate-900">{selectedCabinet.headTeacher}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Окуучулук орун:</span>
                    <span className="font-semibold text-slate-900 tabular-nums">{selectedCabinet.capacity} орун</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm text-slate-900">
                    Негизги жабдуулар жана комплектация:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {selectedCabinet.equipment.map((eq, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedCabinet.features.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 text-xs text-sky-800 font-medium">
                    {selectedCabinet.features.join(' · ')}
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
