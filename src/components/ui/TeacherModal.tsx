import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { X, Award, GraduationCap, Mail, BookOpen, Quote, CheckCircle2 } from 'lucide-react';

export const TeacherModal: React.FC = () => {
  const { selectedTeacher, setSelectedTeacher } = useSchool();

  if (!selectedTeacher) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Мугалимдин Жеке Профили
          </span>
          <button
            onClick={() => setSelectedTeacher(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-md">
              <img
                src={selectedTeacher.imageUrl}
                alt={selectedTeacher.fullName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-semibold text-sky-700 uppercase">
                {selectedTeacher.role}
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900">
                {selectedTeacher.fullName}
              </h3>
              <div className="text-sm font-medium text-slate-600 flex items-center justify-center sm:justify-start gap-1.5 pt-1">
                <BookOpen className="w-4 h-4 text-sky-600" />
                <span>{selectedTeacher.subject}</span>
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Педагогикалык стажы: {selectedTeacher.experienceYears} жыл
              </div>
            </div>
          </div>

          {/* Motto */}
          {selectedTeacher.motto && (
            <div className="bg-sky-50 border-l-3 border-sky-500 p-4 rounded-r-xl italic text-xs sm:text-sm text-sky-950 flex items-start gap-2.5">
              <Quote className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
              <span>{selectedTeacher.motto}</span>
            </div>
          )}

          {/* Education */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-600" />
              <span>Билими жана квалификациясы</span>
            </h4>
            <p className="text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100 leading-relaxed">
              {selectedTeacher.education}
            </p>
          </div>

          {/* Awards */}
          {selectedTeacher.awards.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Сыйлыктары жана кесиптик жетишкендиктери</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedTeacher.awards.map((award, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Classes & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
              <span className="text-slate-400 block mb-1 font-medium">Окуткан класстары:</span>
              <span className="font-semibold text-slate-800">
                {selectedTeacher.classes.join(', ')}
              </span>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
              <span className="text-slate-400 block mb-1 font-medium">Электрондук дареги:</span>
              <a
                href={`mailto:${selectedTeacher.email}`}
                className="font-mono font-semibold text-sky-700 hover:underline flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{selectedTeacher.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={() => setSelectedTeacher(null)}
            className="px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Жабуу
          </button>
        </div>
      </div>
    </div>
  );
};
