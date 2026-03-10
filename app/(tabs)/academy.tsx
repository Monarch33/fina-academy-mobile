import React, { useState } from 'react';
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
import Finn from '../../src/components/Finn';
import CourseCard from '../../src/components/CourseCard';
import { theme } from '../../src/constants/theme';
import { useProgressStore } from '../../src/store/useProgressStore';
import { hapticLight } from '../../src/services/haptics';

type FilterType = 'all' | 'débutant' | 'intermédiaire' | 'avancé';

const FILTERS: { id: FilterType; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'débutant', label: 'Débutant' },
  { id: 'intermédiaire', label: 'Interméd.' },
  { id: 'avancé', label: 'Avancé' },
];

interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  level: string;
  lessonCount: number;
  duration: string;
  learners: number;
  chartType: 'bars' | 'line' | 'candle' | 'pie' | 'curve';
  finnEyes: 'happy' | 'dot' | 'star' | 'wink' | 'spark';
  finnMouth: 'smile' | 'open' | 'grin' | 'line' | 'ooh';
  finnAccessory: 'glasses' | 'crown' | 'band' | 'tie' | 'hat' | null;
}

const ALL_COURSES: CourseData[] = [
  { id: 'fundamentals', title: 'Les Fondamentaux', subtitle: 'Comptabilité · Analyse · Valorisation', color: '#16A34A', level: 'Débutant', lessonCount: 24, duration: '12h', learners: 12430, chartType: 'bars', finnEyes: 'dot', finnMouth: 'smile', finnAccessory: 'glasses' },
  { id: 'corporate', title: 'Corporate Finance', subtitle: 'M&A · LBO · Restructuring', color: '#2563EB', level: 'Intermédiaire', lessonCount: 28, duration: '18h', learners: 8920, chartType: 'line', finnEyes: 'dot', finnMouth: 'smile', finnAccessory: 'tie' },
  { id: 'derivatives', title: 'Produits Dérivés', subtitle: 'Options · Futures · Greeks', color: '#7C3AED', level: 'Avancé', lessonCount: 35, duration: '24h', learners: 5640, chartType: 'curve', finnEyes: 'dot', finnMouth: 'line', finnAccessory: null },
  { id: 'portfolio', title: 'Gestion de Portefeuille', subtitle: 'Allocation · Risque · Performance', color: '#DB2777', level: 'Intermédiaire', lessonCount: 26, duration: '16h', learners: 7810, chartType: 'pie', finnEyes: 'happy', finnMouth: 'smile', finnAccessory: null },
  { id: 'macro', title: 'Macroéconomie', subtitle: 'Taux · Inflation · Politique monétaire', color: '#CA8A04', level: 'Intermédiaire', lessonCount: 22, duration: '13h', learners: 9350, chartType: 'line', finnEyes: 'spark', finnMouth: 'ooh', finnAccessory: null },
  { id: 'accounting', title: 'Comptabilité IFRS', subtitle: 'Normes · Consolidation · Retraitements', color: '#0D9488', level: 'Intermédiaire', lessonCount: 20, duration: '11h', learners: 4560, chartType: 'bars', finnEyes: 'dot', finnMouth: 'smile', finnAccessory: 'glasses' },
  { id: 'fixed-income', title: 'Fixed Income', subtitle: 'Obligations · Crédit · Courbe', color: '#0891B2', level: 'Avancé', lessonCount: 24, duration: '17h', learners: 4230, chartType: 'bars', finnEyes: 'dot', finnMouth: 'smile', finnAccessory: 'hat' },
  { id: 'private-equity', title: 'Private Equity', subtitle: 'Fundraising · Deal · Value creation', color: '#7E22CE', level: 'Avancé', lessonCount: 22, duration: '15h', learners: 6780, chartType: 'bars', finnEyes: 'star', finnMouth: 'grin', finnAccessory: 'crown' },
  { id: 'venture-capital', title: 'Venture Capital', subtitle: 'Startup · Levées · Term sheets', color: '#16A34A', level: 'Intermédiaire', lessonCount: 18, duration: '10h', learners: 11200, chartType: 'line', finnEyes: 'star', finnMouth: 'open', finnAccessory: null },
  { id: 'equities', title: 'Marchés Actions', subtitle: 'Analyse fondamentale · IPO', color: '#2563EB', level: 'Intermédiaire', lessonCount: 20, duration: '12h', learners: 8120, chartType: 'candle', finnEyes: 'dot', finnMouth: 'smile', finnAccessory: null },
  { id: 'technical-analysis', title: 'Analyse Technique', subtitle: 'Charts · Patterns · Signaux', color: '#CA8A04', level: 'Débutant', lessonCount: 16, duration: '9h', learners: 14500, chartType: 'candle', finnEyes: 'wink', finnMouth: 'smile', finnAccessory: null },
  { id: 'quantitative', title: 'Finance Quantitative', subtitle: 'Stats · Modèles · Python', color: '#4F46E5', level: 'Avancé', lessonCount: 24, duration: '20h', learners: 3890, chartType: 'curve', finnEyes: 'dot', finnMouth: 'line', finnAccessory: 'glasses' },
  { id: 'esg', title: 'Finance Durable & ESG', subtitle: 'Investissement responsable', color: '#0D9488', level: 'Débutant', lessonCount: 14, duration: '7h', learners: 6420, chartType: 'pie', finnEyes: 'spark', finnMouth: 'grin', finnAccessory: null },
  { id: 'regulation', title: 'Réglementation', subtitle: 'Bâle III · MiFID II · Compliance', color: '#64748B', level: 'Intermédiaire', lessonCount: 18, duration: '10h', learners: 3210, chartType: 'bars', finnEyes: 'dot', finnMouth: 'line', finnAccessory: 'hat' },
  { id: 'real-estate', title: 'Finance Immobilière', subtitle: 'REIT · Valorisation · Financement', color: '#B45309', level: 'Intermédiaire', lessonCount: 16, duration: '10h', learners: 5670, chartType: 'bars', finnEyes: 'happy', finnMouth: 'smile', finnAccessory: null },
  { id: 'crypto', title: 'Crypto & Blockchain', subtitle: 'Bitcoin · DeFi · Tokenomics', color: '#F59E0B', level: 'Débutant', lessonCount: 16, duration: '8h', learners: 18900, chartType: 'candle', finnEyes: 'star', finnMouth: 'open', finnAccessory: null },
  { id: 'insurance', title: 'Assurance & Actuariat', subtitle: 'Solvabilité II · IFRS 17', color: '#64748B', level: 'Intermédiaire', lessonCount: 14, duration: '9h', learners: 2140, chartType: 'pie', finnEyes: 'dot', finnMouth: 'smile', finnAccessory: 'glasses' },
  { id: 'personal-finance', title: 'Finances Personnelles', subtitle: 'Épargne · Investissement · Fiscalité', color: '#16A34A', level: 'Débutant', lessonCount: 14, duration: '6h', learners: 22100, chartType: 'line', finnEyes: 'wink', finnMouth: 'smile', finnAccessory: null },
];

export default function AcademyScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState<FilterType>('all');
  const getCompletionPercent = useProgressStore((s) => s.getCompletionPercent);

  const filtered =
    filter === 'all'
      ? ALL_COURSES
      : ALL_COURSES.filter((c) =>
          c.level.toLowerCase().includes(filter)
        );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Finn size={38} eyes="star" mouth="grin" animate />
            <View>
              <Text style={styles.title}>Academy</Text>
              <Text style={styles.subtitle}>
                {ALL_COURSES.length} cours ·{' '}
                {ALL_COURSES.reduce((a, c) => a + c.lessonCount, 0)}+ leçons
              </Text>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filters}
          >
            {FILTERS.map((f) => (
              <TouchableOpacity
                key={f.id}
                onPress={() => {
                  hapticLight();
                  setFilter(f.id);
                }}
                style={[
                  styles.filterPill,
                  filter === f.id
                    ? styles.filterActive
                    : styles.filterInactive,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    {
                      color:
                        filter === f.id
                          ? '#fff'
                          : theme.colors.textSecondary,
                    },
                  ]}
                >
                  {f.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {filtered.map((c, i) => (
            <CourseCard
              key={c.id}
              title={c.title}
              subtitle={c.subtitle}
              color={c.color}
              level={c.level}
              lessonCount={c.lessonCount}
              duration={c.duration}
              learners={c.learners}
              progress={getCompletionPercent(c.id)}
              chartType={c.chartType}
              finnEyes={c.finnEyes}
              finnMouth={c.finnMouth}
              finnAccessory={c.finnAccessory}
              index={i}
              onPress={() => router.push(`/course/${c.id}`)}
            />
          ))}
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
  filters: {
    marginVertical: 12,
  },
  filterPill: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20,
    marginRight: 6,
  },
  filterActive: {
    backgroundColor: theme.colors.text,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  filterInactive: {
    backgroundColor: theme.colors.card,
    borderWidth: 1.5,
    borderColor: theme.colors.border,
  },
  filterText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
