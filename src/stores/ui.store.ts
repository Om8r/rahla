import { create } from 'zustand';
import type { APP_CONFIG } from '@/constants/config';
import i18n, { applyRTL } from '@/lib/i18n';

type Locale = (typeof APP_CONFIG.supportedLocales)[number];
type ColorScheme = 'light' | 'dark' | 'system';

interface UIStore {
  locale: Locale;
  colorScheme: ColorScheme;
  isRTL: boolean;
  // Actions
  setLocale: (locale: Locale) => void;
  setColorScheme: (scheme: ColorScheme) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  locale: (i18n.language as Locale) ?? 'ar',
  colorScheme: 'system',
  isRTL: i18n.language === 'ar',

  setLocale: (locale) => {
    i18n.changeLanguage(locale);
    applyRTL(locale);
    set({ locale, isRTL: locale === 'ar' });
  },

  setColorScheme: (colorScheme) => set({ colorScheme }),
}));
