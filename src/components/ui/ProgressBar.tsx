import { View, StyleSheet, type ViewStyle } from 'react-native';
import { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { Colors } from '@/constants/theme';

interface ProgressBarProps {
  /** 0–100 */
  progress: number;
  height?: number;
  style?: ViewStyle;
  trackColor?: string;
  fillColor?: string;
  fillColorEnd?: string;
}

/**
 * Neumorphic progress bar — inset track with olive gradient fill.
 */
export function ProgressBar({
  progress,
  height = 16,
  style,
  trackColor,
  fillColor = Colors.olive,
}: ProgressBarProps) {
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
          backgroundColor: trackColor ?? Colors.bg,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.fill,
          {
            height: height - 8,
            top: 4,
            borderRadius: (height - 8) / 2,
            backgroundColor: fillColor,
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
    left: 4,
  },
});
