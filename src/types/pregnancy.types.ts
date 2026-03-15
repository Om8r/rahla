export interface PregnancyProfile {
  id: string;
  userId: string;
  dueDate: string;         // ISO date string
  lastPeriodDate: string;
  currentWeek: number;
  babyName?: string;
  babyGender?: 'male' | 'female' | 'unknown';
  createdAt: string;
}

export interface WeeklyLog {
  id: string;
  userId: string;
  week: number;
  mood: MoodType;
  weight?: number;
  notes?: string;
  symptoms: SymptomType[];
  date: string;
}

export interface DiaryEntry {
  id: string;
  userId: string;
  title: string;
  content: string;
  mood?: MoodType;
  imageUrls?: string[];
  date: string;
  createdAt: string;
}

export interface Appointment {
  id: string;
  userId: string;
  title: string;
  date: string;
  location?: string;
  notes?: string;
  reminderEnabled: boolean;
}

export type MoodType = 'happy' | 'neutral' | 'tired' | 'anxious' | 'sad' | 'excited';

export type SymptomType =
  | 'nausea'
  | 'fatigue'
  | 'backPain'
  | 'headache'
  | 'heartburn'
  | 'swelling'
  | 'insomnia'
  | 'cramping'
  | 'spotting';
