import { View, Text, StyleSheet } from 'react-native';
// Screen implemented in a later phase

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>رحلة</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff1f2' },
  title: { fontSize: 48, fontWeight: '700', color: '#f43f5e' },
});
