import { Tabs } from 'expo-router';
import { useColorScheme, Platform, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { useTranslation } from 'react-i18next';
import { Palette } from '@/constants/theme';

/**
 * Tab bar using iOS 26 Liquid Glass style:
 * - BlurView background (iOS) for frosted glass effect
 * - Floating, minimal, translucent
 */
export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = Palette[colorScheme];
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: palette.tint,
        tabBarInactiveTintColor: palette.textTertiary,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: Platform.OS === 'ios' ? 'transparent' : palette.tabBar,
          borderTopColor: palette.tabBarBorder,
          borderTopWidth: 0.5,
          elevation: 0,
        },
        tabBarBackground: () =>
          Platform.OS === 'ios' ? (
            <BlurView
              intensity={80}
              tint={colorScheme === 'dark' ? 'dark' : 'light'}
              style={{ flex: 1 }}
            />
          ) : null,
        tabBarLabelStyle: { fontSize: 10, fontWeight: '500' },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: t('tabs.home'),
          tabBarIcon: ({ color }) => <TabIcon emoji="🏠" color={color} />,
        }}
      />
      <Tabs.Screen
        name="track"
        options={{
          title: t('tabs.track'),
          tabBarIcon: ({ color }) => <TabIcon emoji="📊" color={color} />,
        }}
      />
      <Tabs.Screen
        name="baby"
        options={{
          title: t('tabs.baby'),
          tabBarIcon: ({ color }) => <TabIcon emoji="🌸" color={color} />,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: t('tabs.learn'),
          tabBarIcon: ({ color }) => <TabIcon emoji="📖" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t('tabs.profile'),
          tabBarIcon: ({ color }) => <TabIcon emoji="👤" color={color} />,
        }}
      />
    </Tabs>
  );
}

function TabIcon({ emoji, color }: { emoji: string; color: string }) {
  // Replace with SF Symbols / expo-symbols icons in screen build phase
  return <Text style={{ fontSize: 20 }}>{emoji}</Text>;
}
