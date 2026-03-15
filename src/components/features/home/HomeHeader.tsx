import { View, Text, StyleSheet, I18nManager } from 'react-native';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Palette, Typography, Spacing } from '@/constants/theme';

interface HomeHeaderProps {
  name: string;
}

/**
 * Top section of the Home screen.
 * Shows a personalized greeting and today's date.
 * RTL-aware layout.
 */
export function HomeHeader({ name }: HomeHeaderProps) {
  const { t, i18n } = useTranslation();
  const colorScheme = useColorScheme() ?? 'light';
  const palette = Palette[colorScheme];

  const today = new Date().toLocaleDateString(
    i18n.language === 'ar' ? 'ar-SA' : 'en-US',
    { weekday: 'long', month: 'long', day: 'numeric' },
  );

  const greeting = name
    ? `${t('home.greeting')}، ${name} 👋`
    : `${t('appName')} 🌸`;

  return (
    <View style={[styles.container, I18nManager.isRTL && styles.rtl]}>
      <View style={styles.textGroup}>
        <Text style={[styles.greeting, { color: palette.text }]} numberOfLines={1}>
          {greeting}
        </Text>
        <Text style={[styles.date, { color: palette.textSecondary }]}>
          {today}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Spacing[2],
  },
  rtl: {
    flexDirection: 'row-reverse',
  },
  textGroup: {
    flex: 1,
  },
  greeting: {
    fontSize: Typography.size['2xl'],
    fontWeight: Typography.weight.bold,
    letterSpacing: -0.5,
  },
  date: {
    fontSize: Typography.size.sm,
    marginTop: 3,
  },
});
