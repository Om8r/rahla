import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Font, FontSize, NeuShadow, Radius } from '@/constants/theme';

interface QuickAction {
  key: string;
  emoji: string;
  label: string;
  iconBg: string;
}

const QUICK_ACTIONS: QuickAction[] = [
  { key: 'weight',    emoji: '⚖️', label: 'WEIGHT',    iconBg: Colors.pinkBgFaint },
  { key: 'hydration', emoji: '💧', label: 'HYDRATION', iconBg: Colors.blueFaint },
  { key: 'sleep',     emoji: '🌙', label: 'SLEEP',     iconBg: Colors.purpleFaint },
];

/**
 * Quick actions row — matches Figma "Quick Actions Row"
 * 3 buttons: Weight / Hydration / Sleep
 */
export function QuickActionsRow() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>DAILY LOGGING</Text>
      <View style={styles.row}>
        {QUICK_ACTIONS.map((action) => (
          <TouchableOpacity
            key={action.key}
            style={styles.button}
            activeOpacity={0.75}
          >
            {/* Icon circle */}
            <View style={[styles.iconCircle, { backgroundColor: action.iconBg }]}>
              <Text style={{ fontSize: 20 }}>{action.emoji}</Text>
            </View>
            <Text style={styles.label}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  sectionLabel: {
    fontFamily: Font.bold,
    fontSize: FontSize.caption,
    color: Colors.textFaint,
    letterSpacing: 2.4,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    flex: 1,
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.card,
    paddingVertical: 24,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    ...NeuShadow.raised,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: Font.bold,
    fontSize: FontSize.label,
    color: Colors.textMedium,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});
