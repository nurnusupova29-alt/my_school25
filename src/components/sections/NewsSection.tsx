import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import { Calendar, Eye, ArrowRight, Search } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const { news, setSelectedNews, language } = useSchool();
  const t = getTranslation(language);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Бардык жаңылыктар' },
    { id: 'STEM', label: 'STEM & Инновация' },
    { id: 'Олимпиада', label: 'Олимпиадалар' },
    { id: 'Семинар', label: 'Семинарлар' },
    { id: 'Майрам', label: 'Майрамдар' },
    { id: 'Спорт', label: 'Спорт' },
  ];

  const filteredNews = news.filter((article) => {
    const matchesCat = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesQuery =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="news" className="py-24 bg-gradient-to-b from-[#F4F9FF] via-[#EAF4FF]/60 to-[#F4F9FF] border-b border-sky-200/80 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-sky-800">
              <span className="w-7 h-[1px] bg-sky-500" />
              <span>Мектеп Турмушу · Пресса</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
              АКЫРКЫ ЖАҢЫЛЫКТАР ЖАНА ИШ-ЧАРАЛАР
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Мектептеги маанилүү окуялар, жеңиштер, илимий конференциялар жана майрамдык кечелер.
            </p>
          </div>

          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Жаңылыктарды издөө..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-sky-200 bg-white text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Categories */}
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="bg-white rounded-3xl border border-sky-200/80 overflow-hidden shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-sky-300 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-sky-700">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 font-mono text-[11px] tabular-nums">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{item.date}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 font-mono text-[11px] tabular-nums">
                      <Eye className="w-3 h-3 text-slate-400" />
                      <span>{item.views}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-sky-700">
                <span>{t.readMore}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-sky-600" />
              </div>
            </article>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            Бул категория боюнча жаңылыктар азырынча жок же издөө натыйжа берген жок.
          </div>
        )}
      </div>
    </section>
  );
};
