import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import Finn from '../../src/components/Finn';
import Badge from '../../src/components/Badge';
import Button from '../../src/components/Button';
import { theme } from '../../src/constants/theme';
import { useUserStore } from '../../src/store/useUserStore';

export default function ReadyScreen() {
  const router = useRouter();
  const completeOnboarding = useUserStore((s) => s.completeOnboarding);

  const handleStart = () => {
    completeOnboarding();
    router.replace('/(tabs)/home');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Animated.View entering={FadeIn.duration(500)} style={styles.container}>
        <View style={styles.glowCircle} />
        <Finn
          size={100}
          eyes="star"
          mouth="grin"
          accessory="crown"
          animate
        />
        <View style={styles.readyBadge}>
          <Badge text="PRÊT" color="#fff" backgroundColor="#16A34A" />
        </View>

        <Text style={styles.title}>
          Ton parcours est{' '}
          <Text style={styles.accent}>prêt</Text>
        </Text>
        <Text style={styles.subtitle}>
          Finn a tout personnalisé pour toi.
        </Text>

        <Animated.View
          entering={FadeInDown.delay(200).duration(400).springify()}
          style={styles.recapCard}
        >
          {[
            { label: 'Objectif', value: 'Culture' },
            { label: 'Niveau', value: 'Intermédiaire' },
            { label: 'Recommandés', value: '16 cours' },
          ].map((row, i) => (
            <View
              key={row.label}
              style={[styles.recapRow, i > 0 && styles.recapBorder]}
            >
              <Text style={styles.recapLabel}>{row.label}</Text>
              <Text style={styles.recapValue}>{row.value}</Text>
            </View>
          ))}
        </Animated.View>

        <View style={styles.dots}>
          {[0, 1, 2, 3].map((i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === 3 ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>

        <Button title="C'est parti" onPress={handleStart} />
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
    paddingTop: 36,
  },
  glowCircle: {
    position: 'absolute',
    top: 16,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(249,115,22,0.1)',
  },
  readyBadge: {
    marginTop: -6,
    marginBottom: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.text,
  },
  accent: {
    color: theme.colors.accent,
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 8,
    lineHeight: 22,
  },
  recapCard: {
    marginVertical: 20,
    width: '100%',
    maxWidth: 280,
    backgroundColor: theme.colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 18,
  },
  recapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
  },
  recapBorder: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderLight,
  },
  recapLabel: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
  recapValue: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.accent,
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
});
