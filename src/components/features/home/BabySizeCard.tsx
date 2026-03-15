import { View, Text, StyleSheet, I18nManager } from 'react-native';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '@/components/ui/GlassCard';
import { Palette, Typography, Spacing } from '@/constants/theme';
import type { BabySizeEntry } from '@/constants/baby-size';

interface BabySizeCardProps {
  babySize: BabySizeEntry;
  babySizeName: string;
  week: number;
}

/**
 * Shows week-appropriate baby size comparison (fruit/veggie analogy).
 * Makes the week feel tangible and fun.
 */
export function BabySizeCard({ babySize, babySizeName, week }: BabySizeCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = Palette[colorScheme];
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';
  const sectionTitle = isArabic ? `حجم طفلك — الأسبوع ${week}` : `Baby size — Week ${week}`;
  const lengthLabel = isArabic ? `الطول: ${babySize.lengthCm} سم` : `Length: ${babySize.lengthCm} cm`;
  const weightLabel =
    babySize.weightG >= 1000
      ? isArabic
        ? `الوزن: ${(babySize.weightG / 1000).toFixed(1)} كغ`
        : `Weight: ${(babySize.weightG / 1000).toFixed(1)} kg`
      : isArabic
        ? `الوزن: ${babySize.weightG} غ`
        : `Weight: ${babySize.weightG} g`;

  return (
    <GlassCard style={styles.card} rounded="2xl">
      <View style={styles.inner}>
        {/* Title */}
        <Text style={[styles.title, { color: palette.textSecondary }]}>
          {sectionTitle}
        </Text>

        {/* Emoji + name row */}
        <View style={[styles.sizeRow, I18nManager.isRTL && styles.rowReverse]}>
          <Text style={styles.emoji}>{babySize.emoji}</Text>
          <View style={styles.nameGroup}>
            <Text style={[styles.sizeName, { color: palette.text }]}>
              {babySizeName}
            </Text>
            <View style={[styles.statsRow, I18nManager.isRTL && styles.rowReverse]}>
              <Text style={[styles.stat, { color: palette.textSecondary }]}>{lengthLabel}</Text>
              {babySize.weightG > 0 && (
                <Text style={[styles.stat, { color: palette.textSecondary }]}>
                  {' · '}
                  {weightLabel}
                </Text>
              )}
            </View>
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
  title: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.semibold,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sizeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[4],
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  emoji: {
    fontSize: 56,
    lineHeight: 64,
  },
  nameGroup: {
    flex: 1,
    gap: 4,
  },
  sizeName: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.bold,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  stat: {
    fontSize: Typography.size.sm,
  },
});
