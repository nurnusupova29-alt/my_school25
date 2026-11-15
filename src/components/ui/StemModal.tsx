import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { X, Cpu, User, Users, Calendar, Video, CheckCircle2 } from 'lucide-react';

export const StemModal: React.FC = () => {
  const { selectedStemProject, setSelectedStemProject } = useSchool();

  if (!selectedStemProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-sky-200 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col text-slate-900">
        {/* Header */}
        <div className="px-6 py-4 border-b border-sky-100 flex items-center justify-between bg-sky-50/70">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
            <Cpu className="w-4 h-4" />
            <span>{selectedStemProject.track}</span>
            <span aria-hidden="true" className="text-sky-300">·</span>
            <span className="text-amber-700">{selectedStemProject.status}</span>
          </div>
          <button
            onClick={() => setSelectedStemProject(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-sky-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <h2 className="font-display font-bold text-2xl text-slate-900">
            {selectedStemProject.title}
          </h2>

          <div className="relative aspect-16/9 bg-sky-50 rounded-xl overflow-hidden border border-sky-200">
            <img
              src={selectedStemProject.imageUrl}
              alt={selectedStemProject.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-[#F6FAFF] p-4 rounded-xl border border-sky-100">
            <div>
              <span className="text-slate-500 block mb-1">Ойлоп тапкан окуучулар:</span>
              <strong className="text-slate-900">{selectedStemProject.authorStudents.join(', ')}</strong>
            </div>
            <div>
              <span className="text-slate-500 block mb-1">Илимий насаатчы:</span>
              <strong className="text-sky-700">{selectedStemProject.mentor}</strong>
            </div>
            <div>
              <span className="text-slate-500 block mb-1">Даярдалган убактысы:</span>
              <span className="font-mono text-slate-700">{selectedStemProject.date}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-display font-bold text-sm text-sky-800">
              Долбоордун кыскача мазмуну
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#F6FAFF] p-4 rounded-xl border border-sky-100">
              {selectedStemProject.summary}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-display font-bold text-sm text-sky-800">
              Техникалык түшүндүрмөсү жана колдонулушу
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedStemProject.description}
            </p>
          </div>

          {/* Components */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-sm text-sky-800">
              Колдонулган компоненттер жана технологиялар
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedStemProject.componentsUsed.map((comp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-sky-50 border border-sky-200 text-xs text-sky-900 font-medium"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-sky-100 bg-sky-50/60 flex justify-end">
          <button
            onClick={() => setSelectedStemProject(null)}
            className="px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Жабуу
          </button>
        </div>
      </div>
    </div>
  );
};
