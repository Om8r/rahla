export const APP_CONFIG = {
  name: 'رحلة',
  version: '1.0.0',
  defaultLocale: 'ar' as const,
  supportedLocales: ['ar', 'en'] as const,
  rtlLocales: ['ar'] as const,
} as const;

export const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL ?? 'https://demo.supabase.co';
export const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? 'demo-anon-key-placeholder';

export const DEMO_MODE = !process.env.EXPO_PUBLIC_SUPABASE_URL;
