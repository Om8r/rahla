import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import { I18nManager } from 'react-native';
import { APP_CONFIG } from '@/constants/config';

import ar from '../../locales/ar.json';
import en from '../../locales/en.json';

const resources = {
  ar: { translation: ar },
  en: { translation: en },
};

const deviceLocale = Localization.getLocales()[0]?.languageCode ?? APP_CONFIG.defaultLocale;
const initialLocale = APP_CONFIG.supportedLocales.includes(deviceLocale as 'ar' | 'en')
  ? deviceLocale
  : APP_CONFIG.defaultLocale;

i18n.use(initReactI18next).init({
  resources,
  lng: initialLocale,
  fallbackLng: 'ar',
  interpolation: { escapeValue: false },
  compatibilityJSON: 'v4',
});

/**
 * Call this whenever language changes to apply RTL layout globally.
 */
export function applyRTL(locale: string) {
  const isRTL = APP_CONFIG.rtlLocales.includes(locale as 'ar');
  if (I18nManager.isRTL !== isRTL) {
    I18nManager.forceRTL(isRTL);
    // A reload is required for RTL to take effect on first launch
  }
}

applyRTL(initialLocale);

export default i18n;
