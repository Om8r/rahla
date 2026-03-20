import { Tabs } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Colors, Font, NeuShadow } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// ─── Simple icon placeholders ──────────────────────────────────
function TabIcon({ active, size = 18 }: { active: boolean; size?: number }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: active ? Colors.pink : Colors.textSlate,
        opacity: active ? 1 : 0.7,
      }}
    />
  );
}

const TABS = [
  { name: 'home', label: 'HOME' },
  { name: 'baby', label: 'BABY' },
  { name: 'track', label: 'TRACK' },
  { name: 'learn', label: 'LEARN' },
  { name: 'profile', label: 'PROFILE' },
];

function NeuTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      <View style={styles.bar}>
        {state.routes.map((route, index) => {
          const isActive = state.index === index;
          const isTrack = route.name === 'track';
          const config = TABS.find((t) => t.name === route.name);
          if (!config) return null;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!event.defaultPrevented) navigation.navigate(route.name);
          };

          if (isTrack) {
            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                activeOpacity={0.8}
                style={styles.trackWrapper}
              >
                <View style={[styles.trackBubble, isActive && styles.trackBubbleActive]}>
                  <TabIcon active={isActive} size={20} />
                </View>
                <Text style={[styles.label, isActive && styles.labelActive]}>
                  {config.label}
                </Text>
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              activeOpacity={0.8}
              style={[styles.tab, isActive && styles.tabActive]}
            >
              <TabIcon active={isActive} />
              <Text style={[styles.label, isActive && styles.labelActive]}>
                {config.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <NeuTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="baby" />
      <Tabs.Screen name="track" />
      <Tabs.Screen name="learn" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(240, 242, 245, 0.95)',
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    ...NeuShadow.raisedStrong,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
    gap: 4,
    minHeight: 73,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 9999,
    gap: 4,
  },
  tabActive: {
    backgroundColor: Colors.bg,
    ...Platform.select({
      ios: {
        shadowColor: '#1E293B',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: { elevation: 2 },
    }),
  },
  label: {
    fontFamily: Font.medium,
    fontSize: 9,
    letterSpacing: 1,
    color: Colors.textSlate,
  },
  labelActive: {
    color: Colors.pink,
  },
  // Elevated Track tab
  trackWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 4,
    paddingBottom: 2,
  },
  trackBubble: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bg,
    marginTop: -28,
    ...Platform.select({
      ios: {
        shadowColor: '#1E293B',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 10,
      },
      android: { elevation: 4 },
    }),
  },
  trackBubbleActive: {
    backgroundColor: Colors.bg,
  },
});
