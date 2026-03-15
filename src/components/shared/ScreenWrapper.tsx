import {
  ScrollView,
  View,
  StyleSheet,
  type ViewStyle,
  type ScrollViewProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from 'react-native';

interface ScreenWrapperProps extends ScrollViewProps {
  children: React.ReactNode;
  /** Use a gradient background instead of flat color */
  gradient?: boolean;
  /** Extra padding at bottom (accounts for tab bar height ~83pt) */
  bottomPadding?: number;
  style?: ViewStyle;
}

const TAB_BAR_HEIGHT = 83;

/**
 * Shared scroll container for all tab screens.
 * Handles safe area, gradient background, and bottom tab bar offset.
 */
export function ScreenWrapper({
  children,
  gradient = true,
  bottomPadding = TAB_BAR_HEIGHT,
  style,
  ...scrollProps
}: ScreenWrapperProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const isDark = colorScheme === 'dark';

  const gradientColors: [string, string, string] = isDark
    ? ['#1a0a0f', '#0d0d0f', '#0d0d0f']
    : ['#fff1f2', '#fdf2f8', '#f8f8ff'];

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {gradient && (
        <LinearGradient
          colors={gradientColors}
          locations={[0, 0.4, 1]}
          style={StyleSheet.absoluteFill}
        />
      )}
      <ScrollView
        style={[styles.scroll, style]}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: bottomPadding },
        ]}
        showsVerticalScrollIndicator={false}
        {...scrollProps}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
    gap: 16,
  },
});
