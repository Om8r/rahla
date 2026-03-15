import { View, Text, StyleSheet, I18nManager } from 'react-native';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '@/components/ui/GlassCard';
import { Palette, Typography, Spacing, Colors } from '@/constants/theme';

interface DailyTipCardProps {
  tip: string;
}

/**
 * Weekly tip card shown at the bottom of the Home screen.
 * Rose left-border accent draws the eye.
 */
export function DailyTipCard({ tip }: DailyTipCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = Palette[colorScheme];
  const { i18n } = useTranslation();

  const isRTL = I18nManager.isRTL;
  const sectionTitle = i18n.language === 'ar' ? '✨ نصيحة الأسبوع' : '✨ Tip of the Week';

  return (
    <GlassCard style={styles.card} rounded="2xl">
      <View style={[styles.inner, isRTL && styles.innerRTL]}>
        {/* Rose accent bar — left side in LTR, right side in RTL */}
        <View
          style={[
            styles.accentBar,
            isRTL ? styles.accentBarRight : styles.accentBarLeft,
            { backgroundColor: palette.primary },
          ]}
        />

        <View style={styles.textGroup}>
          <Text style={[styles.title, { color: palette.primary }]}>
            {sectionTitle}
          </Text>
          <Text style={[styles.tip, { color: palette.text }]}>{tip}</Text>
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
    flexDirection: 'row',
    padding: Spacing[5],
    gap: Spacing[4],
  },
  innerRTL: {
    flexDirection: 'row-reverse',
  },
  accentBar: {
    width: 4,
    borderRadius: 2,
    alignSelf: 'stretch',
  },
  accentBarLeft: {},
  accentBarRight: {},
  textGroup: {
    flex: 1,
    gap: Spacing[2],
  },
  title: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.semibold,
  },
  tip: {
    fontSize: Typography.size.base,
    lineHeight: Typography.size.base * Typography.lineHeight.relaxed,
  },
});
