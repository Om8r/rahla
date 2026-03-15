import { View, Text, StyleSheet, type ViewStyle } from 'react-native';
import { useColorScheme } from 'react-native';
import { Palette, Typography, Radius, Spacing } from '@/constants/theme';

type BadgeVariant = 'primary' | 'accent' | 'neutral';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  style?: ViewStyle;
}

/**
 * Reusable pill-shaped label badge.
 * Used for trimester labels, status tags, etc.
 */
export function Badge({ label, variant = 'primary', style }: BadgeProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = Palette[colorScheme];

  const variantStyles: Record<BadgeVariant, { bg: string; text: string }> = {
    primary: { bg: palette.primaryLight, text: palette.primary },
    accent:  { bg: palette.accentLight,  text: palette.accent },
    neutral: { bg: palette.backgroundSecondary, text: palette.textSecondary },
  };

  const { bg, text } = variantStyles[variant];

  return (
    <View style={[styles.badge, { backgroundColor: bg }, style]}>
      <Text style={[styles.label, { color: text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing[3],
    paddingVertical: 4,
    borderRadius: Radius.full,
  },
  label: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 0.3,
  },
});
