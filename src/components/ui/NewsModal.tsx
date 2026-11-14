import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { X, Calendar, Eye, User, Share2 } from 'lucide-react';

export const NewsModal: React.FC = () => {
  const { selectedNews, setSelectedNews, showToast } = useSchool();

  if (!selectedNews) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedNews.title,
        text: selectedNews.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Шилтеме көчүрүлдү!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
            <span>{selectedNews.category}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="font-mono text-slate-500">{selectedNews.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
              title="Бөлүшүү"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedNews(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 leading-snug">
            {selectedNews.title}
          </h2>

          <div className="flex items-center gap-3 text-xs text-slate-500 border-y border-slate-100 py-2.5">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>Автор: <strong>{selectedNews.author}</strong></span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              <span>{selectedNews.views + 1} окулду</span>
            </span>
          </div>

          <div className="rounded-xl overflow-hidden aspect-16/9 bg-slate-100 border border-slate-200">
            <img
              src={selectedNews.imageUrl}
              alt={selectedNews.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-100">
              {selectedNews.summary}
            </p>
            <p>{selectedNews.content}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={() => setSelectedNews(null)}
            className="px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Жабуу
          </button>
        </div>
      </div>
    </div>
  );
};
