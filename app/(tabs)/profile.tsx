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
import Svg, { Path, Circle, Polyline } from 'react-native-svg';
import Finn from '../../src/components/Finn';
import XPBar from '../../src/components/XPBar';
import Badge from '../../src/components/Badge';
import { theme } from '../../src/constants/theme';
import { useUserStore } from '../../src/store/useUserStore';
import { getXPProgress } from '../../src/utils/xp';

function BoltIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Path d="M13 2L4.5 13H12l-1 9 8.5-11H12l1-9z" fill="#E8580C" opacity={0.1} stroke="#E8580C" strokeWidth={1.8} strokeLinejoin="round" />
    </Svg>
  );
}
function FireIcon2() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Path d="M12 2c0 4-4 6-4 10a6 6 0 0012 0c0-4-3-5-4-8-1 2-3 3-4 2 1-2 0-4 0-4z" fill="#EF4444" opacity={0.15} stroke="#EF4444" strokeWidth={1.8} strokeLinejoin="round" />
    </Svg>
  );
}
function TargetIcon2() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={9} stroke="#16A34A" strokeWidth={1.5} />
      <Circle cx={12} cy={12} r={5} stroke="#16A34A" strokeWidth={1.5} />
      <Circle cx={12} cy={12} r={1.5} fill="#16A34A" />
    </Svg>
  );
}
function CrownIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Path d="M3 18h18V8l-4.5 4L12 4l-4.5 8L3 8v10z" fill="#CA8A04" opacity={0.12} stroke="#CA8A04" strokeWidth={1.8} strokeLinejoin="round" />
    </Svg>
  );
}
function CheckSmall() {
  return (
    <Svg width={8} height={8} viewBox="0 0 24 24" fill="none">
      <Polyline points="20 6 9 17 4 12" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
function ChevRight() {
  return (
    <Svg width={15} height={15} viewBox="0 0 24 24" fill="none">
      <Polyline points="9 6 15 12 9 18" stroke="#D6D3CD" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

const ACHIEVEMENTS = [
  { t: 'Flamme éternelle', d: '21 jours de série', p: 100, c: '#EF4444' },
  { t: 'Speed Demon', d: '20 QCM en 2 min', p: 100, c: '#2563EB' },
  { t: 'Sniper', d: '100% sur un quiz', p: 100, c: '#E8580C' },
  { t: 'Scholar', d: 'Terminer 1 cours complet', p: 67, c: '#16A34A' },
  { t: 'Top 5 Diamant', d: 'Top 5 en ligue', p: 100, c: '#CA8A04' },
  { t: 'Brain Master', d: '10 brainteasers parfaits', p: 70, c: '#7C3AED' },
  { t: 'Gem Collector', d: 'Accumuler 5000 XP', p: 100, c: '#7C3AED' },
  { t: 'Gladiator', d: 'Gagner 10 duels', p: 40, c: '#DC2626' },
  { t: 'Marathon', d: '50 questions d\'affilée', p: 82, c: '#0D9488' },
];

const SETTINGS = [
  'Gérer l\'abonnement',
  'Objectif quotidien',
  'Notifications',
  'Langue',
  'Aide & FAQ',
  'Se déconnecter',
];

const STAT_ICONS = [BoltIcon, FireIcon2, TargetIcon2, CrownIcon];

export default function ProfileScreen() {
  const router = useRouter();
  const { name, totalXP, streak, level } = useUserStore();
  const xpProgress = getXPProgress(totalXP);

  const stats = [
    { v: totalXP.toLocaleString(), l: 'XP Total', c: '#E8580C' },
    { v: `${streak}j`, l: 'Série', c: '#EF4444' },
    { v: '76%', l: 'Précision', c: '#16A34A' },
    { v: '#4', l: 'Rang', c: '#CA8A04' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <View style={styles.glowCircle} />
            <View style={styles.avatarCircle}>
              <Finn size={58} eyes="star" mouth="grin" accessory="crown" />
            </View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.levelText}>
              Niveau {xpProgress.level} · Ligue Diamant
            </Text>
            <View style={styles.xpBarWrap}>
              <XPBar progress={xpProgress.progress * 100} />
              <Text style={styles.xpText}>
                {xpProgress.currentXP} / {xpProgress.nextLevelXP} XP → Niv.
                {xpProgress.level + 1}
              </Text>
            </View>
          </View>

          {/* Stats Grid */}
          <View style={styles.statsGrid}>
            {stats.map((s, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <Animated.View
                  key={s.l}
                  entering={FadeInDown.delay(i * 60)
                    .duration(300)
                    .springify()
                    .damping(15)}
                  style={styles.statCard}
                >
                  <View style={[styles.statStrip, { backgroundColor: s.c }]} />
                  <View style={styles.statContent}>
                    <View style={[styles.statIcon, { backgroundColor: `${s.c}08` }]}>
                      <Icon />
                    </View>
                    <View>
                      <Text style={styles.statValue}>{s.v}</Text>
                      <Text style={styles.statLabel}>{s.l}</Text>
                    </View>
                  </View>
                </Animated.View>
              );
            })}
          </View>

          {/* Achievements */}
          <Text style={styles.sectionTitle}>Accomplissements</Text>
          <View style={styles.achievementsList}>
            {ACHIEVEMENTS.map((a, i) => (
              <Animated.View
                key={a.t}
                entering={FadeInDown.delay(i * 30)
                  .duration(300)
                  .springify()
                  .damping(15)}
                style={styles.achieveCard}
              >
                {a.p === 100 && (
                  <View style={[styles.achieveStrip, { backgroundColor: a.c }]} />
                )}
                <View style={styles.achieveContent}>
                  <View
                    style={[
                      styles.achieveIcon,
                      {
                        backgroundColor: a.p === 100 ? `${a.c}12` : '#F0EBE1',
                        borderColor: a.p === 100 ? `${a.c}20` : '#E4DFD3',
                      },
                    ]}
                  >
                    <Finn
                      size={30}
                      eyes={a.p === 100 ? 'star' : 'dot'}
                      mouth={a.p === 100 ? 'grin' : 'line'}
                      blush={a.p >= 50}
                    />
                    {a.p === 100 && (
                      <View style={styles.achieveCheck}>
                        <CheckSmall />
                      </View>
                    )}
                  </View>
                  <View style={styles.achieveInfo}>
                    <Text style={styles.achieveTitle}>{a.t}</Text>
                    <Text style={styles.achieveDesc}>{a.d}</Text>
                    {a.p < 100 && (
                      <View style={{ marginTop: 5 }}>
                        <XPBar progress={a.p} color={a.c} height={4} />
                      </View>
                    )}
                  </View>
                  {a.p === 100 ? (
                    <Badge text="Obtenu" color="#16A34A" />
                  ) : (
                    <Text style={[styles.achievePercent, { color: a.c }]}>
                      {a.p}%
                    </Text>
                  )}
                </View>
              </Animated.View>
            ))}
          </View>

          {/* Settings */}
          <View style={styles.settingsCard}>
            {SETTINGS.map((item, i) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.settingRow,
                  i < SETTINGS.length - 1 && styles.settingBorder,
                ]}
              >
                <Text
                  style={[
                    styles.settingText,
                    i === SETTINGS.length - 1 && styles.settingDanger,
                  ]}
                >
                  {item}
                </Text>
                {i < SETTINGS.length - 1 && <ChevRight />}
              </TouchableOpacity>
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 16,
    position: 'relative',
  },
  glowCircle: {
    position: 'absolute',
    top: 0,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(232,88,12,0.08)',
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F97316',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.6)',
    shadowColor: theme.colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    marginBottom: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.text,
  },
  levelText: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  xpBarWrap: {
    maxWidth: 200,
    width: '100%',
    marginTop: 10,
  },
  xpText: {
    fontSize: 10,
    color: theme.colors.textTertiary,
    marginTop: 2,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 18,
  },
  statCard: {
    width: '48%',
    flexGrow: 1,
    backgroundColor: theme.colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 13,
    paddingHorizontal: 14,
    overflow: 'hidden',
  },
  statStrip: {
    position: 'absolute',
    top: 0,
    left: 12,
    right: 12,
    height: 2.5,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    opacity: 0.4,
  },
  statContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statValue: {
    fontSize: 17,
    fontWeight: '800',
    color: theme.colors.text,
  },
  statLabel: {
    fontSize: 10,
    color: theme.colors.textTertiary,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 10,
  },
  achievementsList: {
    gap: 7,
    marginBottom: 18,
  },
  achieveCard: {
    backgroundColor: theme.colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 12,
    paddingHorizontal: 14,
    overflow: 'hidden',
  },
  achieveStrip: {
    position: 'absolute',
    top: 0,
    left: 14,
    right: 14,
    height: 2.5,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    opacity: 0.5,
  },
  achieveContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  achieveIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    position: 'relative',
  },
  achieveCheck: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#16A34A',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#16A34A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  achieveInfo: {
    flex: 1,
    minWidth: 0,
  },
  achieveTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.text,
  },
  achieveDesc: {
    fontSize: 11,
    color: theme.colors.textSecondary,
    marginTop: 1,
  },
  achievePercent: {
    fontSize: 11,
    fontWeight: '700',
  },
  settingsCard: {
    backgroundColor: theme.colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
    marginBottom: 18,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 16,
  },
  settingBorder: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderLight,
  },
  settingText: {
    fontSize: 13.5,
    fontWeight: '500',
    color: theme.colors.text,
  },
  settingDanger: {
    color: theme.colors.red,
  },
});
