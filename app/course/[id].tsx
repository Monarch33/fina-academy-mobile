import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Svg, { Polyline } from 'react-native-svg';
import Finn from '../../src/components/Finn';
import Badge from '../../src/components/Badge';
import SocialProof from '../../src/components/SocialProof';
import UnitNode from '../../src/components/UnitNode';
import { theme } from '../../src/constants/theme';
import { useProgressStore } from '../../src/store/useProgressStore';
import { hapticLight } from '../../src/services/haptics';

function BackIcon() {
  return (
    <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
      <Polyline
        points="15 6 9 12 15 18"
        stroke={theme.colors.accent}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

interface CourseInfo {
  title: string;
  subtitle: string;
  color: string;
  source: string;
  xp: number;
  learners: number;
  finnEyes: 'happy' | 'dot' | 'star' | 'wink' | 'spark';
  finnMouth: 'smile' | 'open' | 'grin' | 'line' | 'ooh';
  finnAccessory: 'glasses' | 'crown' | 'band' | 'tie' | 'hat' | null;
  units: string[];
}

const COURSE_DATA: Record<string, CourseInfo> = {
  fundamentals: { title: 'Les Fondamentaux', subtitle: 'Comptabilité · Analyse · Valorisation', color: '#16A34A', source: 'Vernimmen', xp: 800, learners: 12430, finnEyes: 'dot', finnMouth: 'smile', finnAccessory: 'glasses', units: ['Le bilan comptable', 'Le compte de résultat', 'Les flux de trésorerie', 'Ratios de liquidité', 'Ratios de rentabilité', "Ratios d'endettement", "BFR et cycle d'exploitation", 'Free Cash Flow', 'Introduction au DCF', 'Valeur terminale', 'Le WACC', 'Multiples de valorisation', 'EV vs Equity Value', 'Bridge EV → Equity', 'Comparable Companies', 'Precedent Transactions', 'Football Field', 'Normalisation', 'Valorisation sectorielle', 'Sensitivity Analysis', 'Scenario Analysis', 'SOTP', 'Cas : Valoriser LVMH', 'Examen final'] },
  corporate: { title: 'Corporate Finance', subtitle: 'M&A · LBO · Restructuring', color: '#2563EB', source: 'Rosenbaum', xp: 1200, learners: 8920, finnEyes: 'dot', finnMouth: 'smile', finnAccessory: 'tie', units: ["Le marché du M&A", "Processus Buy-Side", "Processus Sell-Side", "Due diligence", "Accretion / Dilution", "Synergies", "Le LBO : principes", "Sources & Uses", "Modélisation LBO", "Structure de dette", "Cash Sweep", "LBO Returns", "Capital optimale", "Modigliani-Miller", "Trade-off theory", "Pecking order", "Dividendes", "Rachats d'actions", "Augmentation capital", "Restructuring", "Distressed debt", "Spin-offs", "IPO Process", "SPAC", "Joint Ventures", "Cas : LBO PME", "Cas : M&A cross-border", "Examen final"] },
  derivatives: { title: 'Produits Dérivés', subtitle: 'Options · Futures · Greeks', color: '#7C3AED', source: 'John C. Hull', xp: 1500, learners: 5640, finnEyes: 'dot', finnMouth: 'line', finnAccessory: null, units: ["Forwards & Futures", "Mécanismes marchés", "Couverture futures", "Taux & duration", "FRA et swaps", "Call & Put", "Propriétés options", "Spreads", "Arbres binomiaux", "Black-Scholes", "Delta", "Gamma", "Vega Theta Rho", "Vol implicite", "Delta hedging", "Portfolio insurance", "Options indices", "Options devises", "Options futures", "Barrières", "Asiatiques", "Lookback", "CDS", "CDS pricing", "CDO", "Titrisation", "VaR", "Expected Shortfall", "Monte Carlo", "Stress testing", "ISDA", "Clearing CCP", "Cas : Pricing", "Cas : Structuration", "Examen final"] },
  portfolio: { title: 'Gestion de Portefeuille', subtitle: 'Allocation · Risque · Performance', color: '#DB2777', source: 'Markowitz', xp: 1100, learners: 7810, finnEyes: 'happy', finnMouth: 'smile', finnAccessory: null, units: ["Rendement & Risque", "Mesures de risque", "Diversification", "Corrélation", "Markowitz", "Frontière efficiente", "Portefeuille tangent", "CAPM principes", "CAPM applications", "SML", "Alpha & Beta", "Fama-French", "Carhart", "Multi-facteurs", "Allocation stratégique", "Allocation tactique", "Rebalancing", "Passive vs Active", "ETF & fonds", "Attribution", "Sharpe Sortino", "Tracking Error", "Risk budgeting", "Hedge funds", "Cas : Portefeuille", "Examen final"] },
  macro: { title: 'Macroéconomie', subtitle: 'Taux · Inflation · Politique monétaire', color: '#CA8A04', source: 'Blanchard', xp: 900, learners: 9350, finnEyes: 'spark', finnMouth: 'ooh', finnAccessory: null, units: ["PIB & croissance", "Inflation", "Politique monétaire", "QE", "Forward guidance", "Courbe des taux", "Inversion", "Réels vs nominaux", "Marché FX", "PPP", "Balance paiements", "Cycles", "Indicateurs", "Émergents", "Crises histoire", "2008", "Dette européenne", "COVID", "Politique budgétaire", "Dette souveraine", "Cas : Cycle", "Examen final"] },
};

export default function CourseDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const getCompletionPercent = useProgressStore((s) => s.getCompletionPercent);
  const courseProgress = useProgressStore((s) => s.courses[id ?? '']);

  const course = COURSE_DATA[id ?? ''] ?? COURSE_DATA.fundamentals;
  const completedCount = courseProgress?.completedLessons.length ?? 0;
  const currentIndex = courseProgress?.currentLessonIndex ?? 0;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtn}
          >
            <BackIcon />
            <Text style={styles.backText}>Retour</Text>
          </TouchableOpacity>

          <View style={styles.header}>
            <View style={[styles.headerGlow, { backgroundColor: `${course.color}08` }]} />
            <Finn
              size={60}
              eyes={course.finnEyes}
              mouth={course.finnMouth}
              accessory={course.finnAccessory}
              animate
            />
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.subtitle}>{course.subtitle}</Text>
            <View style={styles.tags}>
              <Badge text={course.source} color={course.color} />
              <Badge text={`${course.xp} XP`} color={theme.colors.accent} />
              <SocialProof count={course.learners} />
            </View>
          </View>

          {/* Duolingo-style path */}
          <View style={styles.path}>
            {course.units.map((unit, i) => {
              const status =
                i < completedCount
                  ? 'done'
                  : i === currentIndex
                    ? 'current'
                    : 'locked';

              return (
                <View key={`${unit}-${i}`} style={styles.nodeWrapper}>
                  {i > 0 && (
                    <View
                      style={[
                        styles.connector,
                        {
                          backgroundColor:
                            status !== 'locked'
                              ? course.color
                              : theme.colors.border,
                          opacity: status === 'locked' ? 0.2 : 1,
                        },
                      ]}
                    />
                  )}
                  <UnitNode
                    status={status as 'done' | 'current' | 'locked'}
                    title={unit}
                    index={i}
                    color={course.color}
                    onPress={() => {
                      if (status !== 'locked') {
                        hapticLight();
                        router.push(`/course/lesson/${id}-${i}`);
                      }
                    }}
                  />
                </View>
              );
            })}
          </View>
          <View style={{ height: 40 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.bg },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 20 },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 8,
  },
  backText: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.accent,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 16,
    position: 'relative',
  },
  headerGlow: {
    position: 'absolute',
    top: 0,
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.text,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 12.5,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  path: {
    alignItems: 'center',
    paddingVertical: 6,
  },
  nodeWrapper: {
    alignItems: 'center',
  },
  connector: {
    width: 3,
    height: 20,
  },
});
