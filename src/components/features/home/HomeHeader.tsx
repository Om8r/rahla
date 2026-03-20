import { View, Text, StyleSheet } from 'react-native';
import { Colors, Font, FontSize } from '@/constants/theme';

interface HomeHeaderProps {
  name: string;
}

/**
 * Home greeting — matches Figma "Section - Home Header Greeting"
 * "Good morning, Sarah" + trimester subtitle
 */
export function HomeHeader({ name }: HomeHeaderProps) {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {greeting},{'\n'}{name}
      </Text>
      <Text style={styles.subtitle}>
        You are in the heart of your second trimester.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  heading: {
    fontFamily: Font.thin,
    fontSize: FontSize.h1,
    lineHeight: 40,
    color: Colors.textMedium,
    letterSpacing: -0.9,
  },
  subtitle: {
    fontFamily: Font.medium,
    fontSize: FontSize.bodyLg,
    lineHeight: 24,
    color: Colors.textMuted,
    letterSpacing: 0.4,
  },
});
