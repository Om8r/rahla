import { View, StyleSheet, type ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useEffect,
} from 'react-native-reanimated';
import { useColorScheme } from 'react-native';
import { Palette, Radius } from '@/constants/theme';

interface ProgressBarProps {
  /** 0–100 */
  progress: number;
  height?: number;
  style?: ViewStyle;
  trackColor?: string;
  fillColor?: string;
}

/**
 * Animated linear progress bar.
 * Springs to the target progress value on mount and update.
 */
export function ProgressBar({
  progress,
  height = 6,
  style,
  trackColor,
  fillColor,
}: ProgressBarProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = Palette[colorScheme];

  const width = useSharedValue(0);

  useEffect(() => {
    width.value = withSpring(Math.min(100, Math.max(0, progress)), {
      damping: 20,
      stiffness: 90,
    });
  }, [progress]);

  const animatedFill = useAnimatedStyle(() => ({
    width: `${width.value}%`,
  }));

  return (
    <View
      style={[
        styles.track,
        {
          height,
          borderRadius: height / 2,
          backgroundColor: trackColor ?? palette.primaryLight,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.fill,
          {
            height,
            borderRadius: height / 2,
            backgroundColor: fillColor ?? palette.primary,
          },
          animatedFill,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
