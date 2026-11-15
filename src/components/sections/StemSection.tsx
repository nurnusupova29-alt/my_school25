import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { STEM_ROBOTICS_IMG } from '../../data/initialData';
import { Bot, Sliders, Play, RotateCcw, Eye, Video } from 'lucide-react';

export const StemSection: React.FC = () => {
  const { stemProjects, setSelectedStemProject } = useSchool();
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [interactiveMode, setInteractiveMode] = useState<boolean>(false);

  const [distance, setDistance] = useState<number>(45);
  const [motorSpeed, setMotorSpeed] = useState<number>(60);
  const [sensorLight, setSensorLight] = useState<number>(85);
  const [isSimRunning, setIsSimRunning] = useState<boolean>(false);

  const tracks = [
    { id: 'all', label: 'Бардык багыттар' },
    { id: 'Робототехника', label: 'Робототехника' },
    { id: 'Программалоо', label: 'Программалоо' },
    { id: 'Жасалма Интеллект (AI)', label: 'Жасалма Интеллект (AI)' },
    { id: '3D Моделдөө', label: '3D Моделдөө' },
    { id: 'Инженердик', label: 'Инженердик' },
    { id: 'Эксперименттер', label: 'Эксперименттер' },
  ];

  const filteredProjects =
    selectedTrack === 'all'
      ? stemProjects
      : stemProjects.filter((p) => p.track === selectedTrack);

  const isObstacleDanger = distance < 20;
  const robotStatus = isObstacleDanger
    ? 'ТОРМОЗ · Тоскоолдук өтө жакын'
    : isSimRunning
    ? `АЛГА ЖҮРҮҮ · ${motorSpeed}% ылдамдык`
    : 'ТОКТОТУЛГАН';

  return (
    <section
      id="stem"
      className="py-24 bg-gradient-to-b from-[#EAF4FF] via-[#F4F9FF] to-[#EAF4FF] text-slate-900 scroll-mt-14 relative overflow-hidden border-b border-sky-200/80"
    >
      <div className="absolute inset-0 bg-arch-grid-light opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3.5 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-sky-800">
              <span className="w-7 h-[1.5px] bg-amber-500" />
              <span>Флагмандык Инновациялык Бөлүм</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
              STEM ЖАНА ЖАСАЛМА ИНТЕЛЛЕКТ БАГЫТЫ
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Робототехника, 3D инженердик моделдөө, программалоо жана табигый илимдер боюнча окуучулардын уникалдуу ойлоп табуулары.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setInteractiveMode(!interactiveMode)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                interactiveMode
                  ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold shadow-sm'
                  : 'bg-sky-600 hover:bg-sky-500 text-white border-sky-600 shadow-sm shadow-sky-500/20'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>
                {interactiveMode
                  ? 'Долбоорлор тизмесине кайтуу'
                  : 'Интерактивдүү STEM Симулятор'}
              </span>
            </button>
          </div>
        </div>

        {/* Interactive Simulator Mode */}
        {interactiveMode && (
          <div className="bg-white rounded-3xl border border-sky-200 p-6 sm:p-8 mb-12 shadow-[0_20px_50px_-22px_rgba(14,116,144,0.2)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-sky-100 gap-4">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2.5">
                  <Bot className="w-5 h-5 text-sky-600" />
                  <span>Интерактивдүү Робот-Сенсор Лабораториясы</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  УЗИ (Ultrasonic) жана жарык сенсорлорунун көрсөткүчтөрүн өзгөртүп, роботтун логикасын реалдуу убакытта байкаңыз.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSimRunning(!isSimRunning)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                    isSimRunning
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                      : 'bg-sky-600 hover:bg-sky-500 text-white'
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isSimRunning ? 'Тыныгуу' : 'Симуляцияны баштоо'}</span>
                </button>
                <button
                  onClick={() => {
                    setDistance(45);
                    setMotorSpeed(60);
                    setSensorLight(85);
                    setIsSimRunning(false);
                  }}
                  className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 transition-colors cursor-pointer"
                  title="Баштапкы абалга келтирүү"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
              {/* Visual Simulation Canvas */}
              <div className="lg:col-span-7 bg-[#F5FAFF] rounded-2xl p-6 border border-sky-200 relative min-h-[280px] flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono font-semibold text-sky-700">ESP32 Робот-Сенсор Модулу</span>
                  <span
                    className={`font-semibold ${
                      isObstacleDanger ? 'text-rose-600' : 'text-emerald-700'
                    }`}
                  >
                    {isObstacleDanger ? 'ТОСКООЛДУК ТАБЫЛДЫ' : 'ШТАТТЫК АБАЛ'}
                  </span>
                </div>

                {/* Track visual */}
                <div className="relative h-28 my-4 flex items-center justify-between border-y border-dashed border-sky-300 px-4">
                  <div
                    className={`w-20 h-16 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                      isObstacleDanger
                        ? 'bg-rose-50 border-rose-400 shadow-sm'
                        : isSimRunning
                        ? 'bg-sky-100 border-sky-500 shadow-sm translate-x-2'
                        : 'bg-white border-sky-200'
                    }`}
                  >
                    <Bot className="w-6 h-6 text-sky-600 mb-1" />
                    <span className="text-[10px] font-mono font-semibold text-slate-700">Robo-1</span>
                  </div>

                  <div className="flex-1 mx-4 flex items-center justify-center">
                    <div
                      className={`h-0.5 rounded-full transition-all ${
                        isObstacleDanger ? 'w-full bg-rose-500' : 'w-2/3 bg-sky-400'
                      }`}
                    />
                  </div>

                  <div
                    className={`w-10 h-20 rounded-xl flex items-center justify-center text-[10px] font-mono border transition-colors ${
                      isObstacleDanger
                        ? 'bg-rose-100 border-rose-400 text-rose-700 font-bold'
                        : 'bg-white border-sky-200 text-slate-500'
                    }`}
                  >
                    ТОС
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs bg-white p-3.5 rounded-xl border border-sky-100">
                  <div>
                    <div className="text-slate-400 text-[11px]">Аралык (УЗИ)</div>
                    <div className="font-mono text-sky-700 font-bold text-sm tabular-nums">
                      {distance} см
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px]">Кыймылдаткыч</div>
                    <div className="font-mono text-emerald-700 font-bold text-sm tabular-nums">
                      {isObstacleDanger ? 0 : motorSpeed}%
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px]">Жарык деңгээли</div>
                    <div className="font-mono text-amber-700 font-bold text-sm tabular-nums">
                      {sensorLight}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls Deck */}
              <div className="lg:col-span-5 space-y-5 bg-[#F8FBFF] p-6 rounded-2xl border border-sky-200">
                <div className="text-xs font-semibold text-sky-800 uppercase tracking-[0.16em]">
                  Сенсорлорду жөндөө
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-700 font-medium">Тоскоолдукка чейинки аралык</span>
                    <span className="font-mono font-bold text-sky-700 tabular-nums">{distance} см</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>5 см (Жакын)</span>
                    <span>100 см (Алыс)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-700 font-medium">Кыймылдаткыч ылдамдыгы (PWM)</span>
                    <span className="font-mono font-bold text-emerald-700 tabular-nums">{motorSpeed}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={motorSpeed}
                    onChange={(e) => setMotorSpeed(Number(e.target.value))}
                    className="w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-700 font-medium">Жарык фоторезистору</span>
                    <span className="font-mono font-bold text-amber-700 tabular-nums">{sensorLight}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={sensorLight}
                    onChange={(e) => setSensorLight(Number(e.target.value))}
                    className="w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                <div className="pt-3 text-xs text-slate-500 border-t border-sky-100">
                  <span className="text-slate-800 font-semibold">Абалы: </span>
                  <span className="font-mono font-semibold text-sky-700">{robotStatus}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Track Filter Segmented Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all border cursor-pointer ${
                selectedTrack === track.id
                  ? 'bg-sky-600 text-white font-semibold border-sky-600 shadow-xs'
                  : 'bg-white text-slate-600 border-sky-200/80 hover:border-sky-300 hover:text-sky-900'
              }`}
            >
              {track.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-sky-200/80 overflow-hidden shadow-xs hover:-translate-y-1 hover:shadow-lg hover:border-sky-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="relative aspect-16/9 bg-sky-100 overflow-hidden">
                  <img
                    src={project.imageUrl || STEM_ROBOTICS_IMG}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
                  {project.videoUrl && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-lg text-sky-700 border border-sky-200 shadow-xs">
                      <Video className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                <div className="px-6 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-sky-700">
                    <span>{project.track}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="font-mono text-slate-400">{project.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="px-6 flex items-center gap-2 text-[11px] text-slate-500 truncate">
                  {project.componentsUsed.slice(0, 3).join(' · ')}
                </div>
              </div>

              <div className="px-6 py-4 mt-4 border-t border-sky-100 flex items-center justify-between text-xs">
                <div className="min-w-0 pr-2">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Окуучулар</div>
                  <div className="text-slate-800 font-semibold truncate">
                    {project.authorStudents.join(', ')}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStemProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-50 text-sky-800 hover:bg-sky-600 hover:text-white border border-sky-200 transition-colors font-semibold text-xs shrink-0 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Көрүү</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* STEM Pillars */}
        <div className="mt-16 bg-white rounded-3xl p-7 sm:p-9 border border-sky-200/80 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-sky-100">
            <div className="space-y-2 md:pr-6">
              <div className="font-mono text-xs font-bold text-sky-700 tracking-widest">01</div>
              <h4 className="font-display font-bold text-slate-900 text-base">
                Робототехника жана IoT
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Arduino Uno, Mega, ESP32 жана Raspberry Pi 5 микропроцессорлору менен автономдуу системаларды иштеп чыгуу.
              </p>
            </div>

            <div className="space-y-2 md:px-6">
              <div className="font-mono text-xs font-bold text-amber-600 tracking-widest">02</div>
              <h4 className="font-display font-bold text-slate-900 text-base">
                3D Басып Чыгаруу жана Фаблаб
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Creality жана Anycubic принтерлери менен механикалык деталдарды жана прототиптерди чийип чыгаруу.
              </p>
            </div>

            <div className="space-y-2 md:pl-6">
              <div className="font-mono text-xs font-bold text-emerald-700 tracking-widest">03</div>
              <h4 className="font-display font-bold text-slate-900 text-base">
                AI жана Компьютердик Көрүү
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Python, OpenCV жана нейротармактар менен объектилерди таануу жана автоматташтырылган алгоритмдерди түзүү.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
