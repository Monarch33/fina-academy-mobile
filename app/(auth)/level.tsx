import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Finn from '../../src/components/Finn';
import SpeechBubble from '../../src/components/SpeechBubble';
import Button from '../../src/components/Button';
import { theme } from '../../src/constants/theme';
import { useUserStore, type UserLevel } from '../../src/store/useUserStore';
import { hapticLight } from '../../src/services/haptics';

const LEVELS: {
  id: UserLevel;
  label: string;
  desc: string;
  emoji: string;
}[] = [
  { id: 'beginner', label: 'Débutant', desc: 'Je pars de zéro', emoji: '\uD83C\uDF31' },
  { id: 'intermediate', label: 'Intermédiaire', desc: 'Bilan, P&L, ratios, notions valorisation', emoji: '\uD83D\uDCCA' },
  { id: 'advanced', label: 'Avancé', desc: 'DCF, LBO, options, Black-Scholes', emoji: '\uD83D\uDE80' },
];

export default function LevelScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<UserLevel | null>(null);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.finnRow}>
          <Finn size={40} eyes="wink" mouth="smile" />
          <SpeechBubble>
            Pas de jugement ! On commence tous quelque part.
          </SpeechBubble>
        </View>

        <Text style={styles.step}>ÉTAPE 2/3</Text>
        <Text style={styles.title}>
          Ton <Text style={styles.accent}>niveau</Text> ?
        </Text>

        <View style={styles.options}>
          {LEVELS.map((l, i) => (
            <Animated.View
              key={l.id}
              entering={FadeInDown.delay(i * 60)
                .duration(400)
                .springify()
                .damping(15)}
            >
              <TouchableOpacity
                onPress={() => {
                  hapticLight();
                  setSelected(l.id);
                }}
                activeOpacity={0.7}
                style={[
                  styles.option,
                  selected === l.id && styles.optionSelected,
                ]}
              >
                <View style={styles.emojiBox}>
                  <Text style={styles.emoji}>{l.emoji}</Text>
                </View>
                <View style={styles.optionText}>
                  <Text style={styles.optionLabel}>{l.label}</Text>
                  <Text style={styles.optionDesc}>{l.desc}</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>

        <View style={styles.dots}>
          {[0, 1, 2, 3].map((i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === 2 ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>

        <Button
          title="Continuer"
          onPress={() => router.push('/(auth)/ready')}
          disabled={!selected}
        />
      </View>
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
    paddingHorizontal: 22,
    paddingTop: 16,
  },
  finnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  step: {
    fontSize: 11,
    color: theme.colors.textTertiary,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: theme.colors.text,
    lineHeight: 30,
    marginVertical: 8,
  },
  accent: {
    color: theme.colors.accent,
    fontStyle: 'italic',
  },
  options: {
    gap: 10,
    marginTop: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 20,
    borderRadius: 22,
    borderWidth: 2.5,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,
    ...theme.shadows.sm,
  },
  optionSelected: {
    borderColor: theme.colors.accent,
    backgroundColor: theme.colors.accentLight,
  },
  emojiBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: theme.colors.warm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 20,
  },
  optionText: {
    flex: 1,
  },
  optionLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.text,
  },
  optionDesc: {
    fontSize: 12.5,
    color: theme.colors.textSecondary,
    marginTop: 2,
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
