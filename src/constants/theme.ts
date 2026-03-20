/**
 * Design System — Neumorphic (Soft UI)
 * Matches Figma "V1 (Branded)" screens exactly.
 */

// ─── Base Palette ───────────────────────────────────────────────
export const Colors = {
  // Backgrounds
  bg: '#F0F2F5',
  bgCard: '#F7F9FC',
  bgInput: '#F0F4F8',
  bgWhite: '#FFFFFF',

  // Text
  textDark: '#29343A',
  textMedium: '#566168',
  textMuted: 'rgba(86, 97, 104, 0.6)',
  textFaint: 'rgba(41, 52, 58, 0.4)',
  textPlaceholder: '#A8B3BB',
  textSlate: '#94A3B8',
  textNavy: '#1E293B',
  textDeep: '#0F172A',
  textOlive: '#4E5638',
  textWarm: '#695C5C',

  // Accents
  pink: '#EC4899',
  pinkDark: '#DB2777',
  pinkLight: '#F472B6',
  pinkBg: '#FCE7F3',
  pinkBgFaint: 'rgba(240, 223, 222, 0.3)',

  olive: '#5A6343',
  oliveFaint: '#EFF8CF',
  oliveBg: 'rgba(239, 248, 207, 0.4)',

  blue: '#3B82F6',
  blueDark: '#2563EB',
  blueFaint: 'rgba(219, 234, 254, 0.3)',
  blueBg: '#EFF6FF',
  blueProgress: 'rgba(96, 165, 250, 0.2)',

  purple: '#A855F7',
  purpleFaint: 'rgba(243, 232, 255, 0.3)',

  green: '#10B981',
  greenDark: '#059669',
  greenBg: '#ECFDF5',
  greenFaint: 'rgba(52, 211, 153, 0.2)',

  // Nav / Dividers
  slate: '#DAE4EF',
  divider: '#E1E9F0',
} as const;

// ─── Neumorphic Shadow helpers ──────────────────────────────────
export const NeuShadow = {
  raised: {
    shadowColor: '#1E293B',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 4,
  },
  raisedStrong: {
    shadowColor: '#1E293B',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 6,
  },
} as const;

// ─── Radius ────────────────────────────────────────────────────
export const Radius = {
  card: 48,
  listItem: 32,
  pill: 9999,
  avatar: 9999,
  image: 32,
  sm: 16,
} as const;

// ─── Spacing ───────────────────────────────────────────────────
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
} as const;

// ─── Typography ────────────────────────────────────────────────
export const Font = {
  thin: 'PlusJakartaSans_300Light',
  regular: 'PlusJakartaSans_400Regular',
  medium: 'PlusJakartaSans_500Medium',
  semibold: 'PlusJakartaSans_600SemiBold',
  bold: 'PlusJakartaSans_700Bold',
} as const;

export const FontSize = {
  label: 10,
  caption: 12,
  body: 14,
  bodyLg: 16,
  subtitle: 18,
  title: 20,
  h3: 24,
  h2: 30,
  h1: 36,
  display: 56,
} as const;

// ─── Legacy re-exports (keep existing imports working) ──────────
export const Palette = {
  light: {
    background: Colors.bg,
    surface: Colors.bgCard,
    text: Colors.textDark,
    textSecondary: Colors.textMedium,
    tint: Colors.pink,
    tabBar: 'rgba(240, 242, 245, 0.8)',
    tabBarBorder: 'transparent',
    textTertiary: Colors.textSlate,
    primaryLight: Colors.pinkBg,
    border: Colors.divider,
  },
  dark: {
    background: '#1a1a1a',
    surface: '#2a2a2a',
    text: '#f0f0f0',
    textSecondary: '#a0a0a0',
    tint: Colors.pink,
    tabBar: 'rgba(30, 30, 30, 0.8)',
    tabBarBorder: 'transparent',
    textTertiary: '#606060',
    primaryLight: '#3a1a2a',
    border: '#333',
  },
} as const;

export const Shadow = NeuShadow as any;
export const Typography = { size: FontSize, weight: { regular: '400', medium: '500', semibold: '600', bold: '700' } } as any;
