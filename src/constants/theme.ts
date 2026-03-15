/**
 * Design System — iOS 26 Liquid Glass aesthetic
 * Pregnancy app "رحلة" warm rose + soft lavender palette
 */

export const Colors = {
  // Primary brand
  rose: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
  },
  lavender: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
  },
  blush: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
  },
  neutral: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },
} as const;

export const Palette = {
  light: {
    background: Colors.neutral[50],
    backgroundSecondary: Colors.neutral[100],
    surface: 'rgba(255, 255, 255, 0.72)',      // glass card
    surfaceSecondary: 'rgba(255, 255, 255, 0.45)',
    border: 'rgba(255, 255, 255, 0.6)',
    borderSubtle: Colors.neutral[200],
    text: Colors.neutral[900],
    textSecondary: Colors.neutral[500],
    textTertiary: Colors.neutral[400],
    primary: Colors.rose[500],
    primaryLight: Colors.rose[100],
    accent: Colors.lavender[400],
    accentLight: Colors.lavender[100],
    tabBar: 'rgba(255, 255, 255, 0.85)',
    tabBarBorder: 'rgba(0,0,0,0.06)',
    tint: Colors.rose[500],
  },
  dark: {
    background: '#0d0d0f',
    backgroundSecondary: '#18181b',
    surface: 'rgba(28, 28, 32, 0.75)',
    surfaceSecondary: 'rgba(28, 28, 32, 0.5)',
    border: 'rgba(255, 255, 255, 0.1)',
    borderSubtle: Colors.neutral[800],
    text: '#f8f8fa',
    textSecondary: Colors.neutral[400],
    textTertiary: Colors.neutral[600],
    primary: Colors.rose[400],
    primaryLight: 'rgba(244, 63, 94, 0.15)',
    accent: Colors.lavender[300],
    accentLight: 'rgba(167, 139, 250, 0.15)',
    tabBar: 'rgba(13, 13, 15, 0.85)',
    tabBarBorder: 'rgba(255,255,255,0.06)',
    tint: Colors.rose[400],
  },
} as const;

export const Typography = {
  // System font stack (SF Pro on iOS, Roboto on Android)
  fontFamily: {
    regular: undefined,   // system default
    medium: undefined,
    semibold: undefined,
    bold: undefined,
  },
  size: {
    xs: 11,
    sm: 13,
    base: 15,
    md: 17,
    lg: 20,
    xl: 24,
    '2xl': 28,
    '3xl': 34,
    '4xl': 40,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },
  weight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    heavy: '800' as const,
  },
} as const;

export const Spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  full: 9999,
} as const;

export const Shadow = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 10,
  },
} as const;
