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
import Finn from '../../../src/components/Finn';
import SpeechBubble from '../../../src/components/SpeechBubble';
import Button from '../../../src/components/Button';
import XPBar from '../../../src/components/XPBar';
import { theme } from '../../../src/constants/theme';

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

// Sample lesson content for demo
const SAMPLE_LESSON = {
  title: 'Le bilan comptable',
  xp: 30,
  duration: '5 min',
  introduction:
    'Le bilan comptable est la photographie du patrimoine de l\'entreprise à un instant T. Il recense tout ce que l\'entreprise possède (actif) et tout ce qu\'elle doit (passif).',
  keyPoints: [
    'L\'actif représente les emplois : immobilisations, stocks, créances, trésorerie.',
    'Le passif représente les ressources : capitaux propres, dettes financières, dettes fournisseurs.',
    'L\'équation fondamentale : Actif = Passif (capitaux propres + dettes).',
    'Le bilan est toujours établi à la date de clôture de l\'exercice comptable.',
  ],
  explanation:
    'Le bilan est structuré en deux colonnes. À gauche, l\'actif classe les éléments par liquidité croissante : d\'abord les actifs immobilisés (incorporels, corporels, financiers), puis les actifs circulants (stocks, créances clients, disponibilités). À droite, le passif classe les éléments par exigibilité croissante : d\'abord les capitaux propres (capital social, réserves, résultat), puis les dettes à long terme et enfin les dettes à court terme.\n\nLa lecture du bilan permet d\'évaluer la solidité financière de l\'entreprise. Un actif supérieur aux dettes signifie des capitaux propres positifs — l\'entreprise est solvable. Le fonds de roulement (capitaux permanents - actif immobilisé) mesure si les investissements sont correctement financés.\n\nEn analyse financière, on distingue le bilan comptable (normes IFRS/French GAAP) du bilan financier (retraité pour l\'analyse). Les principaux retraitements concernent le crédit-bail (IFRS 16), les engagements hors bilan et la juste valeur des actifs.',
  formula: 'Actif = Capitaux Propres + Dettes\nFonds de Roulement = Capitaux Permanents - Actif Immobilisé',
  example:
    'Prenons LVMH au 31/12/2023 : Actif total = 115 Md€, dont 80 Md€ d\'actifs immobilisés (marques, goodwill, boutiques) et 35 Md€ d\'actifs circulants. Au passif : 56 Md€ de capitaux propres, 33 Md€ de dette financière nette, 26 Md€ de dettes courantes.',
  finnSays:
    'Retiens bien : le bilan, c\'est comme ta photo de profil financière. Tout ce que tu as à gauche, tout ce que tu dois à droite !',
};

export default function LessonView() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const lesson = SAMPLE_LESSON;

  return (
    <SafeAreaView style={styles.safe}>
      {/* Progress bar */}
      <View style={styles.progressWrap}>
        <XPBar progress={40} height={4} />
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtn}
          >
            <BackIcon />
            <Text style={styles.backText}>Retour</Text>
          </TouchableOpacity>

          <Text style={styles.title}>{lesson.title}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.meta}>{lesson.duration}</Text>
            <Text style={styles.meta}>·</Text>
            <Text style={styles.metaXP}>+{lesson.xp} XP</Text>
          </View>

          {/* Finn intro */}
          <View style={styles.finnRow}>
            <Finn size={36} eyes="dot" mouth="smile" accessory="glasses" />
            <SpeechBubble>{lesson.introduction}</SpeechBubble>
          </View>

          {/* Key Points */}
          <Text style={styles.sectionTitle}>Points clés</Text>
          {lesson.keyPoints.map((point, i) => (
            <View key={i} style={styles.keyPoint}>
              <View style={styles.bullet} />
              <Text style={styles.keyPointText}>{point}</Text>
            </View>
          ))}

          {/* Explanation */}
          <Text style={styles.sectionTitle}>Explication</Text>
          <Text style={styles.paragraph}>{lesson.explanation}</Text>

          {/* Formula */}
          {lesson.formula && (
            <>
              <Text style={styles.sectionTitle}>Formule</Text>
              <View style={styles.formulaBox}>
                <Text style={styles.formulaText}>{lesson.formula}</Text>
              </View>
            </>
          )}

          {/* Example */}
          {lesson.example && (
            <>
              <Text style={styles.sectionTitle}>Exemple</Text>
              <View style={styles.exampleBox}>
                <Text style={styles.paragraph}>{lesson.example}</Text>
              </View>
            </>
          )}

          {/* Finn Says */}
          <View style={styles.finnSaysRow}>
            <Finn size={32} eyes="wink" mouth="smile" />
            <View style={styles.finnSaysBubble}>
              <Text style={styles.finnSaysLabel}>Finn dit :</Text>
              <Text style={styles.finnSaysText}>{lesson.finnSays}</Text>
            </View>
          </View>

          <View style={{ height: 20 }} />
          <Button
            title="Passer au Quiz"
            onPress={() => router.push('/quiz/lesson')}
          />
          <View style={{ height: 30 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.bg },
  progressWrap: { paddingHorizontal: 20, paddingTop: 8 },
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.text,
    marginTop: 4,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 4,
    marginBottom: 16,
  },
  meta: {
    fontSize: 12,
    color: theme.colors.textTertiary,
  },
  metaXP: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.accent,
  },
  finnRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
    marginTop: 20,
    marginBottom: 10,
  },
  keyPoint: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 8,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.accent,
    marginTop: 6,
  },
  keyPointText: {
    flex: 1,
    fontSize: 13.5,
    color: theme.colors.text,
    lineHeight: 20,
  },
  paragraph: {
    fontSize: 13.5,
    color: theme.colors.text,
    lineHeight: 22,
  },
  formulaBox: {
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 16,
  },
  formulaText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.accent,
    fontFamily: 'monospace',
    lineHeight: 22,
  },
  exampleBox: {
    backgroundColor: theme.colors.accentLight,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(232,88,12,0.1)',
  },
  finnSaysRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginTop: 24,
    backgroundColor: '#FFF4ED',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(232,88,12,0.1)',
  },
  finnSaysBubble: {
    flex: 1,
  },
  finnSaysLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: theme.colors.accent,
    marginBottom: 4,
  },
  finnSaysText: {
    fontSize: 13,
    color: theme.colors.text,
    lineHeight: 20,
    fontStyle: 'italic',
  },
});
