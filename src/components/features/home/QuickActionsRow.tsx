import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';
import { Palette, Typography, Spacing, Radius, Shadow } from '@/constants/theme';

interface QuickAction {
  key: string;
  emoji: string;
  labelAr: string;
  labelEn: string;
  /** Route to push on press — wired up when Track screen is built */
  route?: string;
}

const QUICK_ACTIONS: QuickAction[] = [
  { key: 'mood',     emoji: '😊', labelAr: 'مزاجي',  labelEn: 'Mood'     },
  { key: 'weight',   emoji: '⚖️', labelAr: 'وزني',   labelEn: 'Weight'   },
  { key: 'symptoms', emoji: '💊', labelAr: 'أعراض',  labelEn: 'Symptoms' },
  { key: 'water',    emoji: '💧', labelAr: 'ماء',    labelEn: 'Water'    },
];

/**
 * Row of 4 quick-log action buttons.
 * Each will navigate to the relevant Track screen section.
 */
export function QuickActionsRow() {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = Palette[colorScheme];
  const { i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <View style={styles.row}>
      {QUICK_ACTIONS.map((action) => (
        <ActionButton
          key={action.key}
          emoji={action.emoji}
          label={isArabic ? action.labelAr : action.labelEn}
          colorScheme={colorScheme}
          palette={palette}
          onPress={() => {
            // Navigate to Track screen — wired in Track screen phase
          }}
        />
      ))}
    </View>
  );
}

interface ActionButtonProps {
  emoji: string;
  label: string;
  colorScheme: 'light' | 'dark';
  palette: (typeof Palette)['light'];
  onPress: () => void;
}

function ActionButton({ emoji, label, colorScheme, palette, onPress }: ActionButtonProps) {
  const content = (
    <>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={[styles.label, { color: palette.textSecondary }]}>{label}</Text>
    </>
  );

  if (Platform.OS === 'ios') {
    return (
      <Pressable style={styles.buttonWrapper} onPress={onPress}>
        {({ pressed }) => (
          <BlurView
            intensity={60}
            tint={colorScheme === 'dark' ? 'dark' : 'light'}
            style={[styles.button, pressed && styles.pressed]}
          >
            {content}
          </BlurView>
        )}
      </Pressable>
    );
  }

  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonWrapper,
        styles.button,
        { backgroundColor: palette.surface },
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: Spacing[3],
  },
  buttonWrapper: {
    flex: 1,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    ...Shadow.sm,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing[4],
    gap: Spacing[1],
    borderRadius: Radius.xl,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
  emoji: {
    fontSize: 26,
  },
  label: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.medium,
  },
});
