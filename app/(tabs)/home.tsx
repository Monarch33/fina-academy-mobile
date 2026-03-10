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
import Svg, { Path, Polyline } from 'react-native-svg';
import Logo from '../../src/components/Logo';
import Finn from '../../src/components/Finn';
import StreakFlame from '../../src/components/StreakFlame';
import ProgressRing from '../../src/components/ProgressRing';
import XPBar from '../../src/components/XPBar';
import Badge from '../../src/components/Badge';
import WeekStreak from '../../src/components/WeekStreak';
import MiniChart from '../../src/components/MiniChart';
import SocialProof from '../../src/components/SocialProof';
import { theme } from '../../src/constants/theme';
import { useUserStore } from '../../src/store/useUserStore';
import { getDayOfWeek } from '../../src/utils/streak';
import { hapticLight } from '../../src/services/haptics';

function ArrowIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 12h14m-6-6l6 6-6 6"
        stroke="#fff"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const COURSES_PREVIEW = [
  { id: 'fund', t: 'Les Fondamentaux', c: '#16A34A', n: 24, dn: 16, chart: 'bars' as const, ppl: 12430, eyes: 'dot' as const, mouth: 'smile' as const, acc: 'glasses' as const },
  { id: 'corp', t: 'Corporate Finance', c: '#2563EB', n: 28, dn: 6, chart: 'line' as const, ppl: 8920, eyes: 'dot' as const, mouth: 'smile' as const, acc: 'tie' as const },
  { id: 'deriv', t: 'Produits Dérivés', c: '#7C3AED', n: 35, dn: 0, chart: 'curve' as const, ppl: 5640, eyes: 'dot' as const, mouth: 'line' as const, acc: null },
  { id: 'port', t: 'Gestion de Portefeuille', c: '#DB2777', n: 26, dn: 0, chart: 'pie' as const, ppl: 7810, eyes: 'happy' as const, mouth: 'smile' as const, acc: null },
  { id: 'macro', t: 'Macroéconomie', c: '#CA8A04', n: 22, dn: 0, chart: 'line' as const, ppl: 9350, eyes: 'spark' as const, mouth: 'ooh' as const, acc: null },
  { id: 'crypto', t: 'Crypto & Blockchain', c: '#F59E0B', n: 16, dn: 0, chart: 'candle' as const, ppl: 18900, eyes: 'star' as const, mouth: 'open' as const, acc: null },
];

const LB_PREVIEW = [
  { n: 'Sophie M.', xp: 14820, eyes: 'star' as const },
  { n: 'Thomas K.', xp: 13200, eyes: 'happy' as const },
  { n: 'Léa D.', xp: 12890, eyes: 'wink' as const },
];

export default function HomeScreen() {
  const router = useRouter();
  const { dailyXP, dailyGoal, streak, activityDates } = useUserStore();
  const dayIndex = getDayOfWeek();
  const weekActivity = Array(7)
    .fill(false)
    .map((_, i) => i <= dayIndex && activityDates.length > dayIndex - i);

  const xpPercent = Math.round((dailyXP / dailyGoal) * 100);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Logo size={24} />
            <View style={styles.headerRight}>
              <StreakFlame streak={streak} size={38} />
              <ProgressRing progress={xpPercent} size={36} strokeWidth={3}>
                <Text style={styles.ringText}>{xpPercent}%</Text>
              </ProgressRing>
            </View>
          </View>

          {/* Finn Hero Card */}
          <Animated.View
            entering={FadeInDown.duration(400).springify().damping(15)}
          >
            <TouchableOpacity activeOpacity={0.8} style={styles.heroCard}>
              <View style={styles.heroGlow} />
              <View style={styles.heroContent}>
                <Finn size={58} eyes="wink" mouth="smile" animate />
                <View style={styles.heroInfo}>
                  <Text style={styles.heroTitle}>
                    Encore {dailyGoal - dailyXP} XP pour ton objectif !
                  </Text>
                  <XPBar progress={(dailyXP / dailyGoal) * 100} />
                  <Text style={styles.heroSub}>
                    {dailyXP} / {dailyGoal} XP aujourd'hui
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>

          {/* Quick Actions */}
          <View style={styles.quickActions}>
            <TouchableOpacity
              style={styles.quickCard}
              activeOpacity={0.7}
              onPress={() => {
                hapticLight();
                router.push('/(tabs)/academy');
              }}
            >
              <View style={[styles.quickIcon, { backgroundColor: '#EFF6FF' }]}>
                <Finn size={30} eyes="dot" mouth="smile" accessory="tie" />
              </View>
              <Text style={styles.quickTitle}>Reprendre</Text>
              <Text style={styles.quickSub}>Corporate Finance</Text>
              <View style={{ marginTop: 8 }}>
                <XPBar progress={21} color="#2563EB" height={4} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickCard}
              activeOpacity={0.7}
              onPress={() => {
                hapticLight();
                router.push('/(tabs)/arena');
              }}
            >
              <View style={[styles.quickIcon, { backgroundColor: '#FFF4ED' }]}>
                <Finn size={30} eyes="spark" mouth="grin" accessory="band" />
              </View>
              <Text style={styles.quickTitle}>Quiz rapide</Text>
              <Text style={styles.quickSub}>QCM Express</Text>
            </TouchableOpacity>
          </View>

          {/* Daily Challenge */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.challengeCard}
            onPress={() => {
              hapticLight();
              router.push('/(tabs)/arena');
            }}
          >
            <View style={styles.challengeGlow} />
            <View style={styles.challengeContent}>
              <View style={styles.challengeLeft}>
                <Finn size={48} eyes="star" mouth="open" animate />
                <View>
                  <Badge text="Défi du jour" color="#FDBA74" backgroundColor="rgba(253,186,116,0.12)" />
                  <Text style={styles.challengeTitle}>Brainteaser Challenge</Text>
                  <Text style={styles.challengeSub}>5 questions · +100 XP</Text>
                </View>
              </View>
              <View style={styles.challengeBtn}>
                <ArrowIcon />
              </View>
            </View>
          </TouchableOpacity>

          {/* Week Streak */}
          <WeekStreak activity={weekActivity} currentDayIndex={dayIndex} />

          {/* Recommended Courses */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommandé</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/academy')}>
              <Text style={styles.seeAll}>Voir tout</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.coursesScroll}
          >
            {COURSES_PREVIEW.map((c, i) => (
              <Animated.View
                key={c.id}
                entering={FadeInDown.delay(i * 60).duration(300).springify().damping(15)}
              >
                <TouchableOpacity
                  style={styles.coursePreview}
                  activeOpacity={0.7}
                  onPress={() => {
                    hapticLight();
                    router.push('/(tabs)/academy');
                  }}
                >
                  <View style={styles.coursePreviewHeader}>
                    <Finn size={30} eyes={c.eyes} mouth={c.mouth} accessory={c.acc} />
                    <MiniChart type={c.chart} color={c.c} />
                  </View>
                  <Text style={styles.coursePreviewTitle} numberOfLines={1}>
                    {c.t}
                  </Text>
                  <View style={styles.coursePreviewMeta}>
                    <Text style={styles.coursePreviewLessons}>{c.n} leçons</Text>
                    <SocialProof count={c.ppl} />
                  </View>
                  <View style={{ marginTop: 8 }}>
                    <XPBar progress={Math.round((c.dn / c.n) * 100)} color={c.c} height={4} />
                  </View>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </ScrollView>

          {/* Leaderboard Preview */}
          <TouchableOpacity
            style={styles.leaderCard}
            activeOpacity={0.7}
            onPress={() => router.push('/(tabs)/leaderboard')}
          >
            <View style={styles.leaderHeader}>
              <Text style={styles.sectionTitle}>Classement</Text>
              <Text style={styles.seeAll}>Voir tout</Text>
            </View>
            {LB_PREVIEW.map((u, i) => (
              <View
                key={u.n}
                style={[styles.leaderRow, i > 0 && styles.leaderBorder]}
              >
                <Text style={[styles.leaderRank, { color: ['#CA8A04', '#94A3B8', '#CD7F32'][i] }]}>
                  {i + 1}
                </Text>
                <Finn size={22} eyes={u.eyes} mouth="smile" />
                <Text style={styles.leaderName}>{u.n}</Text>
                <Text style={styles.leaderXP}>{u.xp.toLocaleString()}</Text>
              </View>
            ))}
          </TouchableOpacity>

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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  headerRight: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  ringText: { fontSize: 9, fontWeight: '800', color: theme.colors.accent },
  heroCard: {
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    overflow: 'hidden',
    backgroundColor: '#FFEDD5',
  },
  heroGlow: {
    position: 'absolute',
    top: -30,
    right: -20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(249,115,22,0.2)',
  },
  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  heroInfo: { flex: 1 },
  heroTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9A3412',
    marginBottom: 5,
  },
  heroSub: {
    fontSize: 11,
    color: '#C2410C',
    marginTop: 3,
    opacity: 0.7,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  quickCard: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 15,
  },
  quickIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  quickTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.text,
  },
  quickSub: {
    fontSize: 11.5,
    color: theme.colors.textSecondary,
    marginTop: 1,
  },
  challengeCard: {
    borderRadius: 22,
    padding: 20,
    marginBottom: 14,
    backgroundColor: '#1C1917',
    overflow: 'hidden',
  },
  challengeGlow: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 160,
    height: 160,
    backgroundColor: 'rgba(249,115,22,0.08)',
    borderRadius: 80,
  },
  challengeContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  challengeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  challengeTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    marginTop: 5,
  },
  challengeSub: {
    fontSize: 12,
    color: '#A8A29E',
    marginTop: 2,
  },
  challengeBtn: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: theme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 10,
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
  },
  seeAll: {
    fontSize: 12,
    color: theme.colors.accent,
    fontWeight: '700',
  },
  coursesScroll: {
    marginBottom: 14,
  },
  coursePreview: {
    width: 145,
    backgroundColor: theme.colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 14,
    marginRight: 10,
  },
  coursePreviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  coursePreviewTitle: {
    fontSize: 12.5,
    fontWeight: '700',
    color: theme.colors.text,
    marginTop: 8,
    lineHeight: 16,
  },
  coursePreviewMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
  },
  coursePreviewLessons: {
    fontSize: 10,
    color: theme.colors.textTertiary,
  },
  leaderCard: {
    backgroundColor: theme.colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 16,
    marginBottom: 16,
    marginTop: 4,
  },
  leaderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  leaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 6,
  },
  leaderBorder: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderLight,
  },
  leaderRank: {
    width: 20,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '800',
  },
  leaderName: {
    flex: 1,
    fontSize: 12.5,
    fontWeight: '600',
    color: theme.colors.text,
  },
  leaderXP: {
    fontSize: 12.5,
    fontWeight: '700',
    color: theme.colors.accent,
  },
});
