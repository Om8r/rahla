/**
 * NeuPressable — Neumorphic press effect
 *
 * • Raised → flat (elevation 0) on press
 * • Background transitions to a secondary tint
 * • Works on iOS and Android
 */
import { type ReactNode } from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Pressable } from 'react-native';
import { Colors, NeuShadow, Radius } from '@/constants/theme';

export type TintColor =
  | 'pink'
  | 'olive'
  | 'blue'
  | 'green'
  | 'purple'
  | 'none';

const TINT_MAP: Record<TintColor, string> = {
  pink:   Colors.pinkBg,
  olive:  Colors.oliveFaint,
  blue:   Colors.blueBg,
  green:  Colors.greenBg,
  purple: '#F3E8FF',
  none:   Colors.bg,
};

interface NeuPressableProps {
  children: ReactNode;
  onPress?: () => void;
  tint?: TintColor;
  style?: ViewStyle | ViewStyle[];
  borderRadius?: number;
  disabled?: boolean;
}

const TIMING = { duration: 140, easing: Easing.out(Easing.quad) };

export function NeuPressable({
  children,
  onPress,
  tint = 'pink',
  style,
  borderRadius = Radius.card,
  disabled = false,
}: NeuPressableProps) {
  const pressed = useSharedValue(0);

  const tintColor = TINT_MAP[tint];

  const animatedStyle = useAnimatedStyle(() => {
    const p = pressed.value;
    return {
      backgroundColor: p
        ? tintColor
        : Colors.bg,
      // Shadow fades out on press (neumorphic flat = pressed in)
      shadowOpacity: withTiming(p ? 0.02 : NeuShadow.raised.shadowOpacity, TIMING),
      shadowRadius: withTiming(p ? 4 : NeuShadow.raised.shadowRadius, TIMING),
      elevation: withTiming(p ? 0 : NeuShadow.raised.elevation, TIMING),
      transform: [{ scale: withTiming(p ? 0.985 : 1, TIMING) }],
    };
  });

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onPressIn={() => { pressed.value = withTiming(1, TIMING); }}
      onPressOut={() => { pressed.value = withTiming(0, TIMING); }}
    >
      <Animated.View
        style={[
          styles.base,
          { borderRadius },
          StyleSheet.flatten(style as ViewStyle),
          animatedStyle,
        ]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: Colors.bg,
    shadowColor: NeuShadow.raised.shadowColor,
    shadowOffset: NeuShadow.raised.shadowOffset,
    shadowOpacity: NeuShadow.raised.shadowOpacity,
    shadowRadius: NeuShadow.raised.shadowRadius,
    elevation: NeuShadow.raised.elevation,
  },
});
