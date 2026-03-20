import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Colors, Font, FontSize, NeuShadow, Radius } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const UPCOMING = [
  {
    id: '1',
    title: 'Glucose Tolerance Test',
    sub: 'Oct 24 • City Hospital',
    active: true,
  },
  {
    id: '2',
    title: '3rd Trimester Check-up',
    sub: 'Nov 12 • Dr. Aris Clinic',
    active: false,
  },
  {
    id: '3',
    title: 'Growth Ultrasound',
    sub: 'Dec 05 • Radiology Center',
    active: false,
  },
];

const REMINDERS = [
  { id: '1', emoji: '🔬', label: 'NIPT\nSCREENING', sub: 'Pending Results', color: Colors.pinkBg, subColor: Colors.pinkLight },
  { id: '2', emoji: '🧪', label: 'LAB\nWORK', sub: 'Due Saturday', color: Colors.oliveFaint, subColor: Colors.olive },
  { id: '3', emoji: '💊', label: 'VITAMINS', sub: 'Daily • 8:00 PM', color: Colors.slate, subColor: Colors.textMedium },
];

/**
 * Medical Appointments screen — matches Figma "Medical Appointments (Branded)"
 * Separate screen, not a tab. Accessed via navigation from Home.
 */
export default function MedicalScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      {/* TopAppBar */}
      <View style={[styles.topBar, { paddingTop: insets.top > 0 ? 0 : 16 }]}>
        <View style={styles.topBarInner}>
          <View style={styles.logoRow}>
            <TouchableOpacity
              style={styles.logoCircle}
              onPress={() => router.back()}
              activeOpacity={0.7}
            >
              <Text style={{ fontSize: 16 }}>🤰</Text>
            </TouchableOpacity>
            <Text style={styles.appTitle}>Medical Journey</Text>
          </View>
          {/* User avatar */}
          <View style={styles.avatarCircle}>
            <Text style={{ fontSize: 18 }}>👩</Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Next Appointment ── */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>NEXT APPOINTMENT</Text>

          <View style={styles.nextCard}>
            {/* Calendar icon circle */}
            <View style={styles.calIcon}>
              <Text style={{ fontSize: 24 }}>📅</Text>
            </View>
            {/* Appointment info */}
            <View style={styles.nextInfo}>
              <Text style={styles.nextTitle}>Anatomy Scan</Text>
              <View style={styles.nextMeta}>
                <Text style={{ fontSize: 10, color: Colors.textMedium }}>🕐</Text>
                <Text style={styles.nextMetaText}>Tomorrow at 10:00 AM</Text>
              </View>
            </View>
            {/* Faded bg icon */}
            <Text style={styles.nextBgIcon}>📋</Text>
          </View>
        </View>

        {/* ── Add FAB ── */}
        <View style={styles.fabRow}>
          <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
            <Text style={styles.fabText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* ── Upcoming Appointments ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionLabel}>UPCOMING</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.appointmentList}>
            {UPCOMING.map((appt) => (
              <TouchableOpacity
                key={appt.id}
                style={[styles.apptItem, appt.active && styles.apptItemActive]}
                activeOpacity={0.8}
              >
                {/* Left accent bar */}
                <View style={[styles.accentBar, appt.active ? styles.accentBarActive : styles.accentBarInactive]} />
                {/* Info */}
                <View style={styles.apptInfo}>
                  <Text style={[styles.apptTitle, appt.active && styles.apptTitleActive]}>
                    {appt.title}
                  </Text>
                  <Text style={styles.apptSub}>{appt.sub}</Text>
                </View>
                {/* Right icon */}
                {appt.active ? (
                  <View style={styles.checkCircle}>
                    <Text style={{ fontSize: 12, color: Colors.pink }}>✓</Text>
                  </View>
                ) : (
                  <Text style={{ fontSize: 12, color: 'rgba(86,97,104,0.4)' }}>›</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* ── Medical Reminders Bento ── */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>MEDICAL REMINDERS</Text>

          <View style={styles.reminderGrid}>
            {/* Top two side-by-side */}
            <View style={styles.reminderRow}>
              {REMINDERS.slice(0, 2).map((r) => (
                <View key={r.id} style={styles.reminderCard}>
                  <View style={[styles.reminderIcon, { backgroundColor: r.color }]}>
                    <Text style={{ fontSize: 20 }}>{r.emoji}</Text>
                  </View>
                  <Text style={styles.reminderLabel}>{r.label}</Text>
                  <Text style={[styles.reminderSub, { color: r.subColor }]}>{r.sub}</Text>
                </View>
              ))}
            </View>
            {/* Full-width bottom card */}
            {REMINDERS[2] && (
              <View style={[styles.reminderCard, styles.reminderCardWide]}>
                <View style={[styles.reminderIcon, { backgroundColor: REMINDERS[2].color }]}>
                  <Text style={{ fontSize: 20 }}>{REMINDERS[2].emoji}</Text>
                </View>
                <Text style={styles.reminderLabel}>{REMINDERS[2].label}</Text>
                <Text style={[styles.reminderSub, { color: REMINDERS[2].subColor }]}>
                  {REMINDERS[2].sub}
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.bgCard,
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
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    ...NeuShadow.raised,
  },
  appTitle: {
    fontFamily: Font.thin,
    fontSize: FontSize.h3,
    color: Colors.textDeep,
    letterSpacing: -0.6,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.bgCard,
    ...NeuShadow.raised,
  },
  scroll: {
    flex: 1,
    backgroundColor: Colors.bgCard,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 140,
    gap: 40,
  },

  section: {
    gap: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  sectionLabel: {
    fontFamily: Font.semibold,
    fontSize: FontSize.bodyLg,
    color: Colors.textMedium,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
  },
  viewAll: {
    fontFamily: Font.medium,
    fontSize: FontSize.body,
    color: Colors.textMedium,
  },

  // Next appointment card
  nextCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.card,
    padding: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    overflow: 'hidden',
    ...NeuShadow.raised,
  },
  calIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.slate,
    alignItems: 'center',
    justifyContent: 'center',
    ...NeuShadow.raised,
  },
  nextInfo: {
    flex: 1,
    gap: 4,
  },
  nextTitle: {
    fontFamily: Font.medium,
    fontSize: FontSize.title,
    color: Colors.textDark,
  },
  nextMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  nextMetaText: {
    fontFamily: Font.regular,
    fontSize: FontSize.bodyLg,
    color: Colors.textMedium,
  },
  nextBgIcon: {
    position: 'absolute',
    right: -16,
    fontSize: 128,
    opacity: 0.05,
    color: Colors.textDark,
  },

  // FAB
  fabRow: {
    alignItems: 'center',
  },
  fab: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.bgWhite,
    alignItems: 'center',
    justifyContent: 'center',
    ...NeuShadow.raised,
  },
  fabText: {
    fontFamily: Font.thin,
    fontSize: 36,
    color: Colors.textMedium,
    lineHeight: 40,
  },

  // Appointment list
  appointmentList: {
    gap: 24,
    paddingRight: 8,
  },
  apptItem: {
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.listItem,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    ...NeuShadow.raised,
  },
  apptItemActive: {
    backgroundColor: 'rgba(218, 228, 239, 0.3)',
    shadowColor: '#56656',
    borderWidth: 1,
    borderColor: 'rgba(86, 95, 105, 0.05)',
  },
  accentBar: {
    width: 8,
    height: 48,
    borderRadius: 4,
  },
  accentBarActive: {
    backgroundColor: Colors.pinkLight,
  },
  accentBarInactive: {
    backgroundColor: 'rgba(86, 97, 104, 0.2)',
  },
  apptInfo: {
    flex: 1,
    gap: 2,
  },
  apptTitle: {
    fontFamily: Font.medium,
    fontSize: FontSize.bodyLg,
    color: Colors.textDark,
  },
  apptTitleActive: {
    fontFamily: Font.semibold,
    color: '#49535C',
  },
  apptSub: {
    fontFamily: Font.regular,
    fontSize: FontSize.body,
    color: Colors.textMedium,
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.pinkBg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Reminders bento
  reminderGrid: {
    gap: 16,
  },
  reminderRow: {
    flexDirection: 'row',
    gap: 16,
  },
  reminderCard: {
    flex: 1,
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.card,
    padding: 20,
    alignItems: 'center',
    gap: 0,
    ...NeuShadow.raised,
  },
  reminderCardWide: {
    flex: 0,
    width: '100%',
  },
  reminderIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  reminderLabel: {
    fontFamily: Font.bold,
    fontSize: FontSize.caption,
    color: Colors.textMedium,
    textAlign: 'center',
    letterSpacing: -0.6,
    textTransform: 'uppercase',
  },
  reminderSub: {
    fontFamily: Font.regular,
    fontSize: FontSize.label,
    textAlign: 'center',
    marginTop: 4,
  },
});
