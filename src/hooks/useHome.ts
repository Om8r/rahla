import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '@/stores/auth.store';
import { usePregnancyStore } from '@/stores/pregnancy.store';
import { getBabySizeForWeek } from '@/constants/baby-size';
import { getTipForWeek } from '@/constants/weekly-tips';
import { TRIMESTER_WEEKS } from '@/constants/pregnancy';

/**
 * Aggregates all data the Home screen needs.
 * Screen components stay dumb — they receive only what they render.
 */
export function useHome() {
  const { t, i18n } = useTranslation();
  const user = useAuthStore((s) => s.user);
  const { currentWeek, progressPercent, trimester, profile } = usePregnancyStore();

  const isArabic = i18n.language === 'ar';

  // --- Derived values ---
  const displayWeek = currentWeek > 0 ? currentWeek : 20; // demo fallback
  const displayProgress = currentWeek > 0 ? progressPercent : 50;
  const displayTrimester = trimester ?? 'second';

  const daysLeft = useMemo(() => {
    if (!profile?.dueDate) return 140; // demo fallback
    const diff = new Date(profile.dueDate).getTime() - Date.now();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [profile?.dueDate]);

  const greetingName = user?.displayName?.split(' ')[0] ?? '';

  const trimesterLabel = useMemo(() => {
    switch (displayTrimester) {
      case 'first':  return t('home.trimesterFirst');
      case 'second': return t('home.trimesterSecond');
      case 'third':  return t('home.trimesterThird');
    }
  }, [displayTrimester, t]);

  const babySize = useMemo(
    () => getBabySizeForWeek(displayWeek),
    [displayWeek],
  );

  const weeklyTip = useMemo(() => {
    const tip = getTipForWeek(displayWeek);
    return isArabic ? tip.ar : tip.en;
  }, [displayWeek, isArabic]);

  const babySizeName = isArabic ? babySize.nameAr : babySize.nameEn;

  const hasProfile = currentWeek > 0;

  return {
    greetingName,
    currentWeek: displayWeek,
    daysLeft,
    progressPercent: displayProgress,
    trimester: displayTrimester,
    trimesterLabel,
    babySize,
    babySizeName,
    weeklyTip,
    hasProfile,
  } as const;
}
