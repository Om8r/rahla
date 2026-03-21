import { View, Text, StyleSheet } from 'react-native';
import { Colors, Font, FontSize, NeuShadow, Radius } from '@/constants/theme';
import { NeuPressable } from '@/components/shared/NeuPressable';
import type { BabySizeEntry } from '@/constants/baby-size';

interface BabySizeCardProps {
  babySize: BabySizeEntry;
  babySizeName: string;
}

/**
 * Baby size card — matches Figma "Baby Size Card"
 * Centered layout: label → fruit image circle → name → size description
 */
export function BabySizeCard({ babySize, babySizeName }: BabySizeCardProps) {
  const sizeDesc = `Approx. ${babySize.lengthCm} cm & ${(babySize.weightG / 454).toFixed(2)} lbs`;

  return (
    <NeuPressable tint="pink" borderRadius={Radius.card} style={styles.card}>
      {/* Section label */}
      <Text style={styles.sectionLabel}>YOUR BABY IS THE SIZE OF</Text>

      {/* Fruit/veggie image circle */}
      <View style={styles.imageCircle}>
        <Text style={{ fontSize: 64 }}>{babySize.emoji}</Text>
      </View>

      {/* Name */}
      <Text style={styles.sizeName}>{babySizeName}</Text>

      {/* Dimensions */}
      <Text style={styles.sizeDesc}>{sizeDesc}</Text>
    </NeuPressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 32,
    alignItems: 'center',
    gap: 0,
  },
  sectionLabel: {
    fontFamily: Font.bold,
    fontSize: FontSize.caption,
    color: Colors.textWarm,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 24,
  },
  imageCircle: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: Colors.bgWhite,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#1E293B',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  sizeName: {
    fontFamily: Font.thin,
    fontSize: FontSize.h3,
    lineHeight: 32,
    color: Colors.textDark,
    textAlign: 'center',
  },
  sizeDesc: {
    fontFamily: Font.regular,
    fontSize: FontSize.body,
    lineHeight: 20,
    color: 'rgba(86, 97, 104, 0.6)',
    textAlign: 'center',
    marginTop: 8,
  },
});
