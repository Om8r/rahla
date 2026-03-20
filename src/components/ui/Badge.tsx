import { View, Text, StyleSheet, type ViewStyle } from 'react-native';
import { Colors, Font, FontSize, Radius } from '@/constants/theme';

type BadgeVariant = 'primary' | 'accent' | 'neutral';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  style?: ViewStyle;
}

/**
 * Reusable pill-shaped label badge — neumorphic style.
 */
export function Badge({ label, variant = 'primary', style }: BadgeProps) {
  const variantStyles: Record<BadgeVariant, { bg: string; text: string }> = {
    primary: { bg: Colors.pinkBg, text: Colors.pink },
    accent:  { bg: Colors.oliveFaint, text: Colors.olive },
    neutral: { bg: Colors.bgInput, text: Colors.textMedium },
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
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: Radius.pill,
  },
  label: {
    fontFamily: Font.semibold,
    fontSize: FontSize.caption,
    letterSpacing: 0.3,
  },
});
