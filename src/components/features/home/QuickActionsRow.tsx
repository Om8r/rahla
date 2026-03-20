import { View, Text, StyleSheet } from 'react-native';
import { Colors, Font, FontSize, Radius } from '@/constants/theme';
import { NeuPressable } from '@/components/shared/NeuPressable';

import type { TintColor } from '@/components/shared/NeuPressable';

interface QuickAction {
  key: string;
  emoji: string;
  label: string;
  iconBg: string;
  tint: TintColor;
}

const QUICK_ACTIONS: QuickAction[] = [
  { key: 'weight',    emoji: '⚖️', label: 'WEIGHT',    iconBg: Colors.pinkBgFaint,   tint: 'pink' },
  { key: 'hydration', emoji: '💧', label: 'HYDRATION', iconBg: Colors.blueFaint,     tint: 'blue' },
  { key: 'sleep',     emoji: '🌙', label: 'SLEEP',     iconBg: Colors.purpleFaint,   tint: 'purple' },
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
          <NeuPressable
            key={action.key}
            tint={action.tint}
            borderRadius={Radius.card}
            style={styles.button}
          >
            {/* Icon circle */}
            <View style={[styles.iconCircle, { backgroundColor: action.iconBg }]}>
              <Text style={{ fontSize: 20 }}>{action.emoji}</Text>
            </View>
            <Text style={styles.label}>{action.label}</Text>
          </NeuPressable>
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
    paddingVertical: 24,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
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
