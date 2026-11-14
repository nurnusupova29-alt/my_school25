import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import {
  Shield,
  X,
  Plus,
  Trash2,
  Edit,
  Newspaper,
  GraduationCap,
  Cpu,
  Trophy,
  Layers,
  FileText,
  Image,
  Inbox,
  LogOut,
  RotateCcw,
  Download,
  Upload,
  CheckCircle,
  Eye,
} from 'lucide-react';
import {
  NewsArticle,
  Teacher,
  STEMProject,
  StudentAchievement,
  SchoolClub,
  CabinetLab,
  SchoolDocument,
  GalleryItem,
} from '../../types';

export const AdminDashboard: React.FC = () => {
  const {
    isAdminModalOpen,
    setIsAdminModalOpen,
    isAdminLoggedIn,
    adminLogin,
    adminLogout,
    news,
    saveNewsArticle,
    deleteNewsArticle,
    teachers,
    saveTeacher,
    deleteTeacher,
    stemProjects,
    saveSTEMProject,
    deleteSTEMProject,
    achievements,
    saveAchievement,
    deleteAchievement,
    clubs,
    saveClub,
    deleteClub,
    cabinets,
    saveCabinet,
    deleteCabinet,
    documents,
    saveDocument,
    deleteDocument,
    gallery,
    saveGalleryItem,
    deleteGalleryItem,
    feedbacks,
    markFeedbackRead,
    deleteFeedback,
    resetAllData,
    exportDataJSON,
    importDataJSON,
    showToast,
  } = useSchool();

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin2026');
  const [loginError, setLoginError] = useState('');

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<
    'news' | 'teachers' | 'stem' | 'achievements' | 'clubs' | 'cabinets' | 'documents' | 'gallery' | 'feedbacks' | 'system'
  >('feedbacks');

  // Form states for creating / editing items
  const [editingNews, setEditingNews] = useState<Partial<NewsArticle> | null>(null);
  const [editingTeacher, setEditingTeacher] = useState<Partial<Teacher> | null>(null);
  const [editingStem, setEditingStem] = useState<Partial<STEMProject> | null>(null);
  const [editingAch, setEditingAch] = useState<Partial<StudentAchievement> | null>(null);
  const [editingClub, setEditingClub] = useState<Partial<SchoolClub> | null>(null);
  const [editingCabinet, setEditingCabinet] = useState<Partial<CabinetLab> | null>(null);

  if (!isAdminModalOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = adminLogin(username, password);
    if (!success) {
      setLoginError('Логин же сырсөз туура эмес! (Үлгү: admin / admin2026)');
    } else {
      setLoginError('');
    }
  };

  const handleExportBackup = () => {
    const json = exportDataJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `karasartov_school_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showToast('Резервдик көчүрмө компьютериңизге сакталды!');
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        importDataJSON(content);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in select-none">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-6xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col text-slate-100">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white">
                Мектептин Администратордук Башкаруу Панели
              </h3>
              <p className="text-[11px] text-slate-400">
                Карасартов атындагы инновациялык мектептин борбордук башкаруу системасы
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAdminLoggedIn && (
              <button
                onClick={adminLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-rose-300 font-medium transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Чыгуу</span>
              </button>
            )}
            <button
              onClick={() => setIsAdminModalOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Not Logged In View */}
        {!isAdminLoggedIn ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center max-w-md mx-auto w-full my-auto space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
              <Shield className="w-7 h-7" />
            </div>

            <div className="text-center space-y-1">
              <h4 className="font-display font-bold text-xl text-white">
                Администратордук кирүү
              </h4>
              <p className="text-xs text-slate-400">
                Мектептин сайтындагы маалыматтарды түзөтүү үчүн кирүү дайындарын жазыңыз
              </p>
            </div>

            {loginError && (
              <div className="w-full p-3 rounded-lg bg-rose-950/50 border border-rose-500/40 text-rose-300 text-xs text-center">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="w-full space-y-4">
              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-medium">Логин</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-medium">Сырсөз</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="text-[11px] text-amber-300/80 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                Сыноо үчүн логин: <strong>admin</strong> | Сырсөз: <strong>admin2026</strong>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors shadow-md"
              >
                Системага кирүү
              </button>
            </form>
          </div>
        ) : (
          /* Logged In Dashboard View */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar Tabs */}
            <div className="w-full md:w-56 bg-slate-950 border-r border-slate-800 p-3 space-y-1 overflow-x-auto md:overflow-y-auto shrink-0 flex md:flex-col gap-1 md:gap-0">
              <button
                onClick={() => setActiveTab('feedbacks')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                  activeTab === 'feedbacks'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Inbox className="w-4 h-4" />
                  <span>Кайрылуулар</span>
                </span>
                {feedbacks.filter((f) => !f.isRead).length > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold">
                    {feedbacks.filter((f) => !f.isRead).length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('news')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors ${
                  activeTab === 'news'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <Newspaper className="w-4 h-4" />
                <span>Жаңылыктар ({news.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('teachers')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors ${
                  activeTab === 'teachers'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Мугалимдер ({teachers.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('stem')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors ${
                  activeTab === 'stem'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>STEM Долбоорлор ({stemProjects.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('achievements')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors ${
                  activeTab === 'achievements'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span>Жетишкендиктер ({achievements.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('clubs')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors ${
                  activeTab === 'clubs'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Ийримдер ({clubs.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('cabinets')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors ${
                  activeTab === 'cabinets'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Кабинеттер ({cabinets.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('documents')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors ${
                  activeTab === 'documents'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Документтер ({documents.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('gallery')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors ${
                  activeTab === 'gallery'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <Image className="w-4 h-4" />
                <span>Галерея ({gallery.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('system')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-colors ${
                  activeTab === 'system'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <RotateCcw className="w-4 h-4" />
                <span>Резерв & База</span>
              </button>
            </div>

            {/* Main Content Pane */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              {/* TAB: Feedbacks / Inbox */}
              {activeTab === 'feedbacks' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-lg text-white">
                      Келип түшкөн кайрылуулар жана арыздар
                    </h4>
                    <span className="text-xs text-slate-400">
                      Жалпы: {feedbacks.length} билдирүү
                    </span>
                  </div>

                  <div className="space-y-3">
                    {feedbacks.map((msg) => (
                      <div
                        key={msg.id}
                        className={`p-4 rounded-xl border transition-colors ${
                          !msg.isRead
                            ? 'bg-slate-800/90 border-sky-500/60 shadow-md'
                            : 'bg-slate-900/60 border-slate-800'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs">
                              <span className="font-bold text-white">{msg.senderName}</span>
                              <span aria-hidden="true" className="text-slate-600">·</span>
                              <span className="font-mono text-sky-400">{msg.senderPhone}</span>
                              <span aria-hidden="true" className="text-slate-600">·</span>
                              <span className="text-slate-400">{msg.timestamp}</span>
                            </div>
                            <h5 className="font-semibold text-sm text-slate-200">
                              {msg.subject}
                            </h5>
                            <p className="text-xs text-slate-300 leading-relaxed pt-1">
                              {msg.message}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {!msg.isRead && (
                              <button
                                onClick={() => markFeedbackRead(msg.id)}
                                className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 text-[11px] font-medium hover:bg-sky-500 hover:text-white transition-colors"
                              >
                                Окулду деп белгилөө
                              </button>
                            )}
                            <button
                              onClick={() => deleteFeedback(msg.id)}
                              className="p-1.5 rounded text-rose-400 hover:bg-rose-950/40 transition-colors"
                              title="Өчүрүү"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                    {feedbacks.length === 0 && (
                      <div className="text-center py-10 text-slate-500 text-xs">
                        Азырынча эч кандай кайрылуу келип түшө элек.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB: News Management */}
              {activeTab === 'news' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-lg text-white">
                      Жаңылыктарды Башкаруу
                    </h4>
                    <button
                      onClick={() =>
                        setEditingNews({
                          id: 'news-' + Date.now(),
                          title: '',
                          category: 'STEM',
                          date: new Date().toISOString().slice(0, 10),
                          summary: '',
                          content: '',
                          imageUrl: '/src/assets/images/hero_school_campus_1794286906878.jpg',
                          author: 'Мектептин маалымат кызматы',
                          views: 0,
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Жаңылык кошуу</span>
                    </button>
                  </div>

                  {editingNews && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-sky-500/50 space-y-3">
                      <h5 className="font-bold text-sm text-sky-300">
                        {editingNews.id?.includes('news-') ? 'Жаңылыкты сактоо' : 'Жаңылык түзөтүү'}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Жаңылыктын аталышы"
                          value={editingNews.title || ''}
                          onChange={(e) => setEditingNews({ ...editingNews, title: e.target.value })}
                          className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                        />
                        <select
                          value={editingNews.category || 'STEM'}
                          onChange={(e) => setEditingNews({ ...editingNews, category: e.target.value as any })}
                          className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                        >
                          <option value="STEM">STEM</option>
                          <option value="Олимпиада">Олимпиада</option>
                          <option value="Семинар">Семинар</option>
                          <option value="Майрам">Майрам</option>
                          <option value="Спорт">Спорт</option>
                          <option value="Иш-чара">Иш-чара</option>
                        </select>
                      </div>
                      <textarea
                        rows={2}
                        placeholder="Кыскача аннотация"
                        value={editingNews.summary || ''}
                        onChange={(e) => setEditingNews({ ...editingNews, summary: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                      />
                      <textarea
                        rows={3}
                        placeholder="Толук мазмуну"
                        value={editingNews.content || ''}
                        onChange={(e) => setEditingNews({ ...editingNews, content: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEditingNews(null)}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300"
                        >
                          Жокко чыгаруу
                        </button>
                        <button
                          onClick={() => {
                            if (editingNews.title && editingNews.content) {
                              saveNewsArticle(editingNews as NewsArticle);
                              setEditingNews(null);
                            }
                          }}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 text-xs font-semibold text-white"
                        >
                          Сактоо
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="divide-y divide-slate-800">
                    {news.map((n) => (
                      <div key={n.id} className="py-3 flex items-center justify-between gap-4">
                        <div className="space-y-0.5 min-w-0">
                          <span className="text-[10px] text-sky-400 font-semibold">{n.category} · {n.date}</span>
                          <h5 className="font-medium text-xs text-white truncate">{n.title}</h5>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => setEditingNews(n)}
                            className="p-1 rounded text-slate-300 hover:text-white"
                            title="Өзгөртүү"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteNewsArticle(n.id)}
                            className="p-1 rounded text-rose-400 hover:text-rose-300"
                            title="Өчүрүү"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: Teachers Management */}
              {activeTab === 'teachers' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-lg text-white">
                      Мугалимдерди Башкаруу ({teachers.length})
                    </h4>
                    <button
                      onClick={() =>
                        setEditingTeacher({
                          id: 't-' + Date.now(),
                          fullName: '',
                          role: 'Мугалим',
                          subject: '',
                          categoryGroup: 'stem',
                          experienceYears: 5,
                          education: '',
                          awards: ['Ардак Грамота'],
                          motto: '',
                          imageUrl: '/src/assets/images/classroom_innovation_1794286907847.jpg',
                          email: 'teacher@school.edu.kg',
                          classes: ['8-А', '9-Б'],
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Мугалим кошуу</span>
                    </button>
                  </div>

                  {editingTeacher && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-sky-500/50 space-y-3 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Мугалимдин аты-жөнү"
                          value={editingTeacher.fullName || ''}
                          onChange={(e) => setEditingTeacher({ ...editingTeacher, fullName: e.target.value })}
                          className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                        />
                        <input
                          type="text"
                          placeholder="Предмети"
                          value={editingTeacher.subject || ''}
                          onChange={(e) => setEditingTeacher({ ...editingTeacher, subject: e.target.value })}
                          className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEditingTeacher(null)}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300"
                        >
                          Жокко чыгаруу
                        </button>
                        <button
                          onClick={() => {
                            if (editingTeacher.fullName && editingTeacher.subject) {
                              saveTeacher(editingTeacher as Teacher);
                              setEditingTeacher(null);
                            }
                          }}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 font-semibold text-white"
                        >
                          Сактоо
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {teachers.map((t) => (
                      <div
                        key={t.id}
                        className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between"
                      >
                        <div className="space-y-0.5 min-w-0">
                          <h5 className="font-semibold text-xs text-white truncate">{t.fullName}</h5>
                          <div className="text-[11px] text-slate-400">{t.subject} · {t.role}</div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => setEditingTeacher(t)}
                            className="p-1 rounded text-slate-300 hover:text-white"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteTeacher(t.id)}
                            className="p-1 rounded text-rose-400 hover:text-rose-300"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: STEM Projects */}
              {activeTab === 'stem' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-lg text-white">
                      STEM Долбоорлорун Башкаруу
                    </h4>
                    <button
                      onClick={() =>
                        setEditingStem({
                          id: 'stem-p' + Date.now(),
                          title: '',
                          track: 'Робототехника',
                          authorStudents: ['Окуучу'],
                          mentor: 'Усубалиев Т.Б.',
                          date: new Date().toISOString().slice(0, 10),
                          summary: '',
                          description: '',
                          imageUrl: '/src/assets/images/stem_robotics_lab_1794286906025.jpg',
                          componentsUsed: ['Arduino', 'Sensors'],
                          status: 'Даяр',
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Долбоор кошуу</span>
                    </button>
                  </div>

                  {editingStem && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-sky-500/50 space-y-3 text-xs">
                      <input
                        type="text"
                        placeholder="Долбоордун аталышы"
                        value={editingStem.title || ''}
                        onChange={(e) => setEditingStem({ ...editingStem, title: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                      />
                      <textarea
                        rows={2}
                        placeholder="Кыскача түшүндүрмөсү"
                        value={editingStem.summary || ''}
                        onChange={(e) => setEditingStem({ ...editingStem, summary: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEditingStem(null)}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300"
                        >
                          Жокко чыгаруу
                        </button>
                        <button
                          onClick={() => {
                            if (editingStem.title) {
                              saveSTEMProject(editingStem as STEMProject);
                              setEditingStem(null);
                            }
                          }}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 font-semibold text-white"
                        >
                          Сактоо
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    {stemProjects.map((p) => (
                      <div
                        key={p.id}
                        className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between"
                      >
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-sky-400 font-semibold">{p.track} · {p.status}</span>
                          <h5 className="font-semibold text-xs text-white">{p.title}</h5>
                        </div>
                        <button
                          onClick={() => deleteSTEMProject(p.id)}
                          className="p-1 rounded text-rose-400 hover:text-rose-300"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: System & Backup */}
              {activeTab === 'system' && (
                <div className="space-y-6">
                  <h4 className="font-display font-bold text-lg text-white">
                    Маалыматтар Базасы жана Резервдик Көчүрмө (JSON)
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                      <h5 className="font-bold text-sm text-sky-300 flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span>Резервдик көчүрмө алуу (Export)</span>
                      </h5>
                      <p className="text-xs text-slate-400">
                        Сайттагы бардык жаңылыктарды, мугалимдерди, STEM долбоорлорду жана кайрылууларды бир JSON файлы катары сактап алыңыз.
                      </p>
                      <button
                        onClick={handleExportBackup}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>JSON көчүрмөсүн жүктөө</span>
                      </button>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                      <h5 className="font-bold text-sm text-emerald-300 flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        <span>Көчүрмөдөн калыбына келтирүү (Import)</span>
                      </h5>
                      <p className="text-xs text-slate-400">
                        Мурда сакталган резервдик JSON файлын кайра жүктөө.
                      </p>
                      <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold cursor-pointer">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Файлды тандоо</span>
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleImportBackup}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-900/50 space-y-3">
                    <h5 className="font-bold text-sm text-rose-300 flex items-center gap-2">
                      <RotateCcw className="w-4 h-4" />
                      <span>Баштапкы таза абалга кайтаруу (Reset)</span>
                    </h5>
                    <p className="text-xs text-slate-400">
                      Эгер маалыматтарды баштапкы үлгүлөргө кайтарууну кааласаңыз, ушул баскычты басыңыз.
                    </p>
                    <button
                      onClick={() => {
                        if (confirm('Чын эле баштапкы үлгү маалыматтарына кайтаргыңыз келеби?')) {
                          resetAllData();
                        }
                      }}
                      className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold"
                    >
                      Бардыгын баштапкы абалга кайтаруу
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
