import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import Finn from '../../src/components/Finn';
import Badge from '../../src/components/Badge';
import GlassCard from '../../src/components/GlassCard';
import { theme } from '../../src/constants/theme';
import { MOCK_LEADERBOARD } from '../../src/utils/leaderboard';

function GemIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 3h12l4 7-10 12L2 10z"
        fill="#7C3AED"
        opacity={0.08}
        stroke="#7C3AED"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function FireIcon() {
  return (
    <Svg width={10} height={10} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2c0 4-4 6-4 10a6 6 0 0012 0c0-4-3-5-4-8-1 2-3 3-4 2 1-2 0-4 0-4z"
        fill="#EF4444"
        opacity={0.8}
      />
    </Svg>
  );
}

const PODIUM = [MOCK_LEADERBOARD[1], MOCK_LEADERBOARD[0], MOCK_LEADERBOARD[2]];
const PODIUM_HEIGHTS = [85, 115, 68];
const PODIUM_COLORS = ['#94A3B8', '#CA8A04', '#CD7F32'];
const PODIUM_RANKS = ['2', '1', '3'];
const PODIUM_EYES: ('happy' | 'star' | 'wink')[] = ['happy', 'star', 'wink'];

export default function LeaderboardScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Classement</Text>

          <View style={styles.leagueBadge}>
            <GlassCard style={styles.leagueCard}>
              <View style={styles.leagueRow}>
                <GemIcon />
                <Text style={styles.leagueText}>Ligue Diamant</Text>
              </View>
            </GlassCard>
            <Text style={styles.leagueTimer}>Semaine 12 · Fin dans 3j</Text>
          </View>

          {/* Podium */}
          <View style={styles.podium}>
            {PODIUM.map((u, i) => (
              <Animated.View
                key={u.name}
                entering={FadeInDown.delay(i * 100)
                  .duration(400)
                  .springify()
                  .damping(15)}
                style={styles.podiumCol}
              >
                <View
                  style={[
                    styles.podiumAvatar,
                    {
                      width: i === 1 ? 52 : 40,
                      height: i === 1 ? 52 : 40,
                      borderColor: `${PODIUM_COLORS[i]}25`,
                      shadowColor: i === 1 ? theme.colors.accent : 'transparent',
                      shadowOpacity: i === 1 ? 0.12 : 0,
                      shadowRadius: 16,
                      shadowOffset: { width: 0, height: 4 },
                    },
                  ]}
                >
                  <Finn
                    size={i === 1 ? 40 : 30}
                    eyes={PODIUM_EYES[i]}
                    mouth="smile"
                  />
                </View>
                <Text style={styles.podiumName}>
                  {u.name.split(' ')[0]}
                </Text>
                <Text style={styles.podiumXP}>
                  {u.xp.toLocaleString()}
                </Text>
                <View
                  style={[
                    styles.podiumBar,
                    {
                      height: PODIUM_HEIGHTS[i],
                      borderColor: `${PODIUM_COLORS[i]}15`,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.podiumRank,
                      { color: PODIUM_COLORS[i] },
                    ]}
                  >
                    {PODIUM_RANKS[i]}
                  </Text>
                </View>
              </Animated.View>
            ))}
          </View>

          {/* Full List */}
          <View style={styles.listCard}>
            {MOCK_LEADERBOARD.map((u, i) => (
              <View
                key={u.name}
                style={[
                  styles.row,
                  u.isMe && styles.rowMe,
                  i < MOCK_LEADERBOARD.length - 1 && styles.rowBorder,
                ]}
              >
                <Text
                  style={[
                    styles.rank,
                    { color: u.rank <= 3 ? theme.colors.accent : theme.colors.textTertiary },
                  ]}
                >
                  {u.rank}
                </Text>
                <Finn size={22} eyes="happy" mouth="smile" />
                <View style={styles.nameCol}>
                  <View style={styles.nameRow}>
                    <Text
                      style={[
                        styles.name,
                        u.isMe && styles.nameMe,
                      ]}
                    >
                      {u.name}
                    </Text>
                    {u.isMe && (
                      <Badge text="toi" color={theme.colors.accent} />
                    )}
                  </View>
                  <View style={styles.streakRow}>
                    <FireIcon />
                    <Text style={styles.streakText}>{u.streak}j</Text>
                  </View>
                </View>
                <Text style={styles.xp}>{u.xp.toLocaleString()}</Text>
              </View>
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
    paddingVertical: 8,
  },
  leagueBadge: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  leagueCard: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 20,
  },
  leagueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  leagueText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#4338CA',
  },
  leagueTimer: {
    fontSize: 11,
    color: theme.colors.textTertiary,
    marginTop: 5,
  },
  podium: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 5,
    marginBottom: 20,
  },
  podiumCol: {
    flex: 1,
    alignItems: 'center',
  },
  podiumAvatar: {
    borderRadius: 26,
    backgroundColor: '#FFF4ED',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginBottom: 4,
  },
  podiumName: {
    fontSize: 11.5,
    fontWeight: '700',
    color: theme.colors.text,
  },
  podiumXP: {
    fontSize: 10.5,
    fontWeight: '700',
    color: theme.colors.accent,
  },
  podiumBar: {
    width: '100%',
    marginTop: 5,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderWidth: 1,
    borderBottomWidth: 0,
    alignItems: 'center',
    paddingTop: 8,
  },
  podiumRank: {
    fontSize: 18,
    fontWeight: '900',
  },
  listCard: {
    backgroundColor: theme.colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  rowMe: {
    backgroundColor: theme.colors.accentLight,
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderLight,
  },
  rank: {
    fontSize: 12.5,
    fontWeight: '800',
    width: 20,
    textAlign: 'center',
  },
  nameCol: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  name: {
    fontSize: 12.5,
    fontWeight: '600',
    color: theme.colors.text,
  },
  nameMe: {
    fontWeight: '800',
  },
  streakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginTop: 1,
  },
  streakText: {
    fontSize: 10,
    color: theme.colors.textTertiary,
  },
  xp: {
    fontSize: 12.5,
    fontWeight: '700',
    color: theme.colors.text,
  },
});
