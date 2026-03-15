import { create } from 'zustand';
import type { PregnancyProfile } from '@/types/pregnancy.types';
import { getTrimester, getProgressPercent } from '@/constants/pregnancy';

interface PregnancyStore {
  profile: PregnancyProfile | null;
  currentWeek: number;
  progressPercent: number;
  trimester: ReturnType<typeof getTrimester> | null;
  // Actions
  setProfile: (profile: PregnancyProfile) => void;
  clearProfile: () => void;
}

export const usePregnancyStore = create<PregnancyStore>((set) => ({
  profile: null,
  currentWeek: 0,
  progressPercent: 0,
  trimester: null,

  setProfile: (profile) => {
    const week = profile.currentWeek;
    set({
      profile,
      currentWeek: week,
      progressPercent: getProgressPercent(week),
      trimester: getTrimester(week),
    });
  },

  clearProfile: () =>
    set({ profile: null, currentWeek: 0, progressPercent: 0, trimester: null }),
}));
