import {
  ScrollView,
  StyleSheet,
  type ViewStyle,
  type ScrollViewProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';

interface ScreenWrapperProps extends ScrollViewProps {
  children: React.ReactNode;
  bottomPadding?: number;
  style?: ViewStyle;
  noPadding?: boolean;
}

const TAB_BAR_HEIGHT = 100;

/**
 * Shared scroll container — flat #F0F2F5 neumorphic background.
 */
export function ScreenWrapper({
  children,
  bottomPadding = TAB_BAR_HEIGHT,
  style,
  noPadding = false,
  ...scrollProps
}: ScreenWrapperProps) {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          noPadding ? styles.contentNoPad : styles.content,
          { paddingBottom: bottomPadding },
          style,
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
    backgroundColor: Colors.bg,
  },
  scroll: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32,
    gap: 40,
  },
  contentNoPad: {
    flexGrow: 1,
  },
});
