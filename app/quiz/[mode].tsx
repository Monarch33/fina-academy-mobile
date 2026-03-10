import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Svg, { Path, Line } from 'react-native-svg';
import Finn from '../../src/components/Finn';
import SpeechBubble from '../../src/components/SpeechBubble';
import QuizOption from '../../src/components/QuizOption';
import Button from '../../src/components/Button';
import Confetti from '../../src/components/Confetti';
import { theme } from '../../src/constants/theme';
import { useQuizStore, type QuizQuestion } from '../../src/store/useQuizStore';
import { useUserStore } from '../../src/store/useUserStore';
import { hapticSuccess, hapticError } from '../../src/services/haptics';

function XIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 6L6 18M6 6l12 12"
        stroke="#A8A29E"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const ARENA_QUESTIONS: QuizQuestion[] = [
  { id: 'q1', question: 'Le Current Ratio mesure :', options: ['La liquidité à court terme', 'La rentabilité', "L'endettement", 'La croissance'], correctIndex: 0, explanation: 'Current Ratio = Actif courant / Passif courant. Mesure la capacité de payer les dettes CT.', difficulty: 'easy' },
  { id: 'q2', question: 'Principal levier de rendement dans un LBO :', options: ['Croissance CA', 'Effet de levier financier', 'Synergies de coûts', "Réduction d'impôts"], correctIndex: 1, explanation: 'La dette amplifie le rendement equity : petite variation EV → grosse variation Equity value.', difficulty: 'medium' },
  { id: 'q3', question: 'Si les taux montent, le prix des obligations :', options: ['Monte', 'Reste stable', 'Baisse', 'Dépend du coupon'], correctIndex: 2, explanation: 'Relation inverse fondamentale. Les anciennes obligations deviennent moins attractives.', difficulty: 'easy' },
  { id: 'q4', question: 'Le WACC est :', options: ['Ratio de dette', 'Coût moyen pondéré du capital', 'Rendement actionnaires', 'Spread de crédit'], correctIndex: 1, explanation: 'WACC = Ke × (E/V) + Kd(1-t) × (D/V). Taux d\'actualisation dans un DCF.', difficulty: 'easy' },
  { id: 'q5', question: 'Le Free Cash Flow part de :', options: ['Résultat net', 'EBITDA', "Chiffre d'affaires", 'Dividendes'], correctIndex: 1, explanation: 'FCF = EBITDA − Impôts cash − ΔBFR − CAPEX. Le cash réellement disponible.', difficulty: 'medium' },
  { id: 'q6', question: 'Delta d\'une option at-the-money call est environ :', options: ['0', '0.25', '0.5', '1'], correctIndex: 2, explanation: 'Pour un call ATM, le delta est proche de 0.5, signifiant que le prix de l\'option bouge d\'environ 0.50€ pour 1€ de mouvement du sous-jacent.', difficulty: 'medium' },
  { id: 'q7', question: 'Le ratio de Sharpe mesure :', options: ['Le rendement absolu', 'Le rendement ajusté du risque', 'La volatilité', 'Le beta'], correctIndex: 1, explanation: 'Sharpe = (Rp - Rf) / σp. Il mesure l\'excès de rendement par unité de risque (volatilité).', difficulty: 'easy' },
  { id: 'q8', question: 'La formule de Black-Scholes suppose :', options: ['Des dividendes continus', 'Une volatilité constante', 'Des taux variables', 'Des marchés illiquides'], correctIndex: 1, explanation: 'Les hypothèses BS incluent : vol constante, taux sans risque constant, pas de dividendes (version de base), marché continu.', difficulty: 'hard' },
  { id: 'q9', question: 'Enterprise Value (EV) = :', options: ['Market Cap + Dette Nette', 'Market Cap uniquement', 'Total Assets', 'EBITDA × Multiple'], correctIndex: 0, explanation: 'EV = Market Cap + Dette Nette (+ minoritaires + preferred - participations). Valeur de l\'ensemble de l\'entreprise.', difficulty: 'easy' },
  { id: 'q10', question: 'Le coefficient de Gini mesure :', options: ['Le risque de marché', "L'inégalité des revenus", 'La corrélation', 'Le PIB'], correctIndex: 1, explanation: 'Le coefficient de Gini (0 à 1) mesure l\'inégalité de distribution des revenus dans une population.', difficulty: 'medium' },
];

export default function QuizScreen() {
  const { mode } = useLocalSearchParams<{ mode: string }>();
  const router = useRouter();
  const quiz = useQuizStore();
  const addXP = useUserStore((s) => s.addXP);

  useEffect(() => {
    if (!quiz.isActive) {
      // Shuffle and pick questions
      const shuffled = [...ARENA_QUESTIONS].sort(() => Math.random() - 0.5);
      const count = mode === 'marathon' ? 10 : mode === 'case' ? 5 : mode === 'brain' ? 5 : 5;
      quiz.startQuiz(mode ?? 'mcq', shuffled.slice(0, count));
    }
  }, []);

  if (!quiz.isActive && !quiz.isDone) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.loading}>
          <Finn size={60} eyes="dot" mouth="smile" animate />
          <Text style={styles.loadingText}>Chargement...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Result screen
  if (quiz.isDone) {
    const accuracy = quiz.getAccuracy();
    const xpEarned = quiz.getXPEarned();

    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.resultContainer}>
          {accuracy >= 80 && <Confetti />}
          <View style={styles.resultContent}>
            {accuracy >= 80 ? (
              <Finn size={100} eyes="star" mouth="grin" animate />
            ) : accuracy >= 50 ? (
              <Finn size={100} eyes="happy" mouth="smile" />
            ) : (
              <Finn size={100} eyes="dot" mouth="ooh" blush={false} />
            )}

            <Text style={styles.scoreText}>
              {quiz.score}
              <Text style={styles.scoreTotal}>/{quiz.questions.length}</Text>
            </Text>
            <Text style={styles.resultMsg}>
              {accuracy >= 80
                ? 'Brillant ! Tu maîtrises.'
                : accuracy >= 50
                  ? 'Pas mal, continue !'
                  : 'Révise et retente !'}
            </Text>

            <View style={styles.statsRow}>
              <View style={styles.statCol}>
                <Text style={[styles.statVal, { color: theme.colors.accent }]}>
                  +{xpEarned}
                </Text>
                <Text style={styles.statLbl}>XP</Text>
              </View>
              <View style={styles.statCol}>
                <Text style={[styles.statVal, { color: theme.colors.green }]}>
                  {accuracy}%
                </Text>
                <Text style={styles.statLbl}>Précision</Text>
              </View>
            </View>

            <View style={styles.resultButtons}>
              <Button
                title="Continuer"
                onPress={() => {
                  addXP(xpEarned);
                  quiz.endQuiz();
                  router.back();
                }}
              />
              <Button
                title="Recommencer"
                variant="secondary"
                onPress={() => quiz.resetQuiz()}
                style={{ marginTop: 10 }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const question = quiz.questions[quiz.currentIndex];
  const labels = ['A', 'B', 'C', 'D'];

  const getOptionState = (i: number) => {
    if (!quiz.isConfirmed) {
      return quiz.selectedAnswer === i ? 'selected' : 'default';
    }
    if (i === question.correctIndex) return 'correct';
    if (i === quiz.selectedAnswer && i !== question.correctIndex) return 'wrong';
    return 'default';
  };

  const handleConfirm = () => {
    quiz.confirmAnswer();
    if (quiz.selectedAnswer === question.correctIndex) {
      hapticSuccess();
    } else {
      hapticError();
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.quizContainer}>
        {/* Header */}
        <View style={styles.quizHeader}>
          <TouchableOpacity
            onPress={() => {
              quiz.endQuiz();
              router.back();
            }}
          >
            <XIcon />
          </TouchableOpacity>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${(quiz.currentIndex / quiz.questions.length) * 100}%`,
                },
              ]}
            />
          </View>
          <Text style={styles.counter}>
            {quiz.currentIndex + 1}/{quiz.questions.length}
          </Text>
        </View>

        {/* Question */}
        <View style={styles.questionArea}>
          <View style={styles.questionRow}>
            {quiz.isConfirmed ? (
              quiz.selectedAnswer === question.correctIndex ? (
                <Finn size={36} eyes="star" mouth="grin" />
              ) : (
                <Finn size={36} eyes="dot" mouth="ooh" blush={false} />
              )
            ) : (
              <Finn size={36} eyes="dot" mouth="line" />
            )}
            <SpeechBubble>{question.question}</SpeechBubble>
          </View>

          <View style={styles.options}>
            {question.options.map((opt, i) => (
              <QuizOption
                key={`${question.id}-${i}`}
                label={labels[i]}
                text={opt}
                state={getOptionState(i) as 'default' | 'selected' | 'correct' | 'wrong'}
                onPress={() => quiz.selectAnswer(i)}
                index={i}
                disabled={quiz.isConfirmed}
              />
            ))}
          </View>

          {quiz.isConfirmed && (
            <View
              style={[
                styles.explanationBox,
                {
                  backgroundColor:
                    quiz.selectedAnswer === question.correctIndex
                      ? '#F0FDF4'
                      : '#FFF4ED',
                  borderColor:
                    quiz.selectedAnswer === question.correctIndex
                      ? 'rgba(22,163,74,0.15)'
                      : 'rgba(232,88,12,0.15)',
                },
              ]}
            >
              <Text
                style={[
                  styles.explanationTitle,
                  {
                    color:
                      quiz.selectedAnswer === question.correctIndex
                        ? theme.colors.green
                        : theme.colors.accent,
                  },
                ]}
              >
                {quiz.selectedAnswer === question.correctIndex
                  ? 'Correct !'
                  : 'Explication'}
              </Text>
              <Text style={styles.explanationText}>
                {question.explanation}
              </Text>
            </View>
          )}
        </View>

        {/* Bottom button */}
        <View style={styles.bottomBtn}>
          {!quiz.isConfirmed ? (
            <Button
              title="Vérifier"
              onPress={handleConfirm}
              disabled={quiz.selectedAnswer === null}
            />
          ) : (
            <Button
              title="Continuer"
              variant={
                quiz.selectedAnswer === question.correctIndex
                  ? 'success'
                  : 'primary'
              }
              onPress={() => quiz.nextQuestion()}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.bg },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  loadingText: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
  quizContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  quizHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
  },
  progressBar: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(232,88,12,0.08)',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: theme.colors.accent,
  },
  counter: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.text,
  },
  questionArea: {
    flex: 1,
    paddingTop: 8,
  },
  questionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 16,
  },
  options: {
    gap: 8,
  },
  explanationBox: {
    borderRadius: 16,
    padding: 14,
    marginTop: 14,
    borderWidth: 1,
  },
  explanationTitle: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 2,
  },
  explanationText: {
    fontSize: 12,
    color: theme.colors.text,
    lineHeight: 19,
  },
  bottomBtn: {
    paddingVertical: 16,
  },
  resultContainer: {
    flex: 1,
    position: 'relative',
  },
  resultContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    zIndex: 11,
  },
  scoreText: {
    fontSize: 40,
    fontWeight: '700',
    color: theme.colors.text,
    marginTop: 14,
  },
  scoreTotal: {
    color: theme.colors.textTertiary,
    fontSize: 24,
  },
  resultMsg: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    marginTop: 20,
  },
  statCol: {
    alignItems: 'center',
  },
  statVal: {
    fontSize: 30,
    fontWeight: '800',
  },
  statLbl: {
    fontSize: 11,
    color: theme.colors.textTertiary,
  },
  resultButtons: {
    width: '100%',
    marginTop: 28,
  },
});
