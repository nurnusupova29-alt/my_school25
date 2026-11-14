import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

export const LightboxModal: React.FC = () => {
  const { selectedGalleryItem, setSelectedGalleryItem, gallery } = useSchool();
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  if (!selectedGalleryItem) return null;

  const currentIndex = gallery.findIndex((item) => item.id === selectedGalleryItem.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + gallery.length) % gallery.length;
    setSelectedGalleryItem(gallery[prevIdx]);
    setZoomLevel(1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % gallery.length;
    setSelectedGalleryItem(gallery[nextIdx]);
    setZoomLevel(1);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => (prev === 1 ? 1.6 : 1));
  };

  return (
    <div
      onClick={() => setSelectedGalleryItem(null)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in select-none"
    >
      {/* Top Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10"
      >
        <div className="space-y-0.5">
          <div className="text-xs text-sky-400 font-semibold">{selectedGalleryItem.category}</div>
          <div className="font-display font-bold text-sm text-slate-200">{selectedGalleryItem.title}</div>
        </div>

        <div className="flex items-center gap-2">
          {selectedGalleryItem.type === 'photo' && (
            <button
              onClick={toggleZoom}
              className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
              title="Чоңойтуу"
            >
              {zoomLevel === 1 ? <ZoomIn className="w-5 h-5" /> : <ZoomOut className="w-5 h-5" />}
            </button>
          )}
          <button
            onClick={() => setSelectedGalleryItem(null)}
            className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Media Wrapper */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center"
      >
        {/* Prev / Next controls */}
        {gallery.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-12 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition-colors z-20"
              title="Мурунку"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-12 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition-colors z-20"
              title="Кийинки"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {selectedGalleryItem.type === 'video' ? (
          <div className="w-full aspect-16/9 bg-black rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
            <video
              src={selectedGalleryItem.mediaUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl shadow-2xl transition-transform duration-300">
            <img
              src={selectedGalleryItem.mediaUrl}
              alt={selectedGalleryItem.title}
              referrerPolicy="no-referrer"
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-h-[75vh] w-auto object-contain cursor-zoom-in transition-transform duration-200"
              onClick={toggleZoom}
            />
          </div>
        )}
      </div>

      {/* Bottom Description */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-4 left-4 right-4 text-center text-xs text-slate-300 max-w-2xl mx-auto bg-slate-950/70 py-2 px-4 rounded-xl border border-slate-800/60"
      >
        <span className="font-mono text-slate-400 mr-2">{currentIndex + 1} / {gallery.length}</span>
        {selectedGalleryItem.description}
      </div>
    </div>
  );
};
