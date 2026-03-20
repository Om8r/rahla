import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from '@/components/shared/ScreenWrapper';
import { Colors, Font, FontSize, NeuShadow, Radius } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuthStore } from '@/stores/auth.store';
import { usePregnancyStore } from '@/stores/pregnancy.store';

const MENU_ITEMS = [
  { icon: '🔔', label: 'الإشعارات' },
  { icon: '🌙', label: 'المظهر' },
  { icon: '🌐', label: 'اللغة' },
  { icon: '🔒', label: 'الخصوصية' },
  { icon: '❓', label: 'المساعدة' },
];

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { user, signOut } = useAuthStore();
  const { currentWeek, progressPercent } = usePregnancyStore();

  const displayWeek = currentWeek > 0 ? currentWeek : 20;
  const displayProgress = currentWeek > 0 ? progressPercent : 50;
  const name = user?.displayName ?? 'سارة';
  const initials = name.charAt(0);

  return (
    <View style={styles.screen}>
      {/* TopAppBar */}
      <View style={[styles.topBar, { paddingTop: insets.top + 16 }]}>
        <View style={styles.topBarInner}>
          <View style={styles.logoRow}>
            <View style={styles.logoCircle}>
              <Text style={{ fontSize: 18 }}>🤰</Text>
            </View>
            <Text style={styles.appTitle}>رحلة</Text>
          </View>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <Text style={{ fontSize: 16 }}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScreenWrapper>
        {/* Avatar + Name */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarRing}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{initials}</Text>
            </View>
          </View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userEmail}>{user?.email ?? 'demo@rahla.app'}</Text>
        </View>

        {/* Pregnancy Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>ملخص الحمل</Text>

          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statEmoji}>🗓️</Text>
              <Text style={styles.statValue}>{displayWeek}</Text>
              <Text style={styles.statLabel}>أسبوع</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statEmoji}>⏳</Text>
              <Text style={styles.statValue}>{40 - displayWeek}</Text>
              <Text style={styles.statLabel}>متبقي</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statEmoji}>📊</Text>
              <Text style={styles.statValue}>{Math.round(displayProgress)}%</Text>
              <Text style={styles.statLabel}>اكتمل</Text>
            </View>
          </View>

          {/* Progress bar */}
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${displayProgress}%` }]} />
          </View>
          <Text style={styles.progressLabel}>{Math.round(displayProgress)}% من رحلتك اكتملت</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {MENU_ITEMS.map((item, i) => (
            <TouchableOpacity key={i} style={styles.menuItem} activeOpacity={0.8}>
              <View style={styles.menuIcon}>
                <Text style={{ fontSize: 18 }}>{item.icon}</Text>
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Sign Out */}
        <TouchableOpacity style={styles.signOutBtn} onPress={signOut} activeOpacity={0.8}>
          <Text style={styles.signOutText}>تسجيل الخروج</Text>
        </TouchableOpacity>
      </ScreenWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.bg },

  topBar: {
    backgroundColor: Colors.bg,
    paddingHorizontal: 24,
    paddingBottom: 16,
    ...NeuShadow.raised,
    zIndex: 10,
  },
  topBarInner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  logoRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logoCircle: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: Colors.bg,
    alignItems: 'center', justifyContent: 'center',
    ...NeuShadow.raised,
  },
  appTitle: { fontFamily: Font.thin, fontSize: FontSize.title, color: Colors.textNavy, letterSpacing: -0.5 },
  iconBtn: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: Colors.bg,
    alignItems: 'center', justifyContent: 'center',
    ...NeuShadow.raised,
  },

  profileHeader: { alignItems: 'center', gap: 8 },
  avatarRing: {
    width: 104, height: 104, borderRadius: 52,
    backgroundColor: Colors.bg,
    alignItems: 'center', justifyContent: 'center',
    ...NeuShadow.raisedStrong,
    marginBottom: 8,
  },
  avatar: {
    width: 88, height: 88, borderRadius: 44,
    backgroundColor: Colors.pinkBg,
    alignItems: 'center', justifyContent: 'center',
  },
  avatarText: { fontFamily: Font.bold, fontSize: FontSize.h1, color: Colors.pink },
  userName: { fontFamily: Font.thin, fontSize: FontSize.h2, color: Colors.textDark, letterSpacing: -1 },
  userEmail: { fontFamily: Font.regular, fontSize: FontSize.body, color: Colors.textMedium },

  summaryCard: {
    backgroundColor: Colors.bg,
    borderRadius: Radius.card,
    padding: 32,
    gap: 20,
    ...NeuShadow.raised,
  },
  summaryTitle: { fontFamily: Font.thin, fontSize: FontSize.title, color: Colors.textDark },
  statsGrid: { flexDirection: 'row', gap: 12 },
  statCard: {
    flex: 1,
    backgroundColor: Colors.bg,
    borderRadius: Radius.listItem,
    padding: 16,
    alignItems: 'center',
    gap: 6,
    ...NeuShadow.raised,
  },
  statEmoji: { fontSize: 22 },
  statValue: { fontFamily: Font.bold, fontSize: FontSize.subtitle, color: Colors.textDark },
  statLabel: { fontFamily: Font.regular, fontSize: FontSize.caption, color: Colors.textMedium },
  progressTrack: {
    height: 8, borderRadius: Radius.pill,
    backgroundColor: Colors.slate,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.pink,
    borderRadius: Radius.pill,
  },
  progressLabel: { fontFamily: Font.regular, fontSize: FontSize.caption, color: Colors.textMedium, textAlign: 'center' },

  menuSection: { gap: 12 },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: Colors.bg,
    borderRadius: Radius.listItem,
    padding: 20,
    ...NeuShadow.raised,
  },
  menuIcon: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: Colors.pinkBg,
    alignItems: 'center', justifyContent: 'center',
  },
  menuLabel: { flex: 1, fontFamily: Font.medium, fontSize: FontSize.bodyLg, color: Colors.textDark },
  menuArrow: { fontSize: 24, color: Colors.textSlate },

  signOutBtn: {
    backgroundColor: Colors.bg,
    borderRadius: Radius.pill,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    ...NeuShadow.raised,
  },
  signOutText: { fontFamily: Font.semibold, fontSize: FontSize.bodyLg, color: Colors.pink },
});
