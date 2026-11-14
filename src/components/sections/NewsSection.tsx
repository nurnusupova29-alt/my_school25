import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import { NewsArticle } from '../../types';
import { Calendar, Eye, User, ArrowRight, Search, Newspaper } from 'lucide-react';

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
    <section id="news" className="py-20 bg-gradient-to-b from-sky-50/70 via-sky-100/30 to-sky-50/70 border-b border-sky-200/90 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-900 bg-sky-100 border border-sky-300/80 px-3.5 py-1.5 rounded-full shadow-2xs">
              <Newspaper className="w-4 h-4 text-sky-700" />
              <span>Мектеп Турмушу</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
              АКЫРКЫ ЖАҢЫЛЫКТАР ЖАНА ИШ-ЧАРАЛАР
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Мектептеги маанилүү окуялар, жеңиштер, илимий конференциялар жана майрамдык кечелер.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Жаңылыктарды издөө..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="bg-slate-50/70 rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-16/10 bg-slate-200 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-white">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.date}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.views} көрдү</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Read button */}
              <div className="p-6 pt-0 flex items-center justify-between text-xs font-semibold text-sky-700">
                <span>{t.readMore}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
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
