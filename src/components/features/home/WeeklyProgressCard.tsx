import { View, Text, StyleSheet } from 'react-native';
import { Colors, Font, FontSize, NeuShadow, Radius } from '@/constants/theme';
import { ProgressBar } from '@/components/ui/ProgressBar';

interface WeeklyProgressCardProps {
  week: number;
  progressPercent: number;
  daysLeft: number;
  trimester: string;
  trimesterLabel: string;
}

/**
 * Weekly progress card — matches Figma "Weekly Progress Card"
 * Neumorphic raised card, olive/green progress bar.
 */
export function WeeklyProgressCard({
  week,
  progressPercent,
  daysLeft,
  trimesterLabel,
}: WeeklyProgressCardProps) {
  return (
    <View style={styles.card}>
      {/* Top row: label + icon circle */}
      <View style={styles.topRow}>
        <View style={styles.weekInfo}>
          <Text style={styles.currentLabel}>CURRENT PROGRESS</Text>
          <Text style={styles.weekNumber}>Week {week}</Text>
          <Text style={styles.trimester}>{trimesterLabel}</Text>
        </View>
        {/* Embryo icon placeholder */}
        <View style={styles.iconCircle}>
          <Text style={{ fontSize: 20 }}>🤰</Text>
        </View>
      </View>

      {/* Progress bar section */}
      <View style={styles.progressSection}>
        {/* Labels row */}
        <View style={styles.progressLabels}>
          <Text style={styles.progressLabel}>CONCEPTION</Text>
          <Text style={styles.progressLabel}>40 WEEKS</Text>
        </View>

        {/* Inset track */}
        <View style={styles.progressTrack}>
          <ProgressBar
            progress={progressPercent}
            height={16}
            fillColor={Colors.olive}
          />
        </View>

        {/* Days left */}
        <Text style={styles.daysLeft}>{daysLeft} days until due date</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.card,
    padding: 32,
    gap: 48,
    ...NeuShadow.raised,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  weekInfo: {
    gap: 0,
  },
  currentLabel: {
    fontFamily: Font.bold,
    fontSize: FontSize.caption,
    color: Colors.olive,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  weekNumber: {
    fontFamily: Font.thin,
    fontSize: FontSize.h2,
    lineHeight: 36,
    color: Colors.textDark,
    marginTop: 4,
  },
  trimester: {
    fontFamily: Font.regular,
    fontSize: FontSize.bodyLg,
    lineHeight: 24,
    color: 'rgba(86, 97, 104, 0.7)',
    marginTop: 0,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1E293B',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  progressSection: {
    gap: 16,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabel: {
    fontFamily: Font.bold,
    fontSize: FontSize.caption,
    color: Colors.textFaint,
    letterSpacing: 1.2,
  },
  progressTrack: {
    backgroundColor: Colors.bg,
    borderRadius: Radius.pill,
    padding: 4,
    shadowColor: '#1E293B',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1,
  },
  daysLeft: {
    fontFamily: Font.medium,
    fontSize: FontSize.body,
    color: Colors.textOlive,
    textAlign: 'center',
  },
});
