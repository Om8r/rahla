import { View, Text, StyleSheet, I18nManager } from 'react-native';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { Palette, Typography, Spacing, Colors } from '@/constants/theme';
import { PREGNANCY_WEEKS } from '@/constants/pregnancy';
import type { Trimester } from '@/constants/pregnancy';

interface WeeklyProgressCardProps {
  week: number;
  progressPercent: number;
  daysLeft: number;
  trimester: Trimester;
  trimesterLabel: string;
}

/**
 * Hero card showing the current pregnancy week, progress, and trimester.
 * The visual anchor of the Home screen.
 */
export function WeeklyProgressCard({
  week,
  progressPercent,
  daysLeft,
  trimester,
  trimesterLabel,
}: WeeklyProgressCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = Palette[colorScheme];
  const { t } = useTranslation();

  const trimesterVariant =
    trimester === 'first' ? 'primary' : trimester === 'second' ? 'accent' : 'primary';

  return (
    <GlassCard style={styles.card} rounded="2xl">
      <View style={styles.inner}>
        {/* Top row: week label + trimester badge */}
        <View style={[styles.row, I18nManager.isRTL && styles.rowReverse]}>
          <Text style={[styles.weekLabel, { color: palette.textSecondary }]}>
            {t('home.weekLabel')}
          </Text>
          <Badge label={trimesterLabel} variant={trimesterVariant} />
        </View>

        {/* Week number hero */}
        <View style={[styles.weekRow, I18nManager.isRTL && styles.rowReverse]}>
          <Text style={[styles.weekNumber, { color: palette.primary }]}>
            {week}
          </Text>
          <Text style={[styles.weekTotal, { color: palette.textTertiary }]}>
            {' '}/ {PREGNANCY_WEEKS}
          </Text>
        </View>

        {/* Progress bar */}
        <View style={styles.progressSection}>
          <ProgressBar progress={progressPercent} height={8} />
          <View style={[styles.progressLabels, I18nManager.isRTL && styles.rowReverse]}>
            <Text style={[styles.progressPct, { color: palette.primary }]}>
              {Math.round(progressPercent)}%
            </Text>
            <Text style={[styles.daysLeft, { color: palette.textSecondary }]}>
              {daysLeft} {t('home.daysLeft')}
            </Text>
          </View>
        </View>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  inner: {
    padding: Spacing[5],
    gap: Spacing[3],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  weekLabel: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.medium,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  weekRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  weekNumber: {
    fontSize: 72,
    fontWeight: Typography.weight.heavy,
    lineHeight: 80,
    letterSpacing: -3,
  },
  weekTotal: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.medium,
    paddingBottom: 12,
  },
  progressSection: {
    gap: Spacing[2],
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressPct: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.semibold,
  },
  daysLeft: {
    fontSize: Typography.size.sm,
  },
});
