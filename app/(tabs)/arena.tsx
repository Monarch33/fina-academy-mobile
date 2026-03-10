import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';
import Finn from '../../src/components/Finn';
import SpeechBubble from '../../src/components/SpeechBubble';
import Badge from '../../src/components/Badge';
import GlassCard from '../../src/components/GlassCard';
import { theme } from '../../src/constants/theme';
import { hapticLight } from '../../src/services/haptics';

function TargetIcon({ color }: { color: string }) {
  return (
    <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={9} stroke={color} strokeWidth={1.5} />
      <Circle cx={12} cy={12} r={5} stroke={color} strokeWidth={1.5} />
      <Circle cx={12} cy={12} r={1.5} fill={color} />
    </Svg>
  );
}

const ARENA_MODES = [
  { id: 'mcq', t: 'QCM Express', s: '20 questions · 60s', c: '#E8580C', best: 17, max: 20, eyes: 'spark' as const, mouth: 'grin' as const, acc: 'band' as const },
  { id: 'brain', t: 'Brainteasers', s: 'Logique & estimation', c: '#7C3AED', best: 7, max: 10, eyes: 'dot' as const, mouth: 'line' as const, acc: null },
  { id: 'market', t: 'Market Quiz', s: 'Actualités', c: '#2563EB', best: null, max: 15, eyes: 'spark' as const, mouth: 'ooh' as const, acc: null },
  { id: 'mental', t: 'Calcul Mental', s: 'Vitesse & précision', c: '#16A34A', best: 22, max: 25, eyes: 'dot' as const, mouth: 'smile' as const, acc: 'band' as const },
  { id: 'case', t: 'Case Study', s: 'Analyse en 5 min', c: '#DB2777', best: null, max: 5, eyes: 'dot' as const, mouth: 'smile' as const, acc: 'tie' as const },
  { id: 'duel', t: 'Duel Mode', s: 'PvP temps réel', c: '#DC2626', best: 8, max: 10, eyes: 'star' as const, mouth: 'grin' as const, acc: 'crown' as const },
  { id: 'marathon', t: 'Marathon', s: '50 questions', c: '#0D9488', best: 41, max: 50, eyes: 'happy' as const, mouth: 'smile' as const, acc: null },
  { id: 'blind', t: 'Mode Aveugle', s: 'Feedback à la fin', c: '#64748B', best: null, max: 20, eyes: 'wink' as const, mouth: 'smile' as const, acc: 'glasses' as const },
];

export default function ArenaScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Finn size={38} eyes="spark" mouth="grin" accessory="band" animate />
            <View>
              <Text style={styles.title}>Arena</Text>
              <Text style={styles.subtitle}>Teste, affronte, progresse</Text>
            </View>
          </View>

          <GlassCard style={styles.tipCard}>
            <View style={styles.tipRow}>
              <Finn size={36} eyes="wink" mouth="smile" accessory="glasses" />
              <Text style={styles.tipText}>
                <Text style={styles.tipBold}>Finn : </Text>
                Un QCM Express pour s'échauffer, puis un Duel. Tu vas tout casser.
              </Text>
            </View>
          </GlassCard>

          <View style={styles.grid}>
            {ARENA_MODES.map((mode, i) => (
              <Animated.View
                key={mode.id}
                entering={FadeInDown.delay(i * 50)
                  .duration(300)
                  .springify()
                  .damping(15)}
                style={styles.gridItem}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.modeCard}
                  onPress={() => {
                    hapticLight();
                    router.push(`/quiz/${mode.id}`);
                  }}
                >
                  <View style={[styles.accentStrip, { backgroundColor: mode.c }]} />
                  <Finn size={34} eyes={mode.eyes} mouth={mode.mouth} accessory={mode.acc} />
                  <Text style={styles.modeTitle}>{mode.t}</Text>
                  <Text style={styles.modeSub}>{mode.s}</Text>
                  {mode.best !== null ? (
                    <View style={styles.bestRow}>
                      <TargetIcon color="#CA8A04" />
                      <Text style={styles.bestText}>
                        {mode.best}/{mode.max}
                      </Text>
                    </View>
                  ) : (
                    <View style={{ marginTop: 8 }}>
                      <Badge text="Nouveau" color={mode.c} />
                    </View>
                  )}
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
          <View style={{ height: 20 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.bg },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 20 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  tipCard: {
    marginVertical: 12,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tipText: {
    flex: 1,
    fontSize: 12.5,
    color: theme.colors.textSecondary,
    lineHeight: 19,
  },
  tipBold: {
    fontWeight: '700',
    color: theme.colors.text,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  gridItem: {
    width: '48%',
    flexGrow: 1,
  },
  modeCard: {
    backgroundColor: theme.colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 15,
    overflow: 'hidden',
  },
  accentStrip: {
    position: 'absolute',
    top: 0,
    left: 14,
    right: 14,
    height: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    opacity: 0.5,
  },
  modeTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.text,
    marginTop: 8,
    marginBottom: 2,
  },
  modeSub: {
    fontSize: 10.5,
    color: theme.colors.textSecondary,
    lineHeight: 14,
  },
  bestRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  bestText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#CA8A04',
  },
});
