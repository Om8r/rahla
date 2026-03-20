import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScreenWrapper } from '@/components/shared/ScreenWrapper';
import { HomeHeader } from '@/components/features/home/HomeHeader';
import { WeeklyProgressCard } from '@/components/features/home/WeeklyProgressCard';
import { BabySizeCard } from '@/components/features/home/BabySizeCard';
import { QuickActionsRow } from '@/components/features/home/QuickActionsRow';
import { DailyTipCard } from '@/components/features/home/DailyTipCard';
import { useHome } from '@/hooks/useHome';
import { Colors, Font, FontSize, NeuShadow } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * Home screen — matches Figma "Home - V1 (Branded)"
 */
export default function HomeScreen() {
  const {
    greetingName,
    currentWeek,
    daysLeft,
    progressPercent,
    trimester,
    trimesterLabel,
    babySize,
    babySizeName,
    weeklyTip,
  } = useHome();

  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      {/* TopAppBar */}
      <View style={[styles.topBar, { paddingTop: insets.top + 16 }]}>
        <View style={styles.topBarInner}>
          {/* Logo + App name */}
          <View style={styles.logoRow}>
            <View style={styles.logoCircle}>
              <Text style={{ fontSize: 18 }}>🤰</Text>
            </View>
          </View>
          {/* Bell icon */}
          <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
            <Text style={{ fontSize: 16 }}>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable content */}
      <ScreenWrapper noPadding={false}>
        <HomeHeader name={greetingName || 'Sarah'} />

        <WeeklyProgressCard
          week={currentWeek}
          progressPercent={progressPercent}
          daysLeft={daysLeft}
          trimester={trimester}
          trimesterLabel={trimesterLabel}
        />

        <BabySizeCard
          babySize={babySize}
          babySizeName={babySizeName}
          week={currentWeek}
        />

        <QuickActionsRow />

        <DailyTipCard tip={weeklyTip} />
      </ScreenWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  topBar: {
    backgroundColor: Colors.bg,
    paddingHorizontal: 24,
    paddingBottom: 16,
    ...NeuShadow.raised,
    zIndex: 10,
  },
  topBarInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.bgWhite,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1E293B',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 3,
  },
  bellBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1E293B',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 2,
  },
});
