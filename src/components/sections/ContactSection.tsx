import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { submitFeedback } = useSchool();

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
    <section id="contact" className="py-24 bg-gradient-to-b from-[#F4F9FF] via-[#EAF4FF]/60 to-[#F4F9FF] border-b border-sky-200/80 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-sky-800">
            <span className="w-6 h-[1px] bg-sky-500" />
            <span>Байланыш жана Ачык Эшик</span>
            <span className="w-6 h-[1px] bg-sky-500" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase text-balance">
            БИЗ МЕНЕН БАЙЛАНЫШЫҢЫЗ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Суроолоруңуз, сунуштарыңыз же окууга кабыл алуу боюнча суроолоруңуз болсо, бизге жазыңыз же мектепке келиңиз.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-white via-[#F0F7FF] to-[#E5F2FF] text-slate-900 rounded-3xl p-7 sm:p-8 border border-sky-200 shadow-[0_20px_50px_-24px_rgba(14,116,144,0.2)] space-y-6">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700 mb-1">
                  Кабылдама
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Расмий Маалымат
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Дарегибиз:</span>
                    <strong className="text-slate-900 font-semibold">Кыргыз Республикасы, Нарын облусу, Ак-Талаа району</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Телефондор:</span>
                    <div className="font-mono text-slate-900 font-semibold">+996 (312) 65-43-21</div>
                    <div className="font-mono text-slate-600 text-xs">+996 (700) 88-99-00 (WhatsApp)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 border border-indigo-200 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Электрондук почта:</span>
                    <span className="font-mono text-slate-900 font-medium">info@karasartov-school.edu.kg</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Иштөө убактысы:</span>
                    <div className="text-slate-900 font-medium">Дүйшөмбү — Жума: 08:00 – 18:00</div>
                    <div className="text-xs text-slate-500">Ишемби: 08:30 – 14:00 (Ийримдер)</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-200/80">
                <span className="text-xs text-slate-500 block mb-3 font-medium">
                  Социалдык тармактар:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-white border border-sky-200 text-xs font-semibold text-slate-700 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-colors shadow-2xs"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-white border border-sky-200 text-xs font-semibold text-slate-700 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-colors shadow-2xs"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-white border border-sky-200 text-xs font-semibold text-slate-700 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-colors shadow-2xs"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="rounded-3xl overflow-hidden border border-sky-200 shadow-xs bg-white">
              <div className="px-4 py-3 bg-sky-50 border-b border-sky-200 text-slate-900 flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span>Мектептин жайгашкан жери</span>
                </div>
                <span className="text-[11px] font-mono text-sky-700">Ак-Талаа · КР</span>
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
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-sky-200/90 shadow-[0_20px_50px_-24px_rgba(14,116,144,0.18)]">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Онлайн Кайтарым Байланыш Формасы
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
              Сурооңузду же сунушуңузду калтырыңыз. Билдирүү түздөн-түз мектептин администрациясына келип түшөт.
            </p>

            {isSent && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3 animate-fade-in">
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
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-[#F8FBFF] text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-[#F8FBFF] text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-[#F8FBFF] text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-[#F8FBFF] text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Билдирүүнүн тексти <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Сурооңузду же кайрылууңузду кененирээк жазыңыз..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-[#F8FBFF] text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4 text-sky-100" />
                <span>Билдирүүнү жөнөтүү</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
