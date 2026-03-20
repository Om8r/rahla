import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from '@/components/shared/ScreenWrapper';
import { NeuPressable } from '@/components/shared/NeuPressable';
import { Colors, Font, FontSize, NeuShadow, Radius } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getBabySizeForWeek } from '@/constants/baby-size';
import { usePregnancyStore } from '@/stores/pregnancy.store';

const MILESTONES: Record<number, string[]> = {
  1:  ['النمو يبدأ', 'الخلايا تنقسم', 'الحمل يبدأ'],
  2:  ['تشكّل الجنين', 'القلب يبدأ', 'الجهاز العصبي'],
  3:  ['الأعضاء تتشكل', 'الدم يجري', 'الوجه يظهر'],
};

function getMilestones(week: number): string[] {
  const trimester = week <= 13 ? 1 : week <= 26 ? 2 : 3;
  if (trimester === 1) return ['القلب يبدأ بالنبض', 'الأعضاء الرئيسية تتشكّل', 'الجهاز العصبي ينمو'];
  if (trimester === 2) return ['الطفل يتحرك', 'يسمع الأصوات', 'الجلد يتطور'];
  return ['الرئتان تكتملان', 'الوزن يزداد', 'الطفل جاهز تقريباً'];
}

export default function BabyScreen() {
  const insets = useSafeAreaInsets();
  const { currentWeek } = usePregnancyStore();
  const displayWeek = currentWeek > 0 ? currentWeek : 20;
  const baby = getBabySizeForWeek(displayWeek);
  const milestones = getMilestones(displayWeek);
  const trimester = displayWeek <= 13 ? 'الأول' : displayWeek <= 26 ? 'الثاني' : 'الثالث';
  const weeksLeft = Math.max(0, 40 - displayWeek);

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
            <Text style={{ fontSize: 16 }}>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScreenWrapper>
        {/* Header */}
        <View style={styles.pageHeader}>
          <Text style={styles.weekLabel}>الأسبوع</Text>
          <Text style={styles.weekNumber}>{displayWeek}</Text>
          <Text style={styles.trimesterLabel}>الثلث {trimester}</Text>
        </View>

        {/* Baby Size Card */}
        <View style={styles.sizeCard}>
          <View style={styles.emojiCircle}>
            <Text style={styles.emoji}>{baby.emoji}</Text>
          </View>
          <Text style={styles.sizeTitle}>حجم طفلك</Text>
          <Text style={styles.sizeName}>{baby.nameAr}</Text>
          <Text style={styles.sizeCompareName}>{baby.nameEn}</Text>

          {/* Stats Row */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{baby.lengthCm} cm</Text>
              <Text style={styles.statLabel}>الطول</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statValue}>
                {baby.weightG < 1000
                  ? `${baby.weightG} g`
                  : `${(baby.weightG / 1000).toFixed(1)} kg`}
              </Text>
              <Text style={styles.statLabel}>الوزن</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{weeksLeft}</Text>
              <Text style={styles.statLabel}>أسابيع متبقية</Text>
            </View>
          </View>
        </View>

        {/* Milestones */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>تطور هذا الأسبوع</Text>
          <View style={styles.milestonesList}>
            {milestones.map((m, i) => (
              <NeuPressable key={i} tint="pink" borderRadius={Radius.listItem} style={styles.milestoneItem}>
                <View style={styles.milestoneDot} />
                <Text style={styles.milestoneText}>{m}</Text>
              </NeuPressable>
            ))}
          </View>
        </View>

        {/* Mom's body card */}
        <NeuPressable tint="blue" borderRadius={Radius.card} style={styles.momCard}>
          <View style={styles.momCardHeader}>
            <View style={[styles.cardIcon, { backgroundColor: Colors.pinkBg }]}>
              <Text style={{ fontSize: 18 }}>💝</Text>
            </View>
            <Text style={styles.momCardTitle}>جسمك هذا الأسبوع</Text>
          </View>
          <Text style={styles.momCardText}>
            {displayWeek <= 13
              ? 'قد تشعرين بالغثيان والتعب. جسمك يعمل بجد لدعم نمو طفلك. احرصي على الراحة وشرب الماء.'
              : displayWeek <= 26
              ? 'بدأت تشعرين بحركة طفلك! بطنك يكبر وقد تحتاجين لملابس أكثر راحة.'
              : 'اقترب موعد اللقاء! قد تشعرين بثقل وصعوبة في النوم. استعدي للولادة.'}
          </Text>
        </NeuPressable>
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

  pageHeader: { alignItems: 'center', gap: 4 },
  weekLabel: { fontFamily: Font.medium, fontSize: FontSize.body, color: Colors.textMedium, letterSpacing: 2, textTransform: 'uppercase' },
  weekNumber: { fontFamily: Font.thin, fontSize: 80, lineHeight: 90, color: Colors.textDark, letterSpacing: -4 },
  trimesterLabel: { fontFamily: Font.medium, fontSize: FontSize.bodyLg, color: Colors.pink },

  sizeCard: {
    backgroundColor: Colors.bg,
    borderRadius: Radius.card,
    padding: 32,
    alignItems: 'center',
    gap: 12,
    ...NeuShadow.raised,
  },
  emojiCircle: {
    width: 120, height: 120, borderRadius: 60,
    backgroundColor: Colors.pinkBg,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 8,
    ...NeuShadow.raised,
  },
  emoji: { fontSize: 64 },
  sizeTitle: { fontFamily: Font.medium, fontSize: FontSize.body, color: Colors.textMedium, letterSpacing: 1, textTransform: 'uppercase' },
  sizeName: { fontFamily: Font.thin, fontSize: FontSize.h2, color: Colors.textDark, letterSpacing: -1 },
  sizeCompareName: { fontFamily: Font.regular, fontSize: FontSize.body, color: Colors.textSlate },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    backgroundColor: Colors.bg,
    borderRadius: Radius.listItem,
    padding: 20,
    width: '100%',
    ...NeuShadow.raised,
  },
  statBox: { flex: 1, alignItems: 'center', gap: 4 },
  statValue: { fontFamily: Font.bold, fontSize: FontSize.subtitle, color: Colors.textDark },
  statLabel: { fontFamily: Font.regular, fontSize: FontSize.caption, color: Colors.textMedium },
  statDivider: { width: 1, height: 40, backgroundColor: Colors.divider },

  section: { gap: 20 },
  sectionTitle: { fontFamily: Font.thin, fontSize: FontSize.title, color: Colors.textDark },
  milestonesList: { gap: 16 },
  milestoneItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: Colors.bg,
    borderRadius: Radius.listItem,
    padding: 20,
    ...NeuShadow.raised,
  },
  milestoneDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: Colors.pink },
  milestoneText: { fontFamily: Font.medium, fontSize: FontSize.bodyLg, color: Colors.textDark, flex: 1 },

  momCard: {
    backgroundColor: Colors.bg,
    borderRadius: Radius.card,
    padding: 32,
    gap: 20,
    ...NeuShadow.raised,
  },
  momCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  cardIcon: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  momCardTitle: { fontFamily: Font.semibold, fontSize: FontSize.bodyLg, color: Colors.textMedium },
  momCardText: { fontFamily: Font.regular, fontSize: FontSize.bodyLg, lineHeight: 28, color: Colors.textDark },
});
