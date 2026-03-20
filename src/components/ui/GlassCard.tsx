import { View, StyleSheet, type ViewProps } from 'react-native';
import { Colors, NeuShadow, Radius } from '@/constants/theme';

interface NeuCardProps extends ViewProps {
  /** raised = outward bump (default), inset = pressed/sunken */
  variant?: 'raised' | 'inset';
  radius?: number;
  padding?: number;
  bg?: string;
}

/**
 * Neumorphic card — replaces the old GlassCard.
 * Named GlassCard for backwards compatibility.
 */
export function GlassCard({
  children,
  style,
  variant = 'raised',
  radius = Radius.card,
  padding,
  bg,
  ...props
}: NeuCardProps) {
  const bgColor = bg ?? (variant === 'inset' ? Colors.bgInput : Colors.bgCard);

  return (
    <View
      style={[
        { borderRadius: radius, backgroundColor: bgColor },
        variant === 'raised' ? styles.raised : styles.inset,
        padding !== undefined && { padding },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  raised: {
    ...NeuShadow.raised,
  },
  inset: {
    // Inset neumorphic — no outward shadow, inner contrast via bg
  },
});
