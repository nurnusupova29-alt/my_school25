import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { STEMProject } from '../../types';
import { STEM_ROBOTICS_IMG } from '../../data/initialData';
import { Cpu, Bot, Code, Sparkles, Layers, Sliders, Play, RotateCcw, Eye, Video, CheckCircle2 } from 'lucide-react';

export const StemSection: React.FC = () => {
  const { stemProjects, setSelectedStemProject } = useSchool();
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [interactiveMode, setInteractiveMode] = useState<boolean>(false);

  // Interactive STEM Simulator state (Obstacle avoidance sensor & robot speed)
  const [distance, setDistance] = useState<number>(45); // cm
  const [motorSpeed, setMotorSpeed] = useState<number>(60); // %
  const [sensorLight, setSensorLight] = useState<number>(85); // %
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

  const filteredProjects = selectedTrack === 'all'
    ? stemProjects
    : stemProjects.filter((p) => p.track === selectedTrack);

  // Simulator computed status
  const isObstacleDanger = distance < 20;
  const robotStatus = isObstacleDanger
    ? 'КҮТҮҮ / ТОРМОЗ (Тоскоолдук өтө жакын!)'
    : isSimRunning
    ? `АЛГА ЖҮРҮҮ (${motorSpeed}% ылдамдыкта)`
    : 'ТОКТОТУЛГАН';

  return (
    <section id="stem" className="py-20 bg-gradient-to-b from-sky-950 via-slate-900 to-sky-950 text-slate-100 scroll-mt-14 relative overflow-hidden border-y-2 border-sky-400/50 shadow-lg">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-200 bg-sky-900/80 border border-sky-400/50 px-3.5 py-1.5 rounded-full shadow-xs">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>Флагмандык Инновациялык Бөлүм</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-wide uppercase">
              STEM ЖАНА ЖАСАЛМА ИНТЕЛЛЕКТ БАГЫТЫ
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Робототехника, 3D инженердик моделдөө, программалоо жана табигый илимдер боюнча окуучулардын уникалдуу ойлоп табуулары.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setInteractiveMode(!interactiveMode)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-md ${
                interactiveMode
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-800 text-sky-300 border border-slate-700 hover:bg-slate-750'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>{interactiveMode ? 'Долбоорлор тизмесине кайтуу' : 'Интерактивдүү STEM Симулятор'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Simulator Mode */}
        {interactiveMode ? (
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 mb-12 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                  <Bot className="w-5 h-5 text-sky-400" />
                  <span>Интерактивдүү Робот-Сенсор Лабораториясы (SimLab)</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  УЗИ (Ultrasonic) жана жарык сенсорлорунун көрсөткүчтөрүн өзгөртүп, роботтун логикасын реалдуу убакытта байкаңыз.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSimRunning(!isSimRunning)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold ${
                    isSimRunning
                      ? 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                      : 'bg-emerald-500 hover:bg-emerald-600 text-white'
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
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title="Баштапкы абалга келтирүү"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
              {/* Visual Simulation Canvas */}
              <div className="lg:col-span-7 bg-slate-900 rounded-xl p-6 border border-slate-800 relative min-h-[280px] flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">ESP32-ROBOT // TELEMETRY</span>
                  <span
                    className={`font-semibold ${
                      isObstacleDanger ? 'text-rose-400' : 'text-emerald-400'
                    }`}
                  >
                    {isObstacleDanger ? '⚠ ТОСКООЛДУК ТАБЫЛДЫ' : '● БАРДЫГЫ ЖАКШЫ'}
                  </span>
                </div>

                {/* Track visual */}
                <div className="relative h-28 my-4 flex items-center justify-between border-y border-dashed border-slate-700 px-4">
                  {/* Robot Box */}
                  <div
                    className={`w-20 h-16 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                      isObstacleDanger
                        ? 'bg-rose-950/60 border-rose-500 shadow-lg shadow-rose-500/20'
                        : isSimRunning
                        ? 'bg-sky-950/60 border-sky-400 shadow-lg shadow-sky-500/20 translate-x-2'
                        : 'bg-slate-800 border-slate-600'
                    }`}
                  >
                    <Bot className="w-6 h-6 text-sky-400 mb-1" />
                    <span className="text-[10px] font-mono text-slate-300">Robo-1</span>
                  </div>

                  {/* Ultrasonic Waves */}
                  <div className="flex-1 mx-4 flex items-center justify-center">
                    <div
                      className={`h-0.5 rounded-full transition-all ${
                        isObstacleDanger ? 'w-full bg-rose-500' : 'w-2/3 bg-sky-500/60'
                      }`}
                    />
                  </div>

                  {/* Obstacle Wall */}
                  <div
                    className={`w-8 h-20 rounded-lg flex items-center justify-center text-[10px] font-mono border transition-colors ${
                      isObstacleDanger
                        ? 'bg-rose-900/40 border-rose-400 text-rose-300 font-bold'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    ДУБАЛ
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                  <div>
                    <div className="text-slate-400 text-[11px]">Аралык (УЗИ)</div>
                    <div className="font-mono text-sky-400 font-bold text-sm tabular-nums">
                      {distance} см
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px]">Кыймылдаткыч</div>
                    <div className="font-mono text-emerald-400 font-bold text-sm tabular-nums">
                      {isObstacleDanger ? 0 : motorSpeed}%
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px]">Жарык деңгээли</div>
                    <div className="font-mono text-amber-400 font-bold text-sm tabular-nums">
                      {sensorLight}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls Deck */}
              <div className="lg:col-span-5 space-y-5 bg-slate-900/60 p-6 rounded-xl border border-slate-800">
                <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  Сенсорлорду жөндөө (Параметрлер)
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Тоскоолдукка чейинки аралык</span>
                    <span className="font-mono text-sky-400 tabular-nums">{distance} см</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>5 см (Жакын)</span>
                    <span>100 см (Алыс)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Кыймылдаткыч ылдамдыгы (ШИМ / PWM)</span>
                    <span className="font-mono text-emerald-400 tabular-nums">{motorSpeed}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={motorSpeed}
                    onChange={(e) => setMotorSpeed(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Жарык фоторезистору</span>
                    <span className="font-mono text-amber-400 tabular-nums">{sensorLight}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={sensorLight}
                    onChange={(e) => setSensorLight(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                  <span className="text-slate-200 font-semibold">Абалы: </span>
                  <span className="font-mono text-sky-300">{robotStatus}</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Track Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
          {tracks.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTrack(t.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                selectedTrack === t.id
                  ? 'bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden shadow-lg hover:border-sky-500/50 hover:shadow-sky-500/10 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
                  <img
                    src={project.imageUrl || STEM_ROBOTICS_IMG}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-sky-300 border border-slate-700">
                    {project.track}
                  </div>
                  {project.videoUrl && (
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-md text-amber-400 border border-slate-700">
                      <Video className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div className="absolute bottom-2 right-3 text-[11px] text-slate-300 font-mono">
                    {project.date}
                  </div>
                </div>

                {/* Body */}
                <div className="px-5 space-y-2">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Components tags */}
                <div className="px-5 flex flex-wrap gap-1.5">
                  {project.componentsUsed.slice(0, 3).map((comp, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700/50"
                    >
                      {comp}
                    </span>
                  ))}
                  {project.componentsUsed.length > 3 && (
                    <span className="text-[10px] text-slate-500 self-center">
                      +{project.componentsUsed.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 pt-4 mt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <div className="text-[11px] text-slate-400">Окуучулар:</div>
                  <div className="text-slate-200 font-medium truncate max-w-[160px]">
                    {project.authorStudents.join(', ')}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStemProject(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-300 hover:bg-sky-500 hover:text-white transition-colors font-medium text-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Толук көрүү</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* STEM Lab Equipment Highlights */}
        <div className="mt-16 bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-display font-bold text-white text-base">
                Робототехника жана IoT
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Arduino Uno, Mega, ESP32 жана Raspberry Pi 5 микропроцессорлору менен автономдуу системаларды иштеп чыгуу.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-display font-bold text-white text-base">
                3D Басып Чыгаруу жана Фаблаб
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Creality жана Anycubic принтерлери менен механикалык деталдарды жана прототиптерди чийип чыгаруу.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-display font-bold text-white text-base">
                AI жана Компьютердик Көрүү
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Python, OpenCV жана нейротармактар менен объектилерди таануу жана автоматташтырылган алгоритмдерди түзүү.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
