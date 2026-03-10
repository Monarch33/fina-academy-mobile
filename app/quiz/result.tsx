import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import Finn from '../../src/components/Finn';
import Button from '../../src/components/Button';
import Confetti from '../../src/components/Confetti';
import { theme } from '../../src/constants/theme';

export default function ResultScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <Confetti />
      <View style={styles.container}>
        <Finn size={100} eyes="star" mouth="grin" animate />
        <Text style={styles.score}>
          5<Text style={styles.total}>/5</Text>
        </Text>
        <Text style={styles.msg}>Parfait !</Text>
        <Button title="Continuer" onPress={() => router.back()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.bg },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 12,
    zIndex: 11,
  },
  score: {
    fontSize: 48,
    fontWeight: '800',
    color: theme.colors.text,
  },
  total: {
    fontSize: 28,
    color: theme.colors.textTertiary,
  },
  msg: {
    fontSize: 16,
    color: theme.colors.textSecondary,
  },
});
