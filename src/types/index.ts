export type Language = 'ky' | 'ru' | 'en';

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Иш-чара' | 'Олимпиада' | 'STEM' | 'Семинар' | 'Спорт' | 'Майрам';
  date: string;
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
  views: number;
}

export interface Teacher {
  id: string;
  fullName: string;
  role: string;
  subject: string;
  categoryGroup: 'stem' | 'humanities' | 'primary' | 'arts_sports';
  experienceYears: number;
  education: string;
  awards: string[];
  motto: string;
  imageUrl: string;
  email: string;
  classes: string[];
}

export interface StudentAchievement {
  id: string;
  studentName: string;
  grade: string;
  competition: string;
  level: 'Эл аралык' | 'Республикалык' | 'Облустук' | 'Райондук';
  place: string;
  category: 'STEM & Робототехника' | 'Математика' | 'Тилдер' | 'Илимий долбоор' | 'Спорт';
  year: string;
  projectName?: string;
  mentorName: string;
  description: string;
}

export interface STEMProject {
  id: string;
  title: string;
  track: 'Робототехника' | 'Программалоо' | 'Жасалма Интеллект (AI)' | '3D Моделдөө' | 'Инженердик' | 'Эксперименттер';
  authorStudents: string[];
  mentor: string;
  date: string;
  summary: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  componentsUsed: string[];
  status: 'Даяр' | 'Иштеп чыгууда' | 'Жеңүүчү долбоор';
}

export interface SchoolClub {
  id: string;
  title: string;
  mentor: string;
  category: 'STEM' | 'Тил' | 'Спорт' | 'Чыгармачылык' | 'Илим';
  targetGrades: string;
  schedule: string;
  room: string;
  description: string;
  imageUrl: string;
  maxStudents: number;
  enrolledCount: number;
}

export interface CabinetLab {
  id: string;
  title: string;
  floor: string;
  roomNumber: string;
  headTeacher: string;
  capacity: number;
  equipment: string[];
  description: string;
  imageUrl: string;
  features: string[];
}

export interface SchoolDocument {
  id: string;
  title: string;
  category: 'Устав' | 'Эрежелер' | 'Жадыбал' | 'Ата-энелерге' | 'Коопсуздук';
  fileSize: string;
  dateUpdated: string;
  downloadUrl: string;
  description: string;
  contentSample: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Окуу процесси' | 'STEM долбоорлор' | 'Иш-чаралар' | 'Спорт' | 'Мектеп турмушу';
  type: 'photo' | 'video';
  mediaUrl: string;
  date: string;
  description: string;
}

export interface FeedbackMessage {
  id: string;
  senderName: string;
  senderPhone: string;
  senderEmail: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}
