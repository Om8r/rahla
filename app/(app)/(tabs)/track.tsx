import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { ScreenWrapper } from '@/components/shared/ScreenWrapper';
import { Colors, Font, FontSize, NeuShadow, Radius } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SYMPTOMS = [
  { key: 'nausea', label: 'Nausea', active: true },
  { key: 'fatigue', label: 'Fatigue', active: false },
  { key: 'heartburn', label: 'Heartburn', active: false },
  { key: 'backpain', label: 'Back Pain', active: true },
  { key: 'cravings', label: 'Cravings', active: false },
  { key: 'dizziness', label: 'Dizziness', active: false },
  { key: 'others', label: '+ Others', active: false },
];

/**
 * Track screen — matches Figma "Track - V1 (Branded)"
 * Weight input, Hydration tracker, Sleep quality, Symptoms checklist
 */
export default function TrackScreen() {
  const insets = useSafeAreaInsets();
  const [weight, setWeight] = useState('');
  const [hydration] = useState(6);
  const [activeSymptoms, setActiveSymptoms] = useState<Set<string>>(
    new Set(['nausea', 'backpain'])
  );

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).toUpperCase();

  const toggleSymptom = (key: string) => {
    setActiveSymptoms((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <View style={styles.screen}>
      {/* TopAppBar */}
      <View style={[styles.topBar, { paddingTop: insets.top + 16 }]}>
        <View style={styles.topBarInner}>
          <View style={styles.logoRow}>
            <View style={styles.logoCircle}>
              <Text style={{ fontSize: 18 }}>🤰</Text>
            </View>
            <Text style={styles.appTitle}>Pregnancy Tracker</Text>
          </View>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <Text style={{ fontSize: 16 }}>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScreenWrapper>
        {/* Header */}
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Track Your Progress</Text>
          <Text style={styles.pageDate}>{today}</Text>
        </View>

        {/* ── Vital Stats Grid ── */}

        {/* Weight Input */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIcon, { backgroundColor: Colors.pinkBg }]}>
              <Text style={{ fontSize: 18 }}>⚖️</Text>
            </View>
            <Text style={styles.cardTitle}>Daily Weight</Text>
          </View>
          <View style={styles.weightInputWrap}>
            <TextInput
              style={styles.weightInput}
              value={weight}
              onChangeText={setWeight}
              placeholder="00.0"
              placeholderTextColor={Colors.textPlaceholder}
              keyboardType="decimal-pad"
            />
            <Text style={styles.weightUnit}>kg</Text>
          </View>
        </View>

        {/* Hydration Tracker */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIcon, { backgroundColor: Colors.blueBg }]}>
              <Text style={{ fontSize: 18 }}>💧</Text>
            </View>
            <Text style={styles.cardTitle}>Hydration</Text>
          </View>
          <View style={styles.hydrationRow}>
            <View style={styles.hydrationTrack}>
              {/* Fill overlay */}
              <View style={[styles.hydrationFill, { width: `${(hydration / 8) * 100}%` }]} />
              <Text style={styles.hydrationText}>{hydration} / 8 Glasses</Text>
            </View>
            <TouchableOpacity style={styles.plusBtn} activeOpacity={0.8}>
              <Text style={styles.plusBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sleep Quality */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIcon, { backgroundColor: Colors.greenBg }]}>
              <Text style={{ fontSize: 18 }}>🌙</Text>
            </View>
            <Text style={styles.cardTitle}>Sleep Quality</Text>
          </View>
          <View style={styles.sleepRow}>
            <View style={styles.sleepDisplay}>
              <Text style={styles.sleepTime}>7h 45m</Text>
            </View>
            <TouchableOpacity style={styles.editBtn} activeOpacity={0.8}>
              <Text style={{ fontSize: 16 }}>✏️</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Symptoms Checklist ── */}
        <View style={styles.symptomsSection}>
          <Text style={styles.symptomsTitle}>How are you feeling?</Text>
          <View style={styles.symptomsGrid}>
            {SYMPTOMS.map((s) => {
              const isActive = activeSymptoms.has(s.key);
              return (
                <TouchableOpacity
                  key={s.key}
                  style={[styles.symptomChip, isActive && styles.symptomChipActive]}
                  onPress={() => toggleSymptom(s.key)}
                  activeOpacity={0.8}
                >
                  {isActive && <Text style={{ fontSize: 10 }}>✕</Text>}
                  <Text style={[styles.symptomLabel, isActive && styles.symptomLabelActive]}>
                    {s.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* ── Log Activity Button ── */}
        <TouchableOpacity style={styles.logBtn} activeOpacity={0.8}>
          <Text style={styles.logBtnText}>LOG ACTIVITY</Text>
        </TouchableOpacity>
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
    backgroundColor: Colors.slate,
    alignItems: 'center',
    justifyContent: 'center',
    ...NeuShadow.raised,
  },
  appTitle: {
    fontFamily: Font.thin,
    fontSize: FontSize.title,
    color: Colors.textNavy,
    letterSpacing: -0.5,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    ...NeuShadow.raised,
  },

  // Page header
  pageHeader: {
    alignItems: 'center',
    gap: 8,
  },
  pageTitle: {
    fontFamily: Font.thin,
    fontSize: FontSize.h2,
    lineHeight: 36,
    color: Colors.textDark,
    textAlign: 'center',
  },
  pageDate: {
    fontFamily: Font.medium,
    fontSize: FontSize.body,
    color: Colors.textMedium,
    opacity: 0.6,
    letterSpacing: 0.35,
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  // Cards
  card: {
    backgroundColor: Colors.bg,
    borderRadius: Radius.card,
    padding: 32,
    gap: 24,
    ...NeuShadow.raised,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontFamily: Font.semibold,
    fontSize: FontSize.bodyLg,
    color: Colors.textMedium,
  },

  // Weight
  weightInputWrap: {
    backgroundColor: Colors.bg,
    borderRadius: Radius.pill,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    shadowColor: Colors.pink,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
  },
  weightInput: {
    flex: 1,
    fontFamily: Font.bold,
    fontSize: FontSize.h3,
    color: Colors.textPlaceholder,
    textAlign: 'center',
  },
  weightUnit: {
    fontFamily: Font.medium,
    fontSize: FontSize.bodyLg,
    color: Colors.textSlate,
  },

  // Hydration
  hydrationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  hydrationTrack: {
    flex: 1,
    height: 48,
    borderRadius: Radius.pill,
    backgroundColor: Colors.bg,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.blue,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
  },
  hydrationFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Colors.blueProgress,
    borderRadius: Radius.pill,
  },
  hydrationText: {
    fontFamily: Font.bold,
    fontSize: FontSize.bodyLg,
    color: Colors.blueDark,
    zIndex: 1,
  },
  plusBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    ...NeuShadow.raised,
  },
  plusBtnText: {
    fontFamily: Font.bold,
    fontSize: FontSize.subtitle,
    color: Colors.blue,
  },

  // Sleep
  sleepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sleepDisplay: {
    flex: 1,
    height: 64,
    borderRadius: Radius.sm,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.green,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
  },
  sleepTime: {
    fontFamily: Font.bold,
    fontSize: FontSize.title,
    color: Colors.greenDark,
  },
  editBtn: {
    width: 37,
    height: 64,
    borderRadius: Radius.sm,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    ...NeuShadow.raised,
  },

  // Symptoms
  symptomsSection: {
    gap: 24,
  },
  symptomsTitle: {
    fontFamily: Font.thin,
    fontSize: FontSize.title,
    lineHeight: 28,
    color: Colors.textDark,
    paddingHorizontal: 8,
  },
  symptomsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  symptomChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: Radius.pill,
    backgroundColor: Colors.bg,
    ...NeuShadow.raised,
  },
  symptomChipActive: {
    backgroundColor: Colors.bg,
    shadowColor: Colors.pink,
    shadowOpacity: 0.2,
    borderWidth: 1,
    borderColor: 'rgba(252, 231, 243, 0.3)',
  },
  symptomLabel: {
    fontFamily: Font.medium,
    fontSize: FontSize.body,
    color: Colors.textMedium,
  },
  symptomLabelActive: {
    color: Colors.pinkDark,
  },

  // Log button
  logBtn: {
    backgroundColor: Colors.bg,
    borderRadius: Radius.pill,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 320,
    alignSelf: 'center',
    width: '100%',
    ...NeuShadow.raised,
  },
  logBtnText: {
    fontFamily: Font.bold,
    fontSize: FontSize.subtitle,
    color: Colors.textMedium,
    letterSpacing: 0.9,
    textTransform: 'uppercase',
  },
});
