import { View, Text, StyleSheet } from 'react-native';
// Screen implemented in a later phase

export default function TrackScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Track</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff1f2' },
  label: { fontSize: 24, fontWeight: '600', color: '#f43f5e' },
});
