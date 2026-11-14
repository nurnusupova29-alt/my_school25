import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { GalleryItem } from '../../types';
import { Image, Video, Play, Maximize2, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { gallery, setSelectedGalleryItem } = useSchool();
  const [filterType, setFilterType] = useState<'all' | 'photo' | 'video'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Бардыгы' },
    { id: 'Мектеп турмушу', label: 'Мектеп кампусу' },
    { id: 'STEM долбоорлор', label: 'STEM & Робототехника' },
    { id: 'Окуу процесси', label: 'Окуу процесси' },
  ];

  const filteredItems = gallery.filter((item) => {
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesType && matchesCategory;
  });

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-sky-50 via-sky-100/40 to-sky-50 border-b border-sky-200/90 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-900 bg-sky-100 border border-sky-300/80 px-3.5 py-1.5 rounded-full shadow-2xs">
              <Image className="w-4 h-4 text-sky-700" />
              <span>Фото жана Видео Хроника</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
              МЕКТЕПТИН ЖАШООСУ ЖАНА ГАЛЕРЕЯСЫ
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Инновациялык сабактардын, робототехника мелдештеринин, спорттук жеңиштердин жана майрамдардын көз ирмемдери.
            </p>
          </div>

          {/* Type switcher */}
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl border border-slate-300">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filterType === 'all' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'
              }`}
            >
              Бардыгы ({gallery.length})
            </button>
            <button
              onClick={() => setFilterType('photo')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1 ${
                filterType === 'photo' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'
              }`}
            >
              <Image className="w-3.5 h-3.5" />
              <span>Сүрөттөр</span>
            </button>
            <button
              onClick={() => setFilterType('video')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1 ${
                filterType === 'video' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Видеолор</span>
            </button>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white font-semibold shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid with Lightbox support */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedGalleryItem(item)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
                {item.type === 'video' ? (
                  <div className="w-full h-full relative flex items-center justify-center bg-slate-900">
                    <video
                      src={item.mediaUrl}
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute w-12 h-12 rounded-full bg-sky-500/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-1 fill-white" />
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.mediaUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex items-center gap-1.5 text-xs text-white font-medium">
                    <Maximize2 className="w-4 h-4 text-sky-300" />
                    <span>Чоңойтуп көрүү</span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-white border border-slate-700/60">
                  {item.category}
                </div>
              </div>

              <div className="p-4 space-y-1">
                <div className="text-[11px] font-mono text-slate-400">{item.date}</div>
                <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
