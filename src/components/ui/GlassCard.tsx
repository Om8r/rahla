import { View, StyleSheet, type ViewProps } from 'react-native';
import { BlurView } from 'expo-blur';
import { useColorScheme } from 'react-native';
import { Palette, Radius, Shadow } from '@/constants/theme';

interface GlassCardProps extends ViewProps {
  intensity?: number;
  rounded?: keyof typeof Radius;
}

/**
 * iOS 26 Liquid Glass card.
 * Uses BlurView on iOS, semi-transparent fallback on Android.
 */
export function GlassCard({
  children,
  style,
  intensity = 60,
  rounded = 'xl',
  ...props
}: GlassCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = Palette[colorScheme];
  const borderRadius = Radius[rounded];

  if (require('react-native').Platform.OS === 'ios') {
    return (
      <BlurView
        intensity={intensity}
        tint={colorScheme === 'dark' ? 'dark' : 'light'}
        style={[styles.base, { borderRadius, borderColor: palette.border }, style]}
        {...props}
      >
        {children}
      </BlurView>
    );
  }

  return (
    <View
      style={[
        styles.base,
        { borderRadius, borderColor: palette.border, backgroundColor: palette.surface },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden',
    borderWidth: 0.5,
    ...Shadow.md,
  },
});
