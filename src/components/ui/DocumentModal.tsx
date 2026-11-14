import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { X, FileText, Download, Printer, ShieldCheck } from 'lucide-react';

export const DocumentModal: React.FC = () => {
  const { selectedDoc, setSelectedDoc, showToast } = useSchool();

  if (!selectedDoc) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    showToast(`«${selectedDoc.title}» файлы ийгиликтүү жүктөлдү!`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in print:bg-white print:p-0">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col print:shadow-none print:max-h-full print:rounded-none">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-rose-600" />
            <span className="text-xs font-semibold text-slate-700">{selectedDoc.category} · {selectedDoc.fileSize}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
              title="Басып чыгаруу"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
              title="Жүктөп алуу"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedDoc(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Paper Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-6 bg-slate-50/50">
          <div className="border border-slate-200 bg-white p-8 sm:p-10 rounded-xl shadow-xs space-y-6 max-w-2xl mx-auto">
            <div className="text-center border-b border-slate-200 pb-6 space-y-2">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
                Кыргыз Республикасынын Билим берүү жана илим министрлиги
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 leading-snug">
                «Эсенгул Карасартов атындагы инновациялык жалпы билим берүү мектеби»
              </h3>
              <div className="text-xs text-sky-800 font-medium">
                {selectedDoc.title}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Жаңыланган датасы: {selectedDoc.dateUpdated}
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-700 leading-relaxed font-serif">
              <p className="font-semibold text-slate-900">
                1. ЖАЛПЫ ЖОБОЛОР ЖАНА НЕГИЗДЕР
              </p>
              <p>{selectedDoc.description}</p>
              <p className="bg-slate-50 p-4 rounded-lg border border-slate-100 italic">
                {selectedDoc.contentSample}
              </p>
              <p>
                Бул документ мектептин Педагогикалык Кеңешинин 2026-жылдын чечими менен бекитилген жана бардык окуучулар, мугалимдер жана ата-энелер үчүн милдеттүү күчкө ээ.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Мөөр жана кол тамга менен күбөлөндүрүлгөн</span>
              </div>
              <div className="text-right">
                <div className="font-semibold text-slate-900">Мектептин Директору</div>
                <div className="text-[11px] text-slate-400">Абылова Нелли Камчыбековна</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-400">
            Формат: PDF (Adobe Acrobat Reader менен ачылат)
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF Жүктөп алуу ({selectedDoc.fileSize})</span>
            </button>
            <button
              onClick={() => setSelectedDoc(null)}
              className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold"
            >
              Жабуу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
