import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { getTranslation } from '../../utils/translations';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { submitFeedback, language } = useSchool();
  const t = getTranslation(language);

  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderPhone || !message) return;

    submitFeedback({
      senderName,
      senderPhone,
      senderEmail: senderEmail || 'info@contact.kg',
      subject: subject || 'Жалпы суроо',
      message,
    });

    setIsSent(true);
    setSenderName('');
    setSenderPhone('');
    setSenderEmail('');
    setSubject('');
    setMessage('');
    setTimeout(() => setIsSent(false), 6000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-sky-50/70 via-sky-100/30 to-sky-50/70 border-b border-sky-200/90 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-900 bg-sky-100 border border-sky-300/80 px-3.5 py-1.5 rounded-full shadow-2xs">
            <MessageSquare className="w-4 h-4 text-sky-700" />
            <span>Байланыш жана Ачык Эшик</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
            БИЗ МЕНЕН БАЙЛАНЫШЫҢЫЗ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Суроолоруңуз, сунуштарыңыз же окууга кабыл алуу боюнча суроолоруңуз болсо, бизге жазыңыз же мектепке келиңиз.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900">
                Расмий Маалымат
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Дарегибиз:</span>
                    <strong className="text-slate-900">Кыргыз Республикасы, Чүй облусу, Инновация көчөсү, 42</strong>
                    <div className="text-xs text-slate-500 mt-0.5">(Ориентир: Борбордук паркттын жанында)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Телефондор:</span>
                    <div className="font-mono text-slate-900 font-semibold">+996 (312) 65-43-21</div>
                    <div className="font-mono text-slate-600 text-xs">+996 (700) 88-99-00 (WhatsApp)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Электрондук почта:</span>
                    <span className="font-mono text-slate-900">info@karasartov-school.edu.kg</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Иштөө убактысы:</span>
                    <div>Дүйшөмбү — Жума: 08:00 – 18:00</div>
                    <div className="text-xs text-slate-500">Ишемби: 08:30 – 14:00 (Ийримдер)</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-xs text-slate-500 block mb-3 font-medium">
                  Социалдык тармактарда биз:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-pink-600 hover:border-pink-300 transition-colors shadow-2xs"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-sky-600 hover:border-sky-300 transition-colors shadow-2xs"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-red-600 hover:border-red-300 transition-colors shadow-2xs"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100">
              <div className="p-3 bg-slate-900 text-white flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>Google Maps: Инновация көчөсү, 42</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">42.8746° N, 74.5698° E</span>
              </div>
              <iframe
                title="Мектептин жайгашкан жери"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46808.64817441865!2d74.5698!3d42.8746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492eb5f1b1fb86e2!2sBishkek!5e0!3m2!1sen!2skg!4v1680000000000!5m2!1sen!2skg"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Feedback Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Онлайн Кайтарым Байланыш Формасы
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Сурооңузду же сунушуңузду калтырыңыз. Билдирүү түздөн-түз мектептин администрациясына келип түшөт.
            </p>

            {isSent && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <strong>Билдирүүңүз кабыл алынды!</strong>
                  <div className="text-emerald-700 mt-0.5">Мектептин өкүлдөрү сиз менен жакын арада байланышат.</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Сиздин аты-жөнүңүз <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Мисалы: Асан Садыков"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Телефон номериңиз <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+996 700 00-00-00"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Электрондук почта (email)
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Кайрылуунун темасы
                  </label>
                  <input
                    type="text"
                    placeholder="Мисалы: 1-класска кабыл алуу"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Билдирүүнүн тексти <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Сурооңузду же кайрылууңузду кененирээк жазыңыз..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-sky-500/20 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Билдирүүнү жөнөтүү</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
