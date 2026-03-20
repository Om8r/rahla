import { View, Text, StyleSheet } from 'react-native';
import { Colors, Font, FontSize, NeuShadow, Radius } from '@/constants/theme';

interface DailyTipCardProps {
  tip: string;
}

/**
 * Daily tip card — matches Figma "Daily Tip Card"
 * Row layout: olive icon circle on left + title + tip text on right
 */
export function DailyTipCard({ tip }: DailyTipCardProps) {
  return (
    <View style={styles.card}>
      {/* Icon circle */}
      <View style={styles.iconCircle}>
        <Text style={{ fontSize: 22 }}>🌿</Text>
      </View>

      {/* Text content */}
      <View style={styles.content}>
        <Text style={styles.title}>Tip of the Day</Text>
        <Text style={styles.tipText}>{tip}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.card,
    padding: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    ...NeuShadow.raised,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.oliveBg,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    shadowColor: '#1E293B',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontFamily: Font.bold,
    fontSize: FontSize.body,
    lineHeight: 20,
    color: Colors.textDark,
    letterSpacing: 0.35,
  },
  tipText: {
    fontFamily: Font.regular,
    fontSize: FontSize.bodyLg,
    lineHeight: 26,
    color: Colors.textMedium,
  },
});
