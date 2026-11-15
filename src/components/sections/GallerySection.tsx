import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Image, Video, Play, Maximize2 } from 'lucide-react';

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
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#EAF4FF]/65 via-[#F4F9FF] to-[#EAF4FF]/65 border-b border-sky-200/80 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-sky-800">
              <span className="w-7 h-[1px] bg-sky-500" />
              <span>Фото жана Видео Хроника</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
              МЕКТЕПТИН ЖАШООСУ ЖАНА ГАЛЕРЕЯСЫ
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Инновациялык сабактардын, робототехника мелдештеринин, спорттук жеңиштердин жана майрамдардын көз ирмемдери.
            </p>
          </div>

          <div className="inline-flex p-1 bg-sky-100/80 rounded-xl border border-sky-200/90 self-start md:self-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filterType === 'all' ? 'bg-sky-600 text-white shadow-xs font-semibold' : 'text-slate-600 hover:text-sky-900'
              }`}
            >
              Бардыгы ({gallery.length})
            </button>
            <button
              onClick={() => setFilterType('photo')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                filterType === 'photo' ? 'bg-sky-600 text-white shadow-xs font-semibold' : 'text-slate-600 hover:text-sky-900'
              }`}
            >
              <Image className="w-3.5 h-3.5" />
              <span>Сүрөттөр</span>
            </button>
            <button
              onClick={() => setFilterType('video')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                filterType === 'video' ? 'bg-sky-600 text-white shadow-xs font-semibold' : 'text-slate-600 hover:text-sky-900'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Видеолор</span>
            </button>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all border cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white font-semibold border-sky-600 shadow-xs'
                  : 'bg-white text-slate-600 border-sky-200/80 hover:border-sky-300 hover:text-sky-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedGalleryItem(item)}
              className="bg-white rounded-3xl overflow-hidden border border-sky-200/80 shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-sky-300 transition-all duration-200 group cursor-pointer flex flex-col justify-between"
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#050C1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <div className="flex items-center gap-2 text-xs text-white font-semibold">
                    <Maximize2 className="w-4 h-4 text-amber-300" />
                    <span>Чоңойтуп көрүү</span>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-1.5">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="font-semibold text-sky-700">{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{item.date}</span>
                </div>
                <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-1">
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
