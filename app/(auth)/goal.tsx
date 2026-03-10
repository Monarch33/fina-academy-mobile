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
import { useUserStore, type UserGoal } from '../../src/store/useUserStore';
import { hapticLight } from '../../src/services/haptics';

const GOALS: {
  id: UserGoal;
  label: string;
  desc: string;
  eyes: 'happy' | 'dot' | 'star' | 'wink' | 'spark';
  mouth: 'smile' | 'open' | 'grin' | 'line' | 'ooh';
  accessory?: 'glasses' | 'crown' | 'band' | 'tie' | 'hat' | null;
}[] = [
  { id: 'leisure', label: 'Culture générale', desc: 'Comprendre pour moi-même', eyes: 'happy', mouth: 'smile' },
  { id: 'student', label: 'Études en finance', desc: 'Réussir examens & certifications', eyes: 'star', mouth: 'grin' },
  { id: 'market', label: 'Finance de marché', desc: 'Trading, sales, structuration', eyes: 'dot', mouth: 'line' },
  { id: 'corporate', label: 'Finance d\'entreprise', desc: 'M&A, PE, LBO, valorisation', eyes: 'dot', mouth: 'smile', accessory: 'tie' },
  { id: 'invest', label: 'Investir mon argent', desc: 'Bourse, immobilier, crypto', eyes: 'spark', mouth: 'ooh' },
];

export default function GoalScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<UserGoal | null>(null);
  const setOnboarding = useUserStore((s) => s.setOnboarding);

  const handleContinue = () => {
    if (!selected) return;
    router.push('/(auth)/level');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.finnRow}>
          <Finn size={40} eyes="dot" mouth="smile" accessory="glasses" />
          <SpeechBubble>
            Dis-moi pourquoi tu veux apprendre la finance. Je personnalise tout.
          </SpeechBubble>
        </View>

        <Text style={styles.step}>ÉTAPE 1/3</Text>
        <Text style={styles.title}>
          Quel est ton <Text style={styles.accent}>objectif</Text> ?
        </Text>

        <View style={styles.options}>
          {GOALS.map((g, i) => (
            <Animated.View
              key={g.id}
              entering={FadeInDown.delay(i * 60)
                .duration(400)
                .springify()
                .damping(15)}
            >
              <TouchableOpacity
                onPress={() => {
                  hapticLight();
                  setSelected(g.id);
                }}
                activeOpacity={0.7}
                style={[
                  styles.option,
                  selected === g.id && styles.optionSelected,
                ]}
              >
                <Finn
                  size={38}
                  eyes={g.eyes}
                  mouth={g.mouth}
                  accessory={g.accessory ?? null}
                />
                <View style={styles.optionText}>
                  <Text style={styles.optionLabel}>{g.label}</Text>
                  <Text style={styles.optionDesc}>{g.desc}</Text>
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
                i === 1 ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>

        <Button
          title="Continuer"
          onPress={handleContinue}
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
    padding: 16,
    paddingHorizontal: 18,
    borderRadius: 22,
    borderWidth: 2.5,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,
    ...theme.shadows.sm,
  },
  optionSelected: {
    borderColor: theme.colors.accent,
    backgroundColor: theme.colors.accentLight,
    shadowColor: theme.colors.accent,
    shadowOpacity: 0.1,
  },
  optionText: {
    flex: 1,
  },
  optionLabel: {
    fontSize: 14.5,
    fontWeight: '700',
    color: theme.colors.text,
  },
  optionDesc: {
    fontSize: 12,
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
});
