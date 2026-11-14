import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  NewsArticle,
  Teacher,
  StudentAchievement,
  STEMProject,
  SchoolClub,
  CabinetLab,
  SchoolDocument,
  GalleryItem,
  FeedbackMessage,
} from '../types';
import {
  initialNews,
  initialTeachers,
  initialAchievements,
  initialSTEMProjects,
  initialClubs,
  initialCabinets,
  initialDocuments,
  initialGallery,
  initialFeedback,
} from '../data/initialData';

interface SchoolContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;

  news: NewsArticle[];
  teachers: Teacher[];
  achievements: StudentAchievement[];
  stemProjects: STEMProject[];
  clubs: SchoolClub[];
  cabinets: CabinetLab[];
  documents: SchoolDocument[];
  gallery: GalleryItem[];
  feedbacks: FeedbackMessage[];

  // Modals
  selectedNews: NewsArticle | null;
  setSelectedNews: (news: NewsArticle | null) => void;
  selectedTeacher: Teacher | null;
  setSelectedTeacher: (teacher: Teacher | null) => void;
  selectedStemProject: STEMProject | null;
  setSelectedStemProject: (project: STEMProject | null) => void;
  selectedDoc: SchoolDocument | null;
  setSelectedDoc: (doc: SchoolDocument | null) => void;
  selectedGalleryItem: GalleryItem | null;
  setSelectedGalleryItem: (item: GalleryItem | null) => void;
  enrollingClub: SchoolClub | null;
  setEnrollingClub: (club: SchoolClub | null) => void;

  // Admin
  isAdminLoggedIn: boolean;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;
  adminLogin: (user: string, pass: string) => boolean;
  adminLogout: () => void;

  // CRUD Actions
  saveNewsArticle: (article: NewsArticle) => void;
  deleteNewsArticle: (id: string) => void;
  saveTeacher: (teacher: Teacher) => void;
  deleteTeacher: (id: string) => void;
  saveSTEMProject: (project: STEMProject) => void;
  deleteSTEMProject: (id: string) => void;
  saveClub: (club: SchoolClub) => void;
  deleteClub: (id: string) => void;
  saveCabinet: (cabinet: CabinetLab) => void;
  deleteCabinet: (id: string) => void;
  saveAchievement: (ach: StudentAchievement) => void;
  deleteAchievement: (id: string) => void;
  saveDocument: (doc: SchoolDocument) => void;
  deleteDocument: (id: string) => void;
  saveGalleryItem: (item: GalleryItem) => void;
  deleteGalleryItem: (id: string) => void;

  // Feedback
  submitFeedback: (data: Omit<FeedbackMessage, 'id' | 'timestamp' | 'isRead'>) => boolean;
  markFeedbackRead: (id: string) => void;
  deleteFeedback: (id: string) => void;

  // Club Enrollment
  enrollInClub: (clubId: string, studentName: string, grade: string, phone: string) => boolean;

  // System
  resetAllData: () => void;
  exportDataJSON: () => string;
  importDataJSON: (jsonStr: string) => boolean;

  // Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

const LOCAL_STORAGE_PREFIX = 'karasartov_school_';

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ky');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Load or fallback helper
  const loadStored = <T,>(key: string, fallback: T): T => {
    try {
      const item = localStorage.getItem(LOCAL_STORAGE_PREFIX + key);
      return item ? JSON.parse(item) : fallback;
    } catch {
      return fallback;
    }
  };

  const [news, setNews] = useState<NewsArticle[]>(() => loadStored('news', initialNews));
  const [teachers, setTeachers] = useState<Teacher[]>(() => {
    const stored = loadStored('teachers', initialTeachers);
    const updatedDirector = initialTeachers.find((t) => t.id === 't-1');
    return stored.map((t) =>
      t.id === 't-1' && t.fullName === 'Канат Омуралиев' && updatedDirector ? updatedDirector : t
    );
  });
  const [achievements, setAchievements] = useState<StudentAchievement[]>(() => {
    const stored = loadStored('achievements', initialAchievements);
    return stored.map((a) =>
      a.id === 'ach-2' && a.mentorName === 'Канат Омуралиев' ? { ...a, mentorName: 'Абылова Н.К.' } : a
    );
  });
  const [stemProjects, setStemProjects] = useState<STEMProject[]>(() => loadStored('stemProjects', initialSTEMProjects));
  const [clubs, setClubs] = useState<SchoolClub[]>(() => loadStored('clubs', initialClubs));
  const [cabinets, setCabinets] = useState<CabinetLab[]>(() => {
    const stored = loadStored('cabinets', initialCabinets);
    return stored.map((c) =>
      c.id === 'cab-2' && c.headTeacher === 'Канат Омуралиев' ? { ...c, headTeacher: 'Абылова Н.К.' } : c
    );
  });
  const [documents, setDocuments] = useState<SchoolDocument[]>(() => loadStored('documents', initialDocuments));
  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const stored = loadStored('gallery', initialGallery);
    const updatedGal = initialGallery.find((g) => g.id === 'gal-5');
    return stored.map((g) =>
      g.id === 'gal-5' && g.mediaUrl.includes('school_director_portrait_1794286907635') && updatedGal
        ? updatedGal
        : g
    );
  });
  const [feedbacks, setFeedbacks] = useState<FeedbackMessage[]>(() => loadStored('feedbacks', initialFeedback));

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PREFIX + 'news', JSON.stringify(news));
  }, [news]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PREFIX + 'teachers', JSON.stringify(teachers));
  }, [teachers]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PREFIX + 'achievements', JSON.stringify(achievements));
  }, [achievements]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PREFIX + 'stemProjects', JSON.stringify(stemProjects));
  }, [stemProjects]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PREFIX + 'clubs', JSON.stringify(clubs));
  }, [clubs]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PREFIX + 'cabinets', JSON.stringify(cabinets));
  }, [cabinets]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PREFIX + 'documents', JSON.stringify(documents));
  }, [documents]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PREFIX + 'gallery', JSON.stringify(gallery));
  }, [gallery]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PREFIX + 'feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  // Modals state
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [selectedStemProject, setSelectedStemProject] = useState<STEMProject | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<SchoolDocument | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [enrollingClub, setEnrollingClub] = useState<SchoolClub | null>(null);

  // Admin Auth
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(LOCAL_STORAGE_PREFIX + 'admin_session') === 'true';
  });
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const adminLogin = (user: string, pass: string): boolean => {
    // Default credentials: admin / admin2026 or karasartov / mektep
    if ((user === 'admin' && pass === 'admin2026') || (user === 'karasartov' && pass === 'mektep')) {
      setIsAdminLoggedIn(true);
      localStorage.setItem(LOCAL_STORAGE_PREFIX + 'admin_session', 'true');
      showToast('Администратор катары ийгиликтүү кирдиңиз!');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem(LOCAL_STORAGE_PREFIX + 'admin_session');
    showToast('Администратор панелинен чыктыңыз.');
  };

  // CRUD methods
  const saveNewsArticle = (article: NewsArticle) => {
    setNews((prev) => {
      const idx = prev.findIndex((n) => n.id === article.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = article;
        return copy;
      }
      return [article, ...prev];
    });
    showToast('Жаңылык ийгиликтүү сакталды!');
  };

  const deleteNewsArticle = (id: string) => {
    setNews((prev) => prev.filter((n) => n.id !== id));
    showToast('Жаңылык өчүрүлдү.');
  };

  const saveTeacher = (teacher: Teacher) => {
    setTeachers((prev) => {
      const idx = prev.findIndex((t) => t.id === teacher.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = teacher;
        return copy;
      }
      return [teacher, ...prev];
    });
    showToast('Мугалимдин маалыматы сакталды!');
  };

  const deleteTeacher = (id: string) => {
    setTeachers((prev) => prev.filter((t) => t.id !== id));
    showToast('Мугалим өчүрүлдү.');
  };

  const saveSTEMProject = (project: STEMProject) => {
    setStemProjects((prev) => {
      const idx = prev.findIndex((p) => p.id === project.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = project;
        return copy;
      }
      return [project, ...prev];
    });
    showToast('STEM долбоору сакталды!');
  };

  const deleteSTEMProject = (id: string) => {
    setStemProjects((prev) => prev.filter((p) => p.id !== id));
    showToast('STEM долбоору өчүрүлдү.');
  };

  const saveClub = (club: SchoolClub) => {
    setClubs((prev) => {
      const idx = prev.findIndex((c) => c.id === club.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = club;
        return copy;
      }
      return [...prev, club];
    });
    showToast('Ийрим маалыматы сакталды!');
  };

  const deleteClub = (id: string) => {
    setClubs((prev) => prev.filter((c) => c.id !== id));
    showToast('Ийрим өчүрүлдү.');
  };

  const saveCabinet = (cabinet: CabinetLab) => {
    setCabinets((prev) => {
      const idx = prev.findIndex((c) => c.id === cabinet.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = cabinet;
        return copy;
      }
      return [...prev, cabinet];
    });
    showToast('Кабинет маалыматы сакталды!');
  };

  const deleteCabinet = (id: string) => {
    setCabinets((prev) => prev.filter((c) => c.id !== id));
    showToast('Кабинет өчүрүлдү.');
  };

  const saveAchievement = (ach: StudentAchievement) => {
    setAchievements((prev) => {
      const idx = prev.findIndex((a) => a.id === ach.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = ach;
        return copy;
      }
      return [ach, ...prev];
    });
    showToast('Окуучунун жетишкендиги сакталды!');
  };

  const deleteAchievement = (id: string) => {
    setAchievements((prev) => prev.filter((a) => a.id !== id));
    showToast('Жетишкендик өчүрүлдү.');
  };

  const saveDocument = (doc: SchoolDocument) => {
    setDocuments((prev) => {
      const idx = prev.findIndex((d) => d.id === doc.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = doc;
        return copy;
      }
      return [doc, ...prev];
    });
    showToast('Документ сакталды!');
  };

  const deleteDocument = (id: string) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
    showToast('Документ өчүрүлдү.');
  };

  const saveGalleryItem = (item: GalleryItem) => {
    setGallery((prev) => {
      const idx = prev.findIndex((g) => g.id === item.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = item;
        return copy;
      }
      return [item, ...prev];
    });
    showToast('Галерея файлы сакталды!');
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));
    showToast('Медиа өчүрүлдү.');
  };

  const submitFeedback = (data: Omit<FeedbackMessage, 'id' | 'timestamp' | 'isRead'>): boolean => {
    const newMsg: FeedbackMessage = {
      ...data,
      id: 'fb-' + Date.now(),
      timestamp: new Date().toLocaleString('ru-RU', { dateStyle: 'short', timeStyle: 'short' }),
      isRead: false,
    };
    setFeedbacks((prev) => [newMsg, ...prev]);
    showToast('Билдирүүңүз кабыл алынды! Жетекчилик жакын арада байланышат.');
    return true;
  };

  const markFeedbackRead = (id: string) => {
    setFeedbacks((prev) => prev.map((f) => (f.id === id ? { ...f, isRead: true } : f)));
  };

  const deleteFeedback = (id: string) => {
    setFeedbacks((prev) => prev.filter((f) => f.id !== id));
  };

  const enrollInClub = (clubId: string, studentName: string, grade: string, phone: string): boolean => {
    setClubs((prev) =>
      prev.map((c) => {
        if (c.id === clubId) {
          return { ...c, enrolledCount: Math.min(c.maxStudents, c.enrolledCount + 1) };
        }
        return c;
      })
    );
    // Also log in feedbacks for admin to see
    submitFeedback({
      senderName: studentName,
      senderPhone: phone,
      senderEmail: 'student-' + grade + '@school.local',
      subject: `[Ийримге жазылуу] Класс: ${grade}`,
      message: `Окуучу ${studentName} (${grade}-класс) «${clubs.find((c) => c.id === clubId)?.title || 'Ийрим'}» ийримине жазылуу үчүн кайрылды. Байланыш телефону: ${phone}`,
    });
    showToast(`Окуучу ${studentName} ийримге ийгиликтүү катталды!`);
    return true;
  };

  const resetAllData = () => {
    setNews(initialNews);
    setTeachers(initialTeachers);
    setAchievements(initialAchievements);
    setStemProjects(initialSTEMProjects);
    setClubs(initialClubs);
    setCabinets(initialCabinets);
    setDocuments(initialDocuments);
    setGallery(initialGallery);
    setFeedbacks(initialFeedback);
    showToast('Бардык маалыматтар баштапкы абалга кайтарылды.');
  };

  const exportDataJSON = (): string => {
    const data = {
      news,
      teachers,
      achievements,
      stemProjects,
      clubs,
      cabinets,
      documents,
      gallery,
      feedbacks,
    };
    return JSON.stringify(data, null, 2);
  };

  const importDataJSON = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.news) setNews(data.news);
      if (data.teachers) setTeachers(data.teachers);
      if (data.achievements) setAchievements(data.achievements);
      if (data.stemProjects) setStemProjects(data.stemProjects);
      if (data.clubs) setClubs(data.clubs);
      if (data.cabinets) setCabinets(data.cabinets);
      if (data.documents) setDocuments(data.documents);
      if (data.gallery) setGallery(data.gallery);
      showToast('Маалыматтар резервдик көчүрмөдөн калыбына келтирилди!');
      return true;
    } catch {
      showToast('Ката: Файлдын форматы туура эмес!');
      return false;
    }
  };

  return (
    <SchoolContext.Provider
      value={{
        language,
        setLanguage,
        activeSection,
        setActiveSection,
        news,
        teachers,
        achievements,
        stemProjects,
        clubs,
        cabinets,
        documents,
        gallery,
        feedbacks,
        selectedNews,
        setSelectedNews,
        selectedTeacher,
        setSelectedTeacher,
        selectedStemProject,
        setSelectedStemProject,
        selectedDoc,
        setSelectedDoc,
        selectedGalleryItem,
        setSelectedGalleryItem,
        enrollingClub,
        setEnrollingClub,
        isAdminLoggedIn,
        isAdminModalOpen,
        setIsAdminModalOpen,
        adminLogin,
        adminLogout,
        saveNewsArticle,
        deleteNewsArticle,
        saveTeacher,
        deleteTeacher,
        saveSTEMProject,
        deleteSTEMProject,
        saveClub,
        deleteClub,
        saveCabinet,
        deleteCabinet,
        saveAchievement,
        deleteAchievement,
        saveDocument,
        deleteDocument,
        saveGalleryItem,
        deleteGalleryItem,
        submitFeedback,
        markFeedbackRead,
        deleteFeedback,
        enrollInClub,
        resetAllData,
        exportDataJSON,
        importDataJSON,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};
