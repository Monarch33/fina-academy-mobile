import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import Logo from '../../src/components/Logo';
import Finn from '../../src/components/Finn';
import Button from '../../src/components/Button';
import { theme } from '../../src/constants/theme';

const STATS = [
  { n: '18', l: 'cours', color: '#FDBA74' },
  { n: '400+', l: 'leçons', color: '#BFDBFE' },
  { n: '\u221E', l: 'quiz', color: '#C4B5FD' },
];

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <Animated.View entering={FadeIn.duration(600)} style={styles.container}>
        <View style={styles.glowCircle} />
        <Finn size={120} eyes="spark" mouth="grin" animate />
        <View style={styles.logoWrap}>
          <Logo size={32} />
        </View>
        <Text style={styles.tagline}>
          Apprends la finance{'\n'}comme un <Text style={styles.italic}>pro</Text>.
        </Text>

        <View style={styles.statsRow}>
          {STATS.map((s, i) => (
            <Animated.View
              key={s.l}
              entering={FadeInDown.delay(150 + i * 100)
                .duration(400)
                .springify()
                .damping(15)}
              style={styles.statCard}
            >
              <Text style={styles.statNumber}>{s.n}</Text>
              <Text style={styles.statLabel}>{s.l}</Text>
            </Animated.View>
          ))}
        </View>

        <View style={styles.dots}>
          {[0, 1, 2, 3].map((i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === 0 ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>

        <Button title="Commencer" onPress={() => router.push('/(auth)/goal')} />

        <TouchableOpacity onPress={() => router.replace('/(tabs)/home')} style={styles.loginLink}>
          <Text style={styles.loginText}>
            Déjà un compte ?{' '}
            <Text style={styles.loginBold}>Se connecter</Text>
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  glowCircle: {
    position: 'absolute',
    top: 20,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(249,115,22,0.08)',
  },
  logoWrap: {
    marginTop: 8,
    marginBottom: 14,
  },
  tagline: {
    fontSize: 15,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    fontStyle: 'italic',
    maxWidth: 260,
  },
  italic: {
    color: theme.colors.accent,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 28,
    width: '100%',
    maxWidth: 300,
  },
  statCard: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: 22,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: theme.colors.text,
  },
  statLabel: {
    fontSize: 11,
    color: theme.colors.textSecondary,
    marginTop: 1,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    paddingVertical: 14,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    width: 28,
    backgroundColor: theme.colors.accent,
  },
  dotInactive: {
    width: 8,
    backgroundColor: 'rgba(232,88,12,0.12)',
  },
  loginLink: {
    marginTop: 16,
  },
  loginText: {
    fontSize: 12,
    color: theme.colors.textTertiary,
  },
  loginBold: {
    color: theme.colors.accent,
    fontWeight: '700',
  },
});
